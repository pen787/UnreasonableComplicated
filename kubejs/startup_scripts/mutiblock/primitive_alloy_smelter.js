let PRIMITIVE_ALLOY_SMELTER;

MIMachineEvents.registerRecipeTypes((event) => {
	PRIMITIVE_ALLOY_SMELTER = event
		.register("primitive_alloy_smelter")
		.withItemInputs()
		.withItemOutputs();
})

MIMachineEvents.registerMachines(event => {
	const PASHatch = event.hatchOf("item_input", "item_output", "fluid_input");
	const brick_member = event.memberOfBlock("minecraft:bricks");
	const PASShapeBuilder = event.startShape("brick_casing");

	//this shit give me a mental breakdown
	PASShapeBuilder.add(-1, -1, 0, brick_member, PASHatch);
	PASShapeBuilder.add(-1, -1, 1, brick_member, PASHatch);
	PASShapeBuilder.add(-1, -1, 2, brick_member, PASHatch);
	PASShapeBuilder.add(0, -1, 0, brick_member, PASHatch);
	PASShapeBuilder.add(0, -1, 1, brick_member, event.noHatch());
	PASShapeBuilder.add(0, -1, 2, brick_member, PASHatch);
	PASShapeBuilder.add(1, -1, 0, brick_member, PASHatch);
	PASShapeBuilder.add(1, -1, 1, brick_member, PASHatch);
	PASShapeBuilder.add(1, -1, 2, brick_member, PASHatch);

	for (let y = 0; y <= 1; y++) {
		PASShapeBuilder.add(-1, y, 1, brick_member, event.noHatch());
		PASShapeBuilder.add(1, y, 1, brick_member, event.noHatch());
		PASShapeBuilder.add(0, y, 2, brick_member, event.noHatch());
	}
	PASShapeBuilder.add(0, 1, 0, brick_member, event.noHatch());


	// PASShapeBuilder.add(x, -1, z, brick_member, event.noHatch());

	const PASShape = PASShapeBuilder.build();
	event.simpleSteamCraftingMultiBlock(
		/* GENERAL PARAMETERS */
		// English name, internal name, recipe type, multiblock shape
		"Primitive Alloy Smelter", "primitive_alloy_smelter", PRIMITIVE_ALLOY_SMELTER, PASShape,
		/* REI DISPLAY CONFIGURATION */
		// REI progress bar
		event.progressBar(77, 33, "arrow"),
		// REI item inputs, item outputs, fluid inputs, fluid outputs
		itemInputs => itemInputs.addSlots(56, 35, 1, 3), itemOutputs => itemOutputs.addSlot(102, 35),
		fluidInputs => { }, fluidOutputs => { },
		/* MODEL CONFIGUATION */
		// casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
		"brick_casing", "primitive_alloy_smelter", true, false, false,
		/* OPTIONAL CONFIGURATION */
		config => { }
	);
})