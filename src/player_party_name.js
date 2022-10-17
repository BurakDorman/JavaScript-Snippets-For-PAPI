//
var has = "%uclans_hasclan%";
var name = "%uclans_hasclan_formated%";

function formatPartyName() {
    if (has === "true") {
        return name
    } else {
        return "None"
    }
}

formatPartyName()
