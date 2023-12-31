// go make recipe at process_chain in server script folder

MIMaterialEvents.addMaterials(event => {
	event.createMaterial("Pig Iron", "pig_iron", 0x222222, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average") // hardness controls the speed of some recipes, can be "soft", "average", "hard", "very_hard" (default is "average")
				.materialSet("metallic") // controls the texture set used by the material, can be "metallic", "shiny", "stone", "dull" (default is "metallic")
				.addParts("ingot", "nugget", "dust","tiny_dust")
				.block("iron")
				.defaultRecipes()
				.forgeHammerRecipes()
		});

	event.createMaterial("Wrought Iron", "wrought_iron", 0xffcc99, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average") // hardness controls the speed of some recipes, can be "soft", "average", "hard", "very_hard" (default is "average")
				.materialSet("metallic") // controls the texture set used by the material, can be "metallic", "shiny", "stone", "dull" (default is "metallic")
				.addParts("ingot", "nugget", "dust", "tiny_dust")
				.block("iron")
				.defaultRecipes()
				.forgeHammerRecipes()
		});

	event.createMaterial("Low purity Iron", "low_purity_iron", 0x808080, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average") // hardness controls the speed of some recipes, can be "soft", "average", "hard", "very_hard" (default is "average")
				.materialSet("metallic") // controls the texture set used by the material, can be "metallic", "shiny", "stone", "dull" (default is "metallic")
				.addParts("dust","tiny_dust")
				.defaultRecipes()
		});

	event.createMaterial("Flux", "flux", 0xf2f2f2, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("soft") // hardness controls the speed of some recipes, can be "soft", "average", "hard", "very_hard" (default is "average")
				.materialSet("dull") // controls the texture set used by the material, can be "metallic", "shiny", "stone", "dull" (default is "metallic")
				.addParts("dust","tiny_dust")
		});
	
	event.createMaterial("Iron and Flux", "iron_flux", 0xf0f0f0, // english name, internal name, and material color in hex
		builder => {
			builder
				.materialSet("dull") // controls the texture set used by the material, can be "metallic", "shiny", "stone", "dull" (default is "metallic")
				.addParts("dust","tiny_dust")
		});
})

MIRegistrationEvents.registerFluids(event => {

})