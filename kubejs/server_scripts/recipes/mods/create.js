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
		.itemOut('3x create:mechanical_arm')
})