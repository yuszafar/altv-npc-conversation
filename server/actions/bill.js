import * as alt from "alt-server";


alt.onRpc("checkCar", (player, args) => {

    if (player.getSyncedMeta("hasCar") === true)
        return 2;
    return 1;
})

alt.onRpc("giveCar", (player, args) => {
    const vehicle = new alt.Vehicle("alpha", -109.12088012695312, -1048.2857666015625,  27.2579345703125, 0, 0, 0);
    player.setIntoVehicle(vehicle, 1);
    player.setSyncedMeta("hasCar", true);
    return null;
})