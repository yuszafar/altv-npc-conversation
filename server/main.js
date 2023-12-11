import {JAMES_NPC} from "./data/james.js"
import {BILL_NPC} from "./data/bill.js"
import "./actions/bill.js"
import * as chat from "alt:chat";
import * as alt from "alt-server";




alt.on("playerConnect", (player) => {
    player.model = "MP_M_Freemode_01"
    player.pos = new alt.Vector3(-106.76043701171875, -1042.865966796875, 27.2579345703125);
    initNpc(player)
})

function initNpc(player) {
    alt.emitClient(player, "client::ped:create", JAMES_NPC);
    alt.emitClient(player, "client::ped:create", BILL_NPC);
}