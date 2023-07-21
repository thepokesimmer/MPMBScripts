var iFileName = "PBMS";
RequiredSheetVersion("13.1.7");
SourceList["PBMS:TWC"] = {
	name : "Pandoras Box of Magical Secrets",
	abbreviation : "PBMS:TWC",	
	group : "Pandoras Box of Magical Secrets",
	date : "2023/07/18",
};

// Adds a new class, the Witch, with 7 subclasses
ClassList.sorcerer.regExpSearch = /sorcerer/i;
ClassList.witch = {
	
	regExpSearch : /witch/i,
	name : "Witch",
	source : [["PBMS:TWC", 1]],
	primaryAbility : ["Wisdom"],
	abilitySave : 5,
	prereqs : "Wisdom 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
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

		"class" : ["cleric", "druid", "warlock", "witch", "wizard"], 

		level : [0, 9]
	},
	
	features : {

		"weird magic" : {
			name : "Weird Magic",
			source : ["PBMS:TWC", 114],
			minlevel : 1,
			description : "\n   " + "The common threads between you and the witch before have given the ability to see the threads and cast spells. This innate connection to the weave has given you the ability to draw power from your surroundings both natural and manufactured in order to cast your spells. You gain the 1st-level Witch Bolt spell, which does not count against the number of spells you can have prepared., using Wisdom as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus" + "\n   " + "I can cast witch spells as rituals if they have the ritual tag",
			additional : ["2 cantrips known", "2 cantrips known", "2 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known"],
		},

		"subclassfeature1" : {
			name : "Coven",
			source : ["PBMS:TWC", 72],
			minlevel : 1,
			description : "\n   " + "Choose a Coven learned your craft from and put it in the \"Class\" field" + "\n   " + "Choose either Coven of Blood, Coven of the Dead, Coven of the Gale, Coven of the Goddess, Coven of the Hedge, or Coven of Hellfire",
		},
			
		"meddle magic" : {
			name : "Meddle Magic", 
			source : ["PBMS:TWC", 72],
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
			source : ["PBMS:TWC", 72],
			minlevel : 5,
			description : "\n   " + "You have learned how to read the threads from the magic around you and understand their meaning. As an action, you can choose one spell initiated within 30 feet of you that was cast within the last minute. If that spell is of a level you can cast, you can temporarily learn that spell from the thread to cast the spell during this turn using one of your corresponding spell slots. Once you have selected and read the thread you can cast or use that magic three times after your initial cast before the thread is lost. If you use this feature again before the spell thread is lost, the new spell thread replaces the previous one.",
			action : ["action"],
			usages : 3,
			recovery : "long rest",
		},	
		
		"void of threads" : {
			name : "Void of Threads", 
			source : ["PBMS:TWC", 72],
			minlevel : 13,
			description : "\n   " + "You can push away threads of magic creating a space void of the threads. Once a day as an action you can cast Antimagic field with this feature without expending a spell slot. While active you are unable to use your witchcraft or spells, however, you can still use your meddle magic as long as the casted spell is outside of the antimagic field.",
			action : ["action"],
			usages : 1,
			recovery : "dawn",
		},

		"mystical mount" : {
			name : "Mystical Mount", 
			source : ["PBMS:TWC", 72],
			minlevel : 17,
			description : "\n   " + "You have successfully crafted a mystical mount that can carry you along your journey. This mount can be made from any object that is capable of being mounted by you. This mount is attuned to you and does not count against the number of attunements you can have. This mount cannot be used or commanded by another creature without your permission. When selecting your mount you can choose whether it’s movement is walk or fly. This mount has 150 hit points, AC 18, movement speed of 60 feet. This mount is also immune to all condition effects, poison, necrotic, and psychic damage, as well as it is resistant to all other damage types. Regardless of distance or plane of existence you can always call to you the craft you have made. When calling forth your craft is requires an action. The mount teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft and send it back to where it previously resided.",
		},

		"witch's word" : {
			name : "Witch's Word", 
			source : ["PBMS:TWC", 72],
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
	source : [["PBMS:TWC", 5]],
	spellcastingExtra : ["witch bolt", "magic missile", "detect magic", "blur", "disruption", "counterspell", "dispel magic", "arcane eye", "arcane retaliation", "animate objects", "wall of force", "arcane gate", "disintigration"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS:TWC", 5]],
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
			source : [["PBMS:TWC", 5]],
			minlevel : 1,
			description : "\n   " + "You craft a magical object used by this coven known as a Spell Bottle. This bottle can contain powerful magical threads. As an action, during a short or long rest you can perform an hour long ritual to preserve a spell that you have prepared within this bottle. Once the spell is preserved you can cast the spell within the bottle as an action without using a spell slot. This bottle has three charges of the spell before the thread needs to be preserved again. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Thread",
			source: [["PBMS:TWC", 5]],
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can create a magical thread of magic that only you can see and touch. This thread can store residual energy that can be used to cast spells. Every time you spend a meddling point you continually add to this thread's power. Each meddling point is worth one 1st level spell slot, you can cast up to 5th level spells using five thread points. You can only cast spells at a level in which you can cast. The maximum number of points this thread can have at one time is is five.",
		},

		"subclassfeature3.1" : {
			name : "Force Spell",
			source: [["PBMS:TWC", 5]],
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
			source: [["PBMS:TWC", 5]],
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can weave two meddle spells instead of one. When you do so it costs two meddling points.",
		},
      
		"subclassfeature11" : {
			name : "Witch's Cutting",
			source: [["PBMS:TWC", 5]],
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can have that caster make a wisdom saving throw, on a failed save the thread between that spell and the caster is cut. The caster is unable to cast that spell for the next 24 hours.",
		},

		"subclassfeature15" : {
			name : "Witch's Fabricate",
			source: [["PBMS:TWC", 5]],
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose from any meddling spell from the meddle spell list.",
		},  
	},
});

AddSubClass("witch", "blood", {
	regExpSearch : /^(?=.*(witch))(?=.*blood).*$/i,
	subname : "Coven of Blood",
	source : [["PBMS:TWC", 5]],
	spellcastingExtra : ["witch bolt", "cure wounds", "inflict wounds", "lesser restoration", "wither and bloom", "vampiric touch", "life transference", "blight", "confusion", "contagion", "greater restoration", "harm", "flesh to stone"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS:TWC", 5]],
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
			source : [["PBMS:TWC", 5]],
			minlevel : 1,
			description : "\n   " + "You craft a magical blade used by this coven known as an Athame. This ceremonial blade is used to draw blood for your magic. This magical blade is equivalent to a +3 magical dagger except it follows the rulings of mage weapons and has been forged from blood and iron. As a bonus action, you can choose to concentrate on this weapon and have this athame levitate and move up to 60 feet of you to an unoccupied space for 1 min. As a bonus action on your turn, you can move the athame up to 60 feet and attack one target within 5 ft of it. You can choose to affect additional targets of any spell you cast if that target has been damaged by this blade within the last hour. The target does not need to be within range of the spell when it is cast and the target is automatically affected. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Sacrifice",
			source: [["PBMS:TWC", 5]],
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can weave your own blood into your spells. For every 5 hit points you sacrifice you can deal an extra dice of damage on that spell. ",
		},

		"subclassfeature3.1" : {
			name : "Bleeding Spell",
			source: [["PBMS:TWC", 5]],
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
			source: [["PBMS:TWC", 5]],
			minlevel : 7,
			description : "\n   " + "Whenever you spend a meddling point on a spell that targets a creature that has already taken damage you can cast your spell at one higher spell slot available without expending that spell slot.",
		},
    
		"subclassfeature11" : {
			name : "Witch's Blood Curse",
			source: [["PBMS:TWC", 5]],
			minlevel : 11,
			description : "\n   " + "Whenever you spend a meddling point on another casters spell you can cause them to expend extra energy to cast that spell. The caster must make a Constitution saving throw, on a failed save the caster expends one additional spell slot of choice.",
		},

		"subclassfeature15" : {
			name : "Witch's Regeneration",
			source: [["PBMS:TWC", 5]],
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you regain hit points equal to the spells level.",
		},   
	},
});

AddSubClass("witch", "dead", {
	regExpSearch : /^(?=.*(witch))(?=.*dead).*$/i,
	subname : "Coven of the Dead",
	source : [["PBMS:TWC", 5]],
	spellcastingExtra : ["witch bolt", "cause fear", "unseen servant", "gentle repose", "misty step", "spirit shroud", "speak with dead", "banishment", "shadow of moil", "danse macabre", "enervation", "circle of death", "eyebite"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS:TWC", 5]],
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
			source : [["PBMS:TWC", 5]],
			minlevel : 1,
			description : "\n   " + "You craft a magical object used by this coven known as a Poppet. This objected is crafted into an effigy that resembles a humanoid figure and is made from cloth that is filled with briars and bones. As a bonus action on your turn you can choose one of the poppets effects to inflict or curse upon one humanoid shaped creature be it living or dead that you can see within 60 feet. That target must make a DC wisdom saving throw or be linked to this poppet and subjected to its effects while within 60 feet of it. These effects last until the poppet is dismissed as a bonus action, linked to a new target, or the target is dropped to 0 hit points. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided. While cursed by the poppet the target is under the effects of the Hex Spell. At 5th level the effects of hex increase with the warlock's eldritch invocation Maddening Hex, and at 7th level the effects of the warlock's eldritch invocation Relentless Hex.",
		},

		"subclassfeature3" : {
			name : "Witch's Whisper",
			source: [["PBMS:TWC", 5]],
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can choose to target one creature within 60 feet. That creature must make a wisdom saving throw, on a failed save the target begins to hear a distorted whispers causing the target to have disadvantage on attack rolls with a weapon or spell for the next minute.",
		},

		"subclassfeature3.1" : {
			name : "Channeling Spell",
			source: [["PBMS:TWC", 5]],
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
			source: [["PBMS:TWC", 5]],
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell that targets one creature that creature must make a Charisma saving throw, on a failed save the creature is banished to the ethereal plane for 1 hour. Undead creatures with a challenge rating less than your witch level are permanently prevented from returning unless a wish spell is used.",
		},
      
		"subclassfeature11" : {
			name : "Witch's Haunting",
			source: [["PBMS:TWC", 5]],
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can choose to have the caster make a wisdom saving throw against your spell DC, on a failed save the caster is frightened, and haunted by a spirit forged from their fears that only they can see. This spirit is tethered to the caster in some way, be it the most recent creature they killed, a fallen ally, or a tormented loved one. This spirit remains chasing the creature for 1 minute.",
		},

		"subclassfeature15" : {
			name : "Witch's Fetch",
			source: [["PBMS:TWC", 5]],
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose to create a ghostly double of your self known as a fetch that is forged out of ethereal energy. This double lasts for 1 hour and does not require concentration. You can only have one fetch at a time. While this apparition is present you can mentally command where it moves. This apparition cannot attack or take damage, however, any creature that is not an ally that can see this fetch within 30 feet must make a wisdom saving throw, on a failed save the target is frightened by this apparition and must spend the next 1 hour moving as far away from it as it can. If the target succeeds they are immune to this effect for 24 hours.",
		},    
	},
});

AddSubClass("witch", "gale", {
	regExpSearch : /^(?=.*(witch))(?=.*gale).*$/i,
	subname : "Coven of the Gale",
	source : [["PBMS:TWC", 5]],
	spellcastingExtra : ["witch bolt", "fog cloud", "thunderwave", "gust of wind", "misty step", "lightning bolt", "tidal wave", "ice storm", "storm sphere", "control winds", "maelstrom", "chain lightning", "wind walk"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS:TWC", 5]],
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
			source : [["PBMS:TWC", 5]],
			minlevel : 1,
			description : "\n   " + "You create a magical object used by this coven known as a wand vane. This object is used to connect you with the threads of the storm. This object has been magically charged through constant use within weather rituals. When you cast an evocation spell that deals cold, lightning, thunder, or wave damage that has a duration of instantaneous you can change that duration to concentration up to 10 minutes causing the vane upon the wand to spin. If that spell deals direct damage, the spell deals half the dice of damage on consecutive turns after the initial cast. The spell also can be moved as a bonus action on each of your turns up to 30 feet in any direction. This effect ends early if you lose concentration, or choose to end it early no action required. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Brew",
			source: [["PBMS:TWC", 5]],
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can choose to have a swirl of static wind surround you. When you do so, you gain a bonus 10 feet to movement speed until the end of your next turn. While this effect is active any creature to hit you with a melee attack takes 5 lightning damage.",
		},

		"subclassfeature3.1" : {
			name : "Tempest Spell",
			source: [["PBMS:TWC", 5]],
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
			source: [["PBMS:TWC", 5]],
			minlevel : 7,
			description : "\n   " + "Whenever you meddle another casters spell that deals cold, lightning, thunder, or wave damage. You can make an arcana (intelligence) check against the casters spell DC. If you succeed you take control of that spell and can choose its target.",
		},

		"subclassfeature11" : {
			name : "Witch's Cloud",
			source: [["PBMS:TWC", 5]],
			minlevel : 11,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can choose to create a 20 foot radius sphere of fog centered on you. This sphere spreads around corners, and its area is heavily obscured. You are able to see clearly in this space. This effect lasts for 1 minute or until a wind of moderate or greater speed disperses it. (10 mph)",
		},

		"subclassfeature15" : {
			name : "Witch's Cyclone",
			source: [["PBMS:TWC", 5]],
			minlevel : 15,
			description : "\n   " + "can create a cyclone that is a 30 foot radius sphere centered on you. This sphere moves with you and lasts for up to an hour, unless you dismiss it. (no action required) While this cyclone is active all ranged missile weapon attacks have disadvantage toward you. Creatures that enter this cyclone for the first time or start their turn in it must make a Dexterity saving throw. On a failed save the creature takes 1d4 cold damage, or half as much on a successful save. Lastly any spell you cast while this cyclone is active that deals cold, lightning, thunder, or wave damage becomes apart of the cyclone adding 1d4 damage of that damage type to the cyclones damage.",
		},
	},
});

AddSubClass("witch", "goddess", {
	regExpSearch : /^(?=.*(witch))(?=.*goddess).*$/i,
	subname : "Coven of the Goddess",
	source : [["PBMS:TWC", 5]],
	spellcastingExtra : ["witch bolt", "ceremony", "detect good and evil", "spiritual weapon", "prayer of healing", "beacon of hope", "spirit guardians", "aura of purity", "guardian of faith", "commune", "hallow", "forbiddance", "heal"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS:TWC", 5]],
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
			source : [["PBMS:TWC", 5]],
			minlevel : 1,
			description : "\n   " + "You craft a magical object used by this coven known as an Amulet. This object is crafted from pure threads of magic and forged into a holy symbol of Mystra the Goddess of Magic. During a long rest you can imbue one abjuration spell that you have prepared with a duration longer than instantaneous upon this amulet. When you do so the effects of that spell remain upon you until you are not wearing the amulet, change the imbued spell, or dismiss it as a bonus action. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Communion",
			source: [["PBMS:TWC", 5]],
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can you gain a flash of divine insight by reading the divine threads from your surroundings. You receive insight as if you had casted the augury spell. ",
		},

		"subclassfeature3.1" : {
			name : "Absolution Spell",
			source: [["PBMS:TWC", 5]],
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
			source: [["PBMS:TWC", 5]],
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can choose to change the damage dealt to Radiant. When you do so that target must make a DC wisdom saving throw, on a failed save the target is outlined in divine energy. All attack rolls against that creature has advantage and the target cannot benefit from invisibility, or being obscured in darkness or magical darkness.",
		},

		"subclassfeature11" : {
			name : "Witch's Excommunicate",
			source: [["PBMS:TWC", 5]],
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can choose to have the caster make a wisdom saving throw against your spell DC, on a failed save you disconnect the magical threads of the divinity or benefactor from the caster be it a god, or patron. That caster is disconnected from their deity for 24 hours. ",
		},

		"subclassfeature15" : {
			name : "Witch's Persecution",
			source: [["PBMS:TWC", 5]],
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose to mark a target within 60 feet as accursed. That target must make a DC constitution save throw, on a failed save that target is physically marked in a way that would identify them as accursed to the current religious presence. While the target is marked in this way; magical anomalies take place that is out of their control. This includes the summoning of frogs, the warping of religious idols, and additional harmless effects. The target is viewed as an enemy by all creatures within 30 feet of it. These effects ends after the target is dropped to 0 hit points, the creature can repeat the saving throw to end the effect at the dawn of each day.",
		},
	},
});

AddSubClass("witch", "hedge", {
	regExpSearch : /^(?=.*(witch))(?=.*hedge).*$/i,
	subname : "Coven of the Hedge",
	source : [["PBMS:TWC", 5]],
	spellcastingExtra : ["witch bolt", "entange", "goodberry", "barkskin", "locate plants", "plant growth", "speak with plants", "grasping vine", "guardian of nature", "tree stride", "wrath of nature", "transport via plants", "wall of thorns"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS:TWC", 5]],
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
			source : [["PBMS:TWC", 5]],
			minlevel : 1,
			description : "\n   " + "You craft a magical object used by this coven known as a Poultice. This objected is crafted from seven sacred healing herbs that is capable of offering a magical remedies along your journey. As an action you can lay this poultice on the body of you or one willing creature to remove one disease, toxin, or condition effect. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Wicker",
			source: [["PBMS:TWC", 5]],
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can choose to have wickers grow around you in a 15 foot radius centered on you. These wickers create difficult terrain, and deal 1d4 piercing damage to each creature other than you that starts its turn within this area.",
		},

		"subclassfeature3.1" : {
			name : "Rooting Spell",
			source: [["PBMS:TWC", 5]],
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
			source: [["PBMS:TWC", 5]],
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can create a magical blossom that sprouts in an unoccupied space within 30 feet. That blossom possesses a magical aura of the meddling spell used. All spells cast by you and allies within 30 feet of that blossom are cast with the meddled effect. This flower disappears when you create another blossom, the blossom is dismissed as a bonus action, or the blossom is destroyed. The blossom has an AC 12 and 25 hit points.",
		},

		"subclassfeature11" : {
			name : "Witch's Thorns",
			source: [["PBMS:TWC", 5]],
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can choose to have the caster to make a wisdom saving throw, on a failed save the caster takes 1d6 force damage from magical thorns ejected from their own spell.",
		},

		"subclassfeature15" : {
			name : "Witch's Pollen",
			source: [["PBMS:TWC", 5]],
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can choose to create a cloud of magical pollen that covers a 15 foot radius from a point you choose within 60 feet that you can see. Any enemy to enter this space must make a Constitution saving throw, on a failed save the target has disadvantage on all saving throws against yours or your allies spells.",
		},
	
	},

});

AddSubClass("witch", "hellfire", {
	regExpSearch : /^(?=.*(witch))(?=.*hellfire).*$/i,
	subname : "Coven of Hellfire",
	source : [["PBMS:TWC", 5]],
	spellcastingExtra : ["witch bolt", "burning hands", "hellish rebuke", "crown of madness", "scorching ray", "fireball", "summon lesser demon", "summon greater demon", "wall of fire", "immolation", "infernal calling", "investiture of flame", "summon fiend"],
	features : {	
		"subclassfeature1" : {
			name : "Coven Spells",
			source : [["PBMS:TWC", 5]],
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
			source : [["PBMS:TWC", 5]],
			minlevel : 1,
			description : "\n   " + "You craft a magical object used by this coven known as a Book of Shadows. This book possesses information, lore, stats, weaknesses, and the languages of fiends. As you level you record and gain all of the necessary information about fiends of a CR equal to or less than your witch level. Doing so you gain advantage on all d20 checks against fiends of a CR equal to or less than your level. You also are immune to being charmed or frightened by fiends of a CR equal or less than your level. Regardless of distance or planes of existence you can always call your craft to you as a action. When calling forth your craft it teleports to you, and appears in an unoccupied space within 5 feet of you. You can also dismiss the craft as a bonus action, and send it back to where it previously resided.",
		},

		"subclassfeature3" : {
			name : "Witch's Guile",
			source: [["PBMS:TWC", 5]],
			minlevel : 3,
			description : "\n   " + "Whenever you spend a meddling point you can weave infernal power into your spell. When you do so any creature affected by the spell must make a wisdom saving throw. On a failed save the creature is either frightened or charmed by you (your choice) for the next minute.",
		},

		"subclassfeature3.1" : {
			name : "Hellfire Spell",
			source: [["PBMS:TWC", 5]],
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
			source: [["PBMS:TWC", 5]],
			minlevel : 7,
			description : "\n   " + "Whenever you use a meddling point on your own spell you can choose to deal an additional 1d6 hellfire damage to the affected target.",
		},

		"subclassfeature11" : {
			name : "Witch's Madness",
			source: [["PBMS:TWC", 5]],
			minlevel : 11,
			description : "\n   " + "Whenever you meddle another casters spell you can cause them to make a wisdom saving throw, on a failed save the creature gains short term madness for 10 min. See the short term madness table for additional effects on pg. 259. of DM guide.",
		},

		"subclassfeature15" : {
			name : "Witch's Imps",
			source: [["PBMS:TWC", 5]],
			minlevel : 15,
			description : "\n   " + "Whenever you spend a meddling point you can temporarily conjure a swarm of imps to deal additional damage to the target as if affected by the cloud of daggers spell.",
		},
	
	},

});	

spellSchoolList["Revoc"] = "revocation";

SpellsList["disruption"] = {
	name : "Disruption",
	source : ["PBMS:S", 204],
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
	source : ["PBMS:S", 204],
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

// Adds Magical Equipment
MagicItemsList["flax linen robe"] = {
	name : "Flax Linen Robe",
	sortname : "Flax, Linen, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 5 gp",
	weight : 5,
	description : "These Apprentice Robes when equipped grant the wearer an AC of 11 + their Spell Modifyer as well as 1 resistance of choice, these robes require the wearer to be capable of casting 1st level spells or higher",
	addArmor: "Flax Linen Robe",
	armorOptions: {
		regExpSearch: /flax, linen, robe/i,
		name : "Flax Linen Robe",
		source : [["PBMS", 204]],
		type : "light",
		ac : 11,
		weight : 5
	},
},

MagicItemsList["suede robe"] = {
	name : "Suede Robe",
	sortname : "Suede, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 10,
	description : "These Apprentice Robes when equipped grant the wearer an AC of 11 + their Spell Modifyer as well as 1 Feature of choice, these robes require the wearer to be capable of casting 1st level spells or higher",
	addArmor: "Suede Robe",
	armorOptions: {
		regExpSearch: /suede, robe/i,
		name : "Suede Robe",
		source : [["PBMS", 204]],
		type : "light",
		ac : 11,
		weight : 10
	},
},

MagicItemsList["embroidered robe"] = {
	name : "Embroidered Robe",
	sortname : "Embroidered, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "common",
	extraTooltip : "can be purchased for 45 gp",
	weight : 5,
	description : "These Apprentice Robes when equipped grant the wearer an AC of 12 + their Spell Modifyer as well as 1 Spell Charge of choice, these robes require the wearer to be capable of casting 1st level spells or higher",
	addArmor: "Embroidered Robe",
	armorOptions: {
		regExpSearch: /embroidered, robe/i,
		name : "Embroidered Robe",
		source : [["PBMS", 204]],
		type : "light",
		ac : 12,
		weight : 5
	},
},

MagicItemsList["cambric robe"] = {
	name : "Cambric Robe",
	sortname : "Cambric, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "uncommon",
	extraTooltip : "can be purchased for 10 gp",
	weight : 5,
	description : "These Adept Robes when equipped grant the wearer an AC of 12 + their Spell Modifyer (Max of 2) as well as Grants 2 Attributes of Choice, these robes require the wearer to be capable of casting 2nd level spells or higher",
	addArmor: "Cambric Robe",
	armorOptions: {
		regExpSearch: /cambric, robe/i,
		name : "Cambric Robe",
		source : [["PBMS", 204]],
		type : "medium",
		ac : 12,
		weight : 5
	},
},

MagicItemsList["leather robe"] = {
	name : "Leather Robe",
	sortname : "Leather, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "uncommon",
	extraTooltip : "can be purchased for 50 gp",
	weight : 15,
	description : "These Adept Robes when equipped grant the wearer an AC of 13 + their Spell Modifyer (Max of 2) as well as Grants 2 Attributes of Choice, these robes require the wearer to be capable of casting 3rd level spells or higher",
	addArmor: "Leather Robe",
	armorOptions: {
		regExpSearch: /leather, robe/i,
		name : "Leather Robe",
		source : [["PBMS", 204]],
		type : "medium",
		ac : 13,
		weight : 15
	},
},

MagicItemsList["velvet robe"] = {
	name : "Velvet Robe",
	sortname : "Velvet, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "uncommon",
	extraTooltip : "can be purchased for 75 gp",
	weight : 10,
	description : "These Adept Robes when equipped grant the wearer an AC of 14 + their Spell Modifyer (Max of 2) as well as Grants 2 Attributes of Choice, these robes require the wearer to be capable of casting 4th level spells or higher",
	addArmor: "Velvet Robe",
	armorOptions: {
		regExpSearch: /velvet, robe/i,
		name : "Velvet Robe",
		source : [["PBMS", 204]],
		type : "medium",
		ac : 14,
		weight : 10
	},
},

MagicItemsList["brocade robe"] = {
	name : "Brocade Robe",
	sortname : "Brocade, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "uncommon",
	extraTooltip : "can be purchased for 100 gp",
	weight : 10,
	description : "These Adept Robes when equipped grant the wearer an AC of 15 + their Spell Modifyer (Max of 2) as well as Grants 2 Attributes of Choice, these robes require the wearer to be capable of casting 5th level spells or higher",
	addArmor: "Brocade Robe",
	armorOptions: {
		regExpSearch: /brocade, robe/i,
		name : "Brocade Robe",
		source : [["PBMS", 204]],
		type : "medium",
		ac : 15,
		weight : 10
	},
},

MagicItemsList["wool robe"] = {
	name : "Wool Robe",
	sortname : "Wool, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "rare",
	extraTooltip : "can be purchased for 450 gp",
	weight : 15,
	description : "These Exalted Robes when equipped grant the wearer an AC of 16 as well as Grants 3 Attributes of Choice, these robes require the wearer to be capable of casting 6th level spells or higher",
	addArmor: "Wool Robe",
	armorOptions: {
		regExpSearch: /wool, robe/i,
		name : "Wool Robe",
		source : [["PBMS", 204]],
		type : "heavy",
		ac : 16,
		weight : 15
	},
},

MagicItemsList["armored robe"] = {
	name : "Armored Robe",
	sortname : "Armored, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "rare",
	extraTooltip : "can be purchased for 750 gp",
	weight : 25,
	description : "These Exalted Robes when equipped grant the wearer an AC of 20 as well as Grants 3 Attributes of Choice, these robes require the wearer to be capable of casting 7th level spells or higher",
	addArmor: "Armored Robe",
	armorOptions: {
		regExpSearch: /armored, robe/i,
		name : "Armored Robe",
		source : [["PBMS", 204]],
		type : "heavy",
		ac : 20,
		weight : 25
	},
},

MagicItemsList["silk robe"] = {
	name : "Silk Robe",
	sortname : "Silk, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "rare",
	extraTooltip : "can be purchased for 950 gp",
	weight : 20,
	description : "These Exalted Robes when equipped grant the wearer an AC of 17 as well as Grants 3 Attributes of Choice, these robes require the wearer to be capable of casting 8th level spells or higher",
	addArmor: "Silk Robe",
	armorOptions: {
		regExpSearch: /silk, robe/i,
		name : "Silk Robe",
		source : [["PBMS", 204]],
		type : "heavy",
		ac : 17,
		weight : 20
	},
},

MagicItemsList["prismatic robe"] = {
	name : "Prismatic Robe",
	sortname : "Prismatic, Robe",
	source : [["PBMS", 204]],
	type : "armor (robe)",
	rarity : "very rare",
	extraTooltip : "can be purchased for 1500 gp",
	weight : 20,
	description : "These Exalted Robes when equipped grant the wearer an AC of 18 as well as Grants 5 Attributes of Choice, these robes require the wearer to be capable of casting 9th level spells or higher",
	addArmor: "Prismatic Robe",
	armorOptions: {
		regExpSearch: /prismatic, robe/i,
		name : "Prismatic Robe",
		source : [["PBMS", 204]],
		type : "heavy",
		ac : 18,
		weight : 20
	},
},

MagicItemsList["talisman"] = {
	name : "Talisman",
	sortname : "Talisman",
	source : [["PBMS", 204]],
	type : "shield",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 1,
	description : "This Magical Talisman grants the wielder a +2 to AC, the wielder must be capable of casting 1st level spells or higher",
};

MagicItemsList["crystal"] = {
	name : "Crystal",
	sortname : "Crystal",
	source : [["PBMS", 204]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 1,
	description : "This Arcane Focus Grants an additional 1d4 to spell damage, as well as grants the Extension (You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
};

MagicItemsList["orb"] = {
	name : "Orb",
	sortname : "Orb",
	source : [["PBMS", 204]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 20 gp",
	weight : 3,
	description : "This Arcane Focus Grants an additional 1d6 to spell damage, as well as grants the Expansion (When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
};

MagicItemsList["rod"] = {
	name : "Rod",
	sortname : "Rod",
	source : [["PBMS", 204]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 2,
	description : "This Arcane Focus Grants an additional 1d6 to spell damage, as well as grants the Weapon (You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
	weaponsAdd : ["Rod"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /rod/i,
		name : "Rod",
		source : [["PBMS", 48]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};

MagicItemsList["gnarled staff"] = {
	name : "Gnarled Staff",
	sortname : "Gnarled Staff",
	source : [["PBMS", 204]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 25 gp",
	weight : 4,
	description : "This Arcane Focus Grants an additional 1d8 to spell damage, as well as grants the Weapon (You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.) and Favored (Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.) properties",
	weaponsAdd : ["Gnarled Staff"],
	weaponOptions : {
		baseWeapon : "greatclub",
		regExpSearch : /gnarled/i,
		name : "Gnarled Staff",
		source : [["PBMS", 48]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};

MagicItemsList["wand"] = {
	name : "Wand",
	sortname : "Wand",
	source : [["PBMS", 204]],
	type : "focus (arcane)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 1,
	description : "This Arcane Focus Grants an additional 1d4 to spell damage, as well as grants the Extension (You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.) and Favored (Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.) properties",
};

MagicItemsList["amulet"] = {
	name : "Amulet",
	sortname : "Amulet",
	source : [["PBMS", 204]],
	type : "focus (divine)",
	rarity : "common",
	extraTooltip : "can be purchased for 5 gp",
	weight : 1,
	description : "This Divine Focus Grants an additional 1d4 to spell damage, as well as grants the Favored (Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
};

MagicItemsList["crystal sword"] = {
	name : "Crystal Sword",
	sortname : "Crystal, Sword",
	source : [["PBMS", 204]],
	type : "focus (divine)",
	rarity : "common",
	extraTooltip : "can be purchased for 50 gp",
	weight : 3,
	description : "This Divine Focus Grants an additional 1d6 to spell damage, as well as grants the Weapon (You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
	weaponsAdd : ["Crystal Sword"],
	weaponOptions : {
		baseWeapon : "scimitar",
		regExpSearch : /crystal, sword/i,
		name : "Crystal Sword",
		source : [["PBMS", 48]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};

MagicItemsList["scepter"] = {
	name : "Scepter",
	sortname : "Scepter",
	source : [["PBMS", 204]],
	type : "focus (divine)",
	rarity : "common",
	extraTooltip : "can be purchased for 15 gp",
	weight : 4,
	description : "This Divine Focus Grants an additional 1d8 to spell damage, as well as grants the Weapon (You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.) and Extension (You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.) properties",
	weaponsAdd : ["Scepter"],
	weaponOptions : {
		baseWeapon : "greatclub",
		regExpSearch : /scepter/i,
		name : "Scepter",
		source : [["PBMS", 48]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};

MagicItemsList["reliquiary"] = {
	name : "Reliquiary",
	sortname : "Reliquiary",
	source : [["PBMS", 204]],
	type : "focus (divine)",
	rarity : "common",
	extraTooltip : "can be purchased for 5 gp",
	weight : 2,
	description : "This Divine Focus Grants an additional 1d4 to spell damage, as well as grants the Favored (Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
};

MagicItemsList["boline"] = {
	name : "Boline",
	sortname : "Boline",
	source : [["PBMS", 204]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 5 gp",
	weight : 4,
	description : "This Primal Focus Grants an additional 1d4 to spell damage, as well as grants the Weapon (You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
	weaponsAdd : ["Boline"],
	weaponOptions : {
		baseWeapon : "sickle",
		regExpSearch : /boline/i,
		name : "Boline",
		source : [["PBMS", 48]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};

MagicItemsList["wooden staff"] = {
	name : "Wooden Staff",
	sortname : "Wooden Staff",
	source : [["PBMS", 204]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 25 gp",
	weight : 4,
	description : "This Primal Focus Grants an additional 1d8 to spell damage, as well as grants the Weapon (You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls. The damage dealt by the spell focus is noted in the properties column.) and Favored (Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.) properties",
	weaponsAdd : ["Wooden Staff"],
	weaponOptions : {
		baseWeapon : "greatclub",
		regExpSearch : /wooden/i,
		name : "Wooden Staff",
		source : [["PBMS", 48]],
		description : "You can use a spell focus with the weapon property as a magical weapon. This weapon uses your spellcasting modifier in place of Strength or Dexterity for attack and damage rolls.",
		modifiers : [0, 0]
	},
};

MagicItemsList["druid's egg"] = {
	name : "Druid's Egg",
	sortname : "Druid, Egg",
	source : [["PBMS", 204]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 10 gp",
	weight : 2,
	description : "This Primal Focus Grants an additional 1d6 to spell damage, as well as grants the Favored (Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.) and Expansion (When casting a spell that creates an area of effect with a spell foci with the expansion property the area range is increased by 15 feet.) properties",
};

MagicItemsList["totem"] = {
	name : "Totem",
	sortname : "Totem",
	source : [["PBMS", 204]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 1 gp",
	weight : 2,
	description : "This Primal Focus Grants an additional 1d6 to spell damage, as well as grants the Favored (Spell foci with the favored property indicates that the spell focus favors a particular school of magic. This property is determined randomly upon discovery of the spell focus. Roll a d10 excluding 10 to determine the school of magic that it favors. When casting a spell from the same school of magic that the spell focus favors grants the caster advantage on spell attack rolls and imposes disadvantage on the targets saving throw.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
};

MagicItemsList["mistletoe"] = {
	name : "Mistletoe",
	sortname : "Mistletoe",
	source : [["PBMS", 204]],
	type : "focus (primal)",
	rarity : "common",
	extraTooltip : "can be purchased for 1 gp",
	description : "This Primal Focus Grants an additional 1d4 to spell damage, as well as grants the Extension (You can use a spell foci that has the extension property to cast ranged spells up to an additional 30 feet. These spells have to have a casting range greater than self or touch.) and Power (You can use a spell focus that has the power property to add your spellcasting modifier to the spells damage.) properties",
};
