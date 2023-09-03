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

	//cog well
	e.recipes.modern_industrialization.assembler(8, 60)
		.itemIn('create:shaft')
		.itemIn('2x #minecraft:planks')
		.itemOut('2x create:large_cogwheel')
	
	e.recipes.modern_industrialization.assembler(8, 60)
		.itemIn('create:shaft')
		.itemIn('#minecraft:planks')
		.itemOut('2x create:cogwheel')

	// shaft
	e.recipes.modern_industrialization.cutting_machine(2, 100)
		.itemIn('create:andesite_alloy')
		.fluidIn("modern_industrialization:lubricant",1)
		.itemOut('8x create:shaft')
	
	e.shaped('create:cogwheel', [
		"WWW",
		"WAW",
		"WWW",
	], {
		W: "#minecraft:planks",
		A: '#c:bronze_ingots'
	})

	e.shaped('create:hand_crank', [
		"WWA",
		"AAA",
		"WWA",
	], {
		W: "#minecraft:planks",
		A: '#c:bronze_nuggets'
	})

	e.shaped('create:millstone', [
		"CWC",
		"AWA",
		"WWW",
	], {
		W: "#minecraft:planks",
		A: '#c:bronze_ingots',
		C: 'create:cogwheel'
	})


})