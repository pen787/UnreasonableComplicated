// priority: 500

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
	event.remove({ id: 'ad_astra:conversion/oxygen_from_water' })
	event.remove({ id: 'ad_astra:conversion/fuel_from_oil' })

	event.remove({ type: 'ad_astra:compressing' })
	event.remove({ type: 'ad_astra:fuel_refinery' })
	event.remove({ output: 'ad_astra:compressor' })
	event.remove({ output: 'ad_astra:fuel_refinery' })
	event.remove({ input: Item.of('ad_astra:hammer') })
	event.remove({ output: Item.of('ad_astra:hammer') })

	event.remove({ output: 'ad_astra:iron_rod' })

	event.shapeless('notreepunching:plant_fiber',['farmersdelight:straw'])
	event.shapeless('farmersdelight:straw',['notreepunching:plant_fiber'])

})

ServerEvents.tags("item",event => {
	event.get("c:tools/knives").add('notreepunching:flint_knife')
	event.get("c:tools/knives").add('notreepunching:iron_knife')
	event.get("c:tools/knives").add('notreepunching:gold_knife')
	event.get("c:tools/knives").add('notreepunching:diamond_knife')
	event.get("c:tools/knives").add('notreepunching:netherite_knife')
})

LootJS.modifiers(event => {
    event.addBlockLootModifier('#forge:ores').modifyLoot('#forge:raw_materials', item => {
        const replacement = AlmostUnified.getReplacementForItem(item);
        if (replacement.isEmpty()) {
            return item;
        }
        replacement.setCount(item.getCount());
        return replacement;
    });
});
