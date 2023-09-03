ServerEvents.recipes(e => {
	e.recipes.create.milling('#c:brick_dusts', 'minecraft:brick')
	e.shapeless('#c:brick_dusts', ['#notreepunching:loose_rocks', 'minecraft:brick'])

	e.campfireCooking('modern_industrialization:fire_clay_brick','#c:fire_clay_dusts')

	e.replaceInput({ output: "modern_industrialization:analog_circuit" }, "modern_industrialization:copper_wire", 'modern_industrialization:red_alloy_cable')

	//salt water 
	e.custom({
		"type": "modern_industrialization:oil_drilling_rig",
		"eu": 2,
		"duration": 100,
		"item_inputs": {
			"item": 'modern_industrialization:bronze_drill',
			"amount": 1,
			"probability": 0.02
		},
		"fluid_outputs": {
			"fluid": "modern_industrialization:salt_water",
			"amount": 16000
		}
	})

	e.recipes.modern_industrialization.chemical_reactor(24, 300)
		.fluidIn("modern_industrialization:nitrogen", 1000)
		.fluidIn("modern_industrialization:hydrogen", 3000)
		.fluidOut("modern_industrialization:ammonia", 1000)

	e.recipes.modern_industrialization.mixer(24, 20)
		.fluidIn("modern_industrialization:nitric_acid", 1000)
		.fluidIn("modern_industrialization:hydrochloric_acid", 2000)
		.fluidOut("modern_industrialization:aqua_regia", 3000)

	e.remove({type: "modern_industrialization:assembler",output:"modern_industrialization:processing_unit_board"})
	e.custom({
		"type": "modern_industrialization:assembler",
		"eu": 32,
		"duration": 1200,
		"item_inputs": [
		  {
			"item": "modern_industrialization:annealed_copper_cable",
			"amount": 8
		  },
		  {
			"item": "modern_industrialization:cadmium_battery",
			"amount": 2
		  },
		  {
			"item": "modern_industrialization:digital_circuit_board",
			"amount": 1
		  },
		  {
			"tag": "c:platinum_plates",
			"amount": 2
		  },
		  {
			"tag": 'c:osmium_plates',
			"amount": 2
		  }
		],
		"fluid_inputs": [
		  {
			"fluid": "modern_industrialization:polyvinyl_chloride",
			"amount": 1500
		  }
		],
		"item_outputs": [
		  {
			"item": "modern_industrialization:processing_unit_board",
			"amount": 1
		  }
		]
	  })
	
})
