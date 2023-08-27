ServerEvents.recipes(e => {
	//electric forge machine
	e.shaped('modern_industrialization:electric_forge_hammer_machine', [
		"PMP",
		"CHC",
		"ACA",
	], {
		M: 'modern_industrialization:motor',
		P: 'modern_industrialization:piston',
		A: 'modern_industrialization:analog_circuit',
		H: 'modern_industrialization:basic_machine_hull',
		C: 'modern_industrialization:tin_cable',
	})

	//bronze forge machine
	e.shaped('modern_industrialization:bronze_forge_hammer_machine', [
		"GFG",
		"PHP",
		"CCC",
	], {
		G: 'modern_industrialization:copper_gear',
		C: '#modern_industrialization:fluid_pipes',
		P: 'minecraft:piston',
		F: 'modern_industrialization:forge_hammer',
		H: 'modern_industrialization:bronze_machine_casing',
	})

	//steel forge machine
	e.smithing(
		'modern_industrialization:steel_forge_hammer_machine',  // arg 1: output
		'modern_industrialization:bronze_forge_hammer_machine', // arg 2: the item to be upgraded
		'modern_industrialization:steel_upgrade'   // arg 3: the upgrade item
	)

	//crushed recipe
	e.forEachRecipe({ type: MI("macerator"), output: /modern_industrialization:(.*)_crushed/ }, r => {
		let ingredients = r.originalRecipeIngredients
		let output = r.originalRecipeResult

		e.remove({ type: MI("macerator"), input: ingredients, output: output })
		e.recipes.modern_industrialization.forge_hammer_machine(2, 100)
			.itemIn(ingredients.concat())
			.itemOut(output)
	})

})