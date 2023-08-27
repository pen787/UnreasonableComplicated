let ADVANCED_QUANTUM_COMPUTER_ASSEMBLER;

MIMachineEvents.registerRecipeTypes((event) => {
	ADVANCED_QUANTUM_COMPUTER_ASSEMBLER = event
		.register("advanced_quantum_computer_assembler")
		.withFluidInputs()
		.withItemInputs()
		.withItemOutputs();
})

MIMachineEvents.registerMachines(event => {
	const aqcaHatch = event.hatchOf("item_input", "item_output", "fluid_input", "energy_input");
	const aqca = event.layeredShape("quantum_machine_casing", [
		["QQQQQQQ", "QMGGGMQ", "QGGGGGQ", "QGGGGGQ", "QGGGGGQ", "QMGGGMQ", "QQQQQQQ"],
		["QQQQQQQ", "MPPPPPM", "GP   PG", "GP F PG", "GP   PG", "MPPPPPM", "QQQQQQQ"],
		["QQQQQQQ", "GPRRRPG", "G     G", "G     G", "G     G", "GPRRRPG", "QQQQQQQ"],
		["QQQQQQQ", "GPRFRPG", "G     G", "GF   FG", "G     G", "GPRFRPG", "QQQQQQQ"],
		["QQQQQQQ", "GPRRRPG", "G     G", "G     G", "G     G", "GPRRRPG", "QQQQQQQ"],
		["QQQQQQQ", "MPPPPPM", "GP   PG", "GP F PG", "GP   PG", "MPPPPPM", "QQQQQQQ"],
		["QQQQQQQ", "QMG#GMQ", "QGGGGGQ", "QGGGGGQ", "QGGGGGQ", "QMGGGMQ", "QQQQQQQ"],
	])
		.key("Q", event.memberOfBlock('modern_industrialization:quantum_machine_casing'), aqcaHatch)
		.key("G", event.memberOfBlock('ae2:quartz_vibrant_glass'), event.noHatch())
		.key("M", event.memberOfBlock('modern_industrialization:quantum_machine_hull'), event.noHatch())
		.key("P", event.memberOfBlock('modern_industrialization:iridium_machine_casing_pipe'), event.noHatch())
		.key("R", event.memberOfBlock('modern_industrialization:plasma_handling_iridium_machine_casing'), event.noHatch())
		.key("F", event.memberOfBlock('modern_industrialization:fusion_chamber'), event.noHatch())
		.build();

	event.simpleElectricCraftingMultiBlock(
		/* GENERAL PARAMETERS */
		// English name, internal name, recipe type, multiblock shape
		"Advanced Quantum Computer Assembler", "advanced_quantum_computer_assembler", ADVANCED_QUANTUM_COMPUTER_ASSEMBLER, aqca,
		/* REI DISPLAY CONFIGURATION */
		// REI progress bar
		event.progressBar(77, 33, "arrow"),
		// REI item inputs, item outputs, fluid inputs, fluid outputs
		itemInputs => itemInputs.addSlots(25, 35, 3, 3), itemOutputs => { itemOutputs.addSlot(102, 32), itemOutputs.addSlot(102, 55), itemOutputs.addSlot(102, 75) },
		fluidInputs => { fluidInputs.addSlot(36, 90), fluidInputs.addSlot(56, 90) }, fluidOutputs => { },
		/* MODEL CONFIGUATION */
		// casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
		"quantum_machine_casing", "advanced_quantum_computer_assembler", true, false, false,
	);
})