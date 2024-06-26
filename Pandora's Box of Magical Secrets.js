var iFileName = "PBMS";
RequiredSheetVersion("13.1.7");
SourceList["PBMS"] = {
	name : "Pandora's Box of Magical Secrets",
	abbreviation : "PBMS",
	group : "Pandora's Box of Magical Secrets",
	date : "2023/07/18",
};
//8 New Races
RaceList["caryatid"] = {
	regExpSearch : /^(?=.*\b(caryatid)\b).*$/i,
	name : "Caryatid",
	source : [["PBMS", 0]],
	plural : "Caryatids",
	size : [2, 3],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	scoresGeneric : true,
	languageProfs : ["Common", "Celestial"],
	age : "You are immortal and do not age.",
	vision : [["True Sight", 30]],
	savetxt : {
		immune : ["charmed", "exhausted", "frightened", "petrified", "poisoned", "poison damage", "form altering magic"],
	},	
	trait : "Caryatid (my creature type is Celestial)"+
		"\n \u2022 True Sight: 30 ft."+
		"\n \u2022 Marble Nature: You are immune to spells and effects that would alter your form as well as the petrified and poisoned conditions and poison damage."+
		"\n \u2022 Fixed Existence: You are immune to being Exhauted, and do not require air, food, drink, or sleep."+
		"\n \u2022 Divine Servitude: You are immune to the Charmed and Frightened Condition."+
		"\n \u2022 False Appearance: While you remain motionless you are indistinguishable from a fixed marble statue."+
		"\n \u2022 Languages: You can speak, read, and write Common and Celestial, you can also speak the language of anyone whoo looks at you within 30 ft."
};
RaceList["cecaelia"] = {
	regExpSearch : /^(?=.*\b(cecaelia)\b).*$/i,
	name : "Cecaelia",
	source : [["PBMS", 0]],
	plural : "Cecaelia",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 40, enc : 30 },
	},
	scoresGeneric : true,
	languageProfs : ["Common", "Deep Speech"],
	age : "reach adulthood by late teens and live around 800 years",
	vision : [["Blindsight", 120]],
	skills : ["Insight"],
	dmgres : ["Acid", "Wave"],
	savetxt : {
		adv_vs : ["attack rolls", "ability checks", "saving throws"],
	},	
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\btentacle\b/i,
		name : "Tentacle",
		source : [["PBMS", 0]],
		ability : 4,
		damage : [1, 6, "psychic"],
	},
	weaponsAdd : ["Tentacle"],
	trait : "Cecaelia (my creature type is Aberation)"+
		"\n \u2022 Blindsight: 120 ft."+
		"\n \u2022 Amphibious: You can breathe air and water."+
		"\n \u2022 Precognition: You have advantage on all attack rolls, ability cheicks, and saving throws."+
		"\n \u2022 An Ocean Life: You have resistance to acid and wave damage."+
		"\n \u2022 Intuitive Sense: You have proficiency in the Insight Skill."+
		"\n \u2022 Tentacles: You have a natural weapon of Tentacles that deal 1d6 + Int Psychic damage."
};
RaceList["io-spawn"] = {
	regExpSearch : /^(?=.*\b(io-spawn)\b).*$/i,
	name : "Io-Spawn",
	source : [["PBMS", 0]],
	plural : "Io-Spawn",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	scoresGeneric : true,
	languageProfs : ["Common"],
	age : "You age as the same rate as humans but live for a few decades longer.",
	dmgres : ["Psychic"],
	limfeaname : "Astral Form",
	action : "bonus action",
	usages : 1,
	recovery : "short rest",
	savetxt : {
		immune : ["charmed (astral form)", "frightened (astral form)"],
		text : ["don't require air to breathe (astral form)"],
	},	
	trait : "Io-Spawn (my creature type is Humanoid)"+
		"\n \u2022 Astral Form: As a bonus action, you transform for 1 minute or until dismissed as a bonus action, while transformed you can replace your damage types with psychic, you are immune to the charm and fright conditions and dont require air to breathe."+
		"\n \u2022 Astral Resistance: You have resistance to psychic damage."+
		"\n \u2022 Trance: Io-Spawn don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest."+
		"\n \u2022 Languages: You can speak, read, and write Common."
};
//Mustalid Race with 5 Subraces
RaceList["badger mustalid"] = {
	regExpSearch : /^(?=.*\b(mustalid)\b)(?=.*\b(badger)\b).*$/i,
	name : "Badger Mustalid",
	sortname : "Mustalid, Badger",
	source : [["PBMS", 0]],
	plural : "Badger Mustalids",
	languageProfs : ["Common", "Celestial"],
	age : "reach adulthood by 5 and live around 60 years",
	scoresGeneric : true,
	vision : [["Darkvision", 60]],
	skills : "Stealth",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		burrow : { spd : 20, enc : 10 },
	},
	dmgres : ["Poison"],
	savetxt : { 
		adv_vs : ["poison"], 
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*badger)(?=.*claw).*$/i,
		name : "Badger Claws",
		source : [["PBMS", 0]],
		damage : [2, 6, "slashing"],
	},
	weaponsAdd : ["Badger Claws"],
	features : {
		"giant slayer" : {
			name : "Giant Slayer",
			description : desc([
				"You have advantage on attack rolls against creatures one or more sizes larger than you.",
			]),
		},
	},
	trait : "Badger Mustalid (my creature type is Humanoid)"+
		"\n \u2022 Darkvision: 60 ft."+
		"\n \u2022 Poison Resilience: You have advantage on saving throws against being poisoned or any effects of poison, and you have resistance against poison damage."+
		"\n \u2022 Giant Slayer: You have advantage on attack rolls against creatures one or more sizes larger than you."+
		"\n \u2022 Sneaky: You gain proficiency with the Stealth skill."
};
RaceList["mouse mustalid"] = {
	regExpSearch : /^(?=.*\b(mustalid)\b)(?=.*\b(mouse)\b).*$/i,
	name : "Mouse Mustalid",
	sortname : "Mustalid, Mouse",
	source : [["PBMS", 0]],
	plural : "Mouse Mustalids",
	languageProfs : ["Common", "Celestial"],
	age : "reach adulthood by 5 and live around 60 years",
	scoresGeneric : true,
	vision : [["Darkvision", 60]],
	skills : ["Stealth", "Acrobatics"],
	size : 4,
	speed : {
		walk : { spd : 35, enc : 25 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : [["PBMS", 0]],
		damage : [2, 6, "piercing"],
	},
	weaponsAdd : ["Bite"],
	features : {
		"nimble dodge" : {
			name : "Nimble Dodge",
			action : "Reaction",
			description : desc([
				"When attacked by an attack of opportunity, you may use your reaction to impose disadvantage on that attack.",
			]),
		},
	},	
	trait : "Mouse Mustalid (my creature type is Humanoid)"+
		"\n \u2022 Darkvision: 60 ft."+
		"\n \u2022 Gymnastics: You gain proficiency with the Acrobatics skill."+
		"\n \u2022 Nimble Dodge: When attacked by an attack of opportunity, you may use your reaction to impose disadvantage on that attack."+
		"\n \u2022 Sneaky: You gain proficiency with the Stealth skill."
};
RaceList["otter mustalid"] = {
	regExpSearch : /^(?=.*\b(mustalid)\b)(?=.*\b(otter)\b).*$/i,
	name : "Otter Mustalid",
	sortname : "Mustalid, Otter",
	source : [["PBMS", 0]],
	plural : "Otter Mustalids",
	languageProfs : ["Common", "Celestial"],
	age : "reach adulthood by 5 and live around 60 years",
	scoresGeneric : true,
	vision : [["Darkvision", 60]],
	skills : ["Stealth", "Survival"],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 20, enc : 10 },
	},
	armorOptions : {
		regExpSearch : /^(?=.*dense)(?=.*fur).*$/i,
		name : "Dense Fur",
		source : [["PBMS", 0]],
		ac : 12,
	},
	features : {
		"hold breath" : {
			name : "Hold Breath",
			description : desc([
				"You can hold your breath for up to an hour.",
			]),
		},
	},
	trait : "Otter Mustalid (my creature type is Humanoid)"+
		"\n \u2022 Darkvision: 60 ft."+
		"\n \u2022 Resourceful: You gain proficiency with the Survival skill."+
		"\n \u2022 Dense Fur: Due to your thick fur you have a natural armor class of 12 + your Dexterity Modifyer."+
		"\n \u2022 Hold Breath: You can hold your breath for up to an hour"+
		"\n \u2022 Sneaky: You gain proficiency with the Stealth skill."
};
RaceList["weasel mustalid"] = {
	regExpSearch : /^(?=.*\b(mustalid)\b)(?=.*\b(weasel)\b).*$/i,
	name : "Weasel Mustalid",
	sortname : "Mustalid, Weasel",
	source : [["PBMS", 0]],
	plural : "Weasel Mustalids",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	scoresGeneric : true,
	languageProfs : ["Common", "Celestial"],
	age : "reach adulthood by 5 and live around 60 years",
	vision : [["Darkvision", 60]],
	skills : ["Stealth", "Deception", "Intimidation"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : [["PBMS", 0]],
		damage : [2, 6, "piercing"],
	},
	weaponsAdd : ["Bite"],
	trait : "Weasel Mustalid (my creature type is Humanoid)"+
		"\n \u2022 Darkvision: 60 ft."+
		"\n \u2022 Confusion Tactics: You gain proficiency with the Deception skill"+
		"\n \u2022 War Dance: You gain proficiency with the Intiidation skill"+
		"\n \u2022 Sneaky: You gain proficiency with the Stealth skill"
};
RaceList["wolverine mustalid"] = {
	regExpSearch : /^(?=.*\b(mustalid)\b)(?=.*\b(wolverine)\b).*$/i,
	name : "Wolverine Mustalid",
	sortname : "Mustalid, Wolverine",
	source : [["PBMS", 0]],
	plural : "Wolverine Mustalids",
	languageProfs : ["Common", "Celestial"],
	age : "reach adulthood by 5 and live around 60 years",
	scoresGeneric : true,
	vision : [["Darkvision", 60]],
	skills : "Stealth",
	size : 2,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 20, enc : 10 },
	},
	dmgres : "Cold",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*wolverine)(?=.*claw).*$/i,
		name : "Wolverine Claws",
		source : [["PBMS", 0]],
		damage : [2, 6, "slashing"],
	},
	weaponsAdd : ["Wolverine Claws"],
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Skunk Bear",
		spells : ["stinking cloud"],
		times : 1,
		oncelr : true,
	},	
	features : {
		"skunk bear" : {
			name : "Skunk Bear",
			action : "Action",
			usages : 1,
			recovery : "long rest",
			description : desc([
				"As an action once per long rest the Wolverine folk can cast the stinking cloud spell without needing any components.",
			]),
		},
	},
	trait : "Wolverine Mustalid (my creature type is Humanoid)"+
		"\n \u2022 Darkvision: 60 ft."+
		"\n \u2022 Skunk Bear: As an action once per long rest the Wolverine folk can cast the stinking cloud spell without needing any components."+
		"\n \u2022 Insulated Coat: Due to your thick fur you have resistance to Cold damage."+
		"\n \u2022 Sneaky: You gain proficiency with the Stealth skill."
};
//Nymph Race with 6 Subraces
RaceList["alseid nymph"] = {
	regExpSearch : /^(?=.*\b(nymph)\b)(?=.*\b(alseid)\b).*$/i,
	name : "Alseid Nymph",
	sortname : "Nymph, Alseid",
	source : [["PBMS", 0]],
	plural : "Alseid Nymphs",
	languageProfs : ["Common", "Sylvan"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [3, 4],
	dmgres : ["Radiant"],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	savetxt : {
		adv_vs : ["spells and magical effects"],
		immune : ["poison damage", "poisoned"],
	},	
	features : {
		"nymph step" : {
			name : "Nymph Step",
			action : "action",
			description : desc([
				"As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger.",
			]),
		},
	},	
	trait : "Alseid Nymph (my creature type is Fey)"+
		"\n \u2022 Magic Resistance: You have advantage on saving throws against spells and other magical effects."+
		"\n \u2022 Nymph Step: As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger."+
		"\n \u2022 Immortal Nature: You do not require air, food, drink, or sleep. You are also immune to poison and the poisoned condition."+
		"\n \u2022 Alseid: These are nymphs of the meadows. You have resistance to radiant damage."
};
RaceList["aura nymph"] = {
	regExpSearch : /^(?=.*\b(nymph)\b)(?=.*\b(aura)\b).*$/i,
	name : "Aura Nymph",
	sortname : "Nymph, Aura",
	source : [["PBMS", 0]],
	plural : "Aura Nymphs",
	languageProfs : ["Common", "Sylvan"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [3, 4],
	dmgres : ["Lightning"],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	savetxt : {
		adv_vs : ["spells and magical effects"],
		immune : ["poison damage", "poisoned"],
	},
	features : {
		"nymph step" : {
			name : "Nymph Step",
			action : "action",
			description : desc([
				"As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger.",
			]),
		},
	},	
	trait : "Aura Nymph (my creature type is Fey)"+
		"\n \u2022 Magic Resistance: You have advantage on saving throws against spells and other magical effects."+
		"\n \u2022 Nymph Step: As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger."+
		"\n \u2022 Immortal Nature: You do not require air, food, drink, or sleep. You are also immune to poison and the poisoned condition."+
		"\n \u2022 Aura: These are nymphs of the winds. You have resistance to lightning damage."
};
RaceList["dryad nymph"] = {
	regExpSearch : /^(?=.*\b(nymph)\b)(?=.*\b(dryad)\b).*$/i,
	name : "Dryad Nymph",
	sortname : "Nymph, Dryad",
	source : [["PBMS", 0]],
	plural : "Dryad Nymphs",
	languageProfs : ["Common", "Sylvan"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [3, 4],
	dmgres : ["Bludgeoning", "Piercing", "Slashing"],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	savetxt : {
		adv_vs : ["spells and magical effects"],
		immune : ["poison damage", "poisoned"],
	},
	features : {
		"nymph step" : {
			name : "Nymph Step",
			action : "action",
			description : desc([
				"As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger.",
			]),
		},
	},	
	trait : "Dryad Nymph (my creature type is Fey)"+
		"\n \u2022 Magic Resistance: You have advantage on saving throws against spells and other magical effects."+
		"\n \u2022 Nymph Step: As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger."+
		"\n \u2022 Immortal Nature: You do not require air, food, drink, or sleep. You are also immune to poison and the poisoned condition."+
		"\n \u2022 Dryad: These are nymphs of the trees. You have resistance to bludgeoning, piercing, and slashing damage from non-magical sources."
};
RaceList["lampad nymph"] = {
	regExpSearch : /^(?=.*\b(nymph)\b)(?=.*\b(lampad)\b).*$/i,
	name : "Lampad Nymph",
	sortname : "Nymph, Lampad",
	source : [["PBMS", 0]],
	plural : "Lampad Nymphs",
	languageProfs : ["Common", "Sylvan"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [3, 4],
	dmgres : ["Necrotic"],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	savetxt : {
		adv_vs : ["spells and magical effects"],
		immune : ["poison damage", "poisoned"],
	},
	features : {
		"nymph step" : {
			name : "Nymph Step",
			action : "action",
			description : desc([
				"As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger.",
			]),
		},
	},	
	trait : "Lampad Nymph (my creature type is Fey)"+
		"\n \u2022 Magic Resistance: You have advantage on saving throws against spells and other magical effects."+
		"\n \u2022 Nymph Step: As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger."+
		"\n \u2022 Immortal Nature: You do not require air, food, drink, or sleep. You are also immune to poison and the poisoned condition."+
		"\n \u2022 Lampad: These are nymphs of the shadows. You have resistance to necrotic damage."
};
RaceList["naiad nymph"] = {
	regExpSearch : /^(?=.*\b(nymph)\b)(?=.*\b(naiad)\b).*$/i,
	name : "Naiad Nymph",
	sortname : "Nymph, Naiad",
	source : [["PBMS", 0]],
	plural : "Naiad Nymphs",
	languageProfs : ["Common", "Sylvan"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [3, 4],
	dmgres : ["Wave"],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	savetxt : {
		adv_vs : ["spells and magical effects"],
		immune : ["poison damage", "poisoned"],
	},
	features : {
		"nymph step" : {
			name : "Nymph Step",
			action : "action",
			description : desc([
				"As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger.",
			]),
		},
	},	
	trait : "Naiad Nymph (my creature type is Fey)"+
		"\n \u2022 Magic Resistance: You have advantage on saving throws against spells and other magical effects."+
		"\n \u2022 Nymph Step: As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger."+
		"\n \u2022 Immortal Nature: You do not require air, food, drink, or sleep. You are also immune to poison and the poisoned condition."+
		"\n \u2022 Naiad: These are nymphs of the water. You have resistance to wave damage."
};
RaceList["oread nymph"] = {
	regExpSearch : /^(?=.*\b(nymph)\b)(?=.*\b(oread)\b).*$/i,
	name : "Oread Nymph",
	sortname : "Nymph, Oread",
	source : [["PBMS", 0]],
	plural : "Oread Nymphs",
	languageProfs : ["Common", "Sylvan"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [3, 4],
	dmgres : ["Fire"],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	savetxt : {
		adv_vs : ["spells and magical effects"],
		immune : ["poison damage", "poisoned"],
	},
	features : {
		"nymph step" : {
			name : "Nymph Step",
			action : "action",
			description : desc([
				"As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger.",
			]),
		},
	},	
	trait : "Oread Nymph (my creature type is Fey)"+
		"\n \u2022 Magic Resistance: You have advantage on saving throws against spells and other magical effects."+
		"\n \u2022 Nymph Step: As an action, you can use 10ft of movement to magically step into your natural element and emerge from another source of your element within 60ft the source must be medium in size or larger."+
		"\n \u2022 Immortal Nature: You do not require air, food, drink, or sleep. You are also immune to poison and the poisoned condition."+
		"\n \u2022 Oread: These are nymphs of the flames of the earth. You have resistance to fire damage."
};
RaceList["star born"] = {
	regExpSearch : /^(?=.*\b(star)\b)(?=.*\b(born)\b).*$/i,
	name : "Star Born",
	source : [["PBMS", 0]],
	plural : "Star Born",
	languageProfs : ["Common", "Deep Speech"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [2, 3],
	vision : ["Darkvision", 60],
	dmgres : ["Cold"],
	speed : {
		walk : { spd : 40, enc : 30 },
		fly : { spd : 70, enc : 60 },
	},
	savetxt : {
		adv_vs : ["charmed", "frightened"],
		immune : ["fire", "poison", "radiant", "poisoned"],
	},	
	trait : "Starborn (my creature type is Aberration)"+
		"\n \u2022 Darkvision: 60 ft."+
		"\n \u2022 Far Realm Existence: You do not require air to survive. You have advantage on saves against the charmed or frightened conditions."+
		"\n \u2022 Born from a Star: Your body is forged from a star and is therefore immune to fire and radiant damage, and resistant to cold damage."+
		"\n \u2022 Shining Form: Your body shines dim light in a 15 foot radius."+
		"\n \u2022 Immortal Nature: You do not require food, drink or sleep, you are also immune to poison damage and the poisoned condition."
};
RaceList["succubus"] = {
	regExpSearch : /^(?=.*\b(succubus)\b).*$/i,
	name : "Succubus",
	source : [["PBMS", 0]],
	plural : "Succubi",
	languageProfs : ["Common", "Infernal"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [3],
	vision : ["darkvision", 60],
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 60, enc : 50 },
	},
	savetxt : {
		immune : ["poison", "poisoned"],
	},	
	features : {
		"charm" : {
			name : "Charm",
			action : "action",
			description : desc([
				"As an action, you can choose one humanoid you can see within 30 ft. That creature must make a wisdom saving throw against your spellcasting DC. On a failure the target is magically charmed for 1 day. If the target suffers any harm, it can repeat the savign throw ending the effect on a success. Any creature that succeeds is immune to the effect for 24 hours. you can only have one target charmed at a time.",
			]),
		},
		"draining kiss" : {
			name : "Draining Kiss",
			action : "action",
			description : desc([
				"As an action, you can perform a magical kiss upon a charmed or willing creature. The target must make a Constitution saving throw agains your spellcasting DC. On a failure the target takes 2d10 psychic damage and half as much on a success. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. This magical ability increases in damage when you reach 5th level (3d10), 11th level (4d10), and 17th level (5d10).",
			]),
		},	
	},
	trait : "Succubus (my creature type is Fiend)"+
		"\n \u2022 Darkvision: 60 ft."+
		"\n \u2022 Charm: As an action, you can target one humanoid within 30 ft. that target must make a Wis Save or be charmed for 1 day if the target takes damage it can remake the save on a succ. it is immune for 24 hours."+
		"\n \u2022 Draining Kiss: As an action, you kiss a charmed or willing target, the target must make a Con Save against your Spell DC. on a fail the target takes 2d10 psychic damage or half as much on a success. This also reduces the target's HP Max by the amount they took as damage, if the HP Max is reduced to 0 the target dies. This Damage increases at 5th level (3d10), 11th level (4d10), 17th level (5d10)."+
		"\n \u2022 Immortal Nature: You do not require food, drink, or sleep. You are also immune to poison damage and the poisoned condition."
};
RaceList["veda"] = {
	regExpSearch : /^(?=.*\b(veda)\b).*$/i,
	name : "Veda",
	source : [["PBMS", 0]],
	plural : "Veda",
	languageProfs : ["Common", "Abyssal"],
	age : "You are Immortal",
	scoresGeneric : true,
	size : [2, 3],
	vision : ["Darkvision", 60],
	dmgres : ["Cold", "Fire", "Lightning"],
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 15, enc : 5 },
	},
	savetxt : {
		immune : ["poison", "poisoned"],
	},
	carryingCapacity : 2,
	trait : "Veda (my creature type is Fiend)"+
		"\n \u2022 Darkvision: 60 ft."+
		"\n \u2022 Polychiral:  As a Veda you have 4 arms, your additional arms allow you to wield multiple weapons. You can gain the benefit of two handed weapons and a shield. You also gain a multi-attack, and can attack once with each weapon you wield."+
		"\n \u2022 Many Hands Light Work: You count as one size larger when determining carrying capacity and the weight you can push, drag, or lift."+
		"\n \u2022 Abyssal Resilience: You are immune to poison damage and the poisoned condition. You are also resistant to cold, fire, and lightning damage."
};
var MM_lycanthrope = {
	createDefaultTraits : function(sLycanName, sLycanPlural) {
		// the traits of a human
		var obj = {
			name : "Human " + sLycanName,
			plural : "Human " + sLycanPlural,
			languageProfs : ["Common", 1],
			age : " reach adulthood in their late teens and live less than 100 years",
			height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
			weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
			heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
			weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
			scorestxt : "+1 to all ability scores",
			scores : [1, 1, 1, 1, 1, 1, 1]
		}
		return obj;
	},
	createMessage : function(sLycanName, aOtherGains) {
		var aGained = [
			"Its speed in nonhumanoid form.",
			"Natural attacks in nonhumanoid form (e.g. bite/claw).",
			"Damage immunity to bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered.",
			"Shapechanger trait."
		].concat(aOtherGains);
		return "The lycanthrope races are template races. All features and traits of the base race are retained and all the " + sLycanName + "'s features are added to it."+
		"\nIf you choose not to use a previous race as the base race or you selected a " + sLycanName + " at character creation, a human (non-variant) will be used as the base race."+
		"\nThe " + sLycanName + "'s features added to the base race are:"+
		desc(aGained, "\n   \u2022 ")+
		"\n\nThe possible alignment change and moon-related limitations of lycanthrope are not mentioned in this race. Discuss with your DM how they want to handle lycanthrope."
	}
}
RaceList["lycanthrope-wereraven"] = {
	regExpSearch : /were.?raven|^(?=.*lycanthrope)(?=.*raven).*$/i,
	name : "Wereraven",
	source : [["CoS", ]],
	plural : "Wereravens",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 50, enc : 40 },
	},
	trait : "Human Wereraven (+1 to all ability scores; min 15 Dex)" + desc([
		"Shapechanger: As an action, I can polymorph into a raven-humanoid hybrid, into a raven, or back. In those forms, I gain 50 ft flying speed, and a beak attack. In my raven form, I also become Tiny My stats don't otherwise change when transformed, but my equipment doesn't transform and I revert back when I die. Humanoids hit by my beak must save or be cursed with wereraven lycanthrope.",
		"Mimicry: I can mimicsimple sounds i have ehard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
	], "\n \u2022 "),
	features : {
		lycanthrope_features : {
			name : "Lycanthrope",
			source : [["M", 211]],
			minlevel : 1,
			toNotesPage : [{
				name : "Lycanthrope",
				note : [
					"My Dexterity score increases to 15 unless it was already higher",
					"As an action, I can polymorph into a raven-humanoid hybrid, into a raven, or back",
					"In my raven and hybrid forms, I gain 50 ft flying speed, and a beak attack",
					"In my raven form, I also become Tiny My stats don't otherwise change, my equipment doesn't transform and I revert back if I die",
					"Humanoids hit by my beak must make a Con save or be cursed with wereraven lycanthrope",
					"The DC to avoid this curse is 8 + my Proficiency bonus + my Constitution modifier"
				],
				page3notes : true
			}, {
				name : "Multiattack",
				note : [
					"As an action, I can make two attacks, only one of which can be with my wereraven beak"
				],
				page3notes : true,
				additional : "in humanoid or hybrid form only"
			}],
			action : [
				["action", "Shapechange (raven/hybrid/back)"],
				["action", "Multiattack (2 attacks, max 1 beak)"]
			],
			scoresOverride : [0, 15, 0, 0, 0, 0],
			savetxt : { immune : ["bludgeoning, piercing, and slashing damage unless from magic/silver"] },
			weaponsAdd : ["Wereraven Beak"],
			weaponOptions : [{
				name : "Wereraven Beak",
				regExpSearch : /^(?=.*(wereraven|lycanthrope))(?=.*beak).*$/i,
				source : [["M", 211]],
				ability : 2,
				type : "Natural",
				damage : [1, 4, "piercing"],
				range : "Melee",
				description : "Raven and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage : true
			}],
		},
		lycanthrope_mimicry : {
			name : "Mimicry",
			source : [["M", 211]],
			minlevel : 1,
			toNotesPage : [{
				name : "Mimicry",
				note : [
					"Mimicry: I can mimicsimple sounds i have ehard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
				],
				page3notes : true
			}],
		}
	},
	useFromPreviousRace : {
		updateName : "prefix", // e.g. "Rock Gnome Wereraven"
		message : MM_lycanthrope.createMessage("wereraven", [
			"Dexterity increase to 15 unless it was already higher.",
			"Mimicry trait."
		]),
		defaultTraits : MM_lycanthrope.createDefaultTraits("Wereraven", "Wereravens"),
		gainTraits : ["everything"],
	}
};
//3 New Classes
//Fool Class with 4 Subclasses
ClassList.fool = {
	
	regExpSearch : /(fool)/i,
	name : "Fool",
	source : [["PBMS", 0]],
	primaryAbility : "Charisma",
	abilitySave : 6,
	prereqs : "Charisma 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Dex", "Cha"],
	skillstxt : {
		primary : "Choose any four skills",
	},
	armorProfs : {
		primary : [false, false, false, false],
	},
	weaponProfs : {
		primary : [true, false],
	},
	toolProfs : {
		primary : [["Artisan's tools", 1], ["Gaming Set", 1], "Disguise Kit"],
	},	
	equipment : "Fool starting equipment:" +
		"\n \u2022 An arcane focus" +
		"\n \u2022 An entertainer pack -and- A disguise kit." +
		"\n \u2022 A simple weapon" +
		"\n \u2022 A set of artisan tools -or- a gaming set;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["playhouse", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15],
	},
	
	spellcastingList : { 

		"class" : ["bard", "sorcerer", "warlock", "wizard"], 

		level : [0, 9],
	},
	features : {
		"origin of trickery" : {
			name : "Origin of Trickery",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"When you gain this feature you choose whether your magic is derived from the Feywild or Shadowfell, use the Choose feature button on page 2 to choose your origin.",
			]),	
			extraname : "Origin of Trickery",
			extrachoices : ["feywild", "shadowfell"],
			"feywild" : {
				name : "Feywild Origin",
				description : desc(["Due to your magic hailing from the Feywild, your spells may appear in vibrant colorful shades that reflect your mood, create pleasant floral and honey aromas, or prehaps a light cantrip appears as a floating pixie. Guidance Cantrip + Faerie Fire 1st-level spell."]),
				spellcastingBonus : [{
					name : "Feywild Origin",
					spells : ["guidance", "faerie fire"],
					selection : ["guidance", "faerie fire"],
					times : 2,
				}]
			},
			"shadowfell" : {
				name : "Shadowfell Origin",
				description : desc(["Due to your magic hailing from the Shadowfell, your spells appear in muted or shadowy tones that evoke a solemn presence, create cold chills and distorted figures, or a mage hand cantrip appears as a ghostly hand. Vicious Mockery Cantrip + Dissonant Whispers 1st-level spell."]),
				spellcastingBonus : [{
					name : "Shadowfell Origin",
					spells : ["vicious mockery", "dissonant whispers"],
					selection : ["vicious mockery", "dissonant whispers"],
					times : 2,
				}],
			},	
		},
		"tricks" : {
			name : "Tricks",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc(["You have a knack for physical and visual entertainment known as tricks. These tricks are a blend of cunning and magic that allow you to beguile and bewilder the onlookers. You also choose one style of tricks, when you do so it cannot be changed. These magical tricks offer you a set of spells that do not count against the ones you can know, and do not require concentration, which last until the spell ends or if your dismiss it early. As you level in this class you will gain additional spells from the chosen set of tricks."]),	
			extraname : "Tricks",
			extrachoices : ["horror", "deception", "jesting", "mischief", "vanishment"],
			"horror" : {
				name : "Tricks of Horror",
				spellcastingBonus : [{
					name : "Tricks of Horror",
					spells : ["cause fear", "hex", "phantasmal force", "darkness", "bestow curse", "fear", "phantasmal killer", "shadow of moil", "danse macabre", "enervation"],
					selection : ["cause fear", "hex", "phantasmal force", "darkness", "bestow curse", "fear", "phantasmal killer", "shadow of moil", "danse macabre", "enervation"],
					times : 10,
				}],
			},
			
			"deception" : {
				name : "Tricks of Deception",
				spellcastingBonus : [{
					name : "Tricks of Deception",
					spells : ["distort value", "silent image", "blur", "mirror image", "hypnotic pattern", "major image", "confusion", "hallucinatory terrain", "mislead", "seeming"],
					selection : ["distort value", "silent image", "blur", "mirror image", "hypnotic pattern", "major image", "confusion", "hallucinatory terrain", "mislead", "seeming"],
					times : 10,
				}],
			},
			
			"jesting" : {
				name : "Tricks of Jesting",
				spellcastingBonus : [{
					name : "Tricks of Jesting",
					spells : ["tasha's hideous laughter", "charm person", "enthrall", "suggestion", "fast friends", "incite greed", "compulsion", "charm monster", "dominate person", "mind fog"],
					selection : ["tasha's hideous laughter", "charm person", "enthrall", "suggestion", "fast friends", "incite greed", "compulsion", "charm monster", "dominate person", "mind fog"],
					times : 10,
				}],
			},
			
			"mischief" : {
				name : "Tricks of Mischief",
				spellcastingBonus : [{
					name : "Tricks of Mischief",
					spells : ["grease", "taunt", "nathair's mischief", "pyrotechnics", "stinking cloud", "slow", "shout", "polymorph", "animate objects", "telekinesis"],
					selection : ["grease", "taunt", "nathair's mischief", "pyrotechnics", "stinking cloud", "slow", "shout", "polymorph", "animate objects", "telekinesis"],
					times : 10,
				}],
			},
			
			"vanishment" : {
				name : "Tricks of Vanishment",
				spellcastingBonus : [{
					name : "Tricks of Vanishment",
					spells : ["erase", "unseen servant", "invisibility", "wristpocket", "blink", "nondetection", "banishment", "greater invisibility", "far step", "temporal shunt"],
					selection : ["erase", "unseen servant", "invisibility", "wristpocket", "blink", "nondetection", "banishment", "greater invisibility", "far step", "temporal shunt"],
					times : 10,
				}],
			},
		},
		"fools facade" : {
				name : "Fools Facade",
				source : [["PBMS", 0]],
				minlevel : 1,
				description : desc(["Without armor and no shield, my AC is 10 + Dexterity modifier + Charisma modifier"]),
				armorOptions : [{
					regExpSearch : /justToAddToDropDown/,
					name : "Unarmored Defense (Cha)",
					source : [["PBMS", 0]],
					ac : "10+Cha",
					affectsWildShape : true
				}],
				armorAdd : "Unarmored Defense (Cha)"
		},
		"comedy and tragedy" : {
			name : "Comedy and Tragedy",
			source : [["PBMS", 0]],
			minlevel : 2,
			description : desc(["You actions are quite theatrical and anything you do is rarely ordinary or simple, regardless of your proficiency. Whenever you attempt a saving throw, attack roll, or ability check you find benefits in both your critical success and your critical fails."]),
			toNotesPage : [{
				name : "Comedy and Tragedy",
				note : [
					"Comedy",
					"If you roll a d20 be it for a saving throw, attack roll, or ability check and roll a natural 20, or a calculated number that is 20 or greater; you gain one of the following benefits for the next minute. You can only benefit from one comedy at a time.",
					"• One creature of your choice within 60ft gains a bonus equal to your Charisma modifier that is added to one of their next saving throws, ability checks, or attack rolls. This bonus can be applied after the roll is made but before applied effects.",
					"• If you were to take half damage as a result of a success on a saving throw, you instead take no damage.",
					"• Any time you successfully hit a creature with a melee or ranged attack you gain +1 bonus to damage for each damage die roll you make.",
					"• You gain immunity to the condition effect for 24 hours that would have been applied if you had not succeeded.",
					"• You can immediately use one foolish act option even if you have already taken one this turn.",

					"Tragedy",
					"If you roll a d20 be it for a saving throw, attack roll, or ability check  and roll a natural 1 or fail by five or more you gain one of the following benefits for the next minute. You can only benefit from one tragedy at a time.",
					"• One creature of your choice within 60ft receives a penalty equal to your Charisma modifier that is applied to one of their next saving throws, ability checks, or attack rolls of your choice. This penalty can be applied after the roll is made but before applied effects.",
					"• If you were to take full or critical damage as a result of a failure on a saving throw, the target takes recoil damage equal to the amount rolled.",
					"• Anytime you fail to hit a target with a melee or ranged attack you gain a +5 bonus to your AC until the start of your next turn.",
					"• Any condition effect received from a failed roll is also applied to one creature of your choice within 60ft.",
					"• You can immediately use one foolish act option even if you have already taken one this turn.",
				],
			}],
		},
		"foolish acts" : {
			name : "Foolish Acts",
			source : [["PBMS", 0]],
			minlevel : 2,
			description : desc(["It is in the nature of a fool to be foolish, but to act foolish is risky business as the consequences could be severe. Although this risk is never a concern for the fool as it is often intended in order to create chaos. To do so, you use a bonus action on your turn to magically interact with a object or creature within 5ft of you or a range otherwise stated. Each foolish act has a consequence that is immediately applied after the foolish act has been made regardless if it succeeds."]),
			extraname : "Foolish Acts",
			extrachoices : ["Slap", "Knock Over", "Chuck", "Pluck", "Switch", "Trip", "Taunt", "Fake Out", "Ignite", "Sacrifice"],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 9 ? 2 : n < 18 ? 3 : 4;
			}),		
			"slap" : {
				name : "Slap",
				description : desc([
					'You target slap a target within 5 feet of you making an unarmed strike. You must make an attack roll toward the target, on a hit the target takes 1d6 bludgeoning damage and must make a constitution saving throw. On a failed save the target is stunned until the start of your next turn.',
					"Consequence: After the stunned effect ends the creature automatically hits on its next weapon attack against you.",
				]),	
			},
			"knock over" : {
				name : "Knock Over",
				description : desc([
					'You target an object you can see within 5 feet of youself and attempt to magically knock it over. If the object is heavier than your strength score you must make an athletics check against the object. The DC is 10 plus 1 for each 20lbs above your score. On a success the object falls over taking twice the normal fall damage. If the object falls on a creature the bludgeoning damage dealt is doubled toward that target.', 
					"Consequence: Your location is revealed to all creatures within 60ft that can hear, and you have disadvantage on stealth checks for the next minute.",
				]),	
			},
			"chuck" : {
				name : "Chuck",
				description : desc([
					'You target a object you can see within 5ft and you attempt to throw it. If the object is heavier than your strength score you must make an athletics check against the object. The DC is 10 plus 1 for each 20lbs above your score. On a success the object is thrown to the desired location within 30ft. If the object targets a creature you must make an attack roll, on a hit the standard bludgeoning damage is doubled.',
					"Consequence: The target has advantage on perception checks against you for 10 minutes.",
				]),	
			},
			"pluck" : {
				name : "Pluck",
				description : desc([
					'You target an object being carried by a creature within 5 feet and pluck if from them. You must make a sleight of hand check against the targets perception. On a success the object is plucked from the target and taken without detection until the start of your next turn.', 
					"Consequence: The perception checks of all creatures aside from the plucked target that can see you within 30 feet have advantage against your sleight of hand.",
				]),	
			},
			"switch" : {
				name : "Switch",
				description : desc([
					'You target an object or a creature within 5 feet and switch them with another object or creature within 5 feet. You must make an acrobatics check agaianst the targets athletics check. On a success the two targets positions are switched. The targets are surprised for one round.',
					"Consequence: You have a -2 to AC until the start of your next turn.",
				]),	
			},
			"trip" : {
				name : "Trip",
				description : desc([
					'You target a creature you can see within 5 feet and attempt to trip them. You must make an acrobatics check against the targets athletics. On a success, the creature is knocked prone.',
					"Consequence: If the creature succeeds the save throw or takes its following action to stand up it has advanatage on attack rolls toward you for the next minute.",
				]),	
			},
			"taunt" : {
				name : "Taunt",
				description : desc([
					'You target a creature you can see within 60 feet and sling insults to taunt them. You must make an intimidation check against their insight. On a success the creature has disadvantage on all attack rolls, ability checks, and saving throws toward other creatures until the start of your next turn.', 
					"Consequence: The taunted creature has advantage on all attack rolls against you until the end of your next turn.",
				]),	
			},
			"fake out" : {
				name : "Fake Out",
				description : desc([
					'You target a creature you can see within 30 feet and begin to mislead them with a verbal lie or manipulation. The target must roll a insight check against your deception. On a failure the creature believes anything you have said or done.',
					"Consequence: If the creature succeeds on the roll or discovers your fake out this effect is no longer effective toward that creature for 24 hours.",
				]),	
			},
			"ignite" : {
				name : "Ignite",
				description : desc([
					'You target a object you can see within 5ft and you attempt to ignite it with sparks of magic. If the object is not being worn or carried and is flammable it ignites. If you use fuel first as an action a non flammable object ignites.',
					"Consequence: The object ignites all flammable objects within 5ft and continues the spread the fire at the start of each of your turns. Creatures within 60 feet that can seen you have advantage on perception checks for the next minute.",
				]),	
			},	
			"sacrifice" : {
				name : "Sacrifice",
				description : desc([
					'As a reaction, you can sacrifice yourself to protect another creature or object within 5 feet. When you do so you gain resistance to all damage until the start of your next turn. In addition, the target protected takes no damage.',
					"Consequence: The attack roll made has advantage on you and the saving throw imposes disadvantage on you.",
				]),	
			},
		},	
		"subclassfeature3" : {
				name : "Playhouse",
				source : [["PBMS", 0]],
				minlevel : 3,
				description : desc([
					'Choose a playhouse and put it in the "Class" field on the first page',
					"Choose either clown, mime, or puppeteer"
				])
			},
		"jack in the box" : {
			name : "Jack in the Box",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc(["You possess a mysterious object connected to either the feywild or the shadowfell that is a box with a crank, a colorful satchel, or magical hat. With this item you are able to pull out a tiny non magical objects in a moments need. As an action you can make a charisma ability check using your spellcasting ability to name an item that is tiny in size and retrieve it from your jack in box. The DC is determined by the DM in repsonse to the desired object. If the object is held, worn or carried by a creature, the creature must make a wisdom saving throw against your spell DC. You can use this ability a number of times a day equal to your proficiency bonus. As you level you can pull out objects of a larger size. You can pull out small non-magical objects at 6th level, medium non-magical objects at 10th level, and large nonmagical objects at 14th level."]),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"masquerade" : {
			name : "Masquerade",
			source : [["PBMS", 0]],
			minlevel : 5,
			description : desc(["At 5th level, you gain the magical ability to craft a mask out of fey or shadow magic. As a bonus action on your turn you can don a mask that magically appears on your face and gain the following benefits. While wearing the mask you gain a +1 to your AC concealing your identity. In addition, as an action while wearing the mask you can cast the disguise self spell without consuming a spell slot. This mask can only be donned and removed by you. When you gain this feature you can choose one type of mask that you can conjure. When you reach 10th level you gain an additional mask option, and again at 15th level. You can only wear one type of mask at a time. This mask counts as a spellcasting focus while donned."]),
			extraname : "Masquerade Mask",
			extrachoices : ["Jester", "Pierrot", "Zanni", "Plague", "Volto", "Bauta", "Colombina", "Harlequin"],
			extraTimes : levels.map(function (n) {
					return n < 5 ? 0 : n < 10 ? 1 : n < 15 ? 2 : 3;
			}),
			"jester" : {
				name : "Jester",
				description : desc([
					'Mask of the Jester: Comedy',
					"This jester-faced mask displays a joyful expression and conveys the essence of comedy. This mask grants you the following benefits.",
					"• You can take the dash and disengage action as a bonus ation on your turn.",
					"• You are immune to the restrained and grappled condition.",
					"• You gain one additional comedy when you benefit from the comedy of Comedy and Tragedy.",
				]),	
			},
			"pierrot" : {
				name : "Pierrot",
				description : desc([
					'Mask of the Pierrot: Tragedy',
					"This sad clown-faced mask displays a mournful expression and conveys the essence of tragedy. This mask grants you the following benefits.",
					"• You can take the hide and disengage action as a bonus action.",
					"• You are immune to the blinded and deafened condition.",
					"• You gain one additional tragedy when you benefit from the tragedy of Comedy and Tragedy.",
				]),	
			},
			"zanni" : {
				name : "Zanni",
				description : desc([
					'Mask of Zanni: Foolish',
					"This long nose upper-faced mask displays a long narrow nose and conveys the expression of a fool. This mask grants you the following benefits.",
					"• You have advantage on all rolls made for a foolish act.",
					"• You are immune to the prone condition.",
					"• You can cast the gift of gab spell once before a short or long rest without consuming a spell slot.",
				]),	
			},
			"plague" : {
				name : "Plague",
				description : desc([
					'Mask of the Plague: Pestilence',
					"This bird-faced mask displays a solemn expression and conveys the essence of sickness. This mask grants you the following benefits.",
					"• You can choose to replace any type of damage you deal with a spell with the poison damage type.",
					"• You are immune to being poisoned and diseased.",
					"• When you hit with an attack the target must make a Constitution saving throw against your spell DC. On a failed save the creature becomes diseased and is now vulnerable to poison damage.",
				]),	
			},
			"volto" : {
				name : "Volto",
				description : desc([
					'Mask of the Volto: Mystery',
					"This porcelain full-faced mask displays a emotionless expression and conveys the essence of mystery. This mask grants you the following benefits.",
					"• You gain the benefits of the nondetection spell.",
					"• You are immune to the effects of telepathy and detect thoughts spell.",
					"• You have advantage on deception checks.",
				]),	
			},
			"bauta" : {
				name : "Bauta",
				description : desc([
					'Mask of Bauta: Protection',
					"This square angular-faced mask displays a muted expression and conveys the essence of durability. This mask grants you the following benefits.",
					"• Your bonus to AC is a +5 instead of a +1",
					"• You are resistant to physical damage from non magical weapons.",
					"• You do not provoke opportunity attacks.",
				]),	
			},
			"colombina" : {
				name : "Colombina",
				description : desc([
					'Mask of Columbina: Charm',
					"This elegant oval upper-faced mask displays a beautiful expression and conveys the essence of charm. This mask grants you the following benefits.",
					"• Targets that are immune to the charmed condition can still be targeted by your charming effects. This does not affect legendary resistance, legedary magic items, or boons.",
					"• You are immune to the charmed condition.",
					"• You have advanatge on persuassion checks.",
				]),	
			},
			"harlequin" : {
				name : "Harlequin",
				description : desc([
					'Mask of the Harlequin: Anger',
					"This diamond patterned mask displays a fiendish expression and conveys the essence of anger. This mask grants you the following benefits.",
					"• When you make a weapon attack roll, on a hit you can add your proficiency bonus to the weapons damage.",
					"• You are immune to the frightened condition.",
					"• You have resistance to bludgeoning, piercing, and slashing damage.",
				]),	
			},
		},
		"unproficiency" : {
			name : "Unproficiency",
			source : [["PBMS", 0]],
			minlevel : 7,
			description : desc(["At 7th level, Your ability to create successes in the most unexpected way through enchanting humor, mental manipulation, and by unconventional magical means has granted you unproficiency. When you make a roll with a tool, weapon, or skill in which you do not have proficiency you can add your charisma modifier to that roll."]),
		},
		"reckless abandon" : {
			name : "Reckless Abandon",
			source : [["PBMS", 0]],
			minlevel : 11,
			description : desc(["At 11th level, you can throw all caution to the wind to act with complete impulse. When you cast a spell on your turn, you can do so recklessly. Doing so gives you advantage on the spell attack roll and targets roll with disadvantage on the saving throws. However, any attack rolls against you have advantage and saving throws you make are made with disadvantage until your next turn."]),
		},
		"spoil of toil" : {
			name : "Spoil of Toil",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : desc(["At 15th level, you can use a reaction to enact spoil of toil. When you do so you choose one creature within 60ft that rolls a natural 20 or a natural 1 on an ability check, attack roll, or saving throw and turn it into a natural 1 or natural 20 respectively. Once you use this ability you can not do so again until you finish a long rest."]),
			action : ["reaction"],
			usages : 1,
			recovery : "long rest",
		},
		"holy fool" : {
			name : "Holy Fool",
			source : [["PBMS", 0]],
			minlevel : 20,
			description : desc(["At 20th level, you can choose two options when you gain benefits from a comedy or tragedy."]),
		},
	},	
};
AddSubClass("fool", "clown", {
	regExpSearch : /^(?=.*(playhouse|fool))(?=.*clown).*$/i,
	subname : "Playhouse of the Clown",
	source : [["PBMS", 0]],
	features : {	
		"subclassfeature3" : {
			name : "Juggler",
			source : [["PBMS", 0]],
			minlevel : 3,
			weaponProfs : {
				primary : ["scimitar", "shortsword"],
			},	
			description : desc([
				'At 3rd level you gain proficiency with weapons that possess the light property, and gain a +2 to attack rolls made with them. In battle, you can juggle three light weapons granting you a multiattack with each weapon. On your turn, you can begin to juggle as a bonus action. While juggling you gain the benefits stated below if you are not wearing heavy armor. You can juggle additional light weapons as you level. The total number you can juggle is equal to your proficiency bonus + 1.',
				"• When you make a ranged or melee weapon attack you can attack once with each weapon juggled.",
				"• You have advantage on dexterity checks and dexterity saving throws.",
				"• You can use charisma in place of strength and dexterity for attack and damage rolls.",
				"• Any light non-magical item can be juggled and used as a weapon dealing 1d4 + charisma bludgeoning damage.",
				"• Any juggled item gains the thrown property of 20/60",
			]),	
		},
		"subclassfeature6" : {
			name : "Trump Strike",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc(["At 6th level, you can use your otherwordly magic to exploit a foe’s distraction. Once per turn, you can deal an extra 3d6 force to one creature you hit by your juggling weapons when you surpass their AC by 5 or more. If you were to score a natural 20 the damage is increased to 6d6 force."]),
		},	
		"subclassfeature10" : {
			name : "Tumbling and Bumbling",
			source : [["PBMS", 0]],
			minlevel : 10,
			action : "action",
			description : desc([
				'At 10th level, you develop the ability to create magically enhanced chaos through acrobatics. As an action you can choose to tumble, cartwheel, and somersault around moving twice your movement speed as if you had taken the dash action. When you do all attack rolls against you have disadvantage, and hostile creatures that can see you that are within 30ft are subjected to the following effects.',
				"• Creatures concentrating on a spell must make a concentration check at the start of each of their turns.",
				"• Attack rolls and ability checks are made with disadvantage.",
				"• Creatures are unable to take reactions, or opportunity attacks.",
			]),	
		},
		"subclassfeature14" : {
			name : "Clown Trick",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc(["At 14th level, when you throw one of your juggled wapons you can preform a clown trick. When you do so on a hit the weapon does not deal damage, but instead pins down the target imposing the restrained condition, the target can make a Strengh saving throw at the start of their turn against your Spell Save DC ending the effect on a success.  While the target is restrained in this way you deal an additional 1d6 damage to the target whenever you make a weapon attack."]),
		},
	},
});
AddSubClass("fool", "mime", {
	regExpSearch : /^(?=.*(playhouse|fool))(?=.*mime).*$/i,
	subname : "Playhouse of the Mime",
	source : [["PBMS", 0]],
	features : {	
		"subclassfeature3" : {
			name : "Miming",
			source : [["PBMS", 0]],
			minlevel : 3,
			spellcastingExtra : ["silence"],
			usages : 1,
			recovery : "long rest",
			description : desc(["At 3rd level you are quite skilled in magical imitation and acting out a story through body motions. Your experience with this illusory magic has granted you the following benefits.",
				"• You learn sign language and have have advanatge on performance checks used to convey a message without words to another creature within 30 feet of you if that creature is capable of speaking a language.",
				"• You can replace any verbal components of a spell that you cast with somatic components.",
				"• You can choose to have any spell you cast take effect without it becoming visible, and any items or weapons you carry magically become invisible until you are no longer wielding them.",
				"• Once before a long rest you can cast the silence spell without consuming a spell slot or requiring concentration.",
			]),	
		},
		"subclassfeature6" : {
			name : "Mummer",
			source : [["PBMS", 0]],
			minlevel : 6,
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			description : desc(["At 6th level, you develop the magical ability to imitate one target you can see within 30 feet. That target must make a wisdom saving throw, on a failed save you begin to torment the target through imitation. That target takes 1d10 psychic damage and has disadvantage on their attack rolls for the next minute. You can use this feature a number of times before a long rest equal to you charisma modifier."]),
		},
		"subclassfeature6.1" : {
			name : "Mimic",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc(["At 6th level, you can expend two uses of your Jack in Box feature to summon a Mimic that takes the initial form of an object that you choose, and appears in an unoccupied space that you can see within 60 feet. This creature is friendly to you and your companions. The mimic disappears when it drops to 0 hit points or after one hour has passed. This creature has its own turn and rolls its own initiative. This creature obeys any verbal comman that you issue no action required. If you don’t issue any commands it defends itself from hostile creatures, but otherwise takes no actions."]),
		},
		"subclassfeature10" : {
			name : "Pantomime Spell",
			source : [["PBMS", 0]],
			minlevel : 10,
			spellcastingExtra : ["wall of force"],
			usages : 1,
			recovery : "long rest",
			description : desc(["At 10th level, you gain the wall of force spell specially designed for and by mimes. This spell can be cast once before a long rest without using a spell slot. In addition, whenever you cast this spell you can do so as a bonus action on your turn or a reaction on another creatures turn."]),
		},	
		"subclassfeature14" : {
			name : "Art of Imitation",
			source : [["PBMS", 0]],
			minlevel : 14,
			action : "action",
			usages : 1,
			recovery : "long rest",
			description : desc(["At 14th level, as an action you can magically imitate one creature in perfect likeness within 60ft of you with a challenge rating or level equal or less than yourself. Once before a long rest you can magically imitate what your chosen target did on their turn before yours. When you do so, you act out every action and movement the target made in perfect likeness, except you choose the target. If the target you are imitating dealt any damage or effect by spell, weapon, or natural weapon, you deal the same damage and effect on the corresponding target."]),
		},	
	},
});	
AddSubClass("fool", "puppeteer", {
	regExpSearch : /^(?=.*(playhouse|fool))(?=.*puppeteer).*$/i,
	subname : "Playhouse of the Puppeteer",
	source : [["PBMS", 0]],
	features : {	
		"subclassfeature3" : {
			name : "Puppet Maker",
			source : [["PBMS", 0]],
			minlevel : 3,
			action : [
				["bonus action", "Puppet (Command)"],
				["action", "Puppet (Senses)"]
			],
			description : desc(["At 3rd level, you craft a living puppet using one set of artisan tools and shadow magic. This puppet takes on a form that reflects your artisan tools and materials. This puppet is bound to you and obeys every command you give it. It takes its turn on your initiative. On your turn you can use a bonus action to mentally command the puppet(s) where to move and what action to take. You can also issue general commands such as guard a particular chamber.  If you don’t issue a command the puppet(s) only defend itself against hostile creatures. If you are incapacitated or the puppet is more than 60ft away from you it falls to the ground inanimate. If the puppet is dropped to 0hp it is destroyed, and you can magically restore the puppet during a long rest with your artisan tools and shadow magic. If the puppet has been damaged, but is not destroyed you can use the mending cantrip to restore its hit points regaining 2d6 hit points. You can craft one puppet at 3rd level and can craft an additional puppet at 6th level, 10th level, and 14th level. See the Puppet stat block below for additional construct details. You can also use an action to see through the puppets eyes and hear what it hears, and continue to do so until you dismiss it (no action required) to return to your normal senses. While perceiving the puppets senses, you can use your own senses instead of that of the puppet. You are blinded and deafened of your own senses while you do this. ",
			]),	
		},
		"subclassfeature3a" : {
			name : "Puppets",
			source : [["PBMS", 0]],
			minlevel : 3,
			usages : levels.map(function (n) {
					return n < 3 ? 0 : n < 6 ? 1 : n < 10 ? 2 : n < 14 ? 3 : 4;
			}),
			description : "",
		},	
		"subclassfeature3.1" : {
			name : "Captivate",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc(["At 3rd level when a creature attacks one of your puppets that attacker must make a wisdom saving throw against your spell DC. On a failure the attacker is charmed or frightened (your choice) by the puppet as long as it is within 30ft of it. If the attack succeeds they are immune to this effect for 24 hours from any of the puppets you have control over. The attacker can repeat the save throw if it takes damage from the puppet.",
			]),
		},	
		"subclassfeature6" : {
			name : "Puppet Strings",
			source : [["PBMS", 0]],
			minlevel  : 6,
			action : [
				["bonus action", "Transfer HP"],
			],	
			description : desc([
				"At 6th level the life force between you are your puppets are tethered together and when you are effected by a spell you can choose to have that spell extend to your puppets. Additionally, as a bonus action on your turn you can transfer hit points from yourself to one of your puppets or from one of your puppets to you. If you take all hit points from your puppet the puppet becomes inanimate until restored by you by sacrificing hit points. At this level you puppet gains a new action.",
				"Sapping Strings: When your puppet hits a target with an attack you can expend a spell slot so the target must make a constitution saving throw against your spell DC. On a failure the target takes an additional 1d8 necrotic damage for each level of slot expended. On a successful save the target takes half the damage. You regain hit points equal to any damage dealt.",
			]),	
		},
		"subclassfeature10" : {
			name : "Decoy",
			source : [["PBMS", 0]],
			minlevel : 10,
			action : ["bonus action", "reaction"],
			usages : "Charisma modifyer per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			description : desc([
				"At 10th level as a reaction or bonus action, but only once per round you can switch places with one of your puppets. Doing so you magically switch places in a sudden flash of smoke as long as a puppet is within 60ft of you. You can do this a number of times equal to you charisma modifier.",
			]),
		},	
		"subclassfeature14" : {
			name : "Magic of Puppets",
			source : [["PBMS", 0]],
			minlevel : 14,
			usages : 3,
			recovery : "long rest",
			description : desc([
				"At 14th level your puppets gain a small magical reservoir. The puppets can prepare and use one of your known 1st level spells, which uses your spell attack modifier and DC. This spell can be cast by your puppets collectively three times before a long rest. The chosen spell can be changed during a long rest.",
			]),
		},
	},
});	
AddSubClass("fool", "trickster", {
	regExpSearch : /^(?=.*(playhouse|fool))(?=.*trickster).*$/i,
	subname : "Playhouse of the Trickster",
	source : [["PBMS", 0]],
	features : {	
		"subclassfeature3" : {
			name : "Master of Disguise",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"At 3rd level, you have superior skills in visual deception. You can cast the disguise self spell without consuming a spell slot or requiring components. When you gain this feature you gain one mask option from the masquerade feature before you reach the appropriate level. Once you reach 5th level you can choose another mask option.",
			]),	
			extraname : "Master of Disguise",
			extrachoices : ["Jester", "Pierrot", "Zanni", "Plague", "Volto", "Bauta", "Colombina", "Harlequin"],
			extraTimes : 1,
			"jester" : {
				name : "Jester",
				description : desc([
					'Mask of the Jester: Comedy',
					"This jester-faced mask displays a joyful expression and conveys the essence of comedy. This mask grants you the following benefits.",
					"• You can take the dash and disengage action as a bonus ation on your turn.",
					"• You are immune to the restrained and grappled condition.",
					"• You gain one additional comedy when you benefit from the comedy of Comedy and Tragedy.",
				]),	
			},
			"pierrot" : {
				name : "Pierrot",
				description : desc([
					'Mask of the Pierrot: Tragedy',
					"This sad clown-faced mask displays a mournful expression and conveys the essence of tragedy. This mask grants you the following benefits.",
					"• You can take the hide and disengage action as a bonus action.",
					"• You are immune to the blinded and deafened condition.",
					"• You gain one additional tragedy when you benefit from the tragedy of Comedy and Tragedy.",
				]),	
			},
			"zanni" : {
				name : "Zanni",
				description : desc([
					'Mask of Zanni: Foolish',
					"This long nose upper-faced mask displays a long narrow nose and conveys the expression of a fool. This mask grants you the following benefits.",
					"• You have advantage on all rolls made for a foolish act.",
					"• You are immune to the prone condition.",
					"• You can cast the gift of gab spell once before a short or long rest without consuming a spell slot.",
				]),	
			},
			"plague" : {
				name : "Plague",
				description : desc([
					'Mask of the Plague: Pestilence',
					"This bird-faced mask displays a solemn expression and conveys the essence of sickness. This mask grants you the following benefits.",
					"• You can choose to replace any type of damage you deal with a spell with the poison damage type.",
					"• You are immune to being poisoned and diseased.",
					"• When you hit with an attack the target must make a Constitution saving throw against your spell DC. On a failed save the creature becomes diseased and is now vulnerable to poison damage.",
				]),	
			},
			"volto" : {
				name : "Volto",
				description : desc([
					'Mask of the Volto: Mystery',
					"This porcelain full-faced mask displays a emotionless expression and conveys the essence of mystery. This mask grants you the following benefits.",
					"• You gain the benefits of the nondetection spell.",
					"• You are immune to the effects of telepathy and detect thoughts spell.",
					"• You have advantage on deception checks.",
				]),	
			},
			"bauta" : {
				name : "Bauta",
				description : desc([
					'Mask of Bauta: Protection',
					"This square angular-faced mask displays a muted expression and conveys the essence of durability. This mask grants you the following benefits.",
					"• Your bonus to AC is a +5 instead of a +1",
					"• You are resistant to physical damage from non magical weapons.",
					"• You do not provoke opportunity attacks.",
				]),	
			},
			"colombina" : {
				name : "Colombina",
				description : desc([
					'Mask of Columbina: Charm',
					"This elegant oval upper-faced mask displays a beautiful expression and conveys the essence of charm. This mask grants you the following benefits.",
					"• Targets that are immune to the charmed condition can still be targeted by your charming effects. This does not affect legendary resistance, legedary magic items, or boons.",
					"• You are immune to the charmed condition.",
					"• You have advanatge on persuassion checks.",
				]),	
			},
			"harlequin" : {
				name : "Harlequin",
				description : desc([
					'Mask of the Harlequin: Anger',
					"This diamond patterned mask displays a fiendish expression and conveys the essence of anger. This mask grants you the following benefits.",
					"• When you use your reckless abandon feature you score a critical hit on a 18 or higher.",
					"• You are immune to the frightened condition.",
					"• You have resistance to any damage received from attacks that hit with advantage.",
				]),	
			},
		},	
		"subclassfeature6" : {
			name : "Superior Desception",
			source : [["PBMS", 0]],
			minlevel : 6,
			skills : ["Persuasion", "Deception"],
			description : desc([
				"At 6th level, you gain expertise in the deception and persuassion skill if you have proficiency with those skills. If you do not already have proficeincy you gain proficiecny and expertise. In addition, you are immune to the effects of the spell zone of truth, however, you do not supercede a creatures divine awareness if they are a challenge rating of 20 or higher. Lastly, when a creature rolls for a saving throw or an ability check against one of your illusion or enchantment spells your DC is calculated as follows; 8 + charisma modifier + double proficiency bonus. ",
			]),
			skillstxt : "Expertise with Persuasion and Deception",
		},
		"subclassfeature10" : {
			name : "Endless Tricks",
			source : [["PBMS", 0]],
			minlevel : 10,
			description : desc([
				"At 10th level, your trickery is never ending and you always seek to surprise even the most familiar foes. When you reach this level you can choose another set of tricks to specialize in.",
			]),	
			extraname : "Endless Tricks",
			extrachoices : ["horror", "deception", "jesting", "mischief", "vanishment"],
			"horror" : {
				name : "Tricks of Horror",
				spellcastingBonus : [{
					name : "Tricks of Horror",
					spells : ["cause fear", "hex", "phantasmal force", "darkness", "bestow curse", "fear", "phantasmal killer", "shadow of moil", "danse macabre", "enervation"],
					selection : ["cause fear", "hex", "phantasmal force", "darkness", "bestow curse", "fear", "phantasmal killer", "shadow of moil", "danse macabre", "enervation"],
					times : 10,
				}],
			},
			
			"deception" : {
				name : "Tricks of Deception",
				spellcastingBonus : [{
					name : "Tricks of Deception",
					spells : ["distort value", "silent image", "blur", "mirror image", "hypnotic pattern", "major image", "confusion", "hallucinatory terrain", "mislead", "seeming"],
					selection : ["distort value", "silent image", "blur", "mirror image", "hypnotic pattern", "major image", "confusion", "hallucinatory terrain", "mislead", "seeming"],
					times : 10,
				}],
			},
			
			"jesting" : {
				name : "Tricks of Jesting",
				spellcastingBonus : [{
					name : "Tricks of Jesting",
					spells : ["tasha's hideous laughter", "charm person", "enthrall", "suggestion", "fast friends", "incite greed", "compulsion", "charm monster", "dominate person", "mind fog"],
					selection : ["tasha's hideous laughter", "charm person", "enthrall", "suggestion", "fast friends", "incite greed", "compulsion", "charm monster", "dominate person", "mind fog"],
					times : 10,
				}],
			},
			
			"mischief" : {
				name : "Tricks of Mischief",
				spellcastingBonus : [{
					name : "Tricks of Mischief",
					spells : ["grease", "taunt", "nathair's mischief", "pyrotechnics", "stinking cloud", "slow", "shout", "polymorph", "animate objects", "telekinesis"],
					selection : ["grease", "taunt", "nathair's mischief", "pyrotechnics", "stinking cloud", "slow", "shout", "polymorph", "animate objects", "telekinesis"],
					times : 10,
				}],
			},
			
			"vanishment" : {
				name : "Tricks of Vanishment",
				spellcastingBonus : [{
					name : "Tricks of Vanishment",
					spells : ["erase", "unseen servant", "invisibility", "wristpocket", "blink", "nondetection", "banishment", "greater invisibility", "far step", "temporal shunt"],
					selection : ["erase", "unseen servant", "invisibility", "wristpocket", "blink", "nondetection", "banishment", "greater invisibility", "far step", "temporal shunt"],
					times : 10,
				}],
			},
		},
		"subclassfeature14" : {
			name : "Distorted Reality",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc([
				"At 14th level, you have achieved the greatest form of trickery that is only achieved by twisting the minds of the creatures around you. When you cast an illusion spell, creatures that do not rely on sight such as blind sight are still fooled as the illusion roots within their mind rather than as a visual projection. In addition, creatures with truesight that are not immune to being charmed or frightened also are affected by your illusion spells in the same manner.",
			]),	
		},
	},
});
//Companion for Fool Puppeteer Subclass
CreatureList["golem"] = {
	name : "Golem",
	source : [["PBMS", 0]],
	size : 5,
	type : "Construct",
	alignment : "Unaligned",
	ac : 16,
	hp : 20,
	hd : [3, 6],
	speed : "25 ft",
	proficiencyBonusLinked : true,
	scores : [16, 11, 16, 1, 3, 1],
	damage_immunities : ["bludgeoning, piercing, and slashing from non-adamantine weapons", "poison"],
	condition_immunities : "exhausted, paralyzed, petrified, poisoned, stunned, unconscious",
	senses : "Darkvision 60 ft.",
	passivePerception : 10 + "Wisdom",
	challengeRating : 0,
	attacksAction : 2,
	attacks : [{
		name : "Slam",
		ability : 1,
		damage : [2, 6, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : true,
	}],
	traits : [{
		name : "Absorption",
		description : "When the golem receives a specific type of damage, it takes no damage and instead regains a number of hit points equal to the damage taken from the absorption type. This is determined by the type of golem.",
		joinString : "\n   "
	}, {
		name : "Immutable Form",
		description : "The Golem is immune to any spell that would alter it's form unless you will it.",
		joinString : "\n   "
	}, {
		name : "Magic Resistance",
		description : "The Golem has advantage on saving throws against spells and other magical effects.",
		joinString : "\n   "
	}, {	
		name: "Magic Weapons",
		description : "The Golem's weapon attacks ae considered magical for the purpose of overcoming resistances.",
		joinString : "\n   "
	}],
};
CreatureList["puppet"] = {
	name : "Puppet",
	source : [["PBMS", 0]],
	size : 4,
	type : "Construct",
	alignment : "Unaligned",
	ac : 18,
	hp : 25,
	hd : [6, 6],
	speed : "25 ft",
	proficiencyBonusLinked : true,
	scores : [10, 10, 10, 10, 10, 10],
	condition_immunities : "exhausted, paralyzed, petrified, poisoned, stunned, unconscious",
	senses : "Blindsight 60 ft, Blind Beyond this Radius.",
	passivePerception : 10 + "Wisdom",
	challengeRating : "1",
	attacksAction : 2,
	attacks : [{
		name : "Slam",
		ability : 6,
		damage : [1, 6, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["-Cha", "Prof"],
		abilitytodamage : false,
	}],
	traits : [{
		name : "Antimagic Susceptibility",
		description : "The puppet is incapacitated while in the area of antimagic field. If targeted by a dispel magic, you must succeed on a constitution saving throw against the caster's spell or lose connection with the puppet.",
		joinString : "\n   "
	}, {
		name : "False Appearance",
		description : "While the puppet remains motionless, it is indistinguishable from an ordinary puppet.",
		joinString : "\n   "
	}, {
		name : "Cantrip",
		description : "The Puppet can prepare and use one of your known cantrips, which uses your spell attack modifier and DC. The chosen cantrip can be changed during a long rest.",
		joinString : "\n   "
	}, {	
		name: "Sapping Strings",
		description : "(PUPPETEER LEVEL 6) When your puppet hits a target with an attack you can expend a spell slot so the target must make a constitution saving throw against your spell DC. On a failure the target takes an additional 1d8 necrotic damage for each level of slot expended. On a successful save the target takes half the damage. You regain hit points equal to any damage dealt.",
		joinString : "\n   "
	}],
};
//Mystic Class with 4 Subclasses
ClassList.mystic = {
	
	regExpSearch : /mystic/i,
	name : "Mystic",
	source : [["PBMS", 0]],
	primaryAbility : ["Wisdom"],
	abilitySave : 5,
	prereqs : "Wisdom 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Cha", "Wis"],
	skillstxt : {
		primary : "Choose three from Arcana, Deception, History, Insight, Investigation, Nature, Perception, Performance, Persuasion.",
	},
	armorProfs : {
		primary : [false, false, false, false],
	},
	toolsProfs : {
		primary : [["Navigator's Tools", "Wis"], ["Cartographer's Tools", "Int"]],
	},	
	weaponProfs : {
		primary : [true, false],
	},
	equipment : "Mystic's starting equipment:" +
		"\n \u2022 An orbuculum;" +
		"\n \u2022 A scholar's pack -or- An explorer's pack." +
		"\n\nAlternatively, choose 3d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Mystic Order", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : 0,
		spells : "list",
		prepared : false,
	},
	spellcastingList : { 
		spells : ["borrowed knowledge", "locate object", "see invisibility", "clairvoyance", "tongues", "divination", "locate creature", "contact other plane", "scrying"],
	},
	features : {
		"spellslotremoval1" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 1,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -2, text : ""},
			],
		},
		"spellslotremoval2" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 2,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -3, text : ""},
			],
		},
		"spellslotremoval3" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 3,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -2, text : ""},
			],
		},
		"spellslotremoval4" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 4,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
			],
		},
		"spellslotremoval5" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 5,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -2, text : ""},
			],
		},
		"spellslotremoval6" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 6,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
			],
		},
		"spellslotremoval7" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 7,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -1, text : ""},
			],
		},
		"spellslotremoval8" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 8,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -2, text : ""},
			],
		},
		"spellslotremoval9" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 9,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -1, text : ""},
			],
		},
		"spellslotremoval10" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 10,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -2, text : ""},
			],
		},
		"spellslotremoval11" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 11,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
			],
		},
		"spellslotremoval12" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 12,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
			],
		},
		"spellslotremoval13" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 13,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -1, text : ""},
			],
		},
		"spellslotremoval14" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 14,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -1, text : ""},
			],
		},
		"spellslotremoval15" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 15,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl8", mod : -1, text : ""},
			],
		},
		"spellslotremoval16" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 16,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl8", mod : -1, text : ""},
			],
		},
		"spellslotremoval17" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 17,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl8", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl9", mod : -1, text : ""},
			],
		},
		"spellslotremoval18" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 18,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl8", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl9", mod : -1, text : ""},
			],
		},
		"spellslotremoval19" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 19,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl8", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl9", mod : -1, text : ""},
			],
		},
		"spellslotremoval20" : {
			name : "",
			source : [["PBMS", 0]],
			minlevel : 20,
			addMod : [
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl1", mod : -4, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl2", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl3", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl4", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -3, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -2, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl8", mod : -1, text : ""},
				{ type : "", field : "SpellSlots.CheckboxesSet.lvl9", mod : -1, text : ""},
			],
		},
		"orbuculum" : {
			name : "Orbuculum",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"At 1st level, your practice of ballistic combat within extra-dimensional spaces gives you mastery of a mystical combat style that uses a magical ballistic known as a Orbuculum.. This mystical fighting style uses a floating orb that bombards an opponent at critical moments in conjunction with synchronized hand motions to manipulate it. This weapon is magically linked to the user and is manipulated by the flow of mana. This weapon is considered magical for the purpose of overcoming resistance and immunity. At 1st level this mystical weapon deals 1d4 force damage. Your Orbuculum disappears to an extra-dimensional space if it is more than 30ft away from you for 1 minute or more. You can summon or dismiss this weapon as a bonus action on your turn shunting it into an extra-dimensional space. This weapon cannot be lost or stolen. You gain the following benefits while you are wielding only the Orbuculum.",
					"• The Orbuculum has a weapon range of 30ft without disadvantage, and 60ft with disadvantage. This weapon returns to you immediately after a strike.",
					"• You can use Charisma instead of strength or dexterity for attack and damage rolls with your Orbuculum.",
					"• When you use the attack action with your Orbuculum, you can make one additional attack as a bonus action. Assuming you have not already taken a bonus action. This attack can be on the same target or another within range.",
			]),
			toNotesPage : [{
				name : "Orbuculum Strikes",
				note : [
					"Aphelion Strike",
					"When you make an attack with the Orbuculum you can spend 1 mana point to target a creature within 60ft without disadvantage.",
					"Eclipse Ward",
					"When you are targeted with an attack in which an attack roll was made you can spend 1 mana point as a reaction to possibly block the attack by gaining a +2 to your AC. This AC bonus remains until the start of your next turn",
					"Orbiting Mind",
					"When you use mana to cast a spell with concentration you can spend an additional mana point to cast it without requiring concentration. Doing so the spell lasts for the full duration unless dismissed by you no action required. You can only have one spell active in this way at a time.",
					"Perihelion Crash",
					"When you make an attack with the Orbuculum you can spend 1 mana point to target a creature within 30ft with advantage.",
					"Zenith Blast",
					"When you make an attack with the Orbuculum you can spend 1 mana point to unleash a blast of force that deals 2d8 force damage to all creatures within 15ft radius of the original target. These creatures have to make a DC dexterity save throw. On a success the creatures take only half damage.",
				],
			}],	
			additional : levels.map(function (n) {
				return "1d" + (n < 5 ? 4 : n < 9 ? 6 : n < 13 ? 8 : n < 17 ? 10 : 12);
			}),
			action : [["bonus action", "Summon/Dismiss Orbuculum"],["bonus action", "Orbuculum Strike (with Attack action)"]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.mystic && classes.known.mystic.level && (v.theWea.monkweapon || v.baseWeaponName == "orbuculum")) {
							v.theWea.monkweapon = true;
							var aMonkDie = function (n) { return n < 5 ? 4 : n < 9 ? 6 : n < 13 ? 8 : n < 17 ? 10 : 12; }(classes.known.mystic.level);
							try {
								var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
							} catch (e) {
								var curDie = 'x';
							}
							if (isNaN(curDie) || curDie < aMonkDie) {
								fields.Damage_Die = '1d' + aMonkDie;
							}
						}
					},
					5
				],
			},
		},
		"mana" : {
			name : "Mana",
			source : [["PBMS", 0]],
			minlevel : 1,
			limfeaname : "Mana",
			usages : [4, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
			recovery : "short rest",
			description : desc([
				"Starting at 1st level, your experience with cosmic travel allows you to harness mystic power known as Mana. Your access to this power is represented by a number of mana points, Your Mystic level determines the number of points you have, as shown in the mana points column of the mystic table. You spend mana points to fuel various cosmic abilities. When you spend a point, it is unavailable until you finish a short or long rest, at the end of which you draw back all of your expended mana. Some mana features require your target to make a saving throw to resist its effects. The saving throw DC is calculated as follows.",
			]),
		},
		"ward" : {
			name : "Ward",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc("Without armor and no shield, my AC is 10 + Wisdom modifier + Charisma modifier"),
			armorAdd : "Ward",
		},
		"secret knowledge" : {
			name : "Secret Knowledge",
			source : [["PBMS", 0]],
			minlevel : 2,
			description : "Your connection to mana helps you uncover secret knowledge during your studies on the cosmos, life in between realms, and acquiring fragments of lost history. This knowledge grants you great advantages during your travels, investigations, and combat. You gain the Guidance and True Strike Cantrip. Your Spells cost 1 Mana Point per level of spell.",
			spellcastingBonus : [{
				name : "Secret Knowledge",
				spells : ["guidance", "true strike", "comprehend languages", "detect evil and good", "detect magic", "identify"],
				selection : ["guidance", "true strike", "comprehend languages", "detect evil and good", "detect magic", "identify"],
				times : 6,
			}],
		},
		"subclassfeature3" : {
			name : "Mystic Order",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"When you reach 3rd level, you dedicate yourself to one of the Mystic Orders that dedicate themselves to a cosmic law of existence; Order of Time, Order of Space, and Order of Gravity. Each Mystic Order is detailed at the end of the class description. Your order grants you features at 3rd, 6th, 10th, and 14th level.",
			]),
		},
		"cosmic traveler" : {
			name : "Cosmic Traveler",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"You are particularly familiar with the realms and those in between, and are adept as traveling, manipulating, and surviving in such dimensions, therefore you do not require air to breathe or survive. Additionally, your studies of the cosmos has given you great knowledge and understanding of the worlds. When you make a Charisma, Wisdom, or  Intelligence check related to your studies, experiences, or travels, your proficiency bonus is doubled if you are using a skill that you are proficient in. While traveling an hour or more within a plane or dimension, you gain the following benefits.",
				"• Even when you are engaged in other activity while traveling (such as foraging, navigating, or investigating), you remain alert to danger.",
				"• Your group cannot become lost, even by magical means.",
				"• You always know the flow of time and what time it is within the realm.",
				"• You can always determine where a portal leads.",
				"• You are immune to the altering effects of residing on a realm, plane, or dimension in which you are traveling. Additionally, allies traveling with you have advantage on rolls against realm altering effects.",
				"• Difficult terrain or movement reduction imposed by a realm during travel does not slow your groups travel.",
			]),
		},
		"expertise" : function() {
				var a = {
					name : "Expertise",
					source : [["PBMS", 0]],
					minlevel : 5,
					description : desc("I gain expertise with two skills I am proficient with; two more at 10th level"),
					skillstxt : "Expertise with any two skill proficiencies, and two more at 10th level",
					additional : levels.map(function (n) {
						return "with " + (n < 10 ? 2 : 4) + " skills";
					}),
					extraname : "Expertise",
					extrachoices : ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival", "Cartographer's Tools", "Navigator's Tools"],
					extraTimes : levels.map(function (n) { return n < 10 ? 2 : 4; }),
					"cartographer's tools" : {
						name : "Cartographer's Tools Expertise", description : "",
						source : [["PBMS", 0]],
						prereqeval : function(v) {
							if ((/cartographer.?s.*tools/i).test(What('Too Text')) && tDoc.getField("Too Prof").isBoxChecked(0)) {
								return tDoc.getField("Too Exp").isBoxChecked(0) ? "markButDisable" : true;
							} else {
								return CurrentProfs.tool["cartographer's tools"] || (/cartographer.?s.{1,3}tools/i).test(v.toolProfs.toString());
							}
						},
						eval : function () {
							if ((/cartographer.?s.*tools/i).test(What('Too Text'))) {
								Checkbox('Too Exp', true);
							}
						},
						removeeval : function () {
							if ((/cartographer.?s.*tools/i).test(What('Too Text'))) {
								Checkbox('Too Exp', false);
							}
						}
					},
					"navigator's tools" : {
						name : "Navigator's Tools Expertise", description : "",
						source : [["PBMS", 0]],
						prereqeval : function(v) {
							if ((/navigator.?s.*tools/i).test(What('Too Text')) && tDoc.getField("Too Prof").isBoxChecked(0)) {
								return tDoc.getField("Too Exp").isBoxChecked(0) ? "markButDisable" : true;
							} else {
								return CurrentProfs.tool["navigator's tools"] || (/navigator.?s.{1,3}tools/i).test(v.toolProfs.toString());
							}
						},
						eval : function () {
							if ((/navigator.?s.*tools/i).test(What('Too Text'))) {
								Checkbox('Too Exp', true);
							}
						},
						removeeval : function () {
							if ((/navigator.?s.*tools/i).test(What('Too Text'))) {
								Checkbox('Too Exp', false);
							}
						}
					}
				};
				for (var i = 0; i < a.extrachoices.length; i++) {
					var attr = a.extrachoices[i].toLowerCase();
					if (a[attr]) continue;
					a[attr] = {
						name : a.extrachoices[i] + " Expertise",
						description : "",
						source : a.source,
						skills : [[a.extrachoices[i], "only"]],
						prereqeval : function(v) {
							return v.skillProfsLC.indexOf(v.choice) === -1 ? false : v.skillExpertiseLC.indexOf(v.choice) === -1 ? true : "markButDisable";
						}
					};
				}
				return a;
			}(),
		"phase" : {
			name : "phase",
			source : [["PBMS", 0]],
			minlevel : 7,
			description : desc("My saves vs. areas of effect negate damage on success and halve it on failure"),
			savetxt : { text : ["Save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] },
		},
		"unbreakable will" : {
			name : "Unbreakable Will",
			source : [["PBMS", 0]],
			minlevel : 11,
			description : desc([
				"Starting at 11th level, you gain immunity to being charmed, frightened, or possessed.",
			]),
			savetxt : { immune : ["Charmed", "Frightened", "Possessed"] },
		},
		"mystic action surge" : {
			name : "Mystic Action Surge",
			source : [["PBMS", 0]],
			minlevel : 13,
			description : desc([
				"At 13th level, your mind is incredibly quick and the mana flowing through you provides you the power to act beyond normal capabilities. On your turn, you can take one additional action. This action can be used to take another attack action with either a weapon or spell. Once you use this feature, you must finish a short or long rest before you can use it again.",
			]),
			usages : 1,
			recovery : "short rest",
		},
		"plane sight" : {
			name : "Plane Sight",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : desc([
				"At 15th your knowledge of the truth of existence has provided you with the power to see things as they truly are. You gain 60ft Truesight.",
			]),
			vision : [
				["Truesight", 60],
			],
		},
		"space escape" : {
			name : "Space Escape",
			source : [["PBMS", 0]],
			minlevel : 18,
			action : [["bonus action", "Vanish (5 MP)"]],
			description : "At 18th level you can spend 5 mana points as a bonus action at the end of your turn to vanish into an extra dimensional space until the start of your next where you reappear in the nearest unoccupied space.",
		},
		"oneness" : {
			name : "Oneness",
			source : [["PBMS", 0]],
			minlevel : 20,
			usages : 1,
			recovery : "long rest",
			action : ["action", "Oneness"],
			savetxt : {	
				immune : ["exhausted", "disease", "poisoned", "magic that would alter your body or mind"],
				text : ["don't require air, drink, or food"],
			},
			description : desc([
				"At 20th level your knowledge, familiarity, and constant exposure to the realms and those in between have granted you the ability to channel mana with ease becoming one with the cosmos. Your life within alternate dimensions has granted you an altered physiology. As such, you cannot be afflicted with exhausted, disease, and poisoned conditions. You also do not require food, air, or drink; and magic cannot alter your mind or body. Lastly, once as an action before a long rest you can become an open channel for mana restoring all expended mana points.",
			]),
		},	
	},
};
AddSubClass("mystic", "gravity", {

	regExpSearch : /^(?=.*mystic)(?=.*gravity).*$/i,
	subname : "Order of Gravity",
	source : [["PBMS", 0]],	
	features : {
		"subclassfeature3a3" : {
			name : "Gravity Magic",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Gravity Magic",
				spells : ["magnify gravity", "immovable object"],
				selection : ["magnify gravity", "immovable object"],
				times : 2,
			}],	
		},
		"subclassfeature3a5" : {
			name : "Gravity Magic",
			source : [["PBMS", 0]],
			minlevel : 5,
			description : "",
			spellcastingBonus : [{
				name : "Gravity Magic",
				spells : ["pulse wave"],
				selection : ["pulse wave"],
				times : 1,
			}],	
		},
		"subclassfeature3a7" : {
			name : "Gravity Magic",
			source : [["PBMS", 0]],
			minlevel : 7,
			description : "",
			spellcastingBonus : [{
				name : "Gravity Magic",
				spells : ["gravity sinkhole"],
				selection : ["gravity sinkhole"],
				times : 1,
			}],	
		},
		"subclassfeature3a9" : {
			name : "Gravity Magic",
			source : [["PBMS", 0]],
			minlevel : 9,
			description : "",
			spellcastingBonus : [{
				name : "Gravity Magic",
				spells : ["telekinesis"],
				selection : ["telekinesis"],
				times : 1,
			}],	
		},
		"subclassfeature3a11" : {
			name : "Gravity Magic",
			source : [["PBMS", 0]],
			minlevel : 11,
			description : "",
			spellcastingBonus : [{
				name : "Gravity Magic",
				spells : ["gravity fissure"],
				selection : ["gravity fissure"],
				times : 1,
			}],	
		},
		"subclassfeature3a13" : {
			name : "Gravity Magic",
			source : [["PBMS", 0]],
			minlevel : 13,
			description : "",
			spellcastingBonus : [{
				name : "Gravity Magic",
				spells : ["reverse gravity"],
				selection : ["reverse gravity"],
				times : 1,
			}],	
		},
		"subclassfeature3a15" : {
			name : "Gravity Magic",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : "",
			spellcastingBonus : [{
				name : "Gravity Magic",
				spells : ["darkstar"],
				selection : ["darkstar"],
				times : 1,
			}],	
		},
		"subclassfeature3a17" : {
			name : "Gravity Magic",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : "",
			spellcastingBonus : [{
				name : "Gravity Magic",
				spells : ["ravenous void"],
				selection : ["ravenous void"],
				times : 1,
			}],	
		},
		"subclassfeature3b" : {
			name : "Permanency",
			source : [["PBMS", 0]],
			minlevel : 3,
			action : [["bonus action", "Permanency (1-3 MP)"]],
			description : "At 3rd level you can manipulate the gravitational pressure around one person or object of your choice within 60ft. You can spend 1 mana point to grant a +1 bonus to AC for 1 hour.. You can do this to a max of +3 to AC which would cost 3 mana points.",
		},
		"subclassfeature6" : {
			name : "Gravitational Strike",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : "At 6th level you can spend 1 mana point to magnify the power of one of your strikes with increased gravitational pressure. Doing so the strike deals an additional dice of damage. This can only be used once on a single attack. You can however use additional mana points on each separate attack.",
		},
		"subclassfeature10" : {
			name : "Diamagnetic",
			source : [["PBMS", 0]],
			minlevel : 10,
			action : [["action", "fly (2 MP)"]],
			description : "At 10th level you can spend 2 mana point to alter the gravitational effects on your body giving yourself your own gravitational field. Doing so grants you the ability to cast the fly spell upon your self.",
			spellcastingBonus : {
				name : "Diamagnetic",
				spells : ["fly"],
				selection : ["fly"],
				firstCol : 2,
				times : 1,
			},
		},
		"subclassfeature14" : {
			name : "Over Exertion",
			source : [["PBMS", 0]],
			minlevel : 14,
			action : [["action", "Over Exertion (2 MP)"]],
			description : "At 14th level you can spend 2 mana points to exert gravitational pressure to any creature you choose within 60ft of you. Doing so each targeted creature must make a DC constitution save throw when ever they attempt an attack roll, ability check, or saving throw within range. On a fail three target gains one level of exhaustion. (Max 3)",
		},
		"liminal existence" : {
			name : "Liminal Existence",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : "When you reach 17th level you can spend four mana points to cast the Plane Shift spell. ",
			spellcastingBonus : {
				name : "Liminal Existence",
				spells : ["plane shift"],
				selection : ["plane shift"],
				firstCol : 4,
				times : 1,
			},
		},
	},
});
AddSubClass("mystic", "light", {

	regExpSearch : /^(?=.*mystic)(?=.*light).*$/i,
	subname : "Order of Light",
	source : [["PBMS", 0]],	
	features : {
		"subclassfeature3a3" : {
			name : "Light Magic",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Light Magic",
				spells : ["guiding bolt", "moonbeam"],
				selection : ["guiding bolt", "moonbeam"],
				times : 2,
			}],	
		},
		"subclassfeature3a5" : {
			name : "Light Magic",
			source : [["PBMS", 0]],
			minlevel : 5,
			description : "",
			spellcastingBonus : [{
				name : "Light Magic",
				spells : ["daylight"],
				selection : ["daylight"],
				times : 1,
			}],	
		},
		"subclassfeature3a7" : {
			name : "Light Magic",
			source : [["PBMS", 0]],
			minlevel : 7,
			description : "",
			spellcastingBonus : [{
				name : "Light Magic",
				spells : ["greater invisibility"],
				selection : ["greater invisibility"],
				times : 1,
			}],	
		},
		"subclassfeature3a9" : {
			name : "Light Magic",
			source : [["PBMS", 0]],
			minlevel : 9,
			description : "",
			spellcastingBonus : [{
				name : "Light Magic",
				spells : ["wall of light"],
				selection : ["wall of light"],
				times : 1,
			}],	
		},
		"subclassfeature3a11" : {
			name : "Light Magic",
			source : [["PBMS", 0]],
			minlevel : 11,
			description : "",
			spellcastingBonus : [{
				name : "Light Magic",
				spells : ["sunbeam"],
				selection : ["sunbeam"],
				times : 1,
			}],	
		},
		"subclassfeature3a13" : {
			name : "Light Magic",
			source : [["PBMS", 0]],
			minlevel : 13,
			description : "",
			spellcastingBonus : [{
				name : "Light Magic",
				spells : ["crown of stars"],
				selection : ["crown of stars"],
				times : 1,
			}],	
		},
		"subclassfeature3a15" : {
			name : "Light Magic",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : "",
			spellcastingBonus : [{
				name : "Light Magic",
				spells : ["sunburst"],
				selection : ["sunburst"],
				times : 1,
			}],	
		},
		"subclassfeature3a17" : {
			name : "Light Magic",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : "",
			spellcastingBonus : [{
				name : "Light Magic",
				spells : ["prismatic wall"],
				selection : ["prismatic wall"],
				times : 1,
			}],	
		},
		"subclassfeature3b" : {
			name : "Starlight",
			source : [["PBMS", 0]],
			minlevel : 3,
			action : [["action", "Starlight (1 MP)"]],
			description : "At 3rd level as an action you can channel pure radiant energy through your orbuculum for 1 hour by spending 1 mana point. When you do so your orbuculum damage changes to radiant and sheds bright daylight in a 20ft radius and dim light for an additional 20ft radius. This effect works in magical darkness. While active when a creature is hit by your orbuculum that target must make a constitution save throw or be blinded until the end of their next turn.",
		},
		"subclassfeature6" : {
			name : "Gleaming Orb",
			source : [["PBMS", 0]],
			minlevel : 6,
			action : [["action", "Color Spray (1+ MP)"]],
			description : "At 6th level, as an action you can spend 1 mana point to cast the color spray spell without components using only your orbuculum as a spell focus. See spell for details. You can expend additional mana points to upcast this spell.",
			spellcastingBonus : {
				name : "Gleaming Orb",
				spells : ["color spray"],
				selection : ["color spray"],
				firstCol : 1,
				times : 1,
			},
		},
		"subclassfeature10" : {
			name : "Photonomy",
			source : [["PBMS", 0]],
			minlevel : 10,
			action : [["reaction", "Photonomy (2 MP)"]],
			description : "At 10th level you can spend 2 mana point to alter the gravitational effects on your body giving yourself your own gravitational field. Doing so grants you the ability to cast the fly spell upon your self.",
			savetxt : {
				immune : ["radiant", "blinded (from light produced by magic)"],
			},
		},
		"subclassfeature14" : {
			name : "Shimmering Prism",
			source : [["PBMS", 0]],
			minlevel : 14,
			action : [["action", "Prismatic Spray (3 MP)"]],
			description : "At 14th level , as an action you can spend 3 mana points to cast the Prismatic Spray spell without components using your orbuculum as a spell focus",
			spellcastingBonus : {
				name : "Shimmering Prism",
				spells : ["prismatic spray"],
				selection : ["prismatic spray"],
				firstCol : 3,
				times : 1,
			},
		},	
		"liminal existence" : {
			name : "Liminal Existence",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : "When you reach 17th level you can spend four mana points to cast the Plane Shift spell. ",
			spellcastingBonus : {
				name : "Liminal Existence",
				spells : ["plane shift"],
				selection : ["plane shift"],
				firstCol : 4,
				times : 1,
			},
		},
	},
});
AddSubClass("mystic", "space", {

	regExpSearch : /^(?=.*mystic)(?=.*space).*$/i,
	subname : "Order of Space",
	source : [["PBMS", 0]],	
	features : {
		"subclassfeature3a3" : {
			name : "Space Magic",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Space Magic",
				spells : ["expeditious retreat", "wristpocket"],
				selection : ["expeditious retreat", "wristpocket"],
				times : 2,
			}],	
		},
		"subclassfeature3a5" : {
			name : "Space Magic",
			source : [["PBMS", 0]],
			minlevel : 5,
			description : "",
			spellcastingBonus : [{
				name : "Space Magic",
				spells : ["galder's tower"],
				selection : ["galder's tower"],
				times : 1,
			}],	
		},
		"subclassfeature3a7" : {
			name : "Space Magic",
			source : [["PBMS", 0]],
			minlevel : 7,
			description : "",
			spellcastingBonus : [{
				name : "Space Magic",
				spells : ["dimension door"],
				selection : ["dimension door"],
				times : 1,
			}],	
		},
		"subclassfeature3a9" : {
			name : "Space Magic",
			source : [["PBMS", 0]],
			minlevel : 9,
			description : "",
			spellcastingBonus : [{
				name : "Space Magic",
				spells : ["passwall"],
				selection : ["passwall"],
				times : 1,
			}],	
		},
		"subclassfeature3a11" : {
			name : "Space Magic",
			source : [["PBMS", 0]],
			minlevel : 11,
			description : "",
			spellcastingBonus : [{
				name : "Space Magic",
				spells : ["arcane gate"],
				selection : ["arcane gate"],
				times : 1,
			}],	
		},
		"subclassfeature3a13" : {
			name : "Space Magic",
			source : [["PBMS", 0]],
			minlevel : 13,
			description : "",
			spellcastingBonus : [{
				name : "Space Magic",
				spells : ["mordenkainen's magnificent mansion"],
				selection : ["mordenkainen's magnificent mansion"],
				times : 1,
			}],	
		},
		"subclassfeature3a15" : {
			name : "Space Magic",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : "",
			spellcastingBonus : [{
				name : "Space Magic",
				spells : ["demiplane"],
				selection : ["demiplane"],
				times : 1,
			}],	
		},
		"subclassfeature3a17" : {
			name : "Space Magic",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : "",
			spellcastingBonus : [{
				name : "Space Magic",
				spells : ["gate"],
				selection : ["gate"],
				times : 1,
			}],	
		},
		"subclassfeature3b" : {
			name : "Distortion",
			source : [["PBMS", 0]],
			minlevel : 3,
			action : [["bonus action", "Distort (1 MP)"]],
			description : "At 3rd level you can spend 1 mana point to distort your presence shifting between planes. For the next minute you gain a +2 to AC and attack rolls against you have disadvantage.",
		},
		"subclassfeature6" : {
			name : "Absorption",
			source : [["PBMS", 0]],
			minlevel : 6,
			action : [["reaction", "Absorption (1 MP)"]],
			description : "At 6th level as a reaction when you are targeted by a ranged attack that would be successful you can spend 1 mana point to open a small portal to consume the ranged attack taking no damage.",
		},
		"subclassfeature10" : {
			name : "Pocket Dimension",
			source : [["PBMS", 0]],
			minlevel : 10,
			action : [["bonus action", "Summon/Dismiss Item (1 MP)"], ["bonus action", "Summon Door"]],
			description : "At 10th level you have created a small pocket dimension that is a 20ft cube. As a bonus action you can spend 1 mana point to summon or dismiss one object that is not being worn or carried that can fit within the space, Alternatively, you can spend 5 mana points to create a medium sized door in which you and any creature you allow to pass through",
		},
		"subclassfeature14" : {
			name : "Dimensional Travel",
			source : [["PBMS", 0]],
			minlevel : 14,
			action : [["action", "Teleport/Plane Shift (3 MP)"]],
			description : "At 14th level You can spend 3 mana points to cast the Teleport or Plane Shift spell.",
			spellcastingBonus : {
				name : "Dimensional Travel",
				spells : ["teleport", "plane shift"],
				selection : ["teleport", "plane shift"],
				firstCol : 3,
				times : 2,
			},
		},
	},
});
AddSubClass("mystic", "time", {

	regExpSearch : /^(?=.*mystic)(?=.*time).*$/i,
	subname : "Order of Time",
	source : [["PBMS", 0]],	
	features : {
		"subclassfeature3a3" : {
			name : "Time Magic",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Time Magic",
				spells : ["gift of alacrity", "swiftness"],
				selection : ["gift of alacrity", "swiftness"],
				times : 2,
			}],	
		},
		"subclassfeature3a5" : {
			name : "Time Magic",
			source : [["PBMS", 0]],
			minlevel : 5,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Time Magic",
				spells : ["haste", "slow"],
				selection : ["haste", "slow"],
				times : 2,
			}],	
		},
		"subclassfeature3a7" : {
			name : "Time Magic",
			source : [["PBMS", 0]],
			minlevel : 7,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Time Magic",
				spells : ["synchronicity"],
				selection : ["synchronicity"],
				times : 1,
			}],	
		},
		"subclassfeature3a9" : {
			name : "Time Magic",
			source : [["PBMS", 0]],
			minlevel : 9,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Time Magic",
				spells : ["temporal shunt"],
				selection : ["temporal shunt"],
				times : 1,
			}],	
		},
		"subclassfeature3a11" : {
			name : "Time Magic",
			source : [["PBMS", 0]],
			minlevel : 11,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Time Magic",
				spells : ["contingency"],
				selection : ["contingency"],
				times : 1,
			}],	
		},
		"subclassfeature3a13" : {
			name : "Time Magic",
			source : [["PBMS", 0]],
			minlevel : 13,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Time Magic",
				spells : ["delayed spell"],
				selection : ["delayed spell"],
				times : 1,
			}],	
		},
		"subclassfeature3a15" : {
			name : "Time Magic",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Time Magic",
				spells : ["reality break"],
				selection : ["reality break"],
				times : 1,
			}],	
		},
		"subclassfeature3a17" : {
			name : "Time Magic",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : desc([
				"At 3rd level you gain access to minor spellcasting that is fueled by you mana. These spells are well known by the mystics of this order. When you cast one of these spell you do not require components, and you use your orbuculum as a spellcasting focus. When you cast these spells you must expend mana points to do so. See chart below to determine the points expended. You can not cast a spell level above your class level.",
			]),
			spellcastingBonus : [{
				name : "Time Magic",
				spells : ["time stop"],
				selection : ["time stop"],
				times : 1,
			}],	
		},
		"subclassfeature3b" : {
			name : "Acceleration",
			source : [["PBMS", 0]],
			minlevel : 3,
			action : [["action", "Double Dash (1 Mp)"], ["action", "Extra Attack (1 MP)"]],
			description : "At 3rd level you create a small warp within time granting you accelerated movement. When you take the dash action you can spend 1 mana point to gain additional movement equal to your movement speed. Alternatively you can spend 1 mana point each turn to gain an extra attack.",
		},
		"subclassfeature6" : {
			name : "Deceleration",
			source : [["PBMS", 0]],
			minlevel : 6,
			action : [["action", "Deceleration Aura (1 MP)"]],
			description : "At 6th level you can expend 1 mana point to create a field that extends from in a 15ft radius that warps the flow of time for 1 min. (concentration) Each creature that enters this field must make a wisdom saving throw, on a failed save the creature takes a -1 to AC and dexterity save throws. The creatures are unable to take reactions and cannot take an opportunity attack while within the field.",
		},
		"subclassfeature10" : {
			name : "Momentary Pause",
			source : [["PBMS", 0]],
			minlevel : 10,
			action : [["bonus action", "Freeze in time (2 MP)"]],
			description : "as a bonus action you can spend 2 mana points to temporarily stop time for one creature within 120ft. That creature must make a wisdom saving throw, on a failed save the creature is incapacitated as it is frozen in time for three turns.If the target takes damage or is otherwise interacted with before the the effect ends the effect ends early.",
		},
		"subclassfeature14" : {
			name : "Rewind",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : "At 14th level you can spend 2 mana points to rewind a short portion of time after making an attack roll, saving throw, or ability check. When you do so you can re-roll the dice again.",
		},
		"liminal existence" : {
			name : "Liminal Existence",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : "When you reach 17th level you can spend four mana points to cast the Plane Shift spell. ",
			spellcastingBonus : {
				name : "Liminal Existence",
				spells : ["plane shift"],
				selection : ["plane shift"],
				firstCol : 4,
				times : 1,
			},
		},
	},
});
//Mystic Class Equipment
WeaponsList["orbuculum"] = {
	name : "Orbuculum",
	source : [["PBMS", 0]],
	regExpSearch : /^(?=.*orbuculum).*$/i,
	type : "Simple",
	ability : 6,
	abilitytodamage : true,
	damage : [1, 4, "force"],
	range : "Melee, 30/60 ft",
	description : "Counts as magical", 
	monkweapon : true,
	list : "ranged",
	weight : 0,
};
ArmourList["ward"] = {
	name : "Ward",
	source : [["PBMS", 0]],
	regExpSearch : /^(?=.*ward).*$/i,
	ac : "10+Wis+Cha",
	dex : -10,
	affectsWildShape : true,
};
//Witch Class with 10 Subclasses
ClassList.sorcerer.regExpSearch = /sorcerer/i;
ClassList.witch = {
	
	regExpSearch : /witch/i,
	name : "Witch",
	source : [["PBMS", 0]],
	primaryAbility : ["Wisdom"],
	abilitySave : 5,
	prereqs : "Wisdom 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 6,
	saves : ["Wis", "Int"],
	skillstxt : {
		primary : "Choose two from Animal Handling, Arcana, Deception, Insight, Medicine, Nature, Perception, Persuasion, and Survival",
	},
	armorProfs : {
		primary : [false, false, false, false],
	},
	weaponProfs : {
		primary : [true, false],
	},
	equipment : "Witch starting equipment:" +
		"\n \u2022 A wand -or- a relic orb;\n \u2022 A component pouch;" +
		"\n \u2022 A scholar's pack -or- an explorer's pack;" +
		"\n \u2022 A flax linen robe -and- two daggers." +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Coven", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells : "list",
		prepared : true,
	},
	spellcastingList : { 
		spells : ["acid splash", "alchemist fire", "blade ward", "booming blade", "chill touch", "control flames", "create bonfire", "dancing lights", "druidcraft", "eldritch blast", "encode thoughts", "firebolt", "friends", "frostbite", "green-flame blade", "guidance", "gust", "infestation", "light", "lightning lure", "mage hand", "magic stone", "mending", "message", "mind sliver", "minor illusion", "mold earth", "poison spray","prestidigitation", "primal savagery", "produce flame", "ray of frost", "resistance", "sacred flame", "sapping sting", "shape water", "shillelagh", "shocking grasp", "spare the dying", "sword burst", "thaumaturgy", "thorn whip", "thunder clap", "toll the dead", "true strike", "usurp", "vicious mockery", "word of radiance", "alarm", "ceremony", "comprehend languages", "detect poison/disease", "find familiar", "identify", "illusory script", "purify food and drink", "speak with animals", "tenser's floating disk", "unseen servant", "animal messanger", "augury", "beast sense", "gentle repose", "locate animal/plants", "magic mouth", "silence", "skywrite", "wristpocket", "feign death", "leomund's tiny hut", "meld into stone", "phantom steed", "water breathing", "water walk", "divination", "commune", "commune with nature", "contact other plane", "rary's telepathic bond", "drawmij's instant summons", "forbiddance"],
	},
	features : {

		"weird magic" : {
			name : "Weird Magic",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"The common threads between you and the witch before have given the ability to see the threads and cast spells. This innate connection to the weave has given you the ability to draw power from your surroundings both natural and manufactured in order to cast your spells. You gain the 1st-level Witch Bolt spell and Detect Magic spell, which does not count against the number of spells you can know or have prepared. Your weird connection to magic has allowed you to see the threads of magic itself and as such you always known when and where an arcane spell is cast within 60 feet of you. This also allows you to cast Detect Magic without expending a spell slot.",
			]),	
			additional : ["2 cantrips known", "2 cantrips known", "2 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known"],
			spellcastingBonus : {
				name : "Weird Magic",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : "atwill"
			},		
		},
				
		"subclassfeature1" : {
			name : "Coven",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"Choose a Coven learned your craft from and put it in the \"Class\" field",
				"Choose either Coven of the Arcane, Coven of Blood, Coven of the Dead, Coven of the Gale, Coven of the Goddess, Coven of the Hedge, Coven of Hellfire, Coven of the Moon, Coven of the Night, or Coven of the Wood",
      ]),  
		},
			
		"meddle magic" : {
			name : "Meddle Magic", 
			source : [["PBMS", 0]],
			minlevel : 2,
			description : desc([
				"Use the Choose Feature button above to add a Meddle Magic option to the third page. You have developed the ability to twist the threads within nearby magic as you desire. This magic is measured by meddling points, and you gain one meddling point for each witch level. Each time you use a meddle spell it costs one point, additionally, all spent meddling points are regained when you finish a long rest. When using this ability you can use one meddle spell as a reaction when a spell is cast by another creature within 60 feet of you or as a bonus action on your turn when you cast a spell. You can choose three meddle spells from the following list at 2nd level. When you reach 9th level you can choose an additional three meddle spells from the following list. The chosen meddle spells can be changed during a short or long rest. In addition, all meddling points are restored during a long rest.",
			]),	
			usages : [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery : "long rest",
			action : [["bonus action", "Meddle Magic"],["reaction", "Meddle Magic"]],
			extraname : "Meddle Magic Options",
			extrachoices : ["Blessing Spell", "Deosil Spell", "Empowered Spell", "Extended Spell", "Inversion Spell", "Magnifying Spell", "Protection Spell", "Remote Spell", "Resolution Spell", "Reversal Spell", "Silent Spell", "Strengthened Spell", "Swift Spell", "Twinned Spell", "Uncrossing Spell", "Weakened Spell", "Weird Spell", "Widdershin Spell"],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 9 ? 3 : n > 9 ? 6 : 6;
			}),		
			"blessing spell" : {
				name : "Blessing Spell",
				description : desc([
					"You target one spell, if that spell produces a healing effect in which hit points are regained the target gains advantage on death saves for the next minute, and whenever the target makes an attack roll or saving throw they can roll a d4 and add the number rolled to the attack roll or saving throw.",
				]),	
			},				
			
			"deosil spell" : {
				name : "Deosil Spell",
				description : desc([
					"You target one spell to increase the spells accuracy. If the spellcaster must make an attack roll, they do so with advantage. If the spell requires a creature to make a saving throw, they do so with disadvantage.",
				]),	
			},							
			
			"empowered spell" : {
				name : "Empowered Spell",
				description : desc([
					"You target one spell to re-roll a number of the damage dice up to your wisdom modifier (minimum one). You take the higher rolls.",
				]),	
			},
			
			"extended spell" : {
				name : "Extended Spell",
				description : desc([
					"You target one spell that has a duration of 1 minute or longer. The duration of that spell is doubled up to a maximum of 24 hours.",
				]),	
			},
			
			"inversion spell" : {
				name : "Inversion Spell",
				description : desc([
					"You target one spell that deals damage. You can change that spells damage type to a different damage type of choice.",
				]),	
			},
			
			"magnifying spell" : {
				name : "Magnifying Spell",
				description : desc([
					"You target one spell, if that spell has an area of effect you can increase the size of that area up to 30 feet.",
				]),	
			},
			"protection spell" : {
				name : "Protection Spell",
				description : desc([
					"You target one spell, if that spell forces creatures to make a saving throw, you can protect some of those creatures from the spells full force. You choose a number of those creatures up to your wisdom modifier. A chosen creature automatically succeeds on its saving throw against the spell.",
				]),	
			},
			"remote spell" : {
				name : "Remote Spell",
				description : desc([
					"You target one spell, if that spell has a range of 30 feet or greater you can double the range of the spell. If the spell has a range less than 30 feet you can increase the range to 30 feet.",
				]),	
			},
			"resolution spell" : {
				name : "Resolution Spell",
				description : desc([
					"You target one spell that has a duration of 1 minute or longer. That creature must make a saving throw using their spellcasting ability against your spell save DC. On a failure the spell ends at the end of the casters next turn.",
				]),	
			},
			"reversal spell" : {
				name : "Reversal Spell",
				description : desc([
					"You target one spell that targets a single creature and is not an area of effect. That spell is reversed on to the caster using the attack and damage roll made by the original caster. If the attack roll does not meet or exceed the casters AC the spell misses.",
				]),	
			},
			"silent spell" : {
				name : "Silent Spell",
				description : desc([
					"You target one spell, the spellcaster shows no signs of casting the spell and the spell no longer requires verbal components.",
				]),	
			},
			"strengthened spell" : {
				name : "Strengthened Spell",
				description : desc([
					"You target one spell, that spell deals one additional dice of damage. If the spell does not deal damage or produces a unique effect it is instead up-cast one level higher without expending a spell slot. The caster must be able to cast the up-cast level of spell.",
				]),	
			},
			"swift spell" : {
				name : "Swift Spell",
				description : desc([
					"You target one spell, if that spell has a casting time of one action it can be cast as a bonus action instead. If you target your own spell that spell shares that same bonus action as the expended meddling point.",
				]),	
			},
			"twinned spell" : {
				name : "Twinned Spell",
				description : desc([
					"You target one spell, if that spell only targets one creature and doesn't have a range of self, you can target one additional creature within the spells casting range.",
				]),	
			},
			"uncrossing spell" : {
				name : "Uncrossing Spell",
				description : desc([
					"You target one spell that causes a condition effect as a result of the spell or existing spell effect. That magical effect ends immediately and any condition is removed.",
				]),	
			},	
			"weakened spell" : {
				name : "Weakened Spell",
				description : desc([
					"You target one spell, if that spell is up-cast it is cast at one level lower and still consumes the higher level spell slot. If the spell was not up-cast it deal one dice less of damage. If this spell deals one dice of damage the damage die decreases to one die type lower.",
				]),	
			},
			"weird spell" : {
				name : "Weird Spell",
				description : desc([
					"You target one spell, you can change the manifestation of that spell to a different spell of the same level or lower that the caster knows. That spell still uses that spell slot regardless of replaced spell level. You cannot replace a spell with a cantrip unless a cantrip was cast.",
				]),
			},
			"widdershin spell" : {
				name : "Widdershin Spell",
				description : desc([
					"You target one spell to decrease the spells accuracy. If the spellcaster must make an attack roll, they do so with disadvantage. If the spell requires a creature to make a saving throw, they do so with advantage.",
				]),
			},
		},
			
		"copy cast" : {
			name : "Copy Cast", 
			source : [["PBMS", 0]],
			minlevel : 5,
			description : desc([
				"You have learned how to read the threads from the magic around you and understand their meaning. As an action, you can choose one spell initiated within 30 feet of you that was cast within the last minute. If that spell is of a level you can cast, you can temporarily learn that spell from the thread to cast the spell during this turn using one of your corresponding spell slots. Once you have selected and read the thread you can cast or use that magic three times after your initial cast before the thread is lost. If you use this feature again before the spell thread is lost, the new spell thread replaces the previous one.",
			]),
			action : ["action"],
			usages : 3,
			recovery : "long rest",
		},	
		
		"weaver's wisdom" : {
			name : "Weaver's Wisdom",
			source : [["PBMS", 0]],
			minlevel : 9,
			description : desc([
				"I can add two spells/cantrips from any class to my spells known; +2 at level 18"
			]),
				additional : levels.map(function (n) {
					return n < 9 ? "" : (n < 18 ? 2 : 4) + " spells/cantrips";
				}),
				spellcastingBonus : {
					name : "Weaver's Wisdom",
					"class" : "any",
					times : levels.map(function (n) {
						return n < 9 ? 0 : n < 18 ? 2 : 4;
					})
				}
		},	
		
		"void of threads" : {
			name : "Void of Threads", 
			source : [["PBMS", 0]],
			minlevel : 13,
			description : desc([
				"You can push away threads of magic creating a space void of the threads. Once before a long rest you can use an action to cast the antimagic field spell with this feature without expending a spell slot. This feature follows all rulings of the antimagic spell, however, you can still use your meddle magic as long as the spell being meddled is outside of the antimagic field.",
			]),	
			action : ["action"],
			usages : 1,
			recovery : "long rest",
		},

		"mystical mount" : {
			name : "Mystical Mount", 
			source : [["PBMS", 0]],
			minlevel : 17,
			description : desc([
				"You have successfully crafted a mystical mount that can carry you along your journey. This mount can be made from any object that is capable of being mounted by you. This mount is attuned to you and does not count against the number of attunements you can have. This mount cannot be used or commanded by another creature without your permission. When selecting your mount you can choose whether it’s movement is walk or fly. This mount has 150 hit points, AC 18, movement speed of 60 feet. This mount is also immune to all condition effects, poison, necrotic, and psychic damage, as well as it is resistant to all other damage types. Regardless of distance or plane of existence you can always call to you the craft you have made. When calling forth your craft is requires an action. The mount teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft and send it back to where it previously resided.",
			]),	
		},

		"witch's word" : {
			name : "Witch's Word", 
			source : [["PBMS", 0]],
			minlevel : 20,
			description : desc([
				"You attain an immense affinity the with the threads of magic granting you the ability to weave magic through words of power. When you speak one of the following words of power your eyes glow with intense color. A creatures does not need to hear you for the effect to take place. However, you must be able to audibly speak out-loud to use this ability. As an action or reaction, you can choose to speak one of the following words of power to one creature within 60 feet, that creature must abide by that command word if they are a level lesser than your witch’s level. The following list is a common set of examples, ask the DM about additional words and rulings. If the creature is a level equal to or higher than you, they must make a wisdom saving throw, on a failed save they are subjected to this effect. You can use this ability three times before a long rest.",
			]),	
			action : ["action", "reaction"],
			usages : 3,
			recovery : "long rest",  		
		}, 
	}, 
};
AddSubClass("witch", "arcane", {
	regExpSearch : /^(?=.*(witch))(?=.*arcane).*$/i,
	subname : "Coven of the Arcane",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "color spray", "magic missile", "revoke", "shield", "blur", "cloud of daggers", "disruption", "invisibility", "counterspell", "dispel magic", "pulse wave", "dimension door", "arcane retaliation", "greater invisibility", "magic cancel", "passwall", "wall of force", "disintegrate", "spell binding", "prismatic spray", "mind blank", "prismatic wall"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel :1,
			description : desc([
				" You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals force damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Force dmg; 1 a 1d12 Force dmg");
									return true;
								}
							},
							"the witch bolt spell deals force damage instead of lightning damage.",
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Spell Bottle",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You craft a magical object used by this coven known as a Spell Bottle. This bottle can contain powerful magical threads. As an action, during a short or long rest you can perform an hour long ritual to preserve a spell that you know within this bottle. Once the spell is preserved you can cast the spell within the bottle as an action without using a spell slot. This bottle has three charges of the spell before the thread needs to be preserved again. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},
		"subclassfeature3" : {
			name : "Witch's Thread",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can create a magical thread of magic that only you can see and touch. This thread can store residual energy that can be used to cast spells. Every time you spend a meddling point you continually add to this thread's power. Each meddling point is worth one 1st level spell slot, you can cast up to 5th level spells using five thread points. You can only cast spells at a level in which you can cast. The maximum number of points this thread can have at one time is is five.",
			]),	
		},
		"subclassfeature3.1" : {
			name : "Force Spell",
			source: "PBMS",
			minlevel : 3,
			description :desc([
				"You gain an additional meddle spell only known by witches of this coven known as the force spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Force Spell"],
			"force spell" : {
				name : "Force Spell",
				description : desc([
					"You target one spell, if that spell deals damage, the spell deals an additional dice of damage, and the damage type becomes force. Lastly the spell creates no visual effect.",
				]),
			},
		},
		"subclassfeature7" : {
			name : "Witch's Weave",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you use a meddling point on your own spell you can weave two meddle spells instead of one. When you do so it costs two meddling points.",
			]),	
		}, 
		"subclassfeature11" : {
			name : "Witch's Cutting",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you meddle another casters spell you can have that caster make a wisdom saving throw, on a failed save the thread between that spell and the caster is cut. The caster is unable to cast that spell for the next 24 hours.",
			]),	
		},
		"subclassfeature15" : {
			name : "Witch's Fabricate",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can choose from any meddling spell from the meddle spell list.",
			]),	
		},  
	},
});
AddSubClass("witch", "blood", {
	regExpSearch : /^(?=.*(witch))(?=.*blood).*$/i,
	subname : "Coven of Blood",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "command", "cure wounds", "inflict wounds", "false life", "lesser restoration", "hold person", "ray of enfeeblement", "wither and bloom", "life transference", "magic circle", "vampiric touch", "blight", "confusion", "dominate beast", "dominate person", "greater restoration", "mass cure wounds", "create homunculus", "flesh to stone", "tether essence", "dominate monster", "power word kill"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				" You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals necrotic damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Necro. dmg; 1 a 1d12 Necro. dmg");
									return true;
								}
							},
							"the witch bolt spell deals necrotic damage instead of lightning damage."
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Athame",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You craft a magical blade used by this coven known as an Athame. This ceremonial blade is used to draw blood for your magic. This magical blade is equivalent to a +3 magical dagger except it follows the rulings of mage weapons and has been forged from blood and iron. As a bonus action, you can choose to concentrate on this weapon and have this athame levitate and move up to 60 feet of you to an unoccupied space for 1 min. As a bonus action on your turn, you can move the athame up to 60 feet and attack one target within 5 ft of it. You can choose to affect additional targets of any spell you cast if that target has been damaged by this blade within the last hour. The target does not need to be within range of the spell when it is cast and the target is automatically affected. Lastly, if you cast an Enchantment spell on a target that has been damaged by this blade within the last hour, the spells school of magic changes to Necromancy and the saving throw to Constitution. Creatures that are immune to being charmed are no longer immune to this spells effect unless they are undead or constructs. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},
		"subclassfeature3" : {
			name : "Witch's Sacrifice",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can weave your own blood into your spells. For every 5 hit points you sacrifice you can deal an extra dice of damage on that spell. ",
			]),	
		},
		"subclassfeature3.1" : {
			name : "Bleeding Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the bleeding spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Bleeding Spell"],
			"bleeding spell" : {
				name : "Bleeding Spell",
				description : desc([
					"You target one spell, if that spell is of 1st-level or higher the caster must make a constitution saving throw, on a failed save the caster loses 5 hit points for each level of spell that was cast.",
				]),
			},
		},
		"subclassfeature7" : {
			name : "Witch's Bloodletting",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you spend a meddling point on a spell that targets a creature that has already taken damage you can cast your spell at one higher spell slot available without expending that spell slot.",
			]),	
		},
		"subclassfeature11" : {
			name : "Witch's Blood Curse",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you spend a meddling point on another casters spell you can cause them to expend extra energy to cast that spell. The caster must make a Constitution saving throw, on a failed save the caster expends one additional spell slot of choice.",
			]),	
		},
		"subclassfeature15" : {
			name : "Witch's Regeneration",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you regain 1d4 hit points for each level of spell that was cast.",
			]),	
		},   
	},
});
AddSubClass("witch", "dead", {
	regExpSearch : /^(?=.*(witch))(?=.*dead).*$/i,
	subname : "Coven of the Dead",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "cause fear", "hex", "protection from evil and good", "silent image", "misty step", "mirror image", "phantasmal force", "see invisibility", "speak with dead", "spirit guardians", "spirit shroud", "banishment", "hallucinatory terrain", "phantasmal killer", "danse macabre", "mislead", "raise dead", "circle of death", "soul cage", "etherealness", "antipathy/sympathy", "wail of the banshee"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals necrotic damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Necro. dmg; 1 a 1d12 Necro. dmg");
									return true;
								}
							},
							"the witch bolt spell deals necrotic damage instead of lightning damage."
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Poppet",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"you craft a magical object used by this coven known as a poppet. This object is crafted into an effigy that resembles a humanoid figure an is made from cloth that is filled with briars and bones. As a bonus action on your turn you can choose to inflict a hex upon one creature that you can see within 60 feet. This creature can be undead, and is not immune to the effects or damage inflicted by the poppet. The target must make a DC wisdom saving throw or be linked to this poppet and subjeted to its effects while within 60 feet of it. While hexed by the poppet the target is under the effects of the Hex spell. At 5th level the effects of the hex increases with the warlock's eldritch invocation Maddening Hex, and at 7th level the effects of the warlock's eldritch invocation Relentless Hex. These effects las until the poppet is dismissed as a bonus action, linked to a new target, or the target is dropped to 0 hit points. Regardless of distance or planes of existance you can always call your craft to you as an action. When called forht your craft teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},
		"subclassfeature3" : {
			name : "Witch's Whisper",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can choose to target one creature within 60 feet. That creature must make a wisdom saving throw, on a failed save the target begins to hear a distorted whispers causing the target to have disadvantage on attack rolls with a weapon or spell for the next minute.",
			]),	
		},
		"subclassfeature3.1" : {
			name : "Channeling Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the channeling spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Channeling Spell"],
			"channeling spell" : {
				name : "Channeling Spell",
				description : desc([
					"You target one spell, the caster of that spell receives a d4, and can add the number rolled to the spells attack roll or increase the DC for that spell.",
				]),
			},
		},
		"subclassfeature7" : {
			name : "Witch's Banishment",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you use a meddling point on your own spell that targets one creature that creature must make a Charisma saving throw, on a failed save the creature is banished to the ethereal plane for 1 hour. Undead creatures with a challenge rating less than your witch level are permanently prevented from returning unless a wish spell is used.",
			]),	
		},   
		"subclassfeature11" : {
			name : "Witch's Haunting",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you meddle another casters spell you can choose to have the caster make a wisdom saving throw against your spell DC, on a failed save the caster is frightened, and haunted by a spirit forged from their fears that only they can see. This spirit is tethered to the caster in some way, be it the most recent creature they killed, a fallen ally, or a tormented loved one. This spirit remains chasing the creature for 1 minute.",
			]),	
		},
		"subclassfeature15" : {
			name : "Witch's Fetch",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can choose to create a ghostly double of your self known as a fetch that is forged out of ethereal energy. This double lasts for 1 hour and does not require concentration. You can only have one fetch at a time. While this apparition is present you can mentally command where it moves. This apparition cannot attack or take damage, however, any creature that is not an ally that can see this fetch within 30 feet must make a wisdom saving throw, on a failed save the target is frightened by this apparition and must spend the next 1 hour moving as far away from it as it can. If the target succeeds they are immune to this effect for 24 hours.",
			]),	
		},    
	},
});
AddSubClass("witch", "fury", {
	regExpSearch : /^(?=.*(witch))(?=.*fury).*$/i,
	subname : "Coven of Fury",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "catapult", "command", "earth tremor", "jump", "calm emotions", "dust devil", "enhance ability", "maximilian's earthen grasp", "conjure barrage", "erupting earth", "meld into stone", "freedom of movement", "stone shape", "stoneskin", "conjure volley", "transmute rock", "wall of stone", "bones of the earth", "find the path", "sequester", "earthquake", "invulnerability"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals bludgeoning damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Blud. dmg; 1 a 1d12 Blud. dmg");
									return true;
								}
							},
							"the witch bolt spell deals bludgeoning damage instead of lightning damage."
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Face-Veils",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You craft a magical object used by this coven known as a Face-Veil. This opulent brightly colored mask is crafted from hardened plant fibers and threads of magic. This mask can only be worn by you ad can only be taken off by you. While wearing this mask as a bonus action you can magically enter a rage that grants you the power of primal ferocity while maintaining a magical connection to the weave. When you do so you gain the following benefits. You have advantage on Wisdom checks and Wisdom saving throws. When you make a spell attack roll using wisdom, you gain a bonus to the damage equal to your proficiency bonus. You have resistance to one damae type of your choice produced by spells declared when you first enter this rage. You can cast spells, but you cannot meddle nay spells. You can enter a rage a number of times equal to your proficiency bonus. This effect lasts for 1 minute. It ends early if you are knocked unconcious or if your turn ends and you have not attacked a hostile creature since your last turn or taken damage since then. Regardless of distance or planes of existence you can always call your craft to you as an action. When calling forth your craft it teleports to you and appears in an unoccupied space within 5 feet of your. You can also dismiss the craft as a bonus action and send it back to where it previously resided.",
			]),	
			savetxt: "While Raging: Adv on Wis Checks & Saves;",
			limfeaname : "Rage",
			action: "bonus action",
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
		"subclassfeature3" : {
			name : "Witch's Resilience",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"While in your rage you can expend one meddling point as a reaction to taking damage from a spell to change the chosen damage resistance you have against spells. In addition, when you gain this feature you cannot be charmed or frightened while raging.",
			]),	
			savetxt : "While Raging: Immune to Charm & Fright;",
		},
		"subclassfeature3.1" : {
			name : "Berserk Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the berser spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Berserk Spell"],
			"berserk spell" : {
				name : "Berserk Spell",
				description : desc([
					"This meddle spell is the only meddle spell that can be used while raging. You target one spell, this spell goes berserk becoming a temporary living spell. After the spell concludes it transforms into a living spell taking on the form of a beast of your choosing. This spell then attacks 1d4 random nearby creatures a radius equal to the beasts movement speed that is not you on this turn. This living spell makes a spell attack roll using your spellcasting ability dealng half of the spells rolled damage on each strike.",
				]),
			},
		},
		"subclassfeature7" : {
			name : "Witch's Ferocity",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"While raging you can expend 3 meddling points to gain an extra action. When you do so you can choose to cast another spell even if you have already cast a spell this turn.",
			]),	
		},
		"subclassfeature11" : {
			name : "Witch's Aggression",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"While raging as a bonus action you can expend a number of meddling points to lower the number you need to land a critical hit. Alternatively, as a bonus action you can expend a number of meddle points to increase your spell save DC for the following spell you cast.",
			]),	
			action : "bonus action",
		},
		"subclassfeature15" : {
			name : "Witch's Willpower",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Your rage is indomitable and it only ends early if you fall unconcious or if you choose to end it. Additionally, while raging as a bonus action you can expend a meddle point to increase the duration of your rage by 1 minute. Lastly while you are in a rage when ever you make a saving throw against a spell you can expend any number of meddle points needed to succeed the saving throw.",
			]),	
			action : "bonus action",
		},
	},
});
AddSubClass("witch", "gale", {
	regExpSearch : /^(?=.*(witch))(?=.*gale).*$/i,
	subname : "Coven of the Gale",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "fog cloud", "frost fingers", "thunderwave", "zephyr strike", "gust of wind", "rime's binding ice", "shatter", "warding wind", "lightning bolt", "thunder step", "tidal wave", "control water", "ice storm", "storm sphere", "cone of cold", "control winds", "maelstrom", "chain lightning", "wind walk", "whirlwind", "control weather", "storm of vengeance"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals wave or lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Wave dmg; 1 a 1d12 Wave dmg");
									return true;
								}
							},
							"the witch bolt spell deals wave damage instead of lightning damage."
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Wand Vane",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You create a magical object used by this coven known as a wand vane. This object is used to connect you with the threads of the storm. This object has been magically charged through constant use within weather rituals. When you cast an evocation spell that deals cold, lightning, thunder, or wave damage that has a duration of instantaneous you can change that duration to concentration up to 10 minutes causing the vane upon the wand to spin. If that spell deals direct damage, the spell deals half the dice of damage on consecutive turns after the initial cast. The spell also can be moved as a bonus action on each of your turns up to 30 feet in any direction. This effect ends early if you lose concentration, or choose to end it early no action required. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},
		"subclassfeature3" : {
			name : "Witch's Brew",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can choose to have a swirl of static wind surround you. When you do so, you gain a bonus 10 feet to movement speed until the end of your next turn. While this effect is active any creature to hit you with a melee attack takes 5 lightning damage.",
			]),	
		},
		"subclassfeature3.1" : {
			name : "Tempest Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the tempest spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Tempest Spell"],
			"tempest spell" : {
				name : "Tempest Spell",
				description : desc([
					"You target one damaging spell, that spells damage becomes cold, lightning, thunder, or wave (your choice), and any creature targeted by this spell must make a Constitution saving throw against your spell DC. On a failure the creature is paralyzed for 1 minute.",
				]),
			},
		},
		"subclassfeature7" : {
			name : "Witch's Call",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you meddle another casters spell that deals cold, lightning, thunder, or wave damage. You can make an arcana (intelligence) check against the casters spell DC. If you succeed you take control of that spell and can choose its target.",
			]),	
		},
		"subclassfeature11" : {
			name : "Witch's Cloud",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you use a meddling point on your own spell you can choose to create a 20 foot radius sphere of fog centered on you. This sphere spreads around corners, and its area is heavily obscured. You are able to see clearly in this space. This effect lasts for 1 minute or until a wind of moderate or greater speed disperses it. (10 mph)",
			]),	
		},
		"subclassfeature15" : {
			name : "Witch's Cyclone",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can create a cyclone that is a 10 foot radius sphere centered on you. This sphere moves with you and lasts for upto an hour, unless you dismiss it. (no action required) While this cyclone is active all ranged missile weapon attacks have disadvantage toward you. Creatures that enter this cyclone for the first time or start their turn in it must make a Dexterity saving throw. On a failed save the creature takes 1d4 cold damage, or half as much on a successful save. Lastly any spell you cast while this cyclone is active that deals cold, lighting, thunder, or wave damage becomes apart of the cyclone adding 1d4 damage of that damage type to the cyclones damage. This additional damage stacks up to a number of dice equal to your Wisdom modifier.",
			]),	
		},
	},
});
AddSubClass("witch", "goddess", {
	regExpSearch : /^(?=.*(witch))(?=.*goddess).*$/i,
	subname : "Coven of the Goddess",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "guiding bolt", "detect evil and good", "sanctuary", "shield of faith", "aid", "prayer of healing", "protection from cantrips", "spiritual weapon", "beacon of hope", "blinding smite", "daylight", "fire shield", "guardian of faith", "sickening radiance", "circle of power", "dispel evil and good", "hallow", "sunbeam", "word of recall", "divine word", "holy aura", "wish"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals radiant damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Rad. dmg; 1 a 1d12 Rad. dmg");
									return true;
								}
							},
							"the witch bolt spell deals radiant damage instead of lightning damage."
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Amulet",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You craft a magical object used by this coven known as an Amulet. This object is crafted from pure threads of magic and forged into a holy symbol of Mystra the Goddess of Magic. During a long rest you can imbue one abjuration spell that you have prepared with a duration longer than instantaneous upon this amulet. When you do so the effects of that spell remain upon you until you are not wearing the amulet, change the imbued spell, or dismiss it as a bonus action. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},
		"subclassfeature3" : {
			name : "Witch's Communion",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can you gain a flash of divine insight by reading the divine threads from your surroundings. You receive insight as if you had casted the augury spell. ",
			]),	
		},
		"subclassfeature3.1" : {
			name : "Absolution Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the absolution spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Absolution Spell"],
			"absolution spell" : {
				name : "Absolution Spell",
				description : desc([
					"You target one spell, if that spell is yours or an allies you can grant immunity to all effects from that spell to allies within the spells effect range.",
				]),
			},
		},
		"subclassfeature7" : {
			name : "Witch's Divine Intervention",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you use a meddling point on your own spell you can choose to change the damage dealt to Radiant. When you do so that target must make a DC wisdom saving throw, on a failed save the target is outlined in divine energy. All attack rolls against that creature has advantage and the target cannot benefit from invisibility, or being obscured in darkness or magical darkness.",
			]),	
		},
		"subclassfeature11" : {
			name : "Witch's Excommunicate",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you meddle another casters spell you can choose to have the caster make a wisdom saving throw against your spell DC, on a failed save you disconnect the magical threads of the divinity of the caster. That caster is disconnected from their deity for 24 hours. The target experiences a string of bad luck. Whenever the target makes an attack roll, ability check, or saving throw the target must roll a d4 and subtract that number from the number they rolled. If the target is a Cleric they are not subjected to bad luck, but instead are unable to use their channel divinity or domain spells.",
			]),	
		},
		"subclassfeature15" : {
			name : "Witch's Persecution",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can choose to mark a target within 60 feet as accursed. That target must make a DC constitution save throw, on a failed save that target is physically marked in a way that would identify them as accursed to the current religious presence. While the target is marked in this way; magical anomalies take place that is out of their control. This includes the summoning of frogs, the warping of religious idols, and additional harmless effects. The target is viewed as an enemy by all creatures within 30 feet of it. These effects ends after the target is dropped to 0 hit points, the creature can repeat the saving throw to end the effect at the dawn of each day.",
			]),	
		},
	},
});
AddSubClass("witch", "hag", {
	regExpSearch : /^(?=.*(witch))(?=.*hag).*$/i,
	subname : "Coven of the Hags",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells of your own design. These spells are trophies from your bargains and connections to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals your choice damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Choice dmg; 1 a 1d12 Choice dmg");
									return true;
								}
							},
							"the witch bolt spell deals your choice damage instead of lightning damage."
						]
					},
			additional : levels.map(function (n) {
				return n < 1 ? "" : (n < 3 ? 4 : n < 5 ? 8 : n < 7 ? 11 : n < 9 ? 14 : n < 11 ? 17 : n < 13 ? 19 : n < 15 ? 20 : n < 17 ? 21 : 22) + " spells";
			}),
			spellcastingBonus : {
				name : "Coven Spells",
				"class" : "any",
				times : levels.map(function (n) {
					return n < 3 ? 4 : n < 5 ? 8 : n < 7 ? 11 : n < 9 ? 14 : n < 11 ? 17 : n < 13 ? 19 : n < 15 ? 20 : n < 17 ? 21 : 22;
				})
			}
		},
		"subclassfeature1.1" : {
			name : "Hag Crafts",
			source : [["PBMS", 0]],
			minlevel : 1,
			toolProfs : ["Artisan's tools", 1],
			description : desc([
				"You have the cunning to create strange objects of magical potential. To use this ability, you must have a set of artisan tools in hand. You then begin to create a tiny magical object as an action, and give it one of the following magical properties of your choice. These items are a single use and remain magil until used. The use of this object could be to consume, crush, or otherwise operate in a traditional manner like the strum of a harp or swing of a sword. The se items often emulate common spells, but often in strange ways. Once an item is creted by you and is not being worn or carried by another creature you can call it forth to you as an action regardless of distance or planes of existance. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to wheere it previously resided. You gain proficency in one type of artisan tools.",
			]),	
			action : [["action"]],
			toNotesPage : [{
				name : "Hag Crafts",
				note : [
					"* The object replicates the effect of a spell equal to the level in which you can cast. That spell does not require concentration and lasts for the full duration unless the spell otherwise concludes itself. This spell uses the spellcasting ability and DC of the creator.",
					"* The object bestows one condition effect upon the creatue when used that lasts until a short or long rest.",
					"* The object grants a 1d4 bonus or penalty of you choice to a creature's particular ability check, saving throw, or all attack rolls for the next hour.",
					"* The object expodes dealing 1d4 damage per witch level of a damage type of choice.",
				],
			}],
		},
		"subclassfeature3" : {
			name : "Witch's Borrow",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"When you gain this feature you can choose one 3rd level feature that is not a meddle spell from any witch subclass. That feature becomes your feature.",
			]),	
			extraname : "Witch's Borrow",
			extrachoices : ["Arcane (Witch's Thread)", "Blood (Witch's Sacrifice)", "Dead (Witch's Whisper)", "Fury (Witch's )", "Gale (Witch's Brew)", "Glamour (Witch's )", "Goddess (Witch's Communion)", "Hedge (Witch's Cunning)", "Hellfire (Witch's Guile)", "Moon (Witch's Guidance)", "Night (Witch's Secret)", "Wood (Witch's Wicker)"],
			extraTimes : 1,
			"arcane (witch's thread)" : {
				name : "Arcane (Witch's Thread)",
				description : desc([
					"Whenever you spend a meddling point you can create a magical thread of magic that only you can see and touch. This thread can store residual energy that can be used to cast spells. Every time you spend a meddling point you continually add to this thread's power. Each meddling point is worth one 1st level spell slot, you can cast up to 5th level spells using five thread points. You can only cast spells at a level in which you can cast. The maximum number of points this thread can have at one time is is five.",
				]),
			},
			"blood (witch's sacrifice)" : {
				name : "Blood (Witch's Sacrifice)",
				description : desc([
					"Whenever you spend a meddling point you can weave your own blood into your spells. For every 5 hit points you sacrifice you can deal an extra dice of damage on that spell.",
				]),
			},	
			"dead (witch's whisper)" : {
				name : "Dead (Witch's Whisper)",
				description : desc([
					"Whenever you spend a meddling point you can choose to target one creature within 60 feet. That creature must make a wisdom saving throw, on a failed save the target begins to hear a distorted whispers causing the target to have disadvantage on attack rolls with a weapon or spell for the next minute.",
				]),
			},	
			"fury (witch's )" : {
				name : "Fury (Witch's )",
				description : desc([
					"",
				]),
			},	
			"gale (witch's brew)" : {
				name : "Gale (Witch's Brew)",
				description : desc([
					"Whenever you spend a meddling point you can choose to have a swirl of static wind surround you. When you do so, you gain a bonus 10 feet to movement speed until the end of your next turn. While this effect is active any creature to hit you with a melee attack takes 5 lightning damage.",
				]),
			},	
			"glamour (witch's )" : {
				name : "Glamour (Witch's )",
				description : desc([
					"",
				]),
			},
			"goddess (witch's communion)" : {
				name : "Goddess (Witch's Communion)",
				description : desc([
					"Whenever you spend a meddling point you can you gain a flash of divine insight by reading the divine threads from your surroundings. You receive insight as if you had casted the augury spell.",
				]),
			},	
			"hedge (witch's cunning)" : {
				name : "Hedge (Witch's Cunning)",
				description : desc([
					"Whenever you spend a meddling point you can change the spell meddled as if it was transformed by the minor illusion or prestidigitation cantrip. You can choose how the spell appears to others, the sounds it produces, the smells it creates. If you are the one casting the spell you can also choose the verbal components you use to cast it. Creatures attemptint to identify the spell have disadvantage on the ability check and if counterspell is used the target has disadvantage on the ability check if the spell is higher than the counterspell. If the spell is a lower level they still must make an ability check with a normal roll.",
				]),
			},	
			"hellfire (witch's guile)" : {
				name : "Hellfire (Witch's Guile)",
				description : desc([
					"Whenever you spend a meddling point you can weave infernal power into your spell. When you do so any creature affected by the spell must make a wisdom saving throw. On a failed save the creature is either frightened or charmed by you (your choice) for the next minute.",
				]),
			},	
			"moon (witch's guidance)" : {
				name : "Moon (Witch's Guidance)",
				description : desc([
					"Whenever you spend a meddling point you can choose one creature that you can see within 30 feet. For the next minute, whenever that creature makes an attack roll or saving throw before this effect ends the target can roll a d4 and add the number rolled to the attack roll or saving throw. Only one creature can benefit from this effect at a time, and this effect does not stack.",
				]),
			},	
			"night (witch's secret)" : {
				name : "Night (Witch's Secret)",
				description : desc([
					"Whenever you spend a meddling point you can choose to whisper a message to a creature that you can see within 120 feet as if you had targeted them with the Message cantrip.",
				]),
			},	
			"wood (witch's wicker)" : {
				name : "Wood (Witch's Wicker)",
				description : desc([
					"Whenever you spend a meddling point you can choose to have wickers grow around you in a 15 foot radius centered on you. These wickers create difficult terrain, and deal 1d4 piercing damage to each creature other than you that starts its turn within this area.",
				]),
			},		
		},
		"subclassfeature3.1" : {
			name : "Bargain Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the bargain spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Bargain Spell"],
			"bargain spell" : {
				name : "Bargain Spell",
				description : desc([
					"You target one spell that you do not know that is of a level in which you can cast that is cast, written, or otherwise in affect. You must make an ability check using your spellcasting ability against the targeted spells DC. Ona success, you can trade one spell that you know with that of the chosen spell. As a result the chosen spell is negated and no longer takes effect and the caster, if any, expends the used spell slot. On a failure, tyou expend one spell slot equal to the level of the spell targeted, and you do not learn the spell.",
				]),
			},
		},
		"subclassfeature7" : {
			name : "Witch's Preservation",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you spend a meddlig point on your own spell you can expand a number of available hit dice to regain hit points.",
			]),	
		},
		"subclassfeature11" : {
			name : "Witch's Chaos",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you spend a meddling point on another caster's spell you can force them to make a Wisdom saving throw against your spell DC. On a failure the target must immedately roll on the wild magic surge table in the Player's Handbook on page 104. On a success, you must immediately roll on the wild magic surge table.",
			]),	
		},
		"subclassfeature15" : {
			name : "Witch's Three-Fold",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can enforce the bruja's rule of three upon th caster of the targeted spell. For example if you meddle the Cure Wounds spell the caster is also affected by that spell healing three times the amount that they healed another target. If you meddle the Burning Hands spell the caster is also burned making the same saving throw, but taking three times the amount of fire damage dealt on a failed save and half as much on a success.",
			]),
		},    
	},
});
AddSubClass("witch", "hedge", {
	regExpSearch : /^(?=.*(witch))(?=.*hedge).*$/i,
	subname : "Coven of the Hedge",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals your choice damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Choice dmg; 1 a 1d12 Choice dmg");
									return true;
								}
							},
							"the witch bolt spell deals your choice damage instead of lightning damage."
						]
					},
			additional : levels.map(function (n) {
				return n < 1 ? "" : (n < 3 ? 4 : n < 5 ? 8 : n < 7 ? 11 : n < 9 ? 14 : n < 11 ? 17 : n < 13 ? 19 : n < 15 ? 20 : n < 17 ? 21 : 22) + " spells";
			}),
			spellcastingBonus : {
				name : "Coven Spells",
				"class" : "any",
				times : levels.map(function (n) {
					return n < 3 ? 4 : n < 5 ? 8 : n < 7 ? 11 : n < 9 ? 14 : n < 11 ? 17 : n < 13 ? 19 : n < 15 ? 20 : n < 17 ? 21 : 22;
				})
			}
		},
		"subclassfeature1.1" : {
			name : "Hedge Trinket",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You craft a magical object that is unique to you known as a hedge trinket. This item contains powerful magical threads. This personal magical object must be no larger than a 1ft cube and possesses two features; the first feature grants you one first level spell of choice from any spell list that can be cast without consuming a spell slot. This spell can be cast in this way three times before a long rest as long as you have this trinket in hand. The other being one feat of choice. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},
		"subclassfeature3" : {
			name : "Witch's Cunning",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can change the spell meddled as if it was transformed by the minor illusion or prestidigitation cantrip. You can choose how the spell appears to others, the sounds it produces, the smells it creates. If you are the one casting the spell you can also choose the verbal components you use to cast it. Creatures attemptint to identify the spell have disadvantage on the ability check and if counterspell is used the target has disadvantage on the ability check if the spell is higher than the counterspell. If the spell is a lower level they still must make an ability check with a normal roll.",
			]),	
		},
		"subclassfeature3.1" : {
			name : "Copy Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the copy spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Copy Spell"],
			"copy spell" : {
				name : "Copy Spell",
				description : desc([
					"You gain an additional meddle spell often used by new witches known as the copy spell. When you use this meddling spell on another caster's spell you can choose to cast this spell on your following turn as long as it is of a level in which you can cast and have the available spell slots.",
				]),
			},
		},
		"subclassfeature7" : {
			name : "Witch's Alter",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you use a meddling point on your own spell you can choose to change how that spell manifests to suit your needs. You can choose one of the following modifications for your meddled spell; Point of Origin, Area of Effect, Shape, Saving Throw Type, Condition Effect Type, or Concentration Duration.",
			]),	
		},
		"subclassfeature11" : {
			name : "Witch's Curse",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you meddle another casters spell you can have that caster make a wisdom saving throw, on a failed save the caster is affected by the polymorph spell.",
			]),	
		},
		"subclassfeature15" : {
			name : "Witch's Insight",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you use the copy cast feature you can spend a meddling point and choose to replace a spell that you know with the spell that you temporarily learned. This spell must be a level in whicy you can cast and have access to the appropriate spell slots.",
			]),		
		},    
	},
});
AddSubClass("witch", "hellfire", {
	regExpSearch : /^(?=.*(witch))(?=.*hellfire).*$/i,
	subname : "Coven of Hellfire",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "burning hands", "charm person", "hellish rebuke", "searing smite", "crown of madness", "flame blade", "suggestion", "scorching ray", "fireball", "fear", "summon lesser demons", "charm monster", "summon greater demon", "wall of fire", "immolation", "infernal calling", "mind fog", "mass suggestion", "summon fiend", "fire storm", "incendiary cloud", "meteor swarm"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals fire damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Fire dmg; 1 a 1d12 Fire dmg");
									return true;
								}
							},
							"the witch bolt spell deals fire damage instead of lightning damage."
						]
					}
		},

		"subclassfeature1.1" : {
			name : "Book of Shadows",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You craft or receive a magical object used by this coven known as a Book of Shadows. This book possesses information, lore, true names, stats, weaknesses, and the languages of fiends. (Abyssal and Infernal) This book grants you advantage on any skill check, saving throw, or attack roll made about or against a fiend. Additionally, the power of this book grants you a fiendish companion as if you had casted the find familiar spell, however, this creature can attack if you so choose. You can choose between a Imp or a Quasit when you gain this book. Additionally, as you level this book grows in power and allows you to have a more powerful fiends as a companion. At 3rd level you can summon a fiendish companion with a challenge rating of 2 or lower, at 7th level a challenge rating of 3 or lower, at 11th level a challenge rating of 4 or lower, and at 14th level a challenge rating of 5 or lower. You can only have one companion at a time and requires a long rest in order to summon a new one if dropped to 0 hit points or to change fiend type. Your book of shadows is the focus for this magic and therefore does not require a spell slot. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},

		"subclassfeature3" : {
			name : "Witch's Guile",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can weave infernal power into your spell. When you do so any creature affected by the spell must make a wisdom saving throw. On a failed save the creature is either frightened or charmed by you (your choice) for the next minute.",
			]),	
		},

		"subclassfeature3.1" : {
			name : "Hellfire Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the hellfire spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Hellfire Spell"],
			"hellfire spell" : {
				name : "Hellfire Spell",
				description : desc([
					"You target one spell, the manifestation of that sell appears as blue flames changing the damage of that spell to hellfire. Creatures that are immune to fire damage are resistant to hellfire damage, and creatures with resistance to fire damage are normally effected by hellfire damage.",
				]),	
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Torture",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you use a meddling point on your own spell you can choose to deal an additional 1d6 hellfire damage to the affected target.",
			]),	
		},

		"subclassfeature11" : {
			name : "Witch's Madness",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you meddle another casters spell you can cause them to make a wisdom saving throw, on a failed save the creature gains short term madness for 10 min. See the short term madness table for additional effects on pg. 259. of DM guide.",
			]),	
		},

		"subclassfeature15" : {
			name : "Witch's Imps",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can temporarily conjure a swarm of imps to deal additional damage to the target as if affected by the cloud of daggers spell.",
			]),	
		},
	
	},

});	
AddSubClass("witch", "moon", {
	regExpSearch : /^(?=.*(witch))(?=.*moon).*$/i,
	subname : "Coven of the Moon",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "beast bond", "magnify gravity", "silvery barbs", "sleep", "enhance ability", "moonbeam", "moon rune", "summon beast", "catnap", "conjure animals", "clairvoyance", "gravity sinkhole", "polymorph", "synchronicity", "awaken", "dream", "scrying", "gravity fissure", "globe of invulnerability", "crown of stars", "animal shapes", "shapechange"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals fire damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Radiant dmg; 1 a 1d12 Radiant dmg");
									return true;
								}
							},
							"the witch bolt spell deals radiant damage instead of lightning damage."
						]
					}
		},

		"subclassfeature1.1" : {
			name : "Enchanted Mirror",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You craft a magical object used by this coven known as an enchanted mirror. This object is crafted from pure threads of magic that are woven into the mirror's surface. You gain the Guidance cantrip, and the mirror reflects the truth of whatever stands before it granting true sight within its refection. Regardless of distance or planes of existence you can always call your craft to you as an action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},

		"subclassfeature3" : {
			name : "Witch's Guidance",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can choose one creature that you can see within 30 feet. For the next minute, whenever that creature makes an attack roll or saving throw before this effect ends the target can roll a d4 and add the number rolled to the attack roll or saving throw. Only one creature can benefit from this effect at a time, and this effect does not stack.",
			]),	
		},

		"subclassfeature3.1" : {
			name : "Moonglow Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the moonglow spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Moonglow Spell"],
			"moonglow spell" : {
				name : "Moonglow Spell",
				description : desc([
					"If a spell meddled with this option is successful the affected creatures shed dim light in a 10 foot radius for the next minute. Any attack roll during this time made against the creature has advantage. Lastly, if the target of the spell was polymorphed or shape-changed they have disadvantage of the saving throw of the spell, or you have advantage on the attack roll with the spell. If this spell succeeds the transfigured creature reverts to their original form.",
				]),	
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Phase",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you use a meddling point on your own spell you can choose to ake on an aspect of the moon be it the New Moon, Waxing Moon, Full Moon, or Waning Moon. When you do so you gain the following benefit until you chang phases or take a short or long rest. While channeling one of these aspects your spells are affected by one of the following meddle magic options without expending meddling points. New Moon: Protection, Waxing Moon: Extended Spell, Full Moon: Empowered, Waning Moon: Silent Spell.",
			]),	
		},

		"subclassfeature11" : {
			name : "Witch's Illusion",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you medle another casters spell you can cause them to make a wisdom saving throw, on a failed save the creature see each creature within 60 feet of them as if they have been affected by the Blur spell. This creature is immune if they do not rely on sight. The creature has disadvantage on all attack rolls they make for the next minute.",
			]),
		},

		"subclassfeature15" : {
			name : "Witch's Push & Pull",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can channel the magical pull of the moon allowing you to apply the push or the pull of the moon when you do so you can choose wheter the spells range or area of effect is increased or decreased up to 30 feet.",
			]),	
		},
	
	},

});	
AddSubClass("witch", "night", {
	regExpSearch : /^(?=.*(witch))(?=.*night).*$/i,
	subname : "Coven of the Night",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "bane", "erase", "disguise self", "dissonant whispers", "blindness/deafness", "darkness", "mind spike", "shadow blade", "bestow curse", "fear", "summon shadowspawn", "dimension door", "raulothim's psychic lance", "shadow of moil", "enervation", "modify memory", "wall of darkness", "eyebite", "scatter", "power word pain", "maddening darkness", "weird"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals fire damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Psychic dmg; 1 a 1d12 Psychic dmg");
									return true;
								}
							},
							"the witch bolt spell deals psychic damage instead of lightning damage."
						]
					}
		},

		"subclassfeature1.1" : {
			name : "Mask",
			source : [["PBMS", 0]],
			minlevel : 1,
			vision : ["Devil's Sight", 120],
			description : desc([
				"You craft a magical object used by this coven known as a mask. The mask conceals the witch's identity as well as offers magical power to conceal what lies behind the mask. The mask can only be put on or taken off by you. You can don this mask as an action, while you are wearing this mask you are under the effects of the Mind Blank spell. Lastly you gain 120 feet of devil's sight. This grants you the ability to see in magical and non-magical darkness. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},

		"subclassfeature3" : {
			name : "Witch's Secret",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can choose to whisper a message to a creature that you can see within 120 feet as if you had targeted them with the Message cantrip.",
			]),	
		},

		"subclassfeature3.1" : {
			name : "Nightstep Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the nightstep spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Nightstep Spell"],
			"nightstep spell" : {
				name : "Nightstep Spell",
				description : desc([
					"When you meddle a spell with this effect you briefly surround yourself in shadows and you teleport up to 30 feet to an unoccupied space that you can see after you conclude your spell.",
				]),	
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Obscure",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you use a meddling point on your own spell you can surround yourself in darkness. When you do so attack rolls have disadvantage against you until the start of your next turn.",
			]),	
		},

		"subclassfeature11" : {
			name : "Witch's Blackout",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you meddle another casters spell you can cause them to make a wisdom saving throw. On a failed save the caster is blinded by darkness created by ther own spell for 1 minute. At the end of each of their turns the target can repeat the saving throw ending the effect on a success.",
			]),	
		},

		"subclassfeature15" : {
			name : "Witch's Shroud",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can wrap yourself in shadows granting you 5 temporary hit points. These temporary hit points do stack, but once they are lost they cannot be regained. In addition, all temporary hit points are lost when you complete a long rest.",
			]),	
		},
	},
});	
AddSubClass("witch", "wood", {
	regExpSearch : /^(?=.*(witch))(?=.*wood).*$/i,
	subname : "Coven of the Wood",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "entangle", "goodberry", "purify food and drink", "tasha's caustic brew", "barkskin", "melf's acid arrow", "protection from poison", "spike growth", "plant growth", "speak with plants", "stinking cloud", "conjure woodland beings", "grasping vine", "vitriolic sphere", "insect plague", "tree stride", "wrath of nature", "transport via plants", "wall of thorns", "regenerate", "earthquake", "imprisonment"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals poison damage instead of lightning damage.",
			]),	
			prereqeval : function(v) { return v.hasWitchBolt; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "witch bolt") {
									spellObj.description = spellObj.description.replace("1d12+1d12/SL Lightn. dmg; 1 a 1d12 Lightn. dmg", "1d12+1d12/SL Poison dmg; 1 a 1d12 Poison dmg");
									return true;
								}
							},
							"the witch bolt spell deals poison damage instead of lightning damage."
						]
					}
		},

		"subclassfeature1.1" : {
			name : "Poultice",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You craft a magical object used by this coven known as a Poultice. This objected is crafted from seven sacred healing herbs that is capable of offering a magical remedies along your journey. As an action you can lay this poultice on the body of you or one willing creature to remove one disease, toxin, or condition effect. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
			]),	
		},

		"subclassfeature3" : {
			name : "Witch's Wicker",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"Whenever you spend a meddling point you can choose to have wickers grow around you in a 15 foot radius centered on you. These wickers create difficult terrain, and deal 1d4 piercing damage to each creature other than you that starts its turn within this area.",
			]),	
		},

		"subclassfeature3.1" : {
			name : "Rooting Spell",
			source: "PBMS",
			minlevel : 3,
			description : desc([
				"You gain an additional meddle spell only known by witches of this coven known as the rooting spell.",
			]),	
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Rooting Spell"],
			"rooting spell" : {
				name : "Rooting Spell",
				description : desc([
					"You target one spell, the caster of that spell must make a strength saving throw. On a failed save the caster is restrained and rooted to the ground by vines.",
				]),	
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Flower",
			source: "PBMS",
			minlevel : 7,
			description : desc([
				"Whenever you use a meddling point on your own spell you can create a magical blossom that sprouts in an unoccupied space within 30 feet. That blossom possesses a magical aura of the meddling spell used. All spells cast by you and allies within 30 feet of that blossom are cast with the meddled effect. This flower disappears when you create another blossom, the blossom is dismissed as a bonus action, or the blossom is destroyed. The blossom has an AC 12 and 25 hit points.",
			]),	
		},

		"subclassfeature11" : {
			name : "Witch's Thorns",
			source: "PBMS",
			minlevel : 11,
			description : desc([
				"Whenever you meddle another casters spell you can choose to have the caster to make a wisdom saving throw, on a failed save the caster takes 1d6 force damage from magical thorns ejected from their own spell.",
			]),	
		},

		"subclassfeature15" : {
			name : "Witch's Pollen",
			source: "PBMS",
			minlevel : 15,
			description : desc([
				"Whenever you spend a meddling point you can choose to create a cloud of magical pollen that covers a 15 foot radius from a point you choose within 60 feet that you can see. Any enemy to enter this space must make a Constitution saving throw, on a failed save the target has disadvantage on all saving throws against yours or your allies spells.",
			]),	
		},
	},
});
//New Subclasses for PHB/ERLW/TCE Classes
//Artificer
AddSubClass("artificer", "creator", {
	regExpSearch : /^(?=.*artificer)(?=.*creator).*$/i,
	subname : "Creator",
	fullname : "Creator",
	source : [["PBMS", 0]],
	spellcastingBonus : ["expeditious retreat", "tenser's floating disk", "enlarge/reduce", "enhance ability", "haste", "tiny servant", "fabricate", "polymorph", "animate objects", "telekinesis"],
	features : {
		"subclassfeature3" : {
			name : "Tools Proficiency",
			source : [["E:RLW", 58], ["T", 14]],
			minlevel : 3,
			description : " [proficient with two types of artisan tools of your choice.]",
			toolProfs : ["Artisan's tools", 2],
			spellcastingExtra : ["healing word", "ray of sickness", "flaming sphere", "melf's acid arrow", "gaseous form", "mass healing word", "blight", "death ward", "cloudkill", "raise dead"]
		},
		"subclassfeature3.1" : {
			name : "Golem",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"You have created a Soul stone which can be implanted into a constuct to give it life. Using one of your Artisan's tools during a long rest and the appropriate material you can craft a golem and with your soul stone give it life. The golem is small in size and obeys your commands to the best of its abilities, it acts on your turn and you can telepathically communicate where to move and what action to take (no action required), if you are incapacitated or absent the golem will act on its own protecting you and itself, if the golem is reduced to 0 hp it returns to inanimate materials which you can reform during a long rest using your soul stone, during a short rest you can use he mending cantrip up to your PB to repair your golem 1d8 + int mod, once you have used these uses you must take a long rest to do so again. the golem uses your PB"
			]),
			toNotesPage : [{
				name : "Golem Types",
				note : [
					"Glassblower's Tools: Glass Golem from 5ft cube volume of non-magical sand or glass. Radiant Absorption Feature",
					"Jeweler's Tools: Ice Golem from 5ft cube volume of non-magical ice. Cold Absorption Feature.",
					"Leatherworker's Tools: Flesh Golem from 5ft cube volume of non-magical remains. Lightning Absorption Feature.",
					"Mason's Tools: Stone Golem from 5ft cube volume of non-magical stone. Force Absorption Feature.",
					"Potter's Tools: Clay Golem from 5ft cube volume of non-magical clay. Acid Absorption Feature.",
					"Smith's Tools: Iron Golem from 5ft cube volume of non-magical iron. Fire Absorption Feature.",
					"Tinker's Tools: Brass Golem from 5ft cube volume of non-magical brass. Thunder Absorption Feature.",
					"Woodcarver's Tools: Wood Golem from 5ft cube volume of non-magical wood. Wave Absorption Feature.",
				],	
			}],
			limfeaname : "Repair Golem",
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
		"subclassfeature5" : {
			name : "Spell Golem",
			source : [["PBMS", 0]],
			minlevel : 5,
			description : desc([
				"You have learned to infuse more magic into your golem, its size increases to Medium, its Str and Con scores increase by 2, movement speed becomes 30 ft. Max HP 50 and grants the golem the ability to cast a spell 3/LR. Glass: Guiding Bolt, Ice: Frost Fingers, Flesh: Wrathful Smite, Stone: Magnify Gravity, Clay: Grease, Iron: Burning Hands, Brass: Thunderwave, Wood: Ensnaring Strike.",
			]),
			limfeaname : "Golem Spell",
			usages : 3,
			recovery : "long rest",
		},
		"subclassfeature9" : {
			name : "Improved Golem",
			source : [["PBMS", 0]],
			minlevel : 9,
			description : desc([
				"you can now craft golems out of 10ft cube volume materials increasing their size to Large, Increasing Str, Con, and AC by 2, and Max HP is now 100.",
			]),
		},
		"subclassfeature15" : {
			name : "Golem Synergy",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : desc([
				"Whenever you gain a bonus to your AC, hit points, attack roll, damage roll, saving throw, speed, or stats that was granted from a magic item, artificer infusion, or spell your golem also receives the bonus for the same duration.",
			]),
		},	
	},
});
AddFeatureChoice(ClassList.artificer.features.spellcasting, true, "Artificer Invention", {
	name : "Artificer Invention",
	extraname : "Optional Artificer 5",
	source : [["PBMS", 0]],
	description : desc([
		"You have learned to transform prismatic shards into magic items by using the appropriate artisan's tools allowing you to invent items yourself, you can invent your own magic items up to your Intelligence Mod. At 5th level you can create Common items, 10th level Uncommon, 15th level Rare, and 20th level Very Rare. Consult DM for rarity. Each item takes 8 hours/rarity level, the appropriate artisan's tools and materials, which includes one prismatic shard, and 100gp/rarity level.",
	]),
	prereqeval : function (v) { return classes.known.artificer.level >= 5 ? true : "skip"; }
}, "Optional 5th-level artificer features");
//Barbarian
AddSubClass("barbarian", "warlord", {
	regExpSearch : /^(?=.*barbarian)(?=.*warlord).*$/i,
	subname : "Warlord",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature3" : {
			name : "Warcry",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc(
				"When you enter a rage you let out a Warcry granting allies within 30ft of you that can hear you a +1 on attack rolls and gains adv. on one saving throw ability of their choice for 1 minute."
			),
		},
		"subclassfeature6" : {
			name : "War Trap",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"When a foe attempts to move out of your melee range and allows you to make an opportunity attack, your strike is critical if you hit.",
			]),
		},
		"subclassfeature10" : {
			name : "War Band",
			source : [["PBMS", 0]],
			minlevel : 10,
			description : desc([
				"Your when you enter a rage each ally within 30 feet of you also gain your bonus to damage rolls on their melee attacks. In addition, as a reaction when an ally within range rolls a critical hit they roll additional dice of damage equal to your brutal critical when determining the extra damage for a critical hit with a melee attack.",
			]),
			action : ["action", "War Band"],
		},
		"subclassfeature14" : {
			name : "Authority",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc([
				"You can cast Dominate Monster once per long rest using your strength as the spellcasting ability, The Targer on a failed save is frightened instead of charmed, this spell does not require concentration, but you do need to remain within 30 ft. If the creature moves beyond 30 ft. they can remake the saving throw.",
			]),
			limfeaname : "Dominate Monster",
			usages : 1,
			recovery : "long rest",
		},	
	},
});
AddFeatureChoice(ClassList.barbarian.features.rage, true, "Rage Caster", {
	name : "Rage Caster",
	extraname : "Optional Barbarian 5",
	source : [["PBMS", 0]],
	description : desc([
		"While raging, you may cast spells that do not require concentration, when you do immediately roll on the Wild Magic table in the Player's Handbook",
	]),
	prereqeval : function (v) { return classes.known.barbarian.level >= 5 ? true : "skip"; }
}, "Optional 5th-level barbarian features");
//Bard
AddSubClass("bard", "silence", {
	regExpSearch : /^(?=.*bard)(?=.*silence).*$/i,
	subname : "College of Silence",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature3" : {
			name : "Mute",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc(
				"You learn the Message Cantrip and can cast it as a bonus action without Verbal components, when you do so you can target a number of creatures up to your charisma modifier"
			),
			spellcastingBonus : [{
				name : "Mute",
				spells : "message",
				selection : "message",
				times : 1,
			}],	
		},
		"subclassfeature3.1" : {
			name : "Mysterious Murmers",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc(
				"You have learned to act out verbal components to spells and do not need to speak them aloud. In order to use bardic inspiration, or song of rest however you do require the ability to move as you use sign language, dance, or gestures to inspire. You gain Expertise in the Stealth skill, and have Adv. on Performance checks to convey messages using sign language, dance, or gestures."
			),
		},	
		"subclassfeature6" : {
			name : "Code of Silence",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"Once per long rest, you may cast Silence with this feature without expending a spell slot or components, while within the area of silence a creature is also subjected to the effects of Hunter's Mark. When a creature leaves the area for the first time they must make a Con save, on a fail they take 3d8 thunder damage and are deafened for 1 minute, on a success, they take half damage and are not deafened.",
			]),
			limfeaname : "Silence",
			usage : 1,
			recovery : "long rest",
		},
		"subclassfeature14" : {
			name : "Silence is Golden",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc([
				"When you cast silence, you can center it upon yourself and have it move with you, additionally you can maintain concentration on it for up to 1 hour. As a reaction when you see an ally try to cast a spell, that requires verbal components, while within your area of silence you can expend a Bardic Inspiration die to imitate them and magically assist allowing them to cast the spell while silenced.",
			]),
			action : ["reaction", "Silent Spell Assist"],
		},	
	},
});
AddFeatureChoice(ClassList.bard.features.spellcasting, true, "Dancing Defense", {
	name : "Dancing Defense",
	extraname : "Optional Bard 7",
	source : [["PBMS", 0]],
	description : desc([
		"As a bonus action while in combat you can roll one of your Bardic Inspiration dice to grant yourself a bonus to AC and Dex saves equal to the number rolled for the next minute. You can only have one bonus active at a time, if you spend another Bardic Inspiration die the first roll is replaced with the new roll.",
	]),
	action : "bonus action",
	prereqeval : function (v) { return classes.known.bard.level >= 7 ? true : "skip"; }
}, "Optional 7th-level bard features");
//Cleric
AddSubClass("cleric", "eldritch domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(eldritch)\b).*$/i,
	subname : "Eldritch Domain",
	source : [["PBMS", 0]],
	spellcastingExtra : ["magnify gravity", "pattern weave", "detect thoughts", "mind spike", "ambrose's nebula", "hypnotic pattern", "gravity sinkhole", "raulothim's psychic lance", "far step", "synaptic static"],
	features : {
		"subclassfeature1" : {
				name : "Bonus Cantrip",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc("I gain the Eldritch Blast cantrip"),
			spellcastingBonus : [{
				name : "Bonus Cantrip",
				spells : ["eldritch blast"],
				selection : ["eldritch blast"],
				times : 1,
			}],	
		},
		"subclassfeature1.1" : {
			name : "Eldritch Blessing",
			source : [["PBMS", 0]],
			minlevel : 1,
			vision : "Telepathy: 30 ft.",
			action : ["bonus action", "Merge"],
			description : desc([
				"You gain the ability to speak Telepathicly to a creature you can see within 30 ft. Additionally, as a bonus action you can Merge with two other willing creatures you can see within 30 ft. gaining the ability to have a telepathic conversation with the creatures.",
			]),
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Psychic Drain",
			source : [["PBMS", 0]],
			minlevel : 2,
			description : desc([
				"As an action, When I target a creature or creatures with an enchantment, illusion, or conjuration spell",
				"those creatures must make an INT save or take 2d4 psy. dmg, half as much on a success. For each point of",
				"dmg dealt you gain a pool of healing you can spend on yourself or creatures you are merged with, no pool on success.",
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Aberrant Repulsion",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc("When I use my Channel Divinity: Turn Undead, I can instead target any creature within range of the appropriate challenge rating."),
		},
		"subclassfeature8" : {
			name : "Psionic Conversion",
			source : [["PBMS", 0]],
			minlevel : 8,
			description : desc("You can choose to deal Psy. dmg in place of normal damage for any spell you cast."),
		},
		"subclassfeature17" : {
			name : "Mind Shield",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : desc("Your thoughts are warded by divine power, you gain immunity to Psy. dmg and the charm. condition, your thoughts and emotions can not be read telepathicaly unless you allow it."),
			savetxt : {
				immune : ["psychic", "charmed"],
			},	
		}
	}
});
AddFeatureChoice(ClassList.cleric.features.spellcasting, true, "Turn Otherworldy Beings", {
	name : "Turn Otherworldy Beings",
	extraname : "Optional Cleric 2",
	source : [["PBMS", 0]],
	description : desc([
		"As an action, all undead and one additional type of creature (Aberration, Celestial, Elemental, Fey, Fiend, Giant, Monstrocity, or Ooze) within 30 ft that can see/hear me must make a Wisdom save",
		"If an undead fails this save, it is turned for 1 minute or until it takes any damage",
		"Turned: move away, never within 30 ft of me, no reactions or actions other than Dash",
		"Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds",
	]),
	action : ["action", "Turn Otherworldy Beings"],
	prereqeval : function (v) { return classes.known.cleric.level >= 2 ? true : "skip"; }
}, "Optional 2nd-level cleric features");
//Druid
AddSubClass("druid", "circle of spirits", {
	regExpSearch : /^(?=.*druid)(?=.*circle of spirits).*$/i,
	subname : "Circle of Spirits",
	source : [["PBMS", 0]],
	spellcastingBonus : ["toll the dead", "healing spirit", "phantasmal force", "speak with dead", "spirit guardians", "banishment", "phantasmal killer", "commune", "hallow"],
	features : {
		
		"subclassfeature2" : {
			name : "Trance",
			source : [["PBMS", 0]],
			minlevel : 2,
			description : desc([
				"At 2nd level, you can expend a use of your wildshape feature to enter a trance. It is customary for these druids to use a trance state to deepen their connection with the nature spirits that guide the mortal realms. The trance allows a spiritual guardian of choice to appear in a space within 30 feet of you taking on the form of a nature spirit you desire. On your turn, you can enter a trance as a bonus action. While in a trance, your speed is reduced to 0 feet, and you gain the following benefits granted from the guardian spirit. You can end a trance any time no action required.",
			]),
			toNotesPage : [{
				name : "Trance",
				note : [
					"• You enter the border ethereal, while in this space you are visible to others on both the material and ethereal plane, however, you cannot be affected or affect other creatures on either plane.",
					"• When you enter this state your guardian appears and acts on your behalf, when you do so a spectral spirit of that guardian appears within 30 feet of you.",
					"• You are blinded and deafened while in this state and your senses become that of the chosen guardian.",
					"• The guardian acts on your behalf and on each of your turns, and you choose where it moves and the actions it takes. This guardian cannot move more than 60 feet away from you.",
					"• While in a trance state you are unable to take any other actions, otherwise you end the trance state.",
					"• The guardian shares the same state block as the Ghost (MM pg. 147) However, the guardian has the same number of maximum hit points as you and if the guardian is reduced to 0 hit points it vanishes. When the trance ends as a result of the guardian dropping to 0 hit points, any excess damage carries over to you.",
					"• The guarduian can take two Forceful Touch actions (instead of withering touch), and deals force damage. The damage dealt by the spirit’s attack grows with your ability to channel its divine power. A single forceful touch deals 1d6 + your wisdom modifier.A single attack deals one additional d6 at 5th level (2d6), at 11th level (3d6), and 17th level (4d6).",
				],	
			}],
			spellcastingExtra : ["toll the dead", "healing spirit", "phantasmal force", "speak with dead", "spirit guardians", "banishment", "phantasmal killer", "commune", "hallow"],
		},
		"subclassfeature6" : {
			name : "Guiding Spirits",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"At 6th level, You gain the service of a guiding spirit as if you had cast the Find Familiar spell, as well as the find familiar spell is added to your druid spell list. This spirit follows your turn in initiative, and shares the same stat block and features as the Will-O-Wisp, This spirit can be attacked and use the attack action on its turn. For all other rulings see the find familiar spell.",
			]),
			spellcastingExtra : ["find familiar"], 
		},
		"subclassfeature10" : {
			name : "Spirit Walker",
			source : [["PBMS", 0]],
			minlevel : 10,
			description : desc([
				"At 10th level, When you gain this feature you can choose to expend one use of your wildshape feature to gain incorporeal movement equal to your walking speed, and can move through creatures and objects as if they were difficult terrain. You take 1d10 force damage if you end your turn inside an object. Alternatively you can expend one use of your wildshape feature to deepen your connection to the spirit world granting you etherealness. As an action you can become ethereal as if you had casted the Etherealness spell, however, the duration is equal to the time of your wildshape.",
			]),
		},	
		"subclassfeature14" : {
			name : "Spirit Swarm",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc([
				"At 14th level, When you use the find familiar spell you can now call forth three guiding spirits instead of one. These guiding spirits share the same turn and initiative and each share the same stat block as the will O’ wisp. Lastly, whenever you cast the spirit guardians spell you can choose to call forth the guiding spirits to flit around you instead. When you do so the spirit guardian spell no longer requires concentration and lasts until 10 minutes has passed or dissmissed early by you no action required. This effect stays active even if you fall unconscious. While the guiding spirits surround you in this way they move with you and no longer take any actions and are removed from initiatve.",
			]),
		},
	},
});	
AddFeatureChoice(ClassList.druid.features.druidic, true, "Tree Companion", {
	name : "Tree Companion",
	extraname : "Optional Druid 2",
	source : [["PBMS", 0]],
	description : desc([
		"You gain the ability to harness magic from the ancient teachings of the trees, and call to them for aid. You can expend a use of your Wild Shape feature to summon an awakened shrub as if you had cast the find Familiar spell, without material component.",
	]),
	prereqeval : function (v) { return classes.known.druid.level >= 2 ? true : "skip"; }
}, "Optional 2nd-level druid features");
//Fighter
AddSubClass("fighter", "amazon", {
	regExpSearch : /^(?=.*fighter)(?=.*amazon).*$/i,
	subname : "Amazon",
	source : [["PBMS", 0]],
	spellcastingAbility : 5,
	features : {
		
		"subclassfeature3a" : {
			name : "Amazon Weapon Training",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"Choose an Amazon Weapon Training for the amazon using the 'Choose Feature' button above",
			]),
			extraname : "Amazon Weapon Training",
			extrachoices : ["Javelin Amazon Weapon Training", "Spear Amazon Weapon Training", "Pike Amazon Weapon Training", "Glaive Amazon Weapon Training", "Longsword Amazon Weapon Training", "Shortsword Amazon Weapon Training", "Longbow Amazon Weapon Training", "Shortbow Amazon Weapon Training", "Whip Amazon Weapon Training"],
			extratimes : 1,
			"javelin amazon weapon training" : {
				name : "Javelin Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with javelins, + Proficiency bonus to attack rolls I make with javelins.",
				]),	
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "javelin" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},
			"spear amazon weapon training" : {
				name : "Spear Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with spears, + Proficiency bonus to attack rolls I make with spears.",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "spear" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},
			"pike amazon weapon training" : {
				name : "Pike Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with pikes, + Proficiency bonus to attack rolls I make with pikes.",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "pike" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},
			"glaive amazon weapon training" : {
				name : "Glaive Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with glaives, + Proficiency bonus to attack rolls I make with glaives.",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "glaive" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},
			"longsword amazon weapon training" : {
				name : "Longsword Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with longswords, + Proficiency bonus to attack rolls I make with longswords.",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "longsword" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},
			"shortsword amazon weapon training" : {
				name : "Shortsword Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with shortswords, + Proficiency bonus to attack rolls I make with shortswords.",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "shortsword" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},
			"longbow amazon weapon training" : {
				name : "Longbow Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with longbows, + Proficiency bonus to attack rolls I make with longbows.",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "longbow" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},
			"shortbow amazon weapon training" : {
				name : "Shortbow Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with shortbows, + Proficiency bonus to attack rolls I make with shortbows.",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "shortbow" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},
			"whip amazon weapon training" : {
				name : "Whip Amazon Weapon Training",
				description : desc([
					"+1 bonus to damage rolls I make with whips, + Proficiency bonus to attack rolls I make with whips.",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "whip" && (/\bamazon\b/i).test(v.WeaponText)) {
								output.extraDmg += 1;
								output.extraHit += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Amazon' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit and +1 on its Damage."
					]
				}
			},	
		},
		"subclassfeature3b" : {
			name : "Amazon Tribe",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"Choose an Amazon Tribe for the amazon using the 'Choose Feature' button above",
			]),
			extraname : "Amazon Tribe",
			extrachoices : ["Sisterhood of the Sightless Eye", "Sisterhood of the Stalking Lioness", "Sisterhood of Maiden's Voyage"],
			extratimes : 1,
			"sisterhood of the sightless eye" : {
				name : "Sisterhood of the Sightless Eye",
				spellcastingBonus : [{
					name : "Sisterhood of the Sightless Eye",
					spells : ["guidance", "hunter's mark"],
					selection : ["guidance", "hunter's mark"],
					times : 2,
				}],	
				limfeaname : "Hunter's Mark",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				description : "You gain the Guidance cantrip, and can cast the Hunter's Mark spell at 1st level a number of times before a long rest equal to your Proficiency bonus",
			},
			"sisterhood of the stalking lioness" : {
				name : "Sisterhood of the Stalking Lioness",
				spellcastingBonus : [{
					name : "Sisterhood of the Stalking Lioness",
					spells : ["primal savagery", "longstrider"],
					selection : ["primal savagery", "longstrider"],
					times : 2,
				}],	
				limfeaname : "Longstrider",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				description : "You gain the Primal Savagery cantrip, and can cast the Longstrider spell at 1st level a number of times before a long rest equal to your Proficiency bonus",
			},
			"sisterhood of maiden's voyage" : {
				name : "Sisterhood of Maiden's Voyage",
				spellcastingBonus : [{
					name : "Sisterhood of Maiden's Voyage",
					spells : ["lightning lure", "fog cloud"],
					selection : ["lightning lure", "fog cloud"],
					times : 2,
				}],	
				limfeaname : "Fog Cloud",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				description : "You gain the Lightning Lure cantrip, and can cast the Fog Cloud spell at 1st level a number of times before a long rest equal to your Proficiency bonus",
			},
		},
		"subclassfeature7" : {
			name : "Hunter Gatherer",
			source : [["PBMS", 0]],
			minlevel : 7,
			description : desc("You gain expertise in two of the following skills Animal Handling, Insight, Nature, Perception, or Survival"),
			skillstxt : "gain expertise in two from Animal Handling, Insight, Nature, Perception, or Survival",
		},	
		"subclassfeature10" : {
			name : "Amazon Tribe Improvement",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc([
				"Using the 'Choose Feature' button above select the Amazon Tribe Improvement for the Amazon Tribe you selected at 3rd level.",
			]),
			extraname : "Amazon Tribe Improvement",
			extrachoices : ["Improved Sisterhood of the Sightless Eye", "Improved Sisterhood of the Stalking Lioness", "Improved Sisterhood of Maiden's Voyage"],
			extratimes : 1,
			"improved sisterhood of the sightless eye" : {
				name : "Improved Sisterhood of the Sightless Eye",
				spellcastingBonus : [{
					name : "Improved Sisterhood of the Sightless Eye",
					spells : ["clairvoyance"],
					selection : ["clairvoyance"],
					times : 1,
				}],	
				limfeaname : "Clairvoyance",
				usages : 1,
				recovery : "short rest",
				eval : function() { AddFeat("Alert"); },
				removeeval : function() { RemoveFeat("Alert"); },
				description : "You gain improved mystical insight from the sightless eye granting you the Alert feat. In addition, you can cast the clairvoyance spell at 3rd level once before a shor t or long rest.",
			},
			"improved sisterhood of the stalking lioness" : {
				name : "Improved Sisterhood of the Stalking Lioness",
				spellcastingBonus : [{
					name : "Improved Sisterhood of the Stalking Lioness",
					spells : ["nondetection"],
					selection : ["nondetection"],
					times : 1,
				}],	
				limfeaname : "Nondetection",
				usages : 1,
				recovery : "short rest",
				eval : function() { AddFeat("Skulker"); },
				removeeval : function() { RemoveFeat("Skulker"); },
				description : "You gain improved hunting skills used by your sisterhood granting you the Skulker feat. In addition, you can cast the Nondetection spell at 3rd level once before a short or long rest.",
			},
			"improved sisterhood of maiden's voyage" : {
				name : "Improved Sisterhood of Maiden's Voyage",
				spellcastingBonus : [{
					name : "Improved Sisterhood of Maiden's Voyage",
					spells : ["lightning bolt"],
					selection : ["lightning bolt"],
					times : 1,
				}],	
				limfeaname : "Lightning Bolt",
				usages : 1,
				recovery : "short rest",
				eval : function() { AddFeat("Elemental Adept [Lightning]"); },
				removeeval : function() { RemoveFeat("Elemental Adept [Lightning]"); },
				description : "You gain improved connection to the open seas in which you were raised granting you the Elemental Adept(Lightning) feat. In addition, you can cast the lightning bolt spell at 3rd level once before a short or long rest.",
			},
		},
		"subclassfeature15" : {
			name : "Amazonian Ally",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : desc([
				"You can cast the Planar Ally spell once before a long rest, when you do you summon a Deva ally the Deva's change shape feature is replaced with your sisterhood's cantrip and spells and the Deva wields an Amazonian Weapon.",
			]),
			spellcastingBonus : [{
				name : "Amazonian Ally",
				spells : ["planar ally"],
				selection : ["planar ally"],
				times : 1,
			}],	
			limfeaname : "Planar Ally",
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature18" : {
			name : "Amazon Fury",
			source : [["PBMS", 0]],
			minlevel : 18,
			description : desc([
				"Using the 'Choose Feature' button above select the Amazon Weapon Training Improvement for the Amazon Weapon Training you selected at 3rd level.",
				"You gain reisistance to Bludgeoning, Piercing, and Slashing damage.",
				"You have Advantage on Dexterity Checks and Saving Throws",
			]),
			savetxt : {
				adv_vs : ["dex checks and saves"],
			},	
			dmgres : ["Bludgeoning", "Piercing", "Slashing"],
			extraname : "Improved Amazon Weapon Training",
			extrachoices : ["Javelin Amazon Weapon Training Improvement", "Spear Amazon Weapon Training Improvement", "Pike Amazon Weapon Training Improvement", "Glaive Amazon Weapon Training Improvement", "Longsword Amazon Weapon Training Improvement", "Shortsword Amazon Weapon Training Improvement", "Longbow Amazon Weapon Training Improvement", "Shortbow Amazon Weapon Training Improvement", "Whip Amazon Weapon Training Improvement"],
			extratimes : 1,
			"javelin amazon weapon training improvement" : {
				name : "Javelin Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with javelins",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "javelin" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
			"spear amazon weapon training improvement" : {
				name : "Spear Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with spears",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "spear" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
			"pike amazon weapon training improvement" : {
				name : "Pike Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with pikes",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "pike" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
			"glaive amazon weapon training improvement" : {
				name : "Glaive Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with glaives",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "glaive" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
			"longsword amazon weapon training improvement" : {
				name : "Longsword Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with longswords",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "longsword" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
			"shortsword amazon weapon training improvement" : {
				name : "Shortsword Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with shortswords",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "shortsword" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
			"longbow amazon weapon training improvement" : {
				name : "Longbow Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with longbows",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "longbow" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
			"shortbow amazon weapon training improvement" : {
				name : "Shortbow Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with shortbows",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "shortbow" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
			"whip amazon weapon training improvement" : {
				name : "Whip Amazon Weapon Training Improvement",
				description : desc([
					"+ Proficiency bonus to damage rolls I make with whips",
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == "whip" && (/\bimproved\b/i).test(v.WeaponText)) {
								output.extraDmg += Number(How('Proficiency Bonus'));
							}
						},
						"If I include the word 'Improved' in my weapon's name or description, the calculation will put + Prof bonus on its Damage."
					]
				}
			},
		},	
	},
});
AddFeatureChoice(ClassList.fighter.features.indomitable, true, "Weapon Expert", {
	name : "Weapon Expert",
	extraname : "Optional Fighter 9",
	source : [["PBMS", 0]],
	description : desc([
		"You can select one of your weapons to become expertised in, If you type Expert into your chosen weapons name it will add your Proficiency bonus to the weapons to hit twice.",
	]),
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.isWeapon && fields.Proficiency && (/\bexpert\b/i).test(v.WeaponText)) {
					output.extraHit += Number(How('Proficiency Bonus'));
				}
			},
			"If I include the word 'Expert' in my weapon's name or description, the calculation will put + Prof bonus on the attack's To Hit.",
		],
	},
	prereqeval : function (v) { return classes.known.fighter.level >= 9 ? true : "skip"; }
}, "Optional 9th-level fighter features");
//Monk
AddSubClass("monk", "sixth sense", {
	regExpSearch : /^(?=.*monk)(?=.*sixth sense).*$/i,
	subname : "Way of the Sixth Sense",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature3" : {
			name : "Fortified Mind",
			source : [["PBMS", 0]],
			minlevel : 3,
			dmgres : "Psychic",
			savetxt : {
				immune : ["spells that would detect my thoughts"],
			},
			description : desc([
				"You have advantage on Constitution (Concentration) checks to maintain one of your Psychic abilities. When you make Concentration checks you may add your Constitution modifyer twice to the die rolled.",
			]),
		},
		"subclassfeature3.1" : {
			name : "Levitation",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"You gain the ability to cast Levitate as a bonus action by spending 1 KP, Additionally you can move up to your movement while you are using Levitate. Lastly, your movement speed increases by 5 ft.",
			]),
			speed : { walk : "+5" },
			spellcastingBonus : {
				name : "Levitation",
				spells : ["levitate"],
				selection : ["levitate"],
				firstCol : 1,
			},
			spellFirstColTitle : "Ki",
			action : [["bonus action", "Psychic Abilities"]],
		},
		"subclassfeature6" : {
			name : "Clairvoyance",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"You gain the ability to cast Clairvoyance as a bonus action by spending 1 KP, Additionally you can both see and hear while you are using Clairvoyance. Lastly, you gain 30ft Blindsight.",
			]),
			spellcastingBonus : {
				name : "Clairvoyance",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				firstCol : 1,
			},
			spellFirstColTitle : "Ki",
			vision : [["Blind Sight", 30]],
		},
		"subclassfeature11" : {
			name : "Telekinesis",
			source : [["PBMS", 0]],
			minlevel : 11,
			description : desc([
				"You gain the ability to cast Telekinesis as a bonus action by spending 1 KP, Additionally you can use this ability as a bonus action on each of your turns while Telekinesis is active. Lastly, your Unarmed Strikes deal Psychic damage in place of their normal damage type.",
			]),
			spellcastingBonus : {
				name : "Telekinesis",
				spells : ["telekinesis"],
				selection : ["telekinesis"],
				firstCol : 1,
			},
			spellFirstColTitle : "Ki",
		},
		"subclassfeature17" : {
			name : "Telepathy",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : desc([
				"You gain the ability to cast Telepathy as a bonus action by spending 1 KP, Additionally you can use this ability to telepathically communicate with up to 8 creatures. Lastly, you are immune to all spells and effects that would alter or enter your mind and memories, as well as possession.",
			]),
			savetxt : {
				immune : ["spells that would alter or enter my mind and memories", "possession"],
			},
			spellcastingBonus : {
				name : "Telepathy",
				spells : ["telepathy"],
				selection : ["telepathy"],
				firstCol : 1,
			},
			spellFirstColTitle : "Ki",
		},
	},
});
AddFeatureChoice(ClassList.monk.features.ki, true, "Meditation", {
	name : "Meditation",
	extraname : "Optional Monk 9",
	source : [["PBMS", 0]],
	description : desc([
		"You don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
	]),
	prereqeval : function (v) { return classes.known.monk.level >= 9 ? true : "skip"; }
}, "Optional 9th-level monk features");
//Paladin
AddSubClass("paladin", "legacy", {
	regExpSearch : /^(?=.*paladin)(?=.*legacy).*$/i,
	subname : "Oath of Legacy",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Weapon of Legacy",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"As an action, you can imbue one weapon that you are holding with the divine power of your ancestors, using your channel divinity. Attack rolls made with this weapon allow you to add your charisma modifier to the attack rolls made with this weapon. Additionally, if this weapon is a ranged or an unarmed strike, this attack can deliver a divine smite or the magical force of a smite spell.",
			]),
			spellcastingBonus : [{
				name : "Oath Spells",
				"class" : "any",
				times : [0, 0, 2, 2, 4, 4, 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10],
				level : [1,5],
			}],	
			action : [["action", ""]],	
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Ancestral Intervention",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"As an action you can expend a use of your channel divinity to call upon you ancestors for aid when you need is great. When you do so you gain the benefits of the Lucky feat until you complete a long rest.",
			]),
			action : [["action", ""]],	
		},
		"subclassfeature7" : {
			name : "Aura of the Ancestors",
			source : [["PBMS", 0]],
			minlevel : 7,
			description : desc([
				"You and friendly creatures within 10 feet of you are always under the effect of the Guidance cantrip.",
			]),	
		},
		"subclassfeature15" : {
			name : "Watchful Presence",
			source : [["PBMS", 0]],
			minlevel : 15,
			usages : 1, 
			recovery : "long rest",
			description : desc([
				"Any single attack that would drop you to 0 hit points or kill you outright is instead negated and you take no damage. The attacking creature must make a Wisdom saving throw against your spell save DC. On a failed save, the creature takes the damage you would have received, on a successful save the creature takes half damage. Once you use this ability, you cannot use it again until you finish a long rest.",
			]),
		},
		"subclassfeature20" : {
			name : "Divine Legacy",
			source : [["PBMS", 0]],
			minlevel : 20,
			description : desc([
				"You can assume the form of your greatest ancestor as the divine power passed down from generations flows through you in perfect conjunction. Using your action, you undergo this transformation. For 1 hour all weapon attacks that hit a target deal one additional dice of weapon damage. Once you use this feature you cannot do so again until you finish a long rest.",
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1,
		},
	},
});
AddFightingStyle(["paladin"], "Archery", { 
	name : "Archery Fighting Style",
	description : desc("+2 bonus to attack rolls I make with ranged weapons"),
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
			},
			"My ranged weapons get a +2 bonus on the To Hit."
		],
	},
}); 
var PBMS_Divine_Strike = {
	name : "Divine Strike",
	source : [["PBMS", 0]],
	description : desc([
		"When you hit with a Ranged weapon attack, you can expend one spell slot to deal an extra 2d8+1d8/SL(Max of 5d8) radiant damage to the target, in addition to the weapon's damage. "
	]),
};
CreateClassFeatureVariant("paladin", "divine smite", "divine strike", PBMS_Divine_Strike);
//Ranger
AddSubClass("ranger", "archer", {
	regExpSearch : /^(?=.*ranger)(?=.*archer).*$/i,
	subname : "Archer",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature3" : {
			name : "Archer Awareness",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"You gain an additional 60 ft. of darkvision, and can see through magical darkness. You have adv. on perception checks that rely on sight and sound and you can't be suprised while you are conscious. You gain a +5 to Initiative rolls, and other creatures don't gain adv. on attack rolls against you as a result of being unseen.",
			]),
			addMod : { type : "skill", field : "Init", mod : 5, text : "I have a +5 bonus on initiative rolls." },
			vision : ["Darkvision", "+60"],
		},
		"subclassfeature7" : {
			name : "Ranged Tactics",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"Use the 'Choose Feature' button to choose a Tactic.",
			]),
			choices : ["Swift Quiver", "Primal Strike", "Volley"],
			"swift quiver" : {
				name : "Swift Quiver",
				description : "When you make a ranged attack primal power guides your ammunition and therefore you gain an extra attack with ranged weapons. In addition, when ever you make a ranged attack you can make another ranged attack as a bonus action. Ranged weapons with the loading property no longer impede extra attacks with this feature.",
			},
			"primal strike" : {
				name : "Primal Strike",
				description : "When you hit a creature with a ranged weapon attack, you can expend one spell slot to deal your choice of fire, cold, poison, acid, thunder, or lightning damage to the target. The extra damage is 2d8 for a 1st level spell slot, plus 1d8 for each spell level higher that 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is a favored enemy, to a maximum of 6d8.",
			},
			"volley" : {
				name : "Volley",
				description : "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.",
				action : ["action", ""],
			},	
		},
		"subclassfeature11" : {
			name : "Vantage Point",
			source : [["PBMS", 0]],
			minlevel : 10,
			description : desc([
				"As long as you are at a higher elevation of 10 feet or more of another target that you can see you have advantage on the attack roll. In addition, you score a critical hit when you roll a 19 or 20.",
			]),
		},
		"subclassfeature15" : {
			name : "Hidden Strike",
			source : [["PBMS", 0]],
			minlevel : 15,
			description : desc([
				"Whenever you make a ranged attack while hidden the target takes an addition dice of your weapon damage, and grants you advantage on your next stealth check to stay hidden."
			]),
		},
	},
});
AddFeatureChoice(ClassList.ranger.features["extra attack"], true, "Extra Attack", {
	name : "Extra Attack",
	extraname : "Optional Ranger 9",
	source : [["PBMS", 0]],
	description : desc([
		"You can attack three times, instead of twice, whenever you take the attack action on your turn.",
	]),
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
	prereqeval : function (v) { return classes.known.ranger.level >= 9 ? true : "skip"; }
}, "Optional 9th-level ranger features");
//Rogue
AddSubClass("rogue", "dustwalker", {
	regExpSearch : /^(?=.*rogue)(?=.*dustwalker).*$/i,
	subname : "Dustwalker",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature3" : {
			name : "Astral Steps",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"As a bonus action, you can create a Tiny beacon of intangible and spectral stardust that lasts for up to 1 hour that only you can carry or place. As part of this bonus action or as a subsequent bonus action before the beacon disappears, you can place the beacon in an unoccupied space of your choice within 5 feet of you. When you take the Dash action, you are able to teleport up to 60 feet from your position to the space that a beacon was placed. If the beacon's space is occupied when you try to teleport. Once you teleport to a beacon, it disappears. You can create a number of beacons equal to your proficiency bonus + your Intelligence modifier (minimum of 1) and regain all expended uses when you finish a long rest.",
			]),
			action : [["bonus action", "Create/Place Beacon"]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = What('Int Mod');",
			recovery : ["long rest"],	
		},
		"subclassfeature3.1" : {
			name : "Asterism",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"As an action, you can subtly sprinkle a pinch of stardust on a creature or object of your choice within 5 feet of you that remains for a number of hours equal to your proficiency bonus. You can sense the distance and direction of this creature or object, as long as they are within 500 feet of you.",
			]),
			action : [["action", "Sprinkle Stardust"]],	
		},
		"subclassfeature9" : {
			name : "Fade Away",
			source : [["PBMS", 0]],
			minlevel : 9,
			description : desc([
				"You become invisible immediately after you teleport with your Astral Steps feature until the end of your next turn. This invisibility ends early if you attack or cast a spell.",
			]),	
		},
		"subclassfeature13" : {
			name : "Blinding Dust",
			source : [["PBMS", 0]],
			minlevel : 13,
			description : desc([
				"You can use an action to cause a beacon that you create to explode, causing a burst of stardust to fill a 20-foot radius area. Each creature in that area other than you must make a Constitution saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier or be blinded for up to 1 minute. A creature can remake the saving throw at the end of each of their turns, ending the effect on itself on a success.",
			]),
			action : ["action", "Detonate Beacon"],
		},
		"subclassfeature17" : {
			name : "Star Forged",
			source : [["PBMS", 0]],
			minlevel : 17,
			description : desc([
				"You have begun to fully master wielding stardust to harm and hide. You gain the following benefits:",
				"• You can teleport up to 300 feet from your position with your Astral Steps feature.",
				"• Your Fade Away feature now causes you to become invisible for up to 1 minute. The invisibility still ends early if you attack or cast a spell.",
			]),
		},
	},
});
AddFeatureChoice(ClassList.rogue.features["sneak attack"], true, "Play Dirty", {
	name : "Play Dirty",
	extraname : "Optional Rogue 5",
	source : [["PBMS", 0]],
	description : desc([
		"You gain an additional bonus action option known as play dirty. You become especially proficient in thrown gear to disable your enemies, and can throw one of the following gear as a bonus action on your turn; Acid Vial, Alchemist Fire, Ball Bearings, Caltrops, and Oil Flask.",
	]),
	action : ["action", ""],
	prereqeval : function (v) { return classes.known.rogue.level >= 5 ? true : "skip"; }
}, "Optional 5th-level Rogue features");
//Sorcerer
AddSubClass("sorcerer", "infernal soul", {
	regExpSearch : /^(?=.*sorcerer)(?=.*infernal).*$/i,
	subname : "Infernal Soul",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature1" : {
			name : "Hellish Gift",
			source : [["PBMS", 0]],
			minlevel : 1,
			dmgres : "fire",
			vision : "Devil's Sight 60 ft",
			spellcastingBonus : [{
				name : "Hellish Gift",
				spells : ["burning hands"],
				selection : ["burning hands"],
				times : 1,
			}],	
			description : desc([
				"You gain resistance to fire damage, 60 feet of devil's sight allowing you to see in magical and non-magical darkness. You gain the following spells that count as sorcerer spells, but do not count against the number of sorcerer spells you know. At 1st level you gain Burning Hands spell, and when you reach 3rd level you gain the Hellish Rebuke spell, and lastly at 5th level you gain the Fireball spell.",
			]),	
		},
		"subclassfeature3" : {
			name : "Hellish Gift",
			source : [["PBMS", 0]],
			minlevel : 3,
			spellcastingBonus : [{
				name : "Hellish Gift",
				spells : ["hellish rebuke"],
				selection : ["hellish rebuke"],
				times : 1,
			}],	
			description : desc([
				"",
			]),	
		},
		"subclassfeature5" : {
			name : "Hellish Gift",
			source : [["PBMS", 0]],
			minlevel : 5,
			spellcastingBonus : [{
				name : "Hellish Gift",
				spells : ["fireball"],
				selection : ["fireball"],
				times : 1,
			}],	
			description : desc([
				"",
			]),	
		},
		"subclassfeature6" : {
			name : "Infernal Visage",
			source : [["PBMS", 0]],
			minlevel : 6,
			spellcastingBonus : [{
				name : "Infernal Visage",
				spells : ["fear"],
				selection : ["fear"],
				times : 1,
			}],
			description : desc([
				"You gain the Fear spell and does not count against the number of spells you can know. You can cast the Fear spell as a bonus action on your turn. When you do so, you can expend two sorcery points to maintain the spell without concentration.",
			]),
		},
		"subclassfeature14" : {
			name : "Fiendish Corruption",
			source : [["PBMS", 0]],
			minlevel : 14,
			savetxt : {
				immune : ["fire"],
			},
			description : desc([
				"Your power continues to change your form and you begin to sprout horns, barbed tail, blazing eyes, or reddish skin. You gain immunity to fire damage. Lastly you can expend one sorcery point to change the damage type of one of your damaging spell to fire damage.",
			]),
		},
		"subclassfeature18" : {
			name : "Hellfire Soul",
			source : [["PBMS", 0]],
			minlevel : 18,
			description : desc([
				"As an action you can expend 5 sorcery points to draw on this power to shed an aura of hellfire for the next minute. The blue flames are so intense that fiends burn in its presence. When you gain this aura all spells that deal fire damage you cast deal hellfire damage instead of fire. Creatures that are Immune to fire damage are instead resistant to this damage, and creature that are resistant to fire damage are instead normally affected. Lastly, creatures without fire resistance that is hit by hellfire damage must make a Wisdom saving throw. On a failed save, the creature takes one dice of hellfire damage of that spell at the start of their next three turns. These flames cannot be doused or extinguished."
			]),
			action : ["action", ""],
		},
	},
});
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Wellspring of Life", {
	name : "Wellspring of Life",
	extraname : "Optional Sorcerer 5",
	source : [["PBMS", 0]],
	description : desc([
		"As an action, you can use your sorcery points to grant an extra reservoir of vitality. When you do so you spend two sorcery points gaining 1d8 + your Charisma modifier of temporary hit points. ",
	]),
	action : ["action", ""],
	prereqeval : function (v) { return classes.known.sorcerer.level >= 5 ? true : "skip"; }
}, "Optional 5th-level sorcerer features");
//Warlock
AddSubClass("warlock", "the horned god", {
	regExpSearch : /^(?=.*warlock)(?=.*horned).*$/i,
	subname : "the Horned God",
	source : [["PBMS", 0]],
	spellcastingExtra : ["speak with animals", "hunter's mark", "beast sense", "pass without trace", "conjure animals", "nondetection", "dominate beast", "hallucinatory terrain", "awaken", "geas"],
	features : {
		"subclassfeature1" : {
			name : "Aspect of the Beast",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"Starting at 1st level, you can use your action to magically assume the shape of a beast embodied by your patron. You can use this feature twice. You regain expended uses when you finish a short or long rest. Your warlock level determines the aspects of the beast that you can transform into, as shown in the beast aspect table. You can stay in this shape for a number of hours equal to half your warlock level (rounded down) You then revert to your normal form unless you expend another use of this feature as a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
				"See druid wild shape for additional rulings.",
			]),
			action : [["action", " (start)"], ["bonus action", " (end)"]],
			usages : 2,
			recovery : ["short rest", "long rest"],
			additional : levels.map(function (n) {
					if (n < 1) return "";
					var cr = n < 4 ? "1/8" : n < 8 ? "1/2" : n < 12 ? 1 : 2;
					var hr = Math.floor(n/2);
					var restr = n < 8 ? ", no fly" : "";
					return "CR " + cr + restr + "; " + hr + (restr.length ? " h" : " hours");
			}),
			toNotesPage : [{
				name : "Aspect of the Beast",
				note : [
					"1st-level		Giant Rat, Poisonous Snake",
					"4th-level		Giant Goat, Giant Wolf Spider",
					"8th-level		Dire Wolf, Giant Raven",
					"12th-level	Giant Constrictor Snake, Giant Boar",
				],
			}],	
		},
		"subclassfeature6" : {
			name : "Twisted Affliction",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"At 6th level, you gain the ability to harness your inner beast. As an action, your form painfully twists revealing your beastial corruption granting a partial beastial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you twist your form, you gain temporary hit points equal to your level plus your constitution modifier. In addition, you choose which aspect of the beast afflicts you. Once chosen it cannot be changed. You choice grants you an additional bonus.",
			]),
			action : [["action", " (start)"], ["bonus action", " (end)"]],
			choices : ["Rat Twisted Affliction", "Snake Twisted Affliction", "Goat Twisted Affliction", "Wolf Twisted Affliction", "Spider Twisted Affliction", "Raven Twisted Affliction", "Boar Twisted Affliction"],
			"rat twisted affliction" : {
				name : "Rat Twisted Affliction",
				description : "You have advantage on Wisdom (Perception) checks that rely on smell.",
			},
			"snake twisted affliction" : {
				name : "Snake Twisted Affliction",
				description : "You gain a swim speed equal to your walking speed.",
				speed : { swim : { spd : "walk", enc : "walk" } },
			},
			"goat twisted affliction" : {
				name : "Goat Twisted Affliction",
				description : "You have advantage on Strength and Dexterity saving throws made against effects that would knock you prone.",
				savetxt : {
					adv_vs : ["str/dex saves against prone"],
				},
			},
			"wolf twisted affliction" : {
				name : "Wolf Twisted Affliction",
				description : "You have advantage on attack rolls against a creature as long as at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated.",
			},
			"spider twisted affliction" : {
				name : "Spider Twisted Affliction",
				description : "You can climb difficult surfaces, including upside down on ceilings, witout needing to make an ablility check, you gain a climbing speed equal to your walking speed.",
				speed : { climb : { spd : "walk", enc : "walk" } },
			},
			"raven twisted affliction" : {
				name : "Raven Twisted Affliction",
				description : "You can mimic simple sounds you have heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sound can tell they are imitations with a successful DC 10 Wisdom (Insight) Check."
			},
			"boar twisted affliction" : {
				name : "Boar Twisted Affliction",
				description : "If you move at least 20 feet straight toward a target and then hit them with a melee attack on the same turn, the target takes an extra 2d6 damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
			},	
		},
		"subclassfeature10" : {
			name : "Horrifying Aspect",
			source : [["PBMS", 0]],
			minlevel : 10,
			description : desc([
				"Starting at 10th level, your patron lurks over your shoulder as you traverse the world. Each hostile creature within 60 feet of you that can see you must succeed on a wisdom saving throw against your spell DC or be frightened for 1 minute. If the save fails by 5 or more your attack rolls have advantage until this effect ends. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on a success. If the targets saving throw is successful they are immune to this feature for 24 hours.",
			]),
		},
		"subclassfeature14" : {
			name : "Sacrifical Rite",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc([
				"At 14th level, when you drop a creature to 0 hit points you can choose to perform as sacrifical rite to the horned god as an action transferring the creatures soul to your patron. When you do so you regain all expended spell slots as if you finished a short rest. In addition you regain hit points equal to half the creatures hit point maximum. Once you use this feature, you cannot use it again until you finish a long rest."
			]),
			action : [["action", "Sacrificial Rite"]],
			recovery : "long rest",
			usages : 1,
		}
	}
});
AddFeatureChoice(ClassList.warlock.features["pact magic"], true, "Otherworldly Aid", {
	name : "Otherworldly Aid",
	extraname : "Optional Warlock 5",
	source : [["PBMS", 0]],
	description : desc([
		"Your otherworldly patron not only sees your loyal service, but sees your value. You gain one contractual aid of your choice as laid out in your amended contract.",
		"Relentless Service: When you are reduced to 0 hit points, but not killed outright your Patron comes to your aid. You drop to 1 hit point instead of 0. Once you use this aid, you cannot do so again until you finish a long rest.",
		"Eldritch Guidance: Your patron offers you magical insight to aid you in your quests. You can roll a d6 and add the number rolled to an ability check, potentially turning it into a success. Once you use this aid, you cannot do so again until you finish a long rest.",
	]),
	prereqeval : function (v) { return classes.known.warlock.level >= 5 ? true : "skip"; }
}, "Optional 5th-level warlock features");
//Wizard
AddSubClass("wizard", "revocation", {
	regExpSearch : /^(?=.*wizard)(?=.*revocation).*$/i,
	subname : "School of Revocation",
	fullname : "Revoker",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature2" : {
			name : "Revocation Savant",
			source : [["PBMS", 0]],
			minlevel : 2,
			description : desc([
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy a revocation spell in your spellbook is halved.",
			]),	
		},
		"subclassfeature2.1" : {
			name : "Simple Counter",
			source : [["PBMS", 0]],
			minlevel : 2,
			action : ["reaction", ""],
			description : desc([
				"You can unravel the simplest incantations cast within 60 feet of you. As a reaction, you can cast a counter cantrip when a cantrip is cast within range. When you do so the cast cantrip automatically ends. You can use this simple counter as if it was a cantrip.",
			]),	
		},
		"subclassfeature6" : {
			name : "Patient Counter",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"You can choose to forego your bonus action to gain a second reaction before your next turn. With this reaction you can choose to cast an additional revocation spell that requires one reaction.",
			]),	
		},
		"subclassfeature10" : {
			name : "Dispelling Adept",
			source : [["PBMS", 0]],
			minlevel : 10,
			description : desc([
				"You can cast dispel magic once without expending a spell slot. In addition, you have advantage on skill checks when casting a revocation spell.",
			]),
		},
		"subclassfeature14" : {
			name : "Antimagic Aura",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc([
				"Once before a long rest you can project a 30 foot radius aura originating from you. This aura causes spells cast within its space to falter and weaken for the next 10 minutes, or until you end it early. (no action required) When a creature in this space, including you, casts a damaging spell that spells damage is reduced by half. All spell attack rolls in this space have disadvantage. Lastly, spells that require concentration are disrupted causing them to end at the end of the casters turn."
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1,
		},
	},
});
AddFeatureChoice(ClassList.wizard.features.spellcasting, true, "Create Spell", {
	name : "Create Spell",
	extraname : "Optional Wizard 9",
	source : [["PBMS", 0]],
	description : desc([
		"You gain the knowledge needed to create your own spell. To succeed, you must concentrate for 1 hour for each level of spell. During this time you define the parameters and functions of the spell using arcane notations and spell coding. You also must supply 50 gp for each level of spell to cover the costs for experimentation. Once you have completed the spell you must spend the following 10 minutes recording it properly into your spell book. Once the spell is in your spell book, it becomes one of your known spells and it becomes apart of the wizard spell list.. You then get to name this spell.",
	]),
	prereqeval : function (v) { return classes.known.wizard.level >= 9 ? true : "skip"; }
}, "Optional 9th-level wizard features");
//Spellcaster Armor, Enhanced Spellcasting Focai (Arcane, Divine, Primal), and Other Magic Items
MagicItemsList["flax linen robes"] = {
	name : "Flax Linen Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 5 gp",
	weight : 5,
	description : "Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},	
	addArmor : "Flax Linen Robes",
	armorOptions : {
		regExpSearch : /^(?=.*(flax))(?=.*linen).*$/i,
		name : "Flax Linen Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 11,
		weight : 5,
	},	
};
MagicItemsList["suede robes"] = {
	name : "Suede Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 45 gp",
	weight : 5,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This property grants the wearer resistance to fire, cold, and lightning damage.",
		],
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},	
	dmgres : ["Cold", "Fire", "Lightning"],
	addArmor : "Suede Robes",
	armorOptions : {
		regExpSearch : /^(?=.*suede).*$/i,
		name : "Suede Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 11,
		weight : 5,
	},	
};
MagicItemsList["embroidered robes"] = {
	name : "Embroidered Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 10,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. This property offers the wearer immunity to one of the following magical conditions. This property is determined randomly upon discovery of the robe. Roll 1d6 to determine the condition immunity upon attunement. This immunity does not protect against conditions inflicted by deific means, epic abilities, legendary items, or artifacts. 1. Charmed, 2. Cursed, 3. Frightened, 4. Paralyzed, 5. Magical Sleep, 6. Petrified.",
	],	
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},	
	choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
	choicesNotInMenu : true,
	"charmed" : {
		name : "Embroidered Robes of Charm Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
		],
		savetxt : {
			immune : ["charmed"],
		},	
	},
	"cursed" : {
		name : "Embroidered Robes of Curse Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
		],
		savetxt : {
			immune : ["cursed"],
		},	
	},
	"frightened" : {
		name : "Embroidered Robes of Fright Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
		],
		savetxt : {
			immune : ["frightened"],
		},	
	},	
	"paralyzed" : {
		name : "Embroidered Robes of Paralysis Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
		],
		savetxt : {
			immune : ["paralyzed"],
		},	
	},
	"magical sleep" : {
		name : "Embroidered Robes of Slumber Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
		],
		savetxt : {
			immune : ["magical sleep"],
		},	
	},
	"petrified" : {
		name : " Embroidered Robes of Petrification Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
		],
		savetxt : {
			immune : ["petrified"],
		},	
	},
	addArmor : "Embroidered Robes",
	armorOptions : {
		regExpSearch : /^(?=.*embroidered).*$/i,
		name : "Embroidered Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 11,
		weight : 10,
	},	
};
MagicItemsList["cambric robes"] = {
	name : "Cambric Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 5,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. This property offers the wearer immunity to one of the following magical conditions. This property is determined randomly upon discovery of the robe. Roll 1d6 to determine the condition immunity upon attunement. This immunity does not protect against conditions inflicted by deific means, epic abilities, legendary items, or artifacts. 1. Charmed, 2. Cursed, 3. Frightened, 4. Paralyzed, 5. Magical Sleep, 6. Petrified.",
	],	
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},	
	choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
	choicesNotInMenu : true,
	"charmed" : {
		name : "Cambric Robes of Charm Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
		],
		savetxt : {
			immune : ["charmed"],
		},
	},
	"cursed" : {
		name : "Cambric Robes of Curse Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
		],
		savetxt : {
			immune : ["cursed"],
		},
	},
	"frightened" : {
		name : "Cambric Robes of Fright Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
		],
		savetxt : {
			immune : ["frightened"],
		},
	},	
	"paralyzed" : {
		name : "Cambric Robes of Paralysis Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
		],
		savetxt : {
			immune : ["paralyzed"],
		},
	},
	"magical sleep" : {
		name : "Cambric Robes of Slumber Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
		],
		savetxt : {
			immune : ["magical sleep"],
		},
	},
	"petrified" : {
		name : "Cambric Robes of Petrification Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
		],
		savetxt : {
			immune : ["petrified"],
		},
	},			
	addArmor : "Cambric Robes",
	armorOptions : {
		regExpSearch : /^(?=.*cambric).*$/i,
		name : "Cambric Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 12,
		weight : 5,
	},	
};
MagicItemsList["leather robes"] = {
	name : "Leather Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 50 gp",
	weight : 15,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This property grants the wearer resistance to fire, cold, and lightning damage.",
	],	
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},	
	dmgres : ["Cold", "Fire", "Lightning"],			
	addArmor : "Leather Robes",
	armorOptions : {
		regExpSearch : /^(?=.*leather).*$/i,
		name : "Leather Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 12,
		weight : 15,
	},	
};
MagicItemsList["velvet robes"] = {
	name : "Velvet Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 75 gp",
	weight : 10,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. This property offers the wearer immunity to one of the following magical conditions. This property is determined randomly upon discovery of the robe. Roll 1d6 to determine the condition immunity upon attunement. This immunity does not protect against conditions inflicted by deific means, epic abilities, legendary items, or artifacts. 1. Charmed, 2. Cursed, 3. Frightened, 4. Paralyzed, 5. Magical Sleep, 6. Petrified.",
	],	
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},
	choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
	choicesNotInMenu : true,
	"charmed" : {
		name : "Velvet Robes of Charm Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
		],
		savetxt : {
			immune : ["charmed"],
		},
	},
	"cursed" : {
		name : "Velvet Robes of Curse Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
		],
		savetxt : {
			immune : ["cursed"],
		},
	},
	"frightened" : {
		name : "Velvet Robes of Fright Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
		],
		savetxt : {
			immune : ["frightened"],
		},
	},	
	"paralyzed" : {
		name : "Velvet Robes of Paralysis Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
		],
		savetxt : {
			immune : ["paralyzed"],
		},
	},
	"magical sleep" : {
		name : "Velvet Robes of Slumber Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
		],
		savetxt : {
			immune : ["magical sleep"],
		},
	},
	"petrified" : {
		name : "Velvet Robes of Petrification Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
		],
		savetxt : {
			immune : ["petrified"],
		},
	},			
	addArmor : "Velvet Robes",
	armorOptions : {
		regExpSearch : /^(?=.*velvet).*$/i,
		name : "Velvet Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 13,
		weight : 10,
	},	
};
MagicItemsList["brocade robes"] = {
	name : "Brocade Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 100 gp",
	weight : 10,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Charges. This property grants the wearer three charges of a 1st level spell that are regained at dawn.",
	],
	attunement : true,		
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},	
	limfeaname : "Charges",
	usages : 3,
	recovery : "dawn",		
	addArmor : "Brocade Robes",
	armorOptions : {
		regExpSearch : /^(?=.*brocade).*$/i,
		name : "Brocade Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 13,
		weight : 10,
	},	
};
MagicItemsList["wool robes"] = {
	name : "Wool Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 450 gp",
	weight : 15,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
		"Magical Immunity. This property offers the wearer immunity to one of the following magical conditions. This property is determined randomly upon discovery of the robe. Roll 1d6 to determine the condition immunity upon attunement. This immunity does not protect against conditions inflicted by deific means, epic abilities, legendary items, or artifacts. 1. Charmed, 2. Cursed, 3. Frightened, 4. Paralyzed, 5. Magical Sleep, 6. Petrified.",
	],	
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},	
	dmgres : ["Cold", "Fire", "Lightning"],
	choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
	choicesNotInMenu : true,
	"charmed" : {
		name : "Wool Robes of Charm Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
		],
		savetxt : {
			immune : ["charmed"],
		},
	},
	"cursed" : {
		name : "Wool Robes of Curse Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
		],
		savetxt : {
			immune : ["cursed"],
		},
	},
	"frightened" : {
		name : "Wool Robes of Fright Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
		],
		savetxt : {
			immune : ["frightened"],
		},
	},	
	"paralyzed" : {
		name : "Wool Robes of Paralysis Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
		],
		savetxt : {
			immune : ["paralyzed"],
		},
	},
	"magical sleep" : {
		name : "Wool Robes of Slumber Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
		],
		savetxt : {
			immune : ["magical sleep"],
		},
	},
	"petrified" : {
		name : "Wool Robes of Petrification Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
		],
		savetxt : {
			immune : ["petrified"],
		},
	},			
	addArmor : "Wool Robes",
	armorOptions : {
		regExpSearch : /^(?=.*wool).*$/i,
		name : "Wool Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 13,
		weight : 15,
	},	
};
MagicItemsList["silk robes"] = {
	name : "Silk Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 750 gp",
	weight : 25,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
		"Magical Immunity. This property offers the wearer immunity to one of the following magical conditions. This property is determined randomly upon discovery of the robe. Roll 1d6 to determine the condition immunity upon attunement. This immunity does not protect against conditions inflicted by deific means, epic abilities, legendary items, or artifacts. 1. Charmed, 2. Cursed, 3. Frightened, 4. Paralyzed, 5. Magical Sleep, 6. Petrified.",
	],	
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
	},	
	limfeaname : "Charges",
	usages : 3,
	recovery : "dawn",
	choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
	choicesNotInMenu : true,
	"charmed" : {
		name : "Silk Robes of Charm Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
		],
		savetxt : {
			immune : ["charmed"],
		},
	},
	"cursed" : {
		name : "Silk Robes of Curse Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
		],
		savetxt : {
			immune : ["cursed"],
		},
	},
	"frightened" : {
		name : "Silk Robes of Fright Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
		],
		savetxt : {
			immune : ["frightened"],
		},
	},	
	"paralyzed" : {
		name : "Silk Robes of Paralysis Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
		],
		savetxt : {
			immune : ["paralyzed"],
		},
	},
	"magical sleep" : {
		name : "Silk Robes of Slumber Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
		],
		savetxt : {
			immune : ["magical sleep"],
		},
	},
	"petrified" : {
		name : "Silk Robes of Petrification Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
		],
		savetxt : {
			immune : ["petrified"],
		},
	},			
	addArmor : "Silk Robes",
	armorOptions : {
		regExpSearch : /^(?=.*silk).*$/i,
		name : "Silk Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 13,
		weight : 25,
	},	
};
MagicItemsList["armored robes"] = {
	name : "Armored Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 950 gp",
	weight : 20,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
		"Magical Immunity. This property offers the wearer immunity to one of the following magical conditions. This property is determined randomly upon discovery of the robe. Roll 1d6 to determine the condition immunity upon attunement. This immunity does not protect against conditions inflicted by deific means, epic abilities, legendary items, or artifacts. 1. Charmed, 2. Cursed, 3. Frightened, 4. Paralyzed, 5. Magical Sleep, 6. Petrified.",
	],	
	attunement : true,
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
		immune : ["critical hits"],
	},	
	choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
	choicesNotInMenu : true,
	"charmed" : {
		name : "Armored Robes of Charm Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
		],
		savetxt : {
			immune : ["charmed"],
		},
	},
	"cursed" : {
		name : "Armored Robes of Curse Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
		],
		savetxt : {
			immune : ["cursed"],
		},
	},
	"frightened" : {
		name : "Armored Robes of Fright Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
		],
		savetxt : {
			immune : ["frightened"],
		},
	},	
	"paralyzed" : {
		name : "Armored Robes of Paralysis Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
		],
		savetxt : {
			immune : ["paralyzed"],
		},
	},
	"magical sleep" : {
		name : "Armored Robes of Slumber Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
		],
		savetxt : {
			immune : ["magical sleep"],
		},
	},
	"petrified" : {
		name : "Armored Robes of Petrification Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
		],
		savetxt : {
			immune : ["petrified"],
		},
	},			
	addArmor : "Armored Robes",
	armorOptions : {
		regExpSearch : /^(?=.*armored).*$/i,
		name : "Armored Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 14,
		weight : 20,
	},	
};
MagicItemsList["prismatic robes"] = {
	name : "Prismatic Robes",
	source : [["PBMS", 0]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 1500 gp",
	weight : 20,
	description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
		"Magical Immunity. This property offers the wearer immunity to one of the following magical conditions. This property is determined randomly upon discovery of the robe. Roll 1d6 to determine the condition immunity upon attunement. This immunity does not protect against conditions inflicted by deific means, epic abilities, legendary items, or artifacts. 1. Charmed, 2. Cursed, 3. Frightened, 4. Paralyzed, 5. Magical Sleep, 6. Petrified.",
	],	
	attunement : true,
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type !== "prepare") return 2;
			},
			"While wearing these robes I gain a +2 bonus to the spell attack rolls and saving throw DCs of my spells."
		]
	},
	savetxt : {
		adv_vs : ["saves against spells and magical effects"],
		immune : ["critical hits"],
	},
	choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
	choicesNotInMenu : true,
	"charmed" : {
		name : "Prismatic Robes of Charm Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
		],
		savetxt : {
			immune : ["charmed"],
		},
	},
	"cursed" : {
		name : "Prismatic Robes of Curse Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
		],
		savetxt : {
			immune : ["cursed"],
		},
	},
	"frightened" : {
		name : "Prismatic Robes of Fright Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
		],
		savetxt : {
			immune : ["frightened"],
		},
	},	
	"paralyzed" : {
		name : "Prismatic Robes of Paralysis Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
		],
		savetxt : {
			immune : ["paralyzed"],
		},
	},
	"magical sleep" : {
		name : "Prismatic Robes of Slumber Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
		],
		savetxt : {
			immune : ["magical sleep"],
		},
	},
	"petrified" : {
		name : "Prismatic Robes of Petrification Immunity",
		description : [
		"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
		"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
		],
		savetxt : {
			immune : ["petrified"],
		},
	},			
	addArmor : "Prismatic Robes",
	armorOptions : {
		regExpSearch : /^(?=.*prismatic).*$/i,
		name : "Prismatic Robes",
		source : [["PBMS", 0]],
		type : "light",
		ac : 14,
		weight : 20,
	},	
};	
MagicItemsList["talisman"] = {
	name : "Talisman",
	source : [["PBMS", 0]],
	type : "wonderous item",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 1,
	description : "",
	attunement : true,
	choices : ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
	choicesNotInMenu : true,
	"acid" : {
		name : "Talisman of Acid Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to acid damage.",
		dmgres : ["Acid"]
	},
	"cold" : {
		name : "Talisman of Cold Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to cold damage.",
		dmgres : ["Cold"]
	},
	"fire" : {
		name : "Talisman of Fire Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to fire damage.",
		dmgres : ["Fire"]
	},
	"force" : {
		name : "Talisman of Force Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to force damage.",
		dmgres : ["Force"]
	},
	"lightning" : {
		name : "Talisman of Lightning Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to lightning damage.",
		dmgres : ["Lightning"]
	},
	"necrotic" : {
		name : "Talisman of Necrotic Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to necrotic damage.",
		dmgres : ["Necrotic"]
	},
	"poison" : {
		name : "Talisman of Poison Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to poison damage.",
		dmgres : ["Poison"]
	},
	"psychic" : {
		name : "Talisman of Psychic Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to psychic damage.",
		dmgres : ["Psychic"]
	},
	"radiant" : {
		name : "Talisman of Radiant Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to radiant damage.",
		dmgres : ["Radiant"]
	},
	"thunder" : {
		name : "Talisman of Thunder Resistance",
		description : "While I'm wielding this talisman and I'm attuned to it, I have resistance to thunder damage.",
		dmgres : ["Thunder"]
	}
};
MagicItemsList["potion of magic"] = {
	name : "Potion of Magic",
	source : [["PBMS", 0]],
	type : "potion",
	description : "Once as an action, I can drink this potion or administer it to another to heal a number of spell slots depending on the type of potion. This potion's purple liquid shimmers when agitated.",
	descriptionFull : "You regain spell slots when you drink this potion. The number of spell slots depends on the potion's rarity, as shown in the Potions of Magic table. Whatever its potency, the potion's purpel liquid shimmers when agitated.",
	weight : 0.5,
	allowDuplicates : true,
	choices : ["Magic (2d4+2, uncommon)", "Greater Magic (4d4+4, rare)", "Superior Magic (8d4+8, very rare)", "Supreme Magic (10d4+20, legendary)"],
	"magic (2d4+2, uncommon)" : {
		name : "Potion of Magic",
		rarity : "uncommon",
		magicItemTable : "A",
		description : "Once as an action, I can drink this potion or administer it to another to regain 2d4+2 spell slots. This potion's purpel liquid shimmers when agitated.",
		descriptionFull : "You regain 2d4+2 spell slots when you drink this potion. The potion's purpel liquid shimmers when agitated.",
		extraTooltip : "Can be bought for 100 gp (also in AL)"
	},
	"greater magic (4d4+4, rare)" : {
		name : "Potion of Greater Magic",
		sortname : "Potion of Magic, Greater",
		rarity : "rare",
		magicItemTable : ["A", "B"],
		description : "Once as an action, I can drink this potion or administer it to another to regain 4d4+4 spell slots. This potion's purpel liquid shimmers when agitated.",
		descriptionFull : "You regain 4d4+4 spell slots when you drink this potion. The potion's purple liquid shimmers when agitated.",
		extraTooltip : "AL: can always be bought for 500 gp"
	},
	"superior magic (8d4+8, very rare)" : {
		name : "Potion of Superior Magic",
		sortname : "Potion of Magic, Superior",
		rarity : "very rare",
		magicItemTable : "C",
		description : "Once as an action, I can drink this potion or administer it to another to regain 8d4+8 spell slots. This potion's purple liquid shimmers when agitated.",
		descriptionFull : "You regain 8d4+8 spell slots when you drink this potion. The potion's purple liquid shimmers when agitated.",
		extraTooltip : "AL: can always be bought for 5000 gp"
	},
	"supreme magic (10d4+20, legendary)" : {
		name : "Potion of Supreme Magic",
		sortname : "Potion of Magic, Supreme",
		rarity : "legendary",
		magicItemTable : ["D", "E"],
		description : "Once as an action, I can drink this potion or administer it to another to regain 10d4+20 spell slots. This potion's purple liquid shimmers when agitated.",
		descriptionFull : "You regain 10d4+20 spell slots when you drink this potion. The potion's purple liquid shimmers when agitated.",
		extraTooltip : "AL: can always be bought for 50000 gp"
	},
};
MagicItemsList["crystal"] = {
	name : "Crystal",
	sortname : "Crystal",
	source : [["PBMS", 0]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 1,
	description : [
		"This Arcane Focus Grants an additional 1d4 to spell damage.",
		"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.",
	],	
};
MagicItemsList["orb"] = {
	name : "Orb",
	sortname : "Orb",
	source : [["PBMS", 0]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 20 gp",
	weight : 3,
	description : [
		"This Arcane Focus Grants an additional 1d6 to spell damage.",
		"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.",
	],	
};
MagicItemsList["rod"] = {
	name : "Rod",
	sortname : "Rod",
	source : [["PBMS", 0]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 2,
	description : [
		"This Arcane Focus Grants an additional 1d6 to spell damage.",
		"Weapon. You can use a spell focu6s with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.",
	],	
	weaponsAdd : ["Rod"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /rod/i,
		name : "Rod",
		
		source : [["PBMS", 0]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};
MagicItemsList["gnarled staff"] = {
	name : "Gnarled Staff",
	sortname : "Gnarled Staff",
	source : [["PBMS", 0]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 25 gp",
	weight : 4,
	description : [
		"This Arcane Focus Grants an additional 1d8 to spell damage.",
		"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
		"Favored. Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.",
	],
	choices : ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "revocation", "transmutation"],
	choicesNotInMenu : true,
	"abjuration" : {
		name : "Gnarled Staff of the Abjurer",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Abjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"conjuration" : {
		name : "Gnarled Staff of the Conjurer",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Conjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"divination" : {
		name : "Gnarled Staff of the Diviner",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Divination school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"enchantment" : {
		name : "Gnarled Staff of the Enchanter",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Enchantment school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"evocation" : {
		name : "Gnarled Staff of the Evoker",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Evocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"illusion" : {
		name : "Gnarled Staff of the Illusionist",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Illusion school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"necromancy" : {
		name : "Gnarled Staff of the Necromancer",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Necromancy school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"revocation" : {
		name : "Gnarled Staff of the Revoker",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Revocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"transmutation" : {
		name : "Gnarled Staff of the Transmuter",
		description : [
			"This Arcane Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Transmutation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	weaponsAdd : ["Gnarled Staff"],
	weaponOptions : {
		baseWeapon : "greatclub",
		regExpSearch : /gnarled/i,
		name : "Gnarled Staff",
		
		source : [["PBMS", 0]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};
MagicItemsList["wand"] = {
	name : "Wand",
	sortname : "Wand",
	source : [["PBMS", 0]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 1,
	description : [
		"This Arcane Focus Grants an additional 1d4 to spell damage.",
		"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
		"Favored. Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.",
	],
	choices : ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "revocation", "transmutation"],
	choicesNotInMenu : true,
	"abjuration" : {
		name : "Wand of the Abjurer",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Abjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"conjuration" : {
		name : "Wand of the Conjurer",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Conjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"divination" : {
		name : "Wand of the Diviner",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Divination school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"enchantment" : {
		name : "Wand of the Enchanter",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Enchantment school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"evocation" : {
		name : "Wand of the Evoker",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Evocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"illusion" : {
		name : "Wand of the Illusionist",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Illusion school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"necromancy" : {
		name : "Wand of the Necromancer",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Necromancy school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"revocation" : {
		name : "Wand of the Revoker",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Revocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"transmutation" : {
		name : "Wand of the Transmuter",
		description : [
			"This Arcane Focus Grants an additional 1d4 to spell damage.",
			"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
			"Favored. When you cast a spell from the Transmutation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
};
MagicItemsList["amulet"] = {
	name : "Amulet",
	sortname : "Amulet",
	source : [["PBMS", 0]],
	type : "focus (divine)",
	rarity : "common",
	extraTooltip : "can be purchased for 5 gp",
	weight : 1,
	description : [
		"This Divine Focus Grants an additional 1d4 to spell damage.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."		,
		"Favored. Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.",
	],
	choices : ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "revocation", "transmutation"],
	choicesNotInMenu : true,
	"abjuration" : {
		name : "Amulet of the Abjurer",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Abjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"conjuration" : {
		name : "Amulet of the Conjurer",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Conjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"divination" : {
		name : "Amulet of the Diviner",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Divination school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"enchantment" : {
		name : "Amulet of the Enchanter",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Enchantment school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"evocation" : {
		name : "Amulet of the Evoker",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Evocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"illusion" : {
		name : "Amulet of the Illusionist",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Illusion school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"necromancy" : {
		name : "Amulet of the Necromancer",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Necromancy school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"revocation" : {
		name : "Amulet of the Revoker",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Revocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"transmutation" : {
		name : "Amulet of the Transmuter",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Transmutation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
};
MagicItemsList["crystal sword"] = {
	name : "Crystal Sword",
	sortname : "Crystal, Sword",
	source : [["PBMS", 0]],
	type : "focus (divine)",
	rarity : "common",
	extraTooltip : "can be purchased for 50 gp",
	weight : 3,
	description : [
		"This Divine Focus Grants an additional 1d6 to spell damage.",
		"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.",
	],	
	weaponsAdd : ["Crystal Sword"],
	weaponOptions : {
		baseWeapon : "scimitar",
		regExpSearch : /crystal, sword/i,
		name : "Crystal Sword",
		
		source : [["PBMS", 0]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};
MagicItemsList["scepter"] = {
	name : "Scepter",
	sortname : "Scepter",
	source : [["PBMS", 0]],
	type : "focus (divine)",
	rarity : "common",
	extraTooltip : "can be purchased for 15 gp",
	weight : 4,
	description : [
		"This Divine Focus Grants an additional 1d8 to spell damage.",
		"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
		"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
	],	
	weaponsAdd : ["Scepter"],
	weaponOptions : {
		baseWeapon : "greatclub",
		regExpSearch : /scepter/i,
		name : "Scepter",
		
		source : [["PBMS", 0]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};
MagicItemsList["reliquiary"] = {
	name : "Reliquiary",
	sortname : "Reliquiary",
	source : [["PBMS", 0]],
	type : "focus (divine)",
	rarity : "common",
	extraTooltip : "can be purchased for 5 gp",
	weight : 2,
	description : [
		"This Divine Focus Grants an additional 1d4 to spell damage.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.",
		"Favored. Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.",
	],
	choices : ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "revocation", "transmutation"],
	choicesNotInMenu : true,
	"abjuration" : {
		name : "Reliquiary of the Abjurer",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Abjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"conjuration" : {
		name : "Reliquiary of the Conjurer",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Conjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"divination" : {
		name : "Reliquiary of the Diviner",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Divination school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"enchantment" : {
		name : "Reliquiary of the Enchanter",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Enchantment school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"evocation" : {
		name : "Reliquiary of the Evoker",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Evocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"illusion" : {
		name : "Reliquiary of the Illusionist",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Illusion school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"necromancy" : {
		name : "Reliquiary of the Necromancer",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Necromancy school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"revocation" : {
		name : "Reliquiary of the Revoker",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Revocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"transmutation" : {
		name : "Reliquiary of the Transmuter",
		description : [
			"This Divine Focus Grants an additional 1d4 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Transmutation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
};
MagicItemsList["boline"] = {
	name : "Boline",
	sortname : "Boline",
	source : [["PBMS", 0]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 5 gp",
	weight : 4,
	description : [
		"This Primal Focus Grants an additional 1d4 to spell damage.",
		"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.",
	],	
	weaponsAdd : ["Boline"],
	weaponOptions : {
		baseWeapon : "sickle",
		regExpSearch : /boline/i,
		name : "Boline",
		source : [["PBMS", 0]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};
MagicItemsList["wooden staff"] = {
	name : "Wooden Staff",
	sortname : "Wooden Staff",
	source : [["PBMS", 0]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 25 gp",
	weight : 4,
	description : [
		"This Primal Focus Grants an additional 1d8 to spell damage.",
		"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
		"Favored. Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.",
	],
	choices : ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "revocation", "transmutation"],
	choicesNotInMenu : true,
	"abjuration" : {
		name : "Wooden Staff of the Abjurer",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Abjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"conjuration" : {
		name : "Wooden Staff of the Conjurer",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Conjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"divination" : {
		name : "Wooden Staff of the Diviner",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Divination school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"enchantment" : {
		name : "Wooden Staff of the Enchanter",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Enchantment school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"evocation" : {
		name : "Wooden Staff of the Evoker",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Evocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"illusion" : {
		name : "Wooden Staff of the Illusionist",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Illusion school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"necromancy" : {
		name : "Wooden Staff of the Necromancer",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Necromancy school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"revocation" : {
		name : "Wooden Staff of the Revoker",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Revocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"transmutation" : {
		name : "Wooden Staff of the Transmuter",
		description : [
			"This Primal Focus Grants an additional 1d8 to spell damage.",
			"Weapon. You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.",
			"Favored. When you cast a spell from the Transmutation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	weaponsAdd : ["Wooden Staff"],
	weaponOptions : {
		baseWeapon : "greatclub",
		regExpSearch : /wooden/i,
		name : "Wooden Staff",
		source : [["PBMS", 0]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0],
		
	},
};
MagicItemsList["druid's egg"] = {
	name : "Druid's Egg",
	sortname : "Druid, Egg",
	source : [["PBMS", 0]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 2,
	description : [
		"This Primal Focus Grants an additional 1d6 to spell damage.",
		"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
		"Favored. Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.",
	],
		choices : ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "revocation", "transmutation"],
	choicesNotInMenu : true,
	"abjuration" : {
		name : "Druid's Egg of the Abjurer",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Abjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"conjuration" : {
		name : "Druid's Egg of the Conjurer",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Conjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"divination" : {
		name : "Druid's Egg of the Diviner",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Divination school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"enchantment" : {
		name : "Druid's Egg of the Enchanter",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Enchantment school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"evocation" : {
		name : "Druid's Egg of the Evoker",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Evocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"illusion" : {
		name : "Druid's Egg of the Illusionist",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Illusion school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"necromancy" : {
		name : "Druid's Egg of the Necromancer",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Necromancy school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"revocation" : {
		name : "Druid's Egg of the Revoker",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Revocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"transmutation" : {
		name : "Druid's Egg of the Transmuter",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Expansion. When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.",
			"Favored. When you cast a spell from the Transmutation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
};
MagicItemsList["totem"] = {
	name : "Totem",
	sortname : "Totem",
	source : [["PBMS", 0]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 1 gp",
	weight : 2,
	description : [
		"This Primal Focus Grants an additional 1d6 to spell damage.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.",
		"Favored. Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.",
	],
		choices : ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "revocation", "transmutation"],
	choicesNotInMenu : true,
	"abjuration" : {
		name : "Totem of the Abjurer",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Abjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"conjuration" : {
		name : "Totem of the Conjurer",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Conjuration school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},	
	"divination" : {
		name : "Totem of the Diviner",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Divination school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"enchantment" : {
		name : "Totem of the Enchanter",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Enchantment school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"evocation" : {
		name : "Totem of the Evoker",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Evocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"illusion" : {
		name : "Totem of the Illusionist",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Illusion school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"necromancy" : {
		name : "Totem of the Necromancer",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Necromancy school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"revocation" : {
		name : "Totem of the Revoker",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Revocation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
	"transmutation" : {
		name : "Totem of the Transmuter",
		description : [
			"This Primal Focus Grants an additional 1d6 to spell damage.",
			"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage."	,
			"Favored. When you cast a spell from the Transmutation school of magic you have advantage on spell attack rolls and targets have disadvantage on saving throws against those spells.",
		],
	},
};
MagicItemsList["mistletoe"] = {
	name : "Mistletoe",
	sortname : "Mistletoe",
	source : [["PBMS", 0]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 1 gp",
	description : [
		"This Primal Focus Grants an additional 1d4 to spell damage.",
		"Extension. You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.",
		"Power. You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.",
	],	
};
//Customization Options, New Feats
FeatsList["meddle magic adept"] = {
	name : "Meddle Magic Adept",
	source : [["PBMS", 0]], 
	descriptionFull : "You've learned how to exert your will on your spells to alter how they function:\n \u2022 You learn two Meddle Magic options of your choice from the witch class. You can use only one Meddle Magic option on a spell when you cast it, unless the option says otherwise. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace one of these Meddle Magic options with another one from the witch class.\n \u2022 You gain 2 meddle points to spend on Meddle Magic (these points are added to any meddle points you have from another source but can be used only on Meddle Magic). You regain all spent meddle points when you finish a long rest.",
	description: 'I learn two Meddle Magic options from the witch class (2nd page "Choose Feature" button). I can use only one option on a spell unless it says otherwise. I gain 2 meddle points, which I can only use for Meddle Magic. I regain all expended meddle points when I finish a long rest. I can change one ' + (typePF ? '' : 'Meddle Magic option ') + 'whenever I gain an ' + (typePF ? 'ASI' : 'Ability Score Improvement') + '.',
	bonusClassExtrachoices : [{
		"class" : "witch",
		feature : "meddle magic",
		bonus : 2
	}],
	extraLimitedFeatures : [{
		name : "Meddle Magic",
		usages : 2,
		recovery : "long rest",
		addToExisting : true
	}],
	prerequisite : "Spellcasting or Pact Magic feature",
	prereqeval : function (v) { return v.isSpellcastingClass; }
};
//New School of Magic
spellSchoolList["Revoc"] = "Revocation";
SpellsList["counterspell"].school = "Revoc",
SpellsList["dispel magic"].school = "Revoc",
SpellsList["remove curse"].school = "Revoc",
SpellsList["antimagic field"].school = "Revoc",
//New Spells
//Cantrips
SpellsList["alchemist fire"] = {
	name : "Alchemist Fire",
	source : [["PBMS", 0]],
	classes : ["artificer", "wizard"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "Alchemist's Supplies",
	duration : "Instantaneous",
	save : "Dex",
	description : "30 ft ranged 1 crea `CD`d10 Fire dmg + Dex save or 1d4 Fire dmg start next turn.",
	descriptionFull : "You cast a magical vial that explodes upon impact and exposure to the air that bursts into a sticky flaming substace. make a ranged spell attack against a target. On a hit the vial explodes with a mote of fire and deals 1d10 fire damge. A flammable object hit ignites if it isn't being worn or carried. The target must make a DC dexterity save throw, on a fialure the atrget takes an additional 1d4 fire damage at the start of its next turn, the spell's damage increases by 1d10 at 5th level, 11th level, and 17th level.",
	descriptionCantripDie : "1 creature range spell attack `CD`d10 Fire dmg Dex Save or 1d4 fire start next turn.",
};
SpellsList["usurp"] = {
	name : "Usurp",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "warlock", "witch", "wizard"],
	level : 0,
	school : "Revoc",
	time : "1 a",
	range : "30 ft",
	components: "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 spellcaster w/i range Con save on fail DC 10 + SL check to cast spellcaster spell using spellcaster spell slot.",
	descriptionFull : "When you cast this spell you must target one spellcaster other than yourself within range. That spellcaster must succeed a Constitution saving throw or be siphoned of their magical power. On a failed save, you can choose one spell the caster knows of 1st level or higher, you must be capable of casting the level of spell you choose. When you do so you must make an ability check using your spellcasting ability. The DC is 10 + the spells level. On a successful check you cast that spell using the targets spell slot. If the target succeeds the effect does nothing. If you fail the ability check you expend a spell slot equal to the level of the spell usurped and the effect does nothing.",
};
//1st-Level Spells
SpellsList["erase"] = {
	name : "Erase",
	source : [["PBMS", 0]],
	classes : ["artificer", "bard", "fool", "witch", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "erase non-magical writing, erase magic writing DC 10+spell level (Int)Arcana check",
	descriptionFull : "You magically erase writings either magical or non-magical from a surface. When you cast this spell you can erase a single scroll, two pages of parchment, an inscribed rune, or an arcane seal. This spell has no effect on illusory script. Non magical writings are automatically erased when this spell is cast. If the writing is magical the caster must make an Intelligence (Arcana) skill check. The DC is 10 + the level of magic inscribed.",
};
SpellsList["merlin"] = {
	name : "Merlin",
	source : [["PBMS", 0]],
	classes : ["artificer", "bard", "witch", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components: "V,S,M",
	compMaterial : "Parchment and Ink",
	duration: "Instantaneous",
	description : "Touch letter of 250 words or less per side, becomes bird message fly to recipient at speed of 12 MPH",
	descriptionFull : "You imbue magic upon a sheet of parchment, this message can be up to 250 words per side. When you cast this spell you must draw the magical bird symbol of a merlin and address the message with a to and from. Once this message is complete it will transform into a paper bird and will fly to the adressee as long as they are on the same plane of existence. This merlin and the message it carries cannot be destoryed by water or fire. In addition this merlin will fly 12 miles per hour until it reaches its destination.",
};
SpellsList["pattern weave"] = {
	name : "Pattern Weave",
	source : [["PBMS", 0]],
	classes : ["bard", "sorcerer", "witch", "wizard"],
	level : 1,
	school : "Div",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A Crystal Lens",
	duration : "Conc, 10 min",
	description : "magic investigation of chaotic or destroyed environments",
	descriptionFull : "You magically interpret chaos to uncover the reasoning within apparent chaos. When you cast this spell you can see things such as pottery shards reform into a whole pot, shreaded paper reform into a page, scattered parts to a machine reassemble, and so on. For the duration, you can make sense of the chaos and acquire information regarding something in its previous form by investigating. The DM reveals what and how something once was before the chaos or destruction occured. You only acquire information about a space within 30 ft of you.",
};
SpellsList["revoke"] = {
	name : "Revoke",
	source : [["PBMS", 0]],
	classes : ["bard", "witch", "wizard"],
	level : 1,
	school : "Revoc",
	time : "1 a",
	range : "60 ft",
	components: "V,S,M",
	compMaterial : "A golden shell worth at least 50 gp",
	duration : "24 h",
	save : "Wis",
	description : "1 crea that can cast cantrips w/i range Wis save, or no cantrips while w/i range of you for 24 hours.",
	descriptionFull : "You can target one creature that has the capability to cast cantrips within 60 feet of you. That caster must make a Wisdom saving throw, on a failed save the target is unable to cast cantrips within 60 feet of you for the next 24 hours. On a success the target is immune to the effects of this spell for the next 24 hours.",
};
SpellsList["taunt"] = {
	name : "Taunt",
	source : [["PBMS", 0]],
	classes : ["bard", "fool", "paladin", "witch", "wizard"],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Ichor slug hurled at the target",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea w/i range Wis ST or must attack caster w/ non-mag melee weapon attack/unarmed strike if no weapon, if cant reach caster spell ends.",
	descriptionFull : "You attamp to taunt a creature you can see within range. That creature must make a Wisdom saving throw. On a failed save the creature rushes forward in fury. For the duration, the affected creature must attack the caster with melee non-magical weapon attacks. If the creature does not have a weapon or antural weapons they engage in unarmed strikes. If the caster is inaccessible due to a wall, blocade, or magical barrier the spell ends.",
};
//2nd-Level Spells
SpellsList["chaos shield"] = {
	name : "Chaos Shield",
	source : [["PBMS", 0]],
	classes : ["sorcerer"],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "self",
	components : "V,S",
	duration : "",
	description : "Barrier negates wild magic surges",
	descriptionFull : "When you cas this spell you create a magical barrier that protects you from the chaos of wild magic surges. This effect only protects the caster from wild magic produced as a result of the casters own spells and magical effects. For example if the caster is required to roll on the wild magic table for any reason as a result of casting a spell the following effect is negated. Once an effect is negated the shield is dispelled and the spell ends.",
};
SpellsList["disruption"] = {
	name : "Disruption",
	source : [["PBMS", 0]],
	classes : ["bard", "sorcerer", "warlock", "witch", "wizard"],
	level : 2,
	school : "Revoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Target Concentation Spell of 2nd level +1/SL or lower Within 60 ft. Con (Concentation) check or lose concentration.",
	descriptionMetric :"Target Concentation Spell of 2nd level +1/SL or lower Within 18 m. Con (Concentation) check or lose concentration.",
	descriptionFull : "You can target a concentration spell that is active within 60 feet. If the spell is of 2nd level or lower you cause the caster to make a Constitution (Concentration) check. On a success this spell does nothing, on a failure the target loses concentration.",
	descriptionMetricFull : "You can target a concentration spell that is active within 18 meters. If the spell is of 2nd level or lower you cause the caster to make a Constitution (Concentration) check. On a success this spell does nothing, on a failure the target loses concentration.",
};
SpellsList["moon rune"] = {
	name : "Moon Rune",
	source : [["PBMS", 0]],
	classes : ["druid", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "touch",
	components : "V,S,M",
	compMaterial : "Powdered Mithril worth at least 100 gp, which the spell consumes",
	duration : "till dispelled",
	description : "inscribe symbol only visible under certain set conditions",
	descriptionFull : "When you cast this spell you magically inscribe an invisible symbol or mark on a surface. This mark remains invisible until the conditionsspecified at the time of casting are met. For example, you could specify that the mark is only visible under the light of the moon, when viewed by an elf, or at sunrise. The spell cannot be used to inscribe master runes, teleportation circles, or seals created by other spells.",
};
SpellsList["protection from cantrips"] = {
	name : "Protection from Cantrips",
	source : [["PBMS", 0]],
	classes : ["cleric", "paladin", "wizard"],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "touch",
	components : "V,S,M",
	compMaterial : "A Glow-Worm",
	duration : "Conc, 1 min",
	description : "touch 1 willing crea, immune to cantrips",
	descriptionFull : "For the duration, the willing creature you touch has immuniy to the effects and damage created by a cantrip",
};
SpellsList["swiftness"] = {
	name : "Swiftness",
	source : [["PBMS", 0]],
	classes : ["bard", "sorcerer", "wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "self",
	components : "V,S",
	duration : "Instantaneous",
	description : "you gain an extra action to be used within 24 hours",
	descriptionFull : "You manipulate time just enough to grant you an extra action. This action surge remains until used, and must be used within the next 24 hours. This magic does not stack if cast again but instead resets the poin measured for the next 24 hours.",
};
//3rd-Level Spells
SpellsList["augmentation"] = {
	name : "Augmentation",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "witch", "wizard"],
	level : 3,
	school : "Trans",
	time : "1 bns",
	range : "self",
	components : "V,S,M",
	compMaterial : "Bronze Crayfish",
	duration : "Instantaneous",
	description : "you can cast damaging spell as an action and add your spell mod to each die rolled.",
	descriptionFull : "When you cast this augmentation spell you can cast another spell as an action. This spell augments the following spell you cast. For each die rolled for the following spell you can add your spellcasting modifier to the total. For example the spell burning hands which requires you to roll 3d6 you can add your spellcasting modifier three times to the total. This spell only effects spells of 3rd level or lower. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher you can augment spells equal to or less than the spell slot used. ",
};
SpellsList["ambrose's nebula"] = {
	name : "Ambrose's Nebula",
	source : [["PBMS", 0]],
	classes : ["warlock"],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a star shard",
	duration : "Instantaneous",
	save : "Dex",
	description : "a bright streak flashes to a point within range, each crea w/i a 30 ft rad. dex save, on fail 4d8 +1d8/SL choice (Rad, Force, Psy, Nec) dmg or half as much on succ.",
	descriptionFull : "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with multi-colored force into an spacial explosion. Each creature in a 30-foot radius must make a Dexterity saving throw aside from you. A target takes 4d8 damage on one of the following damage types of choice (radiant, force, psychic, necrotic) on a failed save, or half as much damage on a successful one. This nebula spreads around corners. Each creature does not have to be affected by the same damage type of your choosing. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot above 3rd.",
};
SpellsList["spell turning"] = {
	name : "Spell Turning",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "warlock", "witch", "wizard"],
	level : 3,
	school : "Revoc",
	time : "1 rea",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Target 1 spell w/i range, if 3rd-level or lower it is turned back on caster, if 4th-level or higher DC 10 + Spell Level spellcasting ability check to turn on caster.",
	descriptionFull : "You can target a spell cast by another creature within 120ft. If the creature is casting a spell of 3rd level or lower the spell is turned back on the caster. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equal 10 + the spells level. On a success the spell is turned back on the caster. ",
};
SpellsList["teleport object"] = {
	name : "Teleport Object",
	source : [["PBMS", 0]],
	classes : ["artificer", "bard", "witch", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "touch",
	components : "V,S,M",
	compMaterial : "Rare chalks and inks infused with 50gp Powdered Gems, which the spell consumes",
	duration : "Instantaneous",
	description : "teleport object to permanent teleportation circle.",
	descriptionFull : "This spell teleports an object no larger than a 1ft cube of your choice that you scribe with the seal of a permanent teleportation circle. This object instantly transfers to that location.",
};
SpellsList["viktor's hoodwink"] = {
	name : "Viktor's Hoodwink",
	source : [["PBMS", 0]],
	classes : ["artificer", "bard"],
	level : 3,
	school : "Illus",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	description : "you make a weapon atk as part of this spell's casting 3 illusory copies of yourself appear giving you adv on the atk, the each illusion deals your weapon dmg to the target as psychic dmg",
	descriptionFull : "You make a weapon attack during the casting of this spell. When you do so three illusions of yourself appear and make a weapon attack toward the same target. You gain advanatge on your attack rolls this turn toward your chosen target. On a hit, the target suffers the weapon attacks normal effects, and is also hit by each illusion dealing the same weapon damage except the damage type is psychic.",
};
//4th-Level Spells
SpellsList["arcane eruption"] = {
	name : "Arcane Eruption",
	source : [["PBMS", 0]],
	classes : ["witch", "sorcerer"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "you create a 20 ft rad. sphere of churning energy choose 1 dmg type, (Acid, Cold, Fire, Lightn., Pois., Psy., Thund.) Con save or 6d6+1/SL dmg of chosen type, choose one of the d6 results to determine condition effect. (1. Incapacitated, 2. Blind, 3. Fright, 4. Pois., 5. Charm, 6. Deaf)",
	descriptionFull : "Churning magical energy explodes in a 20 ft radius sphere centered on a point you choose within range. When you cast the spell, you select the type of damge dealt by the explosion: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder. Each creature in the sphere must make a Constitution saving throw. O a failed save, a creature takes 6d6 damage of the chosen type. On a successful save a creature takes half as much damage. Choose one of those d6s the number rolled on that die determines a condition that's applied to each creature that failed the save, as shown below. A creature has the condition until the end of your next turn. d6 Additional Effects. 1. Incapacitated, 2. Blinded, 3. Frightened, 4. Poisoned, 5. Charmed, 6. Deafened. At Higher Levels. When you cast this spell using a spell slot of 5th level or higher,the damge increases by 1d6 for each slot level above 4th.",
};
SpellsList["arcane retaliation"] = {
	name : "Arcane Retaliation",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "warlock", "witch"],
	level : 4,
	school : "Revoc",
	time : "1 rea",
	range : "120 ft",
	rangeMetric : "36 m",
	components : "V,S",
	duration : "Instantaneous",
	description : "When hit by spell Rea. learn spell to cast once as act. auto success + bonus damage = damage taken by you.",
	descriptionFull : "When a creature targets you with a spell and successfully hits you, you can use your reaction to temporarily learn that spell and cast it once as an action on your next turn targeting the original caster. The spell automatically succeeds and deals additional damage equal to the damage you received from that spell.",
};
SpellsList["brood of hadar"] = {
	name : "Brood of Hadar",
	source : [["PBMS", 0]],
	classes : ["warlock"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "(see full description)",
	descriptionFull : "you call upon the power of Hadar, the Dark Hunger, when you do Choose one creature you can see within range, that creature must make a Constitution saving throw, on a failure the target takes 6d10 Necrotic damage and falls prone holding its head and screaming, on a success the target takes half damage and does not fall prone, if this spell reduces the target to zero hit points you may choose another target within 15 feet of the original the new target must make a Constitution saving throw or take 4d10 Necrotic damage as flying fanged shadows pour from the fallen target's eyes, mouth, and ears and descend on the new target.",
};
SpellsList["detect scrying"] = {
	name : "Detect Scrying",
	source : [["PBMS", 0]],
	classes : ["bard", "witch", "wizard"],
	level : 4,
	school : "Div",
	time : "1 a",
	range : "Same Plane",
	components : "V,S,M",
	compMaterial : "Preserved Angel's Trumpet Flower",
	duration : "Concentration, up to 1 hr",
	description : "see full description",
	descriptionFull : "When you cast this spell you become aware of any attempt made by another caster using a divination spell that seeks to observe you or acquire any information about you that is on the same plane of existence as you. You immediately know the casters location, the spell used, and if the caster is friendly toward you.",
};
SpellsList["shout"] = {
	name : "Shout",
	source : [["PBMS", 0]],
	classes : ["bard", "fool", "paladin", "witch", "wizard"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "600 ft",
	components : "V,S,M",
	compMaterial : "A drop of honey and lemon",
	duration : "1 min",
	save : "Con",
	description : "ea crea w/i 30 ft Con ST or deaf for 1 minute",
	descriptionFull : "When you cast this spell your voice is magnified and can be audibly heard by every creature within 600ft of you. Creatures within 30ft of you must make a Constitution save throw. On a failure the creature is deafened for 1 minute.",
};
SpellsList["synchronicity"] = {
	name : "Synchronicity",
	source : [["PBMS", 0]],
	classes : ["bard", "sorcerer", "warlock", "witch", "wizard"],
	level : 4,
	school : "Evoc",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "Concentration, up to 1 hour",
	description : "See full description",
	descriptionFull : "The creature you touch feels reality subtly shifted to its favor while this spell is in effect. The target isn't inconvenienced by mundane delays of any sort. Passages are always open, there's always a waiting boat or carriage around the bend. The target can run at full speed through dense crowds, and attacks of opportunity provoked by the target's movement are made with disadvantage. Synchronicity grants advantage to Dexterity (Stealth) checks, since the target always finds a handy piece of cover available. Additionally, the target has advantage on all ability checks made to ride a mount. In the event that two or more creatures under the effect of synchronicity are attempting to avoid being inconvenienced by each other, the creatures engage in a contest of Charisma each time the effects of the spells would oppose each other.",
};
//5th-Level Spells
SpellsList["contractual conjuration"] = {
	name : "Contractual Conjuration",
	source : [["PBMS", 0]],
	classes : ["warlock", "witch", "wizard"],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Creature Trinket",
	duration : "1 h",
	description : "you create a magical connection between you and a creature friendly to you. you summon a creature that you have created a bond with",
	descriptionFull : "You create a magical connection between you and another creature within range. If the targeted creature is willing and able they offer you a trinket of their making as a focus for this spell. This trinket is the source of your contract with the creature and allows you to summon them to a space within 60 feet of you as an action. After the initial cating of this spell, any time you use this spell and the said trinket you can summon this creature from where ever it is to a space within range. While summoned the creature is friendly to you and your companions, and obeys every verbal command you give it. If you don’t issue a command the creature defends itself from hostile creatures. This creature remains until 1 hour has passed, you dismiss the creature as a bonus action on your turn, or the creature drops to 0 hit points causing the creature to return from where they came from unharmed and the trinket breaks. ",
};
SpellsList["duplicate"] = {
	name : "Duplicate",
	source : [["PBMS", 0]],
	classes : ["witch", "wizard"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "touch",
	components : "V,S,M",
	compMaterial : "an item of equal size and rarity and a pinch of coal dust",
	duration : "1 h",
	description : "create an identical duplicate of any non-living object for 1 hour, +1 h/SL above 5th",
	descriptionFull : "This spell transforms an object into an exact copy of any single item that the caster touches. The item transformed must be of the same size and rarity of the object being duplicated. This spell has no effect on living creatures, including undead, but not constructs. The duplicated items is identical to the original in every way. The duplicated item lasts for 1 hour for each level of slot expended above 5th level. ",
};
SpellsList["magic cancel"] = {
	name : "Magic Cancel",
	source : [["PBMS", 0]],
	classes : ["witch", "wizard"],
	level : 5,
	school : "Revoc",
	time : ["1 a"],
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "one spell being concentrated on w/i range of 5th/SL or lower is ended, and Wis save or cant cast spell again for 1 minute.",
	descriptionFull : "You can choose one spell of 5th level or lower within range that is being maintained by concentration. That spell and the caster's concentration automatically ends. After the spell ends, the caster must make a Wisdom saving throw, on a failed save the target is unable to cast that spell again for the next minute. At higher levels. When you cast this spell using a spell slot of 6th level or higher you can affect spells of equal level or lower of the spell slot you used.",
};
SpellsList["mind fog"] = {
	name : "Mind Fog",
	source : [["PBMS", 0]],
	classes : ["bard", "fool", "witch", "wizard"],
	level : 5,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 h",
	save : "Int",
	description : "1 crea w/i range, Int ST fail disadv on Int ST and Ability checks, auto fail ench/illu spells even if imm to charm/fright/has true sight",
	descriptionFull : "A magical mind fog falls upon one creature you choose within range. That creature must make an intelligence save throw. On a failure the target has disadvantage on intelligence saving throws and ability checks for the duration. Any enchantment or illusion spell cast that effects this target after this spell is cast automatically succeeds even if they have immunity to charmed or frightened conditions, as well as targets with truesight.",
};
SpellsList["pandora's gallivant"] = {
	name : "Pandora's Gallivant",
	source : [["PBMS", 0]],
	classes : ["witch"],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "300 ft",
	components : "V,S,M",
	compMaterial : "Sulfur",
	duration : "Instantaneous",
	description : "teleport to an unoccupied space w/i 300 ft, crea. w/i 30 ft of star/end point of teleportation have disadv on attack rolls and concentration checks for 1 min.",
	descriptionFull : "You are surrounded by colorful sparks and pyrotechnics, you teleport up to 300ft to an unoccupied space you can see. Using this spell does not provoke an opportunity attack, in addition, where ever you start and end in teleportation results in enemy creatures within 30ft of either point having disadvantage on attack rolls and concentration checks for 1 min.",
};
SpellsList["wall of darkness"] = {
	name : "Wall of Darkness",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "warlock", "witch", "wizard"],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Obsidian shard",
	duration : "10 Min",
	description : "See Full Description",
	descriptionFull : desc([
		"An inky black wall of impnetrable darkness appears at apoint you choose within range. The wall appears in any orientation you choose; horizontally, vertically, or diaganoally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet hight, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. When the wall appears each creature in it area must make a Constitution saving throw. On a failed save, a creature takes 4d8 force damage, and half as much on a successful save. Any creature within this spaceis blinded by magical darkness, and a creature takes the same damage when it ends its turn within the wall. Until the spell ends, you can use an action to launch a tendril of darkness from the wall at a creature you can see within 60 feet of the wall. Make a ranged spell attack. On a hit the target takes 4d8 force damage. Whether you hit or miss reduce the wall by 10 feet. If the wall's length is reduced to 0 feet the spell ends. At higher levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot above 5th",
	]),	
};
//6th-Level Spells
SpellsList["investiture of water"] = {
	name : "Investiture of Water",
	source : [["PBMS", 0]],
	classes : ["witch"],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Concentration, up to 10 mins",
	save : "Str",
	description : "Until spell ends, immune to wave, resist fire, breathe underwater, 30 ft swim speed, 15 ft wave Str save or take 2d10 wave and be pushed to edge of wave, or half as much on succ.",
	descriptionFull : "Until the spell ends,  water condenses on your body, and you gain the following benefits. You are immune to wave damage and have resistance to fire damage. You are able to breathe under water and have a swim speed of 30 feet. You can use your action to create a 15 ft cone wave extending from you in a direction you choose. Each creature in the cone must make a Strenth saving throw. A creature takes 2d10 wave damage and if Large ro smaller is pushed to an unoccupied space at the edge of the wave on a failed save, or half as much damage and is not pushed on a successful one.",
};
SpellsList["permanent illusion"] = {
	name : "Permanent Illusion",
	source : [["PBMS", 0]],
	classes : ["bard", "witch", "wizard"],
	level : 6,
	school : "Illus",
	time : "1 a",
	range : "300 ft",
	components : "V,S,M",
	compMaterial : "a bit of fleece",
	duration : "Until Dispelled",
	description : "you create a perfect and realistic illsion that fits w/i a 20ft cube, it is convincing to just before the point of dealing damage.",
	descriptionFull : "When this spell is cast, the caster creates an illusion with visual, auditory, olfactory, and thermal elements. This spell can create the illusion of any object or natural element such as a fire or shrub, as long as it fits within a 20ft cube. This illusion conveys realism to an extent just before instilling damage to a creature or object. Any creature to perform an insight check on this illusion must surpass the casters DC. On a failure the creature believes the illusion is real, otherwise on a success the creature can discern that it is an illusion. This illusion remains until dispelled.",
};
SpellsList["spell binding"] = {
	name : "Spell Binding",
	source : [["PBMS", 0]],
	classes : ["witch", "wizard"],
	level : 6,
	school : "Revoc",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a pinch of powdered iron or iron filings",
	duration : "Concentration, up to 1 hour",
	save : "Cha",
	description : "you bind a target you touch in magical chains of antimagic restraining the target on a failed Cha save and inflicting an Antimagic Field that only effects the restrained target",
	descriptionFull : "You touch a target causing magical antimagic chains to spring into existence. The target of this spell must make a charisma saving throw or be restrained by the chains. On a failed save the target is restained and also affected by the antimagic field spell, except the effects only apply to the creature. This effect lasts until concentration ends or until ended by you no action required.",
};
//7th-Level Spells
SpellsList["delayed spell"] = {
	name : "Delayed Spell",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "witch", "wizard"],
	level : 7,
	school : "Revoc",
	time : "1 rea",
	range : "150 ft",
	components : "V,S",
	duration : "Concentration, up to 1 minute",
	description : "you can delay the activation of a spell, when the spell does activate, the original caster can be affected by it as well.",
	descriptionFull : "When a spell is cast within range you can warp the thread around that spell delaying its manifestation. When the spell ends, either because your concentration is broken or because you decide to end it, the spell activates. Once the spell activates in this way, even the original caster can be affected if applicable.",
};
SpellsList["desire"] = {
	name : "Desire",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "witch", "wizard"],
	level : 7,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V",
	duration : "Instantaneous",
	description : "see full description",
	descriptionFull : "Desire is a lesser wish spell, simply by speaking aloud, you can alter your nearby surroundings as you desire. This spell can duplicate any spell of 5th level or lower without requiring components or the knowledge to cast the spell. In addition, this spell automatically succeeds, meaning, your roll for AC succeeds or the target creatures save throw fails. This effect automatically applies except this spell does not surpass a creatures resistances, immunities, or legendary resistance. All other normal calculated aspects proceed as directed in the spell.",
};
SpellsList["magic siphon"] = {
	name : "Magic Siphon",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "warlock", "witch", "wizard"],
	level : 7,
	school : "Revoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "purple sea sponge",
	duration : "Instantaneous",
	save : "Con",
	description : "1 spellcasting crea w/i range Con Save on failed roll 2d12 spell points siphoned no spell slots can be siphoned over 5th level.",
	descriptionFull : "You target one creature within range that has the ability to cast spells and possesses spell slots. That target must succeed a constitution saving throw or be siphoned of their spell slots. On a failure, you must roll 2d12 to determine the spell slots recovered from this spell and drained from the target. The number rolled determines the total point value of spell slots regained of 5th level or lower. For example if your were to roll an 8 you could choose to regain one 5th level spell slot and one 3rd level spell slot. Otherwise you could choose four 1st level spell slots and two 2nd level spell slots. This effect only allows you to restore a maximum of spells slots up to targets available spell slots. In other words if the target is unable to cast 5th level spells or does not have 5th level spell slots available you cannot regain spell slots of 5th level. ",
};
SpellsList["pandora's prismatic bridge"] = {
	name : "Pandora's Prismatic Bridge",
	source : [["PBMS", 0]],
	classes : ["witch"],
	level : 7,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Prismatic Crystal",
	duration : "24 h",
	description : "creates a 150ft long by 10 ft wide 1 inch thick bridge between 2 points for the duration, if either end of the bridge moves the bridge disappears.",
	descriptionFull : "This spell creates an arching prismatic bridge of force that spans across a gap between two points of 150ft. length within range. This bridge is 1 inch thick, 10ft wide, and 150ft long, and remains for the duration. This bridge is immobile and can be shaped in any path shape or angle that does not exceed this bridges length and width. If either point the bridge touches crumbles or moves before the duration the bridge is dispelled early, and all things upon it fall.",
};
//8th-Level Spells
SpellsList["create golem"] = {
	name : "Create Golem",
	source : [["PBMS", 0]],
	classes : ["witch", "wizard"],
	level : 8,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "10 ft cube of base material required for specified golem",
	duration : "Concentration, up to 1 hour",
	description : "you create a golem (Clay, Stone, Iron, Glass, Flesh, so on) that remains for 1 hour or until reduced to 0 hp.",
	descriptionFull : "When you cast this spell you can target a 10ft cube of nonmagical material be it clay, stone, irom, glass, flesh, and so on. You instantly create a golem from the present material that shares the same stat block of the golem you create in the monster manual. This golem remains under your control until concentration ends, the golem is dropped to 0hp, or after 1 hour has passed. After 1 hour the golem reverts back to the materials of its creation. This golem acts on its own turn sharing your initiative. It obeys every mental command you give it no action required by you.",
};
//9th-Level Spells
SpellsList["infringement"] = {
	name : "Infringement",
	source : [["PBMS", 0]],
	classes : ["sorcerer", "warlock", "witch", "wizard"],
	level : 9,
	school : "Revoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Prismatic Shard",
	duration : "Instantaneous",
	save : "Int",
	description : "you steal the knowledge and ability to cast a spell from a target that fails an Int save.",
	descriptionFull : "You magically steal the knowledge to cast and use a spell from another creature. When you target a creature with this spell that creature must make a intelligence saving throw. On a failed save you select one spell that the target knows of a level in which you can cast. When you do so you steal the knowledge and ability to cast that spell allowing you to learn that spell and add it to your spell list. In addition this spell does not count against your known spells. That creature also loses the knowledge and ability to cast that spell, however the creature can choose to relearn it using the appropriate time and actions.",
};
SpellsList["wail of the banshee"] = {
	name : "Wail of the Banshee",
	source : [["PBMS", 0]],
	classes : ["druid", "warlock", "witch"],
	level : 9,
	school : "Necro",
	time : "1 a",
	range : "120 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Con",
	description : "you unleash a unearthly wail crea = char lvl w/i range Con Save or take 100 necr dmg. if crea dies you may target one other crea. if it saves its save it is unaffected.",
	descriptionFull : "When you cast this spell, you unleash a deadly wail of necromatic power. A number of creatures equal to your character level that is within range must make a constitution save throw. On a failed save a creature takes 100 necrotic damage. If the creature dies out right one additional creature within 30ft of it that was unaffected must make a constitution save throw or take 100 necrotic damage. This effect cannot effect you. On a success, the creature is unaffected. If the creature is targeted again due to the death of a nearby creature they must repeat the save throw. If a creature succeeds three times against this effect they are permanently immune to this effect whenever it is created by you.",
};
