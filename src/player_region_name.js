// This code checks where is the user stands at and formats name of the place.
// Support for Lands plugin will be added in the future.
var p = BukkitPlayer;
var w = p.getWorld();
//var loc = p.getLocation();
//var ch = loc.getChunk();
//var area = w.getArea();
//var land = area().getName();

function nameRegion() {
    if (w.getName() === "world") {
        //if ("%lands_land_name%" !== "&8None") {
        //return "%lands_land_name%" + " = lands"
        //return ch().getArea().getName()
        //} else {
        return "Wilderness"
        //}
    } else if (w.getName() === "world_spawn") {
        if ("%worldguard_region_name%" === "inn") {
            return "Inn"
        } else if ("%worldguard_region_name%" === "blacksmith_area") {
            return "Blacksmithy"
        } else if ("%worldguard_region_name%" === "hunter_area") {
            return "Polygon"
        } else if ("%worldguard_region_name%" === "butcher_area") {
            return "Butcher Shop"
        } else if ("%worldguard_region_name%" === "portal") {
            return "Realm Portal"
        } else if ("%worldguard_region_name%" === "farmer_area") {
            return "Farmland"
        } else if ("%worldguard_region_name%" === "stonemason_area") {
            return "Stone Workshop"
        } else if ("%worldguard_region_name%" === "fisherman_area") {
            return "Pier"
        } else if ("%worldguard_region_name%" === "taming_yard") {
            return "Barnyard"
        } else if ("%worldguard_region_name%" === "taming_area") {
            return "Barn"
        } else if ("%worldguard_region_name%" === "herbalist_area") {
            return "Herb Garden"
        } else if ("%worldguard_region_name%" === "carpenter_area") {
            return "Wood Workshop"
        } else if ("%worldguard_region_name%" === "baker_area") {
            return "Bakery"
        } else if ("%worldguard_region_name%" === "enchanter_area") {
            return "Enchanting Area"
        } else if ("%worldguard_region_name%" === "center") {
            return "Center"
        } else {
            return "Unnamed"
        }
        //return "%worldguard_region_name_capitalized%"// + " = worldguard"
    } else if (w.getName() === "world_nether") {
        return "Nether"
    } else if (w.getName() === "world_the_end") {
        if ("%worldguard_region_name%" === "center") {
            return "End Center"
        } else {
            return "End Cities"
        }
    } else {
        return "%multiverse_world_alias%"// + " = multiverse"
    }
}

nameRegion();
