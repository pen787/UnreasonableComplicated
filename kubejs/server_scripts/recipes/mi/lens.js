ServerEvents.recipes(e => {
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
})