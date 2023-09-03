ServerEvents.recipes(e => {
	e.recipes.modern_industrialization.centrifuge(16, 750)
		.fluidIn("modern_industrialization:air",10000)
		.fluidOut("modern_industrialization:nitrogen", 3700)
		.fluidOut("modern_industrialization:oxygen", 1000)
})