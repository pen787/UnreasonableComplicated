// priority: 100

// Visit the wiki for more info - https://kubejs.com/

console.info('Register a new matirial (Kube JS)')

ItemEvents.toolTierRegistry(event => {
    event.add('flint_tool', tier => {
        tier.uses = 128
        tier.speed = 0.5
        tier.attackDamageBonus = 0.5
        tier.level = 1
        tier.enchantmentValue = 14
        tier.repairIngredient = 'minecraft:flint'
    })
})

StartupEvents.registry("item", (event) => {
    let newDrill = (id, display, color, tooltip) => {
        event
            .create(id + "_drill")
            .textureJson({
                layer0: "kubejs:item/custom_drill/drill_base",
                layer1: "kubejs:item/custom_drill/drill_head",
            })
            .color(1, color)
            .displayName(display + " Drill")
            .tooltip(tooltip);

        event
            .create(id + "_drill_head")
            .textureJson({
                layer0: "kubejs:item/custom_drill/drill_head",
            })
            .color(0, color)
            .displayName(display + " Drill Head");
    };

    let newwafer = (id, dp) => {
        event.create("wafer." + id).displayName(dp + " Wafer").texture("kubejs:item/silicon/wafer." + id)
        event.create("plate." + id).displayName(dp + " Silicon Plate").texture("kubejs:item/silicon/plate." + id)
    }

    event
        .create("incomplete_analog_circuit")
        .texture("kubejs:item/incomplete_analog_circuit")
        .displayName("incomplete analog circuit"); //)

    newDrill("moon", "Moon", "#FFD557", "Hmmm");

    newDrill("ostumium", "Ostumium", "#FF6666", "Hm!?");
    newDrill("calosisum", "Calosisum", "#E6E600", "How!?");
    newDrill("superdium", "Superdium", "#FF0000", "How it's not break!?");

    //register a tool
    event.create("mortar", "sword").displayName("Mortar").tier("flint_tool").attackDamageBaseline(0.5)

    event.create("vacuum_tube").displayName("Vacuum tube")

    //wafer and silicon plate
    newwafer("central_processing_unit", "CPU")
    newwafer("controll_memory_chip", "Controll Memory Chip")
    newwafer("integrated_logic_circuit", "Integrated Logic Chip")
    newwafer("qbit", "qbit")
    newwafer("random_access_memory", "Ram")

    //mold
    event.create("shape.empty").displayName("Empty Mold").texture("kubejs:item/mold/shape.empty")
    event.create("shape.mold.bun").displayName("Vacuum tube Mold").texture("kubejs:item/mold/shape.mold.bun")
    event.create("shape.mold.pickaxe").displayName("Pickaxe Mold").texture("kubejs:item/mold/shape.mold.pickaxe")

    //lens
    event.create("blue_len").displayName("Blue len").texture("kubejs:item/lens").color(0, 0x0000ff)
    event.create("white_len").displayName("White len").texture("kubejs:item/lens").color(0, 0xffffff)
    event.create("uv_len").displayName("UV len").texture("kubejs:item/lens").color(0, 0xffff00)
    event.create("red_len").displayName("Red len").texture("kubejs:item/lens").color(0, 0xff0000)
    event.create("quantumeye_len").displayName("Quantum Eye Len")


    event.create("wooden_form.brick").displayName("Wooden form")
    event.create("wooden_form.empty").displayName("Emty Wooden form")

    event.create("component.glass.tube").displayName("Glass tube")

    event.create("data_handler_stick").displayName("Data Handler Stick")
    event.create("data_processor_unit").displayName("Data Processor Unit")
    event.create("data_transfer_unit").displayName("Data Transfer Unit")

});

StartupEvents.registry("block", (event) => { })

MIRegistrationEvents.registerFluids(event => {

})

MIRegistrationEvents.registerFluidFuels(event => {

})
