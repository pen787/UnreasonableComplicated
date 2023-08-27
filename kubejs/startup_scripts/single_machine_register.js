// priority: 200

MIMachineEvents.registerCasings((event) => {
	event.register("brick_casing");
	event.register("quantum_machine_casing");
});

let CIRCUIT_ASSEMBLER;
let ROCKET_ASSEMBLER;
let LASER_MACHINE;
let FORGE_HAMMER_MACHINE;
let BLENDER_MACHINE;
let ALLOY_SMELTER;

MIMachineEvents.registerRecipeTypes((event) => {
	CIRCUIT_ASSEMBLER = event
		.register("circuit_assembler")
		.withFluidInputs()
		.withItemInputs()
		.withItemOutputs();

	ROCKET_ASSEMBLER = event
		.register("rocket_assembler")
		.withItemInputs()
		.withItemOutputs();

	LASER_MACHINE = event
		.register("laser_machine")
		.withItemInputs()
		.withItemOutputs();

	ALLOY_SMELTER = event
		.register("alloy_smelter")
		.withItemInputs()
		.withItemOutputs();

	FORGE_HAMMER_MACHINE = event
		.register("forge_hammer_machine")
		.withItemInputs()
		.withItemOutputs();

	BLENDER_MACHINE = event
		.register("blender_machine")
		.withItemInputs()
		.withItemOutputs();

	
});

MIMachineEvents.registerMachines((event) => {
	event.craftingSingleBlock(
		"Circuit Assembler",
		"circuit_assembler",
		CIRCUIT_ASSEMBLER,
		["electric"],

		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		186,
		event.progressBar(105, 45, "circuit"),
		event.efficiencyBar(48, 86),
		event.energyBar(14, 44),

		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		9,
		3,
		1,
		0,
		// Capacity for fluid slots (unused here)
		16,
		// Slot positions: items and fluids.
		// Explanation: 3x3 grid of item slots starting at position (42, 27),
		//then 1x3 grid of item slots starting at position (139, 27).
		(items) => items.addSlots(42, 27, 3, 3).addSlots(139, 27, 1, 3),
		(fluids) => fluids.addSlots(24, 63, 1, 1),

		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true,
		true,
		false
	);

	event.craftingSingleBlock(
		"Rocket Assembler",
		"rocket_assembler",
		ROCKET_ASSEMBLER,
		["electric"],

		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		186,
		event.progressBar(105, 45, "circuit"),
		event.efficiencyBar(48, 86),
		event.energyBar(14, 34),

		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		9,
		2,
		0,
		0,
		// Capacity for fluid slots (unused here)
		16,
		// Slot positions: items and fluids.
		// Explanation: 3x3 grid of item slots starting at position (42, 27),
		//then 1x3 grid of item slots starting at position (139, 27).
		(items) => items.addSlots(42, 27, 3, 3).addSlots(139, 27, 1, 2),
		(fluids) => { },

		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true,
		true,
		false
	);

	event.craftingSingleBlock(
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above),
		//list of tiers (can be bronze/steel/electric)
		"Laser Machine",
		"laser_machine",
		LASER_MACHINE,
		["electric"],

		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		186,
		event.progressBar(105, 45, "circuit"),
		event.efficiencyBar(48, 86),
		event.energyBar(14, 34),

		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2,
		1,
		0,
		0,
		// Capacity for fluid slots (unused here)
		16,
		// Slot positions: items and fluids.
		// Explanation: 3x3 grid of item slots starting at position (42, 27),
		//then 1x3 grid of item slots starting at position (139, 27).
		(items) => items.addSlots(42, 27, 2, 1).addSlots(139, 27, 1, 1),
		(fluids) => { },

		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true,
		false,
		false
	);

	event.craftingSingleBlock(
		"Alloy Smelter",
		"alloy_smelter",
		ALLOY_SMELTER,
		["bronze", "steel", "electric"],

		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		186,
		event.progressBar(105, 45, "arrow"),
		event.efficiencyBar(48, 86),
		event.energyBar(14, 34),

		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		3,
		2,
		0,
		0,
		// Capacity for fluid slots (unused here)
		16,
		// Slot positions: items and fluids.
		// Explanation: 3x3 grid of item slots starting at position (42, 27),
		//then 1x3 grid of item slots starting at position (139, 27).
		(items) => items.addSlots(42, 27, 3, 1).addSlots(139, 27, 1, 2),
		(fluids) => { },

		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true,
		false,
		false
	);

	event.craftingSingleBlock(
		"Forge Hammer",
		"forge_hammer_machine",
		FORGE_HAMMER_MACHINE,
		["bronze", "steel", "electric"],

		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		186,
		event.progressBar(105, 45, "arrow"),
		event.efficiencyBar(48, 86),
		event.energyBar(14, 34),

		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1,
		3,
		0,
		0,
		// Capacity for fluid slots (unused here)
		16,
		// Slot positions: items and fluids.
		// Explanation: 3x3 grid of item slots starting at position (42, 27),
		//then 1x3 grid of item slots starting at position (139, 27).
		(items) => items.addSlots(42, 45, 1, 1).addSlots(139, 30, 1, 3),
		(fluids) => { },

		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true,
		false,
		false
	);

	event.craftingSingleBlock(
		"Bender Machine",
		"bender_machine",
		BLENDER_MACHINE,
		["electric"],

		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		186,
		event.progressBar(105, 45, "arrow"),
		event.efficiencyBar(48, 86),
		event.energyBar(14, 34),

		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1,
		1,
		0,
		0,
		// Capacity for fluid slots (unused here)
		16,
		// Slot positions: items and fluids.
		// Explanation: 3x3 grid of item slots starting at position (42, 27),
		//then 1x3 grid of item slots starting at position (139, 27).
		(items) => items.addSlots(42, 45, 1, 1).addSlots(139, 45, 1, 1),
		(fluids) => { },

		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true,
		false,
		false
	);

});
