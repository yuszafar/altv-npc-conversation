import * as alt from "alt-server";
import {JAMES_NPC} from "./data/james.js"



alt.on("playerConnect", (player) => {
    player.model = "MP_M_Freemode_01"
    player.pos = new alt.Vector3(-55.7971, -1112.2330, 25.4358);
    initNpc()
})

function initNpc() {
    alt.emitClient(player, "client::ped:create", JAMES_NPC);
}