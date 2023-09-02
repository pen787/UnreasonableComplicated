MIMaterialEvents.addMaterials(event => {
	event.createMaterial("Red Alloy", "red_alloy", 0xff3333, // english name, internal name, and material color in hex
		builder => {
			builder
				.hardness("average")
				.materialSet("shiny")
				.addParts("ingot", "nugget", "dust", "tiny_dust", "rod", "plate", "wire", "fine_wire", "bolt")
				.block("copper")
				.cable("lv")
				.battery(700000) // add a battery with 5M EU capacity for the Portable Storage Unit
				.defaultRecipes() // add the default recipes for the material (crafting, smelting and machines)
				.forgeHammerRecipes(); // add the forge hammer recipes 
		});
})

MIRegistrationEvents.registerFluids(event => {

})