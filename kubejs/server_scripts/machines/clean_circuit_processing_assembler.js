let MI = (id) => "modern_industrialization:" + id;
let MC = (id) => "minecraft:" + id;
let CE = (id) => "create:" + id;
let KJS = (id) => "kubejs:" + id;

ServerEvents.recipes(e =>{
	e.shaped('modern_industrialization:clean_circuit_processing_assembler', [
		"PCP",
		"GDG",
		"PHP"
	], {
		H: 'modern_industrialization:turbo_machine_hull',
		C: 'modern_industrialization:clean_stainless_steel_machine_casing',
		G: 'modern_industrialization:stainless_steel_gear',
		D: 'modern_industrialization:digital_circuit',
		P: 'modern_industrialization:stainless_steel_plate'
	})
})
