ServerEvents.recipes(e => {
	//circuit assembler recipe
	e.recipes.modern_industrialization.assembler(8, 200)
		.itemIn("modern_industrialization:electronic_circuit")
		.itemIn("modern_industrialization:basic_machine_hull")
		.itemIn("2x modern_industrialization:robot_arm")
		.itemIn("modern_industrialization:conveyor")
		.itemOut("modern_industrialization:circuit_assembler")

})