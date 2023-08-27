let blacklistInputItem = [
	'modern_industrialization:mixed_ingot_blastproof',
	'modern_industrialization:blastproof_alloy_plate',
	'modern_industrialization:carbon_dust',
	'minecraft:diamond',
	'minecraft:lapis_lazuli',
	'minecraft:emerald',
]

function isDict(v) {
	return typeof v === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
}

ServerEvents.recipes(e => {
	//recipe for bender machine and forge machine
	e.shaped('modern_industrialization:bender_machine', [
		"MCM",
		"PHP",
		"ACA",
	], {
		M: 'modern_industrialization:motor',
		P: 'modern_industrialization:piston',
		A: 'modern_industrialization:analog_circuit',
		H: 'modern_industrialization:basic_machine_hull',
		C: 'modern_industrialization:tin_cable',
	})

	// this part of code stolen from statech modpack because i am too stupid messing with json :troll:
	let benderMachine = (input, output, eu, duration) => {
		e.custom({
			type: "modern_industrialization:blender_machine",
			eu: eu,
			duration: duration,
			item_inputs: input,
			item_outputs: output
		})
	}

	// bender machine
	e.forEachRecipe({ type: "modern_industrialization:compressor", output: [/modern_industrialization:(.*)_plate/, /modern_industrialization:(.*)_ring/] }, r => {
		const recipeJson = JSON.parse(r.json.toString());
		let can_register = true

		let eu_use = recipeJson.eu
		let duration_time = recipeJson.duration

		let new_recipe_ingredients = []
		let new_recipe_Result = []

		let item_inputs = recipeJson.item_inputs
		let item_outputs = recipeJson.item_outputs

		if (isDict(item_inputs)) item_inputs = [item_inputs];
		if (isDict(item_outputs)) item_outputs = [item_outputs];
		item_inputs.forEach((ingredient) => {

			let newIngredient = { 'amount': ingredient.amount }

			for (let input_type_index in ingredient) {
				if (input_type_index == 'item' || input_type_index == 'tag') {
					const value = ingredient[input_type_index]

					if (blacklistInputItem.includes(value)) {
						can_register = false;
						break;
					}

					newIngredient[input_type_index] = value
				}
			}
			if (!can_register) { return }

			new_recipe_ingredients.push(newIngredient)
		});

		if (!can_register) { return }
		item_outputs.forEach((output) => {

			let newOutput = { 'amount': output.amount }

			for (let output_type_index in output) {
				if (output_type_index == 'item' || output_type_index == 'tag') {
					const value = output[output_type_index]

					newOutput[output_type_index] = output[output_type_index]
				}
			}

			new_recipe_Result.push(newOutput)
		})

		benderMachine(new_recipe_ingredients, new_recipe_Result, 8, duration_time / 1.5);
	})

})