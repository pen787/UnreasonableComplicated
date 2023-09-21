// go register material or fluid in process_chain_register

ServerEvents.recipes(e => {
	e.remove({output: '#c:aluminum_ingots', type:"modern_industrialization:blast_furnace"})

	e.recipes.modern_industrialization.aluminum_electrolytic_cell(32, 20 * 100)
		.itemIn('2x #c:coal')
		.itemIn('4x #c:bauxite_blocks')
		.itemOut('#c:aluminum_ingots')
		.fluidOut('modern_industrialization:carbon_dioxide', 500)
	
	e.recipes.modern_industrialization.aluminum_electrolytic_cell(32, 20 * 60)
		.itemIn('2x #c:coal')
		.itemIn('2x #c:aluminum_dusts')
		.itemOut('2x #c:aluminum_ingots')
		.fluidOut('modern_industrialization:carbon_dioxide', 500)
})