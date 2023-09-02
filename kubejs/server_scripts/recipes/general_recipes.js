// priority: 500

let MI = (id) => "modern_industrialization:" + id;
let MC = (id) => "minecraft:" + id;
let CE = (id) => "create:" + id;
let KJS = (id) => "kubejs:" + id;

ServerEvents.recipes(e => {
	let create_compat_mat = [
		"bronze",
		"iron",
		"tin",
		"copper",
	]

	let remove_plate_curved = [
		"iron"
	]
	let remove_rod_bolt = []
	let remove_dusts = []
	let remove_plate = []

	e.remove({ type: "create:pressing", output: ["#c:iron_plates", "ad_astra:iron_plate"] })
	e.remove({ type: "create:pressing", output: "#c:copper_plates" })
	create_compat_mat.forEach(material => {
		const ingot = `#c:${material}_ingots`
		const dust = `#c:${material}_dusts`
		const plate = `modern_industrialization:${material}_plate`
		const rod = `modern_industrialization:${material}_rod`
		const bolt = `modern_industrialization:${material}_bolt`
		const curved_plate = `modern_industrialization:${material}_curved_plate`
		const ring = `modern_industrialization:${material}_ring`
		
		if (!remove_dusts.includes(material)) {
			e.recipes.create.milling(dust, ingot)
		}

		if (!remove_rod_bolt.includes(material)) {
			e.recipes.create.cutting(Item.of(rod, 2), ingot)
			e.recipes.create.cutting(Item.of(bolt, 2), rod)
			e.recipes.create.pressing(ring, rod)
		}
		if (!remove_plate.includes(material)) {
			e.recipes.create.pressing(plate, ingot)
		}
		if (!remove_plate_curved.includes(material)) {
			e.recipes.create.pressing(curved_plate, plate)
			e.recipes.create.pressing(plate, curved_plate)
		}

	})
})

ServerEvents.tags("item", (event) => {
	//blacklist modern_industrialization:replicator_blacklist
	event.get("modern_industrialization:lens").add(/kubejs:(.*)_len/)
	event.get("modern_industrialization:lens").remove('kubejs:quantumeye_len')
	event.get('notreepunching:loose_rocks').add('twigs:pebble')
});
