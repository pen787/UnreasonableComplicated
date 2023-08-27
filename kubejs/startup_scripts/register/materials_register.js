// priority: 99

MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Zinc", "zinc", 0xbac4c8,
        builder => {
            builder
                .hardness("soft")
                .materialSet("shiny")
                .addParts("ingot", "nugget", "dust", "tiny_dust", "rod", "gear", "ring", "blade", "rotor", "coil", "plate", "bolt", "large_plate")
                .block("copper")
                .ore({
                    "generate": false,
                    "ore_set": "copper",
                    "vein_size": 8,
                    "veins_per_chunk": 8,
                    "max_y": 64,
                })
                .rawMetal("copper")
                .defaultRecipes()
                .forgeHammerRecipes();
        });

    event.createMaterial("Brass", "brass", 0xb8a41f, (b) => {
        b.materialSet("shiny")
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
            .defaultRecipes()
            .forgeHammerRecipes();
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
