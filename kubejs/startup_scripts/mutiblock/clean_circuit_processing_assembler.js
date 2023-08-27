let PROCESSING_CLEAN_CIRCUIT_ASSEMBLER;

MIMachineEvents.registerRecipeTypes((event) => {
	PROCESSING_CLEAN_CIRCUIT_ASSEMBLER = event.register("clean_circuit_processing_assembler")
		.withItemInputs()
		.withFluidInputs()
		.withItemOutputs();
})

MIMachineEvents.registerMachines(event => {
	const CCPAHatch = event.hatchOf("item_input", "item_output", "fluid_input", "energy_input");
	const cssmc = event.memberOfBlock('modern_industrialization:clean_stainless_steel_machine_casing');
	const tmh = event.memberOfBlock('modern_industrialization:turbo_machine_hull');
	const CCCAShapeBuilder = event.startShape('clean_stainless_steel_machine_casing');

	for (let x = -1; x <= 1; x++) {
		for (let z = 0; z <= 3; z++) {
			CCCAShapeBuilder.add(x, -1, z, tmh, CCPAHatch)
		}
	}

	CCCAShapeBuilder.add(-1, 0, 0, cssmc, event.noHatch());
	CCCAShapeBuilder.add(-1, 0, 1, cssmc, event.noHatch());
	CCCAShapeBuilder.add(-1, 0, 2, cssmc, event.noHatch());
	CCCAShapeBuilder.add(-1, 0, 3, cssmc, event.noHatch());
	CCCAShapeBuilder.add(0, 0, 3, cssmc, event.noHatch());
	CCCAShapeBuilder.add(1, 0, 0, cssmc, event.noHatch());
	CCCAShapeBuilder.add(1, 0, 1, cssmc, event.noHatch());
	CCCAShapeBuilder.add(1, 0, 2, cssmc, event.noHatch());
	CCCAShapeBuilder.add(1, 0, 3, cssmc, event.noHatch());

	for (let x = -1; x <= 1; x++) {
		for (let z = 0; z <= 3; z++) {
			CCCAShapeBuilder.add(x, 1, z, cssmc, event.noHatch())
		}
	}

	event.simpleElectricCraftingMultiBlock(
		/* GENERAL PARAMETERS */
		// English name, internal name, recipe type, multiblock shape
		"Clean Circuit Processing Assembler", "clean_circuit_processing_assembler", PROCESSING_CLEAN_CIRCUIT_ASSEMBLER, CCCAShapeBuilder.build(),
		/* REI DISPLAY CONFIGURATION */
		// REI progress bar
		event.progressBar(77, 33, "arrow"),
		// REI item inputs, item outputs, fluid inputs, fluid outputs
		itemInputs => itemInputs.addSlots(25, 35, 5, 5), itemOutputs => { itemOutputs.addSlot(102, 32), itemOutputs.addSlot(102, 55), itemOutputs.addSlot(102, 75) },
		fluidInputs => { fluidInputs.addSlot(36, 90), fluidInputs.addSlot(56, 90) }, fluidOutputs => { },
		/* MODEL CONFIGUATION */
		// casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
		"clean_stainless_steel_machine_casing", "clean_circuit_processing_assembler", true, false, false,
	);
})