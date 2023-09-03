ServerEvents.recipes(e => {
	e.recipes.modern_industrialization.air_collector(16, 300)
		.itemIn('modern_industrialization:aluminum_rotor', 0.05)
		.fluidOut("modern_industrialization:air", 10000)

	e.shaped('modern_industrialization:air_collector',
		[
			"PRP",
			"AHA",
			"FEF",
		],
		{
			P: "modern_industrialization:pump",
			R: "modern_industrialization:aluminum_rotor",
			A: "modern_industrialization:aluminum_plate",
			H: "modern_industrialization:basic_machine_hull",
			E: "modern_industrialization:electronic_circuit",
			F: "minecraft:iron_bars",
		})
})