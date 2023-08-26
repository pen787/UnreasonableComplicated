// priority: 500

let MI = (id) => "modern_industrialization:" + id;
let MC = (id) => "minecraft:" + id;
let CE = (id) => "create:" + id;
let KJS = (id) => "kubejs:" + id;

function isDict(v) {
	return typeof v === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
}

ServerEvents.recipes(e => {


	//recipe for create precision_mechanism
	e.recipes.modern_industrialization.assembler(8, 150)
		.itemIn('modern_industrialization:gold_plate')
		.itemIn('3x modern_industrialization:bronze_gear')
		.itemIn('5x modern_industrialization:steel_bolt')
		.fluidIn('modern_industrialization:soldering_alloy', 50)
		.itemOut('2x create:precision_mechanism')

	// now for arm
	e.recipes.modern_industrialization.assembler(8, 150)
		.itemIn('modern_industrialization:analog_circuit')
		.itemIn('modern_industrialization:steel_gear')
		.itemIn('2x create:brass_sheet')
		.itemIn('create:brass_casing')
		.itemIn('create:precision_mechanism')
		.itemOut('create:mechanical_arm')
		.itemOut('create:mechanical_arm', 0.3)

	//circuit assembler recipe
	e.recipes.modern_industrialization.assembler(8, 200)
		.itemIn("modern_industrialization:electronic_circuit")
		.itemIn("modern_industrialization:basic_machine_hull")
		.itemIn("2x modern_industrialization:robot_arm")
		.itemIn("modern_industrialization:conveyor")
		.itemOut("modern_industrialization:circuit_assembler")

	//better electonic circuit
	e.recipes.modern_industrialization.circuit_assembler(16, 300)
		.itemIn("3x modern_industrialization:copper_wire", 0.5)
		.itemIn("3x modern_industrialization:analog_circuit")
		.itemIn("2x modern_industrialization:diode")
		.itemIn("2x modern_industrialization:transistor")
		.itemIn("modern_industrialization:electronic_circuit_board")
		.fluidIn("modern_industrialization:soldering_alloy", 50)
		.itemOut("modern_industrialization:electronic_circuit")
		.itemOut("modern_industrialization:electronic_circuit", 0.15)

	//other
	e.recipes.modern_industrialization.circuit_assembler(16, 300)
		.itemIn("3x modern_industrialization:copper_wire", 0.5)
		.itemIn("3x kubejs:plate.integrated_logic_circuit")
		.itemIn("2x modern_industrialization:diode")
		.itemIn("2x modern_industrialization:transistor")
		.itemIn("modern_industrialization:electronic_circuit_board")
		.fluidIn("modern_industrialization:soldering_alloy", 50)
		.itemOut("2x modern_industrialization:electronic_circuit")

	//harder Digital circuit
	e.remove({ output: 'modern_industrialization:digital_circuit', type: MI("assembler") })
	e.recipes.modern_industrialization.circuit_assembler(32, 300)
		.itemIn("modern_industrialization:or_gate")
		.itemIn("modern_industrialization:and_gate")
		.itemIn("2x modern_industrialization:not_gate")
		.itemIn("4x modern_industrialization:electronic_circuit")
		.itemIn("modern_industrialization:digital_circuit_board")
		.fluidIn("modern_industrialization:soldering_alloy", 50)
		.itemOut("modern_industrialization:digital_circuit")

	e.recipes.modern_industrialization.clean_circuit_processing_assembler(40, 500)
		.itemIn("modern_industrialization:or_gate")
		.itemIn('modern_industrialization:and_gate')
		.itemIn("2x modern_industrialization:not_gate")
		.itemIn("4x modern_industrialization:electronic_circuit")
		.itemIn("modern_industrialization:digital_circuit_board")
		.fluidIn('modern_industrialization:soldering_alloy', 100)
		.itemOut("2x modern_industrialization:digital_circuit")

	//harder 'modern_industrialization:processing_unit'
	e.remove({
		id: "modern_industrialization:assembler_generated/electric_age/circuit/craft/processing_unit",
	});
	e.recipes.modern_industrialization.clean_circuit_processing_assembler(64, 750)
		.itemIn("modern_industrialization:arithmetic_logic_unit")
		.itemIn("modern_industrialization:processing_unit_board")
		.itemIn("modern_industrialization:memory_management_unit")
		.itemIn("2x modern_industrialization:random_access_memory")
		.itemIn("4x modern_industrialization:digital_circuit")
		.fluidIn('modern_industrialization:soldering_alloy', 100)
		.itemOut("modern_industrialization:processing_unit")
		.itemOut("modern_industrialization:processing_unit", 0.05)

	//harder 'modern_industrialization:quantum_circuit'
	e.remove({
		type: MI("assembler"),
		output: "modern_industrialization:quantum_circuit",
	});
	e.recipes.modern_industrialization.clean_circuit_processing_assembler(128, 1000)
		.itemIn("modern_industrialization:quantum_circuit_board")
		.itemIn("2x modern_industrialization:cooling_cell")
		.itemIn("2x modern_industrialization:qbit")
		.itemIn("4x modern_industrialization:processing_unit")
		.fluidIn('modern_industrialization:tritium', 150)
		.fluidIn('modern_industrialization:cryofluid', 150)
		.itemOut("modern_industrialization:quantum_circuit")

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
		P: 'create:mechanical_press',
		F: 'modern_industrialization:forge_hammer',
		H: 'modern_industrialization:bronze_machine_casing',
	})

	e.shaped('modern_industrialization:clean_circuit_processing_assembler', [
		"PCP",
		"GDG",
		"PHP"
	], {
		H: 'modern_industrialization:turbo_machine_hull',
		C: 'modern_industrialization:clean_stainless_steel_machine_casing',
		G: 'modern_industrialization:stainless_steel_gear',
		D: 'modern_industrialization:digital_circuit',
		P: 'modern_industrialization:stainless_steel_plate'
	})

	//steel forge machine
	e.smithing(
		'modern_industrialization:steel_forge_hammer_machine',  // arg 1: output
		'modern_industrialization:bronze_forge_hammer_machine', // arg 2: the item to be upgraded
		'modern_industrialization:steel_upgrade'   // arg 3: the upgrade item
	)

	//electric laser machine
	e.shaped('modern_industrialization:laser_machine', [
		"MGM",
		"CHC",
		"ACA",
	], {
		G: '#modern_industrialization:lens',
		M: 'modern_industrialization:motor',
		A: 'modern_industrialization:digital_circuit',
		H: 'modern_industrialization:advanced_machine_hull',
		C: 'modern_industrialization:tin_cable',
	})

	// make a lens
	//// white
	e.recipes.modern_industrialization.cutting_machine(8, 500)
		.itemIn('minecraft:glass_pane')
		.fluidIn('modern_industrialization:lubricant', 200)
		.itemOut('2x kubejs:white_len')

	const lens_color = [
		['kubejs:red_len', 'minecraft:red_dye'],
		['kubejs:blue_len', 'minecraft:blue_dye'],
		['kubejs:uv_len', 'minecraft:yellow_dye'],
		['kubejs:white_len', 'minecraft:white_dye'],
	]

	lens_color.forEach(element => {
		e.recipes.modern_industrialization.chemical_reactor(8, 100)
			.itemIn('#modern_industrialization:lens')
			.itemIn(element[1])
			.itemOut(element[0])
	});

	//quantum eye
	e.recipes.modern_industrialization.chemical_reactor(8, 500)
		.itemIn('minecraft:ender_eye')
		.itemIn('kubejs:white_len')
		.fluidIn('modern_industrialization:tritium', 150)
		.itemOut('kubejs:quantumeye_len', 0.95)

	// convert wafer to that wafer lol
	const lens_for_wafer = [
		{ len: 'kubejs:white_len', wafer: 'kubejs:wafer.integrated_logic_circuit', plate: 'kubejs:plate.integrated_logic_circuit', eu: 40 },
		{ len: 'kubejs:uv_len', wafer: 'kubejs:wafer.random_access_memory', plate: 'kubejs:plate.random_access_memory', eu: 40 },
		{ len: 'kubejs:red_len', wafer: 'kubejs:wafer.controll_memory_chip', plate: 'kubejs:plate.controll_memory_chip', eu: 40 },
		{ len: 'kubejs:blue_len', wafer: 'kubejs:wafer.central_processing_unit', plate: 'kubejs:plate.central_processing_unit', eu: 40 },
		{ len: 'kubejs:quantumeye_len', wafer: 'kubejs:wafer.qbit', plate: 'kubejs:plate.qbit', eu: 64 },
	]

	lens_for_wafer.forEach(element => {
		e.recipes.modern_industrialization.laser_machine(element.eu, 500)
			.itemIn('modern_industrialization:silicon_wafer')
			.itemIn(element.len, 0)
			.itemOut(element.wafer)

		e.recipes.modern_industrialization.cutting_machine(8, 250)
			.itemIn(element.wafer)
			.fluidIn('modern_industrialization:lubricant', 100)
			.itemOut('4x ' + element.plate)
	});

	//place circuit component using plate circuit silicion thing
	//// ram plate
	e.replaceInput({ output: 'modern_industrialization:random_access_memory' }, 'modern_industrialization:silicon_wafer', '4x kubejs:plate.random_access_memory')

	//// memory management unit 
	e.replaceInput({ output: 'modern_industrialization:memory_management_unit' }, 'modern_industrialization:silicon_wafer', '2x kubejs:plate.controll_memory_chip')

	//qbit thing
	e.replaceInput({ output: 'modern_industrialization:qbit' }, '#c:glass_panes', '2x kubejs:plate.qbit')

	e.recipes.modern_industrialization.circuit_assembler(16, 300)
		.itemIn('#c:diamond_plates')
		.itemIn('kubejs:plate.central_processing_unit')
		.itemOut("modern_industrialization:arithmetic_logic_unit")
		.itemOut("modern_industrialization:arithmetic_logic_unit", 0.25)

	//harder item pipe and fluid pipe
	e.remove({ output: "moderndynamics:item_pipe" });
	e.remove({ output: "moderndynamics:fluid_pipe" });

	e.recipes.modern_industrialization.assembler(8, 100)
		.itemIn('2x modern_industrialization:steel_curved_plate')
		.itemIn("1x " + MC("glass"))
		.itemOut("moderndynamics:item_pipe")

	e.recipes.modern_industrialization.assembler(8, 100)
		.itemIn('2x modern_industrialization:bronze_curved_plate')
		.itemIn("1x " + MC("glass"))
		.itemOut("8x moderndynamics:fluid_pipe")

	//crushed recipe
	e.forEachRecipe({ type: MI("macerator"), output: /modern_industrialization:(.*)_crushed/ }, r => {
		let ingredients = r.originalRecipeIngredients
		let output = r.originalRecipeResult

		e.remove({ type: MI("macerator"), input: ingredients, output: output })
		e.recipes.modern_industrialization.forge_hammer_machine(2, 100)
			.itemIn(ingredients.concat())
			.itemOut(output)
	})

	// this part of code stolen from statech modpack because i am too stupid messing with json :troll:
	let blacklistInputItem = [
		'modern_industrialization:mixed_ingot_blastproof',
		'modern_industrialization:blastproof_alloy_plate',
		'modern_industrialization:carbon_dust',
		'minecraft:diamond',
		'minecraft:lapis_lazuli',
		'minecraft:emerald',
	]
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
	e.forEachRecipe({ type: "modern_industrialization:compressor", output: /modern_industrialization:(.*)_plate/ }, r => {
		const recipeJson = JSON.parse(r.json.toString());
		console.info(`Recipe : ${recipeJson}`)

		let can_register = true

		let eu_use = recipeJson.eu
		let duration_time = recipeJson.duration

		let new_recipe_ingredients = []
		let new_recipe_Result = []

		let item_inputs = recipeJson.item_inputs
		let item_outputs = recipeJson.item_outputs

		if (isDict(item_inputs)) {
			item_inputs = [item_inputs]
		}
		if (isDict(item_outputs)) {
			item_outputs = [item_outputs]
		}
		item_inputs.forEach((ingredient, ingredient_index) => {

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
		item_outputs.forEach((output, output_index) => {

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

	e.forEachRecipe({ type: "modern_industrialization:compressor", output: /modern_industrialization:(.*)_ring/ }, r => {
		const recipeJson = JSON.parse(r.json.toString());
		console.info(`Recipe : ${recipeJson}`)

		let can_register = true

		let eu_use = recipeJson.eu
		let duration_time = recipeJson.duration

		let new_recipe_ingredients = []
		let new_recipe_Result = []

		let item_inputs = recipeJson.item_inputs
		let item_outputs = recipeJson.item_outputs

		if (isDict(item_inputs)) {
			item_inputs = [item_inputs]
		}
		if (isDict(item_outputs)) {
			item_outputs = [item_outputs]
		}
		item_inputs.forEach((ingredient, ingredient_index) => {

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
		item_outputs.forEach((output, output_index) => {

			let newOutput = { 'amount': output.amount }

			for (let output_type_index in output) {
				if (output_type_index == 'item' || output_type_index == 'tag') {
					const value = output[output_type_index]

					newOutput[output_type_index] = output[output_type_index]
				}
			}
			
			new_recipe_Result.push(newOutput)
		})

		benderMachine(new_recipe_ingredients, new_recipe_Result, 8, duration_time / 2.5);
	})

})

ServerEvents.tags("item", (event) => {
	//blacklist modern_industrialization:replicator_blacklist
	event.get("modern_industrialization:lens").add(/kubejs:(.*)_len/)
	event.get("modern_industrialization:lens").remove('kubejs:quantumeye_len')
});
