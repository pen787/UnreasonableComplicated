// go register material or fluid at process_chain_register in start up script folder

// make iron harder

ServerEvents.recipes(e => {
	function forge_hammer_recipe(inputs, outputs) {
		e.recipes.modern_industrialization.forge_hammer(8, 0)
			.itemIn(inputs)
			.itemOut(outputs)
		e.recipes.modern_industrialization.forge_hammer_machine(2, 100)
			.itemIn(inputs)
			.itemOut(outputs)
	}

	//flux
	e.shapeless('modern_industrialization:flux_dust', ['#twigs:seashells'])

	e.recipes.modern_industrialization.forge_hammer(8, 0)
		.itemIn('#create:stone_types/limestone')
		.itemOut('4x modern_industrialization:flux_dust')

	e.recipes.modern_industrialization.forge_hammer_machine(2, 100)
		.itemIn('#create:stone_types/limestone')
		.itemOut('4x modern_industrialization:flux_dust')
	
	//infi flux !?
	e.recipes.modern_industrialization.centrifuge(8, 150)
		.itemIn('8x minecraft:sand')
		.itemOut('4x modern_industrialization:flux_dust', 0.75)
	e.recipes.create.milling(Item.of('modern_industrialization:flux_dust', 4).withChance(0.3),'8x minecraft:sand').processingTime(250)
	e.recipes.modern_industrialization.macerator(2, 200)
		.itemIn('8x minecraft:sand')
		.itemOut('4x modern_industrialization:flux_dust', 0.5)

	//replace output
	e.remove({type: "modern_industrialization:forge_hammer", input:'#c:iron_ores'})
	e.replaceOutput({ input: '#c:raw_iron_ores', output: '#c:iron_dusts', not: { type: "modern_industrialization:centrifuge" } }, '#c:iron_dusts', 'modern_industrialization:low_purity_iron_dust')

	//get a low purity iron dust
	e.remove({ input: ['#minecraft:iron_ores', '#c:raw_iron_ores', 'create:crushed_raw_iron'], output: 'minecraft:iron_ingot' })
	e.shapeless('modern_industrialization:low_purity_iron_dust', ['#notreepunching:loose_rocks', '#minecraft:iron_ores'])
	e.shapeless('modern_industrialization:low_purity_iron_dust', ['#notreepunching:loose_rocks', '#c:raw_iron_ores'])
	e.shapeless('modern_industrialization:low_purity_iron_dust', ['#notreepunching:loose_rocks', 'create:crushed_raw_iron'])

	forge_hammer_recipe('#minecraft:iron_ores', 'modern_industrialization:low_purity_iron_dust')
	forge_hammer_recipe('#c:raw_iron_ores', 'modern_industrialization:low_purity_iron_dust')
	forge_hammer_recipe('create:crushed_raw_iron', 'modern_industrialization:low_purity_iron_dust')

	// e.smelting(,'modern_industrialization:low_purity_iron_dust')

	//first mixing to make a iron flux
	e.shapeless('modern_industrialization:iron_flux_dust', ['modern_industrialization:low_purity_iron_dust', 'modern_industrialization:flux_dust'])
	e.recipes.modern_industrialization.mixer(2, 50)
		.itemIn('modern_industrialization:low_purity_iron_dust')
		.itemIn('modern_industrialization:flux_dust')
		.itemOut('modern_industrialization:iron_flux_dust')

	// smelt to get pig iron
	e.smelting('modern_industrialization:pig_iron_ingot', 'modern_industrialization:iron_flux_dust', 5)

	// Hammering it to make a wrought iron
	e.shapeless('modern_industrialization:wrought_iron_ingot', ['#notreepunching:loose_rocks', 'modern_industrialization:pig_iron_ingot'])
	forge_hammer_recipe('modern_industrialization:pig_iron_ingot', 'modern_industrialization:wrought_iron_ingot')

	// lastly smelt it to iron
	e.smelting('minecraft:iron_ingot', 'modern_industrialization:wrought_iron_ingot', 5)

	// make iron ingot by a blast furnace
	e.recipes.modern_industrialization.blast_furnace(2, 100)
		.itemIn('8x modern_industrialization:low_purity_iron_dust')
		.itemIn('modern_industrialization:flux_dust')
		.itemOut('8x minecraft:iron_ingot')
	
	e.recipes.modern_industrialization.blast_furnace(2, 100)
		.itemIn('8x modern_industrialization:iron_flux_dust')
		.itemOut('8x minecraft:iron_ingot')
	
	e.recipes.modern_industrialization.blast_furnace(16, 100)
		.itemIn('8x modern_industrialization:low_purity_iron_dust')
		.fluidIn("modern_industrialization:oxygen", 100)
		.itemOut('8x minecraft:iron_ingot')
})