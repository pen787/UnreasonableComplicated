ServerEvents.recipes(e => {
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
			.fluidIn('modern_industrialization:argon', 50)
			.itemOut('4x ' + element.plate)
	});

	//
	e.remove({type: "modern_industrialization:cutting_machine",input:"modern_industrialization:monocrystalline_silicon"})
	e.custom({
	  "type": "modern_industrialization:cutting_machine",
	  "eu": 16,
	  "duration": 600,
	  "item_inputs": {
		"item": "modern_industrialization:monocrystalline_silicon",
		"amount": 1
	  },
	  "fluid_inputs": {
		"fluid": "modern_industrialization:argon",
		"amount": 500
	  },
	  "item_outputs": {
		"item": "modern_industrialization:silicon_wafer",
		"amount": 32
	  }
	})

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
})