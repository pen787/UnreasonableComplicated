// priority: 500

let MI = (id) => "modern_industrialization:" + id;
let MC = (id) => "minecraft:" + id;
let CE = (id) => "create:" + id;
let KJS = (id) => "kubejs:" + id;

ServerEvents.recipes(e => {

})

ServerEvents.tags("item", (event) => {
	//blacklist modern_industrialization:replicator_blacklist
	event.get("modern_industrialization:lens").add(/kubejs:(.*)_len/)
	event.get("modern_industrialization:lens").remove('kubejs:quantumeye_len')
});
