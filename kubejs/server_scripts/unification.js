// priority: 500

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

})

ServerEvents.tags(event => {
	
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
