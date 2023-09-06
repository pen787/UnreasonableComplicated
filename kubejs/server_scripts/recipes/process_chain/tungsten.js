ServerEvents.recipes(e => {
	e.remove({type: "modern_industrialization:macerator", input: "modern_industrialization:raw_tungsten", output: "#c:tungsten_dusts"})
	e.recipes.modern_industrialization.macerator(2, 400)
		.itemIn('modern_industrialization:raw_tungsten')
		.itemOut('#c:tungstate_dusts')
		.itemOut('#c:tungstate_dusts', 0.5)
	
	e.recipes.modern_industrialization.chemical_reactor(32, 210)
		.itemIn('7x #c:tungstate_dusts')
		.fluidIn('modern_industrialization:hydrochloric_acid', 2000)
		.itemOut('7x #c:tungstic_acid_dusts')
		.itemOut('4x #c:lithium_choride_dusts')
	
	e.recipes.modern_industrialization.electrolyzer(30, 40)
		.itemIn('2x #c:lithium_choride_dusts')
		.itemOut('#c:Lithium_dusts')
		.fluidOut("modern_industrialization:chlorine", 1000)

	e.recipes.modern_industrialization.electrolyzer(32, 210)
		.itemIn('7x #c:tungstic_acid_dusts')
		.itemOut('modern_industrialization:tungsten_dust')
		.fluidOut("modern_industrialization:hydrogen",2000)
		.fluidOut("modern_industrialization:oxygen",4000)
})