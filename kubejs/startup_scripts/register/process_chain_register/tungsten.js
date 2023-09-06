MIMaterialEvents.addMaterials(event => {
	event.createMaterial("Tungstate", "tungstate", 0x444444, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average")
				.materialSet("metallic")
				.addParts("dust", "tiny_dust")
				.defaultRecipes()
				.forgeHammerRecipes()
		});
	event.createMaterial("Tungstic Acid", "tungstic_acid", 0xffcc66, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average")
				.materialSet("metallic")
				.addParts("dust", "tiny_dust")
				.defaultRecipes()
				.forgeHammerRecipes()
		});

	event.createMaterial("Lithium Chloride", "lithium_choride", 0xaabbaa, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("soft")
				.materialSet("stone")
				.addParts("dust", "tiny_dust")
				.defaultRecipes()
				.forgeHammerRecipes()
		});
})

MIRegistrationEvents.registerFluids(event => {

})