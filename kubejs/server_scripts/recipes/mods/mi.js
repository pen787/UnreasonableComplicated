ServerEvents.recipes(e => {
	e.recipes.create.milling('#c:brick_dusts', 'minecraft:brick')
	e.shapeless('#c:brick_dusts', ['#notreepunching:loose_rocks', 'minecraft:brick'])

	e.campfireCooking('modern_industrialization:fire_clay_brick','#c:fire_clay_dusts')

	e.replaceInput({ output: "modern_industrialization:analog_circuit" }, "modern_industrialization:copper_wire", 'modern_industrialization:red_alloy_cable')

	
})
