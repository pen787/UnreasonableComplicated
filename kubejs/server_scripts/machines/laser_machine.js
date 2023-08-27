ServerEvents.recipes(e => {
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
})