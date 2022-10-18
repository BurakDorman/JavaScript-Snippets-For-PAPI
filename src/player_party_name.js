// This code checks if the user is in a clan and formats output with a space.
// The placeholders come from UltimateClansV5 of UlrichCraft.
var has = "%uclans_hasclan%";
var name = "%uclans_hasclan_formated%";

function formatPartyName() {
    if (has === "true") {
        return name + " "
    } else {
        return "None" + " "
    }
}

formatPartyName()
