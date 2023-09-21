let ALU_ELEC_CELL;

MIMachineEvents.registerRecipeTypes((event) => {
	ALU_ELEC_CELL = event
		.register("aluminum_electrolytic_cell")
		.withItemInputs()
		.withFluidOutputs()
		.withItemOutputs();
})

MIMachineEvents.registerMachines(event => {
	const hatch = event.hatchOf("item_input", "item_output", "fluid_output", "energy_input");
	const multiblock = event.layeredShape("quantum_machine_casing", [
		["S     S", "S     S", "SSSSSSS", " SSSSS ", "   S   "],
		[" NAAAN ", " AAAAA ", "SNNNNNS", " NNNNN ", "  SPS  "],
		[" NAAAN ", " NCCCN ", "SN   NS", " N   N ", "  BPB  "],
		[" AAAAA ", " ACCCA ", "SNI INS", " NI IN ", "  SPS  "],
		[" NAAAN ", " NCCCN ", "SN   NS", " N   N ", "  BPB  "],
		[" NAAAN ", " AA#AA ", "SNNNNNS", " NNNNN ", "  SPS  "],
		["S     S", "S     S", "SS   SS", " SSSSS ", "   S   "],
		
	])
	.key("S", event.memberOfBlock('modern_industrialization:steel_machine_casing'), event.noHatch())
	.key("B", event.memberOfBlock('modern_industrialization:steel_machine_casing'), hatch)
	
	.key("N", event.memberOfBlock('modern_industrialization:fire_clay_bricks'), event.noHatch())
	.key("A", event.memberOfBlock('modern_industrialization:fire_clay_bricks'), hatch)
	
	.key("P", event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe'), event.noHatch())
	.key("I", event.memberOfBlock('minecraft:iron_block'), event.noHatch())
	.key("C", event.memberOfBlock('minecraft:coal_block'), event.noHatch())
	.build();

	event.simpleElectricCraftingMultiBlock(
		/* GENERAL PARAMETERS */
		// English name, internal name, recipe type, multiblock shape
		"Aluminum Electrolytic Cell", "aluminum_electrolytic_cell", ALU_ELEC_CELL, multiblock,
		/* REI DISPLAY CONFIGURATION */
		// REI progress bar
		event.progressBar(77, 33, "arrow"),
		// REI item inputs, item outputs, fluid inputs, fluid outputs
		itemInputs => itemInputs.addSlots(25, 35, 3, 1), itemOutputs => { itemOutputs.addSlot(102, 32), itemOutputs.addSlot(102, 55), itemOutputs.addSlot(102, 75) },
		fluidInputs => {}, fluidOutputs => { fluidOutputs.addSlots(135, 32, 1, 2)},
		/* MODEL CONFIGUATION */
		// casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
		"firebricks", "large_machines", true, false, false,
	);
})