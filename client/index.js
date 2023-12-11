import native from "natives";
import alt from "alt-client";
import "./npc.js"

let camera;
let cameraControlsInterval;
let view;
let curConversations;
const url = `http://resource/client/html/dial.html`;

alt.on('activateConversation', activateConversation)
function activateConversation(npc, name, title, conversations) {
    if (!view) {
        view = new alt.WebView(url);
    }
    alt.showCursor(true);
    curConversations = conversations;

    if (curConversations[0]["action"]) {
        alt.emitRpc(curConversations[0]["action"]).then((ans) => {
            if (!ans)
                deactivateConversation();
            else {
                const conversation = curConversations.find((conv) => conv.id === ans);
                view.emit("setConversation", name, title, conversation.text, conversation.answers);
            }
        });
    }

    view.emit("setConversation", name, title, curConversations[0].text, curConversations[0].answers);

    view.on("npcConversation:selectAnswer", (answer) => {


        if (answer.action) {
            alt.emitRpc(answer.action,).then((ans) => {
                if (!ans)
                    deactivateConversation();
                else {
                    const conversation = curConversations.find((conv) => conv.id === ans);
                    view.emit("setConversation", name, title, conversation.text, conversation.answers);
                }
                // alt.log(ans);
            });
        } else if (answer.goto) {
            const conversation = curConversations.find((conv) => conv.id === answer.goto);
            view.emit("setConversation", name, title, conversation.text, conversation.answers);
        } else {
            deactivateConversation();
        }

    });
    createCamera(npc);
    view.focus();
}

function deactivateConversation() {
    if (view) {
        view.unfocus();
        alt.showCursor(false);
        view.destroy();
        view = undefined;
    }
    destroyCamera();
}

export function createCamera(npc) {
    let startPosition = {...npc.pos};
    if (!camera) {

        const forwardVector = native.getEntityForwardVector(npc.scriptID);
        const forwardCameraPosition = {
            x: startPosition.x + forwardVector.x,
            y: startPosition.y + forwardVector.y,
            z: startPosition.z + 0.6,
        };

        let fov = 60;
        let startCamPosition = forwardCameraPosition;

        camera = native.createCamWithParams(
            'DEFAULT_SCRIPTED_CAMERA',
            forwardCameraPosition.x,
            forwardCameraPosition.y,
            forwardCameraPosition.z,
            0,
            0,
            0,
            fov,
            true,
            0
        );


        native.pointCamAtCoord(camera, startPosition.x, startPosition.y, startPosition.z + 0.5);
        native.setCamActive(camera, true);
        native.renderScriptCams(true, true, 1000, true, false, 0);
        cameraControlsInterval = alt.setInterval(handleControls, 0);
    }

}

export function destroyCamera() {
    if (cameraControlsInterval !== undefined || cameraControlsInterval !== null) {
        alt.clearInterval(cameraControlsInterval);
        cameraControlsInterval = null;
    }

    if (camera) {
        camera = null;
    }

    native.destroyAllCams(true);
    native.renderScriptCams(false, false, 0, false, false, 0);

    // startPosition = null;
    // startCamPosition = null;
}

function handleControls() {
    native.hideHudAndRadarThisFrame();
    native.disableAllControlActions(0);
    native.disableAllControlActions(1);

    if (native.isDisabledControlJustReleased(0, 200)) {
        deactivateConversation();
    }

}