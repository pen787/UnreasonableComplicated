MIMaterialEvents.addMaterials(event => {

})

MIRegistrationEvents.registerFluids(event => {
	event.register("Nitric Acid","nitric_acid", 0xffd220, "water", true, "low")
	event.register("Nitric Oxide","nitric_oxide", 0x0099cc, "water", true, "low")
	event.register("Nitrogen Dioxide","nitrogen_dioxide", 0xff9900, "water", true, "low")
})