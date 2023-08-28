ServerEvents.recipes((e) => {
    e.remove({ output: "minecraft:bucket", type: "crafting_shaped" });
    e.shaped(
        Item.of("minecraft:bucket", 1), // arg 1: output
        [
            "BHB",
            " B ", // arg 2: the shape (array of strings)
            "   ",
        ],
        {
            H: "#modern_industrialization:forge_hammer_tools",
            B: "#c:iron_plates",
        }
    ).keepIngredient("#modern_industrialization:forge_hammer_tools");

    //hopper
    e.replaceInput(
        {
            output: "hopper",
            not: { type: "modern_industrialization:unpacker" },
        },
        "#c:chests",
        "#c:iron_gears"
    );
    e.replaceInput(
        { output: "hopper", type: "crafting_shaped" },
        "minecraft:iron_ingot",
        "#c:iron_plates"
    );

    //piston
    e.remove({ output: "piston", type: "crafting_shaped" });
    e.shaped(
        Item.of("minecraft:piston", 1), // arg 1: output
        [
            "WWW",
            "GRG", // arg 2: the shape (array of strings)
            "SBS",
        ],
        {
            W: "#minecraft:planks",
            G: "#c:iron_gears",
            R: "modern_industrialization:iron_rod",
            S: "#c:cobblestone",
            B: "minecraft:redstone",
        }
    );

    //from brick
    e.shaped("4x kubejs:wooden_form.empty", [" x ", " p ", " p "], {
        p: "#minecraft:planks",
        x: "#c:tools/axes",
    }).keepIngredient("#c:tools/axes");

    e.shaped("kubejs:wooden_form.brick", [" x ", " f ", "   "], {
        f: "kubejs:wooden_form.empty",
        x: "#c:tools/axes",
    }).keepIngredient("#c:tools/axes");

    //clay brick
    e.shapeless("notreepunching:clay_brick", [
        "kubejs:wooden_form.brick",
        "minecraft:clay_ball",
    ]).keepIngredient("kubejs:wooden_form.brick");
    e.shapeless("8x notreepunching:clay_brick", [
        "minecraft:clay_ball",
        "minecraft:clay_ball",
        "minecraft:clay_ball",
        "minecraft:clay_ball",
        "kubejs:wooden_form.brick",
        "minecraft:clay_ball",
        "minecraft:clay_ball",
        "minecraft:clay_ball",
        "minecraft:clay_ball",
    ]).keepIngredient("kubejs:wooden_form.brick");
});
