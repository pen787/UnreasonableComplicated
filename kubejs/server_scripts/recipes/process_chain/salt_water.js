ServerEvents.recipes(e => {
	e.recipes.modern_industrialization.mixer(2, 40)
	.itemIn("2x #c:salt_dusts")
	.fluidIn("water", 1000)
	.fluidOut("modern_industrialization:salt_water", 1000)

	e.recipes.modern_industrialization.electrolyzer(30, 400)
	.fluidIn("modern_industrialization:salt_water", 1000)
	.itemOut('3x #c:sodium_dusts')
	.fluidOut("modern_industrialization:chlorine", 1000)
	.fluidOut("modern_industrialization:hydrogen", 1000)
	
	e.recipes.modern_industrialization.centrifuge(2, 100)
	.itemOut("2x #c:salt_dusts")
	.fluidOut("water", 1000)
	.fluidIn("modern_industrialization:salt_water", 1000)
})