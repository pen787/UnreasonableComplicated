// go register material or fluid in process_chain_register

ServerEvents.recipes(e => {
	e.recipes.modern_industrialization.chemical_reactor(30, 140)
		.fluidIn("modern_industrialization:ammonia", 2000)
		.fluidIn("modern_industrialization:oxygen", 5000)
		.fluidOut("modern_industrialization:nitric_oxide", 2000)
		.fluidOut("minecraft:water", 3000)
	
	e.recipes.modern_industrialization.chemical_reactor(30, 140)
	.fluidIn("modern_industrialization:nitric_oxide", 1000)
	.fluidIn("modern_industrialization:oxygen", 1000)
	.fluidOut("modern_industrialization:nitrogen_dioxide", 1000)

	e.recipes.modern_industrialization.chemical_reactor(30, 250)
	.fluidIn("modern_industrialization:nitrogen_dioxide", 3000)
	.fluidIn("minecraft:water", 1000)
	.fluidOut("modern_industrialization:nitric_acid", 2000)
	.fluidOut("modern_industrialization:nitric_oxide", 1000)

	e.recipes.modern_industrialization.chemical_reactor(30, 250)
	.fluidIn("modern_industrialization:nitrogen_dioxide", 3000)
	.fluidIn("minecraft:water", 1000)
	.fluidIn("modern_industrialization:oxygen", 1000)
	.fluidOut("modern_industrialization:nitric_acid", 2000)

})