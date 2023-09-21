ServerEvents.recipes(e => {
	e.recipes.modern_industrialization.chemical_reactor(32, 20 * 30)
		.fluidIn("modern_industrialization:mercury",1000)
		.fluidIn("water", 10000)
		.fluidIn("modern_industrialization:chlorine", 10000)
		.fluidOut("modern_industrialization:hypochlorous_acid",10000)
	
	e.recipes.modern_industrialization.chemical_reactor(30, 20 * 8)
		.fluidIn("modern_industrialization:ammonia", 1000)
		.fluidIn("modern_industrialization:hypochlorous_acid", 1000)
		.fluidOut("water",1000)
		.fluidOut("modern_industrialization:monochloramine",1000)

	e.recipes.modern_industrialization.chemical_reactor(32, 20 * 16)
		.fluidIn("modern_industrialization:oxygen", 1000)
		.fluidIn("modern_industrialization:hydrogen", 4000)
		.itemIn("#c:carbon_dusts")
		.fluidOut("modern_industrialization:mthanol", 1000)
	
	e.recipes.modern_industrialization.chemical_reactor(42, 20 * 12)
		.fluidIn("modern_industrialization:mthanol", 2000)
		.fluidIn("modern_industrialization:ammonia", 1000)
		.fluidOut("water",1000)
		.fluidOut("modern_industrialization:dimethylamine",1000)

	e.recipes.modern_industrialization.chemical_reactor(64, 20 * 48)
		.fluidIn("modern_industrialization:monochloramine",1000)
		.fluidIn("modern_industrialization:dimethylamine",1000)
		.fluidOut("modern_industrialization:1_1_dimethylhydrazine",1000)
		.fluidOut("modern_industrialization:hydrochloric_acid",1000)
	
	e.recipes.modern_industrialization.chemical_reactor(30, 20 * 24)
		.fluidIn("modern_industrialization:ammonia",2000)
		.fluidIn("modern_industrialization:oxygen",7000)
		.fluidOut("modern_industrialization:dinitrogen_tetroxide", 1000)
		.fluidOut("water", 3000)
	
	e.recipes.modern_industrialization.mixer(16, 20 * 100)
		.fluidIn("modern_industrialization:1_1_dimethylhydrazine",1000)
		.fluidIn("modern_industrialization:dinitrogen_tetroxide", 1000)
		.fluidOut("ad_astra:fuel", 1000)

})