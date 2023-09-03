MIMaterialEvents.addMaterials(event => {
	event.createMaterial("Rare Earth", "rare_earth", 0x009933, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average")
				.materialSet("stone")
				.addParts("dust", "tiny_dust")
				.defaultRecipes() // add the default recipes for the material (crafting, smelting and machines)
				.forgeHammerRecipes(); // add the forge hammer recipes 
		});

	event.createMaterial("Osmium Tetroxide", "osmium_tetroxide", 0x669999, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average")
				.materialSet("metallic")
				.addParts("dust", "tiny_dust")
				.defaultRecipes() // add the default recipes for the material (crafting, smelting and machines)
				.forgeHammerRecipes(); // add the forge hammer recipes 
		});

	event.createMaterial("Osmium", "osmium", 0x3366cc, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average")
				.materialSet("metallic")
				.addParts("hot_ingot","ingot", "nugget", "dust", "tiny_dust", "rod", "gear", "ring", "blade", "rotor", "plate", "bolt", "large_plate")
				.defaultRecipes() // add the default recipes for the material (crafting, smelting and machines)
		});
	
		event.createMaterial("Unsmelt osmium", "unsmelt_osmium", 0x2244aa, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average")
				.materialSet("metallic")
				.addParts("dust")
				.defaultRecipes() // add the default recipes for the material (crafting, smelting and machines)
		});

	event.createMaterial("Platinum Group Sludge", "platinum_group_sludge", 0x999966, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average")
				.materialSet("stone")
				.addParts("dust", "tiny_dust")
				.defaultRecipes() // add the default recipes for the material (crafting, smelting and machines)
		});
})

MIRegistrationEvents.registerFluids(event => {
	event.register(
		"Acidic Osmium Solution", "acidic_osmium_solution",
		0xcc3300,
		"water",
		false,
		"low",
	);
	event.register(
		"Sulfuric Copper Solution", "sulfuric_copper_solution",
		0x0033cc,
		"water",
		false,
		"low",
	);
	event.register(
		"Osmium Tetroxide Liquid", "osmium_tetroxide_liquid",
		0x669999,
		"water",
		false,
		"low",
	);
})