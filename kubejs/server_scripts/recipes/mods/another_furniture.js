ServerEvents.recipes((e) => {

	// chair recipe
	e.forEachRecipe({ type: "crafting_shaped", output: '#another_furniture:chairs' }, r => {
		const recipe_id = r.getId()
		const original_res = r.originalRecipeResult
		const json_recipe = JSON.parse(r.json.toString())

		e.remove({ id: recipe_id })

		e.shaped(original_res, [
			"W  ",
			"BWB",
			"S S",
		], {
			W: json_recipe.key['#'].item,
			B: 'modern_industrialization:iron_bolt',
			S: 'minecraft:stick'
		})
	})

	// benches recipe
	e.forEachRecipe({ type: "crafting_shaped", output: '#another_furniture:benches' }, r => {
		const recipe_id = r.getId()
		const original_res = r.originalRecipeResult
		const json_recipe = JSON.parse(r.json.toString())

		e.remove({ id: recipe_id })

		e.shaped(original_res, [
			"SB ",
			"WWW",
			"SBS",
		], {
			W: json_recipe.key['S'].item,
			B: 'modern_industrialization:iron_bolt',
			S: 'minecraft:stick'
		})
	})

	// sofa recipe
	e.forEachRecipe({ type: "crafting_shaped", output: '#another_furniture:sofas' }, r => {
		const recipe_id = r.getId()
		const original_res = r.originalRecipeResult
		const json_recipe = JSON.parse(r.json.toString())

		e.remove({ id: recipe_id })

		e.shaped(original_res, [
			"KW ",
			"BWW",
			"S S",
		], {
			W: json_recipe.key['W'].item,
			B: '4x modern_industrialization:iron_bolt',
			K: '2x #minecraft:planks',
			S: 'minecraft:stick'
		}).id(recipe_id)
	})

	// shutters recipe :troll:
	e.forEachRecipe({ type: "crafting_shaped", output: '#another_furniture:shutters' }, r => {
		const recipe_id = r.getId()
		const original_res = r.originalRecipeResult
		const json_recipe = JSON.parse(r.json.toString())

		e.remove({ id: recipe_id })

		e.shaped(original_res, [
			"BA ",
			"WW ",
			"BA ",
		], {
			W: json_recipe.key['S'].item,
			A: 'modern_industrialization:iron_ring',
			B: 'modern_industrialization:iron_bolt',
		}).id(recipe_id)
	})

	// shelves recipe
	e.forEachRecipe({ type: "crafting_shaped", output: '#another_furniture:shelves' }, r => {
		const recipe_id = r.getId()
		const original_res = r.originalRecipeResult
		const json_recipe = JSON.parse(r.json.toString())

		e.remove({ id: recipe_id })

		e.shaped(original_res, [
			"WWW",
			"SB ",
			"   ",
		], {
			W: json_recipe.key['#'].item,
			B: 'modern_industrialization:iron_bolt',
			S: 'minecraft:stick'
		})
	})

	// tall stools recipe
	e.forEachRecipe({ type: "crafting_shaped", output: '#another_furniture:tall_stools' }, r => {
		const recipe_id = r.getId()
		const original_res = r.originalRecipeResult
		const json_recipe = JSON.parse(r.json.toString())

		e.remove({ id: recipe_id })

		e.shaped(original_res, [
			"KWK",
			"SBS",
			"SBS",
		], {
			W: json_recipe.key['W'].item,
			B: 'modern_industrialization:iron_bolt',
			K: '2x #minecraft:planks',
			S: 'minecraft:stick'
		})
	})

	// stools recipe
	e.forEachRecipe({ type: "crafting_shaped", output: '#another_furniture:stools' }, r => {
		const recipe_id = r.getId()
		const original_res = r.originalRecipeResult
		const json_recipe = JSON.parse(r.json.toString())

		e.remove({ id: recipe_id })

		e.shaped(original_res, [
			"KWK",
			"SBS",
			"   ",
		], {
			W: json_recipe.key['W'].item,
			B: 'modern_industrialization:iron_bolt',
			K: '2x #minecraft:planks',
			S: 'minecraft:stick'
		})
	})

	//planter_boxes
	e.forEachRecipe({ type: "crafting_shaped", output: '#another_furniture:planter_boxes' }, r => {
		const recipe_id = r.getId()
		const original_res = r.originalRecipeResult
		const json_recipe = JSON.parse(r.json.toString())

		e.remove({ id: recipe_id })

		e.shaped(original_res, [
			"SDS",
			"WWW",
			"B B",
		], {
			W: json_recipe.key['#'].item,
			D: "minecraft:dirt",
			B: 'modern_industrialization:iron_bolt',
			S: json_recipe.key['S'].item
		})
	})

});
