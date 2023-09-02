ServerEvents.recipes(e => {
	e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custom_machine:pit_kiln"}'),
		[
			"B B",
			"D D",
			"DDD",
		],
		{
			D: '#minecraft:dirt',
			B: '#chipped:bricks'
		}
	)

	e.recipes.custommachinery.custom_machine("custom_machine:pit_kiln", 500)
		.requireItem("modern_industrialization:bronze_dust")
		.produceItem('modern_industrialization:bronze_ingot')
		.requireFuel()
	
	e.recipes.custommachinery.custom_machine("custom_machine:pit_kiln", 500)
		.requireItem('modern_industrialization:raw_tin')
		.produceItem('modern_industrialization:tin_ingot')
		.requireFuel()
	
	e.recipes.custommachinery.custom_machine("custom_machine:pit_kiln", 500)
		.requireItem('minecraft:raw_copper')
		.produceItem('minecraft:copper_ingot')
		.requireFuel()
})