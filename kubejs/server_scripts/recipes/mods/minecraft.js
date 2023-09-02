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

    //crafting table
    e.remove({id:"minecraft:crafting_table"})
    e.shaped(
        Item.of("crafting_table", 1),
        [
            "FF ",
            "WW ",
            "WW ",
        ],
        {
            W: '#minecraft:planks',
            F: '#c:bronze_ingots',
        }
    ).id("minecraft:crafting_table")

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

    //remove food smelting with furnace
    e.remove({type: "smelting", input:"#c:foods"})

    //smoker
    e.remove({output:'minecraft:smoker'})
    e.shaped('minecraft:smoker', [
        "apa", 
        "b b", 
        "rbr"
    ], {
        b: 'modern_industrialization:fire_clay_bricks',
        a: 'modern_industrialization:bronze_bolt',
        r: 'modern_industrialization:bronze_rod',
        p: '#c:bronze_plates'
    })

    //furnace
    e.remove({output:'minecraft:furnace'})
    e.shaped('minecraft:furnace', [
        "bbb", 
        "b b", 
        "bbb"
    ], {
        b: 'modern_industrialization:fire_clay_brick',
    })

    // door recipe :troll:
    e.forEachRecipe({type:"crafting_shaped",output:'#minecraft:wooden_doors'}, r => {
        const recipe_id = r.getId()
        const original_res = r.originalRecipeResult
        const json_recipe = JSON.parse(r.json.toString())

        e.remove({id: recipe_id})

        e.shaped(original_res, [
         "RWB",   
         "AWR",   
         "RWB",   
        ], {
            W: json_recipe.key['#'].item,
            A: 'modern_industrialization:iron_ring',
            B: 'modern_industrialization:iron_bolt',
            R: 'modern_industrialization:iron_rod'
        })
    })

    // trap recipe :troll:
    e.forEachRecipe({type:"crafting_shaped",output:'#minecraft:wooden_trapdoors'}, r => {
        const recipe_id = r.getId()
        const original_res = r.originalRecipeResult
        const json_recipe = JSON.parse(r.json.toString())

        e.remove({id: recipe_id})

        e.shaped(original_res, [
         "AWA",   
         "BWB",   
         "   ",   
        ], {
            W: json_recipe.key['#'].item,
            A: 'modern_industrialization:iron_ring',
            B: 'modern_industrialization:iron_bolt',
        })
    })

});
