ServerEvents.recipes((e) => {
	//remove hand crafting
	e.remove({ output: 'modern_industrialization:electronic_circuit', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:electronic_circuit_board', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:transistor', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:diode', type: "crafting_shaped" })

	e.remove({ output: 'modern_industrialization:digital_circuit', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:quantum_circuit', type: "crafting_shaped" })

	e.remove({ output: 'modern_industrialization:processing_unit', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:and_gate', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:not_gate', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:or_gate', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:op_amp', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:memory_management_unit', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:arithmetic_logic_unit', type: "crafting_shaped" })

	e.remove({ output: 'modern_industrialization:advanced_motor', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:large_advanced_motor', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:large_advanced_pump', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:advanced_pump', type: "crafting_shaped" })

	e.remove({ output: 'modern_industrialization:highly_advanced_machine_hull', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:quantum_machine_hull', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:fusion_chamber', type: "crafting_shaped" })
	e.remove({ output: 'modern_industrialization:turbo_machine_hull', type: "crafting_shaped" })

	e.remove({ output: 'modern_industrialization:electric_blast_furnace', type: "crafting_shaped" })
	let WantnaRemove = [
		'modern_industrialization:advanced_machine_casing',
		'modern_industrialization:highly_advanced_machine_casing',
		'modern_industrialization:quantum_machine_casing',
		'modern_industrialization:turbo_machine_casing'
	]

	WantnaRemove.forEach(element => {
		e.remove({ output: element, type: "crafting_shaped" })
	});
})
