let MI = (id) => "modern_industrialization:" + id;
let MC = (id) => "minecraft:" + id;
let CE = (id) => "create:" + id;
let KJS = (id) => "kubejs:" + id;

ServerEvents.recipes(e => {
	//better electonic circuit
	e.recipes.modern_industrialization.circuit_assembler(16, 300)
		.itemIn("3x modern_industrialization:copper_wire", 0.5)
		.itemIn("3x modern_industrialization:analog_circuit")
		.itemIn("2x modern_industrialization:diode")
		.itemIn("2x modern_industrialization:transistor")
		.itemIn("modern_industrialization:electronic_circuit_board")
		.fluidIn("modern_industrialization:soldering_alloy", 50)
		.itemOut("modern_industrialization:electronic_circuit")
		.itemOut("modern_industrialization:electronic_circuit", 0.15)

	//other
	e.recipes.modern_industrialization.circuit_assembler(16, 300)
		.itemIn("3x modern_industrialization:copper_wire", 0.5)
		.itemIn("3x kubejs:plate.integrated_logic_circuit")
		.itemIn("2x modern_industrialization:diode")
		.itemIn("2x modern_industrialization:transistor")
		.itemIn("modern_industrialization:electronic_circuit_board")
		.fluidIn("modern_industrialization:soldering_alloy", 50)
		.itemOut("2x modern_industrialization:electronic_circuit")

	//harder Digital circuit
	e.remove({ output: 'modern_industrialization:digital_circuit', type: MI("assembler") })
	e.recipes.modern_industrialization.circuit_assembler(32, 300)
		.itemIn("modern_industrialization:or_gate")
		.itemIn("modern_industrialization:and_gate")
		.itemIn("2x modern_industrialization:not_gate")
		.itemIn("4x modern_industrialization:electronic_circuit")
		.itemIn("modern_industrialization:digital_circuit_board")
		.fluidIn("modern_industrialization:soldering_alloy", 50)
		.itemOut("modern_industrialization:digital_circuit")

	e.recipes.modern_industrialization.clean_circuit_processing_assembler(40, 500)
		.itemIn("modern_industrialization:or_gate")
		.itemIn('modern_industrialization:and_gate')
		.itemIn("2x modern_industrialization:not_gate")
		.itemIn("4x modern_industrialization:electronic_circuit")
		.itemIn("modern_industrialization:digital_circuit_board")
		.fluidIn('modern_industrialization:soldering_alloy', 100)
		.itemOut("2x modern_industrialization:digital_circuit")

	//harder 'modern_industrialization:processing_unit'
	e.remove({
		id: "modern_industrialization:assembler_generated/electric_age/circuit/craft/processing_unit",
	});
	e.recipes.modern_industrialization.clean_circuit_processing_assembler(64, 750)
		.itemIn("modern_industrialization:arithmetic_logic_unit")
		.itemIn("modern_industrialization:processing_unit_board")
		.itemIn("modern_industrialization:memory_management_unit")
		.itemIn("2x modern_industrialization:random_access_memory")
		.itemIn("4x modern_industrialization:digital_circuit")
		.fluidIn('modern_industrialization:soldering_alloy', 100)
		.itemOut("modern_industrialization:processing_unit")
		.itemOut("modern_industrialization:processing_unit", 0.05)

	//harder 'modern_industrialization:quantum_circuit'
	e.remove({
		type: MI("assembler"),
		output: "modern_industrialization:quantum_circuit",
	});
	e.recipes.modern_industrialization.clean_circuit_processing_assembler(128, 1000)
		.itemIn("modern_industrialization:quantum_circuit_board")
		.itemIn("2x modern_industrialization:cooling_cell")
		.itemIn("2x modern_industrialization:qbit")
		.itemIn("4x modern_industrialization:processing_unit")
		.fluidIn('modern_industrialization:tritium', 150)
		.fluidIn('modern_industrialization:cryofluid', 150)
		.itemOut("modern_industrialization:quantum_circuit")
})