// priority: 99

MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Zinc", "zinc", 0xbac4c8,
        builder => {
            builder
                .hardness("soft")
                .materialSet("shiny")
                .addParts("dust", "tiny_dust", "rod", "gear", "ring", "blade", "rotor", "coil", "plate", "bolt", "large_plate")
                .block("copper")
                .ore({
                    "generate": false,
                    "ore_set": "copper",
                    "vein_size": 8,
                    "veins_per_chunk": 8,
                    "max_y": 64,
                })
                .addExternalPart("ingot", 'create:zinc_ingot', '#c:zinc_ingots')
                .addExternalPart("nugget", 'create:zinc_nugget', '#c:zinc_nuggets')
                .rawMetal("copper")
                .defaultRecipes()
                .forgeHammerRecipes();
        });

    event.createMaterial("Brass", "brass", 0xb8a41f, (b) => {
        b.materialSet("shiny")
        b.hardness("average")
        b.addParts(
            "dust",
            "rod",
            "gear",
            "ring",
            "blade",
            "rotor",
            "bolt",
            "large_plate"
        )
            .addExternalPart("ingot", 'create:brass_ingot', '#c:brass_ingots')
            .addExternalPart("nugget", 'create:brass_nugget', '#c:brass_nuggets')
            .addExternalPart("plate", 'create:brass_sheet', '#c:brass_plates')
            .defaultRecipes()
            .forgeHammerRecipes();
    });

    event.createMaterial("Lithium", "Lithium", 0xbbbbbb, (b) => {
        b.materialSet("stone")
        b.hardness("soft")
        b.addParts(
            "dust",
            "tiny_dust",
        )
            .ore({
                "generate": false,
                "ore_set": "copper",
                "vein_size": 8,
                "veins_per_chunk": 8,
                "max_y": 64,
            })
            .defaultRecipes()
            .forgeHammerRecipes()
            .battery(14000000);
    });
});

MIMaterialEvents.modifyMaterial("silver", event => {
    event.builder
        .ore({
            "generate": false,
            "ore_set": "copper",
            "vein_size": 8,
            "veins_per_chunk": 8,
            "max_y": 64,
        })
})
