import alt from 'alt-client';
import * as native from 'natives';

let player = alt.Player.local;
export let peds = [];

alt.onServer('client::ped:create', (data) => {
    createNpc(data.model, data.position, data.heading, data.name, data.title, data.conversations)
})
alt.setInterval(drawNametag, 0);


function createNpc(model, pos, heading, name, title, conversations) {
    const npc = new alt.LocalPed(alt.hash(model), 0, pos, player.rot, false, false);
    npc.waitForSpawn(5000).then(() => {
        native.setBlockingOfNonTemporaryEvents(npc, true);
        native.taskSetBlockingOfNonTemporaryEvents(npc, true);
        native.setEntityInvincible(npc, true);
        native.setPedFleeAttributes(npc, 15, true);
        native.freezeEntityPosition(npc, true);
    });


    let data = { // Создаем форму базы данных NPC;
        ped: npc,
        name: name,
        title: title,
        pos: pos,
        conversations: conversations
    };

    peds.push(data); // Отправляем в базу нового NPC;

}


alt.on('keyup', (key) => {
    if (key == 69) {
        peds.map(value => {
            let dist = native.getDistanceBetweenCoords(value.pos.x, value.pos.y, value.pos.z, player.pos.x, player.pos.y, player.pos.z, false);
            if (dist <= 2) {
                alt.emit('activateConversation', value.ped, value.name, value.title, value.conversations);
            }
        })
    }
})


alt.on('disconnect', () => {
    peds.map(value => {
        native.deletePed(value.ped)
    });

    peds = [];
})

function drawNametag() {
    peds.map(val => {

        const pos = {...native.getPedBoneCoords(val.ped, 12844, 0, 0, 0)};
        pos.z += 1;
        const drawDistance = 30;
        let dist = native.getDistanceBetweenCoords(val.ped.pos.x, val.ped.pos.y, val.ped.pos.z, player.pos.x, player.pos.y, player.pos.z, false);

        if (dist > drawDistance) {
            return;
        }

        let scale = 1 - (0.8 * dist) / drawDistance;
        let fontSize = 0.6 * scale;

        const lineHeight = native.getRenderedCharacterHeight(fontSize, 4);
        const entity = val.ped.vehicle ? val.ped.vehicle.scriptID : val.ped.scriptID;
        const vector = native.getEntityVelocity(entity);
        const frameTime = native.getFrameTime();

        // Names
        native.setDrawOrigin(
            pos.x + vector.x * frameTime,
            pos.y + vector.y * frameTime,
            pos.z + vector.z * frameTime,
            0
        );
        native.beginTextCommandDisplayText('STRING');
        native.setTextFont(4);
        native.setTextScale(fontSize, fontSize);
        native.setTextProportional(true);
        native.setTextCentre(true);
        native.setTextColour(255, 255, 255, 255);
        native.setTextOutline();
        native.addTextComponentSubstringPlayerName(`${val.name}`);
        native.endTextCommandDisplayText(0, 0, 0);


        native.clearDrawOrigin();

    })
}

