let MI = (id) => "modern_industrialization:" + id;
let MC = (id) => "minecraft:" + id;
let CE = (id) => "create:" + id;
let KJS = (id) => "kubejs:" + id;

ServerEvents.recipes(e => {
	//harder item pipe and fluid pipe
	e.remove({ output: "moderndynamics:item_pipe" });
	e.remove({ output: "moderndynamics:fluid_pipe" });

	e.recipes.modern_industrialization.assembler(8, 100)
		.itemIn('2x modern_industrialization:steel_curved_plate')
		.itemIn("1x " + MC("glass"))
		.itemOut("moderndynamics:item_pipe")

	e.recipes.modern_industrialization.assembler(8, 100)
		.itemIn('2x modern_industrialization:bronze_curved_plate')
		.itemIn("1x " + MC("glass"))
		.itemOut("8x moderndynamics:fluid_pipe")
})