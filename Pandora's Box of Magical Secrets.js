var iFileName = "PBMS";
RequiredSheetVersion("13.1.7");
SourceList["PBMS"] = {
	name : "Pandoras Box of Magical Secrets",
	abbreviation : "PBMS",
	group : "Pandoras Box of Magical Secrets",
	date : "2023/07/18",
};

// Adds a new class, the Witch, with 7 subclasses
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
		"\n \u2022 A wand -or- a relic orb;\n \u2022 A component pouch -or- an arcane focus;" +
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

		"class" : ["sorcerer", "warlock", "witch", "wizard"], 

		level : [0, 9]
	},
	
	features : {

		"weird magic" : {
			name : "Weird Magic",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + "The common threads between you and the witch before have given the ability to see the threads and cast spells. This innate connection to the weave has given you the ability to draw power from your surroundings both natural and manufactured in order to cast your spells. You gain the 1st-level Witch Bolt spell, which does not count against the number of spells you can have prepared., using Wisdom as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus" + "\n   " + "I can cast witch spells as rituals if they have the ritual tag",
			additional : ["2 cantrips known", "2 cantrips known", "2 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known"],
		},

		"subclassfeature1" : {
			name : "Coven",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + "Choose a Coven learned your craft from and put it in the \"Class\" field" + "\n   " + "Choose either Coven of Blood, Coven of the Dead, Coven of the Gale, Coven of the Goddess, Coven of the Hedge, or Coven of Hellfire",
		},
			
		"meddle magic" : {
			name : "Meddle Magic", 
			source : [["PBMS", 0]],
			minlevel : 2,
			description : "\n   " + "Use the Choose Feature button above to add a Meddle Magic option to the third page. You have developed the ability to twist the threads within nearby magic as you desire. This magic is measured by meddling points, and you gain one meddling point for each witch level. Each time you use a meddle spell it costs one point, additionally, all spent meddling points are regained when you finish a long rest. When using this ability you can use one meddle spell as a reaction when a spell is cast by another creature within 60 feet of you or as a bonus action on your turn when you cast a spell. You can choose three meddle spells from the following list at 2nd level. When you reach 9th level you can choose an additional three meddle spells from the following list. The chosen meddle spells can be changed during a short or long rest. In addition, all meddling points are restored during a long rest."		,
			usages : [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery : "long rest",
			extraname : "Meddle Magic Options",
			extrachoices : ["Blessing Spell", "Deosil Spell", "Empowered Spell", "Extended Spell", "Inversion Spell", "Magnifying Spell", "Protection Spell", "Remote Spell", "Resolution Spell", "Reversal Spell", "Silent Spell", "Strengthened Spell", "Swift Spell", "Twinned Spell", "Uncrossing Spell", "Weakened Spell", "Weird Spell", "Widdershin Spell"],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 9 ? 3 : n > 9 ? 6 : 6;
			}),		
			"blessing spell" : {
				name : "Blessing Spell",
				description : "\n   " + "You target one spell, if that spell produces a healing effect in which hit points are regained the target gains advantage on death saves and a +2 bonus to their AC for the next hour.",
				action : ["bonus action", "reaction"],
			},				
			
			"deosil spell" : {
				name : "Deosil Spell",
				description : "\n   " + "You target one spell to increase the spells accuracy. If the spellcaster must make an attack roll, they do so with advantage. If the spell requires a creature to make a saving throw, they do so with disadvantage.",
				action : ["bonus action", "reaction"],
			},							
			
			"empowered spell" : {
				name : "Empowered Spell",
				description : "\n   " + "You target one spell to re-roll a number of the damage dice up to your wisdom modifier (minimum one). You take the higher rolls.",
				action : ["bonus action", "reaction"],
			},
			
			"extended spell" : {
				name : "Extended Spell",
				description : "\n   " + "You target one spell that has a duration of 1 minute or longer. The duration of that spell is doubled up to a maximum of 24 hours.",
				action : ["bonus action", "reaction"],
			},
			
			"inversion spell" : {
				name : "Inversion Spell",
				description : "\n   " + "You target one spell that deals damage. You can change that spells damage type to a different damage type of choice.",
				action : ["bonus action", "reaction"],
			},
			
			"magnifying spell" : {
				name : "Magnifying Spell",
				description : "\n   " + "You target one spell, if that spell has an area of effect you can increase the size of that area up to 30 feet.",
				action : ["bonus action", "reaction"],
			},
			"protection spell" : {
				name : "Protection Spell",
				description : "\n   " + "You target one spell, if that spell forces creatures to make a saving throw, you can protect some of those creatures from the spells full force. You choose a number of those creatures up to your wisdom modifier. A chosen creature automatically succeeds on its saving throw against the spell.",
				action : ["bonus action", "reaction"],
			},

			"remote spell" : {
				name : "Remote Spell",
				description : "\n   " + "You target one spell, if that spell has a range of 30 feet or greater you can double the range of the spell. If the spell has a range less than 30 feet you can increase the range to 30 feet.",
				action : ["bonus action", "reaction"],
			},

			"resolution spell" : {
				name : "Resolution Spell",
				description : "\n   " + "You target one spell that has a duration of 1 minute or longer. The duration of that spell is halved regardless of the creatures concentration.",
				action : ["bonus action", "reaction"],
			},

			"reversal spell" : {
				name : "Reversal Spell",
				description : "\n   " + "You target one spell, if that spell targets a specific creature or creatures, and is not an area of effect, that spell is reversed on to the caster or another creature within range.",
				action : ["bonus action", "reaction"],
			},

			"silent spell" : {
				name : "Silent Spell",
				description : "\n   " + "You target one spell, the spellcaster shows no signs of casting the spell and the spell no longer requires verbal components.",
				action : ["bonus action", "reaction"],
			},

			"strengthened spell" : {
				name : "Strengthened Spell",
				description : "\n   " + "You target one spell, that spell deals one additional dice of damage. If the spell does not deal damage or produces a unique effect it is instead up-cast one level higher without expending a spell slot. The caster must be able to cast the up-cast level of spell.",
				action : ["bonus action", "reaction"],
			},

			"swift spell" : {
				name : "Swift Spell",
				description : "\n   " + "You target one spell, if that spell has a casting time of one action it can be cast as a bonus action instead. If you target your own spell that spell shares that same bonus action as the expended meddling point.",
				action : ["bonus action", "reaction"],
			},

			"twinned spell" : {
				name : "Twinned Spell",
				description : "\n   " + "You target one spell, if that spell only targets one creature and doesn't have a range of self, you can target one additional creature within the spells casting range.",
				action : ["bonus action", "reaction"],
			},

			"uncrossing spell" : {
				name : "Uncrossing Spell",
				description : "\n   " + "You target one spell that causes a condition effect as a result of the spell or existing spell effect. That magical effect ends immediately and any condition is removed.",
				action : ["bonus action", "reaction"],
			},	

			"weakened spell" : {
				name : "Weakened Spell",
				description : "\n   " + "You target one spell, if that spell is up-cast it is cast at one level lower and still consumes the higher level spell slot. If the spell was not up-cast it deal one dice less of damage. If this spell deals one dice of damage the damage die decreases to one die type lower.",
				action : ["bonus action", "reaction"],
			},

			"weird spell" : {
				name : "Weird Spell",
				description : "\n   " + "You target one spell, you can change the manifestation of that spell to a different spell of the same level or lower that the caster knows. That spell still uses that spell slot regardless of replaced spell level. You cannot replace a spell with a cantrip unless a cantrip was cast.",
				action : ["bonus action", "reaction"],
			},

			"widdershin spell" : {
				name : "Widdershin Spell",
				description : "\n   " + "You target one spell to decrease the spells accuracy. If the spellcaster must make an attack roll, they do so with disadvantage. If the spell requires a creature to make a saving throw, they do so with advantage.",
				action : ["bonus action", "reaction"],
			},
		},
			
		"copy cast" : {
			name : "Copy Cast", 
			source : [["PBMS", 0]],
			minlevel : 5,
			description : "\n   " + "You have learned how to read the threads from the magic around you and understand their meaning. As an action, you can choose one spell initiated within 30 feet of you that was cast within the last minute. If that spell is of a level you can cast, you can temporarily learn that spell from the thread to cast the spell during this turn using one of your corresponding spell slots. Once you have selected and read the thread you can cast or use that magic three times after your initial cast before the thread is lost. If you use this feature again before the spell thread is lost, the new spell thread replaces the previous one.",
			action : ["action"],
			usages : 3,
			recovery : "long rest",
		},	
		
		"void of threads" : {
			name : "Void of Threads", 
			source : [["PBMS", 0]],
			minlevel : 13,
			description : "\n   " + "You can push away threads of magic creating a space void of the threads. Once a day as an action you can cast Antimagic field with this feature without expending a spell slot. While active you are unable to use your witchcraft or spells, however, you can still use your meddle magic as long as the casted spell is outside of the antimagic field.",
			action : ["action"],
			usages : 1,
			recovery : "dawn",
		},

		"mystical mount" : {
			name : "Mystical Mount", 
			source : [["PBMS", 0]],
			minlevel : 17,
			description : "\n   " + "You have successfully crafted a mystical mount that can carry you along your journey. This mount can be made from any object that is capable of being mounted by you. This mount is attuned to you and does not count against the number of attunements you can have. This mount cannot be used or commanded by another creature without your permission. When selecting your mount you can choose whether it’s movement is walk or fly. This mount has 150 hit points, AC 18, movement speed of 60 feet. This mount is also immune to all condition effects, poison, necrotic, and psychic damage, as well as it is resistant to all other damage types. Regardless of distance or plane of existence you can always call to you the craft you have made. When calling forth your craft is requires an action. The mount teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft and send it back to where it previously resided.",
		},

		"witch's word" : {
			name : "Witch's Word", 
			source : [["PBMS", 0]],
			minlevel : 20,
			description : "\n   " + "You can push away threads of magic creating a space void of the threads. Once a day as an action you can cast Antimagic field with this feature without expending a spell slot. While active you are unable to use your witchcraft or spells, however, you can still use your meddle magic as long as the casted spell is outside of the antimagic field.",
			action : ["action", "reaction"],
			usages : 3,
			recovery : "long rest",	
			extraname : "Witch's Word"	,		
			extrachoices : ["Approach", "Dance", "Dispel", "Drop", "Flee", "Grovel", "Halt", "Hide", "Sleep", "Truth"],		
			"approach" : {
				name : "Approach Witch's Word",
				description : "\n   " + "The target moves toward you by the shortest and most direct route ending its turn within 5 feet of you.",
			},
			
			"dance" : {
				name : "Dance Witch's Word",
				description : "\n   " + "The target begins to dance for the next minute.",
			},
			
			"dispel" : {
				name : "Dispel Witch's Word",
				description : "\n   " + "The target ends concentration on its own cast spell. disengages in conflict and relinquish itself.",
			},	
			
			"drop" : {
				name : "Drop Witch's Word",
				description : "\n   " + "The target drops whatever it is holding, and ends its turn.",
			},	
			
			"flee" : {
				name : "Flee Witch's Word",
				description : "\n   " + "The target spends its turn moving away from you by the fastest available means.",
			},
			
			"grovel" : {
				name : "Grovel Witch's Word",
				description : "\n   " + "The target falls prone and then ends its turn.",
			},	

			"halt" : {
				name : "Halt Witch's Word",
				description : "\n   " + "The target doesn’t move or take actions until the end of its next turn. A flying creature stays aloft, provided that it is able to do so without moving. Otherwise the creature lands on the nearest landing.",
			},	

			"hide" : {
				name : "Hide Witch's Word",
				description : "\n   " + "The target seeks out the nearest place that provides partial or total coverage.",
			},	

			"sleep" : {
				name : "Sleep Witch's Word",
				description : "\n   " + "The target yawns, moves into a position to lay down and fall asleep.",
			},	

			"truth" : {
				name : "Truth Witch's Word",
				description : "\n   " + "The target must speak the truth for the next minute.",
			},  		
		}, 
	}, 
};

AddSubClass("witch", "arcane", {
	regExpSearch : /^(?=.*(witch))(?=.*arcane).*$/i,
	subname : "Coven of the Arcane",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "magic missile", "detect magic", "blur", "disruption", "counterspell", "dispel magic", "arcane eye", "arcane retaliation", "animate objects", "wall of force", "arcane gate", "disintigration"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel :1,
			description : "\n   " + " You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals force damage instead of lightning damage.",
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
			description : "\n   " + "You craft a magical object used by this coven known as a Spell Bottle. This bottle can contain powerful magical threads. As an action, during a short or long rest you can perform an hour long ritual to preserve a spell that you have prepared within this bottle. Once the spell is preserved you can cast the spell within the bottle as an action without using a spell slot. This bottle has three charges of the spell before the thread needs to be preserved again. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Thread",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can create a magical thread of magic that only you can see and touch. This thread can store residual energy that can be used to cast spells. Every time you spend a meddling point you continually add to this thread's power. Each meddling point is worth one 1st level spell slot, you can cast up to 5th level spells using five thread points. You can only cast spells at a level in which you can cast. The maximum number of points this thread can have at one time is is five.",
		},

		"subclassfeature3.1" : {
			name : "Force Spell",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "You gain an additional meddle spell only known by witches of this coven known as the force spell.",
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Force Spell"],
			"force spell" : {
				name : "Force Spell",
				description : "\n   " + "You target one spell, if that spell deals damage, the spell deals an additional dice of damage, and the damage type becomes force. Lastly the spell creates no visual effect.",
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Weave",
			source: "PBMS",
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can weave two meddle spells instead of one. When you do so it costs two meddling points.",
		},
      
		"subclassfeature11" : {
			name : "Witch's Cutting",
			source: "PBMS",
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can have that caster make a wisdom saving throw, on a failed save the thread between that spell and the caster is cut. The caster is unable to cast that spell for the next 24 hours.",
		},

		"subclassfeature15" : {
			name : "Witch's Fabricate",
			source: "PBMS",
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose from any meddling spell from the meddle spell list.",
		},  
	},
});

AddSubClass("witch", "blood", {
	regExpSearch : /^(?=.*(witch))(?=.*blood).*$/i,
	subname : "Coven of Blood",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "cure wounds", "inflict wounds", "lesser restoration", "wither and bloom", "vampiric touch", "life transference", "blight", "confusion", "contagion", "greater restoration", "harm", "flesh to stone"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + " You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals necrotic damage instead of lightning damage.",
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
			description : "\n   " + "You craft a magical blade used by this coven known as an Athame. This ceremonial blade is used to draw blood for your magic. This magical blade is equivalent to a +3 magical dagger except it follows the rulings of mage weapons and has been forged from blood and iron. As a bonus action, you can choose to concentrate on this weapon and have this athame levitate and move up to 60 feet of you to an unoccupied space for 1 min. As a bonus action on your turn, you can move the athame up to 60 feet and attack one target within 5 ft of it. You can choose to affect additional targets of any spell you cast if that target has been damaged by this blade within the last hour. The target does not need to be within range of the spell when it is cast and the target is automatically affected. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Sacrifice",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can weave your own blood into your spells. For every 5 hit points you sacrifice you can deal an extra dice of damage on that spell. ",
		},

		"subclassfeature3.1" : {
			name : "Bleeding Spell",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "You gain an additional meddle spell only known by witches of this coven known as the bleeding spell.",
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Bleeding Spell"],
			"bleeding spell" : {
				name : "Bleeding Spell",
				description : "\n   " + "You target one spell, if that spell is of 1st-level or higher the caster must make a constitution saving throw, on a failed save the caster loses 5 hit points for each level of spell that was cast.",
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Bloodletting",
			source: "PBMS",
			minlevel : 7,
			description : "\n   " + "Whenever you spend a meddling point on a spell that targets a creature that has already taken damage you can cast your spell at one higher spell slot available without expending that spell slot.",
		},
    
		"subclassfeature11" : {
			name : "Witch's Blood Curse",
			source: "PBMS",
			minlevel : 11,
			description : "\n   " + "Whenever you spend a meddling point on another casters spell you can cause them to expend extra energy to cast that spell. The caster must make a Constitution saving throw, on a failed save the caster expends one additional spell slot of choice.",
		},

		"subclassfeature15" : {
			name : "Witch's Regeneration",
			source: "PBMS",
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you regain hit points equal to the spells level.",
		},   
	},
});

AddSubClass("witch", "dead", {
	regExpSearch : /^(?=.*(witch))(?=.*dead).*$/i,
	subname : "Coven of the Dead",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "cause fear", "unseen servant", "gentle repose", "misty step", "spirit shroud", "speak with dead", "banishment", "shadow of moil", "danse macabre", "enervation", "circle of death", "eyebite"],
	spellcastingList : { 

		"class" : ["cleric", "paladin"], 

	},
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + " You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals necrotic damage instead of lightning damage.",
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
			description : "\n   " + "You craft a magical object used by this coven known as a Poppet. This objected is crafted into an effigy that resembles a humanoid figure and is made from cloth that is filled with briars and bones. As a bonus action on your turn you can choose one of the poppets effects to inflict or curse upon one humanoid shaped creature be it living or dead that you can see within 60 feet. That target must make a DC wisdom saving throw or be linked to this poppet and subjected to its effects while within 60 feet of it. These effects last until the poppet is dismissed as a bonus action, linked to a new target, or the target is dropped to 0 hit points. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided. While cursed by the poppet the target is under the effects of the Hex Spell. At 5th level the effects of hex increase with the warlock's eldritch invocation Maddening Hex, and at 7th level the effects of the warlock's eldritch invocation Relentless Hex.",
		},

		"subclassfeature3" : {
			name : "Witch's Whisper",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can choose to target one creature within 60 feet. That creature must make a wisdom saving throw, on a failed save the target begins to hear a distorted whispers causing the target to have disadvantage on attack rolls with a weapon or spell for the next minute.",
		},

		"subclassfeature3.1" : {
			name : "Channeling Spell",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "You gain an additional meddle spell only known by witches of this coven known as the channeling spell.",
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Channeling Spell"],
			"channeling spell" : {
				name : "Channeling Spell",
				description : "\n   " + "You target one spell, the caster of that spell receives a d4, and can add the number rolled to the spells attack roll or increase the DC for that spell.",
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Banishment",
			source: "PBMS",
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell that targets one creature that creature must make a Charisma saving throw, on a failed save the creature is banished to the ethereal plane for 1 hour. Undead creatures with a challenge rating less than your witch level are permanently prevented from returning unless a wish spell is used.",
		},
      
		"subclassfeature11" : {
			name : "Witch's Haunting",
			source: "PBMS",
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can choose to have the caster make a wisdom saving throw against your spell DC, on a failed save the caster is frightened, and haunted by a spirit forged from their fears that only they can see. This spirit is tethered to the caster in some way, be it the most recent creature they killed, a fallen ally, or a tormented loved one. This spirit remains chasing the creature for 1 minute.",
		},

		"subclassfeature15" : {
			name : "Witch's Fetch",
			source: "PBMS",
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose to create a ghostly double of your self known as a fetch that is forged out of ethereal energy. This double lasts for 1 hour and does not require concentration. You can only have one fetch at a time. While this apparition is present you can mentally command where it moves. This apparition cannot attack or take damage, however, any creature that is not an ally that can see this fetch within 30 feet must make a wisdom saving throw, on a failed save the target is frightened by this apparition and must spend the next 1 hour moving as far away from it as it can. If the target succeeds they are immune to this effect for 24 hours.",
		},    
	},
});

AddSubClass("witch", "gale", {
	regExpSearch : /^(?=.*(witch))(?=.*gale).*$/i,
	subname : "Coven of the Gale",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "fog cloud", "thunderwave", "gust of wind", "misty step", "lightning bolt", "tidal wave", "ice storm", "storm sphere", "control winds", "maelstrom", "chain lightning", "wind walk"],
	spellcastingList : { 

		"class" : ["druid", "ranger"],
		
	},
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + "You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals wave or lightning damage.",
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
			description : "\n   " + "You create a magical object used by this coven known as a wand vane. This object is used to connect you with the threads of the storm. This object has been magically charged through constant use within weather rituals. When you cast an evocation spell that deals cold, lightning, thunder, or wave damage that has a duration of instantaneous you can change that duration to concentration up to 10 minutes causing the vane upon the wand to spin. If that spell deals direct damage, the spell deals half the dice of damage on consecutive turns after the initial cast. The spell also can be moved as a bonus action on each of your turns up to 30 feet in any direction. This effect ends early if you lose concentration, or choose to end it early no action required. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Brew",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can choose to have a swirl of static wind surround you. When you do so, you gain a bonus 10 feet to movement speed until the end of your next turn. While this effect is active any creature to hit you with a melee attack takes 5 lightning damage.",
		},

		"subclassfeature3.1" : {
			name : "Tempest Spell",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "You gain an additional meddle spell only known by witches of this coven known as the tempest spell.",
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Tempest Spell"],
			"tempest spell" : {
				name : "Tempest Spell",
				description : "\n   " + "You target one damaging spell, that spells damage becomes cold, lightning, thunder, or wave (your choice), and any creature targeted by this spell must make a Constitution saving throw against your spell DC. On a failure the creature is paralyzed for 1 minute.",
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Call",
			source: "PBMS",
			minlevel : 7,
			description : "\n   " + "Whenever you meddle another casters spell that deals cold, lightning, thunder, or wave damage. You can make an arcana (intelligence) check against the casters spell DC. If you succeed you take control of that spell and can choose its target.",
		},

		"subclassfeature11" : {
			name : "Witch's Cloud",
			source: "PBMS",
			minlevel : 11,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can choose to create a 20 foot radius sphere of fog centered on you. This sphere spreads around corners, and its area is heavily obscured. You are able to see clearly in this space. This effect lasts for 1 minute or until a wind of moderate or greater speed disperses it. (10 mph)",
		},

		"subclassfeature15" : {
			name : "Witch's Cyclone",
			source: "PBMS",
			minlevel : 15,
			description : "\n   " + "can create a cyclone that is a 30 foot radius sphere centered on you. This sphere moves with you and lasts for up to an hour, unless you dismiss it. (no action required) While this cyclone is active all ranged missile weapon attacks have disadvantage toward you. Creatures that enter this cyclone for the first time or start their turn in it must make a Dexterity saving throw. On a failed save the creature takes 1d4 cold damage, or half as much on a successful save. Lastly any spell you cast while this cyclone is active that deals cold, lightning, thunder, or wave damage becomes apart of the cyclone adding 1d4 damage of that damage type to the cyclones damage.",
		},
	},
});

AddSubClass("witch", "goddess", {
	regExpSearch : /^(?=.*(witch))(?=.*goddess).*$/i,
	subname : "Coven of the Goddess",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "ceremony", "detect good and evil", "spiritual weapon", "prayer of healing", "beacon of hope", "spirit guardians", "aura of purity", "guardian of faith", "commune", "hallow", "forbiddance", "heal"],
	spellcastingList : { 

		"class" : ["cleric", "paladin"],
		
	},
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + "You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals radiant damage instead of lightning damage.",
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
			description : "\n   " + "You craft a magical object used by this coven known as an Amulet. This object is crafted from pure threads of magic and forged into a holy symbol of Mystra the Goddess of Magic. During a long rest you can imbue one abjuration spell that you have prepared with a duration longer than instantaneous upon this amulet. When you do so the effects of that spell remain upon you until you are not wearing the amulet, change the imbued spell, or dismiss it as a bonus action. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Communion",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can you gain a flash of divine insight by reading the divine threads from your surroundings. You receive insight as if you had casted the augury spell. ",
		},

		"subclassfeature3.1" : {
			name : "Absolution Spell",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "You gain an additional meddle spell only known by witches of this coven known as the absolution spell.",
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Absolution Spell"],
			"absolution spell" : {
				name : "Absolution Spell",
				description : "\n   " + "You target one spell, if that spell is yours or an allies you can grant immunity to all effects from that spell to allies within the spells effect range.",
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Divine Intervention",
			source: "PBMS",
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can choose to change the damage dealt to Radiant. When you do so that target must make a DC wisdom saving throw, on a failed save the target is outlined in divine energy. All attack rolls against that creature has advantage and the target cannot benefit from invisibility, or being obscured in darkness or magical darkness.",
		},

		"subclassfeature11" : {
			name : "Witch's Excommunicate",
			source: "PBMS",
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can choose to have the caster make a wisdom saving throw against your spell DC, on a failed save you disconnect the magical threads of the divinity or benefactor from the caster be it a god, or patron. That caster is disconnected from their deity for 24 hours. ",
		},

		"subclassfeature15" : {
			name : "Witch's Persecution",
			source: "PBMS",
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose to mark a target within 60 feet as accursed. That target must make a DC constitution save throw, on a failed save that target is physically marked in a way that would identify them as accursed to the current religious presence. While the target is marked in this way; magical anomalies take place that is out of their control. This includes the summoning of frogs, the warping of religious idols, and additional harmless effects. The target is viewed as an enemy by all creatures within 30 feet of it. These effects ends after the target is dropped to 0 hit points, the creature can repeat the saving throw to end the effect at the dawn of each day.",
		},
	},
});
AddSubClass("witch", "hedge", {
	regExpSearch : /^(?=.*(witch))(?=.*hedge).*$/i,
	subname : "Coven of the Hedge",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt"],
	spellcastingList : { 

		"class" : ["sorcerer", "warlock", "wizard"], 

	},
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + " You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals your choice damage instead of lightning damage.",
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
				return n < 1 ? "" : (n < 3 ? 2 : n < 5 ? 4 : n < 7 ? 6 : n < 9 ? 8 : n < 11 ? 10 : 12) + " spells";
			}),
			spellcastingBonus : {
				name : "Coven Spells",
				"class" : "any",
				times : levels.map(function (n) {
					return n < 3 ? 2 : n < 5 ? 4 : n < 7 ? 6 : n < 9 ? 8 : n < 11 ? 10 : 12;
				})
			}
		},
		"subclassfeature1.1" : {
			name : "Hedge Trinket",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + "You craft a magical object that is unique to you known as a hedge trinket. This item contains powerful magical threads. This personal magical object must be no larger than a 1ft cube and possesses two features; the first feature grants you one first level spell of choice from any spell list that can be cast without consuming a spell slot. This spell can be cast in this way three times before a long rest as long as you have this trinket in hand. The other being one feat of choice. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Trickery",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can change the spell meddled as if it was transformed by the minor illusion or prestidigitation cantrip. You can choose how the spell appears to others, the sounds it produces, the smells it creates. If you are the one casting the spell you can also choose the verbal components you use to cast it. Creatures attempting to identify the spell have disadvantage on the ability check and if counterspell is used the target has disadvantage on the ability check if the spell is higher than the counter spell. If the spell is a lower level they still must make an ability check with a normal roll.",
		},

		"subclassfeature3.1" : {
			name : "Wild Spell",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "You gain an additional meddle spell only known by witches of this coven known as the channeling spell.",
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Wild Spell"],
			"wild spell" : {
				name : "Wild Spell",
				description : "\n   " + "You gain an additional meddle spell of an unpredictable nature the wild spell. This meddling spell can replicate any meddle magic option possible used by the witch. However, once this meddle option is used you must roll a d20 immediately. If you roll a one you must roll on the wild magic surge table on pg. 104 of the player’s handbook. ",
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Belittle",
			source: "PBMS",
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell the target of that spell must make a constitution saving throw or be affected by the enlarge/reduce spell your choice of enlarge or reduce. If this spell is a conjuration the conjuration automatically fails.",
		},
      
		"subclassfeature11" : {
			name : "Witch's Curse",
			source: "PBMS",
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can have that caster make a wisdom saving throw, on a failed save the caster is affected by the polymorph spell.",
		},

		"subclassfeature15" : {
			name : "Witch's Bargain",
			source: "PBMS",
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose to cast the spell without consuming a spell slot as long as a price is paid in favor. When you do so you have a number of hours equal to 8 minus the spells level to pay the price for the spell that is cast. Spells of 8th level or higher must be paid immediately. If the required payment is not met you must roll on the wild magic surge table twice on pg. 104 of the players handbook. The payment for the spell can be in gold, blood, a life, or an item of necessary gold value. See table below for bargain. ",
			toNotesPage : [{
				name : "Witch's Bargain",
				note : [
					"Spell level	Bargain Cost",
					"1st-level		50 gp, 10 hit points (Blood), Item (Worth 50 gp)",
					"2nd-level		100 gp, 20 hit points (Blood), Item (Worth 100 gp)",
					"3rd-level		150 gp, 40 hit points (Blood), Item (Worth 150 gp)",
					"4th-level		200 gp, 80 hit points (Blood), Item (Worth 200 gp)",
					"5th-level		250 gp, 160 hit points (Blood), Item (Worth 250 gp)",
					"6th-level		300 gp, 300 hit points (Blood), Item (Worth 300 gp)",
					"7th-level		500 gp, 750 hit points (Blood), Item (Worth 500 gp)",
					"8th-level		5000 gp, 1500 hit points (Blood), Item (Worth 5000 gp)",
					"9th-level		50000 gp, 3000 hit points (Blood), Item (Worth 50000 gp)",
				],
			}],	
		},    
	},
});
AddSubClass("witch", "wood", {
	regExpSearch : /^(?=.*(witch))(?=.*wood).*$/i,
	subname : "Coven of the Wood",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "entange", "goodberry", "barkskin", "locate plants", "plant growth", "speak with plants", "grasping vine", "guardian of nature", "tree stride", "wrath of nature", "transport via plants", "wall of thorns"],
	spellcastingList : { 

		"class" : ["druid", "ranger"], 

	},
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + "You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals poison damage instead of lightning damage.",
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
			description : "\n   " + "You craft a magical object used by this coven known as a Poultice. This objected is crafted from seven sacred healing herbs that is capable of offering a magical remedies along your journey. As an action you can lay this poultice on the body of you or one willing creature to remove one disease, toxin, or condition effect. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Wicker",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can choose to have wickers grow around you in a 15 foot radius centered on you. These wickers create difficult terrain, and deal 1d4 piercing damage to each creature other than you that starts its turn within this area.",
		},

		"subclassfeature3.1" : {
			name : "Rooting Spell",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "You gain an additional meddle spell only known by witches of this coven known as the rooting spell.",
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Rooting Spell"],
			"rooting spell" : {
				name : "Rooting Spell",
				description : "\n   " + "You target one spell, the caster of that spell must make a strength saving throw. On a failed save the caster is restrained and rooted to the ground by vines.",
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Flower",
			source: "PBMS",
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can create a magical blossom that sprouts in an unoccupied space within 30 feet. That blossom possesses a magical aura of the meddling spell used. All spells cast by you and allies within 30 feet of that blossom are cast with the meddled effect. This flower disappears when you create another blossom, the blossom is dismissed as a bonus action, or the blossom is destroyed. The blossom has an AC 12 and 25 hit points.",
		},

		"subclassfeature11" : {
			name : "Witch's Thorns",
			source: "PBMS",
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can choose to have the caster to make a wisdom saving throw, on a failed save the caster takes 1d6 force damage from magical thorns ejected from their own spell.",
		},

		"subclassfeature15" : {
			name : "Witch's Pollen",
			source: "PBMS",
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose to create a cloud of magical pollen that covers a 15 foot radius from a point you choose within 60 feet that you can see. Any enemy to enter this space must make a Constitution saving throw, on a failed save the target has disadvantage on all saving throws against yours or your allies spells.",
		},
	
	},

});

AddSubClass("witch", "hellfire", {
	regExpSearch : /^(?=.*(witch))(?=.*hellfire).*$/i,
	subname : "Coven of Hellfire",
	source : [["PBMS", 0]],
	spellcastingExtra : ["witch bolt", "burning hands", "hellish rebuke", "crown of madness", "scorching ray", "fireball", "summon lesser demon", "summon greater demon", "wall of fire", "immolation", "infernal calling", "investiture of flame", "summon fiend"],
	spellcastingList : { 

		"class" : ["cleric", "paladin"], 

	},
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : "\n   " + "You have become adept with spells that were passed to you by the witch before you. These spells are manifestations of your connection to the threads. Once you have access to a coven spell, you always have it prepared, and it doesn’t count against the spells you can have prepared. In addition, the witch bolt spell deals fire damage instead of lightning damage.",
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
			description : "\n   " + "You craft or receive a magical object used by this coven known as a Book of Shadows. This book possesses information, lore, true names, stats, weaknesses, and the languages of fiends. (Abyssal and Infernal) This book grants you advantage on any skill check, saving throw, or attack roll made about or against a fiend. Additionally, the power of this book grants you a fiendish companion as if you had casted the find familiar spell, however, this creature can attack if you so choose. You can choose between a Imp or a Quasit when you gain this book. Additionally, as you level this book grows in power and allows you to have a more powerful fiends as a companion. At 3rd level you can summon a fiendish companion with a challenge rating of 2 or lower, at 7th level a challenge rating of 3 or lower, at 11th level a challenge rating of 4 or lower, and at 14th level a challenge rating of 5 or lower. You can only have one companion at a time and requires a long rest in order to summon a new one if dropped to 0 hit points or to change fiend type. Your book of shadows is the focus for this magic and therefore does not require a spell slot. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Guile",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can weave infernal power into your spell. When you do so any creature affected by the spell must make a wisdom saving throw. On a failed save the creature is either frightened or charmed by you (your choice) for the next minute.",
		},

		"subclassfeature3.1" : {
			name : "Hellfire Spell",
			source: "PBMS",
			minlevel : 3,
			description : "\n   " + "You gain an additional meddle spell only known by witches of this coven known as the hellfire spell.",
			extraname : "Coven Meddle Magic Option",
			extrachoices : ["Hellfire Spell"],
			"hellfire spell" : {
				name : "Hellfire Spell",
				description : "\n   " + "You target one spell, the manifestation of that sell appears as blue flames changing the damage of that spell to hellfire. Creatures that are immune to fire damage are resistant to hellfire damage, and creatures with resistance to fire damage are normally effected by hellfire damage.",
				action : ["bonus action", "reaction"],
			},
		},

		"subclassfeature7" : {
			name : "Witch's Torture",
			source: "PBMS",
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can choose to deal an additional 1d6 hellfire damage to the affected target.",
		},

		"subclassfeature11" : {
			name : "Witch's Madness",
			source: "PBMS",
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can cause them to make a wisdom saving throw, on a failed save the creature gains short term madness for 10 min. See the short term madness table for additional effects on pg. 259. of DM guide.",
		},

		"subclassfeature15" : {
			name : "Witch's Imps",
			source: "PBMS",
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can temporarily conjure a swarm of imps to deal additional damage to the target as if affected by the cloud of daggers spell.",
		},
	
	},

});	

spellSchoolList["Revoc"] = "revocation";

SpellsList["mind fog"] = {
	name : "Mind Fog",
	source : [["PBMS", 0]],
	classes : ["fool", "witch"],
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
	
SpellsList["shout"] = {
	name : "Shout",
	source : [["PBMS", 0]],
	classes : ["fool", "witch", "bard"],
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

SpellsList["taunt"] = {
	name : "Taunt",
	source : [["PBMS", 0]],
	classes : ["fool", "witch", "bard"],
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
	
SpellsList["erase"] = {
	name : "Erase",
	source : [["PBMS", 0]],
	classes : ["fool", "wizard"],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "erase non-magical writing, erase magic writing DC 10+spell level (Int)Arcana check",
	descriptionFull : "You magically erase writings either magical or non-magical from a surface. When you cast this spell you can erase a single scroll, two pages of parchment, an inscribed rune, or an arcane seal. This spell has no effect on illusory script. Non magical writings are automatically erased when this spell is cast. If the writing is magical the caster must make an Intelligence (Arcana) skill check. The DC is 10 + the level of magic inscribed.",
};

SpellsList["disruption"] = {
	name : "Disruption",
	source : [["PBMS", 0]],
	classes : ["witch"],
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

SpellsList["arcane retaliation"] = {
	name : "Arcane Retaliation",
	source : [["PBMS", 0]],
	classes : ["witch"],
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

SpellsList["alchemist fire"] = {
	name : "Alchemist Fire",
	source : [["PBMS", 0]],
	classes : ["artificer", "witch", "fool"],
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
	classes : ["witch"],
	level : 0,
	school : "Revoc",
	time : "1 a",
	range : "30 ft",
	components: "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 spellcaster w/i range Con save on fail DC 10 + SL check to cast spellcaster spell using spellcaster spell slot.",
	descriptionFull : "When you cast this spell you must target one spellcaster other than yourself within range. That spellcaster must succeed a Constitution saving throw or be siphoned of their magical power. On a failed save, you can choose one spell the caster knows of 1st level or higher, you must be capable of casting the level of spell you choose. When you do so you must make an ability check using your spellcasting ability. The DC is 10 + the spells level. On a successful check you cast that spell using the targets spell slot. If the target succeeds the effect does nothing. If you fail the ability check you expend a spell slot equal to the level of the spell usurped and the effect dos noting.",
};

SpellsList["merlin"] = {
	name : "Merlin",
	source : [["PBMS", 0]],
	classes : ["wizard"],
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
	classes : ["witch"],
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
	classes : ["witch"],
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

SpellsList["moon rune"] = {
	name : "Moon Rune",
	source : [["PBMS", 0]],
	classes : ["druid"],
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
	classes : ["wizard", "cleric"],
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
	classes : ["wizard"],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "self",
	components : "V,S",
	duration : "Instantaneous",
	description : "you gain an extra action to be used within 24 hours",
	descriptionFull : "You manipulate time just enough to grant you an extra action. This action surge remains until used, and must be used within the next 24 hours. This magic does not stack if cast again but instead resets the poin measured for the next 24 hours.",
};	

// Adds Magical Equipment
MagicItemsList = {
	"flax linen robes" : {
		name : "Flax Linen Robes",
		source : [["PBMS", 0]],
		type : "armor (robe)",
		rarity : "common",
		extraTooltip : "can be purchased for 5 gp",
		weight : 5,
		description : "Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
		attunement : true,
		savetxt : "Adv. on Saves v.s spells and magical effects",
		addArmor : "Flax Linen Robes",
		armorOptions : {
			regExpSearch : /^(?=.*(flax))(?=.*linen).*$/i,
			name : "Flax Linen Robes",
			source : [["PBMS", 0]],
			type : "light",
			ac : 11,
			weight : 5,
		},	
	},
	"suede robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects",
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
	},
	"embroidered robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects",
		choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
		choicesNotInMenu : true,
		"charmed" : {
			name : "Embroidered Robes of Charm Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
			],
			savetxt : "Immune to Charmed condition",
		},
		"cursed" : {
			name : "Embroidered Robes of Curse Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
			],
			savetxt : "Immune to Cursed condition",
		},
		"frightened" : {
			name : "Embroidered Robes of Fright Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
			],
			savetxt : "Immune to Frightened condition",
		},	
		"paralyzed" : {
			name : "Embroidered Robes of Paralysis Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
			],
			savetxt : "Immune to Paralyzed condition",
		},
		"magical sleep" : {
			name : "Embroidered Robes of Slumber Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
			],
			savetxt : "Immune to Magical Sleep",
		},
		"petrified" : {
			name : " Embroidered Robes of Petrification Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
			],
			savetxt : "Immune to Petrified condition",
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
	},
	"cambric robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects",
		choice2s : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
		choicesNotInMenu : true,
		"charmed" : {
			name : "Cambric Robes of Charm Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
			],
			savetxt : "Immune to Charmed condition",
		},
		"cursed" : {
			name : "Cambric Robes of Curse Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
			],
			savetxt : "Immune to Cursed condition",
		},
		"frightened" : {
			name : "Cambric Robes of Fright Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
			],
			savetxt : "Immune to Frightened condition",
		},	
		"paralyzed" : {
			name : "Cambric Robes of Paralysis Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
			],
			savetxt : "Immune to Paralyzed condition",
		},
		"magical sleep" : {
			name : "Cambric Robes of Slumber Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
			],
			savetxt : "Immune to Magical Sleep",
		},
		"petrified" : {
			name : "Cambric Robes of Petrification Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
			],
			savetxt : "Immune to Petrified condition",
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
	},
	"leather robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects",
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
	},
	"velvet robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects",
		choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
		choicesNotInMenu : true,
		"charmed" : {
			name : "Velvet Robes of Charm Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
			],
			savetxt : "Immune to Charmed condition",
		},
		"cursed" : {
			name : "Velvet Robes of Curse Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
			],
			savetxt : "Immune to Cursed condition",
		},
		"frightened" : {
			name : "Velvet Robes of Fright Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
			],
			savetxt : "Immune to Frightened condition",
		},	
		"paralyzed" : {
			name : "Velvet Robes of Paralysis Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
			],
			savetxt : "Immune to Paralyzed condition",
		},
		"magical sleep" : {
			name : "Velvet Robes of Slumber Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
			],
			savetxt : "Immune to Magical Sleep",
		},
		"petrified" : {
			name : "Velvet Robes of Petrification Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
			],
			savetxt : "Immune to Petrified condition",
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
	},
	"brocade robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects",	
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
	},
	"wool robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects",
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
			savetxt : "Immune to Charmed condition",
		},
		"cursed" : {
			name : "Wool Robes of Curse Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
			],
			savetxt : "Immune to Cursed condition",
		},
		"frightened" : {
			name : "Wool Robes of Fright Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
			],
			savetxt : "Immune to Frightened condition",
		},	
		"paralyzed" : {
			name : "Wool Robes of Paralysis Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
			],
			savetxt : "Immune to Paralyzed condition",
		},
		"magical sleep" : {
			name : "Wool Robes of Slumber Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
			],
			savetxt : "Immune to Magical Sleep",
		},
		"petrified" : {
			name : "Wool Robes of Petrification Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Resilience. This Property grants the wearer resistance to fire, cold, and lightning damage.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
			],
			savetxt : "Immune to Petrified condition",
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
	},
	"silk robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects",
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
			savetxt : "Immune to Charmed condition",
		},
		"cursed" : {
			name : "Silk Robes of Curse Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
			],
			savetxt : "Immune to Cursed condition",
		},
		"frightened" : {
			name : "Silk Robes of Fright Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
			],
			savetxt : "Immune to Frightened condition",
		},	
		"paralyzed" : {
			name : "Silk Robes of Paralysis Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
			],
			savetxt : "Immune to Paralyzed condition",
		},
		"magical sleep" : {
			name : "Silk Robes of Slumber Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
			],
			savetxt : "Immune to Magical Sleep",
		},
		"petrified" : {
			name : "Silk Robes of Petrification Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Charges. This Property grants the wearer three charges of a 1st level spell that are regained at dawn.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
			],
			savetxt : "Immune to Petrified condition",
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
	},
	"armored robes" : {
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
		savetxt : "Adv. on Saves v.s spells and magical effects, Crits treated as Normal Hit",
		choices : ["charmed", "cursed", "frightened", "paralyzed", "magical sleep", "petrified"],
		choicesNotInMenu : true,
		"charmed" : {
			name : "Armored Robes of Charm Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
			],
			savetxt : "Immune to Charmed condition",
		},
		"cursed" : {
			name : "Armored Robes of Curse Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
			],
			savetxt : "Immune to Cursed condition",
		},
		"frightened" : {
			name : "Armored Robes of Fright Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
			],
			savetxt : "Immune to Frightened condition",
		},	
		"paralyzed" : {
			name : "Armored Robes of Paralysis Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
			],
			savetxt : "Immune to Paralyzed condition",
		},
		"magical sleep" : {
			name : "Armored Robes of Slumber Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
			],
			savetxt : "Immune to Magical Sleep",
		},
		"petrified" : {
			name : "Armored Robes of Petrification Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Defense. This Property grants the wearer a fortified defense. Any critical hit received is treated as a normal hit.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
			],
			savetxt : "Immune to Petrified condition",
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
	},
	"prismatic robes" : {
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
		"charmed" : {
			name : "Prismatic Robes of Charm Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Charmed condition.",
			],
			savetxt : "Immune to Charmed condition",
		},
		"cursed" : {
			name : "Prismatic Robes of Curse Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Cursed condition.",
			],
			savetxt : "Immune to Cursed condition",
		},
		"frightened" : {
			name : "Prismatic Robes of Fright Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Frightened condition.",
			],
			savetxt : "Immune to Frightened condition",
		},	
		"paralyzed" : {
			name : "Prismatic Robes of Paralysis Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Paralyzed condition.",
			],
			savetxt : "Immune to Paralyzed condition",
		},
		"magical sleep" : {
			name : "Prismatic Robes of Slumber Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to magic that would put me to sleep.",
			],
			savetxt : "Immune to Magical Sleep",
		},
		"petrified" : {
			name : "Prismatic Robes of Petrification Immunity",
			description : [
			"Magic Resistance. This property grants the wearer advantage on saving throws against spells and other magical effects.",
			"Potent. This Property grants the wearer a +2 bonus to their spell DC and their spell attack bonus.",
			"Magical Immunity. While I'm wearing these robes and I'm attuned to it, I have immunity to the Petrified condition.",
			],
			savetxt : "Immune to Petrified condition",
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
	},	
	"talisman" : {
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
			description : "While I'm wieldig this talisman and I'm attuned to it, I have resistance to psychic damage.",
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
	},
	"potion of magic" : {
		name : "Potion of Magic",
		source : [["PBMS", 0]],
		type : "potion",
		description : "Once as an action, I can drink this potion or administer it to another to heal a number of spell slots depending on the type of potion. This potion's purple liquid shimmers when agitated.",
		descriptionFull : "You regain spell slots when you drink this potion. The number of spell slots depends on the potion's rarity, as shown in the Potions of Magic table. Whatever its potency, the potion's purpel liquid shimmers when agitated.",
		weight : 0.5,
		allowDuplicates : true,
		choices : ["Magic (2d4+2, uncommon)", "Greater Magic (4d4+4, rare)", "Superior Magic (8d4+8, very rare)", "Supreme Healing (10d4+20, legendary)"],
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
	},
},

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
},

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
},

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
		source : [["PBMS"]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
},

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
		source : [["PBMS"]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
},

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
},

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
},

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
		source : [["PBMS"]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
},

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
		source : [["PBMS"]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
},

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
},

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
		source : [["PBMS"]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
},

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
		source : [["PBMS"]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
},

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
},

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
},

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
},

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
},

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
			description : "\n   " + "When you gain this feature you choose whether your magic is derived from the Feywild or Shadowfell, use the Choose feature button on page 2 to choose your origin.",
			extraname : "Origin of Trickery",
			extrachoices : ["feywild", "shadowfell"],
			"feywild" : {
				name : "Feywild Origin",
				description : desc(["Due to your magic hailing from the Feywild, your spells may appear in vibrant colorful shades that reflect your mood, create pleasant floral and honey aromas, or prehaps a light cantrip appears as a floating pixie."]),
				spellcastingExtra : ["guidance", "faerie fire"],
			},
			"shadowfell" : {
				name : "Shadowfell Origin",
				description : desc(["Due to your magic hailing from the Shadowfll, your spells appear in muted or shadowy tones that evoke a solemn presence, create cold chills and distorted figures, or a mage hand cantrip appears as a ghostly hand."]),
				spellcastingExtra : ["vicious mockery", "dissonant whispers"],
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
				spellcastingExtra : ["cause fear", "hex", "phantasmal force", "darkness", "bestow curse", "fear", "phantasmal killer", "shadow of moil", "danse macabre", "enervation"],
			},
			
			"deception" : {
				name : "Tricks of Deception",
				spellcastingExtra: ["distort value", "silent image", "blur", "mirror image", "hypnotic pattern", "major image", "confusion", "hallucinatory terrain", "mislead", "seeming"],
			},
			
			"jesting" : {
				name : "Tricks of Jesting",
				spellcastingExtra : ["tasha's hideous laughter", "charm person", "enthrall", "suggestion", "fast friends", "incite greed", "compulsion", "charm monster", "dominate person", "mind fog"],
			},
			
			"mischief" : {
				name : "Tricks of Mischief",
				spellcastingExtra : ["grease", "taunt", "nathair's mischief", "pyrotechnics", "stinking cloud", "slow", "shout", "polymorph", "animate objects", "telekinesis"],
			},
			
			"vanishment" : {
				name : "Tricks of Vavnishment",
				spellcastingExtra : ["erase", "unseen servant", "invisibility", "wristpocket", "blink", "nondetection", "banishment", "greater invisibility", "far step", "temporal shunt"],
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
			description : desc(["At 5th level, you gain the magical ability to craft a mask out of fey or shadow magic. As a bonus action on your turn you can don a mask that magically appears on your face and gain the following benefits. While wearing the mask you gain a +1 to your AC concealing your identity. In addition, as an action while wearing the mask you can cast the disguise self spell without consuming a spell slot. This mask can only be donned and removed by you. When you gain this feature you can choose one type of mask that you can conjure. When you reach 10th level you gain an additional mask option, and again at 15th level. You can only wear one type of mask at a time."]),
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
					"• When you use your reckless abandon feature you score a critical hit on a 18 or higher.",
					"• You are immune to the frightened condition.",
					"• You have resistance to any damage received from attacks that hit with advantage.",
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
			name : "Unicycle",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc(["At 14th level, you acquire a magical unicycle that can be pulled from your jack in box without fail. As an action you can mount this unicycle and gain 30ft to your base movement speed. In addition, while mounted you have advanatge on all dexterity saving throws, and can take the dodge, dash, and disengage action as a bonus action."]),
			action : "bonus action"
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

CreatureList["elemental mote"] = {
	name : "Elemental Mote",
	source : [["PBMS", 0]],
	size : 5,
	type : "Elemental",
	alignment : "Unaligned",
	ac : 16,
	hp : 20,
	hd : [6, 4],
	speed : "0 ft, Fly(Hover) 50 ft",
	scores : [1, 22, 14, 12, 10, 7],
	saves : ["", 8, 4, "", "", ""],
	skills : {
		"stealth" : 8
	},
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Primordial",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	damage_immunities : "poison",
	condition_immunities : "exhausted, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	attacks : [{
		name : "",
		ability : 3,
		damage : [],
		range : "",
		description : "",
	}],	
	traits : [{
		name : "Elemental Demise",
		description : "When the mote is dropped to zero hit points its body bursts releasing elemental energy dealing 1d12 + 1 elemental damage in a 10 ft radius. Earth(Physical), Air(Lightning), Fire(Fire), Water(Wave)"
	}, {
		name : "Elemental Immunity",
		description : "The mote is immune to the damage of its affinity, Earth(Physical), Air(Lightning), Fire(Fire), Water(Wave)"	
	}, {
		name : "Elemental Nature",
		description : "The mote does not require air, food, drink, or sleep."
	}],	
};

CreatureList["mount mote"] = {
	name : "Mount Mote",
	source : [["PBMS", 0]],
	size : [2,3,4],
	type : "Elemental",
	alignment : "Unaligned",
	ac : 16,
	hp : 20,
	hd : [6, 4],
	speed : "40 ft, Fly 40 ft (Air/Fire), Climb 40 ft (Earth), Swim 40 ft (Water)",
	scores : [1, 22, 14, 12, 10, 7],
	saves : ["", 8, 4, "", "", ""],
	skills : {
		"stealth" : 8
	},
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Primordial",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	damage_immunities : "poison",
	condition_immunities : "exhausted, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	attacks : [{
		name : "",
		ability : 3,
		damage : [],
		range : "",
		description : "",
	}],	
	traits : [{
		name : "Elemental Demise",
		description : "When the mote is dropped to zero hit points its body bursts releasing elemental energy dealing 1d12 + 1 elemental damage in a 10 ft radius. Earth(Physical), Air(Lightning), Fire(Fire), Water(Wave)"
	}, {
		name : "Elemental Immunity",
		description : "The mote is immune to the damage of its affinity, Earth(Physical), Air(Lightning), Fire(Fire), Water(Wave)"	
	}, {
		name : "Elemental Nature",
		description : "The mote does not require air, food, drink, or sleep."
	}],	
};

CreatureList["guardian mote"] = {
	name : "Guardian Mote",
	source : [["PBMS", 0]],
	size : 5,
	type : "Elemental",
	alignment : "Unaligned",
	ac : 20,
	hp : 100,
	hd : [30, 4],
	speed : "0 ft, Fly(Hover) 50 ft",
	scores : [1, 22, 14, 12, 10, 7],
	saves : ["", 8, 4, "", "", ""],
	skills : {
		"stealth" : 8
	},
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Primordial",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	damage_immunities : "poison",
	condition_immunities : "exhausted, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	attacks : [{
		name : "",
		ability : 3,
		damage : [],
		range : "",
		description : "",
	}],	
	actions : [{
		name : "Protector",
		description : "As a reaction, when you are targeted by a spell, attack, or trap; your elemental can use its body to prevent the damage or effect, That damage or effect is instead inflicted upon the mote keeping you safe from any and all effects from the incident."
	}],	
	traits : [{
		name : "Elemental Demise",
		description : "When the mote is dropped to zero hit points its body bursts releasing elemental energy dealing 1d12 + 1 elemental damage in a 10 ft radius. Earth(Physical), Air(Lightning), Fire(Fire), Water(Wave)"
	}, {
		name : "Elemental Immunity",
		description : "The mote is immune to the damage of its affinity, Earth(Physical), Air(Lightning), Fire(Fire), Water(Wave)"	
	}, {
		name : "Elemental Nature",
		description : "The mote does not require air, food, drink, or sleep."
	}],	
};
	
ClassList.elementalist = {
	
	regExpSearch : /elementalist/i,
	name : "Elementalist",
	source : [["PBMS", 0]],
	primaryAbility : ["Constitution"],
	abilitySave : 3,
	prereqs : "Constitution 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 10,
	saves : ["Con", "Cha"],
	skillstxt : {
		primary : "Choose two from Acrobatics, Athletics, Insight, Nature, Perception, Survival.",
	},
	armorProfs : {
		primary : [true, true, false, false],
	},
	weaponProfs : {
		primary : [true, false],
	},
	equipment : "Elementalist starting equipment:" +
		"\n \u2022 leather armor;\n \u2022 A dagger;" +
		"\n \u2022 A simple weapon -or- an apprentice mage weapon;" +
		"\n \u2022 A dungeoneer's pack -or- An explorer's pack." +
		"\n\nAlternatively, choose 3d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Affinity", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [],
		spells : "list",
		prepared : true,
	},
	
	spellcastingList : { 

		"class" : [], 

		level : [0, 9]
	},
	
	features : {
		"subclassfeature1" : {
			name : "Elemental Affinity",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"The affinity you possess with one of the four natural elements cannot be changed once chosen and represents the commanding power you possess. This affinity is tethered to your soul and existed since your birth. There are four elemental affinities; Affinity of Earth, Affinity of Air, Affinity of Fire, & Affinity of Water. Each of which it detailed at the end of the class description. Your choice grants you features at 1st level, and again at 6th, 10th, and 14th level.",
			]),
		},
		
		"elemental powers" : {
			name : "Elemental Powers",
			source : [["PBMS", 0]],
			minlevel : 2,
			description : desc([
				"Your connection and command over a natural element has gifted you elemental powers. Your power to command the elements comes from the close primal relationship that is built between you and the elementals. When you speak they listen and awaken to carry out your will on your behalf. You gain two elemental powers of your choice. These powers require a presence of elemental energy be it natural or magical within 30 feet of you in order to enact. Once you have awakened the elemental energy using this power regardless of source the resulting effect is no longer considered magical. Your elemental powers are not affected by antimagic fields, counter spells, dispel magic, or meddle magic. Your power options are detailed at the end of the class description.", 
				"When you gain elementalist levels, you gain additional powers of your choice. See elementalist table to see how many elemental powers you know in the known column. Additionally when you gain a level in this class you can choose one of the elemental powers and replace it with another that you could learn at the appropriate level.",
			]),
			extraname : "Elemental Powers",
			extrachoices : ["Elemental Armor", "Elemental Assault", "Elemental Bane", "Elemental Bind", "Elemental Blast", "Elemental Bless", "Elemental Bolt", "Elemental Breath", "Elemental Chain", "Elemental Conjure", "Elemental Curse", "Elemental Enchantment", "Elemental Cone", "Elemental Eye", "Elemental Form", "Elemental Guardian", "Elemental Guise", "Elemental Illusion", "Elemental Mount", "Elemental Prison", "Elemental Portal", "Elemental Ray", "Elemental Sphere", "Elemental Sprites", "Elemental Stride", "Elemental Strike", "Elemental Vigor", "Elemental Wall", "Elemental Wave"],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 3 ? 2 : n < 6 ? 3 : n < 9 ? 4 : n < 12 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8;
			}),
			"elemental armor" : {
				name : "Elemental Armor",
				description : desc([
					"As a bonus action, your body is wrapped in elemental power of your affinity created by your token. You bonus to AC is a +3 instead of a +1 for the next hour.",
				]),
				action : "bonus action",
				prereqeval : function(v) { return classes.known.elementalist.level >= 3 && GetFeatureChoice('class', 'elementalist', 'elemental privilage') == 'primeval token'; },
			},
			"elemental assault" : {
				name : "Elemental Assault",
				description : desc([
					"You gain a multi-attack with your forged elemental weapon. You can attack twice, instead of once, whenever you take the attack action on your turn. In addition, your weapon damage can manifest as either of your damage types associated with your affinity. You must state the damage type before you make an attack. Your forged elemental weapon now counts as an elemental power for other rulings.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 5 && GetFeatureChoice('class', 'elementalist', 'elemental privilage') == 'forged elemental'; },
				action : "action",
			},
			"elemental bane" : {
				name : "Elemental Bane",
				description : desc([
					"As an action, you can choose up to three creatures of your choice that you can see within range of 30 feet. Those creatures must make a Constitution saving throw. On a failed save, the creature has disadvantage on saving throws against your elemental powers and spells for 1 hour. ",
				]),
				action : "action",
			},
			"elemental bind" : {
				name : "Elemental Bind",
				description : desc([
					"As an action, you can choose one creature you can see within 300ft. Elemental energy of your affinity springs from a source within 30ft of that creature and loops around them. That target must make a Strength saving throw, on a failed save the target’s speed is reduced to 0 feet for 1 minute.",
				]),
				action : "action",
				prereqeval : function(v) { return classes.known.elementalist.level >= 3; },
			},
			"elemental blast" : {
				name : "Elemental Blast",
				description : desc([
					"As an action, an elemental mote flashes from your pointing finger to a point you choose within 150ft that then blossoms into an explosion. Each creature in a 20ft radius sphere centered on that point must make a Dexterity save throw. A target takes 8d6 damage on a failed save and half as much on a successful one. ",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 5; },
				action : "action",
			},
			"elemental bless" : {
				name : "Elemental Bless",
				description : desc([
					"As an action, you imbue up to three creatures of your choice that you can see within range of 30 feet. Those creature have advantage on saving throws against your elemental powers and spells for 1 hour.",
				]),
				action : "action",
			},
			"elemental bolt" : {
				name : "Elemental Bolt",
				description : desc([
					"As an action, you hurl a mote of your element at a single within range of 120 feet. Make a ranged spell attack against the target. On a hit, the target takes 3d6 damage.",
				]),
				action : "action",
			},
			"elemental breath" : {
				name : "Elemental Breath",
				description : desc([
					"As an action, you exhale energy of your affinity in a 15-foot cone. Each creature in that area must make a Dexterity save throw taking 3d6 damage on a failed save, and half as much on a successful one.",
				]),
				action : "action",
			},
			"elemental conjure" : {
				name : "Elemental Conjure",
				description : desc([
					"As an action, you can cast the Conjure Elemental spell, however, concentration is not needed for this effect and the elemental does not become hostile towards you because of a lack of concentration. The elemental remains under your control for one hour, after which it returns to the elemental plane. You cannot have more than one elemental conjured by this feature. ",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 9; },
				action : "action",
			},
			"elemental chain" : {
				name : "Elemental Chain",
				description : desc([
					"As an action, you create a bolt of elemental power that arcs toward a creature of your choice within 150 feet. Three bolts then leap from that target to as many as three other targets, each of which must be within",
					"30 feet of the first target. The target can be a creature or an object, and can be targeted only by one of the bolts. A target must make a Dexterity saving throw taking 10d8 damage on a failed save, or half as much on a successful one.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 11; },
				action : "action",
			},
			"elemental curse" : {
				name : "Elemental Curse",
				description : desc([
					"As an action, you can choose up to three creatures of your choice that you can see within range of 30 feet. Those creatures must make a Constitution saving throw. On a failed save, those creatures become vulnerable to the damage of your elemental powers and spells for 1 hour. If the creature is immune to your damage they are dropped to resistant, if the creature is resistant then they are dropped to neutral, and lastly neutral damage becomes vulnerable.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 5 && GetFeatureChoice('class', 'elementalist', 'elemental power') == 'elemental bane'; },
				action : "action",
			},
			"elemental enchantment" : {
				name : "Elemental Enchantment",
				description : desc([
					"As an action, you imbue up to three creatures of your choice that you can see within range of 30 feet. Those creature gain resistance to your elemental affinity for 1 hour. If the creature is already resistant they become immune, and if the creature is vulnerable the damage becomes neutral.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 5 && GetFeatureChoice('class', 'elementalist', 'elemental power') == 'elemental bless'; },
				action : "action",
			},
			"elemental eye" : {
				name : "Elemental Eye",
				description : desc([
					"As a bonus action, you can sense the presence of your elemental affinity within 60 feet. When you sense elemental presence in this way, you know the exact location of your elemental affinity within range.",
				]),
				action : "bonus action",
			},
			"elemental cone" : {
				name : "Elemental Cone",
				description : desc([
					"As an action, you can create a blast of elemental energy erupts from your hands. Each creature in a 60-foot cone must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, and half as much damage on a successful one. ",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 9; },
				action : "action",
			},
			"elemental form" : {
				name : "Elemental Form",
				description : desc([
					"As an action, you can transform into an elemental of your affinity for 1 hour or until you transform back as a bonus action on your turn. You assume the hit points of the elemental you transform into. When you revert back to your true form you return to the hit points you had before you transformed. If you transform back as a result of dropping to 0 hit points any excess damage is carried over to your normal form. In this form you retain your intelligence, wisdom, charisma abilities scores, and languages. Otherwise all other stats, features, actions, and abilities are replaced by the new form, except for your elemental powers.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 8; },
				action : "action",
			},
			"elemental guardian" : {
				name : "Elemental Guardian",
				description : desc([
					"As a bonus action, you can transform your mote companion into a guardian for 1 hour. The mote's AC increases to 20 and it’s hit point maximum increases to 100. Your mote companion gains a new feature while in this form. Protector: As a reaction, when you are targeted by a spell, attack, or trap; your elemental can use its body to prevent the damage or effect, That damage or effect is instead inflicted upon the mote keeping you safe from any and all effects from the incident.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 3 && GetFeatureChoice('class', 'elementalist', 'privilage') == 'mote companion'; },
				action : "bonus action",
			},
			"elemental guise" : {
				name : "Elemental Guise",
				description : desc([
					"As an action, you can cast the disguise self spell. When you do so the new appearance has glints with minors impressions of your affinity. For example your skin may glisten or shimmer with moisture, or you may be surrounded by a light breeze.",
				]),
				action : "action",
			},
			"elemental illusion" : {
				name : "Elemental Illusion",
				description : desc([
					"As an action, you create a sound or an image of elemental energy within range that lasts for 1 minute. The illusion also ends if you dismiss it as a bonus action or use this feature again. If you create a sound, its volume can range from a whisper to a roar. It can be any sound that is natural to your element; booming thunder, crackling fire, falling rain, crumbling rock. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the effect ends. If you create an image of an elemental object—such as a rock, flame, or a pool of water; it must be no larger than a 5-foot cube. The image cannot create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
				]),
				action : "action",
			},
			"elemental mount" : {
				name : "Elemental Mount",
				description : desc([
					"As a bonus action,you can transform your mote into animal mount that you can ride of your choosing for up to 8 hours. This mount gains a movement speed of 40ft associated with your affinity. Earth: Walking & Burrow Movement. Air: Walking & Flying Movement. Fire: Walking & Flying Movement. Water: Walking & Swimming Movement. ",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 5 && GetFeatureChoice('class', 'elementalist', 'privilage') == 'mote companion'; },
				action : "bonus action",
			},
			"elemental prison" : {
				name : "Elemental Prison",
				description : desc([
					"As an action, an immobile elemental cube shaped prison springs into existence around an area you choose within 100 feet. This prison can be a cage or a solid box as choose that lasts for 1 hour. A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a solid box can be up to 10 feet on a side, creating a solid barrier that prevents any creature from physically passing through. When you create this effect, any creature that is completely inside the cage area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area. A creature inside the cage cannot leave it by non-magical means. If the creature tries to use teleportation or inter-planar travel to leave the cage they succeed. This effect cannot be dispelled by Dispel Magic or like magic.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 7; },
				action : "action",
			},
			"elemental portal" : {
				name : "Elemental Portal",
				description : desc([
					"As an action, you can teleport between the material plane and the elemental plane of your affinity.",
					]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 12; },
				action : "action",
			},
			"elemental ray" : {
				name : "Elemental Ray",
				description : desc([
					"As an action, you can create three rays of elemental energy and hurl them at targets within 120 feet. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit the target takes 2d6 damage.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 4; },
				action : "action",
			},
			"elemental sphere" : {
				name : "Elemental Sphere",
				description : desc([
					"As an action, you point at a location with 150 feet, and an elemental ball of energy flashes there and explodes in a 20-foot radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, the creature takes 10d4 damage and another 5d4 at the end of their next turn. On a successful save, a creature takes half the initial damage, and no damage at the end of their next turn",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 7; },
				action : "action",
			},
			"elemental sprites" : {
				name : "Elemental Sprites",
				description : desc([
					"As an action, you can summon eight tiny elemental sprites that leap from an elemental source and land in an unoccupied space within 30 feet. A summoned sprite disappears when it drops to 0 hit points, dismissed as a bonus action on your turn, or the effect ends after 1 hour. The summoned sprites are friendly to you and your companions. Roll initiative for them as a group, which they have their own turn as a group. They obey every verbal command you give them. (No action required by you) If you do not issue a command they defend themselves from hostile creatures, but otherwise take no actions. These sprites have the stat block of a sprite on pg. 283 of the monster manual except all damage they deal is the same as the source in which they were conjured. The damage they deal for any attack is 1d6 elemental damage.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 8; },
				action : "action",
			},
			"elemental stride" : {
				name : "Elemental Stride",
				description : desc([
					"As a bonus action on your turn you can use this power to surf on your elemental affinity up to your movement speed in addition to your standard movement. If you take the dash action you can move twice your movement speed in addition to your dash action. In order to use this power you must begin your turn within 5 feet of your elemental affinity.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 6; },
				action : "bonus action",
			},
			"elemental strike" : {
				name : "Elemental Strike",
				description : desc([
					"As a bonus action, you can empower your forged weapon changing additional damage dice to a d6 instead of a d4. Your forged elemental weapon counts as an elemental power for other rulings.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 3 && GetFeatureChoice('class', 'elementalist', 'elemental privilage') == 'forged elemental'; },
				action : "bonus action",
			},
			"elemental vigor" : {
				name : "Elemental Vigor",
				description : desc([
					"As a bonus action, you can use your token bolstering yourself with your elemental affinity granting you a boost of vitality. In doing so you gain temporary hit points equal to your elementalist level.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 5 && GetFeatureChoice('class', 'elementalist', 'elemental privilage') == 'primeval token'; },
				action : "bonus action",
			},
			"elemental wall" : {
				name : "Elemental Wall",
				description : desc([
					"As an action, you can create a wall of elemental energy within 120 feet. You can form it into a hemispherical dome or sphere up to a 10-foot radius. You can shape a flat surface up to ten 10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1-foot thick and lasts for 10 minutes. No concentration required. If the wall cuts through a creatures space when it appears, the creature is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save the creature takes 10d6 damage, or half as much on a successful save. Any creature that makes an attempt to pass through the wall must make a Constitution saving throw. On a failed save the target takes 5d6 damage, or half as much on a successful one.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 11; },
				action : "action",
			},
			"elemental wave" : {
				name : "Elemental Wave",
				description : desc([
					"As an action, you strike the ground, creating a burst of elemental energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Dexterity saving throw. On a failed save the creature takes 5d6 damage, as well as 5d6 damage of your secondary type, and be knocked prone. A creature that succeeds takes half as much damage and is not knocked prone.",
				]),
				prereqeval : function(v) { return classes.known.elementalist.level >= 9; },
				action : "action",
			},	
		},
		"elemental privilage" : {
			name : "Elemental Privilage",
			source : [["PBMS", 0]],
			minlevel : 3,
			description : desc([
				"Your growing affinity has granted you a gift from the elemental plane for your commitment and reverence for the elements. You gain one of the following features of your choice.",
			]),
			choices : ["Forged Elemental", "Mote Companion", "Primeval Token"],
			"forged elemental" : {
				name : "Forged Elemental",
				description : desc([
					"You receive a weapon forged from an elemental of your affinity. This elemental takes the form of one weapon of your choice upon selecting this feature. This weapon deals the same dice of damage as the weapon it emulates. This weapon uses Constitution instead of Strength or Dexterity for attack and damage rolls. This weapon is magical and has a +1 to attack rolls. This weapon also deals an additional 1d4 damage of your affinity. This increases to +2 to attack rolls and 2d4 elemental damage at 7th level, +3 to attack rolls and 3d4 elemental damage at 11th level, and +4 to attack rolls and 4d4 elemental damage at 15th level. This weapon cannot be lost, stolen, or disarmed. As a bonus action on your turn you cansummon this weapon to your hand regardless of plane or distance. You cannot use your weapon as a source for your elemental powers.",
				]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.theWea.isMagicWeapon && (/^(?=.*Forged).*$/i).test(v.WeaponTextName)) {
							v.theWea.isMagicWeapon = true;
							fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
							fields.Description += (fields.Description ? '; ' : '') + '+1d4 affinity damage, +1 additional at 7th, 11th, 15th level.';
						}
					},
					'If I include the word "Forged" in a the name of a weapon, it will be treated as my Forged Elemental. It has +1 to hit and damage and does +1d4 affinity damage, which increases by 1 at 7th, 11th, and 15th level.'
				],
				atkCalc : [
					function (fields, v, output) {
						if ((/^(?=.*Forged).*$/i).test(v.WeaponTextName)) {
							output.magic = v.thisWeapon[1] + 1;
						}
					}, ''
				]
			},
			},
			"mote companion" : {
				name : "Mote Companion",
				description : desc([
					"You gain the service of an elemental mote of your affinity. This mote is friendly to you and your companions, and it obeys your commands. See this creature's stat block. In combat, the mote shares your initiative and you can mentally command it on your turn. (no action required) A mote cannot attack, but it can take other actions as normal. When the mote drops to 0 hit points, it disappears leaving behind a puff of elemental energy. It returns to the elemental plane of origin until you recall it back during a long rest. While your mote is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action you can see through the motes eyes and hear what it hears until the start of your next turn, gaining the benefit from any special senses that the mote has. During this time you are deaf and blind with regard to your own senses. As a bonus action you can temporarily dismiss your mote. It disappears into the elemental plane where it awaits your summons. As a bonus action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space with 30 feet of you. Finally, when you cast a spell you can choose to have the point of origin and range originate from the mote instead of yourself. Your mote must be within 100 feet of you in order to use this feature. See stat table for additional details. You cannot use your mote as a source for your elemental powers. The mote shares the same proficiency bonus as you.",
				]),
			},
			"primeval token" : {
				name : "Primeval Token",
				description : desc([
					"You receive a token created from an elemental of your affinity. This token is bound to you and cannot be lost, stolen, or disarmed. This token grants you protection with elemental energy giving your a +1 to AC, in addition you gain resistance to the element of your affinity. You are now immune to poison damage. You are also immune to exhaustion, petrified, and poisoned condition effects.",
				]),
				extraAC : {
					name : "Primeval Token",
					mod : 1,
					text : "I gain a +1 bonus to AC when I have the Primeval Token Elemental Privilage",
				},	
				savetxt : { immune : ["poison", "exhausted", "petrified"] }
			},
		},
		"elemental inversion" : {
			name : "Elemental Inversion",
			source : [["PBMS", 0]],
			minlevel : 5,
			description : desc([
				"You can transform your elemental presence into a different representation when enacting an elemental power. Those of the Affinity of Earth can shape the stone into a different physical forms to inflict physical or force damage. Those of the Affinity of Air can change wind into different tempestuous forms to inflict lightning or thunder damage. Those of the Affinity of Fire can change light into fire to inflict fire or radiant damage. Those of the Affinity of Water can change water into ice to inflict wave or radiant damage.",
			]),
		},
		"enigmatic power" : {
			name : "Enigmatic Power",
			source : [["PBMS", 0]],
			minlevel : 11,
			description : desc([
				"Your elemental affinity has become incredibly strong that you have discovered ancient primordial words to manifest powerful elemental magic. You gain one 6th level spell of your affinity as this enigmatic power. You can command this power without consuming a spell slot or needing components. You can use this feature once before a long rest, otherwise you require elemental presence and can use this spell as an elemental power for additional uses. At higher levels, you gain more enigmatic powers of your choice that can be used in this way; One 7th level spell at 13th level, one 8th level spell at 15th level, and one 9th level spell at 17th level. You regain all uses of this power when you finish a long rest.",
			]),
		},
		"elemental monarch" : {
			name : "Elemental Monarch",
			source : [["PBMS", 0]],
			minlevel : 20,
			description : desc([
				"You can call out to elder elementals to grace you with their elemental energy to regain all expended spell slots, and enigmatic power. Once regained an aura of elemental power surrounds you for the next hour. During this time you can use you elemental powers freely without concern of its nearby presence. You must finish a long rest before you can use this feature again. In addition your range for elemental presence increases to 60 feet instead of 30ft for using your elemental powers when you reach this level.",
			]),
		},	
	},
};	

AddSubClass("elementalist", "air", {
	regExpSearch : /^(?=.*(affinity|elementalist))(?=.*air).*$/i,
	subname : "Elemental Affinity of Air",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature1" : {
			name : "Air Affinity",
			source : [["PBMS", 0]],
			minlevel : 1,
			languageProfs : ["Auran"],
			scores : [0,2,0,0,0,0],
			saves : "Dex",
			skills : ["perception"],
			spellcastingExtra : ["gust", "shocking grasp", "thunderwave", "zephyr strike", "gust of wind", "levitate", "lightning bolt", "call lightning", "storm sphere", "control winds", "investiture of wind", "whirlwind", "control weather", "meteor swarm"],
			description : desc([
				"The affinity of air exists within the power of your breathe, and your connection to the sky allowing you to command the breezes, clouds, and storms. Choosing this affinity allows you to influence the skies above your head. These elementalists produce damaging effects that inflict lightning and thunder damage. Choosing this affinity grants you proficiency in the Dexterity saving throw, and you gain a +2 to that ability score. In addition, you gain proficiency in the perception skill.",
			]),
			prereqeval : function(v) { return v.hasMeteorSwarm; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "meteor swarm") {
									spellObj.description = spellObj.description.replace("4\xD7 40-ft rad all 20d6 Bludgeoning dmg and 20d6 Fire dmg; save halves; areas do not stack", "4\xD7 40-ft rad all 20d6 Thunder dmg and 20d6 Lightning dmg; save halves; areas do not stack");
									return true;
								}
							},
							"the meteor swarm spell deals thunder and lightning damage instead of bludgeoning and fire damage.",
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Updraft",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You gain the ability to cast the levitate spell as a bonus action on your turn without expending a spell slots or components with this feature.",
			]),	
		},
		"subclassfeature6" : {
			name : "Wind Travel",
			source : [["PBMS", 0]],
			minlevel : 6,
			speed : { fly : { spd : "walk", enc : "walk" } },
			description : desc([
				"You are now one with the winds that guide your foot steps. You gain a flying speed equal to your walking speed.",
			]),
		},
		"subclassfeature10" : {
			name : "Master of the Breath and Ear",
			source : [["PBMS", 0]],
			minlevel : 10,
			dmgres : [["Lightning"], ["Thunder"]],
			savetxt : { immune : ["deafened"] },
			vision : [["Keen Hearing, you have advantage on all perception ability checks that rely on hearing."], ["Unending Breath: I can hold my breath indefinitely while I am not incapacitated."]],
			description : desc([
				"You now have resistance to thunder and lightning damage. You are also immune to being deafened and can hold your breathe indefinitely. Lastly, you gain the Keen Hearing feature, which grants you advantage on all perception ability checks that rely on hearing.",
			]),
		},
		"subclassfeature14" : {
			name : "Tailwind",
			source : [["PBMS", 0]],
			minlevel : 14,
			speed : { walk : "+20" },
			description : desc([
				"Your ability to act becomes as swift as the winds that follow you. Your movement speed increases by 20 feet. When you make a weapon attack you gain two extra attacks enabling you to make three weapon attacks. In addition, you can take the dash or dodge action as a bonus action.",
			])
		},
		"subclassfeature14.1" : {
			name : "Dash/Dodge",
			source : [["PBMS", 0]],
			minlevel : 14,
			action : "bonus action",
			description : "",
		},
		"subclassfeature14.2" : {
			name : "Attack (3 Times)",
			source : [["PBMS", 0]],
			minlevel : 14,
			action : "action",
			description : "",
		},	
	},
});	

AddSubClass("elementalist", "earth", {
	regExpSearch : /^(?=.*(affinity|elementalist))(?=.*earth).*$/i,
	subname : "Elemental Affinity of Earth",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature1" : {
			name : "Earth Affinity",
			source : [["PBMS", 0]],
			minlevel : 1,
			languageProfs : ["Terran"],
			scores : [2,0,0,0,0,0],
			saves : "Str",
			vision : [["Tremor Sense", 60]],
			spellcastingExtra : ["mold earth", "magic stone", "catapult", "earth tremor", "maximillian's earthen grasp", "erupting earth", "meld into stone", "stone shape", "animate objects", "investiture of stone", "bones of the earth", "earthquake", "pass without trace", "meteor swarm"],
			description : desc([
				"The affinity of earth tethers you to the base materials of the earth like stone, soil, sand, clay, metal, and gemstones. Choosing this affinity allows you to influence the very land beneath your feet. These elementalists produce damaging effects that inflict physical environmental damage like bludgeoning, piercing, and slashing. Choosing this affinity you gain proficiency in the Strength saving throw and gain +2 to that ability score. In addition, you also gain tremor sense of 60 feet.",
			]),
			prereqeval : function(v) { return v.hasMeteorSwarm; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "meteor swarm") {
									spellObj.description = spellObj.description.replace("4\xD7 40-ft rad all 20d6 Bludgeoning dmg and 20d6 Fire dmg; save halves; areas do not stack", "4\xD7 40-ft rad all 20d6 Bludgeoning dmg and 20d6 Piercing dmg; save halves; areas do not stack");
									return true;
								}
							},
							"the meteor swarm spell deals bludgeoning and piercing damage instead of bludgeoning and fire damage.",
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Land Stride",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"You can move across difficult terrain created by earth, sand, and stone without expending extra movement. You can also cast the spell pass without a trace once before a long rest. ",
			]),	
		},
		"subclassfeature6" : {
			name : "Earthen Travel",
			source : [["PBMS", 0]],
			minlevel : 6,
			speed : { burrow : { spd : "walk", enc : "walk" } },
			description : desc([
				"You gain a burrow speed equal to your movement speed. You can move through earth, mud, sand, and stone.",
			]),
		},
		"subclassfeature10" : {
			name : "Stone Resilience",
			source : [["PBMS", 0]],
			minlevel : 10,
			dmgres : [["Bludgeoning"], ["Piercing"], ["Slashing"]],
			description : desc([
				"Your flesh hardens like stone gaining and you gain resistance to non-magical bludgeoning, piercing, and slashing.",
			]),
		},
		"subclassfeature14" : {
			name : "Autonomous Form",
			source : [["PBMS", 0]],
			minlevel : 14,
			savetxt : { immune : ["Petrified"] },
			description : desc([
				"You gain the ability to have complete autonomy over your physical form. When you gain this feature you are immune to any effect that would alter your form unless you allow it, which includes petrification. In addition, as a reaction when you are targeted by an attack you can temporarily transform your stone like skin into metal gaining a +2 to AC and resistance to all damage until the start of your next turn. You can use this feature a number of times equal to your constitution modifier.",
			])
		},
		"subclassfeature14.1" : {
			name : "Metal Skin",
			source : [["PBMS", 0]],
			minlevel : 14,
			action : "reaction",
			usages : "Constitution modifyer per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest",
			description : "",
		},	
	},
});	

AddSubClass("elementalist", "fire", {
	regExpSearch : /^(?=.*(affinity|elementalist))(?=.*fire).*$/i,
	subname : "Elemental Affinity of Fire",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature1" : {
			name : "Fire Affinity",
			source : [["PBMS", 0]],
			minlevel : 1,
			languageProfs : ["Ignan"],
			scores : [0,0,0,2,0,0],
			saves : "Int",
			vision : [["Darkvision, (magcial darkness does not impede)", 60]],
			spellcastingExtra : ["control flames", "fire bolt", "burning hands", "faerie fire", "scorching ray", "fireball", "daylight", "fire shield", "immolation", "investiture of flame", "fire storm", "sunburst", "meteor swarm"],
			description : desc([
				"The affinity of fire resides within the emanating heat produced by your body, which connects you to the heat produced by fire, light, and energy itself. Choosing this affinity allows you to command any source of heat transforming it from a mote to an immolation. These elementalists produce damaging effects that inflict fire and radiant damage. Choosing this affinity you gain proficiency in the Intelligence saving throw and gain +2 to that ability score. In addition, you gain dark vision of 60 feet, and magical darkness does not impede this vision.",
			]),
		},
		"subclassfeature1.1" : {
			name : "Blazing Aura",
			source : [["PBMS", 0]],
			minlevel : 1,
			description : desc([
				"Your body temperature increases giving you a heated body. Any creature that touches you or makes a melee attack while within 5 feet of you takes 2d6 fire damage. In addition, any metal melee weapons you wield deal an extra 1d6 fire damage when your attack with it hits.",
			]),	
		},
		"subclassfeature6" : {
			name : "Smouldering Shroud",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"You can choose to emit smoke until the start of your next turn after you use one of your elemental spells or powers. During this time all attack rolls against you have disadvantage.",
			]),
		},
		"subclassfeature10" : {
			name : "Solar Power",
			source : [["PBMS", 0]],
			minlevel : 10,
			dmgres : [["Fire"], ["Radiant"]],
			description : desc([
				"Your body becomes empowered by the sun. When you are in direct sunlight you have advantage on attack and damage rolls made with your spells and elemental powers. In addition, you now have resistance to fire and radiant damage.",
			]),
		},
		"subclassfeature14" : {
			name : "Phoenix Fire",
			source : [["PBMS", 0]],
			minlevel : 14,
			description : desc([
				"The fire elementals you command become a force of rejuvenation. When you use one of your spells or elemental powers you regain hit points equal to your elementalist level plus your Constitution modifier.",
			])
		},	
	},
});	

AddSubClass("elementalist", "water", {
	regExpSearch : /^(?=.*(affinity|elementalist))(?=.*water).*$/i,
	subname : "Elemental Affinity of Water",
	source : [["PBMS", 0]],
	features : {
		"subclassfeature1" : {
			name : "Water Affinity",
			source : [["PBMS", 0]],
			minlevel : 1,
			languageProfs : ["Aquan"],
			scores : [0,0,0,0,2,0],
			saves : "Wis",
			vision : [["Darkvision", 120]],
			spellcastingExtra : ["ray of frost", "shape water", "create or destroy water", "ice knife", "rime's binding ice", "plant growth", "sleet storm", "tidal wave", "watery sphere", "cone of cold", "investiture of ice", "wal of ice", "tsunami", "meteor swarm"],
			description : desc([
				"The affinity of water flows through you like a river and connects you to all forms of water like; ice, lakes, oceans, mist, rain, and rivers. Choosing this affinity allows you to command the waters throughout the world. These elementalists produce damaging effects that inflict wave and cold damage. Choosing this affinity you gain proficiency in the Wisdom saving throw and gain +2 to that ability score. In addition, you gain dark vision of 120 feet.",
			]),
			prereqeval : function(v) { return v.hasMeteorSwarm; },
					calcChanges : {
						spellAdd : [
							function (spellKey, spellObj, spName) {
								if (spellKey == "meteor swarm") {
									spellObj.description = spellObj.description.replace("4\xD7 40-ft rad all 20d6 Bludgeoning dmg and 20d6 Fire dmg; save halves; areas do not stack", "4\xD7 40-ft rad all 20d6 Bludgeoning dmg and 20d6 Cold dmg; save halves; areas do not stack");
									return true;
								}
							},
							"the meteor swarm spell deals bludgeoning and cold damage instead of bludgeoning and fire damage.",
						]
					}
		},
		"subclassfeature1.1" : {
			name : "Aquatics",
			source : [["PBMS", 0]],
			minlevel : 1,
			speed : { swim : { spd : 60, enc : 50 } },
			description : desc([
				"You are now amphibious and can breathe air and water. You also have a swim speed of 60 ft. ",
			]),	
		},
		"subclassfeature6" : {
			name : "Soothing Water",
			source : [["PBMS", 0]],
			minlevel : 6,
			description : desc([
				"You can awaken the magical healing properties of water. When you use the shape water cantrip you can use it to cast the cure wounds spell without components or expending a spell slot. You can up-cast this feature using a spell slot of 1st level or higher. The dice of this effect increases by 1d8 for each level above cantrip.",
			]),
		},
		"subclassfeature10" : {
			name : "Waters of Life",
			source : [["PBMS", 0]],
			minlevel : 10,
			dmgres : [["Cold"], ["Wave"]],
			description : desc([
				"You can pull water from damp caverns, humid jungles, and non-magical plants in order to fuel your elemental powers. Once before a long rest you can cast the Plant Growth spell with this feature. You now have resistance to to wave and cold damage.",
			]),
		},
		"subclassfeature10.1" : {
			name : "Plant Growth",
			source : [["PBMS", 0]],
			minlevel : 10,
			action : "action",
			usages : 1,
			recovery : "long rest",
			description : "",
		},	
		"subclassfeature14" : {
			name : "Never-Melting Armor",
			source : [["PBMS", 0]],
			minlevel : 14,
			dmgres : [["F2ire"]],
			extraAC : {
					name : "Never-Melting Armor",
					mod : 3,
					text : "I gain a +3 bonus to AC due to my Never-Melting Armor",
			},		
			description : desc([
				"You can store water around your body from nearby elemental presence to form never-melting armor of ice. This armor adds +3 to your AC and grants you resistance to fire. In addition, as a bonus action on your turn you can use the armor as a source for one of your elemental spells or powers. You can use your armor in this way three times before you have to recreate it near an ample source of water. Each time you use your armor in this way you subtract 1 from the AC bonus.",
			])
		},
		"subclassfeature14.1" : {
			name : "Never-Melting Armor (Use)",
			source : [["PBMS", 0]],
			minlevel : 14,
			action : "bonus action",
			description : "",
		},
	},
});

AddSubClass("warlock", "the horned god", {
	regExpSearch : /^(?=.*warlock)(?=.*horned).*$/i,
	subname : "the Horned God",
	source : [["PBMS"]],
	spellcastingExtra : ["speak with animals", "hunter's mark", "beast sense", "pass without trace", "conjure animals", "nondetection", "dominate beast", "hallucinatory terrain", "awaken", "geas"],
	features : {
		"subclassfeature1" : {
			name : "Aspect of the Beast",
			source : [["PBMS"]],
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
			source : [["PBMS"]],
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
				savetxt : { text : ["Adv. on Str/Dex saves against Prone"] },
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
			source : [["PBMS"]],
			minlevel : 10,
			description : desc([
				"Starting at 10th level, your patron lurks over your shoulder as you traverse the world. Each hostile creature within 60 feet of you that can see you must succeed on a wisdom saving throw against your spell DC or be frightened for 1 minute. If the save fails by 5 or more your attack rolls have advantage until this effect ends. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on a success. If the targets saving throw is successful they are immune to this feature for 24 hours.",
			]),
		},
		"subclassfeature14" : {
			name : "Sacrifical Rite",
			source : [["PBMS"]],
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
