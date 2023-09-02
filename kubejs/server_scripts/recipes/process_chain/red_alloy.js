ServerEvents.recipes(e => {
	e.recipes.modern_industrialization.mixer(2, 100)
		.itemIn('#c:copper_dusts')
		.itemIn('3x minecraft:redstone')
		.itemOut('#c:red_alloy_dusts')

	e.recipes.create.mixing('#c:red_alloy_dusts', ['#c:copper_dusts', '3x minecraft:redstone']).processingTime(140)
})