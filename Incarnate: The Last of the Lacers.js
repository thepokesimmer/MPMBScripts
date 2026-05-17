var iFileName = "The Last of the Lacers.js";
RequiredSheetVersion("13.2.3", 15);
SourceList["ITLOTL"] = {
    name: "Incarnate: The Last of the Lacers",
    abbreviation: "ITLOTL",
    abbreviationSpellsheet: "IL",
	url: "https://www.dmsguild.com/en/product/191837/Incarnate-The-Last-of-the-Lacers?",
    group: "Homebrew",
    date: "2026/04/05",
};
//Races
RaceList["dragon fire folk"] = {
	regExpSearch : /^(?=.*dragon)(?=.*fire)(?=.*folk).*$/i,
	name : "Dragon Fire Folk",
	sortname : "Fire Folk, Dragon",
	source : ["ITLOTL", 7],
	plural : "Dragon Fire Folk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Ignan"],
	skills : ["Intimidation"],
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Dragon Fire Folk (+1 Dexterity, +2 Charisma)\nPositive Jing: When I roll a 1 on the d20 for an attack roll, I can reroll the die and must use the new roll.\nSavage Elements: When I score a critical hit with an elemental attack, I can roll one of the weapon's damage dice one additional time and add it to the extra damage.\nDragon Worshipper: I can cast Cause Fear once per long rest. At 3rd level, I can also cast Calm Emotions once per long rest. Charisma is my spellcasting ability for these.",
	features : {
		"dragon worshipper 1" : {
			name : "Dragon Worshipper (Level 1)",
			minlevel : 1,
			spellcastingAbility : 6,
			spellcastingBonus : [{
				name : "Dragon Worshipper (1)",
				spells : ["cause fear"],
				selection : ["cause fear"],
				firstCol : "oncelr"
			}]
		},
		"dragon worshipper 3" : {
			name : "Dragon Worshipper (Level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Dragon Worshipper (3)",
				spells : ["calm emotions"],
				selection : ["calm emotions"],
				firstCol : "oncelr"
			}]
		}
	}
};
RaceList["qilin fire folk"] = {
	regExpSearch : /^(?=.*qilin)(?=.*fire)(?=.*folk).*$/i,
	name : "Qilin Fire Folk",
	sortname : "Fire Folk, Qilin",
	source : ["ITLOTL", 7],
	plural : "Qilin Fire Folk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Ignan"],
	skills : ["Intimidation"],
	scores : [1, 0, 0, 0, 0, 2],
	armorProfs : [true, true, false, true],
	weaponProfs : [false, false, ["hand crossbow", "light crossbow", "heavy crossbow", "halberd", "longsword", "shortsword", "spear"]],
	trait : "Qilin Fire Folk (+1 Strength, +2 Charisma)\nPositive Jing: When I roll a 1 on the d20 for an attack roll, I can reroll the die and must use the new roll.\nSavage Elements: When I score a critical hit with an elemental attack, I can roll one of the weapon's damage dice one additional time and add it to the extra damage.\nQilin Training: I am proficient with light and medium armor, shields, crossbows, halberds, longswords, shortswords, and spears."
};
RaceList["cenobite air monk"] = {
	regExpSearch : /^(?=.*cenobite)(?=.*air)(?=.*monk).*$/i,
	name : "Cenobite Air Monk",
	sortname : "Air Monk, Cenobite",
	source : ["ITLOTL", 9],
	plural : "Cenobite Air Monks",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Auran"],
	skills : ["Acrobatics"],
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Cenobite Air Monk (+2 Dexterity, +1 Wisdom)\nSwift: When I roll for initiative, a roll of 4 or lower counts as a 5.\nSky Legs: I travel normally in altitudes up to 10,000 ft and am not disadvantaged by strong winds.\nLight Foot: Any distance I fall counts as 20 ft shorter than it actually is.\nDeep Meditation: I only need 4 hours of sleep to gain the benefit of a long rest.\nNonviolence: I can cast Sanctuary once per long rest. Wisdom is my spellcasting ability.",
	spellcastingAbility : 5,
	features : {
		"nonviolence" : {
			name : "Nonviolence",
			minlevel : 1,
			spellcastingBonus : [{
				name : "Nonviolence",
				spells : ["sanctuary"],
				selection : ["sanctuary"],
				firstCol : "oncelr"
			}]
		}
	}
};
RaceList["nomad air monk"] = {
	regExpSearch : /^(?=.*nomad)(?=.*air)(?=.*monk).*$/i,
	name : "Nomad Air Monk",
	sortname : "Air Monk, Nomad",
	source : ["ITLOTL", 9],
	plural : "Nomad Air Monks",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Auran"],
	skills : ["Acrobatics"],
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Nomad Air Monk (+2 Dexterity, +1 Charisma)\nSwift: When I roll for initiative, a roll of 4 or lower counts as a 5.\nSky Legs: I travel normally in altitudes up to 10,000 ft and am not disadvantaged by strong winds.\nLight Foot: Any distance I fall counts as 20 ft shorter than it actually is.\nAscetic Diet: I only need half as much food and water as a Medium creature normally needs.\nCharming Personality: I can cast Charm Person once per long rest. Wisdom is my spellcasting ability.",
	spellcastingAbility : 5,
	features : {
		"charming personality" : {
			name : "Charming Personality",
			minlevel : 1,
			spellcastingBonus : [{
				name : "Charming Personality",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : "oncelr"
			}]
		}
	}
};
RaceList["polar water clan"] = {
	regExpSearch : /^(?=.*polar)(?=.*water)(?=.*clan).*$/i,
	name : "Polar Water Clan",
	sortname : "Water Clan, Polar",
	source : ["ITLOTL", 11],
	plural : "Polar Water Clan",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Aquan"],
	skills : ["Medicine"],
	scores : [1, 0, 2, 0, 0, 0], // Str +1, Con +2
	dmgres : ["Cold"],
	trait : "Polar Water Clan (+1 Strength, +2 Constitution)\nNatural Healer: When rolling to heal hit points, I can reroll any 1s but must use the new roll.\nWaterborne: I have advantage on Strength (Athletics) and Dexterity (Acrobatics) checks made while underwater.\nCold Endurance: I have resistance to cold damage.\nExtreme Environment: Once per long rest, when required to make a saving throw against exhaustion due to environmental effects, I can choose to automatically succeed.",
	features : {
		"extreme environment" : {
			name : "Extreme Environment",
			minlevel : 1,
			usages : 1,
			recovery : "long rest"
		}
	}
};
RaceList["swamp water clan"] = {
	regExpSearch : /^(?=.*swamp)(?=.*(people|water|clan)).*$/i,
	name : "Swamp Water Clan",
	sortname : "Water Clan, Swamp",
	source : ["ITLOTL", 11],
	plural : "Swamp People",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Aquan"],
	skills : ["Medicine"],
	scores : [0, 0, 2, 0, 1, 0], // Con +2, Wis +1
	trait : "Swamp Water Clan (+2 Constitution, +1 Wisdom)\nNatural Healer: When rolling to heal hit points, I can reroll any 1s but must use the new roll.\nWaterborne: I have advantage on Strength (Athletics) and Dexterity (Acrobatics) checks made while underwater.\nPlant Familiarity: I have advantage on Intelligence (Nature) checks to identify and understand plants properties.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
};
RaceList["city earth kin"] = {
	regExpSearch : /^(?=.*city)(?=.*earth)(?=.*kin).*$/i,
	name : "City Earth Kin",
	sortname : "Earth Kin, City",
	source : ["ITLOTL", 13],
	plural : "City Earth Kin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Shi"],
	skills : ["Perception"],
	scores : [2, 0, 0, 0, 0, 1], // Str +2, Cha +1
	savetxt : {
		text : ["Adv. on checks/saves vs. being knocked prone"],
		adv_vs : ["poison"]
	},
	dmgres : ["Poison"],
	armorOptions : [{
		regExpSearch : /^(?=.*tough)(?=.*people).*$/i,
		name : "Tough People",
		source : ["ITLOTL", ""],
		ac : 12,
		dex : true
	}],
	armorAdd : "Tough People",
	trait : "City Earth Kin (+2 Strength, +1 Charisma)\nProtection of Earth: Once per short or long rest, I can reroll a saving throw. I must keep the new roll.\nStance of the Mountain: I have advantage on checks and saving throws against being knocked prone.\nTough People: Without armor or a shield, my AC equals 12 + my Dexterity modifier.\nResilience: I have advantage on saving throws against poison and resistance to poison damage.",
	features : {
		"protection of earth" : {
			name : "Protection of Earth",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		}
	}
};
RaceList["desert earth kin"] = {
	regExpSearch : /^(?=.*desert)(?=.*earth)(?=.*kin).*$/i,
	name : "Desert Earth Kin",
	sortname : "Earth Kin, Desert",
	source : ["ITLOTL", 13],
	plural : "Desert Earth Kin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Shi"],
	skills : ["Perception"],
	scores : [2, 0, 1, 0, 0, 0], // Str +2, Con +1
	savetxt : {
		text : [
			"Adv. on checks/saves vs. being knocked prone",
			"Immune to exhaustion from natural hot environments"
		]
	},
	calcChanges : {
		hp : function (totalHD) { return [totalHD, "Hardy"]; }
	},
	trait : "Desert Earth Kin (+2 Strength, +1 Constitution)\nProtection of Earth: Once per short or long rest, I can reroll a saving throw. I must keep the new roll.\nStance of the Mountain: I have advantage on checks and saving throws against being knocked prone.\nHarsh Sun: I do not become exhausted by the effects of natural hot environments.\nHardy: My hit point maximum increases by 1, and it increases by 1 every time I gain a level.",
	features : {
		"protection of earth" : {
			name : "Protection of Earth",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		}
	}
};
var obakeRacialTrait = "Obake (+2 Wisdom or Charisma)\nFey Ancestry: I have advantage on saving throws against being charmed, and magic can't put me to sleep.\nSpirit Magic: I know the Druidcraft cantrip.\nTransformation: As an action, I can transform into my true form, a humanoid form, or my animal form. My stats remain the same in humanoid form.\n";
RaceList["bake-danuki"] = {
	regExpSearch : /bake-danuki/i,
	name : "Bake-Danuki",
	sortname : "Obake, Bake-Danuki",
	source : ["ITLOTL", 16],
	plural : "Bake-Danuki",
	size : [3, 4], // Medium or Small
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 30]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [0, 0, 1, 0, 0, 0], // +1 Con
	scorestxt : "+2 Wisdom or Charisma, +1 Constitution",
	spellcastingAbility : [5, 6], // Wis or Cha, technically depends on what they pick, but defaults to Wis/Cha
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Tanuki Spirit: I can communicate simple ideas to Small or smaller tanuki/canines. I can transform into a tanuki.\nStatue Form: As an action, I can become a stone statue of my current form until I use an action to end it. I am petrified but still aware of my surroundings (does not grant immunity to poison/disease).",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		},
		"statue form" : {
			name : "Statue Form",
			minlevel : 1,
			action : [["action", "Statue Form (start/end)"]]
		}
	}
};
RaceList["hebi"] = {
	regExpSearch : /hebi/i,
	name : "Hebi",
	sortname : "Obake, Hebi",
	source : ["ITLOTL", 16],
	plural : "Hebi",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 30]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [0, 0, 0, 1, 0, 0], // +1 Int
	scorestxt : "+2 Wisdom or Charisma, +1 Intelligence",
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Snake Spirit: I can communicate simple ideas to Small or smaller snakes/serpents. I can transform into a poisonous snake.\nCamouflage: If I hide and remain motionless, creatures have disadvantage on Wisdom (Perception) checks to see me.",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		}
	}
};
RaceList["inugami"] = {
	regExpSearch : /inugami/i,
	name : "Inugami",
	sortname : "Obake, Inugami",
	source : ["ITLOTL", 17],
	plural : "Inugami",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 30]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [1, 0, 0, 0, 0, 0], // +1 Str
	scorestxt : "+2 Wisdom or Charisma, +1 Strength",
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Dog Spirit: I can communicate simple ideas to Small or smaller dogs/canines. I can transform into a dog.\nKeen Senses: I have advantage on Wisdom (Perception) checks that rely on hearing or smell.",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		}
	}
};
RaceList["jorogumo"] = {
	regExpSearch : /jorogumo/i,
	name : "Jorogumo",
	sortname : "Obake, Jorogumo",
	source : ["ITLOTL", 17],
	plural : "Jorogumo",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 },
		climb : { spd : 10, enc : 5 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 30]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [0, 1, 0, 0, 0, 0], // +1 Dex
	scorestxt : "+2 Wisdom or Charisma, +1 Dexterity",
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Spider Spirit: I can communicate simple ideas to Small or smaller spiders/arachnids. I can transform into a spider.\nSkittering Climber: I have a climb speed of 10 ft, allowing me to climb difficult surfaces and upside down on ceilings without checks.",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		}
	}
};
RaceList["kawauso"] = {
	regExpSearch : /kawauso/i,
	name : "Kawauso",
	sortname : "Obake, Kawauso",
	source : ["ITLOTL", 17],
	plural : "Kawauso",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 30]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [0, 1, 0, 0, 0, 0], // +1 Dex
	scorestxt : "+2 Wisdom or Charisma, +1 Dexterity",
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Otter Spirit: I can communicate simple ideas to Small or smaller otters/mustelids. I can transform into an otter.\nSwift Swim: I gain a swim speed of 30 feet.",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		}
	}
};
RaceList["kitsune"] = {
	regExpSearch : /kitsune/i,
	name : "Kitsune",
	sortname : "Obake, Kitsune",
	source : ["ITLOTL", 17],
	plural : "Kitsune",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Sylvan"],
	skills : ["Deception"],
	vision : [["Darkvision", 30]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [0, 0, 0, 1, 0, 0], // +1 Int
	scorestxt : "+2 Wisdom or Charisma, +1 Intelligence",
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Fox Spirit: I can communicate simple ideas to Small or smaller foxes/canines. I can transform into a fox.\nCunning Trickster: I gain proficiency in the Deception skill.",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		}
	}
};
RaceList["mujina"] = {
	regExpSearch : /mujina/i,
	name : "Mujina",
	sortname : "Obake, Mujina",
	source : ["ITLOTL", 17],
	plural : "Mujina",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 },
		burrow : { spd : 10, enc : 5 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 30], ["Tremorsense", 10]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [1, 0, 0, 0, 0, 0], // +1 Str
	scorestxt : "+2 Wisdom or Charisma, +1 Strength",
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Badger Spirit: I can communicate simple ideas to Small or smaller badgers/mustelids. I can transform into a badger.\nEarth Walk: I gain a burrow speed of 10 feet, allowing me to move through sand, earth, mud, or ice. I gain tremorsense out to 10 feet while burrowing.",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		}
	}
};
RaceList["nekomata"] = {
	regExpSearch : /nekomata/i,
	name : "Nekomata",
	sortname : "Obake, Nekomata",
	source : ["ITLOTL", ""],
	plural : "Nekomata",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 30]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [0, 1, 0, 0, 0, 0], // +1 Dex
	scorestxt : "+2 Wisdom or Charisma, +1 Dexterity",
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Cat Spirit: I can communicate simple ideas to Small or smaller cats/felines. I can transform into a cat.\nAgile Climber: I do not need to spend any extra movement in order to climb surfaces.",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		}
	}
};
RaceList["ningyo"] = {
	regExpSearch : /ningyo/i,
	name : "Ningyo",
	sortname : "Obake, Ningyo",
	source : ["ITLOTL", ""],
	plural : "Ningyo",
	size : [3, 4],
	speed : {
		walk : { spd : 25, enc : 15 },
		swim : { spd : 15, enc : 10 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 30]],
	savetxt : { immune : ["sleep"], adv_vs : ["charmed"] },
	scores : [0, 0, 1, 0, 0, 0], // +1 Con
	scorestxt : "+2 Wisdom or Charisma, +1 Constitution",
	spellcastingBonus : [{
		name : "Spirit Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}],
	trait : obakeRacialTrait + "Koi Spirit: I can communicate simple ideas to Small or smaller koi/fishes. I can transform into a koi.\nWater Breathing: I can breathe both underwater and on land, and gain a swim speed of 15 feet.",
	features : {
		"transformation" : {
			name : "Transformation",
			minlevel : 1,
			action : [["action", "Transformation"]]
		}
	}
};
//Subclasses
AddSubClass("barbarian", "elements", {
    regExpSearch: /^(?=.*(barbarian))(?=.*(elements)).*$/i,
    subname: "Path of the Elements",
    source: ["ITLOTL", 19],
    features: {
        "subclassfeature3": {
            name: "Chosen Element",
            source: ["ITLOTL", 19],
            minlevel: 3,
			description: desc([
                "As a lacer, I have the ability to manipulate my element. When I choose this ath at 3rd level, I must choose an element: fire, air, water, or earth. From that point on, I am a lacer. I can never take another element, even if I later get to choose again.",
				"I gain my element's Basic Lacing abilities. I cannot use these abilities while raging.",
            ]),
			choices: ["Air", "Earth", "Fire", "Water"],
			"air": {
				name: "Air",
				spellcastingAbility: 3,
				spellcastingBonus: [{
					name: "Basic Lacing",
					spells: ["basic airlacing"],
					selection: ["basic airlacing"],
					times: 1,
					firstCol: "atwill",
				}],
				description: desc([
					"I gain the basic Airlacing abilities, I cannot use these abilities while raging.",
				]),	
			},
			"earth": {
				name: "Earth",
				spellcastingAbility: 3,
				spellcastingBonus: [{
					name: "Basic Lacing",
					spells: ["basic earthlacing"],
					selection: ["basic earthlacing"],
					times: 1,
					firstCol: "atwill",
				}],
				description: desc([
					"I gain the basic Earthlacing abilities, I cannot use these abilities while raging.",
				]),	
			},
			"fire": {
				name: "Fire",
				spellcastingAbility: 3,
				spellcastingBonus: [{
					name: "Basic Lacing",
					spells: ["basic firelacing"],
					selection: ["basic firelacing"],
					times: 1,
					firstCol: "atwill",
				}],
				description: desc([
					"I gain the basic Firelacing abilities, I cannot use these abilities while raging.",
				]),	
			},
			"water": {
				name: "Water",
				spellcastingAbility: 3,
				spellcastingBonus: [{
					name: "Basic Lacing",
					spells: ["basic waterlacing"],
					selection: ["basic waterlacing"],
					times: 1,
					firstCol: "atwill",
				}],
				description: desc([
					"I gain the basic Waterlacing abilities, I cannot use these abilities while raging.",
				]),	
			},
        },
		"subclassfeature3.1": {
			name: "Elemental Fury",
			source: ["ITLOTL", 19],
			minlevel: 3,
			additional: ["", "", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6"],
			description: desc([
				"My rage unleashes elemental fury in me. The fury extends 10 ft from me in every direction, but not through totoal cover.",
				"My fury causes my element to swirl around me, battering my foes. It activates when I enter my rage, and I can activate the effect again on each of my turns as a bonus action.",
				"Each turn my fury is active, I can choose one other creature I can see in my aura. The target must make a Dexterity Saving Throw (DC = 8 + Prof + Con). The target takes 1d6 bludgeoning damage on a failed save, or half as much damage on a successful one.",
			]),
		},			
        "subclassfeature6": {
            name: "Boon of the Elements",
            source: ["ITLOTL", 19],
            minlevel: 6,
            description: desc([
                "I gain a boon based on my element that activates when I enter my rage."
            ]),
			choices: ["Air", "Earth", "Fire", "Water"],
			"air": {
				name: "Air",
				description: desc([
					"While my Rage is active, my jump distance is doubled, and falling damage is reduced by an amount equal to five times my barbarian level.",
				]),	
			},
			"earth": {
				name: "Earth",
				description: desc([
					"While my Rage is active, I am unaffected by difficult terrain, and gain tremorsense to a range of 10 feet. I gain the ability to move along vertical surfaces and ceilings made of earth or stone while leaving my hands free. I also gain a climbing speed equal to my walking speed.",
				]),	
			},
			"fire": {
				name: "Fire",
				description: desc([
					"While my Rage is active, a creature that moves within 5 feet of me for the first time on a turn or starts its turn there takes 1d6 Fire damage.",
				]),	
			},
			"water": {
				name: "Water",
				description: desc([
					"When I initiate a rage, I gain a number of temporary hit points equal to my Wisdom modifier + my barbarian level. Any remaining temporary hit points are lost when my rage ends.",
				]),	
			},
        },
        "subclassfeature10": {
            name: "One with Nature",
            source: ["ITLOTL", 19],
            minlevel: 10,
			spellcastingBonus : [{
				name: "One with Nature",
				spells: ["commune with nature"],
				selection: ["commune with nature"],
				times: 1,
				ritual: true,
			}],
            description: desc([
                "I can cast the commune with Nature spell, but only as a ritual. When I do so, a spiritual creature appears to me to convey the information I seek."
            ]),
        },
        "subclassfeature14": {
            name: "Intimidating Presence",
            source: ["ITLOTL", 19],
            minlevel: 14,
            action: "action",
            usages: 1,
            recovery: "long rest",
            description: desc([
                "When I activate my rage I gain additional abilities based on my element."
            ]),
			choices: ["Air", "Earth", "Fire", "Water"],
			"air": {
				name: "Air",
				description: desc([
					"When I activate my Rage, I gain the following:",
					"My speed is increased by 20 feet.",
					"When I mae a successful attack against a creature, I can choose to blast the target with air. The target is pushed 10 feet away from me.",
				]),				
			},
			"earth": {
				name: "Earth",
				description: desc([
					"When I activate my Rage, I gain the following:",
					"I gain a burrow speed of 20 feet, and my tremorsense increases to a range of 30 feet.",
					"The ground in a 10-foot radius around me ruptures and is difficult terrain for creatures other than me. The radius moves with me, and any area I leave returns to normal.",
				]),	
			},
			"fire": {
				name: "Fire",
				description: desc([
					"When I activate my Rage, I gain the following:",
					"Immunity to Fire damage and Resistance to Cold damage.",
					"When I take damage from a creature within 5 feet of me, I can use my Reaction to activate my Elemental Fury against that creature.",
				]),	
			},
			"water": {
				name: "Water",
				description: desc([
					"When I activate my Rage, I gain the following:",
					"Immunity to Cold damage and Resistance to Fire damage.",
					"If I miss a creature with an attack, I can immediately make another attack against the same creature as part of the same attack. once I use this ability, I can't do so again until the beginning of my next turn.",
				]),	
			},
        },
    },
});
AddSubClass("fighter", "pro-lacer", {
    regExpSearch: /^(?=.*(fighter))(?=.*(pro))(?=.*(lacer)).*$/i,
    subname: "Pro-Lacer",
    source: ["ITLOTL", 20],
    features: {
        "subclassfeature3": {
            name: "Chosen by the Elements",
            source: ["ITLOTL", 20],
            minlevel: 3,
			description: desc([
                "As a lacer, I have the ability to manipulate my element. When I choose this ath at 3rd level, I must choose an element: fire, air, water, or earth. From that point on, I am a lacer. I can never take another element, even if I later get to choose again.",
				"I gain my element's Basic Lacing abilities. I cannot use these abilities while raging.",
            ]),
			choices: ["Air", "Earth", "Fire", "Water"],
			"air": {
				name: "Air",
				spellcastingAbility: 5,
				spellcastingBonus: [{
					name: "Basic Lacing",
					spells: ["basic airlacing"],
					selection: ["basic airlacing"],
					times: 1,
					firstCol: "atwill",
				}],
				description: desc([
					"I gain the basic Airlacing abilities, I cannot use these abilities while raging.",
				]),	
			},
			"earth": {
				name: "Earth",
				spellcastingAbility: 6,
				spellcastingBonus: [{
					name: "Basic Lacing",
					spells: ["basic earthlacing"],
					selection: ["basic earthlacing"],
					times: 1,
					firstCol: "atwill",
				}],
				description: desc([
					"I gain the basic Earthlacing abilities, I cannot use these abilities while raging.",
				]),	
			},
			"fire": {
				name: "Fire",
				spellcastingAbility: 6,
				spellcastingBonus: [{
					name: "Basic Lacing",
					spells: ["basic firelacing"],
					selection: ["basic firelacing"],
					times: 1,
					firstCol: "atwill",
				}],
				description: desc([
					"I gain the basic Firelacing abilities, I cannot use these abilities while raging.",
				]),	
			},
			"water": {
				name: "Water",
				spellcastingAbility: 5,
				spellcastingBonus: [{
					name: "Basic Lacing",
					spells: ["basic waterlacing"],
					selection: ["basic waterlacing"],
					times: 1,
					firstCol: "atwill",
				}],
				description: desc([
					"I gain the basic Waterlacing abilities, I cannot use these abilities while raging.",
				]),	
			},
        },
        "subclassfeature3.1": {
            name: "Elemental Strike",
            source: ["ITLOTL", 20],
            minlevel: 3,
            description: desc([
                "I can blast my opponents with an elemental strike, I can use my elemental strike when I make an attack. When I take the Attack action with a weapon with which I have proficiency on my turn (including my elemental strike), I can make one elemental strike as a bonus action.",
            ]),
			action: ["bonus action", " (With Attack Action)"],
			weaponOptions : [{
				name: "Elemental Strike",
				source: ["ITLOTL", 20],
				regExpSearch : /^(?=.*elemental)(?=.*strike).*$/i,
				type: "AlwaysProf",
				ability : 1,
				abilitytodamage : true,
				damage : [1, 6, "bludgeoning"],
				range : "Melee, 20/60 ft",
				description : "Finesse",
				selectNow : true,
			}],
        },
		"subclassfeature3.2": {
			name: "Elemental Warrior",
			source: ["ITLOTL", 20],
			minlevel: 3,
			limfeaname: "Ki Dice",
			usages: ["", "", 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery: "short rest",
			extraname: "Elemental Warrior",
			extrachoices: ["Broken Base", "Disarming Shot", "Distracting Shot", "Double Shot", "Elemental Assault", "Feinting Shot", "Goading Shot", "Graceful Fighting", "Lunging Shot", "Maneuvering Shot", "Menacing Shot", "Parry", "Rally", "Shot Caller"],
			extraTimes: ["", "", 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			"broken base": {
				name: "Broken Base", 
				description: desc([
					"When you hit a creature with an elemental attack, you can expend one Ki Die to attempt to knock the target down. You add the Ki Die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.",
				]),
			},
			"disarming shot": {
				name: "Disarming Shot", 
				description: desc([
					"When you hit a creature with an elemental attack, you can expend one Ki Die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the Ki Die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.",
				]),
			},	
			"distracting shot": {
				name: "Distracting Shot", 
				description: desc([
					"When you hit a creature with an elemental attack, you can expend one Ki Die to distract the creature, giving your allies an opening. You add the Ki Die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.",
				]),
			},
			"double shot": {
				name: "Double Shot", 
				description: desc([
					"When you hit a creature with an elemental attack, you can expend one Ki Die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your Ki Die. The damage is of the same type dealt by the original attack.",
				]),
			},
			"elemental assault": {
				name: "Elemental Assault", 
				description: desc([
					"When you hit a creature with an elemental attack, you can expend one Ki Die to attempt to drive the target back. You add the Ki Die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.",
				]),
			},
			"feinting shot": {
				name: "Feinting Shot", 
				description: desc([
					"You can expend on Ki Die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the Ki Die to the attack's damage roll.",
				]),
			},
			"goading shot": {
				name: "Goading Shot", 
				description: desc([
					"When you hit a creature with an elemental attack, you can expend one Ki Die to attempt to goad the target into attacking you. You add the Ki Die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.",
				]),
			},
			"graceful fighting": {
				name: "Graceful Fighting", 
				description: desc([
					"When you move, you can expend one Ki Die, rolling the die and adding the number rolled to your AC until you stop moving.",
				]),
			},
			"lunging shot": {
				name: "Lunging Shot", 
				description: desc([
					"When you make an elemental strike on your turn, you can expend one Ki Die to increase the short range of that elemental strike by 10 feet, and the long range by 30 feet. If you hit, you add the Ki Die to the attack's damage roll.",
				]),
			},
			"maneuvering shot": {
				name: "Maneuvering Shot", 
				description: desc([
					"When you hit a creature with an elemental attack, you can expend one Ki Die to maneuver one of your comrades into a more advantageous position. You add the Ki Die to the attack's damage roll, and you choose a friendly creature which can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.",
				]),
			},
			"menacing shot": {
				name: "Menacing Shot", 
				description: desc([
					"When you hit a creature with an elemental attack, you can expend one Ki Die to attempt to frighten the target. You add the Ki Die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.",
				]),
			},
			"parry": {
				name: "Parry", 
				description: desc([
					"When another creature which is within 5 feet of you damages you with a weapon attack, you can use your reaction and expend one Ki Die to reduce the damage by the number you roll on your Ki Die + your Strength or Dexterity modifier.",
				]),
			},
			"rally": {
				name: "Rally", 
				description: desc([
					"On your turn, you can use a bonus action and expend one Ki Die to bolster the resolve of one of your companions. When you do so, choose a friendly creature which can see or hear you. That creature gains temporary hit points equal to the Ki Die roll + your Charisma modifier.",
				]),
			},
			"shot caller": {
				name: "Shot Caller", 
				description: desc([
					"When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature which can see or hear you and expend one Ki Die. That creature can immediately use its reaction to make one weapon or elemental attack, adding the Ki Die to the attack's damage roll.",
				]),
			},
			additional: ["", "", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10"],
			description: desc([
				"I gain a pool of dice that can be used to fuel my abilities.",
			]),
		},			
        "subclassfeature7": {
            name: "Quick Recovery",
            source: ["ITLOTL", 20],
            minlevel: 7,
			action: ["bonus action", ""],
            description: desc([
                "As a Bonus Action, I can expend one of my Ki Dice and regain a number of Hit Points equal to the roll plus either my Wisdom(Air & Water), or Charisma(Fire or Earth).",
            ]),
        },
        "subclassfeature15": {
            name: "Supreme Focus",
            source: ["ITLOTL", 20],
            minlevel: 15,
            description: desc([
                "When I roll Initiative and have no Ki Dice remaining, I regain 1 Ki Die.",
            ]),
        },
    },
});
AddSubClass("monk", "way of the ki blocker", {
	regExpSearch : /^(?=.*ki)(?=.*blocker).*$/i,
	subname : "Way of the Ki Blocker",
	source : ["ITLOTL", 30],
	features : {
		"subclassfeature3" : {
			name : "Pressure Points",
			source : ["ITLOTL", 30],
			minlevel : 3,
			description : desc([
				"When I hit a creature with a Flurry of Blows attack, it must make a Constitution save",
				"On a fail, I choose one of the following weaknesses to last until the end of my next turn:",
				"\u2022 Attack: The first attack the target makes is made with disadvantage",
				"\u2022 Saving Throw: Its first Str/Dex check or save is made with disadvantage",
				"A target can suffer both weaknesses if hit by both attacks and fails both saves"
			])
		},
		"subclassfeature6" : {
			name : "Ki Blocking",
			source : ["ITLOTL", 30],
			minlevel : 6,
			description : desc([
				"When I hit a creature not wearing heavy armor with an unarmed attack, I can spend 3 ki",
				"It makes a Con save or can't spend ki or spell slots for a number of rounds = my Wis mod",
				"The creature can repeat this saving throw at the end of each of its turns to end the effect"
			]),
		},
		"subclassfeature11" : {
			name : "Keen Agility",
			source : ["ITLOTL", 30],
			minlevel : 11,
			description : desc("I gain proficiency in Acrobatics and Athletics. If I am already proficient in either, my proficiency bonus is doubled for that skill check (expertise)."),
			skills : [["Acrobatics", "increment"], ["Athletics", "increment"]],
		},
		"subclassfeature17" : {
			name : "Paralyzing Strike",
			source : ["ITLOTL", 30],
			minlevel : 17,
			description : desc([
				"When I hit a creature not wearing heavy armor with an unarmed attack, I can spend 4 ki",
				"It must succeed on a Constitution saving throw or become knocked prone and paralyzed",
				"This paralysis lasts for 1d4 rounds"
			]),
		}
	}
});
AddSubClass("monk", "way of the shihan", {
	regExpSearch : /^(?=.*shihan).*$/i,
	subname : "Way of the Shihan",
	source : ["ITLOTL", 31],
	features : {
		"subclassfeature3" : {
			name : "Silk Threads",
			source : ["ITLOTL", 31],
			minlevel : 3,
			description : desc([
				"I gain proficiency with light armor, shields, spring shields, katanas, and shanzi",
				"My Martial Arts features apply even when I wear light armor or wield a shield",
				"I still lose the benefits of Unarmored Defense when wearing armor or using a shield",
				"Katanas and shanzi count as monk weapons for me"
			]),
			armorProfs : [true, false, false, true],
			weaponProfs :[false, false, ["katana", "shanzi"]],
		},
		"subclassfeature6" : {
			name : "Gold Insignia",
			source : ["ITLOTL", 31],
			minlevel : 6,
			description : desc([
				"While unarmed or wielding a monk weapon, I can use Deflect Missiles on melee attacks",
				"If I reduce the damage to 0, I can spend 1 ki point to attempt to disarm the attacker",
				"The target must make a Dexterity save or drop one item of my choice that it's holding",
				"I can catch the object if I have a free hand, or otherwise let it drop at its feet"
			])
		},
		"subclassfeature11" : {
			name : "Brave Blood",
			source : ["ITLOTL", 31],
			minlevel : 11,
			description : desc([
				"I am immune to being frightened",
				"As a reaction when I would be charmed, I can spend 1 ki point to negate the effect",
				"This uses my Stillness of Mind feature immediately to prevent the condition"
			]),
			savetxt : { immune : ["frightened"] },
			action : [["reaction", "Brave Blood (negate charm)"]]
		},
		"subclassfeature17" : {
			name : "Warrior's Heart",
			source : ["ITLOTL", 31],
			minlevel : 17,
			description : desc([
				"When I reduce an enemy to 0 HP, I can spend 3 ki points to reduce them to 1 HP instead",
				"The target must make a Wis save or be charmed and under charm person/command effects",
				"This lasts for a number of days equal to my monk level; I can only affect 1 target at a time",
				"They treat me as an old friend and feel remorse for misdeeds against me/my allies",
				"When it ends, they make a Wis check vs. ki DC; on a fail, they think it was their own choice"
			])
		}
	}
});
AddSubClass("rogue", "triple threat", {
	regExpSearch : /^(?=.*triple)(?=.*threat).*$/i,
	subname : "Triple Threat",
	source : ["ITLOTL", 32],
	features : {
		"subclassfeature3" : {
			name : "Elemental Power & Basic Lacing",
			source : ["ITLOTL", 32],
			minlevel : 3,
			description : desc([
				'Choose your element using the "Choose Feature" button above',
				"I gain the Basic Lacing abilities of my chosen element",
				"Once I choose an element, I cannot change it"
			]),
			choices : ["Air", "Earth", "Fire", "Water"],
			"air" : {
				name : "Elemental Power: Air",
				description : desc("I am an airlacer and gain the Basic Airlacing abilities."),
				spellcastingBonus : [{
					name : "Elemental Power",
					spells : ["basic airlacing"],
					selection : ["basic airlacing"],
					times : 1,
					firstCol : "atwill",
				}, {
					name : "Novice Forms",
					class : "lacer",
					school : ["Lacer", "Airlacer"],
					level : [1, 1],
					times : 2,
					firstCol : "oncesr"
				}, {
					name : "Intermediate Forms",
					class : "lacer",
					school : ["Lacer", "Airlacer"],
					level : [2, 2],
					times: levels.map(function(n) {
                    return n < 9 ? 0 : 2;
					}),
					firstCol : "oncesr"
				}, {
					name : "Superior Forms",
					class : "lacer",
					school : ["Lacer", "Airlacer"],
					level : [3, 3],
					times: levels.map(function(n) {
                    return n < 17 ? 0 : 2;
					}),
					firstCol : "oncesr"
				}],
			},
			"earth" : {
				name : "Elemental Power: Earth",
				description : desc("I am an earthlacer and gain the Basic Earthlacing abilities."),
				spellcastingBonus : [{
					name : "Elemental Power",
					spells : ["basic earthlacing"],
					selection : ["basic earthlacing"],
					times : 1,
					firstCol : "atwill",
				}, {
					name : "Novice Forms",
					class : "lacer",
					school : ["Lacer", "Earthlacer"],
					level : [1, 1],
					times : 2,
					firstCol : "oncesr"
				}, {
					name : "Intermediate Forms",
					class : "lacer",
					school : ["Lacer", "Earthlacer"],
					level : [2, 2],
					times: levels.map(function(n) {
                    return n < 9 ? 0 : 2;
					}),
					firstCol : "oncesr"
				}, {
					name : "Superior Forms",
					class : "lacer",
					school : ["Lacer", "Earthlacer"],
					level : [3, 3],
					times: levels.map(function(n) {
                    return n < 17 ? 0 : 2;
					}),
					firstCol : "oncesr"
				}],
			},
			"fire" : {
				name : "Elemental Power: Fire",
				description : desc("I am a firelacer and gain the Basic Firelacing abilities."),
				spellcastingBonus : [{
					name : "Elemental Power",
					spells : ["basic firelacing"],
					selection : ["basic firelacing"],
					times : 1,
					firstCol : "atwill",
				}, {
					name : "Novice Forms",
					class : "lacer",
					school : ["Lacer", "Firelacer"],
					level : [1, 1],
					times : 2,
					firstCol : "oncesr"
				}, {
					name : "Intermediate Forms",
					class : "lacer",
					school : ["Lacer", "Firelacer"],
					level : [2, 2],
					times: levels.map(function(n) {
                    return n < 9 ? 0 : 2;
					}),
					firstCol : "oncesr"
				}, {
					name : "Superior Forms",
					class : "lacer",
					school : ["Lacer", "Firelacer"],
					level : [3, 3],
					times: levels.map(function(n) {
                    return n < 17 ? 0 : 2;
					}),
					firstCol : "oncesr"
				}],
			},
			"water" : {
				name : "Elemental Power: Water",
				description : desc("I am a waterlacer and gain the Basic Waterlacing abilities."),
				spellcastingBonus : [{
					name : "Elemental Power",
					spells : ["basic waterlacing"],
					selection : ["basic waterlacing"],
					times : 1,
					firstCol : "atwill",
				}, {
					name : "Novice Forms",
					class : "lacer",
					school : ["Lacer", "Waterlacer"],
					level : [1, 1],
					times : 2,
					firstCol : "oncesr"
				}, {
					name : "Intermediate Forms",
					class : "lacer",
					school : ["Lacer", "Waterlacer"],
					level : [2, 2],
					times: levels.map(function(n) {
                    return n < 9 ? 0 : 2;
					}),
					firstCol : "oncesr"
				}, {
					name : "Superior Forms",
					class : "lacer",
					school : ["Lacer", "Waterlacer"],
					level : [3, 3],
					times: levels.map(function(n) {
                    return n < 17 ? 0 : 2;
					}),
					firstCol : "oncesr"
				}],
			}
		},
		"subclassfeature3.1" : {
			name : "Elemental Dig",
			source : ["ITLOTL", 32],
			minlevel : 3,
			description : desc([
				"As a reaction when a creature is hit by a weapon attack within 30 ft of me,",
				"I can fire an elemental bolt to deal an extra 1d4 bludgeoning damage to it.",
				"This attack applies my Sneak Attack damage if it is available to me."
			]),
			action : [["reaction", "Elemental Dig"]]
		},
		"subclassfeature3.2" : {
			name : "Novice Forms",
			source : ["ITLOTL", 32],
			minlevel : 3,
			description : desc([
				"I learn two 1st-level lacing forms of my chosen element.",
				"I can initiate each of these forms once per short or long rest."
			]),
		},
		"subclassfeature9" : {
			name : "Elemental Assist",
			source : ["ITLOTL", 32],
			minlevel : 9,
			description : desc([
				"I can use the Help action as a bonus action.",
				"When I use the Help action to aid an ally in attacking a creature,",
				"the target can be within 30 ft of me, if it can see or hear me."
			]),
			action : [["bonus action", "Help"]]
		},
		"subclassfeature9.1" : {
			name : "Intermediate Forms",
			source : ["ITLOTL", 32],
			minlevel : 9,
			description : desc([
				"I learn two 2nd-level lacing forms of my chosen element.",
				"I can initiate each of these forms once per short or long rest."
			]),
		},
		"subclassfeature13" : {
			name : "Strength in Numbers",
			source : ["ITLOTL", 32],
			minlevel : 13,
			description : desc([
				"I gain a bonus to Deception, Intimidation, and Persuasion checks.",
				"The bonus equals the number of allies within 10 ft of me (max = my prof. bonus).",
				"I can also use Wisdom instead of Charisma for these skill checks."
			])
		},
		"subclassfeature17" : {
			name : "Superior Forms",
			source : ["ITLOTL", 32],
			minlevel : 17,
			description : desc([
				"I learn two 3rd-level lacing forms of my chosen element.",
				"I can initiate each of these forms once per short or long rest."
			]),
		},
	}
});
//Classes
ClassList["lacer"] = {
	regExpSearch : /^(?=.*lacer).*$/i,
	name : "Lacer",
	source : ["ITLOTL", 22],
	primaryAbility : "Strength or Dexterity",
	prereqs : "Strength 13 or Dexterity 13",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Str", "Dex"],
	skillstxt : {
		primary : "Choose two from Acrobatics, Arcana, Athletics, Insight, Intimidation, Medicine, and Survival."
	},
	armorProfs : {
		primary : [true, true, false, true], // light, medium, heavy, shields
		secondary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false], // simple, martial
	},
	equipment : "Lacer starting equipment:" + 
		"\n \u2022 (a) leather armor or (b) scale mail;" +
		"\n \u2022 (a) a scimitar, (b) a quarterstaff, (c) a mace, or (d) a rapier;" +
		"\n \u2022 (a) a dungeoneer's pack or (b) an explorer's pack." +
		"\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and background's starting equipment.",
	subclasses : ["Elemental Arts", []], // This is where you would list the subclass names once added
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature1" : {
			name : "Chosen Element",
			source : ["ITLOTL", 23],
			minlevel : 1,
			description : desc("I must choose an element: Fire, Air, Water, or Earth. This determines my ki ability and bonus proficiencies."),
		},
		"elemental strike" : {
			name : "Elemental Strike",
			source : ["ITLOTL", 24],
			minlevel : 1,
			description : desc([
				"I can blast opponents with an elemental strike as a ranged weapon attack.",
				"It deals bludgeoning damage. I don't suffer disadvantage for being within 5 ft of a hostile,",
				"nor for attacking a prone target within 20 ft. I can use Str instead of Dex for the rolls.",
				"When I take the Attack action with a proficient weapon, I can make one strike as a bonus action.",
				"I can choose to leave a target unconscious instead of killing them with this strike."
			]),
			action : ["bonus action", " (with Attack action)"],
			additional : levels.map(function (n) {
				return "1d" + (n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12);
			}),
			weaponsAdd : ["Elemental Strike"],
			weaponOptions : {
				regExpSearch : /^(?=.*elemental)(?=.*strike).*$/i,
				name : "Elemental Strike",
				source : ["ITLOTL", 24],
				ability : 1, // MPMB uses 1 for Strength, but player can swap
				type : "Simple",
				damage : [1, 6, "bludgeoning"],
				range : "20/60 ft",
				description : "Can use Str or Dex; No disadv. from 5 ft hostiles or prone targets in 20 ft.",
				abilitytodamage : true
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.WeaponName === "elemental strike" && classes.known.lacer && classes.known.lacer.level) {
							fields.Damage_Die = "1d" + (classes.known.lacer.level < 5 ? 6 : classes.known.lacer.level < 11 ? 8 : classes.known.lacer.level < 17 ? 10 : 12);
						}
					},
					"My Elemental Strike damage die increases as I gain Lacer levels."
				]
			}
		},
		"ki" : {
			name : "Ki",
			source : ["ITLOTL", 24],
			minlevel : 1,
			description : desc([
				"I have a pool of ki points that I can spend to fuel ki features and lacing forms.",
				"I start knowing Deflection, Power Blow, and Surprising Angle.",
				"I regain all expended ki points after a short or long rest (30 min of meditation)."
			]),
			usages : [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15, 15, 16],
			recovery : "short rest",
			extraname : "Ki Feature",
			"deflection" : {
				name : "Deflection",
				extraname : "Ki Feature",
				description : "As a reaction when taking damage from a strike/form/spell, I can spend 1 ki to reduce the damage by 1d10 + my ki modifier + my lacer level."
			},
			"power blow" : {
				name : "Power Blow",
				extraname : "Ki Feature",
				description : "When I hit with an elemental strike, I can spend 1 ki point to force a Str save or push the target 10 ft away."
			},
			"surprising angle" : {
				name : "Surprising Angle",
				extraname : "Ki Feature",
				description : "When making an elemental strike, I can spend 1 ki to ignore cover (except total cover)."
			},
			autoSelectExtrachoices: [{
                extrachoice: "deflection"
            }, {
                extrachoice: "power blow"
            }, {
                extrachoice: "suprising angle"
            }],
		},
		"fighting style" : {
			name : "Fighting Style",
			source : ["ITLOTL", 25],
			minlevel : 2,
			description : desc("Choose a Fighting Style using the \"Choose Feature\" button above."),
			choices : ["Archery", "Defense", "Power Strikes", "Superior Range"],
			"archery" : {
				name : "Archery Fighting Style",
				description: " I gain a +2 bonus to attack rolls I make with Ranged weapons.",
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
                        },
                        "My ranged weapons get a +2 bonus on the To Hit."
                    ]
                }
            },
			"defense" : {
				name : "Defense Fighting Style",
				description: " While I'm wearing Light, Medium, or Heavy armor, I gain a +1 bonus to Armor Class.",
                extraAC: {
                    name: "Defense Fighting Style", // necessary for features referring to fighting style properties directly
                    mod: 1,
                    text: "I gain a +1 bonus to AC while wearing armor.",
                    stopeval: function(v) {
                        return !v.wearingArmor;
                    }
                },
            },
			"power strikes" : {
				name : "Power Strikes Fighting Style",
				description : desc("When I roll a 1 or 2 on a damage die for my elemental strike, I can reroll the die and must use the new roll.")
			},
			"superior range" : {
				name : "Superior Range Fighting Style",
				description : desc("The range of my elemental strike is increased to 30/90 ft.")
			}
		},
		"lacing" : {
			name : "Lacing",
			source : ["ITLOTL", 25],
			minlevel : 2,
			description : desc([
				"I can initiate lacing forms by spending Ki points.",
				"Forms are ki features. I can spend additional ki points to enhance forms."
			])
		},
		"prana burst" : {
			name : "Prana Burst",
			source : ["ITLOTL", 25],
			minlevel : 2,
			description : desc([
				"When I hit a creature with an elemental strike, I can expend 1 ki point to deal an extra 1d8 damage.",
				"I can spend additional ki points on this at levels 5, 11, and 17 (max +1d8 per extra point)."
			])
		},
		"matter skandha" : {
			name : "Matter Skandha",
			source : ["ITLOTL", ""],
			minlevel : 3,
			description : desc('Choose the elemental manifestation of your Matter Skandha using the "Choose Feature" button above.'),
			choices : ["Air", "Earth", "Fire", "Water"],
			"air" : {
				name : "Matter Skandha: Air",
				description : desc([
					"As a reaction when subject to a melee weapon attack, I can spend 2 ki points.",
					"I take the Disengage action and move up to half my speed, avoiding the attack."
				]),
				action : [["reaction", "Matter Skandha (2 ki)"]]
			},
			"earth" : {
				name : "Matter Skandha: Earth",
				description : desc([
					"As a reaction when I am hit with an attack, I can spend 1 ki point.",
					"I gain a bonus to AC equal to my Charisma modifier until the start of my next turn.",
					"This bonus applies to the triggering attack as well."
				]),
				action : [["reaction", "Matter Skandha (1 ki)"]]
			},
			"fire" : {
				name : "Matter Skandha: Fire",
				description : desc([
					"When I successfully attack an enemy, I can spend 2 ki points to force a Dex save.",
					"On a failed save, the enemy is knocked prone.",
					"If knocked prone this way, it has disadvantage on its first attack before the end of its next turn."
				])
			},
			"water" : {
				name : "Matter Skandha: Water",
				description : desc([
					"I can spend 1 ki point to grapple a target within 20 ft (requires 1 free hand).",
					"I can use Wisdom (Athletics) instead of Strength for this grapple.",
					"While grappling them, I can use my movement (halved) to move them anywhere within range."
				]),
				action : [["action", "Matter Skandha Grapple (1 ki)"]]
			}
		},
		"push it" : {
			name : "Push It",
			source : ["ITLOTL", 26],
			minlevel : 7,
			description : desc([
				"As a bonus action, I can regain 2 ki points. I must make a DC 10 Con save or suffer 1 level of exhaustion.",
				"The DC increases by 5 each time I use this. It resets to 10 on a short/long rest."
			]),
			action : ["bonus action", ""]
		},
		"sensation skandha" : {
			name : "Sensation Skandha",
			source : ["ITLOTL", 26],
			minlevel : 7,
			description : desc('Choose my element for the Sensation Skandha using the "Choose Feature" button.'),
			choices : ["Fire", "Air", "Water", "Earth"],
			"fire" : {
				name : "Sensation Skandha: Fire",
				description : desc("When I make my first elemental attack on my turn, I can attack recklessly (Adv. on elemental attacks, but attacks against me have Adv. until end of turn).")
			},
			"air" : {
				name : "Sensation Skandha: Air",
				description : desc("When I make a Dex save for half damage, I take no damage on a success and half on a failure."),
				savetxt : { text : ["Dex save vs area effects: fail \u2014 half dmg, success \u2014 no dmg"] }
			},
			"water" : {
				name : "Sensation Skandha: Water",
				description : desc("I gain a 30 ft swim speed. Ice/snow are not difficult terrain. I have Adv. on elemental strikes if both my target and I are underwater."),
				speed : { swim : { spd : 30, enc : 20 } }
			},
			"earth" : {
				name : "Sensation Skandha: Earth",
				description : desc("When an attacker I can see hits me, I can use my reaction to halve the attack's damage against me."),
				action : ["reaction", " (halve damage)"]
			}
		},
		"cognition skandha" : {
			name : "Cognition Skandha",
			source : ["ITLOTL", 26],
			minlevel : 11,
			description : desc('Choose my element for the Cognition Skandha using the "Choose Feature" button.'),
			choices : ["Fire", "Air", "Water", "Earth"],
			"fire" : {
				name : "Cognition Skandha: Fire",
				description : desc("Adv. on saves vs extreme heat. As a reaction when a creature strikes an ally within 20 ft, I can make an opportunity attack with my elemental strike vs that creature."),
				action : ["reaction", " (attack vs ally within 20 ft)"],
				savetxt : { adv_vs : ["extreme heat"] }
			},
			"air" : {
				name : "Cognition Skandha: Air",
				description : desc("I am acclimated to altitudes up to 20,000 ft. If I can hear, I am aware of the location of hidden/invisible creatures within 60 ft."),
				vision : [["Awareness (hidden/invisible, if able to hear)", 60]]
			},
			"water" : {
				name : "Cognition Skandha: Water",
				description : desc("Adv. on saves vs extreme cold. I can spend 1 ki point to take the Help action as a bonus action for an ally attacking a target within 20 ft not behind total cover."),
				action : ["bonus action", " (Help, 1 ki point)"],
				savetxt : { adv_vs : ["extreme cold"] }
			},
			"earth" : {
				name : "Cognition Skandha: Earth",
				description : desc("I'm unaffected by heavy precipitation and make Perception checks normally. I cannot be surprised by creatures touching the ground within 30 ft.")
			}
		},
		"volition skandha" : {
			name : "Volition Skandha",
			source : ["ITLOTL", 26],
			minlevel : 15,
			description : desc('Choose my element for the Volition Skandha using the "Choose Feature" button.'),
			choices : ["Fire", "Air", "Water", "Earth"],
			"fire" : {
				name : "Volition Skandha: Fire",
				description : desc("When I am prone, I can stand up using only 5 ft of movement.")
			},
			"air" : {
				name : "Volition Skandha: Air",
				description : desc("I suffer no frailty of old age and can't be aged magically, but can still die of old age.")
			},
			"water" : {
				name : "Volition Skandha: Water",
				description : desc("I can use Wisdom in place of Charisma for Deception, Intimidation, Performance, and Persuasion checks.")
			},
			"earth" : {
				name : "Volition Skandha: Earth",
				description : desc("When I make an Arcana, History, Nature, or Religion check related to stonework, earthlacing, or earth spells, I add double my proficiency bonus.")
			}
		},
		"discernment skandha" : {
			name : "Discernment Skandha",
			source : ["ITLOTL", 26],
			minlevel : 20,
			description : desc('Choose my element for the Discernment Skandha using the "Choose Feature" button.'),
			choices : ["Fire", "Air", "Water", "Earth"],
			"fire" : {
				name : "Discernment Skandha: Fire",
				description : desc("When I make an elemental strike as a bonus action, I can spend 1 ki point to immediately make another as part of the same bonus action.")
			},
			"air" : {
				name : "Discernment Skandha: Air",
				description : desc("As a reaction when an attacker I can see hits me with a ranged attack, I can force them to reroll and use the second result."),
				action : ["reaction", " (force ranged reroll)"]
			},
			"water" : {
				name : "Discernment Skandha: Water",
				description : desc("I can spend 1 ki point to not be surprised. I have Adv. on attacks in any combat round where a creature is surprised, and targets have Disadv. on saves vs me.")
			},
			"earth" : {
				name : "Discernment Skandha: Earth",
				description : desc("I gain immunity to nonmagical bludgeoning damage and resistance to magical bludgeoning damage."),
				dmgres : ["Bludgeoning (magical)"],
				savetxt : { immune : ["Bludgeoning (nonmagical)"] }
			},
		},
	}
};
//Lacer Subclasses
//Air
AddSubClass("lacer", "ten animal air", {
	regExpSearch : /^(?=.*ten)(?=.*animal)(?=.*air).*$/i,
	subname : "Ten Animal Arts (Air)",
	source : ["ITLOTL", 27],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells : ["", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Airlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Air",
			minlevel : 1,
			source : ["ITLOTL", 23],
			description : desc("I am an airlacer. My ki ability is Wisdom. I gain proficiency in Acrobatics, Blowguns, and Shanzi."),
			skills : ["Acrobatics"],
			weaponProfs : [false, false, ["blowgun", "shanzi"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic airlacing"],
				selection : ["basic airlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Animal Style",
			source : ["ITLOTL", 27],
			minlevel : 3,
			description : desc('Choose an Animal Style using the "Choose Feature" button above.'),
			choices : ["Pigmonkey Swing", "Tapirat in the Grass", "Turtleduck Shell", "Wing of the Peacrane"],
			"pigmonkey swing" : {
				name : "Pigmonkey Swing",
				description : desc("I can move through the spaces of hostile creatures, regardless of their size.")
			},
			"tapirat in the grass" : {
				name : "Tapirat in the Grass",
				description : desc("I can use the Hide action as a bonus action on my turn."),
				action : [["bonus action", "Hide"]]
			},
			"turtleduck shell" : {
				name : "Turtleduck Shell",
				description : desc("My base AC becomes 13 + my Dexterity modifier if I am not wearing armor."),
				armorOptions : [{
					regExpSearch : /turtleduck shell/i,
					name : "Turtleduck Shell",
					source : ["ITLOTL", 27],
					ac : 13,
					dex : true,
					stealthdis : false
				}],
				armorAdd : "Turtleduck Shell"
			},
			"wing of the peacrane" : {
				name : "Wing of the Peacrane",
				description : desc("I can use my Deflection ki feature without needing to spend ki points.")
			}
		},
		"subclassfeature6" : {
			name : "Bestial Strike",
			source : ["ITLOTL", 27],
			minlevel : 6,
			description : desc('Choose a Bestial Strike using the "Choose Feature" button above.'),
			choices : ["Dragon Breath", "Fangs of the Snakamander", "Talpatian Venom"],
			"dragon breath" : {
				name : "Dragon Breath",
				description : desc("When I make a successful elemental strike, I can spend 1 ki point. Each other creature within 5 ft of the target must make a Dexterity save or take damage equal to my ki ability modifier (min 1).")
			},
			"fangs of the snakamander" : {
				name : "Fangs of the Snakamander",
				description : desc("When I make a successful elemental strike, I can spend 1 ki point. The target must make a Constitution save or take the strike's damage again at the beginning of its next turn.")
			},
			"talpatian venom" : {
				name : "Talpatian Venom",
				description : desc("When I make a successful elemental strike, I can spend 2 ki points. The target must make a Constitution save or be incapacitated until the beginning of my next turn.")
			}
		},
		"subclassfeature10" : {
			name : "Savage Fighter",
			source : ["ITLOTL", 27],
			minlevel : 10,
			description : desc("I can choose a second option from the Fighting Style class feature."),
			choices : ["Archery", "Defense", "Power Strikes", "Superior Range"],
			"archery" : {
				name : "Archery Fighting Style",
				description: " I gain a +2 bonus to attack rolls I make with Ranged weapons.",
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
                        },
                        "My ranged weapons get a +2 bonus on the To Hit."
                    ]
                }
            },
			"defense" : {
				name : "Defense Fighting Style",
				description: " While I'm wearing Light, Medium, or Heavy armor, I gain a +1 bonus to Armor Class.",
                extraAC: {
                    name: "Defense Fighting Style", // necessary for features referring to fighting style properties directly
                    mod: 1,
                    text: "I gain a +1 bonus to AC while wearing armor.",
                    stopeval: function(v) {
                        return !v.wearingArmor;
                    }
                },
            },
			"power strikes" : {
				name : "Power Strikes Fighting Style",
				description : desc("When I roll a 1 or 2 on a damage die for my elemental strike, I can reroll the die and must use the new roll.")
			},
			"superior range" : {
				name : "Superior Range Fighting Style",
				description : desc("The range of my elemental strike is increased to 30/90 ft.")
			}
		},
		"subclassfeature14" : {
			name : "Animalian Arts",
			source : ["ITLOTL", 27],
			minlevel : 14,
			description : desc("Whenever I make an ability check that lets me add my proficiency bonus and I roll a 9 or lower, I can spend 1 ki point to treat the roll as a 10.")
		},
		"subclassfeature18" : {
			name : "Beast Mastery",
			source : ["ITLOTL", 27],
			minlevel : 18,
			description : desc('Choose a Beast Mastery using the "Choose Feature" button above.'),
			choices : ["Armor of the Liondillo", "Jaws of the Whiskergator", "Rise of the Phoenix"],
			"armor of the liondillo" : {
				name : "Armor of the Liondillo",
				description : desc("As a reaction when attacked, I can spend 1 ki point to gain resistance against the damage type(s) of the triggering attack until the beginning of my next turn."),
				action : [["reaction", "Armor of the Liondillo (1 ki)"]]
			},
			"jaws of the whiskergator" : {
				name : "Jaws of the Whiskergator",
				description : desc("I can spend 3 ki points on my turn. Until the beginning of my next turn, the damage of my elemental strike (base damage only) deals its maximum damage.")
			},
			"rise of the phoenix" : {
				name : "Rise of the Phoenix",
				description : desc("Any time I am reduced to 0 hit points but not killed outright, I can spend 1 ki point to drop to 1 hit point instead. Each subsequent use costs 1 additional ki point, resetting after a long rest.")
			}
		}
	}
});
AddSubClass("lacer", "eight palm", {
	regExpSearch : /^(?=.*eight)(?=.*palm).*$/i,
	subname : "Eight Palm Arts (Air)",
	source : ["ITLOTL", 28],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells : ["", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Airlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Air",
			minlevel : 1,
			source : ["ITLOTL", 23],
			description : desc("I am an airlacer. My ki ability is Wisdom. I gain proficiency in Acrobatics, Blowguns, and Shanzi."),
			skills : ["Acrobatics"],
			weaponProfs : [false, false, ["blowgun", "shanzi"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic airlacing"],
				selection : ["basic airlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Fancy Dancer",
			source : ["ITLOTL", 28],
			minlevel : 3,
			description : desc([
				"When a melee attack hits me, I can spend 1 ki point to use Deflection against it",
				"If I reduce the damage to 0, I can 'circle walk' around the target",
				"While circle walking, the target has disadvantage on attacks against me",
				"I can use my reaction to move my speed, as long as I stay within 5 ft of the target",
				"Circle walking ends immediately if I am not within 5 ft of the target for any reason"
			]),
			action : [["reaction", "Circle Walk (move)"]]
		},
		"subclassfeature6" : {
			name : "Leaf in the Wind",
			source : ["ITLOTL", 28],
			minlevel : 6,
			description : desc("My movement speed increases by 10 ft, and my jump distance is doubled."),
			speed : { allModes : "+10" }
		},
		"subclassfeature10" : {
			name : "Blind Monk",
			source : ["ITLOTL", ""],
			minlevel : 10,
			description : desc([
				"The blinded condition has no effect on me unless I am also deafened",
				"As a reaction, I can spend 2 ki points to escape any grapple or restrained effect"
			]),
			action : [["reaction", "Escape Grapple/Restrained (2 ki)"]],
			savetxt : { immune : ["blinded (unless deafened)"] }
		},
		"subclassfeature14" : {
			name : "Twinkle Toes",
			source : ["ITLOTL", 28],
			minlevel : 14,
			description : desc("I gain proficiency in all Dexterity ability checks (including initiative rolls). If I already have proficiency in any of these, my proficiency bonus is doubled for those checks."),
			skills: [
				["Acrobatics", "increment"],
				["Sleight of Hand", "increment"],
				["Stealth", "increment"],
			],
			addMod : [
				{ type : "skill", field : "Init", mod : "prof", text : "I gain proficiency in Initiative rolls." }
			]
		},
		"subclassfeature18" : {
			name : "Air Master",
			source : ["ITLOTL", 28],
			minlevel : 18,
			description : desc([
				"I take no falling damage as long as I'm not incapacitated or restrained",
				"I gain a flying speed equal to my movement speed",
				"I can spend 2 ki points to double my flying speed for 1 minute"
			]),
			speed : { fly : { spd : "walk", enc : "walk" } }
		}
	}
});
//Earth 
AddSubClass("lacer", "ten animal earth", {
	regExpSearch : /^(?=.*ten)(?=.*animal)(?=.*earth).*$/i,
	subname : "Ten Animal Arts (Earth)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells : ["", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Earthlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Earth",
			minlevel : 1,
			source : ["ITLOTL", 23],
			description : desc("I am an earthlacer. My ki ability is Charisma. I gain proficiency in Athletics, Mauls, and Warhammers."),
			skills : ["Athletics"],
			weaponProfs : [false, false, ["maul", "warhammer"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic earthlacing"],
				selection : ["basic earthlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Animal Style",
			source : ["ITLOTL", 27],
			minlevel : 3,
			description : desc('Choose an Animal Style using the "Choose Feature" button above.'),
			choices : ["Pigmonkey Swing", "Tapirat in the Grass", "Turtleduck Shell", "Wing of the Peacrane"],
			"pigmonkey swing" : {
				name : "Pigmonkey Swing",
				description : desc("I can move through the spaces of hostile creatures, regardless of their size.")
			},
			"tapirat in the grass" : {
				name : "Tapirat in the Grass",
				description : desc("I can use the Hide action as a bonus action on my turn."),
				action : [["bonus action", "Hide"]]
			},
			"turtleduck shell" : {
				name : "Turtleduck Shell",
				description : desc("My base AC becomes 13 + my Dexterity modifier if I am not wearing armor."),
				armorOptions : [{
					regExpSearch : /turtleduck shell/i,
					name : "Turtleduck Shell",
					source : ["ITLOTL", 27],
					ac : 13,
					dex : true,
					stealthdis : false
				}],
				armorAdd : "Turtleduck Shell"
			},
			"wing of the peacrane" : {
				name : "Wing of the Peacrane",
				description : desc("I can use my Deflection ki feature without needing to spend ki points.")
			}
		},
		"subclassfeature6" : {
			name : "Bestial Strike",
			source : ["ITLOTL", 27],
			minlevel : 6,
			description : desc('Choose a Bestial Strike using the "Choose Feature" button above.'),
			choices : ["Dragon Breath", "Fangs of the Snakamander", "Talpatian Venom"],
			"dragon breath" : {
				name : "Dragon Breath",
				description : desc("When I make a successful elemental strike, I can spend 1 ki point. Each other creature within 5 ft of the target must make a Dexterity save or take damage equal to my ki ability modifier (min 1).")
			},
			"fangs of the snakamander" : {
				name : "Fangs of the Snakamander",
				description : desc("When I make a successful elemental strike, I can spend 1 ki point. The target must make a Constitution save or take the strike's damage again at the beginning of its next turn.")
			},
			"talpatian venom" : {
				name : "Talpatian Venom",
				description : desc("When I make a successful elemental strike, I can spend 2 ki points. The target must make a Constitution save or be incapacitated until the beginning of my next turn.")
			}
		},
		"subclassfeature10" : {
			name : "Savage Fighter",
			source : ["ITLOTL", 27],
			minlevel : 10,
			description : desc("I can choose a second option from the Fighting Style class feature."),
			choices : ["Archery", "Defense", "Power Strikes", "Superior Range"],
			"archery" : {
				name : "Archery Fighting Style",
				description: " I gain a +2 bonus to attack rolls I make with Ranged weapons.",
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
                        },
                        "My ranged weapons get a +2 bonus on the To Hit."
                    ]
                }
            },
			"defense" : {
				name : "Defense Fighting Style",
				description: " While I'm wearing Light, Medium, or Heavy armor, I gain a +1 bonus to Armor Class.",
                extraAC: {
                    name: "Defense Fighting Style", // necessary for features referring to fighting style properties directly
                    mod: 1,
                    text: "I gain a +1 bonus to AC while wearing armor.",
                    stopeval: function(v) {
                        return !v.wearingArmor;
                    }
                },
            },
			"power strikes" : {
				name : "Power Strikes Fighting Style",
				description : desc("When I roll a 1 or 2 on a damage die for my elemental strike, I can reroll the die and must use the new roll.")
			},
			"superior range" : {
				name : "Superior Range Fighting Style",
				description : desc("The range of my elemental strike is increased to 30/90 ft.")
			}
		},
		"subclassfeature14" : {
			name : "Animalian Arts",
			source : ["ITLOTL", 27],
			minlevel : 14,
			description : desc("Whenever I make an ability check that lets me add my proficiency bonus and I roll a 9 or lower, I can spend 1 ki point to treat the roll as a 10.")
		},
		"subclassfeature18" : {
			name : "Beast Mastery",
			source : ["ITLOTL", 27],
			minlevel : 18,
			description : desc('Choose a Beast Mastery using the "Choose Feature" button above.'),
			choices : ["Armor of the Liondillo", "Jaws of the Whiskergator", "Rise of the Phoenix"],
			"armor of the liondillo" : {
				name : "Armor of the Liondillo",
				description : desc("As a reaction when attacked, I can spend 1 ki point to gain resistance against the damage type(s) of the triggering attack until the beginning of my next turn."),
				action : [["reaction", "Armor of the Liondillo (1 ki)"]]
			},
			"jaws of the whiskergator" : {
				name : "Jaws of the Whiskergator",
				description : desc("I can spend 3 ki points on my turn. Until the beginning of my next turn, the damage of my elemental strike (base damage only) deals its maximum damage.")
			},
			"rise of the phoenix" : {
				name : "Rise of the Phoenix",
				description : desc("Any time I am reduced to 0 hit points but not killed outright, I can spend 1 ki point to drop to 1 hit point instead. Each subsequent use costs 1 additional ki point, resetting after a long rest.")
			}
		}
	}
});
AddSubClass("lacer", "western mantis", {
	regExpSearch : /^(?=.*western)(?=.*mantis).*$/i,
	subname : "Western Mantis Arts (Earth)",
	source : ["ITLOTL", 29],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells : ["", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Earthlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Earth",
			minlevel : 1,
			source : ["ITLOTL", 23],
			description : desc("I am an earthlacer. My ki ability is Charisma. I gain proficiency in Athletics, Mauls, and Warhammers."),
			skills : ["Athletics"],
			weaponProfs : [false, false, ["maul", "warhammer"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic earthlacing"],
				selection : ["basic earthlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Neutral Jing",
			source : ["ITLOTL", 29],
			minlevel : 3,
			description : desc("Whenever I take the Ready action, I am also under the effect of the Dodge action until I use my reaction or until the beginning of my next turn.")
		},
		"subclassfeature6" : {
			name : "Sure-Footed",
			source : ["ITLOTL", 29],
			minlevel : 6,
			description : desc("As a reaction any time I would be moved from my space or knocked prone, I can spend 1 ki point to negate the movement or prone effect. I still suffer any other effects of the action."),
			action : [["reaction", "Sure-Footed (1 ki)"]]
		},
		"subclassfeature10" : {
			name : "Earth's Embrace",
			source : ["ITLOTL", 29],
			minlevel : 10,
			description : desc("I gain tremorsense to a range of 20 feet."),
			vision : [["Tremorsense", 20]]
		},
		"subclassfeature14" : {
			name : "Badger Glide",
			source : ["ITLOTL", 29],
			minlevel : 14,
			description : desc("As a bonus action, I can spend 1 ki point to gain a burrow speed equal to my movement speed for 1 minute. I can even burrow through solid rock at this speed."),
			action : [["bonus action", "Badger Glide (1 ki)"]]
		},
		"subclassfeature18" : {
			name : "Precise Step",
			source : ["ITLOTL", 29],
			minlevel : 18,
			description : desc([
				"I am immune to the effects of critical hits; any critical hit against me is treated as a normal attack.",
				"When I score a critical hit, I can roll one of the damage dice an additional time and add it to the extra damage."
			])
		}
	}
});
//Fire
AddSubClass("lacer", "ten animal fire", {
	regExpSearch : /^(?=.*ten)(?=.*animal)(?=.*fire).*$/i,
	subname : "Ten Animal Arts (Fire)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells : ["", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Firelacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Fire",
			minlevel : 1,
			source : ["ITLOTL", 23],
			description : desc("I am a firelacer. My ki ability is Charisma. I gain proficiency in Acrobatics, Scimitars, and Shortswords."),
			skills : ["Acrobatics"],
			weaponProfs : [false, false, ["scimitar", "shortsword"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic firelacing"],
				selection : ["basic firelacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Animal Style",
			source : ["ITLOTL", 27],
			minlevel : 3,
			description : desc('Choose an Animal Style using the "Choose Feature" button above.'),
			choices : ["Pigmonkey Swing", "Tapirat in the Grass", "Turtleduck Shell", "Wing of the Peacrane"],
			"pigmonkey swing" : {
				name : "Pigmonkey Swing",
				description : desc("I can move through the spaces of hostile creatures, regardless of their size.")
			},
			"tapirat in the grass" : {
				name : "Tapirat in the Grass",
				description : desc("I can use the Hide action as a bonus action on my turn."),
				action : [["bonus action", "Hide"]]
			},
			"turtleduck shell" : {
				name : "Turtleduck Shell",
				description : desc("My base AC becomes 13 + my Dexterity modifier if I am not wearing armor."),
				armorOptions : [{
					regExpSearch : /turtleduck shell/i,
					name : "Turtleduck Shell",
					source : ["ITLOTL", 27],
					ac : 13,
					dex : true,
					stealthdis : false
				}],
				armorAdd : "Turtleduck Shell"
			},
			"wing of the peacrane" : {
				name : "Wing of the Peacrane",
				description : desc("I can use my Deflection ki feature without needing to spend ki points.")
			}
		},
		"subclassfeature6" : {
			name : "Bestial Strike",
			source : ["ITLOTL", 27],
			minlevel : 6,
			description : desc('Choose a Bestial Strike using the "Choose Feature" button above.'),
			choices : ["Dragon Breath", "Fangs of the Snakamander", "Talpatian Venom"],
			"dragon breath" : {
				name : "Dragon Breath",
				description : desc("When I make a successful elemental strike, I can spend 1 ki point. Each other creature within 5 ft of the target must make a Dexterity save or take damage equal to my ki ability modifier (min 1).")
			},
			"fangs of the snakamander" : {
				name : "Fangs of the Snakamander",
				description : desc("When I make a successful elemental strike, I can spend 1 ki point. The target must make a Constitution save or take the strike's damage again at the beginning of its next turn.")
			},
			"talpatian venom" : {
				name : "Talpatian Venom",
				description : desc("When I make a successful elemental strike, I can spend 2 ki points. The target must make a Constitution save or be incapacitated until the beginning of my next turn.")
			}
		},
		"subclassfeature10" : {
			name : "Savage Fighter",
			source : ["ITLOTL", 27],
			minlevel : 10,
			description : desc("I can choose a second option from the Fighting Style class feature."),
			choices : ["Archery", "Defense", "Power Strikes", "Superior Range"],
			"archery" : {
				name : "Archery Fighting Style",
				description: " I gain a +2 bonus to attack rolls I make with Ranged weapons.",
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
                        },
                        "My ranged weapons get a +2 bonus on the To Hit."
                    ]
                }
            },
			"defense" : {
				name : "Defense Fighting Style",
				description: " While I'm wearing Light, Medium, or Heavy armor, I gain a +1 bonus to Armor Class.",
                extraAC: {
                    name: "Defense Fighting Style", // necessary for features referring to fighting style properties directly
                    mod: 1,
                    text: "I gain a +1 bonus to AC while wearing armor.",
                    stopeval: function(v) {
                        return !v.wearingArmor;
                    }
                },
            },
			"power strikes" : {
				name : "Power Strikes Fighting Style",
				description : desc("When I roll a 1 or 2 on a damage die for my elemental strike, I can reroll the die and must use the new roll.")
			},
			"superior range" : {
				name : "Superior Range Fighting Style",
				description : desc("The range of my elemental strike is increased to 30/90 ft.")
			}
		},
		"subclassfeature14" : {
			name : "Animalian Arts",
			source : ["ITLOTL", 27],
			minlevel : 14,
			description : desc("Whenever I make an ability check that lets me add my proficiency bonus and I roll a 9 or lower, I can spend 1 ki point to treat the roll as a 10.")
		},
		"subclassfeature18" : {
			name : "Beast Mastery",
			source : ["ITLOTL", 27],
			minlevel : 18,
			description : desc('Choose a Beast Mastery using the "Choose Feature" button above.'),
			choices : ["Armor of the Liondillo", "Jaws of the Whiskergator", "Rise of the Phoenix"],
			"armor of the liondillo" : {
				name : "Armor of the Liondillo",
				description : desc("As a reaction when attacked, I can spend 1 ki point to gain resistance against the damage type(s) of the triggering attack until the beginning of my next turn."),
				action : [["reaction", "Armor of the Liondillo (1 ki)"]]
			},
			"jaws of the whiskergator" : {
				name : "Jaws of the Whiskergator",
				description : desc("I can spend 3 ki points on my turn. Until the beginning of my next turn, the damage of my elemental strike (base damage only) deals its maximum damage.")
			},
			"rise of the phoenix" : {
				name : "Rise of the Phoenix",
				description : desc("Any time I am reduced to 0 hit points but not killed outright, I can spend 1 ki point to drop to 1 hit point instead. Each subsequent use costs 1 additional ki point, resetting after a long rest.")
			}
		}
	}
});
AddSubClass("lacer", "eastern shaolin", {
	regExpSearch : /^(?=.*eastern)(?=.*shaolin).*$/i,
	subname : "Eastern Shaolin Arts (Fire)",
	source : ["ITLOTL", 28],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells : ["", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Firelacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Fire",
			minlevel : 1,
			source : ["ITLOTL", 23],
			description : desc("I am a firelacer. My ki ability is Charisma. I gain proficiency in Acrobatics, Scimitars, and Shortswords."),
			skills : ["Acrobatics"],
			weaponProfs : [false, false, ["scimitar", "shortsword"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic firelacing"],
				selection : ["basic firelacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Dancing Dragon",
			source : ["ITLOTL", 28],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can enter a stance that lasts until the start of my next turn",
				"I cannot enter the same stance on consecutive turns",
				"\u2022 Low Stance: Advantage on attack rolls against prone targets",
				"\u2022 High Stance: Advantage on Dexterity saving throws",
				"\u2022 Power Stance: Advantage on checks to shove or push a target"
			]),
			action : [["bonus action", "Stance (Low/High/Power)"]]
		},
		"subclassfeature6" : {
			name : "Draconic Power",
			source : ["ITLOTL", 28],
			minlevel : 6,
			description : desc("When I hit with an opportunity attack, I can spend 1 ki point to deal additional fire damage equal to my Charisma modifier.")
		},
		"subclassfeature10" : {
			name : "Draconic Presence",
			source : ["ITLOTL", 28],
			minlevel : 10,
			description : desc("If I fail a saving throw which causes me to become charmed or frightened, I can choose to succeed instead."),
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Wreathed in Flame",
			source : ["ITLOTL", 28],
			minlevel : 14,
			description : desc("I gain resistance to fire damage."),
			dmgres : ["Fire"]
		},
		"subclassfeature18" : {
			name : "True Fire",
			source : ["ITLOTL", 28],
			minlevel : 18,
			description : desc("Fire damage I initiate ignores resistance to fire damage and deals half damage to creatures with fire immunity.")
		}
	}
});
//Water
AddSubClass("lacer", "ten animal water", {
	regExpSearch : /^(?=.*ten)(?=.*animal)(?=.*water).*$/i,
	subname : "Ten Animal Arts (Water)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells : ["", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Waterlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Water",
			minlevel : 1,
			source : ["ITLOTL", 23],
			description : desc("I am a waterlacer. My ki ability is Wisdom. I gain proficiency in Athletics, Rapiers, and Whips."),
			skills : ["Athletics"],
			weaponProfs : [false, false, ["rapier", "whip"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic waterlacing"],
				selection : ["basic waterlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Animal Style",
			source : ["ITLOTL", 27],
			minlevel : 3,
			description : desc('Choose an Animal Style using the "Choose Feature" button above.'),
			choices : ["Pigmonkey Swing", "Tapirat in the Grass", "Turtleduck Shell", "Wing of the Peacrane"],
			"pigmonkey swing" : {
				name : "Pigmonkey Swing",
				description : desc("I can move through the spaces of hostile creatures, regardless of their size.")
			},
			"tapirat in the grass" : {
				name : "Tapirat in the Grass",
				description : desc("I can use the Hide action as a bonus action on my turn."),
				action : [["bonus action", "Hide"]]
			},
			"turtleduck shell" : {
				name : "Turtleduck Shell",
				description : desc("My base AC becomes 13 + my Dexterity modifier if I am not wearing armor."),
				armorOptions : [{
					regExpSearch : /turtleduck shell/i,
					name : "Turtleduck Shell",
					source : ["ITLOTL", 27],
					ac : 13,
					dex : true,
					stealthdis : false
				}],
				armorAdd : "Turtleduck Shell"
			},
			"wing of the peacrane" : {
				name : "Wing of the Peacrane",
				description : desc("I can use my Deflection ki feature without needing to spend ki points.")
			}
		},
		"subclassfeature6" : {
			name : "Bestial Strike",
			source : ["ITLOTL", 27],
			minlevel : 6,
			description : desc('Choose a Bestial Strike using the "Choose Feature" button above.'),
			choices : ["Dragon Breath", "Fangs of the Snakamander", "Talpatian Venom"],
			"dragon breath" : {
				name : "Dragon Breath",
				description : desc("When I make a successful elemental strike, I can spend 1 ki point. Each other creature within 5 ft of the target must make a Dexterity save or take damage equal to my ki ability modifier (min 1).")
			},
			"fangs of the snakamander" : {
				name : "Fangs of the Snakamander",
				description : desc("When I make a successful elemental strike, I can spend 1 ki point. The target must make a Constitution save or take the strike's damage again at the beginning of its next turn.")
			},
			"talpatian venom" : {
				name : "Talpatian Venom",
				description : desc("When I make a successful elemental strike, I can spend 2 ki points. The target must make a Constitution save or be incapacitated until the beginning of my next turn.")
			}
		},
		"subclassfeature10" : {
			name : "Savage Fighter",
			source : ["ITLOTL", 27],
			minlevel : 10,
			description : desc("I can choose a second option from the Fighting Style class feature."),
			choices : ["Archery", "Defense", "Power Strikes", "Superior Range"],
			"archery" : {
				name : "Archery Fighting Style",
				description: " I gain a +2 bonus to attack rolls I make with Ranged weapons.",
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
                        },
                        "My ranged weapons get a +2 bonus on the To Hit."
                    ]
                }
            },
			"defense" : {
				name : "Defense Fighting Style",
				description: " While I'm wearing Light, Medium, or Heavy armor, I gain a +1 bonus to Armor Class.",
                extraAC: {
                    name: "Defense Fighting Style", // necessary for features referring to fighting style properties directly
                    mod: 1,
                    text: "I gain a +1 bonus to AC while wearing armor.",
                    stopeval: function(v) {
                        return !v.wearingArmor;
                    }
                },
            },
			"power strikes" : {
				name : "Power Strikes Fighting Style",
				description : desc("When I roll a 1 or 2 on a damage die for my elemental strike, I can reroll the die and must use the new roll.")
			},
			"superior range" : {
				name : "Superior Range Fighting Style",
				description : desc("The range of my elemental strike is increased to 30/90 ft.")
			}
		},
		"subclassfeature14" : {
			name : "Animalian Arts",
			source : ["ITLOTL", 27],
			minlevel : 14,
			description : desc("Whenever I make an ability check that lets me add my proficiency bonus and I roll a 9 or lower, I can spend 1 ki point to treat the roll as a 10.")
		},
		"subclassfeature18" : {
			name : "Beast Mastery",
			source : ["ITLOTL", 27],
			minlevel : 18,
			description : desc('Choose a Beast Mastery using the "Choose Feature" button above.'),
			choices : ["Armor of the Liondillo", "Jaws of the Whiskergator", "Rise of the Phoenix"],
			"armor of the liondillo" : {
				name : "Armor of the Liondillo",
				description : desc("As a reaction when attacked, I can spend 1 ki point to gain resistance against the damage type(s) of the triggering attack until the beginning of my next turn."),
				action : [["reaction", "Armor of the Liondillo (1 ki)"]]
			},
			"jaws of the whiskergator" : {
				name : "Jaws of the Whiskergator",
				description : desc("I can spend 3 ki points on my turn. Until the beginning of my next turn, the damage of my elemental strike (base damage only) deals its maximum damage.")
			},
			"rise of the phoenix" : {
				name : "Rise of the Phoenix",
				description : desc("Any time I am reduced to 0 hit points but not killed outright, I can spend 1 ki point to drop to 1 hit point instead. Each subsequent use costs 1 additional ki point, resetting after a long rest.")
			}
		}
	}
});
AddSubClass("lacer", "moon", {
	regExpSearch : /^(?=.*moon).*$/i,
	subname : "Moon Arts (Water)",
	source : ["ITLOTL", 29],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells : ["", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Waterlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Water",
			minlevel : 1,
			source : ["ITLOTL", 23],
			description : desc("I am a waterlacer. My ki ability is Wisdom. I gain proficiency in Athletics, Rapiers, and Whips."),
			skills : ["Athletics"],
			weaponProfs : [false, false, ["rapier", "whip"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic waterlacing"],
				selection : ["basic waterlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Push and Pull",
			source : ["ITLOTL", 29],
			minlevel : 3,
			description : desc([
				"As a reaction when I or an ally within 5 ft are targeted by a melee weapon attack, I can spend 2 ki points",
				"The attacker makes a Dex save; if failed, I choose a new target for the attack within 5 ft of the attacker",
				"The attack is resolved normally against the new target, or I can choose to have it target no creatures"
			]),
			action : [["reaction", "Push and Pull (2 ki)"]]
		},
		"subclassfeature6" : {
			name : "Sink and Float",
			source : ["ITLOTL", 29],
			minlevel : 6,
			description : desc("I can take two reactions each round. I regain both reactions at the beginning of my turn.")
		},
		"subclassfeature10" : {
			name : "Life and Death",
			source : ["ITLOTL", 29],
			minlevel : 10,
			description : desc("Any healing I receive while near a natural body of water large enough to completely submerge myself in (like a river, lake, or sea) is automatically maximized.")
		},
		"subclassfeature14" : {
			name : "Moon and Ocean",
			source : ["ITLOTL", 29],
			minlevel : 14,
			description : desc("When I initiate a form, I can spend 1 ki point to protect a number of creatures up to my Wisdom modifier (minimum 1). Chosen creatures are completely protected and suffer no effects from the form.")
		},
		"subclassfeature18" : {
			name : "Eternal Dance",
			source : ["ITLOTL", 29],
			minlevel : 18,
			description : desc("I choose two 1st-level forms and one 2nd-level form I know. Whenever I initiate these forms, they are automatically initiated one level higher than normal without spending extra ki, up to my maximum form level.")
		}
	}
});

ClassList["samsari"] = {
	regExpSearch : /^(?=.*samsari).*$/i,
	name : "Samsari",
	source : ["ITLOTL", 34],
	primaryAbility : "Wisdom or Charisma",
	prereqs : "Wisdom 13 or Charisma 13",
	die : 6,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Wis", "Cha"],
	skillstxt : {
		primary : "Choose two from Animal Handling, Arcana, History, Insight, Medicine, Nature, Perception, and Religion."
	},
	weaponProfs : {
		primary : [false, false, ["mace", "quarterstaff", "shanzi", "spear"]],
		secondary : [false, false, ["quarterstaff"]]
	},
	toolProfs : {
		primary : ["Musical Instrument", 1],
		secondary : ["Musical Instrument", 1],
	},
	equipment : "Samsari starting equipment:" + 
		"\n \u2022 A spear -or- a quarterstaff;" +
		"\n \u2022 A mace -or- two shanzi;" +
		"\n \u2022 An explorer's pack -or- a scholar's pack;" +
		"\n \u2022 A musical instrument of your choice;" +
		"\n\nAlternatively, choose 3d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Path to Enlightenment", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features : {
		"subclassfeature1" : {
			name : "Chosen Element",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc([
				'Choose your element using the "Choose Feature" button above',
				"Once I choose an element, I cannot change it. This dictates my forms and my ki save DC",
				"\u2022 Fire & Earth: Charisma is my ki ability",
				"\u2022 Air & Water: Wisdom is my ki ability"
			]),
		},
		"basic lacing" : {
			name : "Basic Lacing & Elemental Bolt",
			source : ["ITLOTL", 35],
			minlevel : 1,
			weaponsAdd : ["Elemental Bolt"],
			weaponOptions : {
				regExpSearch : /^(?=.*elemental)(?=.*bolt).*$/i,
				name : "Elemental Bolt",
				source : ["ITLOTL", ""],
				list : "spell",
				ability : 5, // Defaults to Wis; use the "Spell" attack toggle to switch to Cha if Fire/Earth
				type : "Spell",
				damage : ["C", 6, "bludgeoning"],
				range : "60 ft",
				description : "Can target 2 creatures within 5 ft of each other; nonlethal (can leave unconscious on 0 HP)",
				abilitytodamage : false
			},
			description : desc([
				"I gain my element's Basic Lacing abilities",
				"I also learn Elemental Bolt. When reducing a creature to 0 HP with it, I can leave them unconscious instead of killing them"
			]),
			action : [["action", "Elemental Bolt"]]
		},
		"ki" : {
			name : "Ki & Lacing",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc([
				"I can spend ki points to initiate lacing forms and fuel ki features",
				"I know two 1st-level forms. I learn more forms as I level up (as per the Samsari table)",
				"I can spend extra ki to initiate a form at a higher level, up to my maximum form level",
				"I regain expended ki points when I complete a short or long rest (requires 30 min of meditation)"
			]),
			usages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery : "short rest"
		},
		"spirit guide" : {
			name : "Spirit Guide",
			source : ["ITLOTL", 35],
			minlevel : 2,
			description : desc([
				"When I take the Help action, I grant an ally advantage on their first attack roll vs a target I see",
				"I can spend 1 ki point to take the Help action as a bonus action",
				"I can also spend 1 ki point as a bonus action to gain the Help benefits myself, even if alone"
			]),
			action : [["bonus action", "Help (1 ki)"]]
		},
		"synergy" : {
			name : "Synergy",
			source : ["ITLOTL", 36],
			minlevel : 2,
			description : desc([
				"As a reaction when a willing creature within 30 ft casts a spell or form, I can enhance it",
				"Lacer Ally: Spend ki to increase the form level (up to my/their max form level, whichever is higher)",
				"Spellcaster Ally: Spend 2 ki per level to raise the spell level (up to their max spell level)"
			]),
			action : [["reaction", "Enhance Spell/Form"]]
		},
		"spiritual empathy" : {
			name : "Spiritual Empathy",
			source : ["ITLOTL", 36],
			minlevel : 3,
			description : desc([
				"I gain proficiency in Animal Handling, and double the proficiency bonus if I already have it",
				"I can use Charisma in place of Wisdom for my Animal Handling checks"
			]),
			skills : ["Animal Handling", "increment"]
		},
		"moment of clarity" : {
			name : "Moment of Clarity",
			source : ["ITLOTL", 36],
			minlevel : 7,
			description : desc("As a bonus action, I can recover ki points equal to my ki ability modifier (up to max)."),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest"
		},
		"ki infusion" : {
			name : "Ki Infusion",
			source : ["ITLOTL", 36],
			minlevel : 11,
			additional : ["", "", "", "", "", "", "", "", "", "", "6th level", "6th level", "7th level", "7th level", "8th level", "8th level", "9th level", "9th level", "9th level", "9th level"],
			description : desc("I can spend ki points to push my maximum form level beyond 5th level, as shown on the Samsari table.")
		},
		"form mastery" : {
			name : "Form Mastery",
			source : ["ITLOTL", 36],
			minlevel : 18,
			description : desc("I choose three 1st-level forms that I know. I can initiate them at 1st level without spending ki points.")
		},
		"spirit manifestation" : {
			name : "Spirit Manifestation",
			source : ["ITLOTL", 36],
			minlevel : 20,
			description : desc([
				"When I die, my spirit persists in the universe and I can move around as a ghostly form",
				"I can see/hear my original plane (up to 60 ft, gray vision) and travel to other planes (requires 8 hours)",
				"I can take an action to focus, making myself visible/able to speak to living creatures",
				"My manifestation counts as a body for magic that brings me back to life"
			])
		}
	}
};
//Samsari Subclasses
//Air 
AddSubClass("samsari", "path of the boatman air", {
	regExpSearch : /^(?=.*path)(?=.*boatman)(?=.*air).*$/i,
	subname : "Path of the Boatman (Air)",
	source : ["ITLOTL", 37],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Airlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Air",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am an airlacer. My ki ability is Wisdom."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic airlacing"],
				selection : ["basic airlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Divine Blessing",
			source : ["ITLOTL", 37],
			minlevel : 3,
			description : desc([
				"I can spend 2 ki points as an action to cast Warding Bond without material components.",
				"This lasts until I finish a short or long rest, unless I end it as a bonus action."
			]),
			action : [["action", "Divine Blessing (Warding Bond)"], ["bonus action", "End Divine Blessing"]],
			spellcastingBonus : [{
				name : "Divine Blessing",
				spells : ["warding bond"],
				selection : ["warding bond"],
				firstCol : "2"
			}]
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "bless"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "aid"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "protection from energy",],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "feign death"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "telepathic bond"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "true seeing"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "foresight"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Connection",
			source : ["ITLOTL", 37],
			minlevel : 6,
			description : desc([
				"When I use my Spirit Guide feature, I can spend 2 additional ki points.",
				"If I do, all willing allies within 30 ft (and myself) gain advantage on their first",
				"attack roll against the target until the beginning of my next turn."
			])
		},
		"subclassfeature10" : {
			name : "Aura of Serenity",
			source : ["ITLOTL", 37],
			minlevel : 10,
			description : desc([
				"During a short rest, I can spend my Hit Dice to heal creatures that spend at least",
				"30 minutes of the rest in my presence. Those creatures can also spend their own",
				"Hit Dice to heal me in the same manner."
			])
		},
		"subclassfeature14" : {
			name : "Inspiring Presence",
			source : ["ITLOTL", 37],
			minlevel : 14,
			description : desc([
				"When I and any allies spend an entire long rest within 30 feet of me, our",
				"hit point maximums and current hit points increase for the next 8 hours.",
				"The increase equals 4 \xD7 my ki ability modifier (Wisdom)."
			])
		}
	}
});
AddSubClass("samsari", "path of the king air", {
	regExpSearch : /^(?=.*path)(?=.*king)(?=.*air).*$/i,
	subname : "Path of the King (Air)",
	source : ["ITLOTL", 38],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Airlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Air",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am an airlacer. My ki ability is Wisdom."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic airlacing"],
				selection : ["basic airlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Unarmored Defense",
			source : ["ITLOTL", 38],
			minlevel : 3,
			description : desc("While I am wearing no armor and not wielding a shield, my AC equals 10 + my Dexterity modifier + my ki ability modifier (Wisdom)."),
			armorOptions: [{
                regExpSearch: /justToAddToDropDownAndEffectWildShape/,
                name: "Unarmored Defense (Wis)",
                source: ["ITLOTL", 38],
                ac: "10+Wis",
                affectsWildShape: true,
                selectNow: true
            }],
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "bane"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "darkvision"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "fear"],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "spirit guardians"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "dispel evil and good"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "eyebite"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "weird"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Strike of the Heavens",
			source : ["ITLOTL", 38],
			minlevel : 6,
			description : desc("When I use Spirit Guide for myself, I can spend 1 extra ki point. If I do, I add my ki ability modifier to the damage of the first successful attack I make before the end of my next turn.")
		},
		"subclassfeature10" : {
			name : "Aura of Power",
			source : ["ITLOTL", 38],
			minlevel : 10,
			description : desc("While I am conscious, I and friendly creatures within 30 feet of me can't be frightened."),
			savetxt : { immune : ["frightened"] }
		},
		"subclassfeature14" : {
			name : "Burst of Power",
			source : ["ITLOTL", 38],
			minlevel : 14,
			description : desc("I can spend 3 ki points to cast Enhance Ability on myself. When I do so, I choose two effects of the spell, which I gain simultaneously for the duration."),
			spellcastingBonus : [{
				name : "Burst of Power",
				spells : ["enhance ability"],
				selection : ["enhance ability"],
				firstCol : "3"
			}]
		}
	}
});
AddSubClass("samsari", "path of the shepherd air", {
	regExpSearch : /^(?=.*path)(?=.*shepherd)(?=.*air).*$/i,
	subname : "Path of the Shepherd (Air)",
	source : ["ITLOTL", 38],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Airlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Air",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am an airlacer. My ki ability is Wisdom."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic airlacing"],
				selection : ["basic airlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Enhanced Power",
			source : ["ITLOTL", 38],
			minlevel : 3,
			description : desc("When I take the Ready action to prepare my Synergy ability to enhance a creature's lacing form or spell, the number of ki points I must spend to enhance it is reduced by 1.")
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "charm person"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "calm emotions"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "magic circle"],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "death ward"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "legend lore"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "mass suggestion"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "reincarnate"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Guidance",
			source : ["ITLOTL", 38],
			minlevel : 6,
			description : desc("When I use Spirit Guide to assist another creature in combat, the creature adds my ki ability modifier to its AC against the first attack made against it until the beginning of my next turn.")
		},
		"subclassfeature10" : {
			name : "Shared Burden",
			source : ["ITLOTL", 38],
			minlevel : 10,
			description : desc([
				"At the start of my turn, I can choose to activate this ability until the start of my next turn.",
				"While active, friendly creatures within 60 feet of me make all saving throws with advantage,",
				"and I have disadvantage on all saving throws I make."
			])
		},
		"subclassfeature14" : {
			name : "Take the Pain",
			source : ["ITLOTL", 38],
			minlevel : 14,
			description : desc([
				"As a reaction, I can take on one of the following conditions from a friendly creature",
				"within 30 feet of me: blinded, deafened, exhausted, paralyzed, or poisoned.",
				"The effect ends for the creature, and applies to me instead.",
				"I can't take a condition I already have, nor exceed 5 levels of exhaustion."
			]),
			action : [["reaction", "Take the Pain"]]
		}
	}
});
//Earth 
AddSubClass("samsari", "path of the boatman earth", {
	regExpSearch : /^(?=.*path)(?=.*boatman)(?=.*earth).*$/i,
	subname : "Path of the Boatman (Earth)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Earthlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Earth",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am an earthlacer. My ki ability is Charisma."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic earthlacing"],
				selection : ["basic earthlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Divine Blessing",
			source : ["ITLOTL", 37],
			minlevel : 3,
			description : desc([
				"I can spend 2 ki points as an action to cast Warding Bond without material components.",
				"This lasts until I finish a short or long rest, unless I end it as a bonus action."
			]),
			action : [["action", "Divine Blessing (Warding Bond)"], ["bonus action", "End Divine Blessing"]],
			spellcastingBonus : [{
				name : "Divine Blessing",
				spells : ["warding bond"],
				selection : ["warding bond"],
				firstCol : "2"
			}]
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "bless"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "aid"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "protection from energy",],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "feign death"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "telepathic bond"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "true seeing"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "foresight"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Connection",
			source : ["ITLOTL", 37],
			minlevel : 6,
			description : desc([
				"When I use my Spirit Guide feature, I can spend 2 additional ki points.",
				"If I do, all willing allies within 30 ft (and myself) gain advantage on their first",
				"attack roll against the target until the beginning of my next turn."
			])
		},
		"subclassfeature10" : {
			name : "Aura of Serenity",
			source : ["ITLOTL", 37],
			minlevel : 10,
			description : desc([
				"During a short rest, I can spend my Hit Dice to heal creatures that spend at least",
				"30 minutes of the rest in my presence. Those creatures can also spend their own",
				"Hit Dice to heal me in the same manner."
			])
		},
		"subclassfeature14" : {
			name : "Inspiring Presence",
			source : ["ITLOTL", 37],
			minlevel : 14,
			description : desc([
				"When I and any allies spend an entire long rest within 30 feet of me, our",
				"hit point maximums and current hit points increase for the next 8 hours.",
				"The increase equals 4 \xD7 my ki ability modifier (Charisma)."
			])
		}
	}
});
AddSubClass("samsari", "path of the king earth", {
	regExpSearch : /^(?=.*path)(?=.*king)(?=.*earth).*$/i,
	subname : "Path of the King (Earth)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Earthlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Earth",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am an earthlacer. My ki ability is Charisma."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic earthlacing"],
				selection : ["basic earthlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Unarmored Defense",
			source : ["ITLOTL", 38],
			minlevel : 3,
			description : desc("While I am wearing no armor and not wielding a shield, my AC equals 10 + my Dexterity modifier + my ki ability modifier (Charisma)."),
			armorOptions: [{
                regExpSearch: /justToAddToDropDownAndEffectWildShape/,
                name: "Unarmored Defense (Cha)",
                source: ["ITLOTL", 38],
                ac: "10+Cha",
                affectsWildShape: true,
                selectNow: true
            }],
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "bane"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "darkvision"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "fear"],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "spirit guardians"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "dispel evil and good"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "eyebite"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "weird"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Strike of the Heavens",
			source : ["ITLOTL", 38],
			minlevel : 6,
			description : desc("When I use Spirit Guide for myself, I can spend 1 extra ki point. If I do, I add my ki ability modifier to the damage of the first successful attack I make before the end of my next turn.")
		},
		"subclassfeature10" : {
			name : "Aura of Power",
			source : ["ITLOTL", 38],
			minlevel : 10,
			description : desc("While I am conscious, I and friendly creatures within 30 feet of me can't be frightened."),
			savetxt : { immune : ["frightened"] }
		},
		"subclassfeature14" : {
			name : "Burst of Power",
			source : ["ITLOTL", 38],
			minlevel : 14,
			description : desc("I can spend 3 ki points to cast Enhance Ability on myself. When I do so, I choose two effects of the spell, which I gain simultaneously for the duration."),
			spellcastingBonus : [{
				name : "Burst of Power",
				spells : ["enhance ability"],
				selection : ["enhance ability"],
				firstCol : "3"
			}]
		}
	}
});
AddSubClass("samsari", "path of the shepherd earth", {
	regExpSearch : /^(?=.*path)(?=.*shepherd)(?=.*earth).*$/i,
	subname : "Path of the Shepherd (Earth)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Earthlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Earth",
			minlevel : 1,
			description : desc("I am an earthlacer. My ki ability is Charisma."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic earthlacing"],
				selection : ["basic earthlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Enhanced Power",
			source : ["ITLOTL", 38],
			minlevel : 3,
			description : desc("When I take the Ready action to prepare my Synergy ability to enhance a creature's lacing form or spell, the number of ki points I must spend to enhance it is reduced by 1.")
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "charm person"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "calm emotions"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "magic circle"],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "death ward"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "legend lore"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "mass suggestion"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "reincarnate"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Guidance",
			source : ["ITLOTL", 38],
			minlevel : 6,
			description : desc("When I use Spirit Guide to assist another creature in combat, the creature adds my ki ability modifier to its AC against the first attack made against it until the beginning of my next turn.")
		},
		"subclassfeature10" : {
			name : "Shared Burden",
			source : ["ITLOTL", 38],
			minlevel : 10,
			description : desc([
				"At the start of my turn, I can choose to activate this ability until the start of my next turn.",
				"While active, friendly creatures within 60 feet of me make all saving throws with advantage,",
				"and I have disadvantage on all saving throws I make."
			])
		},
		"subclassfeature14" : {
			name : "Take the Pain",
			source : ["ITLOTL", 38],
			minlevel : 14,
			description : desc([
				"As a reaction, I can take on one of the following conditions from a friendly creature",
				"within 30 feet of me: blinded, deafened, exhausted, paralyzed, or poisoned.",
				"The effect ends for the creature, and applies to me instead.",
				"I can't take a condition I already have, nor exceed 5 levels of exhaustion."
			]),
			action : [["reaction", "Take the Pain"]]
		}
	}
});
//Fire 
AddSubClass("samsari", "path of the boatman fire", {
	regExpSearch : /^(?=.*path)(?=.*boatman)(?=.*fire).*$/i,
	subname : "Path of the Boatman (Fire)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Firelacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Fire",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am a firelacer. My ki ability is Charisma."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic firelacing"],
				selection : ["basic firelacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Divine Blessing",
			source : ["ITLOTL", 37],
			minlevel : 3,
			description : desc([
				"I can spend 2 ki points as an action to cast Warding Bond without material components.",
				"This lasts until I finish a short or long rest, unless I end it as a bonus action."
			]),
			action : [["action", "Divine Blessing (Warding Bond)"], ["bonus action", "End Divine Blessing"]],
			spellcastingBonus : [{
				name : "Divine Blessing",
				spells : ["warding bond"],
				selection : ["warding bond"],
				firstCol : "2"
			}]
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "bless"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "aid"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "protection from energy",],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "feign death"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "telepathic bond"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "true seeing"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "foresight"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Connection",
			source : ["ITLOTL", 37],
			minlevel : 6,
			description : desc([
				"When I use my Spirit Guide feature, I can spend 2 additional ki points.",
				"If I do, all willing allies within 30 ft (and myself) gain advantage on their first",
				"attack roll against the target until the beginning of my next turn."
			])
		},
		"subclassfeature10" : {
			name : "Aura of Serenity",
			source : ["ITLOTL", 37],
			minlevel : 10,
			description : desc([
				"During a short rest, I can spend my Hit Dice to heal creatures that spend at least",
				"30 minutes of the rest in my presence. Those creatures can also spend their own",
				"Hit Dice to heal me in the same manner."
			])
		},
		"subclassfeature14" : {
			name : "Inspiring Presence",
			source : ["ITLOTL", 37],
			minlevel : 14,
			description : desc([
				"When I and any allies spend an entire long rest within 30 feet of me, our",
				"hit point maximums and current hit points increase for the next 8 hours.",
				"The increase equals 4 \xD7 my ki ability modifier (Charisma)."
			])
		}
	}
});
AddSubClass("samsari", "path of the king fire", {
	regExpSearch : /^(?=.*path)(?=.*king)(?=.*fire).*$/i,
	subname : "Path of the King (Fire)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Firelacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Fire",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am a firelacer. My ki ability is Charisma."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic firelacing"],
				selection : ["basic firelacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Unarmored Defense",
			source : ["ITLOTL", 38],
			minlevel : 3,
			description : desc("While I am wearing no armor and not wielding a shield, my AC equals 10 + my Dexterity modifier + my ki ability modifier (Charisma)."),
			armorOptions: [{
                regExpSearch: /justToAddToDropDownAndEffectWildShape/,
                name: "Unarmored Defense (Cha)",
                source: ["ITLOTL", 38],
                ac: "10+Cha",
                affectsWildShape: true,
                selectNow: true
            }],
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "bane"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "darkvision"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "fear"],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "spirit guardians"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "dispel evil and good"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "eyebite"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "weird"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Strike of the Heavens",
			source : ["ITLOTL", 38],
			minlevel : 6,
			description : desc("When I use Spirit Guide for myself, I can spend 1 extra ki point. If I do, I add my ki ability modifier to the damage of the first successful attack I make before the end of my next turn.")
		},
		"subclassfeature10" : {
			name : "Aura of Power",
			source : ["ITLOTL", 38],
			minlevel : 10,
			description : desc("While I am conscious, I and friendly creatures within 30 feet of me can't be frightened."),
			savetxt : { immune : ["frightened"] }
		},
		"subclassfeature14" : {
			name : "Burst of Power",
			source : ["ITLOTL", 38],
			minlevel : 14,
			description : desc("I can spend 3 ki points to cast Enhance Ability on myself. When I do so, I choose two effects of the spell, which I gain simultaneously for the duration."),
			spellcastingBonus : [{
				name : "Burst of Power",
				spells : ["enhance ability"],
				selection : ["enhance ability"],
				firstCol : "3"
			}]
		}
	}
});
AddSubClass("samsari", "path of the shepherd fire", {
	regExpSearch : /^(?=.*path)(?=.*shepherd)(?=.*fire).*$/i,
	subname : "Path of the Shepherd (Fire)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 6, // Charisma
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Firelacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Fire",
			minlevel : 1,
			description : desc("I am a firelacer. My ki ability is Charisma."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic firelacing"],
				selection : ["basic firelacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Enhanced Power",
			source : ["ITLOTL", 38],
			minlevel : 3,
			description : desc("When I take the Ready action to prepare my Synergy ability to enhance a creature's lacing form or spell, the number of ki points I must spend to enhance it is reduced by 1.")
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "charm person"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "calm emotions"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "magic circle"],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "death ward"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "legend lore"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "mass suggestion"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "reincarnate"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Guidance",
			source : ["ITLOTL", 38],
			minlevel : 6,
			description : desc("When I use Spirit Guide to assist another creature in combat, the creature adds my ki ability modifier to its AC against the first attack made against it until the beginning of my next turn.")
		},
		"subclassfeature10" : {
			name : "Shared Burden",
			source : ["ITLOTL", 38],
			minlevel : 10,
			description : desc([
				"At the start of my turn, I can choose to activate this ability until the start of my next turn.",
				"While active, friendly creatures within 60 feet of me make all saving throws with advantage,",
				"and I have disadvantage on all saving throws I make."
			])
		},
		"subclassfeature14" : {
			name : "Take the Pain",
			source : ["ITLOTL", 38],
			minlevel : 14,
			description : desc([
				"As a reaction, I can take on one of the following conditions from a friendly creature",
				"within 30 feet of me: blinded, deafened, exhausted, paralyzed, or poisoned.",
				"The effect ends for the creature, and applies to me instead.",
				"I can't take a condition I already have, nor exceed 5 levels of exhaustion."
			]),
			action : [["reaction", "Take the Pain"]]
		}
	}
});
//Water 
AddSubClass("samsari", "path of the boatman water", {
	regExpSearch : /^(?=.*path)(?=.*boatman)(?=.*water).*$/i,
	subname : "Path of the Boatman (Water)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Waterlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Water",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am a waterlacer. My ki ability is Wisdom."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic waterlacing"],
				selection : ["basic waterlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Divine Blessing",
			source : ["ITLOTL", 37],
			minlevel : 3,
			description : desc([
				"I can spend 2 ki points as an action to cast Warding Bond without material components.",
				"This lasts until I finish a short or long rest, unless I end it as a bonus action."
			]),
			action : [["action", "Divine Blessing (Warding Bond)"], ["bonus action", "End Divine Blessing"]],
			spellcastingBonus : [{
				name : "Divine Blessing",
				spells : ["warding bond"],
				selection : ["warding bond"],
				firstCol : "2"
			}]
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "bless"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "aid"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "protection from energy",],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "feign death"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "telepathic bond"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "true seeing"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "foresight"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Connection",
			source : ["ITLOTL", 37],
			minlevel : 6,
			description : desc([
				"When I use my Spirit Guide feature, I can spend 2 additional ki points.",
				"If I do, all willing allies within 30 ft (and myself) gain advantage on their first",
				"attack roll against the target until the beginning of my next turn."
			])
		},
		"subclassfeature10" : {
			name : "Aura of Serenity",
			source : ["ITLOTL", 37],
			minlevel : 10,
			description : desc([
				"During a short rest, I can spend my Hit Dice to heal creatures that spend at least",
				"30 minutes of the rest in my presence. Those creatures can also spend their own",
				"Hit Dice to heal me in the same manner."
			])
		},
		"subclassfeature14" : {
			name : "Inspiring Presence",
			source : ["ITLOTL", 37],
			minlevel : 14,
			description : desc([
				"When I and any allies spend an entire long rest within 30 feet of me, our",
				"hit point maximums and current hit points increase for the next 8 hours.",
				"The increase equals 4 \xD7 my ki ability modifier (Wisdom)."
			])
		}
	}
});
AddSubClass("samsari", "path of the king water", {
	regExpSearch : /^(?=.*path)(?=.*king)(?=.*water).*$/i,
	subname : "Path of the King (Water)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Waterlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Water",
			source : ["ITLOTL", 35],
			minlevel : 1,
			description : desc("I am a waterlacer. My ki ability is Wisdom."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic waterlacing"],
				selection : ["basic waterlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Unarmored Defense",
			source : ["ITLOTL", 38],
			minlevel : 3,
			description : desc("While I am wearing no armor and not wielding a shield, my AC equals 10 + my Dexterity modifier + my ki ability modifier (Wisdom)."),
			armorOptions: [{
                regExpSearch: /justToAddToDropDownAndEffectWildShape/,
                name: "Unarmored Defense (Wis)",
                source: ["ITLOTL", 38],
                ac: "10+Wis",
                affectsWildShape: true,
                selectNow: true
            }],
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "bane"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "darkvision"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "fear"],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "spirit guardians"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "dispel evil and good"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "eyebite"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "weird"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Strike of the Heavens",
			source : ["ITLOTL", 38],
			minlevel : 6,
			description : desc("When I use Spirit Guide for myself, I can spend 1 extra ki point. If I do, I add my ki ability modifier to the damage of the first successful attack I make before the end of my next turn.")
		},
		"subclassfeature10" : {
			name : "Aura of Power",
			source : ["ITLOTL", 38],
			minlevel : 10,
			description : desc("While I am conscious, I and friendly creatures within 30 feet of me can't be frightened."),
			savetxt : { immune : ["frightened"] }
		},
		"subclassfeature14" : {
			name : "Burst of Power",
			source : ["ITLOTL", 38],
			minlevel : 14,
			description : desc("I can spend 3 ki points to cast Enhance Ability on myself. When I do so, I choose two effects of the spell, which I gain simultaneously for the duration."),
			spellcastingBonus : [{
				name : "Burst of Power",
				spells : ["enhance ability"],
				selection : ["enhance ability"],
				firstCol : "3"
			}]
		}
	}
});
AddSubClass("samsari", "path of the shepherd water", {
	regExpSearch : /^(?=.*path)(?=.*shepherd)(?=.*water).*$/i,
	subname : "Path of the Shepherd (Water)",
	source : ["ITLOTL", ""],
	spellcastingAbility : 5, // Wisdom
	spellcastingFactor: 1,
	spellcastingKnown: {
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20],
		prepared : false,
	},
	spellcastingList: {
		"class" : "lacer",
		school : ["Lacer", "Waterlacer"],
	},
	features : {
		"subclassfeature1" : {
			name : "Chosen Element: Water",
			minlevel : 1,
			description : desc("I am a waterlacer. My ki ability is Wisdom."),
			spellFirstColTitle: "Ki",
			spellcastingBonus : [{
				name : "Basic Lacing",
				spells : ["basic waterlacing"],
				selection : ["basic waterlacing"],
				times : 1,
				firstCol: "atwill",
			}],
		},
		"subclassfeature3" : {
			name : "Enhanced Power",
			source : ["ITLOTL", 38],
			minlevel : 3,
			description : desc("When I take the Ready action to prepare my Synergy ability to enhance a creature's lacing form or spell, the number of ki points I must spend to enhance it is reduced by 1.")
		},
		"open chakra" : {
			name : "Open Chakra",
			source : ["ITLOTL", 36],
			minlevel : 5,
			description : desc([
				"As I level, I learn a spell for each chakra, which I can cast once per long rest without spending ki",
				"I can cast it again by spending ki points, except for the Third-Eye and Crown Chakras. I do not need material components for it",
				"If the spell has the ritual tag, I can cast it as a ritual without spending ki",
				"Root Chakra - 2 KP, Sacral Chakra - 3 KP, Navel Chakra - 4 KP, Heart Chakra - 5 KP, and Throat Chakra - 6 KP",
			]),
			spellcastingBonus : [{
				name : "Root Chakra",
				spells : ["animal friendship", "detect evil and good", "detect poison and disease", "find familiar", "identify", "speak with animals", "charm person"],
				times : 1,
				firstCol : "oncelr"
			}, {
				name : "Sacral Chakra",
				spells : ["animal messenger", "augur", "locate animals or plants", "locate object", "pass without trace", "calm emotions"],
				times: levels.map(function(n) {
                    return n < 7 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Navel Chakra",
				spells : ["phantom steed", "see invisibility", "speak with plants", "tongues", "magic circle"],
				times: levels.map(function(n) {
                    return n < 9 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Heart Chakra",
				spells : ["divination", "locate creature", "death ward"],
				times: levels.map(function(n) {
                    return n < 11 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Throat Chakra",
				spells : ["commune with nature", "dream", "legend lore"],
				times: levels.map(function(n) {
                    return n < 13 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Third-Eye Chakra",
				spells : ["antipathy/sympathy", "plane shift", "mass suggestion"],
				times: levels.map(function(n) {
                    return n < 15 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}, {
				name : "Crown Chakra",
				spells : ["astral projection", "awaken", "reincarnate"],
				times: levels.map(function(n) {
                    return n < 17 ? 0 : 1;
				}),
				firstCol : "oncelr"
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Guidance",
			source : ["ITLOTL", 38],
			minlevel : 6,
			description : desc("When I use Spirit Guide to assist another creature in combat, the creature adds my ki ability modifier to its AC against the first attack made against it until the beginning of my next turn.")
		},
		"subclassfeature10" : {
			name : "Shared Burden",
			source : ["ITLOTL", 38],
			minlevel : 10,
			description : desc([
				"At the start of my turn, I can choose to activate this ability until the start of my next turn.",
				"While active, friendly creatures within 60 feet of me make all saving throws with advantage,",
				"and I have disadvantage on all saving throws I make."
			])
		},
		"subclassfeature14" : {
			name : "Take the Pain",
			source : ["ITLOTL", 38],
			minlevel : 14,
			description : desc([
				"As a reaction, I can take on one of the following conditions from a friendly creature",
				"within 30 feet of me: blinded, deafened, exhausted, paralyzed, or poisoned.",
				"The effect ends for the creature, and applies to me instead.",
				"I can't take a condition I already have, nor exceed 5 levels of exhaustion."
			]),
			action : [["reaction", "Take the Pain"]]
		}
	}
});
//Backgrounds
// Air Sanctuary
BackgroundList["air sanctuary"] = {
	regExpSearch : /^(?=.*air)(?=.*sanctuary).*$/i,
	name : "Air Sanctuary",
	source : ["ITLOTL", 39],
	skills : ["History", "Religion"],
	gold : 10,
	equipleft : [
		["Air glider", "", ""],
		["Signal whistle", "", ""],
		["Holy symbol", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : [["Musical instrument", 1]],
	feature : "Gregarious"
};
BackgroundFeatureList["gregarious"] = {
	description : "I make friends quickly and easily, even with those who others might shy away from. I am not as easily intimidated as others by creatures with whom I can communicate, and those creatures are more likely to be friendly toward me.",
	source : ["ITLOTL", 39]
};
// Bounty Hunter
BackgroundList["bounty hunter-itlotl"] = {
	regExpSearch : /^(?=.*bounty)(?=.*hunter)(?=.*itlotl).*$/i,
	name : "Bounty Hunter (ITLOTL)",
	source : ["ITLOTL", 40],
	skills : ["Intimidation", "Investigation"],
	gold : 15,
	equipleft : [
		["Portable ram", "", 35],
		["Manacles", "", 6],
		["Hempen rope, feet of", 50, 0.2],
		["Parchment with mark's face", "", ""]
	],
	equipright : [
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : ["Disguise kit"],
	feature : "Find the Mark"
};
BackgroundFeatureList["find the mark"] = {
	description : "Due to my intimidating nature, people are inclined to give me information. I am allowed in places that common folk would be barred from (such as prison cells or guard towers) to ask questions or interrogate others. Common folk are more likely to answer my questions if they have the info.",
	source : ["ITLOTL", 40]
};
// Polar Clan
BackgroundList["polar clan"] = {
	regExpSearch : /^(?=.*polar)(?=.*clan).*$/i,
	name : "Polar Clan",
	source : ["ITLOTL", 41],
	skills : ["Athletics", "Survival"],
	gold : 10,
	equipleft : [
		["Hunting trap", "", 25],
		["Grappling hook", "", 4],
		["Hempen rope, feet of", 50, 0.2],
		["Hunting trophy", "", ""]
	],
	equipright : [
		["Winter's clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	toolProfs : ["Leatherworker's tools", "Vehicles (water)"],
	feature : "Survivor"
};
BackgroundFeatureList["survivor"] = {
	description : "Being from a violently cold and harsh environment, others look to me for strength in crisis. I can find food and fresh water for myself and up to five other people each day in extreme environments, provided the land offers basic sustenance (berries, small game, water, etc.).",
	source : ["ITLOTL", 41]
};
// Town Guard
BackgroundList["town guard"] = {
	regExpSearch : /^(?=.*town)(?=.*guard).*$/i,
	name : "Town Guard",
	source : ["ITLOTL", 42],
	skills : ["Insight", "Investigation"],
	gold : 10,
	equipleft : [
		["Bone dice or deck of cards", "", ""],
		["Personalized guard headband", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	toolProfs : [["Gaming set", 1], ["Musical instrument", 1]],
	feature : "Recognized Authority"
};
BackgroundFeatureList["recognized authority"] = {
	description : "My time as a town guard is recognized outside of my own town, and I can usually find people willing to help me or lend me things like a place to stay or a horse. My authority is recognized in other towns as well, granting me access to things like jails or guard towers.",
	source : ["ITLOTL", 42]
};
// The Vast Swamp
BackgroundList["the vast swamp"] = {
	regExpSearch : /^(?=.*vast)(?=.*swamp).*$/i,
	name : "The Vast Swamp",
	source : ["ITLOTL", 43],
	skills : ["Perception", "Survival"],
	gold : 15,
	equipleft : [
		["Fishing tackle", "", 4],
		["Bucket", "", 2],
		["Jug", "", 4],
		["Pitons", 3, 0.25],
		["Iron pot", "", 10],
		["Scale from biggest fish caught", "", ""]
	],
	equipright : [
		["Pouch (with coins)", "", 1]
	],
	toolProfs : ["Cook's utensils", ["Musical instrument", 1]],
	feature : "Community Cooking"
};
BackgroundFeatureList["community cooking"] = {
	description : "I can cook a meal that brings even bitter enemies together. When creatures share a meal I have created, they are more likely to be hospitable and respectable to each other and to me. I can always find a friendly face when offering my services to make food.",
	source : ["ITLOTL", 43]
};
// Vegetable Merchant
BackgroundList["vegetable merchant"] = {
	regExpSearch : /^(?=.*vegetable)(?=.*merchant).*$/i,
	name : "Vegetable Merchant",
	source : ["ITLOTL", 44],
	skills : ["Nature", "Persuasion"],
	gold : 15,
	equipleft : [
		["Carpenter's tools", "", 6],
		["Abacus", "", 2],
		["Cart full of vegetables", "", 200],
		["Cassopony or horse", "", ""]
	],
	equipright : [
		["Pouch (with coins)", "", 1]
	],
	toolProfs : ["Carpenter's tools"],
	feature : "Merchant"
};
BackgroundFeatureList["merchant"] = {
	description : "My cart is stocked with vegetables, and I can set up and sell my wares to eke out a modest living anywhere I go, usually making enough for a comfortable stay. Strangers who bought from me before take a liking to me. I can also flip vegetables on the road for profit.",
	source : ["ITLOTL", 44]
};
// Armor
ArmourList["shihan armor"] = {
	regExpSearch : /^(?=.*shihan)(?=.*armor).*$/i,
	name : "Shihan armor",
	source : ["ITLOTL", 45],
	type : "light",
	ac : 12,
	weight : 15
};
ArmourList["wolf armor"] = {
	regExpSearch : /^(?=.*wolf)(?=.*armor).*$/i,
	name : "Wolf armor",
	source : ["ITLOTL", 45],
	type : "medium",
	ac : 14,
	dex : 2,
	weight : 20
};
// Weapons
WeaponsList["hook sword"] = {
	regExpSearch : /^(?=.*hook)(?=.*sword).*$/i,
	name : "Hook Sword",
	source : ["ITLOTL", 46],
	list : "melee",
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Finesse, light; Bns act to attach 2 hooks into 1 weapon with reach & 2-handed; Replace 1 attack for Dex save vs trip (DC 8+Prof+Dex)",
	abilitytodamage : true,
	ability : 1
};
WeaponsList["katana"] = {
	regExpSearch : /katana/i,
	name : "Katana",
	source : ["ITLOTL", 46],
	list : "melee",
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 3,
	description : "Light, versatile (1d8)",
	abilitytodamage : true,
	ability : 1
};
WeaponsList["poison knife"] = {
	regExpSearch : /^(?=.*poison)(?=.*knife).*$/i,
	name : "Poison Knife",
	source : ["ITLOTL", 46],
	list : "melee",
	type : "Martial",
	damage : [1, 4, "piercing"],
	range : "Melee, 20/60 ft",
	weight : 1,
	description : "Finesse, light, thrown; Can load 1 dose of poison and activate it as part of an attack",
	abilitytodamage : true,
	ability : 1
};
WeaponsList["shanzi"] = {
	regExpSearch : /shanzi/i,
	name : "Shanzi",
	source : ["ITLOTL", 46],
	list : "melee",
	type : "Martial",
	damage : [1, 6, "bludgeoning"], // You can toggle this to slashing on the sheet via the "Damage Type" field if opened
	range : "Melee",
	weight : 1,
	description : "Finesse, light; Deals bludgeoning (folded) or slashing (open) damage",
	abilitytodamage : true,
	ability : 1
};
WeaponsList["wrist knife"] = {
	regExpSearch : /^(?=.*wrist)(?=.*knife).*$/i,
	name : "Wrist Knife",
	source : ["ITLOTL", 46],
	list : "melee",
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, light; Bns act to extend, Act to retract (Metallacers can do either as part of an attack)",
	abilitytodamage : true,
	ability : 1
};
WeaponsList["boomerang"] = {
	regExpSearch : /boomerang/i,
	name : "Boomerang",
	source : ["ITLOTL", 46],
	list : "ranged",
	type : "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "30/120 ft",
	weight : 1,
	description : "Ignores 1/2 and 3/4 cover; Target up to 2 creatures; Returns if targeting self 2nd; 1 throw/turn",
	abilitytodamage : true,
	ability : 2
};
WeaponsList["elemental sword"] = {
	regExpSearch : /^(?=.*elemental)(?=.*sword).*$/i,
	name : "Elemental Sword",
	source : ["ITLOTL", 46],
	list : "melee",
	type : "Martial",
	damage : [2, 8, "slashing"],
	range : "Melee",
	weight : 1,
	description : "Two-handed; Requires Basic Lacing and Bns act to channel element (conc.); ends if dropped",
	abilitytodamage : true,
	ability : 1
};
WeaponsList["metal cable"] = {
	regExpSearch : /^(?=.*metal)(?=.*cable).*$/i,
	name : "Metal Cable",
	source : ["ITLOTL", 46],
	list : "melee",
	type : "Martial",
	damage : [1, 6, "slashing"],
	range : "Melee",
	weight : 10,
	description : "Finesse, light; Metallacer only; Adds 25 ft to reach for attacks and opportunity attacks",
	abilitytodamage : true,
	ability : 1
};
// Adventuring Gear
GearList["air glider"] = {
	infoname : "Air glider [1,000 gp]",
	name : "Air glider",
	amount : 1,
	weight : 2,
	type : "adventuring gear",
	source : ["ITLOTL", 47]
};
GearList["clothes, wingsuit"] = {
	infoname : "Clothes, wingsuit [700 gp]",
	name : "Clothes, wingsuit",
	amount : 1,
	weight : 3,
	type : "adventuring gear",
	source : ["ITLOTL", 47]
};
GearList["gemmanite ring"] = {
	infoname : "Gemmanite ring [1 gp]",
	name : "Gemmanite ring",
	amount : 1,
	weight : 0,
	type : "adventuring gear",
	source : ["ITLOTL", 47]
};
//Feats
FeatsList["become wind"] = {
	name : "Become Wind",
	source : ["ITLOTL", 50],
	prerequisite : "Airlacer and 2 ki points",
	description : "My jump distance is doubled. I have advantage on saving throws against traps or obstacles triggered by weight. I can spend 2 ki points to gain a fly speed equal to my move speed for 10 minutes, allowing me to hover.",
	action : [["action", "Fly (2 ki)"]]
};
FeatsList["bloodlacing"] = {
	name : "Bloodlacing",
	source : ["ITLOTL", 50],
	prerequisite : "Waterlacer and 2 ki points",
	description : "Bonus action (conc): sense living creatures within 30 ft until my next turn. Action (2 ki): Paralyze a living creature for 1 min (Con save, Huge+ has adv; repeats end of turns). Action while controlling: move target half my speed and force it to perform a physical action.",
	action : [
		["bonus action", "Sense Blood (concentrate)"],
		["action", "Paralyze Target (2 ki)"],
		["action", "Control Paralyzed Target"]
	]
};
FeatsList["cold blooded"] = {
	name : "Cold Blooded",
	source : ["ITLOTL", 50],
	prerequisite : "Firelacer and Charisma 13 or higher",
	description : "Any time I would deal fire damage, I can choose to deal lightning damage instead. I learn the Shocking Grasp cantrip. Charisma is my spellcasting ability for it.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Cold Blooded",
		spells : ["shocking grasp"],
		selection : ["shocking grasp"],
		firstCol : "atwill"
	}]
};
FeatsList["combustion"] = {
	name : "Combustion",
	source : ["ITLOTL", 50],
	prerequisite : "Firelacer and 2 ki points",
	description : "I can firelace without hands/moving (must breathe). Action (2 ki): 60-ft line, ends in 10-ft rad. explosion. Dex save or 3d4 Bludg + 3d4 Fire dmg & pushed 10 ft (half/no push on save). Upcast (+1 ki up to Prof Bonus) for +1d4 of each dmg. Explodes on self if used within 1 rnd of taking a crit.",
	action : [["action", "Combustion (2+ ki)"]]
};
FeatsList["ferrous"] = {
	name : "Ferrous",
	source : ["ITLOTL", 51],
	prerequisite : "Earthlacer and Charisma 13 or higher",
	description : "I gain proficiency with metal cables and wrist knives. I gain 20 ft tremorsense. I can use a bonus action to increase the range to 50 ft, or an action to increase it to 100 ft until my next turn. I can control metal like normal earth within my tremorsense.",
	weaponProfs : [false, false, ["metal cable", "wrist knife"]],
	vision : [["Tremorsense", 20]],
	action : [["bonus action", "Tremorsense 50 ft"], ["action", "Tremorsense 100 ft"]]
};
FeatsList["lacing initiate"] = {
	name : "Lacing Initiate",
	source : ["ITLOTL", 51],
	description : "I gain my chosen element's Basic Lacing, the elemental strike ability, and one 1st-level form of that element. I can initiate the form once per short or long rest.",
	choices : ["Air", "Earth", "Fire", "Water"],
	"air" : {
		name : "Lacing Initiate (Air)",
		description : "I gain Basic Airlacing, the elemental strike ability, and one 1st-level air form. I can initiate it once per short/long rest. Wisdom is my ki ability.",
		spellcastingAbility : 5,
		spellcastingBonus : [{
			name : "Lacing Initiate",
			spells : ["basic airlacing"],
			selection : ["basic airlacing"],
			times : 1,
			firstCol : "atwill",
		}, {
			name : "Lacing Initiate",
			class : "lacer",
			school : ["Lacer", "Airlacer"],
			level : [1, 1],
			times : 1,
			firstCol : "oncesr"
		}],
		weaponsAdd : ["Elemental Strike"],
		weaponOptions : {
			regExpSearch : /^(?=.*elemental)(?=.*strike).*$/i,
			name : "Elemental Strike",
			source : ["ITLOTL", 24],
			ability : 1, // MPMB uses 1 for Strength, but player can swap
			type : "Simple",
			damage : [1, 6, "bludgeoning"],
			range : "20/60 ft",
			description : "Can use Str or Dex; No disadv. from 5 ft hostiles or prone targets in 20 ft.",
			abilitytodamage : true
		},
	},
	"earth" : {
		name : "Lacing Initiate (Earth)",
		description : "I gain Basic Earthlacing, the elemental strike ability, and one 1st-level earth form. I can initiate it once per short/long rest. Charisma is my ki ability.",
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Lacing Initiate",
			spells : ["basic earthlacing"],
			selection : ["basic earthlacing"],
			times : 1,
			firstCol : "atwill",
		}, {
			name : "Lacing Initiate",
			class : "lacer",
			school : ["Lacer", "Earthlacer"],
			level : [1, 1],
			times : 1,
			firstCol : "oncesr"
		}],
		weaponsAdd : ["Elemental Strike"],
		weaponOptions : {
			regExpSearch : /^(?=.*elemental)(?=.*strike).*$/i,
			name : "Elemental Strike",
			source : ["ITLOTL", 24],
			ability : 1, // MPMB uses 1 for Strength, but player can swap
			type : "Simple",
			damage : [1, 6, "bludgeoning"],
			range : "20/60 ft",
			description : "Can use Str or Dex; No disadv. from 5 ft hostiles or prone targets in 20 ft.",
			abilitytodamage : true
		},
	},
	"fire" : {
		name : "Lacing Initiate (Fire)",
		description : "I gain Basic Firelacing, the elemental strike ability, and one 1st-level fire form. I can initiate it once per short/long rest. Charisma is my ki ability.",
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Lacing Initiate",
			spells : ["basic firelacing"],
			selection : ["basic firelacing"],
			times : 1,
			firstCol : "atwill",
		}, {
			name : "Lacing Initiate",
			class : "lacer",
			school : ["Lacer", "Firelacer"],
			level : [1, 1],
			times : 1,
			firstCol : "oncesr"
		}],
		weaponsAdd : ["Elemental Strike"],
		weaponOptions : {
			regExpSearch : /^(?=.*elemental)(?=.*strike).*$/i,
			name : "Elemental Strike",
			source : ["ITLOTL", 24],
			ability : 1, // MPMB uses 1 for Strength, but player can swap
			type : "Simple",
			damage : [1, 6, "bludgeoning"],
			range : "20/60 ft",
			description : "Can use Str or Dex; No disadv. from 5 ft hostiles or prone targets in 20 ft.",
			abilitytodamage : true
		},
	},
	"water" : {
		name : "Lacing Initiate (Water)",
		description : "I gain Basic Waterlacing, the elemental strike ability, and one 1st-level water form. I can initiate it once per short/long rest. Wisdom is my ki ability.",
		spellcastingAbility : 5,
		spellcastingBonus : [{
			name : "Lacing Initiate",
			spells : ["basic waterlacing"],
			selection : ["basic waterlacing"],
			times : 1,
			firstCol : "atwill",
		}, {
			name : "Lacing Initiate",
			class : "lacer",
			school : ["Lacer", "Waterlacer"],
			level : [1, 1],
			times : 1,
			firstCol : "oncesr"
		}],
		weaponsAdd : ["Elemental Strike"],
		weaponOptions : {
			regExpSearch : /^(?=.*elemental)(?=.*strike).*$/i,
			name : "Elemental Strike",
			source : ["ITLOTL", 24],
			ability : 1, // MPMB uses 1 for Strength, but player can swap
			type : "Simple",
			damage : [1, 6, "bludgeoning"],
			range : "20/60 ft",
			description : "Can use Str or Dex; No disadv. from 5 ft hostiles or prone targets in 20 ft.",
			abilitytodamage : true
		},
	}
};
FeatsList["lightning redirect"] = {
	name : "Lightning Redirect",
	source : ["ITLOTL", 51],
	prerequisite : "Firelacer and Wisdom 13 or higher",
	description : "Reaction when taking single-target lightning damage: Cha save (DC 10 or half dmg, whichever is higher). On success, I take no damage and redirect it to a new target within 30 ft.",
	action : [["reaction", "Lightning Redirect"]]
};
FeatsList["magma master"] = {
	name : "Magma Master",
	source : ["ITLOTL", 51],
	prerequisite : "Earthlacer and 2 ki points",
	description : "I can manipulate lava like normal earth. Earthlacing damage using lava deals an extra 1d8 fire dmg. Bonus action (2 ki): turn a 5-ft cube of earth within 10 ft into lava. Creatures moving within 5 ft or ending their turn there take 1d10 bludg + 1d10 fire dmg on failed Con save.",
	action : [["bonus action", "Create Lava (2 ki)"]]
};
FeatsList["meta-lacer"] = {
	name : "Meta-Lacer",
	source : ["ITLOTL", 51],
	prerequisite : "Ability to initiate at least one form, 3 ki points",
	allowDuplicates : true,
	choices : ["Careful Form", "Distant Form", "Empowered Form", "Heightened Form", "Quickened Form", "Subtle Form", "Twinned Form"],
	"careful form" : {
		name : "Meta-Lacer: Careful Form",
		description : "When a form forces saves, I can spend 1 extra ki to protect creatures up to my ki ability modifier (min 1). They automatically succeed."
	},
	"distant form" : {
		name : "Meta-Lacer: Distant Form",
		description : "I can spend 1 extra ki to double a form's range (if 5 ft or more), or make a touch form have a 30 ft range."
	},
	"empowered form" : {
		name : "Meta-Lacer: Empowered Form",
		description : "When rolling damage for a form, I can spend 1 ki to reroll a number of damage dice up to my ki ability modifier (min 1). I must use the new rolls."
	},
	"heightened form" : {
		name : "Meta-Lacer: Heightened Form",
		description : "I can spend 3 extra ki points to give one target of a form disadvantage on its first saving throw against the form."
	},
	"quickened form" : {
		name : "Meta-Lacer: Quickened Form",
		description : "I can spend 2 extra ki points to change a form's initiation time from 1 action to 1 bonus action."
	},
	"subtle form" : {
		name : "Meta-Lacer: Subtle Form",
		description : "I can spend 1 extra ki point to initiate a form without needing to breathe or move in any way."
	},
	"twinned form" : {
		name : "Meta-Lacer: Twinned Form",
		description : "When a form targets only one creature (not 'self'), I can spend double its ki cost to target a second creature in range."
	}
};
FeatsList["savage elements"] = {
	name : "Savage Elements",
	source : ["ITLOTL", 52],
	description : "Once per turn when I roll damage for an elemental attack, I can reroll the attack's damage dice and use either total."
};
FeatsList["sound command"] = {
	name : "Sound Command",
	source : ["ITLOTL", 52],
	prerequisite : "Airlacer and Wisdom 13 or higher",
	description : "I learn Message. My voice can be 3x louder. I have advantage on Perception (hearing). Action: Silence a 5-ft cube until my next turn (deafens inside, immune to thunder, no verbal spells).",
	spellcastingBonus : [{
		name : "Sound Command",
		spells : ["message"],
		selection : ["message"],
		firstCol : "atwill"
	}],
	action : [["action", "Silence 5-ft cube"]],
	vision : [["Adv. on Perception (hearing)", 0]]
};
FeatsList["stinger"] = {
	name : "Stinger",
	source : ["ITLOTL", 52],
	description : "Adv. on Sleight of Hand/Deception to conceal light/finesse thrown weapons. Can replace 1 attack to throw up to 4 weapons at once (-2 to hit per extra weapon); hit deals combined damage + mod once. Can forgo dmg to reduce speed to 0 (or restrain if 4 weapons thrown); action to free.",
	action : [["action", "Bombard (replaces 1 attack)"]]
};
FeatsList["war lacer"] = {
	name : "War Lacer",
	source : ["ITLOTL", 52],
	prerequisite : "Ability to initiate at least one form",
	description : "Adv. on Con saves to maintain concentration on forms when taking damage. I can use my reaction to initiate a form (must have 1 action cast time, targeting only that creature) instead of making an opportunity attack.",
	action : [["reaction", "Form as Opportunity Attack"]]
};
FeatsList["wood weaver"] = {
	name : "Wood Weaver",
	source : ["ITLOTL", 52],
	prerequisite : "Waterlacer and Wisdom 13 or higher",
	description : "I manipulate wood/plants like water. Action: Draw water from plants in 10-ft cube. Action: Assemble wood armor on my body until I end it (AC 10 + Dex + Wis).",
	action : [["action", "Draw Water from Plants"], ["action", "Assemble Wood Armor"]],
	armorOptions : [{
		regExpSearch : /wood weaver/i,
		name : "Wood Weaver Armor",
		source : ["ITLOTL", 52],
		ac : "10+Wis",
	}]
};
//New Schools for Lacer forms
spellSchoolList.Lacer = "All Element Forms";
spellSchoolList.Airlacer = "Air Lacing Forms";
spellSchoolList.Earthlacer = "Earth Lacing Forms";
spellSchoolList.Firelacer = "Fire Lacing Forms";
spellSchoolList.Waterlacer = "Water Lacing Forms";
//Lacing forms
SpellsList["counterlace"] = {
	name : "Counterlace",
	classes : ["lacer"],
	source : ["ITLOTL", 60],
	level : 3,
	school : "Lacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you see a creature within 60 feet of you initiating a form",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "4",
	description : "Interrupt form/spell of 3rd-lvl or lower; higher lvl requires ki ability check (DC 10+lvl); +1 max auto-interrupt/SL",
	descriptionFull : [
		"You attempt to interrupt a creature in the process of initiating a form or casting a spell. If the creature is initiating a form or spell of 3rd level or lower, the ability fails and has no effect. If it is initiating a form or casting a spell of 4th level or higher, make an ability check using your ki ability. The DC equals 10 + the form or spell's level. On a success, the creature's action fails and has no effect." + AtHigherLevels + "When you initiate this form at a higher level, the interrupted form or spell has no effect if its level is less than or equal to the level of the form you used."
	]
};
//Air forms
//Basic form
SpellsList["basic airlacing"] = {
	name : "Basic Airlacing",
	classes : ["lacer"],
	source : ["ITLOTL", 66],
	level : 0,
	school : "Airlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Sensory effect, Disadv. on ranged atks vs me this turn, move 5lb  obj 10 ft, or double speed; +5lb & +5ft at CL 5, 11, 17",
	descriptionFull : [
		"Anyone who is an airlacer can initiate the following effects as an action within a 5-foot cube.",
		"\u2022 You create a harmless sensory effect using air, such as causing leaves to rustle or wind to slam shutters.",
		"\u2022 Until the end of your next turn, ranged weapon attacks against you are made with disadvantage.",
		"\u2022 You create a small blast of air which moves one unattended object within 30 feet that weighs no more than 5 pounds up to 10 feet in any direction.",
		"\u2022 Your movement speed is doubled until the end of your turn." + "\n   " + toUni("Cantrip Upgrade") + ".The area you can affect increases by 5 feet and the weight of objects you can move increases by 5 pounds when you reach 5th level (10-foot cube, 10 pounds), 11th level (15-foot cube, 15 pounds), and 17th level (20-foot cube, 20 pounds)."
	]
};
//1st level
SpellsList["aethur burst"] = {
	name : "Aethur Burst",
	classes : ["lacer"],
	source : ["ITLOTL", 67],
	level : 1,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "2",
	description : "Ranged ki atk for 2d4 Bludgeoning; then 5-ft rad Dex save or 2d6+1d6/SL Cold dmg",
	descriptionFull : [
		"You create a sudden void of air and propel it toward one creature within range. Make a ranged ki attack against the target. On a hit, the target takes 2d4 bludgeoning damage.",
		"Hit or miss, the burst then explodes. The target and each creature within 5 feet of the point where the burst exploded must succeed on a Dexterity saving throw or take 2d6 cold damage." + AtHigherLevels + "When you initiate this form at a higher level, the cold damage increases by 1d6 for each level above 1st."
	]
};
SpellsList["air cushion"] = {
	name : "Air Cushion",
	classes : ["lacer"],
	source : ["ITLOTL", 67],
	level : 1,
	school : "Airlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you or a creature within 60 feet of you falls",
	range : "60 ft",
	components : "V,S",
	duration : "1 min",
	firstCol : "2",
	description : "Up to 5+1/SL falling crea descend 60 ft/rnd, take no falling dmg & land on feet",
	descriptionFull : [
		"Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the form ends. If the creature lands before the form ends, it takes no falling damage and can land on its feet, and the form ends for that creature." + AtHigherLevels + "When you initiate this form at a higher level, the number of creatures you can affect increases by one for each level above 1st."
	]
};
SpellsList["deep breathing"] = {
	name : "Deep Breathing",
	classes : ["lacer"],
	source : ["ITLOTL", 67],
	level : 1,
	school : "Airlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "2",
	description : "Up to 3+1/SL crea don't need to breathe",
	descriptionFull : [
		"You give up to three creatures within range a soothing lungful of air which constantly replenishes them. For the duration, an affected creature does not need to breath (but can still continue to talk and can choose to breath). A creature can end this form on itself without an action." + AtHigherLevels + "When you initiate this form at a higher level, the number of creatures you can affect increases by one for each level above 1st."
	]
};
SpellsList["protection of the east"] = { //edited duration to match Shield spell which this form was based off of, especially since text of form says it only lasts until the start of next turn. Orig. Conc, 1 hr. New 1 rnd.
	name : "Protection of the East",
	classes : ["lacer"],
	source : ["ITLOTL", 67],
	level : 1,
	school : "Airlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you are hit by an attack or targeted by a form or spell",
	range : "30 ft",
	components : "V,S",
	duration : "1 rnd",
	firstCol : "2",
	description : "+5 AC until the start of my next turn, including vs triggering attack",
	descriptionFull : [
		"An invisible barrier of powerful wind appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack."
	]
};
SpellsList["shield of the sky"] = {
	name : "Shield of the Sky",
	classes : ["lacer"],
	source : ["ITLOTL", 67],
	level : 1,
	school : "Airlacer",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "2",
	description : "Target in range gains +2 AC for duration",
	descriptionFull : [
		"You create a localized vortex of air which hovers around a creature of your choice within range, granting it a +2 bonus to AC for the duration."
	]
};
SpellsList["theft of the south"] = {
	name : "Theft of the South",
	classes : ["lacer"],
	source : ["ITLOTL", 67],
	level : 1,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	firstCol : "2",
	description : "Target holding \u2264 5 lb obj Str save or obj flies to my hand or drops at my feet",
	descriptionFull : [
		"Choose a target in range which is carrying an object weighing no more than 5 pounds. The target must succeed on a Strength saving throw. On a failed save, the object flies out of the target's hand and into yours, or you can choose to have the object drop onto the ground at your feet."
	]
};
SpellsList["thunderburst"] = {
	name : "Thunderburst",
	classes : ["lacer"],
	source : ["ITLOTL", 67],
	level : 1,
	school : "Airlacer",
	time : "1 a",
	range : "Self (15-ft cube)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	firstCol : "2",
	description : "15-ft cube Str save or 4d4+2d4/SL Thunder dmg & pushed 10 ft (half & not pushed on save)",
	descriptionFull : [
		"A wave of forceful air billows out from you. Each creature in a 15-foot cube originating from you must make a Strength saving throw. On a failed save, a creature takes 4d4 thunder damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage and isn't pushed.",
		"In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the form's effect, and the form emits a thunderous boom audible out to 300 feet." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 2d4 for each level above 1st."
	]
};
SpellsList["updraft"] = {
	name : "Updraft",
	classes : ["lacer"],
	source : ["ITLOTL", 67],
	level : 1,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "2",
	description : "20-ft rad area jump distance tripled; Bns Act move to new point in range",
	descriptionFull : [
		"You create a great upswelling of air at a point you choose within range. Any creature which jumps within a 20-foot radius of that point has its jump distance tripled.",
		"As a bonus action on your turn, you can move the updraft to any other point within range."
	]
};
SpellsList["warding whisk"] = { //edited duration to match Alarm spell which this form was based off of, as the form does not make sense to only have  duration of 1 min if it is ment to be a protective alert. Orig. Conc, 1 min. New. 8 hr.
	name : "Warding Whisk",
	classes : ["lacer"],
	source : ["ITLOTL", 68],
	level : 1,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "8 hr",
	firstCol : "2",
	description : "Mental alarm when Tiny or larger crea enters 20-ft rad around me; can designate immune crea",
	descriptionFull : [
		"You focus your instincts and hone your insight, warding yourself against intrusion. You target an area in a 20-foot radius around yourself. Until the form ends, a mental alarm alerts you whenever a Tiny or larger creature touches or enters the area. When you initiate the form, you can designate creatures that won't set off the alarm. There is a ping in your mind if the alarm is broken, which awakens you if you are sleeping."
	]
};
SpellsList["wind bolts"] = {
	name : "Wind Bolts",
	classes : ["lacer"],
	source : ["ITLOTL", 68],
	level : 1,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "2",
	description : "Create 3+1/SL bolts that automatically hit for 1d4+1 Slashing dmg each",
	descriptionFull : [
		"You create three swirling bolts of wind. Each bolt hits a creature of your choice that you can see within range. A bolt deals 1d4 + 1 slashing damage to its target. The bolts all strike simultaneously, and you can direct them to hit one creature or several." + AtHigherLevels + "When you initiate this form at a higher level, the form creates one more bolt for each level above 1st."
	]
};
SpellsList["zephyr onslaught"] = {
	name : "Zephyr Onslaught",
	classes : ["lacer"],
	source : ["ITLOTL", 68],
	level : 1,
	school : "Airlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "2",
	description : "No opp. attacks; once per form Adv. on 1 elemental atk for extra 1d8 Bludgeoning dmg & +30 ft speed",
	descriptionFull : [
		"Your movement is enhanced by blistering wind. Until the form ends, your movement doesn't provoke opportunity attacks.",
		"Once before the form ends, you can give yourself advantage on one elemental attack on your turn. That attack deals an extra 1d8 bludgeoning damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn."
	]
};
//2nd level
SpellsList["air funnel"] = {
	name : "Air Funnel",
	classes : ["lacer"],
	source : ["ITLOTL", 68],
	level : 2,
	school : "Airlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "3",
	description : "Put 1-5+5/SL lb obj in funnel to fly 90 ft; hit crea Dex save or obj stops; both take 2d8+1d8/SL Bludgeoning",
	descriptionFull : [
		"You create a whirling wind tunnel which appears in your space and launches items put into it towards your enemies. One object weighing 1 to 5 pounds can be put into the funnel each round. An object put into the funnel flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts a solid surface.",
		"If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 2d8 bludgeoning damage." + AtHigherLevels + "When you initiate this form at a higher level, the maximum weight of objects that can be put into the funnel increases by 5 pounds, and the damage increases by 1d8 for each level above 2nd."
	]
};
SpellsList["air scooter"] = {
	name : "Air Scooter",
	classes : ["lacer"],
	source : ["ITLOTL", 68],
	level : 2,
	school : "Airlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "+20 ft speed; Bns Act to Dash; briefly fly or climb walls at full speed (must return to level ground or form ends)",
	descriptionFull : [
		"You create a swirling ball of wind which you balance on. Your speed increases by 20 feet for the duration of the form. When you initiate this form, and then as a bonus action on each of your turns until the form ends, you can take the Dash action.",
		"The scooter also allows you to briefly fly through the air or climb up walls. When climbing a wall, the scooter can move its full speed. If you have used your scooter to climb a wall on your previous turn, you must not climb any higher or the form ends immediately. You cannot climb a wall again with the scooter until you return to level ground.",
		"If you attempt to fly through the air, the scooter lasts until the end of your turn."
	]
};
SpellsList["battering gale"] = {
	name : "Battering Gale",
	classes : ["lacer"],
	source : ["ITLOTL", 68],
	level : 2,
	school : "Airlacer",
	time : "1 a",
	range : "Self (10-ft radius)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "3",
	description : "10-ft rad all Dex save or 4d6+1d6/SL Bludgeoning dmg & no reactions until next turn (half & no effect on save)",
	descriptionFull : [
		"You throw out bursts of air which batter all creatures within 10 feet of you. Each creature in the area must make a Dexterity saving throw. On a failed save, a target takes 4d6 bludgeoning damage and can't take reactions until its next turn. On a successful save, a creature takes half as much damage, and suffers no other effect." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 2nd."
	]
};
SpellsList["disorienting blast"] = { //edited the at higher levels to reflect general damage progression to use same die type as initial damage. Orig +1d6, New +1d8.
	name : "Disorienting Blast",
	classes : ["lacer"],
	source : ["ITLOTL", 69],
	level : 2,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	firstCol : "3",
	description : "Ranged ki atk for 4d8+1d8/SL Bludgeoning; next atk vs target before end of my next turn has Adv",
	descriptionFull : [
		"A bolt of air streaks toward a creature of your choice within range. Make a ranged ki attack against the target. On a hit, the target takes 4d8 bludgeoning damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the burst of air confusing the target's movements." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 2nd."
	]
};
SpellsList["earsplitting ring"] = {
	name : "Earsplitting Ring",
	classes : ["lacer"],
	source : ["ITLOTL", 69],
	level : 2,
	school : "Airlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 min",
	save : "Con",
	firstCol : "3",
	description : "5-ft rad all Con save or 4d8+1d8/SL Thunder dmg & deafened (half & not deafened on save); save end of turn to end",
	descriptionFull : [
		"A horrible noise rings out at a point you choose within range. Creatures within a 5-foot radius must make a Constitution saving throw. On a failed save, a creature takes 4d8 thunder damage and is deafened for the duration. At the end of each of its turns, a target can make a Constitution saving throw. On a success, the form ends on it.",
		"On a successful save, a creature takes half as much damage and is not deafened." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 2nd."
	]
};
SpellsList["gust"] = {
	name : "Gust",
	classes : ["lacer"],
	source : ["ITLOTL", 69],
	level : 2,
	school : "Airlacer",
	time : "1 a",
	range : "Self (30-ft line)",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "3",
	description : "30x10-ft line; start turn in line Str save or pushed 15 ft; costs 2 ft per 1 ft moving closer; Bns Act change dir",
	descriptionFull : [
		"A line of strong wind 30 feet long and 10 feet wide blasts from you in a direction you choose for the form's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.",
		"Any creature in the line must spend 2 feet of movement for every 1 foot it moved when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.",
		"As a bonus action on each of your turns before the form ends, you can change the direction in which the line blasts from you."
	]
};
SpellsList["mighty leap"] = {
	name : "Mighty Leap",
	classes : ["lacer"],
	source : ["ITLOTL", 69],
	level : 2,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	firstCol : "3",
	description : "Leap up to 60 ft; crea within 10 ft of start Con save or 2d10+1d10/SL Thunder dmg (half on save)",
	descriptionFull : [
		"You project a thunderous force beneath you which launches you through the air to an unoccupied space you can see within range. This movement does not provoke opportunity attacks. Each creature within 10 feet of the space you left must make a Constitution saving throw, taking 2d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 2nd."
	]
};
SpellsList["reciprocating gale"] = {
	name : "Reciprocating Gale",
	classes : ["lacer"],
	source : ["ITLOTL", 69],
	level : 2,
	school : "Airlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take in response to being damaged by a creature within 30 feet of you that you can see",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "3",
	description : "Ranged ki atk vs triggering creature for 2d8+1d8/SL Slashing dmg & pushed 10 ft",
	descriptionFull : [
		"You whip your hand, and the creature that damaged you is slashed by burning wind. Make a ranged ki attack against the target. On a hit, the creature takes 2d8 slashing damage and is pushed 10 feet." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 2nd."
	]
};
SpellsList["vortex"] = {
	name : "Vortex",
	classes : ["lacer"],
	source : ["ITLOTL", 69],
	level : 2,
	school : "Airlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "10-ft rad moves with me; deafens others, diff terrain for others, extinguishes small flames, hedged gas/vapor, Disadv on ranged atks",
	descriptionFull : [
		"A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the form's duration.",
		"The wind has the following effects:",
		"\u2022 It deafens other creatures in its area.",
		"\u2022 It extinguishes unprotected flames in its area that are torch-sized or smaller.",
		"\u2022 It hedges out vapor, gas, and fog that can be dispersed by strong wind.",
		"\u2022 The area is difficult terrain for creatures other than you.",
		"\u2022 The attack rolls of ranged weapon attacks have disadvantage if the attacks pass in or out of the wind."
	]
};
//3rd level
SpellsList["chinook"] = {
	name : "Chinook",
	classes : ["lacer"],
	source : ["ITLOTL", 70],
	level : 3,
	school : "Airlacer",
	time : "1 a",
	range : "Self (40-ft radius)",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "4",
	description : "40-ft rad temp kept comfortable for duration; no protection from dmg or other hazards",
	descriptionFull : [
		"You are able to create a cooling or warming breeze in the area, keeping willing creatures within a 40-foot radius comfortable and safe. The area is kept a normal temperature, and creatures in the area as well as their equipment do not feel the effects of abnormally hot or cold environments.",
		"This form does not provide protection from fire or cold damage, nor does it protect against other environmental hazards such as smoke, a lack of air at high altitudes, and so forth."
	]
};
SpellsList["free breeze"] = {
	name : "Free Breeze",
	classes : ["lacer"],
	source : ["ITLOTL", 70],
	level : 3,
	school : "Airlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "4",
	description : "Immune to difficult terrain, speed reduction, paralyzed, restrained; Reaction to auto-escape non-magical grapple/restraint",
	descriptionFull : [
		"You focus your spirit, preparing yourself to move with astounding dexterity. For the duration, your movement is unaffected by difficult terrain, and forms, spells, and other magical effects can neither reduce your speed nor cause you to be paralyzed or restrained.",
		"For the form's duration, any time you would be held by nonmagical restraints such as manacles or being grappled by a creature, you can take a reaction to automatically escape from the effect."
	]
};
SpellsList["heart of the sky"] = {
	name : "Heart of the Sky",
	classes : ["lacer"],
	source : ["ITLOTL", 70],
	level : 3,
	school : "Airlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "4",
	description : "Speed doubled, +2 AC, Adv. on Dex saves, +1 Action/turn (Attack, Dash, Disengage, Hide, Use Object); Ignore cover vs elemental atks",
	descriptionFull : [
		"For the duration, your speed is doubled, you gain a +2 bonus to AC, you have advantage on Dexterity saving throws, and you gain an additional action on each of your turns. That action can be used only to take the Attack (one weapon or elemental attack only), Dash, Disengage, Hide, or Use an Object action.",
		"Targets gain no benefit from cover against your elemental attacks."
	]
};
SpellsList["navin's tiny tornados"] = {
	name : "Navin's Tiny Tornados",
	classes : ["lacer"],
	source : ["ITLOTL", 70],
	level : 3,
	school : "Airlacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "4",
	description : "4+1/SL ranged ki atks vs targets in range; hit 2d6 Slashing dmg",
	descriptionFull : [
		"You create four miniature tornados and hurl them at targets within range. You can hurl them at one target or several. Make a ranged ki attack for each tornado. On a hit, the target takes 2d6 slashing damage." + AtHigherLevels + "When you initiate this form at a higher level, you create one additional tornado for each level above 3rd."
	]
};
SpellsList["power puff"] = {
	name : "Power Puff",
	classes : ["lacer"],
	source : ["ITLOTL", 70],
	level : 3,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "4",
	description : "5-ft diam sphere; end turn in 5ft or rammed Dex save or 2d10+1d10/SL Slashing dmg (half on save); Bns Act move 30 ft",
	descriptionFull : [
		"A 5-foot-diameter sphere of air appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. On a failed save, a creature takes 2d10 slashing damage, or half as much damage on a successful one.",
		"As a bonus action on your turn, you can move the sphere up to 30 feet within range. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 3rd."
	]
};
SpellsList["resounding blow"] = {
	name : "Resounding Blow",
	classes : ["lacer"],
	source : ["ITLOTL", 71],
	level : 3,
	school : "Airlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "4",
	description : "Next elemental hit +4d10+1d10/SL Thunder dmg & Str save or pushed 20 ft & knocked prone",
	descriptionFull : [
		"The first time you hit with an elemental attack during this form's duration, your wind bursts with power that is audible within 300 feet of you. On a hit, your attack deals an extra 4d10 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 20 feet away from you and knocked prone." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 3rd."
	]
};
SpellsList["sickening mistral"] = {
	name : "Sickening Mistral",
	classes : ["lacer"],
	source : ["ITLOTL", 71],
	level : 3,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "4",
	description : "Ranged ki atk; hit deals half dmg with Str/Dex atks; Con save at end of turn ends effect",
	descriptionFull : [
		"A burst of focused wind streaks toward a vital point of a creature you choose within range. Make a ranged ki attack against the target. On a hit, the target deals only half damage with weapon attacks or elemental attacks that use Strength or Dexterity until the form ends.",
		"At the end of each of the target's turns, it can make a Constitution saving throw against the form. On a success, the form ends."
	]
};
SpellsList["tympanum assault"] = {
	name : "Tympanum Assault",
	classes : ["lacer"],
	source : ["ITLOTL", 71],
	level : 3,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	firstCol : "4",
	description : "10-ft rad all Con save or 8d6+1d6/SL Thunder dmg & deafened (half & no deafen on save); inorganic/stone/metal has Disadv",
	descriptionFull : [
		"A sudden burst of powerful thunder erupts from a point you choose within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. On a failed save, a target takes 8d6 thunder damage and is deafened for the duration. On a successful save, a creature takes half as much damage and isn't deafened. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.",
		"A nonmagical object that isn't being worn or carried also takes the damage if it's in the form's area." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 3rd."
	]
};
SpellsList["whiff"] = {
	name : "Whiff",
	classes : ["lacer"],
	source : ["ITLOTL", 71],
	level : 3,
	school : "Airlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you are subject to a weapon attack or elemental attack",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "Attacker Dex save or I choose new target for atk (can choose miss); if save, attack vs me as normal but I have resistance to dmg",
	descriptionFull : [
		"You react to an incoming attack, swirling it away from yourself and toward another creature. The creature attempting to strike you must succeed on a Dexterity saving throw. On a failed save, you choose another target for the initiating creature's attack, against whom they resolve the attack normally. You can choose to simply have the attack miss all targets. On a successful save, the attack strikes you normally but you have resistance against the attack's damage."
	]
};
SpellsList["windwall"] = {
	name : "Windwall",
	classes : ["lacer"],
	source : ["ITLOTL", 71],
	level : 3,
	school : "Airlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "4",
	description : "50x15x1-ft wall; when appears Str save or 4d6 Slashing dmg (half on save); blocks gas, small flying crea, most projectiles; Bns Act move 30 ft",
	descriptionFull : [
		"A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.",
		"When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 4d6 slashing damage on a failed save, or half as much damage on a successful one.",
		"The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it.",
		"As a bonus action on your turn, you can move the wall up to 30 feet within range. Creatures only take damage when the wall first appears."
	]
};
//4th level
SpellsList["blinding dust"] = {
	name : "Blinding Dust",
	classes : ["lacer"],
	source : ["ITLOTL", 71],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "Self (30-ft cone)",
	components : "V,S",
	duration : "1 rnd",
	save : "Dex",
	firstCol : "5",
	description : "30-ft cone all Dex save or 5d6+1d6/SL Slashing dmg & blinded until start of my next turn (half & no blind on save)",
	descriptionFull : [
		"You whirl up air and then propel blinding dust from your hand. Creatures in the area must succeed on a Dexterity saving throw. On a failed save, a creature takes 5d6 slashing damage and is blinded until the beginning of your next turn. On a successful save, a creature takes half as much damage and is not blinded." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 4th."
	]
};
SpellsList["cone of the north"] = {
	name : "Cone of the North",
	classes : ["lacer"],
	source : ["ITLOTL", 72],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "Self (60-ft cone)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	firstCol : "5",
	description : "60-ft cone all Str save or 4d8+1d8/SL Bludgeoning dmg & pushed 40 ft (half & not pushed on save)",
	descriptionFull : [
		"A blast of powerful air erupts from your hands. Each creature in a 60-foot cone must make a Strength saving throw. On a failed saving throw, a creature takes 4d8 bludgeoning damage and is pushed 40 feet away from you. On a successful save, a creature takes half as much damage and isn't pushed." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 4th."
	]
};
SpellsList["dust angel"] = {
	name : "Dust Angel",
	classes : ["lacer"],
	source : ["ITLOTL", 72],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "5",
	description : "5-ft cube vortex; end turn in 5ft Str save or 4d8+1d8/SL Bludg. dmg & pushed 10 ft (half & no push on save); Bns Act to move",
	descriptionFull : [
		"Choose an unoccupied 5-foot cube of air that you can see within range. You whirl the air in a small vortex that you control which lasts for the form's duration.",
		"Any creature that ends its turn within 5 feet of the dust angel must make a Strength saving throw. On a failed save, the creature takes 4d8 bludgeoning damage and is pushed 10 feet away. On a successful save, the creature takes half as much damage and isn't pushed.",
		"As a bonus action, you can move the dust angel up to 30 feet in any direction. If it moves over sand, dust, loose dirt, or small gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 4th."
	]
};
SpellsList["howling gale"] = {
	name : "Howling Gale",
	classes : ["lacer"],
	source : ["ITLOTL", 72],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "5",
	description : "10-ft rad, 40-ft high cylinder all Dex save or 4d6 Slashing + 4d6 Thunder dmg (half on save); +1d6 (choose type)/SL",
	descriptionFull : [
		"A vertical column of swirling wind roars in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point you choose within range must make a Dexterity saving throw. A creature takes 4d6 slashing damage and 4d6 thunder damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the slashing damage or the thunder damage (your choice) increases by 1d6 for each level above 4th."
	]
};
SpellsList["navin's cyclones"] = {
	name : "Navin's Cyclones",
	classes : ["lacer"],
	source : ["ITLOTL", 72],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	firstCol : "5",
	description : "Create 6+2/SL cyclones; Act/Bns Act to send 1 or 2 up to 60 ft; 5-ft rad Dex save or 2d8 Slashing dmg (half on save)",
	descriptionFull : [
		"You create six cyclones of air in your space, which orbit you for the form's duration. When you initiate the form—and as a bonus action on each of your turns thereafter—you can expend one or two of the cyclones, sending them streaking toward a point or points you choose within 60 feet of you.",
		"Once a cyclone reaches its destination or impacts against a solid surface, the cyclone explodes. Each creature within 5 feet of the point where the cyclone explodes must make a Dexterity saving throw. A creature takes 2d8 slashing damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the number of cyclones created increases by two for each level above 4th."
	]
};
SpellsList["sandstorm"] = {
	name : "Sandstorm",
	classes : ["lacer"],
	source : ["ITLOTL", 72],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "150 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "5",
	description : "40-ft rad, 20-ft tall cylinder; hvy obscure, diff terrain; enter/start turn Dex save or prone; Conc. requires Con save vs Ki DC; Bns Act move 30ft",
	descriptionFull : [
		"Until the form ends, blinding air and debris whirl in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused. The whirling debris makes the area difficult terrain.",
		"When a creature enters the form's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone.",
		"If a creature is concentrating in the form's area, the creature must make a successful Constitution saving throw against your ki save DC or lose concentration.",
		"As a bonus action on your turn, you can move the storm up to 30 feet within range."
	]
};
SpellsList["spirit of air"] = {
	name : "Spirit of Air",
	classes : ["lacer"],
	source : ["ITLOTL", 73],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	firstCol : "5",
	description : "Ranged atks vs me have Disadv; Adv on Dex saves; Act 15-ft cube in 60 ft Con save or 2d10 Bludg. + 2d10 Thunder dmg & pushed 10 ft (half/no push on save); +1d10 (choose type)/SL",
	descriptionFull : [
		"Until the form ends, wind fiercely whirls around you, and you gain the following benefits:",
		"\u2022 Ranged attacks made against you have disadvantage on the attack roll.",
		"\u2022 You have advantage on Dexterity saving throws.",
		"\u2022 You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage and 2d10 thunder damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube." + AtHigherLevels + "When you initiate this form at a higher level, the bludgeoning damage or the thunder damage (your choice) increases by 1d10 for each level above 4th."
	]
};
SpellsList["squall"] = {
	name : "Squall",
	classes : ["lacer"],
	source : ["ITLOTL", 73],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "5",
	description : "200x200x50-ft wall; Str save or 4d10 Bludgeoning dmg (half on save); moves 50 ft/rnd, shrinks 50 ft & dmg drops 1d10/rnd",
	descriptionFull : [
		"A wall of air rises at a point you choose within range. You can make the wall up to 200 feet long, 200 feet high, and 50 feet thick. The wall lasts for the duration.",
		"When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 4d10 bludgeoning damage, or half as much damage on a successful save.",
		"At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 4d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall’s height is reduced by 50 feet, and the damage creatures take from the form on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the form ends.",
		"A creature caught in the wall can attempt to move, but must make a successful Strength (Athletics) check against your ki save DC in order to do so. If it fails the check, it can’t move. A creature that moves out of the area falls to the ground."
	]
};
SpellsList["wind slice"] = {
	name : "Wind Slice",
	classes : ["lacer"],
	source : ["ITLOTL", 73],
	level : 4,
	school : "Airlacer",
	time : "1 a",
	range : "Self (30-ft cone)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	firstCol : "5",
	description : "30-ft cone all Str save or 4d10+1d10/SL Slashing dmg & knocked prone (half & not prone on save)",
	descriptionFull : [
		"You create a whirl of air which slices into creatures in a 30-foot cone. Creatures in the area must succeed on a Strength saving throw. On a failed save, a creature takes 4d10 slashing damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 4th."
	]
};
//5th level
SpellsList["empyrean strike"] = {
	name : "Empyrean Strike",
	classes : ["lacer"],
	source : ["ITLOTL", 73],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "6",
	description : "Melee ki atk vs up to 5 crea in range for 6d10 Bludgeoning dmg; teleport to 5 ft of a target",
	descriptionFull : [
		"You swirl a vortex of wind around your hands and move with blinding speed. Choose up to five creatures you can see within range. Make a melee ki attack against each target. On a hit, a target takes 6d10 bludgeoning damage.",
		"You can then end the form in an unoccupied space you can see within 5 feet of one of the targets you hit or missed. This form does not require any of your movement."
	]
};
SpellsList["hand of the tempest"] = {
	name : "Hand of the Tempest",
	classes : ["lacer"],
	source : ["ITLOTL", 74],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "Large hand moves 60 ft as Bns Act; can Strike (4d8+2d8/SL Bludgeoning), Push, Grapple, or Interpose (half cover)",
	descriptionFull : [
		"You create a Large hand of whirling, forcful air in an unoccupied space that you can see within range. The gust lasts for the form's duration, and it moves at your command, mimicking the movements of your hands.",
		"The gust is a tightly focused vortex of wind, and is an object with AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the form ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The gust doesn't fill its space.",
		"When you initiate the form, and as a bonus action on your subsequent turns, you can move the gust up to 60 feet and then cause one of the following effects with it.",
		"Focused Strike. The gust strikes one creature or object within 5 feet of it. Make a melee ki attack for the gust using your game statistics. On a hit, the target takes 4d8 bludgeoning damage.",
		"Forceful Push. The gust attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the gust's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the gust pushes the target up to 5 feet plus a number of feet equal to five times your ki ability modifier. The gust moves with the target to remain within 5 feet of it.",
		"Howling Gust. The gust attempts to grapple a Huge or smaller creature within 5 feet of it. You use the gust's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the gust is grappling a target, you can use a bonus action to have the gust crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your ki ability modifier.",
		"Interposing Wind. The gust interposes itself between you and a creature you choose until you choose a new target. The gust moves to stay between you and the target, providing you with half cover against the target. The target can't move through the gust's space if its Strength score is less than or equal to the gust's Strength score. If its Strength score is higher than the gust's Strength score, the target can move toward you through the gust's space, but that space is difficult terrain for the target." + AtHigherLevels + "When you initiate this form at a higher level, the damage from the Focused Strike option increases by 2d8 and damage from the Howling Gust option increases by 2d6 for each level above 5th."
	]
};
SpellsList["hurricane"] = {
	name : "Hurricane",
	classes : ["lacer"],
	source : ["ITLOTL", 74],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "6",
	description : "30-ft rad diff. terrain; start turn in area Str save or 8d6+1d6/SL Slashing dmg & pulled 10 ft to center (half & no pull on save); Bns Act move 30ft",
	descriptionFull : [
		"A 10-foot-deep mass of whirling wind appears and swirls in a 30-foot radius centered on a point on the ground you choose within range. Until the form ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 8d6 slashing damage and be pulled 10 feet toward the center. On a successful save, a creature takes half as much damage and is not pulled.",
		"As a bonus action on your turn, you can move the hurricane up to 30 feet within range." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 5th."
	]
};
SpellsList["potent coriolis"] = {
	name : "Potent Coriolis",
	classes : ["lacer"],
	source : ["ITLOTL", 74],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "Self (10-ft radius)",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "10-ft rad bubble; protects from forms of 4th-level or lower initiated from outside",
	descriptionFull : [
		"You whirl a 10-foot-radius bubble of howling air which protects you from harmful effects. Any form or spell of 4th-level or lower initiated from outside of the barrier can't affect creatures or objects within it, even if the form is initiated using additional ki points to raise its level. Forms can target creatures and objects within the barrier, but it has no effect on them. Similarly, the area within the globe is excluded from the areas affected by such forms."
	]
};
SpellsList["prison of the west"] = {
	name : "Prison of the West",
	classes : ["lacer"],
	source : ["ITLOTL", 74],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "6",
	description : "10-ft rad, 50-ft high cylinder; unanchored crea/obj Dex save or forced to top of area for duration",
	descriptionFull : [
		"This form creates an incredible updraft of air in a 10-foot-radius, 50-foot-high cylinder centered on a point you choose within range. All creatures and objects that aren't somehow anchored to the ground in the area can make a Dexterity saving throw. On a successful save, a creature is pushed to the closest point outside of the area, or it can choose to grab onto a fixed object it can reach, thus avoiding the effect. On a failed save, a creature is forced upward and reaches the top of the area.",
		"If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.",
		"At the end of the duration, affected objects and creatures fall back down."
	]
};
SpellsList["suffocate"] = {
	name : "Suffocate",
	classes : ["lacer"],
	source : ["ITLOTL", 75],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "6",
	description : "Target Con save or restrained; 3 fails falls unconscious; full duration target dies; no effect if doesn't breathe air",
	descriptionFull : [
		"You begin to channel the void, pulling the air from the lungs of a creature within range, leaving nothing in their lungs for them to breath. One target you choose within range must make a Constitution saving throw. On a failed save, it is restrained as it begins to struggle for breath. On a successful save, the creature is not affected.",
		"A creature restrained by this form must make another Constitution saving throw at the end of each of its turns for the duration. If it successfully saves against this form three times, the form ends. If it fails its save three times, it falls unconscious for the duration. The successes and failures don’t need to be consecutive; keep track of both until the target collects three of a kind.",
		"If you maintain your concentration on this form for the entire possible duration, the target dies.",
		"This form has no effect on creatures which do not breath air."
	]
};
SpellsList["tornado"] = {
	name : "Tornado",
	classes : ["lacer"],
	source : ["ITLOTL", 75],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "300 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "6",
	description : "5-ft rad, 20-ft high cylinder; enter/in tornado Dex save or 8d6+1d6/SL Slashing dmg (half on save); Large/smaller Str save or restrained inside",
	descriptionFull : [
		"A tornado howls down to a point on the ground you specify. The tornado is a 5-foot radius, 20-foot high cylinder centered on that point. Until the form ends, you can use your action to move the tornado up to 30 feet in any direction along the ground. The tornado sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone.",
		"A creature must make a Dexterity saving throw the first time on a turn that it enters the tornado or that the tornado enters its space, including when the tornado first appears. A creature takes 8d6 slashing damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the tornado until the form ends. When a creature starts its turn restrained by the tornado, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the tornado and falls when the form ends, unless the creature has some means to stay aloft.",
		"A restrained creature can use an action to make a Strength or Dexterity check against your ki save DC. If successful, the creature is no longer restrained by the tornado and is hurled 3d6 x 10 feet away from it in a random direction." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 5th."
	]
};
SpellsList["touch the sky"] = {
	name : "Touch the Sky",
	classes : ["lacer"],
	source : ["ITLOTL", 75],
	level : 5,
	school : "Airlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "Leap 60 ft without provoking opp atks or taking falling dmg; Bns Act on later turns to leap again",
	descriptionFull : [
		"You fling yourself gracefully up to 60 feet to an unoccupied space you can see. This movement does not provoke opportunity attacks, and you do not take any falling damage from this movement. On each of your turns before the form ends, you can use a bonus action to leap in this way again."
	]
};
SpellsList["wind control"] = {
	name : "Wind Control",
	classes : ["lacer"],
	source : ["ITLOTL", 75],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "300 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "6",
	description : "Control air in 100-ft cube (Gusts, Downdraft, Updraft); Act to switch or halt/restart",
	descriptionFull : [
		"You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you initiate the form. The effect lasts for the form's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted.",
		"\u2022 Gusts: A wind picks up within the cube, continually blowing in a horizontal direction that you choose. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that pass through it or that are made against targets within the cube have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.",
		"\u2022 Downdraft: You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.",
		"\u2022 Updraft: You cause a sustained updraft within the cube, rising upward from the cube's bottom edge. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
	]
};
SpellsList["windspout"] = {
	name : "Windspout",
	classes : ["lacer"],
	source : ["ITLOTL", 75],
	level : 5,
	school : "Airlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "6",
	description : "+60 ft speed, fly up to 90 ft; half-cover; 1 crea has Disadv. on first save vs my forms",
	descriptionFull : [
		"You create a snake of coiling wind which lifts you anywhere you choose. For the duration, you gain the following benefits:",
		"\u2022 Your movement speed increases by 60 feet. You can move up to 90 feet above the ground while in the spout. Your movement does not provoke opportunity attacks.",
		"\u2022 You have half-cover against all attacks made against you for the duration.",
		"\u2022 If you initiate a form while in the spout which requires a saving throw, you can designate one creature which will be affected by your form. This creature has disadvantage on the first saving throw it makes against your form."
	]
};
//Earth forms
//Basic form
SpellsList["basic earthlacing"] = {
	name : "Basic Earthlacing",
	classes : ["lacer"],
	source : ["ITLOTL", 87],
	level : 0,
	school : "Earthlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "5-ft cube: animate shapes, make/clear diff. terrain, excavate 5 ft, or make 5-ft hole in \u22645 ft wall; +5-ft cube at CL 5, 11, 17",
	descriptionFull : [
		"Anyone who is an earthlacer can initiate the following effects as an action within a 5-foot cube.",
		"\u2022 You cause earth to form into simple shapes and animate at your direction.",
		"\u2022 You can cause dirt or stone you target to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain.",
		"\u2022 You can target loose earth, instantly excavating it and depositing it up to 5 feet away. This movement doesn't have enough force to cause damage.",
		"\u2022 You target one stone or earthen wall within 30 feet, creating a 5-foot-radius hole. This creates an opening large enough for a Medium creature to easily walk through. The wall must be less than 5 feet thick in order for this to be effective." + "\n   " + toUni("Cantrip Upgrade") + ". The area you can affect increases by 5 feet when you reach 5th level (10-foot cube), 11th level (15-foot cube), and 17th level (20-foot cube)."
	]
};
//1st level
SpellsList["battering earth"] = {
	name : "Battering Earth",
	classes : ["lacer"],
	source : ["ITLOTL", 88],
	level : 1,
	school : "Earthlacer",
	time : "1 a",
	range : "Self (10-ft radius)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "2",
	description : "10+5/SL-ft rad Dex save or 2d6+1d6/SL Bludgeoning dmg and can't take reactions until next turn (half on save)",
	descriptionFull : [
		"You throw out bursts of stone which batter all creatures within 10 feet of you. Each creature in that area must make a Dexterity saving throw. On a failed save, a target takes 2d6 bludgeoning damage and can't take reactions until its next turn. On a successful save, a creature takes half as much damage, and suffers no other effect." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 and the radius increases by 5 feet for each level above 1st."
	]
};
SpellsList["burst ring"] = {
	name : "Burst Ring",
	classes : ["lacer"],
	source : ["ITLOTL", 88],
	level : 1,
	school : "Earthlacer",
	time : "1 a",
	range : "Self (15-ft cube)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	firstCol : "2",
	description : "15+5/SL-ft cube Str save or 2d6+1d6/SL Bludgeoning dmg & pushed 10 ft away (half & not pushed on save)",
	descriptionFull : [
		"You create a wave of earth that rushes out at all creatures in range. Each creature in a 15-foot cube originating from you must make a Strength saving throw. On a failed save, a creature takes 2d6 bludgeoning damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage and isn't pushed." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 and the cube's size increases by 5 feet for each level above 1st."
	]
};
SpellsList["clay coaster"] = {
	name : "Clay Coaster",
	classes : ["lacer"],
	source : ["ITLOTL", 88],
	level : 1,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "2",
	description : "Create 3-ft diam. horizontal slab, holds \u2264500 lb; Bns Act to move 60 ft or drop and reform",
	descriptionFull : [
		"This form creates a circular, horizontal slab of earth, 3 feet in diameter and 1 inch thick, in an unoccupied space of your choice that you can see within range. The coaster remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the form ends, and everything on the coaster falls to the ground.",
		"As a bonus action on your turn, you can move the coaster up to 60 feet anywhere within range. You can drop the coaster at any point and form a new one as a bonus action for the duration."
	]
};
SpellsList["dust cloud"] = {
	name : "Dust Cloud",
	classes : ["lacer"],
	source : ["ITLOTL", 88],
	level : 1,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "2",
	description : "20+20/SL-ft rad heavily obscured; wind disperses; Bns Act move cloud 30 ft",
	descriptionFull : [
		"You create a 20-foot-radius sphere of dust centered on a point you choose within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration, or until dispersed by a wind of moderate or greater speed (at least 10 miles per hour).",
		"As a bonus action on your turn, you can move the dust up to 30 feet anywhere within range." + AtHigherLevels + "When you initiate this form at a higher level, the radius of the cloud increases by 20 feet for each level above 1st."
	]
};
SpellsList["grasping earth"] = {
	name : "Grasping Earth",
	classes : ["lacer"],
	source : ["ITLOTL", 88],
	level : 1,
	school : "Earthlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "2",
	description : "Next elemental hit, target Str save or restrained & takes 1d6+1d6/SL Bludg. dmg at start of its turn; Act. Str check escape",
	descriptionFull : [
		"The next time you hit a creature with an elemental attack before this form ends, a burst of earth latches onto the creature's feet and solidifies, holding them to the ground. The target must succeed on a Strength saving throw or be restrained by the earth until the form ends. If the target succeeds on the save, they destroy the earth and break free.",
		"While restrained by this form, the target takes 1d6 bludgeoning damage at the start of each of its turns. A creature restrained by your stone or one that can touch the creature can use its action to make a Strength check against your ki save DC. On a success, the target is freed." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 1st."
	]
};
SpellsList["gravel shot"] = {
	name : "Gravel Shot",
	classes : ["lacer"],
	source : ["ITLOTL", 89],
	level : 1,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "2",
	description : "Spell atk 1d10 Bludg. dmg; target & all in 5 ft Dex save or 2d6+1d6/SL Bludg. dmg",
	descriptionFull : [
		"You conjure a compacted stone and propel it toward one creature within range. Make a ranged ki attack against the target. On a hit, the target takes 1d10 bludgeoning damage. Hit or miss, the stone then explodes. The target and each creature within 5 feet of the point where the stone exploded must succeed on a Dexterity saving throw or take 2d6 bludgeoning damage." + AtHigherLevels + "When you initiate this form at a higher level, the explosion damage increases by 1d6 for each level above 1st."
	]
};
SpellsList["land leap"] = {
	name : "Land Leap",
	classes : ["lacer"],
	source : ["ITLOTL", 89],
	level : 1,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "2",
	description : "5 willing creatures within 20+10/SL ft of each other have jump distance tripled",
	descriptionFull : [
		"You create a fluidity in the earth, allowing creatures to perform mighty leaps. Choose up to five willing creatures within range, all of which must be within 20 feet of one another. A target's jump distance is tripled until the form ends." + AtHigherLevels + "When you initiate this form at a higher level, the distance targets can be from one another increases by 10 feet for each level above 1st."
	]
};
SpellsList["quicksand"] = {
	name : "Quicksand",
	classes : ["lacer"],
	source : ["ITLOTL", 89],
	level : 1,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "2",
	description : "20+20/SL-ft sq diff. terrain; crea in area Str save or grappled (Act Str check escape)",
	descriptionFull : [
		"Sand floods a 20-foot square starting from a point within range and then softens, catching hold of all creatures touching the ground. For the duration, the ground in the area is difficult terrain.",
		"A creature in the area when you initiate the form must succeed on a Strength saving throw or be grappled by the sand until the form ends. A creature restrained by the sand can use its action to make a Strength check against your ki save DC. On a success, it frees itself." + AtHigherLevels + "When you initiate this form at a higher level, the range and the radius of the square increase by 20 feet for each level above 1st."
	]
};
SpellsList["rock blast"] = {
	name : "Rock Blast",
	classes : ["lacer"],
	source : ["ITLOTL", 89],
	level : 1,
	school : "Earthlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "2",
	description : "Next elemental hit extra 2d10+1d10/SL Bludg. dmg, target Str save or pushed 10 ft & prone",
	descriptionFull : [
		"The first time you hit with an elemental attack during this form's duration, your earth bursts with power that is audible within 300 feet of you, and the attack deals an extra 2d10 bludgeoning damage to the target.",
		"Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 1st."
	]
};
SpellsList["soft sand"] = {
	name : "Soft Sand",
	classes : ["lacer"],
	source : ["ITLOTL", 89],
	level : 1,
	school : "Earthlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you or a creature within 60 feet of you falls",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "2",
	description : "10+20/SL-ft sq patch no fall dmg & land on feet; Rea to move patch 30 ft",
	descriptionFull : [
		"A 10-foot square patch of earth or stone centered on a point within range becomes unnaturally soft. Any creature which falls into this area takes no falling damage and can land on its feet.",
		"As a reaction until this form ends, you can move the patch up to 30 feet within range." + AtHigherLevels + "When you initiate this form at a higher level, the range of the form and the size of the square increase by 20 feet for each level above 1st."
	]
};
SpellsList["soil scuttle"] = {
	name : "Soil Scuttle",
	classes : ["lacer"],
	source : ["ITLOTL", 89],
	level : 1,
	school : "Earthlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "2",
	description : "I can take the Dash action when initiated and as a bonus action on each of my turns",
	descriptionFull : [
		"This form allows you to move at an incredible pace. When you initiate this form, and then as a bonus action on each of your turns until the form ends, you can take the Dash action."
	]
};
SpellsList["shield of stone"] = {
	name : "Shield of Stone",
	classes : ["lacer"],
	source : ["ITLOTL", 89],
	level : 1,
	school : "Earthlacer",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "2",
	description : "One creature I choose within range gains a +2 bonus to AC",
	descriptionFull : [
		"A floating disc of stone hovers around a creature of your choice within range, granting it a +2 bonus to AC for the duration."
	]
};
SpellsList["terror firma"] = {
	name : "Terror Firma",
	classes : ["lacer"],
	source : ["ITLOTL", 90],
	level : 1,
	school : "Earthlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "2",
	description : "Reaction when damaged by a crea in 60 ft; target Dex save or 2d10+1d10/SL Bludg. dmg (half on save)",
	descriptionFull : [
		"You react quickly, firing a slab of earth at the creature that damaged you. The creature must make a Dexterity saving throw. It takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 1st."
	]
};
//2nd level
SpellsList["earth slide"] = {
	name : "Earth Slide",
	classes : ["lacer"],
	source : ["ITLOTL", 90],
	level : 2,
	school : "Earthlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "+20 ft speed, glide up to 30 ft above ground; slides remain until my next turn (AC 5, 10 HP/5-ft cube)",
	descriptionFull : [
		"You create earthen slides that allow you to glide quickly. Your speed increases by 20 feet, and you can move anywhere up to 30 feet above the ground.",
		"The slides remain behind where you move, and crumble at the beginning of your turn. These slides are objects that can be damaged and thus destroyed. A 5-foot cube of earth has AC 5 and 10 hit points. A creature in the place of one of your slides is pushed to a side of the space of the creature's choice."
	]
};
SpellsList["mountain strike"] = {
	name : "Mountain Strike",
	classes : ["lacer"],
	source : ["ITLOTL", 90],
	level : 2,
	school : "Earthlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "Next elemental hit deals an additional 2d6+1d6/SL damage",
	descriptionFull : [
		"The next time you hit a creature with an elemental attack before this form ends, your strike is infused with the power of earth. On a hit, the attack deals an additional 2d6 damage." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 2nd."
	]
};
SpellsList["sand augur"] = {
	name : "Sand Augur",
	classes : ["lacer"],
	source : ["ITLOTL", 90],
	level : 2,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "3",
	description : "5-ft cube vortex; crea ending turn within 5 ft Str save or 1d8+1d8/SL Bludg. dmg & pushed 10 ft away (half & not pushed on save)",
	descriptionFull : [
		"Choose an unoccupied 5-foot cube that you can see within range. You whirl earth in a small vortex of sand and debris that you control that lasts for the form's duration.",
		"Any creature that ends its turn within 5 feet of the augur must make a Strength saving throw. On a failed save, a creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the augur. On a successful save, a creature takes half as much damage and isn't pushed. As a bonus action, you can move the augur up to 30 feet in any direction. If it moves over sand, dust, loose dirt, or small gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 2nd.",
	]
};
SpellsList["sickening shot"] = {
	name : "Sickening Shot",
	classes : ["lacer"],
	source : ["ITLOTL", 90],
	level : 2,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "3",
	description : "Spell atk hit, target deals half dmg with weapon/elemental atks; Con save end of turn to end",
	descriptionFull : [
		"A compacted stone streaks toward a vital point of a creature you choose within range. Make a ranged ki attack against the target. On a hit, the target deals only half damage with weapon attacks or elemental attacks until the form ends.",
		"At the end of each of the target's turns, it can make a Constitution saving throw against your ki save DC. On a success, the form ends."
	]
};
SpellsList["stone hammer"] = {
	name : "Stone Hammer",
	classes : ["lacer"],
	source : ["ITLOTL", 90],
	level : 2,
	school : "Earthlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "Create hammer (2d8+1d8(3rd & 4th lvl)+1d8(5th lvl) Bludg. dmg, finesse, light, thrown 20/60); adv. on atk if target on diff. terrain of stone/earth; bns act to reform",
	descriptionFull : [
		"You compact earth into your hands, creating a large bludgeoning weapon of stone. This hammer lasts until the form ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 bludgeoning damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the hammer to attack a target that is standing on difficult terrain of stone or earth, you make the attack roll with advantage.",
		"If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the form persists, you can use a bonus action to cause the hammer to reappear in your hand." + AtHigherLevels + "When you initiate this form at 3rd or 4th level, the damage increases to 3d8. When you initiate it at 5th level, the damage increases to 4d8."
	]
};
SpellsList["stronq's earthen grasp"] = {
	name : "Stronq's Earthen Grasp",
	classes : ["lacer"],
	source : ["ITLOTL", 91],
	level : 2,
	school : "Earthlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "3",
	description : "Hand grabs crea in 5 ft, Dex save or 2d6+1d6/SL Bludg. dmg & restrained (Str check escape); Act to crush (Str save 2d6+1d6/SL Bludg, half on save) or move hand",
	descriptionFull : [
		"You choose a 5-foot-square of unoccupied space on the ground that you can see within range. A shifting form of earth resembling a Medium hand rises there and reaches for one creature you can see within 5 feet of it. The target must make a Dexterity saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the form's duration.",
		"As an action, you can cause the hand to crush the restrained target, who must make a Strength saving throw. It takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.",
		"To break out, the restrained target can make a Strength check against your ki save DC. On a success, the target escapes and is no longer restrained by the hand.",
		"As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either." + AtHigherLevels + "When you initiate this form at a higher level, the range increases by 10 feet and the damage increases by 1d6 for each level above 2nd."
	]
};
SpellsList["sudden wall"] = {
	name : "Sudden Wall",
	classes : ["lacer"],
	source : ["ITLOTL", 91],
	level : 2,
	school : "Earthlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you are hit by an attack",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "3",
	description : "5-ft tall wall grants total cover against triggering attack, then remains as cover",
	descriptionFull : [
		"A wall of earth shoots up and protects you. The wall is 5 feet tall and 1 inch thick. The wall grants you total cover against the triggering attack. The wall then remains and can be used for cover normally."
	]
};
SpellsList["terra cotta armor"] = {
	name : "Terra Cotta Armor",
	classes : ["lacer"],
	source : ["ITLOTL", 91],
	level : 2,
	school : "Earthlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "3",
	description : "Gain 10+5/SL temp HP; while I have these temp HP, creatures hitting me with melee atks take 10+5/SL Bludg. dmg",
	descriptionFull : [
		"You quickly cover yourself in shifting stone, protecting you and your gear. You gain 10 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 10 bludgeoning damage." + AtHigherLevels + "When you initiate this form at a higher level, both the temporary hit points and the bludgeoning damage increase by 5 for each level above 2nd."
	]
};
SpellsList["the trembler"] = {
	name : "The Trembler",
	classes : ["lacer"],
	source : ["ITLOTL", 91],
	level : 2,
	school : "Earthlacer",
	time : "1 a",
	range : "Self (10-ft radius)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "3",
	description : "10-ft rad all other crea Dex save or 2d6+1d6/SL Bludg. dmg & prone (half dmg & no prone on save); ground diff terrain",
	descriptionFull : [
		"You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 2d6 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and is not knocked prone. The ground in that area becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 2nd."
	]
};
//3rd level
SpellsList["boulderskin"] = {
	name : "Boulderskin",
	classes : ["lacer"],
	source : ["ITLOTL", 91],
	level : 3,
	school : "Earthlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "4",
	description : "Gain resistance to nonmagical bludgeoning, piercing, and slashing damage",
	descriptionFull : [
		"You cover your body with a fine covering of dust and earth, still allowing you freedom of movement, but hardening against attacks. Until the form ends, you have resistance to nonmagical bludgeoning, piercing, and slashing damage."
	]
};
SpellsList["earth launch"] = {
	name : "Earth Launch",
	classes : ["lacer"],
	source : ["ITLOTL", 92],
	level : 3,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "Unwilling Dex save or 4d10+1d10/SL Bludg. dmg & launched 50+10/SL ft in air (half dmg & no launch on save); willing no dmg & launched 50+10/SL ft",
	descriptionFull : [
		"A pillar of earth bursts from the ground, propelling a creature into the air. An unwilling creature must succeed on a Dexterity saving throw. On a failed save, a creature takes 4d10 bludgeoning damage and is launched 50 feet into the air at an angle you choose. On a successful save, a creature takes half as much damage and is not launched.",
		"A willing creature does not need to make a saving throw and takes no damage, and is launched 50 feet into the air at an angle you choose." + AtHigherLevels + "When you initiate this form at a higher level, the distance a creature is launched increases by 10 feet and the damage increases by 1d10 for each level above 3rd."
	]
};
SpellsList["earthmeld"] = {
	name : "Earthmeld",
	classes : ["lacer"],
	source : ["ITLOTL", 92],
	level : 3,
	school : "Earthlacer",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 8 hr",
	firstCol : "4",
	description : "Meld into large enough stone/earth; move through it (diff. terrain); Wis (Perception) vs ki DC to notice; Bns Act escape/rejoin; 6d6 or 50 Bludg. dmg if stone broken/destroyed",
	descriptionFull : [
		"You step into a stone, earth, or rocky surface large enough to fully contain your body, melding yourself and all the equipment you carry into the earth for the duration. Using your movement, you step into the stone at a point you touch. A Wisdom (Perception) check against your ki save DC is required to notice your form melded with the earth.",
		"While merged with the stone, all Wisdom (Perception) checks are made with disadvantage. You can move along earth and stone, remaining hidden and melded with the earth, although it counts as difficult terrain if you do move through solid stone. As a bonus action on your turn, you can escape or rejoin the earth.",
		"Minor physical damage to the earth doesn't harm you, but its partial destruction or change in its shape (to the extent that you can no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The earth's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to your current location."
	]
};
SpellsList["gravel geyser"] = {
	name : "Gravel Geyser",
	classes : ["lacer"],
	source : ["ITLOTL", 92],
	level : 3,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "20-ft cube Dex save or 3d12+1d12/SL Bludgeoning dmg (half on save); area becomes difficult terrain",
	descriptionFull : [
		"Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. The ground in that area becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d12 for each level above 3rd."
	]
};
SpellsList["landslide"] = {
	name : "Landslide",
	classes : ["lacer"],
	source : ["ITLOTL", 92],
	level : 3,
	school : "Earthlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	firstCol : "4",
	description : "30x10x10-ft wave Str save or 5d8 Bludg. dmg & knocked prone (half dmg & no prone on save); +10 ft rng, +5 ft dims, +1d8 dmg/SL",
	descriptionFull : [
		"You conjure up a wave of earth and stone that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Strength saving throw. On a failure, a creature takes 5d8 bludgeoning damage and is knocked prone. On a success, a creature takes half as much damage and isn't knocked prone." + AtHigherLevels + "When you initiate this form at a higher level, the range of the form increases by 10 feet, the length, width, and height of the wave increase by 5 feet, and the damage increases by 1d8 for each level above 3rd."
	]
};
SpellsList["mouldywarp dive"] = {
	name : "Mouldywarp Dive",
	classes : ["lacer"],
	source : ["ITLOTL", 92],
	level : 3,
	school : "Earthlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "4",
	description : "Burrow 40+10/SL ft (half in rock), tremorsense 40 ft; optionally move half speed to leave Med tunnel",
	descriptionFull : [
		"You gain the ability to burrow through earth and soil rapidly. You gain a burrow speed of 40 feet, and can move half as quickly through solid rock and stone. You also gain tremorsense to a range of 40 feet for the duration.",
		"You can choose to move at half speed to leave a tunnel wide enough for Medium or smaller creatures to follow." + AtHigherLevels + "When you initiate this form at a higher level, your burrowing speed increases by 10 feet for each level above 3rd."
	]
};
SpellsList["rock gauntlet"] = {
	name : "Rock Gauntlet",
	classes : ["lacer"],
	source : ["ITLOTL", 93],
	level : 3,
	school : "Earthlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 hr",
	save : "Str",
	firstCol : "4",
	description : "Spider climb earth; unarmed d6, elemental atk +1d6 dmg; Act to move gauntlet 30 ft/10 lb or spell atk grapple crea in 30 ft; Act restrain if grappled",
	descriptionFull : [
		"You form stone around your hands, feet, or both, creating rocky gauntlets and boots. For the duration, you gain the following benefits:",
		"\u2022 You can move up, down, and across vertical earthen surfaces and upside down along earthen ceilings, while leaving your hands free. You gain a climbing speed equal to your walking speed.",
		"\u2022 You can roll a d6 in place of the normal damage of your unarmed strike. Your elemental attacks deal an additional 1d6 damage.",
		"\u2022 You can move the gauntlet anywhere within 30 feet and control it as an action on your turn, allowing you to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the gauntlet up to 30 feet each time you use it. The gauntlet can carry up to 10 pounds.",
		"\u2022 You can attempt to grapple a creature within 30 feet as an action on your turn. Make a ranged ki attack against a target within range. On a hit, the creature takes no damage but is grappled by the gauntlet. At the end of its turn, a creature can make a Strength saving throw against your ki save DC to escape.",
		"\u2022 If you have a target grappled, you can attempt to restrain the target as an action instead."
	]
};
SpellsList["sandwall"] = {
	name : "Sandwall",
	classes : ["lacer"],
	source : ["ITLOTL", 93],
	level : 3,
	school : "Earthlacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "4",
	description : "30x10x10-ft wall; blocks sight; inside blinded & 3 ft move per 1 ft; Act to move/reconfigure wall",
	descriptionFull : [
		"You make a wall of sand on the ground at a point you can see. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick. It vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall and must spend 3 feet of movement for every 1 foot it moves.",
		"As an action on your turn, you can move the wall and reconfigure it anywhere within range."
	]
};
SpellsList["stone hut"] = {
	name : "Stone Hut",
	classes : ["lacer"],
	source : ["ITLOTL", 93],
	level : 3,
	school : "Earthlacer",
	time : "1 min",
	range : "Self (10-ft radius)",
	components : "V,S",
	duration : "8 hr",
	firstCol : "4",
	description : "10+5/SL-ft rad dome fits me + 8+8/SL Med/1+1/SL Lrg creatures; 5-ft panels AC 15, 30 HP",
	descriptionFull : [
		"A 10-foot-radius dome of stone springs into existance around and above you and remains stationary for the duration.",
		"Eight creatures of Medium size or smaller or one creature of Large size can fit inside the hut with you. The form fails if its area includes a larger creature or more than nine creatures. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.",
		"The hut is an object made of stone which can be damaged. Each 5-foot panel has AC 15 and 30 hit points. Reducing a panel to 0 hit points destroys it and might cause the hut to collapse at the DM's discretion." + AtHigherLevels + "When you initiate this form at a higher level, the radius of the dome increases by 5 feet and can fit eight additional Medium size or smaller creatures or one additional Large size creature for each level above 3rd."
	]
};
//4th level
SpellsList["aftershock"] = {
	name : "Aftershock",
	classes : ["lacer"],
	source : ["ITLOTL", 93],
	level : 4,
	school : "Earthlacer",
	time : "1 a",
	range : "Self (30-ft radius)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	firstCol : "5",
	description : "30-ft rad chosen crea Con save or 3d6 Bludg. and 3d6 Thunder dmg & knocked prone (half & no prone on save); +1d6 (choice) dmg/SL",
	descriptionFull : [
		"You strike the ground, creating a burst of erupting earth that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 3d6 bludgeoning damage and 3d6 thunder damage and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone." + AtHigherLevels + "When you initiate this form at a higher level, the bludgeoning damage or thunder damage (your choice) increases by 1d6 for each level above 4th."
	]
};
SpellsList["churning sphere"] = {
	name : "Churning Sphere",
	classes : ["lacer"],
	source : ["ITLOTL", 94],
	level : 4,
	school : "Earthlacer",
	time : "1 a",
	range : "150 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "5",
	description : "20-ft rad diff terrain; in area Str save or 2d6+1d6/SL Bludg. dmg; Bns Act atk in 60 ft (adv. if in sphere) for 4d6+1d6/SL Bludg.; Bns Act move 30 ft",
	descriptionFull : [
		"A 20-foot-radius sphere or churning earth and stone springs into existence, centered on a point you choose within range. The sphere remains for the form's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain.",
		"Until the form ends, you can use a bonus action on each of your turns to cause a stone to leap from somewhere in the sphere toward one creature you choose within 60 feet of the center. Make a ranged ki attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 bludgeoning damage.",
		"Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen.",
		"As a bonus action on your turn, you can move the sphere up to 30 feet within range. A creature can only be subject to the damage from being in the sphere's area once each round." + AtHigherLevels + "When you initiate this form at a higher level, the damage for each of the effects increases by 1d6 for each level above 4th."
	]
};
SpellsList["clodshot"] = {
	name : "Clodshot",
	classes : ["lacer"],
	source : ["ITLOTL", 94],
	level : 4,
	school : "Earthlacer",
	time : "1 a",
	range : "Self (30-ft cone)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "5",
	description : "30+5/SL-ft cone Dex save or 7d6+1d6/SL Bludgeoning dmg (half on save)",
	descriptionFull : [
		"You create stone bullets which shoot forward in a 30-foot cone. Each creature in the area must make a Dexterity saving throw. A creature takes 7d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the length of the cone increases by 5 feet and the damage increases by 1d6 for each level above 4th."
	]
};
SpellsList["landwave"] = {
	name : "Landwave",
	classes : ["lacer"],
	source : ["ITLOTL", 94],
	level : 4,
	school : "Earthlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "5",
	description : "Jump distance tripled, speed increases by 10+10/SL ft, and additional move from Dash is tripled",
	descriptionFull : [
		"You use the earth to propel your movements with blinding speed. Your jump distance is tripled for the duration, your speed increases by 10 feet, and the additional movement you gain from the Dash action is tripled." + AtHigherLevels + "When you initiate this form at a higher level, your speed increases by 10 feet for each level above 4th."
	]
};
SpellsList["mackar's mini meteors"] = {
	name : "Mackar's Mini Meteors",
	classes : ["lacer"],
	source : ["ITLOTL", 94],
	level : 4,
	school : "Earthlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	firstCol : "5",
	description : "8+2/SL meteors; Act/Bns Act to shoot 1 or 2 w/in 120 ft; 5-ft rad Dex save or 2d6 Bludg. dmg (half on save)",
	descriptionFull : [
		"You create eight tiny meteors in your space. They float in the air and orbit you for the form's duration. When you initiate the form \u2014 and as a bonus action on each of your turns thereafter \u2014 you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creatuer within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the number of meteors creatuers increases by two for each level above 4th."
	]
};
SpellsList["sandstorm"] = {
	name : "Sandstorm",
	classes : ["lacer"],
	source : ["ITLOTL", 94],
	level : 4,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "5",
	description : "40-ft rad, 20-ft high cyl heavily obscured & diff. terrain; enter/start turn Con save 4d10 Bludg. dmg (half on save); Bns Act move 40 ft; +1d10 & +20 ft rng/rad/SL",
	descriptionFull : [
		"Until the form ends, blinding dust and debris falls in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.",
		"The ground in the area is covered with piling sand, making it difficult terrain. When a creature enters the form's area for the first time on a turn or starts its turn there, it must make a Constitution saving throw. It takes 4d10 bludgeoning damage on a failed save, or half as much damage on a successful one.",
		"As a bonus action on your turn, you can move the storm up to 40 feet within range." + AtHigherLevels + "When you initiate this form at a higher level, the range of the form and the radius of the sandstorm increase by 20 feet and the damage increases by 1d10 for each level above 4th."
	]
};
SpellsList["strike of the mountain"] = {
	name : "Strike of the Mountain",
	classes : ["lacer"],
	source : ["ITLOTL", 94],
	level : 4,
	school : "Earthlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "5",
	description : "Melee spell atk vs up to 4+1/SL targets, 4d10+1d10/SL Force dmg; reappear w/in 5 ft of a target without prov. opp. atks",
	descriptionFull : [
		"You strike with the force of earth. Choose up to four creatures you can see within range. Make a melee ki attack against each target. On a hit, a target takes 4d10 force damage.",
		"You can disappear underground and reappear within 5 feet of one of the targets you hit or missed. This movement does not provoke opportunity attacks." + AtHigherLevels + "When you initiate this form at a higher level, the number of creatures you can target increases by one and the damage increases by 1d10 for each level above 4th."
	]
};
//5th level
SpellsList["dustspout"] = {
	name : "Dustspout",
	classes : ["lacer"],
	source : ["ITLOTL", 95],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "6",
	description : "+60 ft speed, fly up to 90 ft; move doesn't provoke opp. attacks; half-cover; 1 crea has disadv. on first save against my forms",
	descriptionFull : [
		"You create a snake of coiling dust which lifts you anywhere you choose. For the duration, you gain the following benefits:",
		"\u2022 Your movement speed increases by 60 feet. You can move up to 90 feet above the ground while in the spout. Your movement does not provoke opportunity attacks.",
		"\u2022 You have half-cover against all attacks made against you for the duration.",
		"\u2022 If you initiate a form while in the spout which requires a saving throw, you can designate one creature which will be affected by your form. This creature has disadvantage on the first saving throw it makes against your form."
	]
};
SpellsList["fault line"] = {
	name : "Fault Line",
	classes : ["lacer"],
	source : ["ITLOTL", 95],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex/Con",
	firstCol : "6",
	description : "30-ft rad diff. ter.; Con save or lose conc.; end of turn Dex save or prone; structures 30 Bludg. dmg; fissures; +20 ft rng, +10 ft rad, +10 dmg/SL",
	descriptionFull : [
		"You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 30-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.",
		"The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature’s concentration is broken.",
		"When you initiate this form and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.",
		"This form can have additional effects depending on the terrain in the area, as determined by the DM.",
		"Fissures: Fissures open throughout the form's area at the start of your next turn after you initiate the form. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 x 10 feet deep, 10 feet wide, and extends from one edge of the form’s area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure’s edge as it opens.",
		"A fissure that opens beneath a structure causes it to automatically collapse (see below).",
		"Structures: The tremor deals 30 bludgeoning damage to any structure in contact with the ground in the area when you initiate the form and at the start of each of your turns until the form ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure’s height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The GM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn’t fall prone or become buried." + AtHigherLevels + "When you initiate this form at a higher level, the range of the form increases by 20 feet, the radius of the disturbance increases by 10 feet, and the damage dealt to structures increases by 10 for each level above 5th."
	]
};
SpellsList["fresh grave"] = {
	name : "Fresh Grave",
	classes : ["lacer"],
	source : ["ITLOTL", 95],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "6",
	description : "1 \u2264Large crea Dex save; Action for next save (success ends); fails: 1=grappled, 2=restrained, 3=paralyzed, 4=buried alive",
	descriptionFull : [
		"You focus on a target within range, attempting to swallow them alive in the earth. Choose a creature of Large size or smaller within range, which must make a Dexterity saving throw. On a successful save, the target is unaffected.",
		"As long as the form persists on a target, you can use your action to subject it to the saving throw again. If a target succeeds on the saving throw at any point, the form ends for that target. Otherwise, they are subjected to penalties according to the number of failures they have accumulated.",
		"One Failure: The target has begun to sink into the earth and is grappled.",
		"Two Failures: The target is buried further and restrained.",
		"Three Failures: The target is sunk almost to its neck and paralyzed.",
		"Four or More Failures: The target is entirely pushed underground and buried alive. The target begins to suffocate unless it does not need to breathe. The target is entirely entombed in the earth, and cannot move its body unless it has a burrow speed."
	]
};
SpellsList["hand of the mountain"] = {
	name : "Hand of the Mountain",
	classes : ["lacer"],
	source : ["ITLOTL", 96],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "Large hand moves 60 ft as Bns Act; can Strike (4d8+2d8/SL Bludgeoning), Push, Grapple, or Interpose (half cover)",
	descriptionFull : [
		"You create a Large hand of stone in an unoccupied space that you can see within range. The hand lasts for the form's duration, and it moves at your command, mimicking the movements of your own hands.",
		"The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the form ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand fills its space.",
		"When you initiate the form and as a bonus action on your subsequent turns, you can move the hand up to 60 feet within range and then cause one of the following effects with it.",
		"Clenched Fist. The hand strikes one creature or object within 5 feet of it. Make a melee ki attack for the hand using your game statistics. On a hit, the target takes 4d8 bludgeoning damage.",
		"Forceful Hand. The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand’s Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your ki ability modifier. The hand moves with the target to remain within 5 feet of it.",
		"Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand’s Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your ki ability modifier.",
		"Interposing Hand. The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand’s space if its Strength score is less than or equal to the hand’s Strength score. If its Strength score is higher than the hand’s Strength score, the target can move toward you through the hand’s space, but that space is difficult terrain for the target." + AtHigherLevels + "When you initiate this form at a higher level, the damage from the Clenched Fist option increases by 2d8 and the damage from the Grasping Hand option increases by 2d6 for each level above 5th.",
	],
};	
SpellsList["impenetrable stone"] = {
	name : "Impenetrable Stone",
	classes : ["lacer"],
	source : ["ITLOTL", 96],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "10-ft rad bubble; forms/spells \u2264 4th+1/SL-level from outside have no effect inside",
	descriptionFull : [
		"You form a 10-foot-radius bubble of thick stone which protects you from harmful effects. Any form or spell of 4th-level or lower initiated from outside of the barrier can't affect creatures or objects within it, even if the form is initiated using additional ki points to raise its level. Forms can target creatures and objects within the barrier, but it has no effect on them. Similarly, the area within the globe is excluded from the areas affected by such abilities. The area within the stone is excluded from the areas affected by such forms." + AtHigherLevels + "When you initiate this form at a higher level, the barrier blocks forms and spells of one level higher for each level above 4th."
	]
};
SpellsList["meteor storm"] = {
	name : "Meteor Storm",
	classes : ["lacer"],
	source : ["ITLOTL", 96],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "150 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "6",
	description : "4 20-ft rad spheres; Dex save or 10d6 Bludgeoning dmg (half on save); affects crea 1/cast; +1d6, +20 ft rng, +10 ft rad/SL",
	descriptionFull : [
		"Enormous boulders crash into four different points you can see within range. Each creature in a 20-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one boulder is affected only once." + AtHigherLevels + "When you initiate this form at a higher level, the range increases by 20 feet, the radius of the boulders increase by 10 feet, and the damage increases by 1d6 for each level above 5th."
	]
};
SpellsList["move rock"] = {
	name : "Move Rock",
	classes : ["lacer"],
	source : ["ITLOTL", 97],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "6",
	description : "Reshape 20-ft area of earth/stone (raise/lower/trench/wall/pillar up to 10 ft); takes 1 min; change area 1/min; +1 hr/SL",
	descriptionFull : [
		"Choose an area of natural earth or stone no larger than 20 feet on a side within range. You can reshape snow and ice in the area in any manner you choose for the duration. You can raise or lower the area’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. So, if you affect a 20-foot square, you can create a pillar up to 10 feet high, raise or lower the square’s elevation by up to 10 feet, dig a trench up to 10 feet deep, and so on. It takes 1 minute for these changes to complete.",
		"At the end of every minute you spend concentrating on the form, you can choose a new area of terrain to affect.",
		"Because the terrain’s transformation occurs slowly, creatures in the area can’t usually be trapped or injured by the ground’s movement.",
		"You can shift structures made of ice to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse." + AtHigherLevels + "When you initiate this form at a higher level, the duration increases by 1 hour for each level above 5th."
	]
};
SpellsList["pillars of the earth"] = {
	name : "Pillars of the Earth",
	classes : ["lacer"],
	source : ["ITLOTL", 97],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "6",
	description : "4+2/SL pillars (5x30-ft); Dex save or lifted; if blocked, 4d8 Bludgeoning dmg & restrained (Act escape); AC 5, 30 HP",
	descriptionFull : [
		"You cause up to four pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar shatters into harmless shards of rock, which creates an area of difficult terrain with a 10-foot radius. The shards last until cleared.",
		"If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.",
		"If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 4d8 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity saving throw (the creature's choice) against your ki save DC. On a success, a creature is no longer restrained and must either move off the pillar or fall off it." + AtHigherLevels + "When you initiate this form at a higher level, you can create two additional pillars for each level above 5th."
	]
};
SpellsList["rockalanche"] = {
	name : "Rockalanche",
	classes : ["lacer"],
	source : ["ITLOTL", 97],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "6",
	description : "50x50x30ft wall Str save or 10d4 Bludg. dmg (half save); moves 30 ft/turn, in wall Str save or 9d4 Bludg. dmg (shrinks 5ft, dmg drops 1d4); +10ft/+20ft & +1d4/SL",
	descriptionFull : [
		"A wall of stone and debris rises at a point you choose within range. You can make the wall up to 50 feet long, 50 feet high, and 30 feet thick. The wall lasts for the duration.",
		"When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 10d4 bludgeoning damage, or half as much damage on a successful save.",
		"At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 30 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 9d4 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall’s height is reduced by 5 feet, and the damage creatures take from the form on subsequent rounds is reduced by 1d4. When the wall reaches 0 feet in height, the form ends.",
		"A creature caught in the wall can move with great effort. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your ki save DC in order to move at all. If it fails the check, it can’t move. A creature that moves out of the area falls to the ground." + AtHigherLevels + "When you initiate this form at a higher level, the length and height of the wall increases by 10 feet, the thickness and speed of the wave increases by 20 feet, and the damage increases by 1d4 for each level above 5th."
	]
};
SpellsList["stonewall"] = {
	name : "Stonewall",
	classes : ["lacer"],
	source : ["ITLOTL", 98],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "10 min",
	save : "Dex",
	firstCol : "6",
	description : "10+2/SL 10x10ft (6-in thick) or 10x20ft (3-in) panels; trap Dex save + rea to move; AC 15, 30 HP/in.",
	descriptionFull : [
		"A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.",
		"If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.",
		"The wall can have any shape you desire, though it can’t occupy the same space as a creature or object. The wall doesn’t need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this form to bridge a chasm or create a ramp.",
		"If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.",
		"The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM’s discretion." + AtHigherLevels + "When you initiate this form at a higher level, the number of 10-foot-by-10-foot panels you can create increases by two for each level above 5th."
	]
};
SpellsList["transmute earth"] = {
	name : "Transmute Earth",
	classes : ["lacer"],
	source : ["ITLOTL", 98],
	level : 5,
	school : "Earthlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "8 hr",
	save : "Str/Dex",
	firstCol : "6",
	description : "40+20/SL-ft cube stone to mud (Str save or restrained, 4ft move per 1ft) or mud to stone (Dex save or restrained)",
	descriptionFull : [
		"You choose an area of stone or mud that you can see that fits within a 40-foot cube and that is within range, and choose one of the following effects.",
		"Transmute Stone to Mud: Nonmagical rock of any sort in the area becomes an equal volume of thick and flowing mud that remains for the form's duration.",
		"If you initiate the form on an area of ground, it becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you initiate the form must make a Strength saving throw. A creature must also make this save the first time it enters the area on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud.",
		"If you initiate the form on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one",
		"Transmute Mud to Stone: Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the form's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a failed save, a creature becomes restrained by the rock. The restrained creature can use an action to try to break free by succeeding on a Strength check (DC 20) or by dealing 25 damage to the rock around it. On a successful save, a creature is shunted safely to the surface to an unoccupied space." + AtHigherLevels + "When you initiate this form at a higher level, the size of the cube of material that you can affect increases by 20 feet."
	]
};
//Fire forms
//Basic form
SpellsList["basic firelacing"] = {
	name : "Basic Firelacing",
	classes : ["lacer"],
	source : ["ITLOTL", 56],
	level : 0,
	school : "Firelacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Animate fire, expand existing flame, or instantly extinguish flames in 5-ft cube +5ft at CL 5, 11, 17",
	descriptionFull : [
		"Anyone who is a firelacer can initiate the following effects within a 5-foot cube.",
		"You cause fire to form into simple shapes and animate at your direction.",
		"\u2022 You can cause a flickering flame to appear from your body (usually in your hand). The flame remains there as long as you concentrate, and harms neither you nor your equipment. The flame sheds bright light in a 30-foot radius and dim light for an additional 30 feet.",
		"\u2022 You can instantly expand any existing flame in one direction, provided that wood or other fuel is present in the location.",
		"\u2022 You instantly extinguish any flames within a 5-foot cube." + "\n   " + toUni("Cantrip Upgrade") + ". The area you can affect increases by 5 feet and the amount of bright light your fire produces increases by 10 feet when you reach 5th level (10-foot cube, 40 feet of bright light), 11th level (15-foot cube, 50 feet of bright light), and 17th level (20-foot cube, 60 feet of bright light)."
	]
};
//1st level
SpellsList["backfire"] = {
	name : "Backfire",
	classes : ["lacer"],
	source : ["ITLOTL", 57],
	level : 1,
	school : "Firelacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "2",
	description : "Creature that damaged me takes 2d10+1d10/SL Fire dmg (save half)",
	descriptionFull : [
		"You create a whirl of fire, and the creature that damaged you is momentarily surrounded by flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 1st."
	]
};
SpellsList["battering flames"] = {
	name : "Battering Flames",
	classes : ["lacer"],
	source : ["ITLOTL", 57],
	level : 1,
	school : "Firelacer",
	time : "1 a",
	range : "Self (10-ft radius)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "2",
	description : "All in 10-ft rad 2d6+1d6/SL Bludgeoning dmg and can't take reactions; save half & no effect",
	descriptionFull : [
		"Tendrils of fire erupt from you and batter all creatures within 10 feet of you. Each creature in the area must make a Dexterity saving throw. On a failed save, a target takes 2d6 bludgeoning damage and can't take reactions until its next turn. On a successful save, the creature takes half as much damage, but suffers no other effect." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 1st."
	]
};
SpellsList["blazing missile"] = {
	name : "Blazing Missile",
	classes : ["lacer"],
	source : ["ITLOTL", 57],
	level : 1,
	school : "Firelacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "2",
	description : "Create 3+1/SL darts that automatically hit for 1d4+1 Fire dmg each",
	descriptionFull : [
		"You create three glowing darts of burning flame. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 fire damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several." + AtHigherLevels + "When you initiate this form at a higher level, the form creates one more dart for each level above 1st."
	]
};
SpellsList["blinding spray"] = {
	name : "Blinding Spray",
	classes : ["lacer"],
	source : ["ITLOTL", 57],
	level : 1,
	school : "Firelacer",
	time : "1 a",
	range : "Self (15-ft cone)",
	components : "V,S",
	duration : "1 round",
	firstCol : "2",
	description : "Roll 6d10+2d10/SL; blind creatures in 15-ft cone from lowest HP up to total",
	descriptionFull : [
		"You work with your fire, heating it to incredible colors before flashing it into the eyes of your enemies. Roll 6d10; the total is how many hit points of creatures this form can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).",
		"Starting with the creature that has the lowest current hit points, each creature affected by this form is blinded until the form ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected." + AtHigherLevels + "When you initiate this form at a higher level, roll an additional 2d10 for each level above 1st."
	]
};
SpellsList["dragontongue"] = {
	name : "Dragontongue",
	classes : ["lacer"],
	source : ["ITLOTL", 57],
	level : 1,
	school : "Firelacer",
	time : "1 a",
	range : "Self (15-ft cone)",
	components : "V,S",
	duration : "1 round",
	save : "Dex",
	firstCol : "2",
	description : "15-ft cone 3d6+1d6/SL Fire dmg & ignites obj; save half",
	descriptionFull : [
		"You form a cone of swirling fire, which shoots forth from your mouth. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 1st."
	]
};
SpellsList["flametongue arrow"] = {
	name : "Flametongue Arrow",
	classes : ["lacer"],
	source : ["ITLOTL", 57],
	level : 1,
	school : "Firelacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take when a creature within 60 feet of you is hit by an arrow or crossbow bolt",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "2",
	description : "Target hit by arrow/bolt takes an extra 2d6+1d6/SL Fire dmg",
	descriptionFull : [
		"You cause fire to burst from an arrow or bolt in flight, erupting it in flame. The creature struck by this arrow or bolt takes an additional 2d6 fire damage from the attack." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 1st."
	]
};
SpellsList["flashbang"] = {
	name : "Flashbang",
	classes : ["lacer"],
	source : ["ITLOTL", 58],
	level : 1,
	school : "Firelacer",
	time : "1 a",
	range : "Self (15-ft cube)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	firstCol : "2",
	description : "15-ft cube 2d8+1d8/SL Fire dmg, pushed 10 ft & ignites obj; save half & not pushed",
	descriptionFull : [
		"A wave of powerful fire sweeps out from you. Each creature in a 15-foot cube originating from you must make a Strength saving throw. On a failed save, a creature takes 2d8 fire damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. The fire ignites any flammable objects in the area that aren't being worn or carried." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 1st."
	]
};
SpellsList["gleaming strike"] = {
	name : "Gleaming Strike",
	classes : ["lacer"],
	source : ["ITLOTL", 58],
	level : 1,
	school : "Firelacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "2",
	description : "No opp. attacks; once per form Adv. on 1 elemental atk for extra 1d8 Fire dmg & +30 ft speed",
	descriptionFull : [
		"Your body begins to emit heat with an inner fire. Until the form ends, your movement doesn't provoke opportunity attacks. Once before the form ends, you can give yourself advantage on one elemental attack on your turn. That attack deals an extra 1d8 fire damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn."
	]
};
SpellsList["searing ray"] = { //edited range, to reflect Scorching Ray which this form was built off of, Orig. Self, which made no sense. New. 120 ft.
	name : "Searing Ray",
	classes : ["lacer"],
	source : ["ITLOTL", 58],
	level : 1,
	school : "Firelacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "2",
	description : "3+1/SL ranged ki atks vs. targets in range; each hits for 2d4 Fire dmg",
	descriptionFull : [
		"You create three swirls of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged ki attack for each ray. On a hit, the target takes 2d4 fire damage." + AtHigherLevels + "When you initiate this form at a higher level, you create one additional ray for each level above 1st."
	]
};
SpellsList["shield of flame"] = {
	name : "Shield of Flame",
	classes : ["lacer"],
	source : ["ITLOTL", 58],
	level : 1,
	school : "Firelacer",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "2",
	description : "Target in range gains +2 AC for duration",
	descriptionFull : [
		"A burning tongue of fire hovers around a creature of your choice within range, granting it a +2 bonus to AC for the duration."
	]
};
SpellsList["smoke cloud"] = {
	name : "Smoke Cloud",
	classes : ["lacer"],
	source : ["ITLOTL", 58],
	level : 1,
	school : "Firelacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "2",
	description : "20+20/SL-ft rad heavily obscures; Bns Act to move 30 ft; strong wind disperses",
	descriptionFull : [
		"You create a 20-foot-radius sphere of heated smoke centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration, or until dispersed by a wind of moderate or greater speed (at least 10 miles per hour). As a bonus action on your turn, you can move the smoke up to 30 feet anywhere within range." + AtHigherLevels + "When you initiate this form at a higher level, the radius of the cloud increases by 20 feet for each level above 1st."
	]
};
//2nd level
SpellsList["burn metal"] = {
	name : "Burn Metal",
	classes : ["lacer"],
	source : ["ITLOTL", 58],
	level : 2,
	school : "Firelacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "3",
	description : "Target metal obj 2d8+1d8/SL Fire dmg to touching crea (Bns Act again); Con save or drop/disadv on atks",
	descriptionFull : [
		"Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to begin to sear with a powerful burn. Any creature in physical contact with the object takes 2d8 fire damage when you initiate the form. Until the form ends, you can use a bonus action on each of your subsequent turns to cause this damage again.",
		"If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 2nd."
	]
};
SpellsList["fiery leap"] = {
	name : "Fiery Leap",
	classes : ["lacer"],
	source : ["ITLOTL", 58],
	level : 2,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "3",
	description : "Leap 20+5/SL ft; crea in 5 ft of start/end 4d4+1/SL Fire dmg; save half",
	descriptionFull : [
		"You can use your action to hurl yourself to an unoccupied space of your choice within 20 feet. This movement does not provoke opportunity attacks. Creatures within 5 feet of you when you jump and within 5 feet of your landing point must make a Dexterity saving throw. On a failed save, a target takes 4d4 fire damage, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the distance you leap increases by 5 feet and the damage increases by 1d4 for each level above 2nd."
	]
};
SpellsList["fire blast"] = {
	name : "Fire Blast",
	classes : ["lacer"],
	source : ["ITLOTL", 59],
	level : 2,
	school : "Firelacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "3",
	description : "Next elemental hit +4d6+1d6/SL Fire dmg & Str save or pushed 10 ft & prone",
	descriptionFull : [
		"The first time you hit with an elemental attack during this form's duration, your fire bursts with power that is audible within 300 feet of you, and the attack deals an extra 4d6 fire damage to the target.",
		"Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 2nd."
	]
};
SpellsList["firemark"] = { //edited the at higher levels to reflect general damage progression to use same die type as initial damage. Orig +1d6, New +1d8.
	name : "Firemark",
	classes : ["lacer"],
	source : ["ITLOTL", 59],
	level : 2,
	school : "Firelacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	firstCol : "3",
	description : "Ranged ki atk for 4d8+1d8/SL Fire dmg; next atk vs target before my next turn has Adv",
	descriptionFull : [
		"A flash of fire streaks toward a creature of your choice within range. Make a ranged ki attack against the target. On a hit, the target takes 4d8 fire damage, and the next attack roll made against this target before the end of your next turn has advantage." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 2nd."
	]
};
SpellsList["flame falchion"] = {
	name : "Flame Falchion",
	classes : ["lacer"],
	source : ["ITLOTL", 59],
	level : 2,
	school : "Firelacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "Create simple melee weapon (2d8+1d8(3rd & 4th lvl)+1d8(5th lvl) Fire dmg, finesse, light, thrown 20/60); Bns Act to recall",
	descriptionFull : [
		"You create a fiery blade which jets out of your enclosed fist. This flaming weapon lasts until the form ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 fire damage on a hit and has the finesse, light, and thrown properties (range 20/60). It emits bright light in a 20-foot radius and dim light for an additional 20 feet.",
		"If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the form persists, you can use a bonus action to cause the dagger to reappear in your hand." + AtHigherLevels + "When you initiate this form at 3rd or 4th level, the damage increases to 3d8. When you initiate it at 5th level, the damage increases to 4d8."
	]
};
SpellsList["mirage"] = {
	name : "Mirage",
	classes : ["lacer"],
	source : ["ITLOTL", 59],
	level : 2,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "Attacks vs. me have Disadv., unless attacker has Blindsight or Truesight",
	descriptionFull : [
		"You heat the air around you, causing it to shimmer and blur. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
	]
};
SpellsList["scorching flare"] = {
	name : "Scorching Flare",
	classes : ["lacer"],
	source : ["ITLOTL", 59],
	level : 2,
	school : "Firelacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "3",
	description : "Next elemental hit +2d10+1d10/SL Fire dmg & ignites; start of turn Con save or 1d10 Fire dmg; Act to douse",
	descriptionFull : [
		"The next time you hit a creature with an elemental attack during this form's duration, your fire flares with white-hot intensity, and the attack deals an extra 2d10 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the form ends, the target must make a Constitution saving throw. On a failed save, it takes 1d10 fire damage. On a successful save, the form ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the form ends." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 2nd."
	]
};
SpellsList["whirling sphere"] = {
	name : "Whirling Sphere",
	classes : ["lacer"],
	source : ["ITLOTL", 59],
	level : 2,
	school : "Firelacer",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "3",
	description : "5-ft sphere; end turn in 5ft or rammed Con save or 2d6+1d6/SL Fire dmg (half on save); Bns Act move 30 ft",
	descriptionFull : [
		"A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Constitution saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.",
		"As a bonus action on your turn, you can move the sphere up to 30 feet within range. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 2nd."
	]
};
//3rd level
SpellsList["blinding shot"] = {
	name : "Blinding Shot",
	classes : ["lacer"],
	source : ["ITLOTL", 60],
	level : 3,
	school : "Firelacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "4",
	description : "Next elemental hit +3d8+1d8/SL Fire dmg; Con save or blinded; save end of turn",
	descriptionFull : [
		"The next time you hit a creature with an elemental attack during this form's duration, your fire flares with bright light, and the attack deals an extra 3d8 fire damage to the target.",
		"Additionally, the target must succeed on a Constitution saving throw or be blinded until the form ends.",
		"A creature blinded by this form makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 3rd."
	]
};
SpellsList["dragonshield"] = {
	name : "Dragonshield",
	classes : ["lacer"],
	source : ["ITLOTL", 60],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "4",
	description : "Gain Fire resistance; melee attackers within 5 ft take 2d8+1d8/SL Fire dmg on hit",
	descriptionFull : [
		"Thin flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the form early by using an action to dismiss it.",
		"The flames provide you with a shield against the elements. You gain resistance to fire damage.",
		"In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame, and the attacker takes 2d8 fire damage." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 3rd."
	]
};
SpellsList["fire pinwheel"] = {
	name : "Fire Pinwheel",
	classes : ["lacer"],
	source : ["ITLOTL", 60],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "4",
	description : "10-ft rad wheel; end turn in 5ft or rammed Dex save or 2d6+1d6/SL Fire dmg (half on save); Bns Act move 20ft",
	descriptionFull : [
		"You create a 5-foot-wide, 10-foot-radius wheel of fire in an unoccupied space of your choice within range which lasts for the duration. Any creature that ends its turn within 5 feet of the wheel must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.",
		"As a bonus action on your turn, you you can move the wheel up to 20 feet within range. If you whirl the pinwheel over a creature, that creature must make the saving throw against the wheel's damage. A creature can only be subject to the wheel's effect once per turn. The wheel ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 3rd."
	]
};
SpellsList["fire whip"] = { //edited the at higher levels to reflect general damage progression to use same die type as initial damage. Orig +1d6, New +1d12.
	name : "Fire Whip",
	classes : ["lacer"],
	source : ["ITLOTL", 60],
	level : 3,
	school : "Firelacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "4",
	description : "Create fiery whips; Act for ranged ki atk vs target in 60 ft for 2d12+1d12/SL Fire dmg",
	descriptionFull : [
		"You create long fiery whips from your arms for the duration. As an action on each of your turns for the duration (including the turn when you initiate this form), you can make a ranged ki attack against a target within 60 feet. On a hit, the target takes 2d12 fire damage." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d12 for each level above 3rd."
	]
};
SpellsList["firecall"] = {
	name : "Firecall",
	classes : ["lacer"],
	source : ["ITLOTL", 60],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	firstCol : "4",
	description : "All in 5-ft rad of pt Dex save or 3d10+1d10/SL Fire dmg (half on save); Act to call again",
	descriptionFull : [
		"You target an area with burning cinders. When you initiate the form, choose a point you can see within range. A glowing flame flashes from you to that point and bursts. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 fire damage on a failed save, or half as much damage on a successful one.",
		"On each of your turns until the form ends, you can use your action to call fire in this way again, targeting the same point or a different one." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 3rd."
	]
};
SpellsList["heat flow"] = {
	name : "Heat Flow",
	classes : ["lacer"],
	source : ["ITLOTL", 61],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "4",
	description : "Gain +2 AC, +20 ft speed, Adv. on Dex saves, and jump distance doubled",
	descriptionFull : [
		"You spark fiery jetstreams from your feet and hands, greatly enhancing your mobility. For the duration, you gain the following benefits:",
		"\u2022 You gain a +2 bonus to AC.",
		"\u2022 Your speed increases by 20 feet.",
		"\u2022 You have advantage on Dexterity saving throws.",
		"\u2022 Your jump distance is doubled."
	]
};
SpellsList["leap of the sun"] = {
	name : "Leap of the Sun",
	classes : ["lacer"],
	source : ["ITLOTL", 61],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "Leap to point in range; crea within 10 ft of origin point Dex save or 3d10+1d10/SL Fire dmg (half on save)",
	descriptionFull : [
		"You focus a blast of fire beneath you, propelling you to an unoccupied space you can see within range. This movement does not provoke opportunity attacks. Each creature within 10 feet of the space you left must make a Dexterity saving throw, taking 3d10 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 3rd."
	]
};
SpellsList["pyre bolt"] = {
	name : "Pyre Bolt",
	classes : ["lacer"],
	source : ["ITLOTL", 61],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "4",
	description : "Ranged ki atk; hit 5d4+1d4/SL Fire dmg + 3d4+1d4/SL at end of next turn; miss half initial dmg",
	descriptionFull : [
		"A white-hot bolt of fire streaks towards a target within range and bursts into a spray of flames. Make a ranged ki attack against the target. On a hit, the target takes 5d4 fire damage immediately and 3d4 fire damage at the end of its next turn. On a miss, the bolt splashes the target with fire for half as much initial damage and no damage at the end of its next turn." + AtHigherLevels + "When you initiate this form at a higher level, the damage (both initial and later) increases by 1d4 for each level above 3rd."
	]
};
SpellsList["pyreball"] = {
	name : "Pyreball",
	classes : ["lacer"],
	source : ["ITLOTL", 61],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "20-ft rad sphere all Dex save or 8d6+1d6/SL Fire dmg (half on save) & ignites obj",
	descriptionFull : [
		"A burning orb of fire streaks to a point you choose within range and then explodes. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.",
		"The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 3rd."
	]
};
SpellsList["sunlight"] = {
	name : "Sunlight",
	classes : ["lacer"],
	source : ["ITLOTL", 61],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "4",
	description : "60-ft rad bright light + 60 ft dim; dispels darkness of 3rd-lvl or lower; Bns Act to move",
	descriptionFull : [
		"You create incredibly bright fire that can illuminate even the deepest darkness. A 60-foot-radius sphere of light shines from a fire you create within range. The sphere is bright light and sheds dim light for an additional 60 feet.",
		"You can move the fire anywhere within range as a bonus action on your turn.",
		"If any of this form's area overlaps with an area of darkness created by a form or spell of 3rd level or lower, the effect that created the darkness is dispelled."
	]
};
SpellsList["weather"] = {
	name : "Weather",
	classes : ["lacer"],
	source : ["ITLOTL", 61],
	level : 3,
	school : "Firelacer",
	time : "1 a",
	range : "Self (40-ft radius)",
	components : "V,S",
	duration : "Conc, 24 hr",
	firstCol : "4",
	description : "40-ft rad temp kept comfortable for duration; no protection from dmg or other hazards",
	descriptionFull : [
		"You are able to control the temperature of the surrounding area, keeping creatures within a 40-foot-radius area comfortable and safe. The area remains a normal temperature, and creatures in the area as well as their equipment do not feel the effects of abnormally hot or cold environments.",
		"This form does not provide any protection from fire or cold damage, nor does it protect against other environmental hazards such as smoke, a lack of air, and so forth."
	]
};
//4th level
SpellsList["barrage of flames"] = {
	name : "Barrage of Flames",
	classes : ["lacer"],
	source : ["ITLOTL", 62],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "Self (60-ft cone)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "5",
	description : "60-ft cone all Dex save or 4d8+1d8/SL Fire dmg (half on save)",
	descriptionFull : [
		"You throw flames across a large area. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 4th."
	]
};
SpellsList["blazing meteors"] = {
	name : "Blazing Meteors",
	classes : ["lacer"],
	source : ["ITLOTL", 62],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	firstCol : "5",
	description : "Create 6+2/SL meteors; Act/Bns Act to send 1 or 2 up to 120 ft; 5-ft rad all Dex save or 2d6 Fire dmg (half on save) per meteor",
	descriptionFull : [
		"You create six tiny meteors of fire in your space. They float in the air and orbit you for the form's duration. When you initiate the form—and as a bonus action on each of your turns thereafter—you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you.",
		"Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the number of meteors increases by two for each level above 4th."
	]
};
SpellsList["burning coals"] = {
	name : "Burning Coals",
	classes : ["lacer"],
	source : ["ITLOTL", 62],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "5",
	description : "20-ft rad difficult terrain; creatures take 4d4+1d4/SL Fire dmg for every 5 ft moved in area",
	descriptionFull : [
		"The ground in a 20-foot radius centered on a point within range begins to burn. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 4d4 fire damage for every 5 feet it travels." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d4 for each level above 4th."
	]
};
SpellsList["choking cloud"] = {
	name : "Choking Cloud",
	classes : ["lacer"],
	source : ["ITLOTL", 62],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "5",
	description : "20-ft rad heavily obscured; start turn in cloud Con save or spend Action choking (immune if no breath/immune poison); Bns Act to move 20 ft",
	descriptionFull : [
		"You create a 20-foot-radius sphere of smoky, superheated air centered on a point within range. The cloud spreads around corners and its area is heavily obscured. The cloud lingers in the air for the duration.",
		"Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn choking and burning. Creatures that don't need to breath or are immune to poison automatically succeed on this saving throw.",
		"A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round.",
		"As a bonus action on your turn, you can move the cloud up to 20 feet anywhere within range."
	]
};
SpellsList["crepuscular ray"] = {
	name : "Crepuscular Ray",
	classes : ["lacer"],
	source : ["ITLOTL", 62],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "Self (30-ft line)",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "5",
	description : "5-ft wide, 30-ft line all Dex save or 4d8+1d8/SL Fire dmg & blinded until end next turn (half & no blind on save); Act to use again",
	descriptionFull : [
		"A beam of roaring flame flashes from your hand in a 5-foot-wide, 30-foot-long line. Each creature in the line must make a Dexterity saving throw. On a failed save, a creature takes 4d8 fire damage and is blinded until the end of its next turn. On a successful save, it takes half as much damage and is not blinded.",
		"You can create a new line of flame as your action on any turn until the form ends.",
		"For the duration, a mote of shining fire burns in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 4th."
	]
};
SpellsList["dragonflight"] = {
	name : "Dragonflight",
	classes : ["lacer"],
	source : ["ITLOTL", 62],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "5",
	description : "Gain a flying speed of 90 ft",
	descriptionFull : [
		"You focus your ki into your extremities, creating roaring flame that can propel you through the air. You gain a flying speed of 90 feet for the duration. When the form ends, you fall if you are still aloft, unless you can stop the fall."
	]
};
SpellsList["fire protection"] = {
	name : "Fire Protection",
	classes : ["lacer"],
	source : ["ITLOTL", 63],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "Self (30-ft radius)",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "5",
	description : "I and up to 8 willing creatures in area gain resistance to Fire dmg",
	descriptionFull : [
		"For the duration, you and up to 8 willing creatures in the area have resistance to fire damage."
	]
};
SpellsList["inferno"] = {
	name : "Inferno",
	classes : ["lacer"],
	source : ["ITLOTL", 63],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "Self (20-ft radius)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "5",
	description : "20-ft rad all Dex save or 8d8+1d8/SL Fire dmg (half on save)",
	descriptionFull : [
		"A vertical burst of flame roars out from you. Each other creature in a 20-foot radius cube centered on you must make a Dexterity saving throw. A creature takes 8d8 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for every level above 4th."
	]
};
SpellsList["pyre storm"] = {
	name : "Pyre Storm",
	classes : ["lacer"],
	source : ["ITLOTL", 63],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "5",
	description : "10-ft rad, 40-ft high cylinder all Dex save or 4d6 Bludgeoning + 4d6 Fire dmg (half on save); area is diff. terrain until end next turn; +1d6 (choose type)/SL",
	descriptionFull : [
		"A burning cinder of flame pounds the ground in a 10-foot-radius, 40-foot-high cylinder centered on a point you choose within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 4d6 bludgeoning damage and 4d6 fire damage on a failed save, or half as much damage on a successful one.",
		"The burning cinders turn the storm's area of effect into difficult terrain until the end of your next turn." + AtHigherLevels + "When you initiate this form at a higher level, the bludgeoning damage or fire damage (your choice) increases by 1d6 for every level above 4th."
	]
};
SpellsList["sparksword"] = {
	name : "Sparksword",
	classes : ["lacer"],
	source : ["ITLOTL", 63],
	level : 4,
	school : "Firelacer",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "5",
	description : "Hovering sword; make melee ki atk in 5 ft on cast (3d8+1d8/SL+Ki mod Fire dmg); Bns Act to move 20 ft and attack again",
	descriptionFull : [
		"A sword-shaped burning flame appears at a point you choose within range and hovers for the duration.",
		"When the sword appears, you can make a melee ki attack against a target of your choice within 5 feet of the sword. On a hit, the target takes fire damage equal to 3d8 + your ki modifier.",
		"As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for every level above 4th."
	]
};
SpellsList["wall of flames"] = {
	name : "Wall of Flames",
	classes : ["lacer"],
	source : ["ITLOTL", 63],
	level : 4,
	school : "Firelacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "5",
	description : "Wall 60x20x1-ft or 20-ft diam ring; crea in area or entering Dex save or 5d8+1d8/SL Fire dmg (half on save)",
	descriptionFull : [
		"You create a wall of flames on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and and lasts for the duration.",
		"When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.",
		"A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for every level above 4th."
	]
};
//5th level
SpellsList["ash rain"] = {
	name : "Ash Rain",
	classes : ["lacer"],
	source : ["ITLOTL", 63],
	level : 5,
	school : "Firelacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "60-ft rad diff. terrain; Rnd 2: Disadv. on Dex saves; Rnd 3: 1d6 Fire dmg; Rnd 4: hvy obscure; Rnd 5-10: 2d6 Fire dmg",
	descriptionFull : [
		"You form a large fire and then dissipate it, capturing flaming bits of ash before raining it down on a point you can see in a radius of 60 feet. The entire area becomes difficult terrain.",
		"Each round you maintain concentration on this form, the flaming ash piles higher and produces additional effects.",
		"Round 2. Each creature and object in the area has disadvantage on Dexterity saving throws.",
		"Round 3. Each creature and object in the area takes 1d6 fire damage.",
		"Round 4. The area becomes heavily obscured.",
		"Round 5-10. Each creature and object in the area takes 2d6 fire damage."
	]
};
SpellsList["bonform"] = {
	name : "Bonform",
	classes : ["lacer"],
	source : ["ITLOTL", 64],
	level : 5,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	firstCol : "6",
	description : "Fire immune, Cold res; move in 5 ft take 1d10 Fire dmg; Act 15x5-ft line Dex save or 4d8 Fire dmg (half on save)",
	descriptionFull : [
		"Flames roar across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the form's duration. The flames don't harm you or your equipment. Until the form ends, you gain the following benefits:",
		"\u2022 You are immune to fire damage and have resistance to cold damage.",
		"\u2022 Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage.",
		"\u2022 You can use your action to create a line of fire 15 feet long and 5 feet wide, extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one."
	]
};
SpellsList["delayed pyreball"] = {
	name : "Delayed Pyreball",
	classes : ["lacer"],
	source : ["ITLOTL", 64],
	level : 5,
	school : "Firelacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "6",
	description : "Ember; at end of form 20-ft rad Dex save or 10d6+1d6/SL Fire dmg (half on save); +1d6 per turn not detonated",
	descriptionFull : [
		"A small bead of flame flashes from your hand, and condenses into a burning ember at a chosen point within range for the duration. When the form ends, either because your concentration is broken or because you decide to end it, the ember bursts into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the accumulated damage on a failed save, or half as much damage on a successful one.",
		"The form's base damage is 10d6. If at the end of your turn the ember has not yet detonated, the damage increases by 1d6.",
		"If the ember is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the form ends immediately, causing the ember to erupt.",
		"The fire damages objects in the area and ignites flammable objects that aren't being worn or carried." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for every level above 5th."
	]
};
SpellsList["ember storm"] = {
	name : "Ember Storm",
	classes : ["lacer"],
	source : ["ITLOTL", 64],
	level : 5,
	school : "Firelacer",
	time : "1 a",
	range : "150 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "6",
	description : "4 orbs to points; 10-ft rad Dex save or 10d6+1d6/SL Fire dmg (half on save); +20 ft range, +10 ft rad",
	descriptionFull : [
		"Blazing orbs of fire flash from you to four different points you can see within range. Each creature in a 10-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one orb is affected only once.",
		"The form damages objects in the area and ignites flammable objects that aren't being worn or carried." + AtHigherLevels + "When you initiate this form at a higher level, the range increases by 20 feet, the radius of the spheres increase by 10 feet, and the damage increases by 1d6 for each level above 5th."
	]
};
SpellsList["firespout"] = {
	name : "Firespout",
	classes : ["lacer"],
	source : ["ITLOTL", 64],
	level : 5,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "+60 ft speed, fly up to 90 ft; half-cover; 1 crea has Disadv. on first save vs my forms",
	descriptionFull : [
		"You create a snake of coiling fire which lifts you anywhere you choose. For the duration, you gain the following benefits:",
		"\u2022 Your movement speed increases by 60 feet. You can move up to 90 feet above the ground while in the spout. Your movement does not provoke opportunity attacks.",
		"\u2022 You have half-cover against all attacks made against you for the duration.",
		"\u2022 If you initiate a form while in the spout which requires a saving throw, you can designate one creature which will be affected by your form. This creature has disadvantage on the first saving throw it makes against your form."
	]
};
SpellsList["immolate"] = {
	name : "Immolate",
	classes : ["lacer"],
	source : ["ITLOTL", 64],
	level : 5,
	school : "Firelacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "6",
	description : "Target Dex save or 8d6 Fire dmg and burns; save end of turn or 4d6 Fire dmg (ends on save)",
	descriptionFull : [
		"Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the form's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the form ends on a successful one. These flames can't be extinguished by nonlacing or nonmagical means.",
		"If damage from this form kills a target, the target is turned to ash."
	]
};
SpellsList["luminous globe"] = {
	name : "Luminous Globe",
	classes : ["lacer"],
	source : ["ITLOTL", 65],
	level : 5,
	school : "Firelacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "6",
	description : "10-ft rad bubble; protects from forms of 4th-level or lower initiated from outside",
	descriptionFull : [
		"You whirl a 10-foot radius bubble of roaring flame which protects you from harmful effects. Any form of 4th-level or lower initiated from outside of the barrier can't affect creatures or objects within it, even if the form is initiated using additional ki points to raise its level. Forms can target creatures and objects within the barrier, but it has no effect on them. Similarly, the area within the globe is excluded from the areas affected by such forms."
	]
};
SpellsList["nova"] = {
	name : "Nova",
	classes : ["lacer"],
	source : ["ITLOTL", 65],
	level : 5,
	school : "Firelacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	firstCol : "6",
	description : "30-ft rad Con save or 12d6+1d6/SL Fire dmg & blinded 1 min (half & no blind on save); save end of turn",
	descriptionFull : [
		"Brilliant light flashes in a 30-foot radius centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 12d6 fire damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this form.",
		"A creature blinded by this form makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for every level above 5th."
	]
};
//Water forms
//Basic form
SpellsList["basic waterlacing"] = {
	name : "Basic Waterlacing",
	classes : ["lacer"],
	source : ["ITLOTL", 76],
	level : 0,
	school : "Waterlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Animate/freeze water, purify nonmagical drink, or make 5-ft hole in ice/snow wall; +5-ft at CL 5, 11, 17",
	descriptionFull : [
		"Anyone who is a waterlacer can initiate the following effects as an action within a 5-foot cube.",
		"\u2022 You cause water to form into simple shapes and animate at your direction. This includes all forms of water, such as water vapor or ice, as do other basic lacing effects.",
		"\u2022 You freeze water. If a creature is in the water, it must use a bonus action to make a DC 5 Strength check to escape.",
		"\u2022 You concentrate, drawing out all impurities from water. All nonmagical drink is purified and separated from any poison.",
		"\u2022 You target one wall made of snow or ice within 30 feet, creating a 5-foot-radius hole. This creates an opening large enough for a Medium creature to easily walk through. The wall must be less than 5 feet thick in order for this to be effective." + "\n   " + toUni("Cantrip Upgrade") + ". The area you can affect increases by 5 feet when you reach 5th level (10-foot cube), 11th level (15-foot cube), and 17th level (20-foot cube)."
	]
};
//1st level
SpellsList["echoing strike"] = {
	name : "Echoing Strike",
	classes : ["lacer"],
	source : ["ITLOTL", 77],
	level : 1,
	school : "Waterlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "2",
	description : "Ranged ki atk vs triggering crea for 2d10+1d10/SL Piercing dmg & pushed 5 ft",
	descriptionFull : [
		"You whip your hand, and the creature that damaged you is smashed by a bolt of water. Make a ranged ki attack against the creature. On a successful hit, the creature takes 2d10 piercing damage and is pushed 5 feet." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 1st."
	]
};
SpellsList["flash freeze"] = {
	name : "Flash Freeze",
	classes : ["lacer"],
	source : ["ITLOTL", 77],
	level : 1,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "2",
	description : "20-ft sq diff. terrain; crea on ground in area Str save or restrained; Action Str check to escape",
	descriptionFull : [
		"You flood a 20-foot square centered on a point you choose within range and then freeze it, catching hold of all creatures touching the ground. For the duration, the ground in the area is difficult terrain.",
		"A creature in the area when you initiate the form must succeed on a Strength saving throw or be restrained by the ice until the form ends. A creature restrained by the ice can use its action to make a Strength check against your form save DC. On a success, it frees itself."
	]
};
SpellsList["freezing strike"] = {
	name : "Freezing Strike",
	classes : ["lacer"],
	source : ["ITLOTL", 77],
	level : 1,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	firstCol : "2",
	description : "Ranged ki atk for 2d10+1d10/SL Cold dmg; next atk vs target before end of my next turn has Adv",
	descriptionFull : [
		"A bolt of water streaks toward a creature of your choice within range. Make a ranged ki attack against the target. On a hit, the bolt of water freezes, the target takes 2d10 cold damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the frozen ice hindering the target's movements." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d10 for each level above 1st."
	]
};
SpellsList["grasping ice"] = {
	name : "Grasping Ice",
	classes : ["lacer"],
	source : ["ITLOTL", 77],
	level : 1,
	school : "Waterlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "2",
	description : "Next elemental hit Str save or restrained & 1d6+1d6/SL Cold dmg at start of its turn; Act Str check escapes",
	descriptionFull : [
		"The next time you hit a creature with an elemental attack before this form ends, a burst of water latches onto the creature's feet and freezes, holding them to the ground. The target must succeed on a Strength saving throw or be restrained by the ice until the form ends. If the target succeeds on the save, they destroy the ice and break free.",
		"While restrained by this form, the target takes 1d6 cold damage at the start of each of its turns. A creature restrained by your ice or one that can touch the creature can use its action to make a Strength check against your ki save DC. On a success, the target is freed." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 1st."
	]
};
SpellsList["healing waters"] = {
	name : "Healing Waters",
	classes : ["lacer"],
	source : ["ITLOTL", 77],
	level : 1,
	school : "Waterlacer",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "2",
	description : "Creature touched heals 1d8+1d8/SL + ki mod HP; no effect on undead/constructs",
	descriptionFull : [
		"You slowly pool water over a creature's injuries. A creature in range regains a number of hit points equal to 1d8 + your ki ability modifier. This form has no effect on undead or constructs." + AtHigherLevels + "When you initiate this form at a higher level, the healing increases by 1d8 for each level above 1st."
	]
};
SpellsList["hydro shield"] = {
	name : "Hydro Shield",
	classes : ["lacer"],
	source : ["ITLOTL", 77],
	level : 1,
	school : "Waterlacer",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "2",
	description : "Target in range gains +2 AC for duration",
	descriptionFull : [
		"A flowing stream of water hovers around a creature of your choice within range, granting it a +2 bonus to AC for the duration."
	]
};
SpellsList["ice slick"] = {
	name : "Ice Slick",
	classes : ["lacer"],
	source : ["ITLOTL", 78],
	level : 1,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 min",
	save : "Dex",
	firstCol : "2",
	description : "10+10/SL-ft sq diff. terrain; crea in area, entering, or ending turn there Dex save or fall prone",
	descriptionFull : [
		"Slippery ice covers the ground in a 10-foot square centered on a point you choose within range and turns it into difficult terrain for the duration.",
		"When the ice appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone." + AtHigherLevels + "When you initiate this form at a higher level, the radius of the slick increases by 10 feet for each level above 1st."
	]
};
SpellsList["lurking mist"] = {
	name : "Lurking Mist",
	classes : ["lacer"],
	source : ["ITLOTL", 78],
	level : 1,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "2",
	description : "20-ft rad heavily obscures; Bns Act to move 30 ft; strong wind disperses",
	descriptionFull : [
		"You create a 20-foot-radius sphere of mist centered on a point you choose within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration, or until dispersed by a wind of moderate or greater speed (at least 10 miles per hour).",
		"As a bonus action on your turn, you can move the mist up to 30 feet anywhere within range."
	]
};
SpellsList["surface tension"] = {
	name : "Surface Tension",
	classes : ["lacer"],
	source : ["ITLOTL", 78],
	level : 1,
	school : "Waterlacer",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you or a creature within 60 feet falls",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "2",
	description : "10-ft sq bubble catches falling crea (no falling dmg & land on feet); Rea to move bubble 30 ft; +20 ft range & sq/SL",
	descriptionFull : [
		"A bubble of water arises in a 10-foot square centered on a point within range. The water instinctively rises towards any creatures which fall into it, breaking the surface tension and catching the creature safely. The creature takes no damage from falling and can land on its feet.",
		"As a reaction while this form persists, you can move the bubble up to 30 feet within range." + AtHigherLevels + "When you initiate this form at a higher level, the range of the form and the size of the square increase by 20 feet for each level above 1st."
	]
};
SpellsList["water whip"] = {
	name : "Water Whip",
	classes : ["lacer"],
	source : ["ITLOTL", 78],
	level : 1,
	school : "Waterlacer",
	time : "1 a",
	range : "Self (15-ft cube)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	firstCol : "2",
	description : "15-ft cube all Con save or 2d8+1d8/SL Bludgeoning dmg & pushed 10 ft (half & not pushed on save)",
	descriptionFull : [
		"You create a long tendril of water that lashes out at creatures in range. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 bludgeoning damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage and isn't pushed." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 1st."
	]
};
//2nd level
SpellsList["air bubble"] = {
	name : "Air Bubble",
	classes : ["lacer"],
	source : ["ITLOTL", 78],
	level : 2,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 8 hr",
	firstCol : "3",
	description : "10+10/SL-ft rad cube provides breathable air, protects from water/rain; AC 5 (dmg ends form)",
	descriptionFull : [
		"This form creates a bubble which can be moved, its 10-foot-radius cube centered on you. The bubble protects anyone inside of it from normal standing water or rain (but not attacks, see below), and can be used to walk along a sea floor without needing to swim or worry about water pressure.",
		"Creatures inside the bubble can breath normally, and the bubble does not run out of air.",
		"The bubble is an effect that can be damaged and thus breached. The bubble has AC 5. Any damage to the bubble causes the form to end immediately." + AtHigherLevels + "When you intiate this form at a higher level, the radius of the bubble increases by 10 feet for each level above 2nd."
	]
};
SpellsList["creeping ice"] = {
	name : "Creeping Ice",
	classes : ["lacer"],
	source : ["ITLOTL", 78],
	level : 2,
	school : "Waterlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "3",
	description : "Gain climb speed = walk speed; move up/down/across vertical surfaces & upside down; +10 ft speed on level ground",
	descriptionFull : [
		"You form water around your feet and freeze it, turning it into icy boots. While using this form, you can creep the ice around you, allowing you to climb on surfaces by freezing your feet to them. You gain the ability to move up, down, and across vertical surfaces and upside down along ceilings. You also gain a climbing speed equal to your walking speed.",
		"Your speed on level ground increases by 10 feet until the form ends."
	]
};
SpellsList["freeze metal"] = {
	name : "Freeze Metal",
	classes : ["lacer"],
	source : ["ITLOTL", 79],
	level : 2,
	school : "Waterlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "3",
	description : "Metal obj touching crea deals 2d8+1d8/SL Cold dmg (Bns Act again); Con save drop or Disadv. on atks/checks",
	descriptionFull : [
		"Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to begin to freeze with an icy burn. Any creature in physical contact with the object takes 2d8 cold damage when you initiate the form. Until the form ends, you can use a bonus action on each of your subsequent turns to cause this damage again.",
		"If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 2nd."
	]
};
SpellsList["ice slides"] = {
	name : "Ice Slides",
	classes : ["lacer"],
	source : ["ITLOTL", 79],
	level : 2,
	school : "Waterlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "+20 ft speed, glide up to 30 ft above ground; slides remain until start of next turn (AC 5, 10 HP); pushes crea",
	descriptionFull : [
		"You create icy slides that allow you to glide quickly. Your speed increases by 20 feet, and you can move anywhere up to 30 feet above the ground.",
		"The slides remain behind where you move, and dissipate at the beginning of your turn. These slides are objects that can be damaged and thus destroyed. A 5-foot cube of ice has AC 5 and 10 hit points. A creature in the place of one of your ice slides is pushed to a side of the space of the creature's choice."
	]
};
SpellsList["ice spear"] = {
	name : "Ice Spear",
	classes : ["lacer"],
	source : ["ITLOTL", 79],
	level : 2,
	school : "Waterlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "Create simple weapon (2d8+1d8(3rd & 4th lvl)+1d8(5th lvl) Cold dmg, finesse, light, thrown 20/60); Adv in cold env; Bns Act recall",
	descriptionFull : [
		"You form water into a long spear and then freeze it in your hands. This icy spear lasts until the form ends. It counts as a simple weapon with which you are proficient. It deals 2d8 cold damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the spear to attack a target in particularly cold environments, you make the attack roll with advantage.",
		"If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the form persists, you can use a bonus action to cause the spear to reappear in your hand." + AtHigherLevels + "When you initiate this form at 3rd or 4th level, the damage increases to 3d8. When you initiate it at 5th level, the damage increases to 4d8."
	]
};
SpellsList["lesser rejuvenation"] = {
	name : "Lesser Rejuvenation",
	classes : ["lacer"],
	source : ["ITLOTL", 79],
	level : 2,
	school : "Waterlacer",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "3",
	description : "End 1+1/SL disease or condition (blinded, deafened, paralyzed, or poisoned) on touched crea",
	descriptionFull : [
		"You reach out to feel a creature's ki, using healing waters to end either one disease or one condition affecting it. The condition can be blinded, deafened, paralyzed, or poisoned." + AtHigherLevels + "When you initiate this form at a higher level, you can end one more disease or condition affecting the target for each level above 2nd."
	]
};
SpellsList["permafrost strike"] = {
	name : "Permafrost Strike",
	classes : ["lacer"],
	source : ["ITLOTL", 79],
	level : 2,
	school : "Waterlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "3",
	description : "Next elemental hit +2d6+1d6/SL Cold dmg & frosts; start of turn Con save or 2d6 Cold dmg (ends on save); Act to end",
	descriptionFull : [
		"The next time you hit a creature with an elemental attack during the form's duration, your water flares with a biting cold, and the attack deals an extra 2d6 cold damage to the target and causes the target to be covered in an icy frost. At the start of each of its turns until the form ends, the target must make a Constitution saving throw. On a failed save, it takes 2d6 cold damage. On a successful save, the form ends.",
		"If the target or a creature within 5 feet of it uses an action to chip the ice away, or if something would cause the ice to much (such as the target standing next to a large fire), the form ends." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 2nd."
	]
};
SpellsList["refraction"] = {
	name : "Refraction",
	classes : ["lacer"],
	source : ["ITLOTL", 79],
	level : 2,
	school : "Waterlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "3",
	description : "Attacks vs me have Disadv., unless attacker doesn't rely on sight (e.g., blindsight/tremorsense)",
	descriptionFull : [
		"You cover your body in water, using the refraction of the water to disguise your true location. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see you in other ways, as with tremorsense."
	]
};
SpellsList["slicing discs"] = {
	name : "Slicing Discs",
	classes : ["lacer"],
	source : ["ITLOTL", 79],
	level : 2,
	school : "Waterlacer",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "1 min",
	firstCol : "3",
	description : "Create 5-ft ice cylinder; Act if adjacent to fire ranged ki atk (2d6+1d6/SL Slashing dmg)",
	descriptionFull : [
		"You lift up a 5-foot cube of ice in an unoccupied space you choose within range in the shape a cylinder.",
		"As an action on your turn if you are adjacent to the cylinder, you can slice off the top layer of ice, firing a spinning disc towards a target within range. Make a ranged ki attack against one target. On a hit, the target takes 2d6 slashing damage." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d6 for each level above 2nd."
	]
};
SpellsList["soothing river"] = {
	name : "Soothing River",
	classes : ["lacer"],
	source : ["ITLOTL", 80],
	level : 2,
	school : "Waterlacer",
	time : "1 min",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "3",
	description : "Up to 6 crea in range heal 2d8+1d8/SL + ki mod HP; no effect on undead/constructs",
	descriptionFull : [
		"You move healing waters across up to six creatures of your choice that you can see within range. Each creature regains hit points equal to 2d8 + your ki ability modifier. This form has no effect on undead or constructs." + AtHigherLevels + "When you initiate this form at a higher level, the healing increases by 1d8 for each level above 2nd."
	]
};
SpellsList["tidal push"] = {
	name : "Tidal Push",
	classes : ["lacer"],
	source : ["ITLOTL", 80],
	level : 2,
	school : "Waterlacer",
	time : "1 a",
	range : "Self (30-ft line)",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "3",
	description : "30x10-ft line; Str save or pushed 15 ft; costs 2 ft per 1 ft moving closer; Bns Act change dir",
	descriptionFull : [
		"A line of water 30 feet long and 10 feet wide flows past you in a direction you choose. Each creature in the area must succeed on a Strength saving throw. On a failed save, a creature is pushed 15 feet away from you in a direction following the line. On a successful save, a creature is not pushed.",
		"Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.",
		"As a bonus action on each of your turns before the form ends, you can change the direction in which the line blasts from you."
	]
};
SpellsList["watery cloak"] = {
	name : "Watery Cloak",
	classes : ["lacer"],
	source : ["ITLOTL", 80],
	level : 2,
	school : "Waterlacer",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "3",
	description : "Range of elemental atks and waterlacing forms increases by 60 ft",
	descriptionFull : [
		"You cover your arms in water, using it to extend the control you have over your water. The range for all your elemental attacks and waterlacing forms increases by 60 feet."
	]
};
//3rd level
SpellsList["hailstorm"] = {
	name : "Hailstorm",
	classes : ["lacer"],
	source : ["ITLOTL", 80],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "5-ft rad all Dex save or 3d6 Cold + 3d6 Bludgeoning dmg (half on save); +1d6 (choose type) & +5-ft rad/SL",
	descriptionFull : [
		"Icy hailstones begin to barrage a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage and 3d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the cold damage or the bludgeoning damage (your choice) increases by 1d6 and the radius increases by 5 feet for each level above 3rd."
	]
};
SpellsList["ice bullets"] = {
	name : "Ice Bullets",
	classes : ["lacer"],
	source : ["ITLOTL", 80],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "Self (30-ft cone)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "30-ft cone all Dex save or 2d6 Cold + 2d6 Piercing dmg (half on save); +1d6 (choose type)/SL",
	descriptionFull : [
		"You form your water into a single point, and then create a cone of sharpened icy bullets which shoot forward. Each creature in the area must make a Dexterity saving throw. A creature takes 2d6 cold damage and 2d6 piercing damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the cold damage or the piercing damage (your choice) increases by 1d6 for each level above 3rd."
	]
};
SpellsList["iceberg formation"] = {
	name : "Iceberg Formation",
	classes : ["lacer"],
	source : ["ITLOTL", 80],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "5+5/SL-ft rad swell Dex save or 4d10+1d10/SL Cold dmg, lifted 10 ft & restrained (half, no lift/restrain & pushed out on save); Act Str check escape",
	descriptionFull : [
		"You lift up a 5-foot-radius swell of water at a point you choose within range and freeze it, hardening the water into a frozen iceberg.",
		"Any creature caught in the area when you initiate the form must succeed on a Dexterity saving throw. On a failed save, the creature is lifted 10 feet into the air by the iceberg and restrained, and takes 4d10 cold damage. On a successful save, a creature takes half as much damage and is pushed outside of the iceberg's area.",
		"A creature restrained in ice can use its action to make a Strength check against your ki save DC. On a success, it frees itself. Spaces adjacent to the iceberg are difficult terrain." + AtHigherLevels + "When you initiate this form at a higher level, the cold damage increases by 1d10 and the radius of the iceberg increases by 5 feet for each level above 3rd."
	]
};
SpellsList["ki infusion"] = {
	name : "Ki Infusion",
	classes : ["lacer"],
	source : ["ITLOTL", 81],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "4",
	description : "I take 4d8+1d8 dmg/SL Necrotic dmg, target touched heals 2x the Necrotic dmg I took",
	descriptionFull : [
		"You flow water over yourself and a target you can touch, sacrificing your vitality to infuse a target with healing ki. You take 4d8 necrotic damage, and one creature of your choice that you touch regains a number of hit points equal to twice the necrotic damage you take." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 3rd."
	]
};
SpellsList["octopus form"] = {
	name : "Octopus Form",
	classes : ["lacer"],
	source : ["ITLOTL", 81],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "4",
	description : "+2 AC; Adv on Str/Con saves; Rea or 1 ki point to reduce weapon/elemental atk dmg by 1d10 + Ki mod + Prof Bonus",
	descriptionFull : [
		"Eight tendrils of water spring up around you. Until the form ends, you gain a +2 bonus to AC, you have advantage on Strength and Constitution saving throws, and you can use your reaction or 1 ki point to reduce the damage of a weapon or elemental attack against you by 1d10 + your ki ability modifier + your proficiency bonus."
	]
};
SpellsList["tidal surge"] = {
	name : "Tidal Surge",
	classes : ["lacer"],
	source : ["ITLOTL", 81],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	firstCol : "4",
	description : "30x10x10-ft area Str save or 4d8 Bludgeoning dmg & prone (half & no prone on save); extinguishes flames; +1d8 dmg & +5ft L/W/H/SL",
	descriptionFull : [
		"You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Strength saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a success, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 and the length, width, and height of the wave increases by 5 feet for each level above 3rd."
	]
};
SpellsList["water drill"] = {
	name : "Water Drill",
	classes : ["lacer"],
	source : ["ITLOTL", 81],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "Self (30-ft line)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "4",
	description : "30+10/SLx10-ft line Dex save or 6d6+1d6SL Bludgeoning dmg & pushed out of line (half & no push on save); +1d6 & +10-ft long/SL",
	descriptionFull : [
		"You create a twisting spiral of water which surges forward through your enemies in a 10-foot wide, 30-foot line. Each creature in the line must make a Dexterity saving throw. On a failed save, a creature takes 6d6 bludgeoning damage and is pushed to the closest point outside of the line. On a successful save, a creature takes half as much damage and is not pushed." + AtHigherLevels + "When you initiate this form at a higher level, the length of the line increases by 10 feet and the damage increases by 1d6 for each level above 3rd."
	]
};
SpellsList["waterwall"] = {
	name : "Waterwall",
	classes : ["lacer"],
	source : ["ITLOTL", 81],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "4",
	description : "30+10/SLx10+5/SLx1-ft wall or 20+10/SL-ft diam ring; diff terrain; ranged atks Disadv.; fire dmg half; cold dmg freezes 5-ft sections (AC 5/15 HP)",
	descriptionFull : [
		"You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain.",
		"Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target.",
		"Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot-square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, you can use a bonus action on your turn to refill it with water." + AtHigherLevels + "When you initiate this form at a higher level, the wall's length increases by 10 feet and its height by 5 feet, or the diameter of a ringed wall increases by 10 feet for each level above 3rd."
	]
};
SpellsList["weird dive"] = {
	name : "Weird Dive",
	classes : ["lacer"],
	source : ["ITLOTL", 81],
	level : 3,
	school : "Waterlacer",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	save : "Str",
	firstCol : "4",
	description : "20-ft cube in water; Act to move 40 ft; willing crea pulled, unwilling Str save or pulled; spout up to 30 ft high",
	descriptionFull : [
		"You create a whirl in a body of water, which moves creatures effortlessly. As an action on your turn, you can designate a 20-foot cube of water to move up to 40 feet through standing water. Any willing creature caught in the whirl's path is pulled along with it. An unwilling creature must succeed on a Strength saving throw or be pulled with it as well.",
		"This form can create a spout above the water's surface, to a maximum height of 30 feet."
	]
};
//4th level
SpellsList["aqua prison"] = {
	name : "Aqua Prison",
	classes : ["lacer"],
	source : ["ITLOTL", 82],
	level : 4,
	school : "Waterlacer",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "5",
	description : "5-ft rad sphere hovers \u2264 10 ft up; crea in area Str save or restrained (Huge+ auto-succeed, pass ejected); holds up to 4 Med or 1 Lrg; Act move 30 ft (can ram 1/turn); ends drops & prone",
	descriptionFull : [
		"You conjure up a sphere of water with a 5-foot radius on a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the form's duration.",
		"Any creature in the sphere’s space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space outside it. A Huge or larger creature succeeds on the saving throw automatically. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw.",
		"The sphere can restrain a maximum of four Medium or smaller creatures or one Large creature. If the sphere restrains a creature in excess of these numbers, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.",
		"As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw, but no more than once per turn.",
		"When the form ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls."
	]
};
SpellsList["hailstones"] = {
	name : "Hailstones",
	classes : ["lacer"],
	source : ["ITLOTL", 82],
	level : 4,
	school : "Waterlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	firstCol : "5",
	description : "Create 8+2/SL hailstones; Act/Bns Act to send 1 or 2 up to 60 ft; 5-ft rad all Dex save or 1d6 Cold + 1d6 Bludgeoning dmg (half on save) per stone",
	descriptionFull : [
		"You create eight tiny meteors of ice in your space. They float in the air and orbit you for the form's duration. When you initiate the form – and as a bonus action on each of your turns thereafter – you can expend one or two of the hailstones, sending them streaking toward a point or points you choose within 60 feet of you.",
		"Once a stone reaches its destination or impacts against a solid surface, the hailstone explodes. Each creature within 5 feet of the point when the stone explodes must make a Dexterity saving throw. A creature takes 1d6 cold damage and 1d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you initiate this form at a higher level, the number of hailstones created increases by two for each level above 4th."
	]
};
SpellsList["razor rings"] = {
	name : "Razor Rings",
	classes : ["lacer"],
	source : ["ITLOTL", 82],
	level : 4,
	school : "Waterlacer",
	time : "1 a",
	range : "Self (30-ft cone)",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "5",
	description : "30-ft cone all Dex save or 2d8+1d8/SL Slashing dmg (half on save); Act to hurl more rings",
	descriptionFull : [
		"You create rings of water with sharpened edges and begin hurling them at opponents within a 30-foot cone. On a failed Dexterity saving throw, a creature takes 2d8 slashing damage, or half as much damage on a successful one.",
		"You can hurl more rings in a cone as your action on any turn until the form ends." + AtHigherLevels + "When you initiate this form at a higher level, the damage increases by 1d8 for each level above 4th."
	]
};
SpellsList["transmute ice"] = { //Removed Material component as no other Lacing forms have material components. Orig. Vial of Water. New None.
	name : "Transmute Ice",
	classes : ["lacer"],
	source : ["ITLOTL", 82],
	level : 4,
	school : "Waterlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Until dispelled",
	save : "Dex",
	firstCol : "5",
	description : "40+10/SL-ft cube transmute Ice to Water (falling water Dex save or 4d8 Bludgeoning dmg) or Water to Ice (crea in water Dex save or restrained)",
	descriptionFull : [
		"You choose an area of water or ice that you can see that fits within a 40-foot cube and that is within range, and choose one of the following effects.",
		"Transmute Ice to Water. Nonmagical ice of any sort in the area becomes an equal volume of clear and flowing water. If you initiate this form on a sheet of ice being walked on, each foot that a creature moves through the water costs 4 feet of movement. If you initiate this form on a ceiling of ice, the water falls. Any creature under the water when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one.",
		"Transmute Water to Ice. Nonmagical water in the area no more than 10 feet deep transforms into solid ice for the form's duration. Any creature in the water when it transforms must make a Dexterity saving throw. On a failed save, a creature becomes restrained by the ice. The restrained creature can use an action to try to break free by succeeding on a Strength check (DC 20) or by dealing 25 damage to the ice around it. On a successful save, a creature is shunted safely to the surface to an unoccupied space." + AtHigherLevels + "When you initiate this form at a higher level, the cube of material you can affect increases in size by 10 feet for each level above 4th."
	]
};
SpellsList["water control"] = {
	name : "Water Control",
	classes : ["lacer"],
	source : ["ITLOTL", 83],
	level : 4,
	school : "Waterlacer",
	time : "1 a",
	range : "300 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Str",
	firstCol : "5",
	description : "100-ft cube freestanding water; Act to Flood, Part Water, Redirect Flow, or Whirlpool",
	descriptionFull : [
		"Until the form ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you initiate this form. As an action on your turn, you can repeat the same effect or choose a different one.",
		"\u2022 Flood. You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave’s path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing. The water level remains elevated until the form ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.",
		"\u2022 Part Water. You cause water in the area to move apart and create a trench. The trench extends across the form's area, and the separated water forms a wall to either side. The trench remains until the form ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.",
		"\u2022 Redirect Flow. You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the form’s area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the form ends or you choose a different effect.",
		"\u2022 Whirlpool. This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your ki save DC. When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, a creature takes 2d8 bludgeoning damage and is caught in the vortex until the form ends. On a successful save, a creature takes half damage, and isn’t caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so. The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex."
	]
};
SpellsList["water gimbal"] = {
	name : "Water Gimbal",
	classes : ["lacer"],
	source : ["ITLOTL", 83],
	level : 4,
	school : "Waterlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "5",
	description : "Adjacent spaces diff terrain; Adv. on waterlacing elemental atks; elemental hits deal extra 1d10+1d10 dmg/SL dmg",
	descriptionFull : [
		"You whirl water around yourself in rapidly spinning circles. Until the form ends, you gain the following benefits:",
		"\u2022 Spaces adjacent to you are difficult terrain.",
		"\u2022 You have advantage on waterlacing elemental attacks that you make.",
		"\u2022 When you hit a target with an elemental attack, that target takes an extra 1d10 damage." + AtHigherLevels + "When you initiate this form at a higher level, the damage on your elemental attacks increases by 1d10 for each level above 4th."
	]
};
//5th level
SpellsList["blizzard"] = {
	name : "Blizzard",
	classes : ["lacer"],
	source : ["ITLOTL", 83],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "Self (90-ft radius)",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	firstCol : "6",
	description : "90+10/SL-ft rad heavily obscured & diff. terrain (except me); enter/start turn Con save or 4d6+1d6/SL Cold dmg (half on save); extinguishes flames",
	descriptionFull : [
		"This form freezes the air, plunging the temperature below freezing as a powerful blizzard erupts in a 90-foot radius centered on you. The area is heavily obscured and difficult terrain for all creatures except you. Unprotected flames are automatically extinguished, and protected flames flicker wildly and have a 50 percent chance of going out.",
		"When another creature enters the form's area for the first time on a turn or starts its turn there, it is engulfed by the blizzard, and it must make a Constitution saving throw. It takes 4d6 cold damge on a failed save, or half as much damage on a successful one.",
		"This form is impossible to use in especially hot or arid environments, such as a desert." + AtHigherLevels + "When you intiate this form at a higher level, the damage increases by 1d6 and the radius of the blizzard increases by 10 feet for each level above 5th."
	]
};
SpellsList["bubble of invulnerability"] = {
	name : "Bubble of Invulnerability",
	classes : ["lacer"],
	source : ["ITLOTL", 83],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "Self (10-ft radius)",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "10-ft rad bubble; protects from forms/spells of 4th-level or lower initiated from outside",
	descriptionFull : [
		"You whirl a 10-foot-radius bubble of swirling water which protects you from harmful effects. Any form or spell of 4th-level or lower initiated from outside of the barrier can't affect creatures or objects within it, even if the form is initiated using additional ki points to raise its level. Forms can target creatures and objects within the barrier, but it has no effect on them. Similarly, the area within the globe is excluded from the areas affected by such forms."
	]
};
SpellsList["greater rejuvenation"] = {
	name : "Greater Rejuvenation",
	classes : ["lacer"],
	source : ["ITLOTL", 84],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "6",
	description : "Reduce exhaustion by 1+1/SL or end 1+1/SL charm, petrified, curse, stat reduction, or max HP reduction",
	descriptionFull : [
		"You imbue a creature you touch with positive ki, undoing a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target:",
		"\u2022 One effect that charmed or petrified the target.",
		"\u2022 One curse, including the target's attunement to a cursed magic item.",
		"\u2022 Any reduction to one of the target's ability scores.",
		"\u2022 One effect reducing the target's hit point maximum." + AtHigherLevels + "When you intiate this form at a higher level, you can additionally reduce the target's exhaustion level by one or end one more effect on the target for each level above 5th."
	]
};
SpellsList["hand of the sea"] = {
	name : "Hand of the Sea",
	classes : ["lacer"],
	source : ["ITLOTL", 84],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	firstCol : "6",
	description : "Large hand moves 60 ft as Bns Act; can Strike (4d8+2d8/SL Bludgeoning), Push, Grapple, or Interpose (half cover)",
	descriptionFull : [
		"You create a Large hand of shimmering, swirling water in an unoccupied space that you can see within range. The hand lasts for the form's duration, and it moves at your command, mimicking the movements of your own hands.",
		"The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the form ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand fills its space.",
		"When you initiate the form and as a bonus action on your subsequent turns, you can move the hand up to 60 feet within range and then cause one of the following effects with it.",
		"Clenched Fist. The hand strikes one creature or object within 5 feet of it. Make a melee ki attack for the hand using your game statistics. On a hit, the target takes 4d8 bludgeoning damage.",
		"Forceful Hand. The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand’s Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your ki ability modifier. The hand moves with the target to remain within 5 feet of it.",
		"Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand’s Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your ki ability modifier.",
		"Interposing Hand. The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand’s space if its Strength score is less than or equal to the hand’s Strength score. If its Strength score is higher than the hand’s Strength score, the target can move toward you through the hand’s space, but that space is difficult terrain for the target." + AtHigherLevels + "When you initiate this form at a higher level, the damage from the Clenched Fist option increases by 2d8 and the damage from the Grasping Hand option increases by 2d6 for each level above 5th.",
	],
};	
SpellsList["ice trap"] = {
	name : "Ice Trap",
	classes : ["lacer"],
	source : ["ITLOTL", 84],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 min",
	save : "Str",
	firstCol : "6",
	description : "20+10/SL-ft cube Str save or 6d8+1d8/SL Cold dmg & paralyzed inside ice (half & pushed out on save); ice AC 14, 40 HP per 5ft cube",
	descriptionFull : [
		"You create a 20-foot-cube of ice originating from a point you choose within range. Each creature in the area must succeed on a Strength saving throw. On a failed save, a creature takes 6d8 cold damage and is trapped in the ice and paralyzed. On a successful save, a creature takes half as much damage and is pushed to the outside of the ice.",
		"A creature trapped in the ice cannot be targeted by attacks.",
		"The ice itself is an object that can be damaged and thus destroyed. A 5-foot cube of ice has AC 14 and 40 hit points, and it is vulnerable to fire damage. The destruction of the ice prison frees creatures trapped inside of it instantly." + AtHigherLevels + "When you initiate this form at a higher level, the size of the cube increases by 10 feet and the damage increases by 1d8 for each level above 5th."
	]
};
SpellsList["icequake"] = {
	name : "Icequake",
	classes : ["lacer"],
	source : ["ITLOTL", 85],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	firstCol : "6",
	description : "30+10/SL-ft rad ground diff. terrain; Con save vs Conc; end turn Dex save or prone; 1d6 fissures open; structures take 30+10/SL Bludg. dmg/turn",
	descriptionFull : [
		"This form is only usable in icy or snowy environments and terrain.",
		"You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 30-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.",
		"The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature’s concentration is broken.",
		"When you initiate this form and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.",
		"This form can have additional effects depending on the terrain in the area, as determined by the DM.",
		"Fissures: Fissures open throughout the form's area at the start of your next turn after you initiate the form. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 x 10 feet deep, 10 feet wide, and extends from one edge of the form’s area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure’s edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse (see below).",
		"Structures: The tremor deals 30 bludgeoning damage to any structure in contact with the ground in the area when you initiate the form and at the start of each of your turns until the form ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure’s height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The GM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn’t fall prone or become buried." + AtHigherLevels + "When you initiate this form at a higher level, the range of the form increases by 20 feet, the radius of the disturbance increases by 10 feet, and the damage dealt to structures increases by 10 for each level above 5th."
	]
};
SpellsList["icewall"] = {
	name : "Icewall",
	classes : ["lacer"],
	source : ["ITLOTL", 85],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "10 min",
	save : "Dex",
	firstCol : "6",
	description : "1-ft thick wall; up to ten 10-ft sq panels, or 10-ft rad dome/sphere; if wall cuts crea Dex save or 8d6+2d6/SL Cold dmg (half on save) & pushed to side",
	descriptionFull : [
		"You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and no longer needs your attention to persist, and will remain as long as ice would in the environment in which it is created.",
		"If the wall cuts through a creature’s space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, a creature takes 8d6 cold damage, or half as much damage on a successful save.",
		"The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it." + AtHigherLevels + "When you initiate this form at a higher level, the damage the wall deals when it appears increases by 2d6 for each level above 5th.",
	],
};
SpellsList["move ice"] = {
	name : "Move Ice",
	classes : ["lacer"],
	source : ["ITLOTL", 85],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	firstCol : "6",
	description : "Reshape 20-ft area of snow/ice (raise/lower/trench/wall/pillar up to 10 ft); takes 1 min; change area 1/min; +1 hr/SL",
	descriptionFull : [
		"This form is only usable in icy or snowy environments and terrain.",
		"Choose an area of terrain no larger than 20 feet on a side within range. You can reshape snow and ice in the area in any manner you choose for the duration. You can raise or lower the area’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. So, if you affect a 20-foot square, you can create a pillar up to 10 feet high, raise or lower the square’s elevation by up to 10 feet, dig a trench up to 10 feet deep, and so on. It takes 1 minute for these changes to complete.",
		"At the end of every minute you spend concentrating on the form, you can choose a new area of terrain to affect.",
		"Because the terrain’s transformation occurs slowly, creatures in the area can’t usually be trapped or injured by the ground’s movement.",
		"You can shift structures made of ice to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse." + AtHigherLevels + "When you initiate this form at a higher level, the duration increases by 1 hour for each level above 5th."
	]
};
SpellsList["pillars of ice"] = {
	name : "Pillars of Ice",
	classes : ["lacer"],
	source : ["ITLOTL", 86],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	firstCol : "6",
	description : "4+2/SL pillars (5x30-ft); Dex save or lifted; if blocked, 4d8 Bludgeoning dmg & restrained (Act escape); AC 5, 20 HP",
	descriptionFull : [
		"This form is only usable in icy or snowy environments and terrain.",
		"You cause up to four pillars of ice to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 20 hit points. When reduced to 0 hit points, a pillar shatters into harmless shards of ice, which creates an area of difficult terrain with a 10-foot radius. The shards last until cleared.",
		"If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.",
		"If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 4d8 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity saving throw (the creature's choice) against your ki save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it." + AtHigherLevels + "When you initiate this form at a higher level, you can create two additional pillars for each level above 5th."
	]
};	
SpellsList["reviving waters"] = {
	name : "Reviving Waters",
	classes : ["lacer"],
	source : ["ITLOTL", 86],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	firstCol : "6",
	description : "Revive a creature that died within the last minute to 1 HP; can't restore missing body parts or old age",
	descriptionFull : [
		"You direct healing energy into your water, flowing it over a creature you touch that has died within the last minute. That creature returns to life with 1 hit point. This form can't return to life a creature that has died of old age, nor can it restore any missing body parts."
	]
};
SpellsList["sudden tsunami"] = {
	name : "Sudden Tsunami",
	classes : ["lacer"],
	source : ["ITLOTL", 86],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "6",
	description : "50x50x30ft wall Str save or 10d4 Bludg. dmg (half save); Wall moves 25 ft/turn, in wall Str save or 9d4 Bludg. dmg (wall shrinks 5ft, dmg drops 1d4); +10ft/+20ft & +1d4/SL",
	descriptionFull : [
		"A wall of water rises at a point you choose within range. You can make the wall up to 50 feet long, 50 feet high, and 30 feet thick. The wall lasts for the duration.",
		"When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 10d4 bludgeoning damage, or half as much damage on a successful save.",
		"At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 25 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 9d4 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall’s height is reduced by 5 feet, and the damage creatures take from the form on subsequent rounds is reduced by 1d4. When the wall reaches 0 feet in height, the form ends.",
		"A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your ki save DC in order to move at all. If it fails the check, it can’t move. A creature that moves out of the area falls to the ground." + AtHigherLevels + "When you initiate this form at a higher level, the length and height of the wall increases by 10 feet, the thickness and speed of the wave increases by 20 feet, and the damage increases by 1d4 for each level above 5th."
	]
};
SpellsList["tui la's maelstrom"] = {
	name : "Tui La's Maelstrom",
	classes : ["lacer"],
	source : ["ITLOTL", 86],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	firstCol : "6",
	description : "30+10/SL-ft rad diff. terrain; start turn Str save or 6d6+1d6/SL Bludgeoning dmg & pulled 10 ft to center",
	descriptionFull : [
		"A swirling mass of 5-foot-deep water appears in a 30-foot radius centered on a point you can see within range. The point must be on the ground or in a body of water. Until the form ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning dmaage and be pulled 10 feet toward the center." + AtHigherLevels + "When you initiate this form at a higher level, the radius of the maelstrom increases by 10 feet and the damage increases by 1d6 for each level above 5th."
	]
};
SpellsList["waterspout"] = {
	name : "Waterspout",
	classes : ["lacer"],
	source : ["ITLOTL", 86],
	level : 5,
	school : "Waterlacer",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	firstCol : "6",
	description : "+60 ft speed, fly up to 90 ft; move doesn't provoke opp. attacks; half-cover; 1 crea has disadv. on first save against my forms",
	descriptionFull : [
		"You create a snake of coiling water which lifts you anywhere you choose. For the duration, you gain the following benefits:",
		"\u2022 Your movement speed increases by 60 feet. You can move up to 90 feet above the ground while in the spout. Your movement does not provoke opportunity attacks.",
		"\u2022 You have half-cover against all attacks made against you for the duration.",
		"\u2022 If you initiate a form while in the spout which requires a saving throw, you can designate one creature which will be affected by your form. This creature has disadvantage on the first saving throw it makes against your form."
	]
};
//Creatures
//CR 0
CreatureList["aukter"] = {
	name : "Aukter",
	source : ["ITLOTL", 148],
	size : 4, // Small
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 6],
	speed : "20 ft, swim 40",
	scores : [8, 14, 11, 3, 12, 6],
	passivePerception : 11,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Beak",
		ability : 1, // Uses Strength
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Hold Breath",
		description : "The aukter can hold its breath for 15 minutes."
	}]
};
CreatureList["dog-itlotl"] = {
	name : "Dog",
	source : ["ITLOTL", 148],
	size : 4, // Small
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 6],
	speed : "40 ft",
	scores : [8, 14, 12, 3, 12, 10],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
	}, {
		name : "Pack Tactics",
		description : "The dog has advantage on an attack roll against a creature if at least one of the dog's allies is within 5 feet of the creature and the ally isn't incapacitated."
	}]
};
CreatureList["elkrabbit"] = {
	name : "Elkrabbit",
	source : ["ITLOTL", 148],
	size : 5, // Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "30 ft",
	scores : [3, 17, 8, 2, 12, 3],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 2, // Uses Dexterity
		damage : [1, "", "piercing"], // Flat 1 damage
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Keen Hearing",
		description : "The elkrabbit has advantage on Wisdom (Perception) checks that rely on hearing."
	}]
};
CreatureList["embermine"] = {
	name : "Embermine",
	source : ["ITLOTL", 149],
	size : 5, // Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "30 ft",
	scores : [3, 16, 9, 3, 12, 5],
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2, // Uses Dexterity
		damage : [1, "", "piercing"], // Flat 1 damage
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The embermine has advantage on Wisdom (Perception) checks that rely on hearing or smell."
	}]
};
CreatureList["flying marmoset"] = {
	name : "Flying Marmoset",
	source : ["ITLOTL", 149],
	size : 4, // Small
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 6],
	speed : "30 ft, climb 30 ft, fly 60 ft",
	scores : [8, 14, 11, 4, 12, 6],
	passivePerception : 11,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}]
};
CreatureList["fox-itlotl"] = {
	name : "Fox",
	source : ["ITLOTL", 149],
	size : 4, // Small
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 6],
	speed : "40 ft",
	scores : [8, 16, 11, 4, 11, 7],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The fox has advantage on Wisdom (Perception) checks that rely on hearing or smell."
	}]
};
CreatureList["koi"] = {
	name : "Koi",
	source : ["ITLOTL", 149],
	size : 5, // Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "0 ft, swim 30 ft",
	scores : [2, 16, 9, 1, 7, 2],
	senses : "Darkvision 60 ft",
	passivePerception : 8,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : [],
	traits : [{
		name : "Water Breathing",
		description : "The koi can breathe only underwater."
	}]
};
CreatureList["meowl"] = {
	name : "Meowl",
	source : ["ITLOTL", 150],
	size : 5, // Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 11,
	hp : 1,
	hd : [1, 4],
	speed : "10 ft, fly 60 ft",
	scores : [3, 13, 8, 2, 12, 7],
	skills : {
		"perception" : 3,
		"stealth" : 3
	},
	senses : "Darkvision 120 ft",
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2, // Uses Dexterity
		damage : [1, "", "piercing"], // Flat 1 damage
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}, {
		name : "Talons",
		ability : 2, // Uses Dexterity
		damage : [1, "", "slashing"], // Flat 1 damage
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Flyby",
		description : "The meowl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
	}, {
		name : "Keen Hearing and Sight",
		description : "The meowl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
	}]
};
CreatureList["messenger falcon"] = {
	name : "Messenger Falcon",
	source : ["ITLOTL", 150],
	size : 5, // Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 11,
	hp : 1,
	hd : [1, 4],
	speed : "5 ft, fly 60 ft",
	scores : [3, 12, 8, 4, 12, 7],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2, // Uses Dexterity
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers: ["", -2],
	}, {
		name : "Talons",
		ability : 2, // Uses Dexterity
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers: ["", -2],
	}],
	traits : [{
		name : "Find Location",
		description : "The falcon has the supernatural ability to locate creatures or places it has been ordered to find, unless that place is specially hidden."
	}, {
		name : "Keen Sight",
		description : "The falcon has advantage on Wisdom (Perception) checks that rely on sight."
	}]
};
CreatureList["otter"] = {
	name : "Otter",
	source : ["ITLOTL", 150],
	size : 5, // Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "20 ft, swim 40 ft",
	scores : [3, 16, 8, 2, 12, 5],
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2, // Uses Dexterity
		damage : [1, "", "piercing"], // Flat 1 damage
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Keen Hearing and Smell",
		description : "The otter has advantage on Wisdom (Perception) checks that rely on hearing or smell."
	}]
};
CreatureList["porcumeleon"] = {
	name : "Porcumeleon",
	source : ["ITLOTL", 150],
	size : 5, // Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 10,
	hp : 1,
	hd : [1, 4],
	speed : "20 ft, climb 20 ft",
	scores : [1, 11, 8, 1, 8, 3],
	skills : {
		"perception" : 1,
		"stealth" : 2
	},
	passivePerception : 11,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : [],
	traits : [{
		name : "Spiny Body",
		description : "A creature that touches the porcumeleon or hits it with a melee attack while within 5 ft of it takes 2 (1d4) piercing damage. The porcumeleon can squelch or initiate this effect as a bonus action."
	}]
};
CreatureList["silver septapus"] = {
	name : "Silver Septapus",
	source : ["ITLOTL", 151],
	size : 5, // Tiny
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "5 ft, swim 30 ft",
	scores : [4, 15, 11, 3, 10, 4],
	skills : {
		"perception" : 2
	},
	passivePerception : 12,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Tentacles",
		ability : 2, // Uses Dexterity
		damage : [1, "", "bludgeoning"], // Flat 1 damage
		range : "Melee (5 ft)",
		description : "Target is grappled (escape DC 10). Until the grapple ends, the septapus can't use its tentacles on another target.",
		abilitytodamage : false
	}],
	traits : [{
		name : "Hold Breath",
		description : "While out of water, the septapus can hold its breath for 30 minutes."
	}, {
		name : "Water Breathing",
		description : "The septapus can breathe only underwater."
	}, {
		name : "Ink Cloud (Recharges after Short/Long Rest)",
		description : "As an action while underwater, a 5-ft-radius cloud of ink extends all around the septapus, heavily obscuring the area for 1 minute (a significant current can disperse the ink). After releasing the ink, it can use the Dash action as a bonus action."
	}]
};
CreatureList["tanuki"] = {
	name : "Tanuki",
	source : ["ITLOTL", 151],
	size : 4, // Small
	type : "Beast",
	companion : "familiar",
	alignment : "Unaligned",
	ac : 10,
	hp : 3,
	hd : [1, 4], // Kept as 1d4 to match the 1d4+1 hit points in the stat block
	speed : "20 ft, climb 10 ft",
	scores : [4, 10, 13, 2, 11, 7],
	senses : "Darkvision 30 ft",
	passivePerception : 10,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2, // Uses Dexterity
		damage : [1, "", "piercing"], // Flat 1 damage
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Keen Smell",
		description : "The tanuki has advantage on Wisdom (Perception) checks that rely on smell."
	}]
};
//CR 1/8
CreatureList["bactrian elephant"] = {
	name : "Bactrian Elephant",
	source : ["ITLOTL", 151],
	size : 2, // Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 9,
	hp : 15,
	hd : [2, 10],
	speed : "50 ft",
	scores : [16, 8, 14, 3, 8, 5],
	passivePerception : 9,
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false // Statblock says flat 1d4 with no STR modifier added to damage
	}]
};
CreatureList["dromedary dzo"] = {
	name : "Dromedary Dzo",
	source : ["ITLOTL", 151],
	size : 2, // Large
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 9,
	hp : 15,
	hd : [2, 10],
	speed : "40 ft",
	scores : [17, 8, 14, 2, 8, 5],
	passivePerception : 9,
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false // Statblock says flat 1d4 with no STR modifier added to damage
	}]
};
CreatureList["reindog"] = {
	name : "Reindog",
	source : ["ITLOTL", 152],
	size : 4, // Small
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 6],
	speed : "40 ft",
	scores : [8, 14, 12, 3, 12, 10],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Ram",
		ability : 1, // Uses Strength
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "If moving 20 ft straight toward target, deals extra 1d6 damage and forces DC 13 Str save or knocked prone"
	}, {
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Charge",
		description : "If the reindog moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 3 (1d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
	}, {
		name : "Keen Hearing and Smell",
		description : "The reindog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
	}]
};
//CR 1/4
CreatureList["basigoose"] = {
	name : "Basigoose",
	source : ["ITLOTL", 152],
	size : 2, // Large
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 12,
	hp : 16,
	hd : [3, 10],
	speed : "60 ft",
	scores : [16, 14, 11, 2, 11, 7],
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [2, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Water Skimming",
		description : "The basigoose can run across the surface of the water so long as it doesn't stop moving."
	}]
};
CreatureList["cassopony"] = {
	name : "Cassopony",
	source : ["ITLOTL", 152],
	size : 2, // Large
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 10,
	hp : 13,
	hd : [2, 10],
	speed : "50 ft",
	scores : [16, 10, 12, 2, 11, 7],
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Beak",
		ability : 1, // Uses Strength
		damage : [2, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Talons",
		ability : 1, // Uses Strength
		damage : [1, 8, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}]
};
CreatureList["flying adderfox"] = {
	name : "Flying Adderfox",
	source : ["ITLOTL", 152],
	size : 5, // Tiny
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 22,
	hd : [4, 10],
	speed : "10 ft, fly 60 ft",
	scores : [2, 16, 11, 2, 10, 3],
	senses : "Blindsight 60 ft",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2, // Uses Dexterity
		damage : [1, "", "piercing"], // Flat 1 damage
		range : "Melee (5 ft)",
		description : "Target must make a DC 10 Con save, taking 2d4 poison damage on a fail, or half on a success",
		abilitytodamage : false
	}],
	traits : [{
		name : "Echolocation",
		description : "The flying adderfox can't use its blindsight while deafened."
	}, {
		name : "Keen Hearing",
		description : "The flying adderfox has advantage on Wisdom (Perception) checks that rely on hearing."
	}]
};
CreatureList["flying swine"] = {
	name : "Flying Swine",
	source : ["ITLOTL", 153],
	size : 4, // Small
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 13,
	hd : [3, 6],
	speed : "40 ft, fly 30 ft",
	scores : [13, 11, 12, 2, 9, 5],
	passivePerception : 9,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Tusk",
		ability : 1, // Uses Strength
		damage : [1, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "Charge: If moving 20 ft straight toward target, extra 1d6 dmg and DC 11 Str save or prone"
	}],
	traits : [{
		name : "Charge",
		description : "If the flying swine moves at least 20 ft straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
	}, {
		name : "Relentless (Recharges after a Short or Long Rest)",
		description : "If the flying swine takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
	}]
};
CreatureList["jackaby"] = {
	name : "Jackaby",
	source : ["ITLOTL", 153],
	size : 3, // Medium
	type : "Beast",
	alignment : "Unaligned",
	ac : 10,
	hp : 11,
	hd : [2, 8],
	speed : "50 ft",
	scores : [14, 11, 12, 3, 9, 7],
	skills : {
		"athletics" : 4
	},
	passivePerception : 9,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Kick",
		ability : 1, // Uses Strength
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Powerful Leap",
		description : "If the jackaby moves at least 10 feet before jumping, its jump distance is tripled."
	}]
};
CreatureList["yakalo"] = {
	name : "Yakalo",
	source : ["ITLOTL", 153],
	size : 2, // Large
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10],
	speed : "50 ft",
	scores : [16, 10, 14, 2, 10, 6],
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Ram",
		ability : 1, // Uses Strength
		damage : [1, 6, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "Charge: If moving 20 ft straight toward target, extra 2d6 dmg and DC 13 Str save or prone"
	}, {
		name : "Hooves",
		ability : 1, // Uses Strength
		damage : [2, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "Only against a prone target"
	}],
	traits : [{
		name : "Charge",
		description : "If the yakalo moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
	}]
};
//CR 1/2
CreatureList["dragon elk"] = {
	name : "Dragon Elk",
	source : ["ITLOTL", 153],
	size : 2, // Large
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 10,
	hp : 19,
	hd : [3, 10],
	speed : "50 ft",
	scores : [18, 10, 12, 2, 11, 7],
	passivePerception : 10,
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1, // Uses Strength
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "Charge: If moving 20 ft straight toward target, extra 2d4 dmg and DC 15 Str save or prone"
	}, {
		name : "Hooves",
		ability : 1, // Uses Strength
		damage : [2, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "Only against a prone creature"
	}],
	traits : [{
		name : "Charge",
		description : "If the dragon elk moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 5 (2d4) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
	}]
};
CreatureList["whiskergator"] = {
	name : "Whiskergator",
	source : ["ITLOTL", 154],
	size : 2, // Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 19,
	hd : [3, 10],
	speed : "20 ft, swim 30 ft",
	scores : [15, 10, 13, 2, 10, 5],
	skills : {
		"stealth" : 2
	},
	passivePerception : 10,
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "Target is grappled (escape DC 12) and restrained; can't bite another target"
	}],
	traits : [{
		name : "Hold Breath",
		description : "The whiskergator can hold its breath for 15 minutes."
	}]
};
//CR 1
CreatureList["cougar goat"] = {
	name : "Cougar Goat",
	source : ["ITLOTL", 154],
	size : 2, // Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 19,
	hd : [3, 10],
	speed : "40 ft",
	scores : [17, 11, 12, 3, 12, 6],
	passivePerception : 11,
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Ram",
		ability : 1, // Uses Strength
		damage : [2, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "Charge: If moving 20 ft straight toward target, extra 2d4 bludg. dmg and DC 13 Str save or prone"
	}, {
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 8, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Claws",
		ability : 1, // Uses Strength
		damage : [1, 10, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Charge",
		description : "If the cougar goat moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The cougar goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}]
};
CreatureList["flying fishifuru"] = {
	name : "Flying Fishifuru",
	source : ["ITLOTL", 155],
	size : 1, // Huge
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 90,
	hd : [12, 12],
	speed : "0 ft, fly 60 ft, swim 60 ft",
	scores : [19, 10, 13, 2, 11, 6],
	passivePerception : 10,
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 1, // Uses Strength
		damage : [3, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Amphibious",
		description : "The flying fishifuru can breathe air and water."
	}, {
		name : "Heavy",
		description : "The flying fishifuru can fly its full speed, but it must then return to the water before it can fly further."
	}]
};
CreatureList["platybear"] = {
	name : "Platybear",
	source : ["ITLOTL", 155],
	size : 2, // Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 34,
	hd : [4, 10],
	speed : "40 ft, swim 30 ft",
	scores : [19, 10, 16, 2, 13, 7],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Claws",
		ability : 1, // Uses Strength
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Keen Smell",
		description : "The platybear has advantage on Wisdom (Perception) checks that rely on smell."
	}]
};
CreatureList["saber-tooth caribou"] = {
	name : "Saber-Tooth Caribou",
	source : ["ITLOTL", 155],
	size : 2, // Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 52,
	hd : [8, 10],
	speed : "40 ft",
	scores : [16, 10, 12, 2, 10, 6],
	passivePerception : 10,
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Ram",
		ability : 1, // Uses Strength
		damage : [2, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "Charge: If moving 20 ft straight toward target, extra 1d10 dmg and DC 13 Str save or prone"
	}, {
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [2, 12, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Charge",
		description : "If the caribou moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (1d10) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
	}]
};
//CR 2
CreatureList["giant kohaku"] = {
	name : "Giant Kohaku",
	source : ["ITLOTL", 155],
	size : 1, // Huge
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 60,
	hd : [8, 12],
	speed : "0 ft, swim 60 ft",
	scores : [19, 14, 12, 1, 10, 3],
	passivePerception : 10,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 1, // Uses Strength
		damage : [2, 6, "bludgeoning"],
		range : "Melee (10 ft)",
		description : ""
	}],
	traits : [{
		name : "Water Breathing",
		description : "The giant kohaku can breathe only underwater."
	}]
};
CreatureList["goatrilla"] = {
	name : "Goatrilla",
	source : ["ITLOTL", 156],
	size : 2, // Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 90,
	hd : [9, 10],
	speed : "40 ft, climb 30 ft",
	scores : [19, 15, 14, 6, 12, 7],
	skills : {
		"athletics" : 6,
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Fist",
		ability : 1, // Uses Strength
		damage : [1, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Rock",
		ability : 1, // Uses Strength
		damage : [1, 8, "bludgeoning"],
		range : "30/60 ft",
		description : ""
	}]
};
CreatureList["komodoceratops"] = {
	name : "Komodoceratops",
	source : ["ITLOTL", 156],
	size : 2, // Large
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 11,
	hp : 45,
	hd : [6, 10],
	speed : "40 ft",
	scores : [19, 10, 15, 2, 12, 6],
	passivePerception : 11,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1, // Uses Strength
		damage : [2, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "Charge: If moving 20 ft straight toward target, extra 2d8 dmg and DC 15 Str save or prone"
	}],
	traits : [{
		name : "Charge",
		description : "If the komodoceratops moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
	}]
};
CreatureList["liondillo"] = {
	name : "Liondillo",
	source : ["ITLOTL", 156],
	size : 2, // Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 14,
	hp : 52,
	hd : [7, 10],
	speed : "40 ft",
	scores : [18, 14, 15, 3, 12, 8],
	skills : {
		"perception" : 3,
		"stealth" : 6
	},
	passivePerception : 13,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Claw",
		ability : 1, // Uses Strength
		damage : [2, 4, "slashing"],
		range : "Melee (5 ft)",
		description : "Pounce: If moving 20 ft straight toward target, DC 14 Str save or prone; Can bite prone target as bonus action"
	}],
	traits : [{
		name : "Keen Smell",
		description : "The liondillo has advantage on Wisdom (Perception) checks that rely on smell."
	}, {
		name : "Pounce",
		description : "If the liondillo moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the liondillo can make one bite attack against it as a bonus action."
	}]
};
CreatureList["moray hound"] = {
	name : "Moray Hound",
	source : ["ITLOTL", 157],
	size : 1, // Huge
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 14,
	hp : 42,
	hd : [5, 12],
	speed : "70 ft, swim 60 ft",
	scores : [18, 16, 14, 4, 11, 8],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Tail",
		ability : 1, // Uses Strength
		damage : [2, 6, "bludgeoning"],
		range : "Melee (10 ft)",
		description : ""
	}],
	traits : [{
		name : "Keen Smell",
		description : "The hound has advantage on Wisdom (Perception) checks that rely on smell."
	}, {
		name : "Endurance",
		description : "The hound has advantage on saving throws against becoming exhausted."
	}]
};
CreatureList["polar caniform"] = {
	name : "Polar Caniform",
	source : ["ITLOTL", 157],
	size : 2, // Large
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 12,
	hp : 42,
	hd : [5, 10],
	speed : "50 ft, swim 30 ft",
	scores : [19, 10, 16, 2, 13, 8],
	skills : {
		"perception" : 3
	},
	passivePerception : 13,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Claws",
		ability : 1, // Uses Strength
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Keen Smell",
		description : "The caniform has advantage on Wisdom (Perception) checks that rely on smell."
	}]
};
//CR 3
CreatureList["armabear"] = {
	name : "Armabear",
	source : ["ITLOTL", 157],
	size : 2, // Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 14,
	hp : 77,
	hd : [9, 12],
	speed : "40 ft",
	scores : [19, 10, 18, 2, 13, 7],
	skills : {
		"perception" : 3
	},
	resistances : "Bludgeoning, Piercing, and Slashing from nonmagical attacks",
	passivePerception : 13,
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Claws",
		ability : 1, // Uses Strength
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Keen Smell",
		description : "The armabear has advantage on Wisdom (Perception) checks that rely on smell."
	}]
};
CreatureList["elephoceros beetle"] = {
	name : "Elephoceros Beetle",
	source : ["ITLOTL", 158],
	size : 1, // Huge
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 14,
	hp : 66,
	hd : [7, 12],
	speed : "40 ft, burrow 30 ft",
	scores : [20, 7, 18, 2, 11, 6],
	resistances : "Bludgeoning, Piercing, and Slashing from nonmagical attacks",
	passivePerception : 10,
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 1, // Uses Strength
		damage : [3, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
	}]
};
//CR 4
CreatureList["eleboon"] = {
	name : "Eleboon",
	source : ["ITLOTL", 158],
	size : 1, // Huge
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 76,
	hd : [8, 12],
	speed : "40 ft",
	scores : [22, 9, 17, 3, 11, 6],
	passivePerception : 10,
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1, // Uses Strength
		damage : [2, 10, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Slam",
		ability : 1, // Uses Strength
		damage : [3, 8, "bludgeoning"],
		range : "Melee (10 ft)",
		description : "Trampling Charge: If moving 20 ft straight toward target, DC 12 Str save or prone"
	}, {
		name : "Stomp",
		ability : 1, // Uses Strength
		damage : [3, 10, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "Can only be used against a prone creature (can be used as a bonus action via Trampling Charge)"
	}],
	traits : [{
		name : "Trampling Charge",
		description : "If the eleboon moves at least 20 feet straight toward a creature and then hits it with a gore/slam attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the eleboon can make one stomp attack against it as a bonus action."
	}]
};
//CR 8
CreatureList["flying tamaraw"] = {
	name : "Flying Tamaraw",
	source : ["ITLOTL", 117],
	size : 1, // Huge
	type : "Beast",
	companion : "mount",
	alignment : "Unaligned",
	ac : 15,
	hp : 168,
	hd : [16, 12],
	speed : "25 ft, fly 60 ft (hover)",
	scores : [21, 11, 18, 4, 12, 8],
	saves : ["Str", "Con"],
	passivePerception : 11,
	challengeRating : "8",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
		name : "Slam",
		ability : 1, // Uses Strength
		damage : [3, 12, "bludgeoning"],
		range : "Melee (10 ft)",
		description : "Dive: If diving 30 ft straight toward target, extra 5d10 dmg and DC 15 Str save or pushed 10 ft & prone"
	}, {
		name : "Gore",
		ability : 1, // Uses Strength
		damage : [4, 10, "piercing"],
		range : "Melee (10 ft)",
		description : ""
	}, {
		name : "Air Blast (Recharge 5-6)",
		ability : 3, 
		damage : [5, 10, "bludgeoning"],
		range : "30-ft cone",
		description : "Hits all in area; DC 15 Str save, half dmg on success; on fail, also pushed 30 ft and knocked prone",
		abilitytodamage : false,
		dc : true
	}],
	traits : [{
		name : "Basic Airlacing",
		description : "The tamaraw can initiate basic airlacing effects as a 5th-level lacer."
	}, {
		name : "Dive",
		description : "If the tamaraw is flying and dives at least 30 feet straight toward a target and then hits it with a slam attack, the attack deals an extra 28 (5d10) bludgeoning damage to the target. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be pushed up to 10 feet away and knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The tamaraw has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}]
};
