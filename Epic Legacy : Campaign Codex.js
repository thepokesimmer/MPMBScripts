var iFileName = "EL:CC";
RequiredSheetVersion("13.1.7");
SourceList["EL:HH"] = {
	name : "Epic Legacy: Campaign Codex",
	abbreviation : "EL:CC",	
	group : "2CGaming",
	date : "2024/02/15",
};

ExperiencePointsList = ["", 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000, 415000, 475000, 545000, 625000, 715000, 815000, 925000, 1045000, 1175000, 1315000];

levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

ProficiencyBonusList = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8];

ClassList.elementalist = {
	
	regExpSearch : /elementalist/i,
	name : "Elementalist",
	source : ["EL:CC", 0],
	primaryAbility : ["Intelligence"],
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 6,
	saves : ["Con", "Int"],
	skillstxt : {
		primary : "Choose two from Investigation, History, Medicine, Nature, Perception, Persuasion.",
	},
	armorProfs : {
		primary : [false, false, false, false],
	},
	weaponProfs : {
		primary : [true, false],
	},
	subclasses : ["Elemental Affinity", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features : {
		"subclassfeature1" : {
			name : "Elemental Affinity",
			source : ["EL:CC", 86],
			minlevel : 1,
			description : desc([
				"You develop a natural affinity for one of the four elements choose one air, earth, fire, or water.",
			]),
		},
		"nexus of power" : {
			name : "Nexus of Power",
			source : ["EL:CC", 86],
			minlevel : 1,
			description : desc([
				"your understanding of the building blocks of the universe",
				"allows you to precisely manipulate the elements. These manipulations,",
				"called shapes, come in four categories of power: basic,",
				"advanced, expert, and master.",
			]),
			additional : ["Area of Influence 30 ft + 10 ft x Constitution Modifier", "Area of Influence 30 ft + 10 ft x Constitution Modifier", "Area of Influence 30 ft + 10 ft x Constitution Modifier", "Area of Influence 30 ft + 10 ft x Constitution Modifier", "Area of Influence 30 ft + 20 ft x Constitution Modifier", "Area of Influence 30 ft + 20 ft x Constitution Modifier", "Area of Influence 30 ft + 20 ft x Constitution Modifier", "Area of Influence 30 ft + 20 ft x Constitution Modifier", "Area of Influence 30 ft + 20 ft x Constitution Modifier", "Area of Influence 30 ft + 30 ft x Constitution Modifier", "Area of Influence 30 ft + 30 ft x Constitution Modifier", "Area of Influence 30 ft + 30 ft x Constitution Modifier", "Area of Influence 30 ft + 30 ft x Constitution Modifier", "Area of Influence 30 ft + 30 ft x Constitution Modifier", "Area of Influence 30 ft + 40 ft x Constitution Modifier", "Area of Influence 30 ft + 40 ft x Constitution Modifier", "Area of Influence 30 ft + 40 ft x Constitution Modifier", "Area of Influence 30 ft + 40 ft x Constitution Modifier", "Area of Influence 30 ft + 40 ft x Constitution Modifier", "Area of Influence 30 ft + 50 ft x Constitution Modifier"],
			limfeaname : "Primal Power",
			usages : [4, 6, 14, 17, 27, 32, 38, 44, 57, 64, 73, 73, 83, 83, 94, 94, 107, 114, 123, 133],
			recovery : "long rest",
			extraname : "Basic Shapes",
			extrachoices : ["Ball (PP 2)", "Blast (PP 1)", "Combustion (PP 2)(F)", "Droplets (PP 2)(W)", "Launch (PP 1)", "Obsidian Armaments (PP 2)(E)", "Shield (PP 1)", "Trail (PP 2)", "Updraft (PP 1)(A)", "Wall (PP 2)"],
			extraTimes : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4],
			"ball (pp 2)" : {
				name : "Ball (PP 2)",
				action : "bonus action", 
				description : desc ([
					"Duration : 1 Minute",
					"You create a 5-foot diameter sphere of your element",
					"as an Action you can move the ball 30 ft and make a single melee spell attack against a creature within 5 ft",
					"on a hit the target takes 2d6 damage of your elemental afinity.",
					"Air : Bludgeoning Damage, in addition the target must succeed a Str save or be knocked prone.",
					"Earth : Piercing Damage, in addition when the shape ends it explodes in a 30-foot radius sphere each creature must make a Dex save or take damage from the ball, or half as much on a success.",
					"Fire : Fire Damage, in addition when you take an action to move the ball you can move it 60-feet instead of 30-feet",
					"Water : Slashing Damage, in addition when the shape ends, the ball explodes in a 30-foot radius sphere and you roll the ball's damage creatures of your choice in the area regain hit points equal to the amount rolled.",
					"Augment : When you create the shape while empowered you can expend additional primal power for every 3 extra primal power you expend you create an additional elemental ball in an unoccupied space you can see, when you take an action to move your ball you can move all balls created and make a single melee spell attack with each.",
				]),
			},
			"blast (pp 1)" : {
				name : "Blast (PP 1)",
				action : "action",
				description : desc([
					"Duration : Instantaneous",
					"You unleash a blast of elemental energy in a 15-foot cone, creatures must succeed a Dex save or take 3d6 damage of your elemental affinity",
					"Air : Thunder Damage, in addition on a failed save creatures and unattened objects are pushed away to the end of the cone.",
					"Earth : Bludgeoning Damage, in addition the are becomes difficult terrain",
					"Fire : Fire Damage, in addition on a failed save creatures are blinded until the start of its next turn",
					"Water : Bludgeoning Damage, in addition this ability deals half the damage rounded down to enemies in the area and creatures of your choice regain hit points equal to half the amount rolled rounded up.",
					"Augment : When you create this shape while empowered you can expend additional primal power for every 2 extra primal power you expend you increase the size of your cone by an additional 15-feet and increase its damage by 2d6.",
				])
			},	
			"combustion (pp 2)(f)" : {
				name : "Combustion (PP 2)(F)",
				action : "action",
				prereqeval : function(v) { return (/forge|fire|lightning|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Round",
					"You infect a creature with an explosive charge that you can detonate as a reaction causing the creature and any creatures in 5-feet to make a Dex save or take 3d10 fire damage on a failure or half as much on a success. if you fail to detonate the charge before the end of the duration it explodes at the end of the duration.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend the duration of the effect increases by 1 round additionally at the beginning of each of your turns while the effect persists the damage dealt when the charge explodes increases by 3d10.",
				]),
			},
			"droplets (pp 2)(w)" : {
				name : "Droplets (PP 2)(W)",
				action : "bonus action",
				prereqeval : function(v) { return (/ice|water|life|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Minute",
					"You conjure three spheres of water that orbit your head, when you cause an allied creature you can see within range of your are of elemental influence to regain hit points, you can expend one or more spheres to cause them to regain an additional 1d8 hp for each sphere expended",
					"Augment : When you create this shape you can expend additional primal power, for every 2 extra primal power you expend you conjure an additional sphere of water.",
				]),
			},
			"launch (pp 1)" : {
				name : "Launch (PP 1)",
				action : "bonus action",
				description : desc([
					"Duration : Instantaneous",
					"You project a blast of your element that throws you into the air, the shape propells you in a straight line in a direction of your choice up to 30 ft. at the end of this movement you land on your feet unless you fell at the end of the movement.",
					"Air : If you fall at the end of the movemeent, your rate of descent slows to 30 feet per round for 1 minute, if you land before the minute is up you take no falling damage.",
					"Earth : If you make a melee attack immediately at the end of the movement provided by this shape it deals an additional 1d4 damage for every 10 feet you traveled.",
					"Fire : You create a 10-foot radius blast of fire cnetered on you when you created this shape, creatures must make a Dex save or take 1d4 fire damage for every 10 feet the shape attempts to throw you.",
					"Water : Instead of throwing yourself you choose a willing creature in your area of elemental influence to throw",
					"Augment : When you create this shape you can expend additional primal power, for every 1 extra primal power you expend you increase the distance by 10 feet.",
				]),
			},
			"obsidian armaments (pp 2)(e)" : {
				name : "Obsidian Armaments (PP 2)(E)",
				action : "bonus action",
				prereqeval : function(v) { return (/plant|earth|metal|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 10 Minutes",
					"you coat your limbs in a layer of obsidian for the duration, while coated your unarmed strikes are considered magical and you can use a bonus action to make unarmed strikes.",
					"Augment : When you create this shape you can expend additioanl primal power, for every 3 extra primal power you expend your unarmed strikes deal an additional 1d4 damage for the duration.",
				]),
			},
			"shield (pp 1)" : {
				name : "Shield (PP 1)",
				action : "reaction",
				description : desc([
					"Duration : Instantaneous",
					"You generate a swirling barrier of your elemental energy reducing the damage you take from the triggering effect by 1d12.",
					"Air : If the damage was from a ranged weapon attack and you reduce the damage to 0 you may redirect the attack to another target within 60 ft. to do so make a ranged spell attack as part of the same reaction dealing the weapons damage and effects on a hit.",
					"Earth : Until the start of your next turn you have half cover from attacks and effects outside of your space.",
					"Fire : Creatures within 5 feet of you take fire damage equal to the amount of damage reduces.",
					"Water : A creature of your choice within the area that would also take damage from the triggering effect is also affected by this shape, reducing the damage it takes by the amount rolled by this shape.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend the damage is reduced by an additional 1d12.",
				]),
			},
			"trail (pp 2)" : {
				name : "Trail (PP 2)",
				action : "action",
				description : desc([
					"Duration : 1 Minute",
					"You create a pathway composed of the elements from your feet in a 60ft long 5ft wide line that is 1 inch tall.",
					"Air : The pathway is composed of swirling air, you and only you can walk upon the pathway as if it were solid ground, while standing on the pathway you are considered to be flying.",
					"Earth : The pathway is composed of solid stone or earth and has an AC of 15 and 80 HP while on the pathway and not incapacitated you cannot be teleported or moved unless you allow it.",
					"Fire : The pathway is composed of shimmering flames while you are on the pathway you are always empowered as per your elemental empowerment feature. Additionally, creatures (including yourself) that come into contact with the pathway for the first time take fire damage equal to your elementalist level.",
					"Water : The pathway is composed of clear blue water when an enemy comes into contact with the pathway for the first time in a round must succeed a Str save or be pushed to either end of the pathway your choice.",
					"Augment : When you create this shape you can expend additional primal power, for every 2 extra primal power you expend the length increases by 30 feet or the width by 10 feet.",
				]),
			},
			"updraft (pp 1)(a)" : {
				name : "Updraft (PP 1)(A)",
				action : "action",
				prereqeval : function(v) { return (/storm|air|frost|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : Instantaneous",
					"You generate a trmendous blast of air in a 5-foot square you can see within your area of influence. Unsecured creatures completly in the are must succed a Str save or be thrown 30 ft strait up, or half as far on a success.",
					"Augment : When you create this shape you can expend additional primal power, for every 2 extra primal power you expend the area of effect is increased by one 5-ft square and the height affected creatures are thrown by increases by 20 feet.",
				]),
			},
			"wall (pp 2)" : {
				name : "Wall (PP 2)",
				action : "action",
				description : desc([
					"Duration : Permanent",
					"You create a straight wall of your elemtn on a solid surface that must be completely within your area of influence. you can make a wall up to 30 feet long, 10 feet high, and 1 foot thick. creatures in the spaces of your wall take 1d8 of your elements damage.",
					"Air : The wall is composed of swirling air and is invisible, non-magical projectiles are launched upward and automatically miss, boulders hurled by giants, or siege engines, or similar projectiles are unaffected.",
					"Earth : The wall is composed of heavy stone and is a structure. Each 10-foot section of the wall is an object with an AC equal to your elementalist DC and has 30 feet additionally the wall doesnt disappear when it leaves your area of elemental influence.",
					"Fire : The wall is composed of roaring flames and is opaque creatues passing through the wall for the first time on a turn or start their turn in the wall must succeed a Dex save or take 2d8 fire damage.",
					"Water : The wall is composed of rising water and is translucent at teh start of each of your turns the wall moves away from you at a speed of 20 feet, creatures that the wall encounters during this movement must succeed a Str save or be pushed ahead of the wall for the remainder of its movement. Creatures attempting to move into the wall must use thir swimming speed or swim through it the interior of the wall is considered difficult terrain.",
					"Augment : When you create this shape you can expend additional primal power, for every 1 extra primal power you expend the length of the wall is increased by 10 feet or the height of the wall by 5 feet.",
				]),
			},
		},
		"elemental empowerment" : {
			name : "Elemental Empowerment",
			source : ["EL:CC", 88],
			minlevel : 3,
			description : desc([
				"You learn the necessary skills to empower your elemental shapes by strengthening your connection to the elements. To augment a shape, you must first attune yourself to the elemental energies around you, synchronising your mind, body and spirit at the start of each of your turns you can choose to immediately enxend all of your movement to focus your mind when you do so you are considdered empowered until the start of your next turn or until you augement an elemental shape.",
			]),
		},	
		"nexus of power2" : {
			name : "Nexus of Power",
			source : ["EL:CC", 86],
			minlevel : 5,
			description : desc([
				"",
			]),
			extraname : "Advanced Shapes",
			extrachoices : ["Bind (PP 5)", "Bolt (PP 3)", "Bubble (PP 4)(W)", "Plasma Ray (PP 5)(F)", "Stone Block (PP 4)(E)", "Suffocate (PP 4)(A)", "Upgrade (PP 4)", "Vortex (PP 5)"],
			extraTimes : ["", "", "", "", 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3],
			"bind (pp 5)" : {
				name : "Bind (PP 5)",
				action : "action",
				description : desc([
					"Duration : 1 Minute",
					"You attempt to entrap a creature you can see in your area of influence the target must succeed a Str save or become restrained for the duration, the target can repeat the save at the end of each of its turns.",
					"Air : While affected the target is lifted off the ground and floats weightlessly in space, if shoved in this state the target is pushed an additional 15 feet on top of the pushers shove.",
					"Earth : While affected the target cant be forcibly moved from its space by nonmagical means, if the target is in the air when affected they fall to the earth and cant become airborn again for the duration of the effect.",
					"Fire : While affected the target is wracked with agonizing pain when it attempts to speak it must succeed a Con save or instead emit agonized screams for the remainder of their turn affected creatures can not have resistance to fire damage and immune targets become resistant instead",
					"Water : While affected the target cant regain HP and has disadvantage on Int, Wis, and Cha saves.",
					"Augment : When you create this shape you can expend additional primal power, for every 5 extra primal power you expend you can target an additional creature within range.",
				]),
			},
			"bolt (pp 3)" : {
				name : "Bolt (PP 3)",
				action : "action",
				description : desc([
					"Duration : Instantaneous",
					"You call down three bolts from above of elemental power that land in three different 5-foot squares within your area of influence creatures in the area take 1d8 damage of your elemental type.",
					"Air : Bludgeoning Damage, the target is pushed 5 feet away from the affected space.",
					"Earth : Piercing Damage, the affected space becomes difficult terrain if it is on the ground.",
					"Fire : Fire Damage, Each bolt deals additional fire damage equal to your shaping ability modifier.",
					"Water : Bludgeoning Damage, if an allied creature would take damage from the bolt, it instead takes no damage and regains 1d8 HP.",
					"Augment : When you create this shape you can expend additional primal power, for every 2 extra primal power you expend you can create an additional bolt.",
				]),
			},
			"bubble (pp 4)(w)" : {
				name : "Bubble (PP 4)(W)",
				action : "bonus action",
				prereqeval : function(v) { return (/ice|water|life|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Minute",
					"You warp a friendly creature you can see within your area of influence in a bubble for the duration. the target gains 20 temporary hit points for the duration of the shape and has partial cover from everything outside the bubble the bubble moves with the creature, you can use a bonus action to dismiss the bubble or cause it to fly 30 ft upward moving the creature within the effect ends if the target's temporary hit points are reduced to 0.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend the target gains an additional 10 temporary hit points and when you use a bonus action to move it you can move it an additional 5 ft.",
				]),
			},
			"plasma ray (pp 5)(f)" : {
				name : "Plasma Ray (PP 5)(F)",
				action : "action",
				prereqeval : function(v) { return (/forge|fire|lightning|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : Special",
					"You fire a beam of superheated plasma at a creature you can see within your area of influence make a ranged spell attack against a target on a hit the target takes 2d10 fire damage and 2d10 radiant damage, and you project a continuous stream of plasma between you and the target. On each of your turns you can use your action to make a ranged spell attack against the target dealing 2d10 fire and 2d10 radiant on a hit if the target is reduced to 0 HP they are reduced to fine ash the effect ends after 1 minute or until you are unable to see the target, or you fail to use your action to maintain the effect.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend a successful hit deals an additional 1d10 fire and 1d10 radiant damage.",
				]),
			},
			"stone block (pp 4)(e)" : {
				name : "Stone Block (PP 4)(E)",
				action : "bonus action",
				prereqeval : function(v) { return (/plant|earth|metal|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Hour",
					"You cause a stone block to erupt from the ground in an unoccupied space within 5ft of you, the block is a 5ft cube, a medium object, and has an AC = to your Elemental Save DC with 80 HP. When you make a successful melee attack against the block you may record the damage and push the block up to 60 ft away in a strait line along the ground if the block encounters a creature they must make a Dex save or take bludgeoning damage equal to your attack's damage if the encountered creature is medium or smaller they must succeed on a Str save or be pushed ahead of the block for the remainder of the movement.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend all the blocks dimensions increase by 5ft.",
				]),
			},
			"suffocate (pp 4)(a)" : {
				name : "Suffocate (PP 4)(A)",
				action : "action",
				prereqeval : function(v) { return (/storm|air|frost|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 10 Minutes",
					"You surround a creature you can see within your area of influence in a thin layer of air that prevents it from breathing for the duration. The target must succeed on a Con save to hold its breath, or immediately begin suffocating. At the end of each turn, the target can repaet the saving throw ending the effect on a success.",
					"Augment : When you create this shape you can expend additional primal power, for every 4 extra primal power you expend you can target one additional creature within range.",
				]),
			},
			"upgrade (pp 4)" : {
				name : "Upgrade (PP 4)",
				action : "action",
				description : desc([
					"Duration : 1 Minute",
					"You augment your form with elemental power, creating new extremities out of primal material.",
					"Air : You form a pair of wings composed of air, which increase your walking speed by 30 ft, additionally you float just above any surface you are standing on and can move along vertical surfaces or across liquids without falling during your turn.",
					"Earth : You create a pair of powerful arms composed of earth, each arm works just like your normal arms, providing you with an extra free hand. When you take the attack action you may make an additional attack for every pair of arms you create with this shape.",
					"Fire : You create a pair of eyes formed of burning flames that float in front of your face. when you create a pair of eys in this manner you may choose a single creature you can see within range. for the duration of the shape, that creature cant be hidden from you and has disadvantage on saving throws against you.",
					"Water : You create a tentacle of glistening water that protrudes from your back. the tentacle has a 20-foot reach and can deliver effects within a range of touch at that distance. Additionally when you create a tentacle using this shape, you gain a special reaction for its duration. This reaction can only be used to make a melee spell attack against a creature that would provide an opportunity attack from the tentacle. On a successful hit, the target is grappled by the tentacle, with an escape DC equal to your elemental save DC.",
					"Augment : When you create this shape you can expend additional primal power, for every 5 extra primal power you expend create an additional set of extremities of the tyupe of your affinity.",
				]),
			},
			"vortex (pp 5)" : {
				name : "Vortex (PP 5)",
				action : "action",
				description : desc([
					"Duration : 1 Minute",
					"A spiraling mass of elements appears in a 20-foot radius that is 5 feet high centered on a point you can see on the ground within your area of elemental influence. until the effect ends, the are is difficult terrain, and any creature that starts its turn in the area must succeed on a Str save or take 4d6 damage of a type according to your affinity and be pulled 10 feet towards the center of the effect.",
					"Air : Thunder Damage, The shape can be centered on a point you can see within the area instead of a point on the ground any creature in the area is deafened.",
					"Earth : Bludgeoning Damage, a creature starting its turn within the vortex must make a Str save or have its speed reduced to 0 until the end of its turn.",
					"Fire : Fire Damage, if a creature starts its turn in the center of the effect's area damage it takes from the vortex is doubled.",
					"Water : Bludgeoning Damge, creatures of your choice are immune to all effects of the shape.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend you increase the radius of the effect by 10 feet and the damage of the effect by 1d6.",
				]),
			},
		},
		"elemental allies" : {
			name : "Elemental Allies",
			source : ["EL:CC", 88],
			minlevel : 7,
			action : ["action", "Conjure Minor Elementals"],
			description : desc([
				"9 Primal Power",
				"Air : Chwinga, Smoke Mephit, Dust Mephit, Ice Mephit, Galvanice Weird",
				"Earth : Khargra, Dust Mephit, Magma Mephit, Mud Mephit,  Geonid, Gargoyle, Four Armed Gargoyle",
				"Fire : Smoke Mephit, Magma Mephit, Steam Mephit, Magmin, Fire Snake, Azer",
				"Water : Chwinga, Steam Mephit, Ice Mephit, Mud Mephit, Galvanice Weird",
				"Augment : while empowered you may expend an additional 4 primal power to increase the spell level by 2, you can't expend an amount of primal power greater than your level.",
			]),	
		},	
		"nexus of power3" : {
			name : "Nexus of Power",
			source : ["EL:CC", 86],
			minlevel : 9,
			description : desc([
				"",
			]),
			extraname : "Expert Shapes",
			extrachoices : ["Aftershock (PP 8)(E)", "Breach (PP 7)", "Cyclone (PP 8)(A)", "Flood (PP 9)(W)", "Gift (PP 8)", "Meltdown (PP 9)(F)", "Meteor (PP 8)", "Weapon (PP 9)"],
			extraTimes : ["", "", "", "", "", "", "", "", 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			"aftershock (pp 8)(e)" : {
				name : "Aftershock (PP 8)(E)",
				action : "bonus action",
				prereqeval : function(v) { return (/plant|earth|metal|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : Instantaneous",
					"you release a seismic wave in your area of influence if a creature in that area took damage from you that turn they must make a Con save or be knocked prone.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend a single creature knocked prone by this effect is also stunned till the start of its next turn." 
				]),
			},	
			"breach (pp 7)" : {
				name : "Breach (PP 7)",
				action : "action",
				description : desc([
					"Duration : Instantaneous",
					"You attempt to shatter the bonds of magic with elemental power when you create this shape you must choos a creature, object, or magical effect in your area of influence. If the target is under the effect of a spell, you must attempt an Int ability check, immediately ending the spell on a sucess DC = 10 + the spell's level if the target is under the effect of multiple spells you must attempt to end the highest-level spell possible.",
					"Air : If the target is a creature it is upshed 30 feet in a straight line in a direction of your choice.",
					"Earth : If the target is a creature it cant cast non-epic spells until the end of its next turn. if the target is an object it becomes vulnerable to damage until the start of your next turn.",
					"Fire : If the target is a creature or object it takes 1d10 fire damage per level of the spell ended.",
					"Water : You regain 1d6 hit points per level of the spell ended.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend you can choose an additional target for the shape or attempt to end an additional spell on a target.",
				]),
			},	
			"cyclone (pp 8)(a)" : {
				name : "Cyclone (PP 8)(A)",
				action : "action",
				prereqeval : function(v) { return (/storm|air|frost|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Minute",
					"You project a whirling cyclone from your hand in a line that extends to the end of your area of influence and is 5-feet wide as an action you can point the cyclone in a direction when a medium creature or smaller comes into contact with the cyclone for the first time in a round they must succeed a Str save or be thrown away from you to the end of the line, or be drawn toward the closest unoccupied space to you (your choice) landing prone in either case.",
					"Augment : When you create this shape you can expend additional primal power, for every 4 extra primal power you expend you increase the width of the line by 5 feet and the maximum size of a creature the cyclone can affect increases by one size category.",
				]),
			},	
			"flood (pp 9)(w)" : {
				name : "Flood (PP 9)(W)",
				action : "action",
				prereqeval : function(v) { return (/ice|water|life|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Minute",
					"You flood your area of influence with water that is 5-feet deep the water appears on the ground and flows in directions determined by the terrain, water from this shape that flows outside your are of influence vanishes, aqnd any water that leaves the area is magically replenished instantly the area is considered difficult terrain for creatures without a swim speed, while you are completely submerged in the water created by the flood, you are always empowered as per your elemental empowerment feature the effect ends if no area of your influence is in contact with the ground.",
					"Augment : When you create this shape you can expend additional primal power, for every 2 extra primal power you expend the depth of your flood is increased by 5-feet.",
				]),
			},	
			"gift (pp 8)" : {
				name : "Gift (PP 8)",
				action : "action",
				description : desc([
					"Duration : 1 Minute",
					"You touch a willing creature within reach mantling it in elemental energy grating it a boon for the duration, the target gains proficiency in a single saving throw of choice that you are also proficient in, and advantage on saves made against your elemental shapes.",
					"Air : The Target's walking speed is increased by 10 feet.",
					"Earth : While it isnt incapacitated the target cant be forcibly moved or teleported unwillingly.",
					"Fire : When the target succeeds on a saving throw against one of your shapes and would take damage on a success it instead takes no damage.",
					"Water : When the target regains HP from your shapes you regain an equal amount, this effect cant occur more than once per turn.",
					"Augment : When you create this shape you can expend additional primal power, for every 6 extra primal power you expend you can target an additional willing creature with this shape.",
				]),
			},	
			"meltdown (pp 9)(f)" : {
				name : "Meltdown (PP 9)(F)",
				action : "action",
				prereqeval : function(v) { return (/forge|fire|lightning|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Minute",
					"you superheat an object or a creature you can see in your area of influence for the duration, at the start of each of its turns it must succed a Con save or lose 8d6 hit points or half as much on a success and its HP maximum is reduced by an anount equal to the HP lost this reduction ends if the target is affected by a greater restoration, heal spell, or similar powerful healing magic. a target reduced to 0 HP is melted down into charred remains the shape ends on three successful Con saves.",
					"Augment : When you create this shape you can expend additional primal power, for every 5 extra primal power you expend the number of HP the target loses is increased by 8d6.",
				]),
			},	
			"meteor (pp 8)" : {
				name : "Meteor (PP 8)",
				action : "action",
				description : desc([
					"Duration : Instantaneous",
					"You conjure an elemental explosion centered on a point you can see within your area of influence, the explosion is a 20-foot radius sphere.",
					"Air : Creatures must succeed a Con save or take 8d10 Bludgeoning Damage and be knocked unconscious until the start of its next turn. A successful save halves the damage and prevents being knocked unconscious",
					"Earth : Creatures must succeed a Dex save or take 8d10 Piercing Damage or half as much on a success additionally the area of the explosion is filled with a thick cloud of dust for 1 minute and is considered heavily obscured for the duration or until a strong wind disperses it.",
					"Fire : Creatures must succeed a Dex save or take 4d10 Fire and 4d10 Radiant Damage additionally on a failed save a creature si pushed away from the center to the edge of the explosion's area.",
					"Water : Creatures must succeed a Dex save or take 4d10 Bludgeoning Damage, or half as much on a success, and other creatures of your choice in the area regain 4d10 HP.",
					"Augment : When you create this shape you can expend additional primal power, for every 4 extra primal power you expend you can create an additional explosion whose affected area cant include teh area of another explosion created by the shape.",
				]),
			},	
			"weapon (pp 9)" : {
				name : "Weapon (PP 9)",
				action : "action",
				description : desc([
					"Duration : 10 Minutes",
					"You forge a weapon fashioned from powerful elements which appears in your free hand and lasts for the duration, you are considered proficient with the weapon, and when you would make a weapon attack with it you instead make a spell attack the weapon has properties according to your elemental affinity.",
					"Air : The weapon is a longbow, and on a successful hit it deals an additional 6d8 thunder damage, additionally the range is doubled.",
					"Earth : The weapon is a maul, and on a successful hit it deals an additional 2d6 piercing damage, when you score a critical hit with the weapon the target becomes vulnerable to damage for the remainder of that turn.",
					"Fire : The weapon is a whip with a range equal to your area of elemental influence, on a successful hit it deals an additional 8d4 fire damage.",
					"Water : The weapon is a trident and deals an additional 3d6 piercing damage on a successful hit, additionally if yoou throw the trident, it returns to your hand at the end of that turn.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend you gain a +1 bonus to attack and damage rolls with the weapon.",
				]),
			},
		},
		"nexus of power4" : {
			name : "Nexus of Power",
			source : ["EL:CC", 86],
			minlevel : 13,
			description : desc([
				"",
			]),
			extraname : "Master Shapes",
			extrachoices : ["Bloodshaping (PP 12)(W)", "Cloud Call (PP 12)(A)", "Inferno (PP 11)(F)", "Pillar (PP 12)", "Resonating Crystal (PP 10)(E)", "Smite (PP 11)"],
			extraTimes : ["", "", "", "", "", "", "", "", "", "", "", "", 1, 1, 1, 1, 1, 1, 1, 1],
			"bloodshaping (pp 12)(w)" : {
				name : "Bloodshaping (PP 12)(W)",
				action : "action",
				prereqeval : function(v) { return (/ice|water|life|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Minute",
					"You attempt to manipulate the liquid within the body of a flesh and blood creature you can see within your area of influence, the target must succeed a Con save or be unable to voluntarily move or take actions for the duration. On each of your turns you can take an action to control the target's body like a puppet, forcing it to immediately take an action of your choice that it would ordinarily be able to take on its turn. If you do not have a clear idea of what the creature is capable of (such as whether it can cast specific spells), you cant force it to take any action associated with those capabilities. At the start of each of its turns the target can attempt another Con save ending the effect on a success.",
					"Augment : When you create this shape you can expend additional primal power, for every 5 extra primal power you expend you can choose to target an additional creature within range or force an affected creature to attempt Con saves at the end of their turn instead of the start.",
				]),
			},	
			"cloud call (pp 12)(a)" : {
				name : "Cloud Call (PP 12)(A)",
				action : "action",
				prereqeval : function(v) { return (/storm|air|frost|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 10 Minutes",
					"You fill your area of influence with thick, fluffy clouds for the duration or until you dismiss it as an action. Allied creatures in the area are lightly obscured and have half cover, additionally if you move while this shape is in effect, the clouds move with you. They cant be dispersed by any wind unless you allow it. Finally while this shape is in effect you are always empowered.",
				]),
			},	
			"inferno (pp 11)(f)" : {
				name : "Inferno (PP 11)(F)",
				action : "action",
				prereqeval : function(v) { return (/forge|fire|lightning|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : Instantaneous",
					"You generate a conflagration of epic proportions. Creatures, Objects, and Structures of your choice that you can see in your area of influence catch fire, this fire is magical and can only be extinguished by magical means when inside your area of influence. at the end of each of your turns, anything on fire from this shape takes 5d6 fire damage.",
					"Augment : When you create this shape you can expend additional primal power, for every 3 extra primal power you expend the damage dealt by the shape increases by 1d6",
				]),
			},
			"pillar (pp 12)" : {
				name : "Pillar (PP 12)",
				action : "action",
				description : desc([
					"Duration : 1 Minute",
					"You generate a tremendous pillar of elements within your area of influence. The pillar is a 15-foot radius cylinder with a height that extends up to the end of your area of influence.",
					"Air : The pillar is an empty vacuum devoid of air, sound cant pass through the area nor can creatures fly in the area via nonmagical means, instead falling immediately. Additionally creatures in the area cant breathe and any creature in the area holding their breath lose 10d8 HP at the start of each of their turns as the gas inside their lungs rapidly expands.",
					"Earth : The pillar is a column of dense stone that emerges from the ground, which is an object with an AC equal to your elemental save DC and 200 HP, while you are in contact with your pillar you are always empowered. If the pillar appears beneath a creature they must succeed a Dex save or be lifted as the pillar ascends a creature can choose to fail the save. If the pillar fails to reach its full height because of a solid object the target takes 10d8 bludgeoning damage and is restrained a creature can take an action to attempt a Str or Dex check their choice freeing themselves on a success, a creature so freed must move off the top of the pillar or become restrained again at the end of that turn.",
					"Fire : The pillar is a tornado of blazing fire. a creature standing in the area where the pillar appaears or within the area at the start of its turn must succeed a Dex save or take 10d8 fire damage or half as much on a success.",
					"Water : The pillar is a column of flowing water. When a creature enters teh area for the first time in a round you can choose for it to either regain 6d8 HP or attempt a Str save or be thrown 60 ft away from the pillar in a straight line and take 6d8 bludgeoning damage if it collides with a solid object or surface over the course of that movement.",
					"Augment : When you create this shape you can expend additional primal power, for every 4 extra primal power you expend the radius of the cylinder increases by 15 feet.",
				]),
			},
			"resonating crystal (pp 10)(e)" : {
				name : "Resonating Crystal (PP 10)(E)",
				action : "action",
				prereqeval : function(v) { return (/plant|earth|metal|shadow/i).test(classes.known.elementalist.subclass); },
				description : desc([
					"Duration : 1 Minute",
					"You forge a perfect crystal in an unoccup8ied space you can see in your area of influence that lasts for the duration the crystal hovers in the space as an object with an AC of 15 and HP of 50, when you or an allied creature within 30 ft of the crystal take damage, you instead take no damage and the crystal loses a number of HP equal to the damage that would have been dealt. When the crystal is reduced to 0 HP it shatters, and any remaining damage the crystal would have prevented is instead dealt to the original targets. the crystal always prioritizes reducing damage dealt to the creatures closest to it.",
					"Augment : When you create this shape you can expend additional primal power, for every 2 extra primal power you expend the crystal's HP when created increases by 10.",
				]),
			},
			"smite (pp 11)" : {
				name : "Smite (PP 11)",
				action : "bonus action",
				description : desc([
					"Duration : 1 Mimute",
					"You gather elemental power within your body for the duration which can be unleashed when you strike an enemy. When you hit with a melee or ranged attack before the duration ends, the attack deals an addtional 14d6 damage. once you have used this benefit the shape ends.",
					"Air : Bludgeoning Damage : the target must succeed a Str save or drop anything it is holding, any objects dropped in this manner are thrown 30 feet away from the target in a direction of your choice.",
					"Earth : Piercing Damage : if the attack is a melee attack and the target is a creature, the target is grappled (escape DC equals your elemental save DC).",
					"Fire : Fire Damage : If the attack scores a critical hit, you gain 11 primal power, up to your maximum.",
					"Water : Acid Damage : If the target of the attack is a creature, it must succeed a Con save or deal half damage for 1 minute at the end of each of its turns the affected creature can repat the saving throw ending the effect on a success.",
					"Augment : When you create this shape you can expend additional primal power, for every 9 extra primal power you expend you gain an additional use of the shape's benefit before it ends (but no more than once per turn).",
				]),
			},
		},
		"mind over matter" : {
			name : "Mind Over Matter",
			source : ["EL:CC", 89],
			minlevel : 20,
			description : desc([
				"When you use a shape that has a duration of 1 Minute or longer you can concentrate on it to extend its duration for as long as you maintain concentration.",
			]),
		},	
    }
};
AddSubClass("elementalist", "air", {
	regExpSearch : /^(?=.*(elementalist))(?=.*air).*$/i,
	subname : "Air Affinity",
	fullname : "Air Elementalist",
	source : ["EL:CC", 89],
	toolProfs : {
		primary : ["Caligrapher's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Guiding Winds",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Hurl Wind"],
			additional : ["1d6", "1d6", "1d6", "1d6", "1d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6"],
			description : desc([
				"As an action you can hurl a blast of air at a creature in your area of influence make a spell attack against a creature and deal 1d6(upgrades at 6th, 10th, 14th, and 18th level) on a successful hit. you can instead target an ally guiding the target's attacks with powerful wind until the end of the targets next turn when that ally attacks with a ranged weapon it has advantage on the attack and deals extra bludgeoning damage equal to your Hurl Wind die.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Air",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Manipulate Air"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Caligrapher's tools, additionally as an action you can harmlessly manipulate air in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Auran"],
			description : desc([
				"You learn Auran and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Spirit of Adventure",
			source : ["EL:CC", 89],
			minlevel : 6,
			description : desc([
				"after you finish a long rest, you have advantage on Dex saves and ability checks. this benefit lasts until you finish a short rest or gain a level of exhaustion.",
			]),
		},
		"subclassfeature10" : {
			name : "Windweaver",
			source : ["EL:CC", 89],
			minlevel : 10,
			description : desc([
				"On each of your turns if you spend movement to move at least 25ft from the space you started you become empowered.",
			]),
		},
		"subclassfeature14" : {
			name : "Grace of the Wind",
			source : ["EL:CC", 89],
			minlevel : 14,
			skills : ["Acrobatics"],
			saves : ["Dex"],
			description : desc([
				"You gain proficiency in Dex saving throws and Acrobatics.",
			]),
		},
		"subclassfeature18" : {
			name : "Master Air",
			source : ["EL:CC", 90],
			minlevel : 18,
			description : desc([
				"At the start of each of your turns you can choose to affect your area of influence causing one of the following effects. End any light or strong wind. Create a light or strong wind in a direction of your choice. Creatures of your choice are immune to the effects of this feature.",
			]),
		},
	},
});	
AddSubClass("elementalist", "frost", {
	regExpSearch : /^(?=.*(elementalist))(?=.*frost).*$/i,
	subname : "Frost Affinity",
	fullname : "Frost Elementalist",
	source : ["EL:CC", 89],
	toolProfs : {
		primary : ["Caligrapher's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Guiding Winds",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Hurl Wind"],
			additional : ["1d6", "1d6", "1d6", "1d6", "1d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6"],
			description : desc([
				"As an action you can hurl a blast of air at a creature in your area of influence make a spell attack against a creature and deal 1d6(upgrades at 6th, 10th, 14th, and 18th level) on a successful hit. you can instead target an ally guiding the target's attacks with powerful wind until the end of the targets next turn when that ally attacks with a ranged weapon it has advantage on the attack and deals extra bludgeoning damage equal to your Hurl Wind die.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Air",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Manipulate Air"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Caligrapher's tools, additionally as an action you can harmlessly manipulate air in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Auran"],
			description : desc([
				"You learn Auran and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Spirit of Adventure",
			source : ["EL:CC", 89],
			minlevel : 6,
			description : desc([
				"after you finish a long rest, you have advantage on Dex saves and ability checks. this benefit lasts until you finish a short rest or gain a level of exhaustion.",
			]),
		},
		"subclassfeature10" : {
			name : "Ice Elementalism",
			source : ["EL:CC", 92],
			minlevel : 10,
			savetxt : "Cold Immunity;",
			description : desc([
				"When you create a shape that deals damage, you can choose to have it deal cold damage instead, you become immune to cold damage.",
			]),
		},
		"subclassfeature14" : {
			name : "Ice Age",
			source : ["EL:CC", 92],
			minlevel : 14,
			action : ["action", "Freezing Fog"],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"As an action you create Freezing Fog in your area of influence for 4 hours (or until you use an action to dismiss it) when you do so, the temperature drops to extreme cold, the area is lightly obscured, and nonmagical fire is extinguished. You must finish a long rest before you can use this feature again.",
			]),
		},
		"subclassfeature18" : {
			name : "Frozen Doom",
			source : ["EL:CC", 90],
			minlevel : 18,
			action : ["reaction", "Frozen Doom"],
			description : desc([
				"When a creature you can see fails a save against one of your elemental shapes, you can take a reaction to spend 5 PP to attempt to freeze the creature solid, the target must succeed a Con save or be paralyzed until it has taken fire damage or is exposed to temperatures higher than 32F for 1 hour, at the end of each of its turns it may repeat the Con save ending the effect on a success.",
			]),
		},
	},
});
AddSubClass("elementalist", "storm", {
	regExpSearch : /^(?=.*(elementalist))(?=.*storm).*$/i,
	subname : "Storm Affinity",
	fullname : "Storm Elementalist",
	source : ["EL:CC", 89],
	toolProfs : {
		primary : ["Caligrapher's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Guiding Winds",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Hurl Wind"],
			additional : ["1d6", "1d6", "1d6", "1d6", "1d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6"],
			description : desc([
				"As an action you can hurl a blast of air at a creature in your area of influence make a spell attack against a creature and deal 1d6(upgrades at 6th, 10th, 14th, and 18th level) on a successful hit. you can instead target an ally guiding the target's attacks with powerful wind until the end of the targets next turn when that ally attacks with a ranged weapon it has advantage on the attack and deals extra bludgeoning damage equal to your Hurl Wind die.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Air",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Manipulate Air"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Caligrapher's tools, additionally as an action you can harmlessly manipulate air in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Auran"],
			description : desc([
				"You learn Auran and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Spirit of Adventure",
			source : ["EL:CC", 89],
			minlevel : 6,
			description : desc([
				"after you finish a long rest, you have advantage on Dex saves and ability checks. this benefit lasts until you finish a short rest or gain a level of exhaustion.",
			]),
		},	
		"subclassfeature10" : {
			name : "Lightning Elementalism",
			source : ["EL:CC", 92],
			minlevel : 10,
			dmgres : [["Thunder"],["Lightning"]],
			description : desc([
				"When you create a shape that deals damage, you can choose to have it deal lightning or thunder damage instead, additionally you become resistant to lightning and thunder damage.",
			]),
		},
		"subclassfeature14" : {
			name : "Ride the Lightning",
			source : ["EL:CC", 93],
			minlevel : 14,
			description : desc([
				"You can spend 10 minutes in focused meditation in which you take no action or movement to teleport yourself and up to seven willing creatures who are touching you to a place in which you are familiar in a bolt of harmless lightning, both the place you left and the place you arrive must be open to the sky.",
			]),
		},
		"subclassfeature18" : {
			name : "Gathering Storm",
			source : ["EL:CC", 93],
			minlevel : 18,
			description : desc([
				"When you expend primal power, record the amount of PP expended, this power begins to build in you as a storm. each time you expend PP it adds to the storm until expended. as an action, you can make a melee or ranged spell attack against a creature in your area of influence, discharging the electrical energy on a hit, the target takes lightning damage equal to the expended PP that built the storm, once you have done this the storm calms and is reset to 0, you also lose this benefit if you take a long rest.",
			]),
		},
	},
});
AddSubClass("elementalist", "earth", {
	regExpSearch : /^(?=.*(elementalist))(?=.*earth).*$/i,
	subname : "Earth Affinity",
	fullname : "Earth Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Mason's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Stone Mantle",
			source : ["EL:CC", 90],
			minlevel : 1,
			additional : ["4", "8", "12", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "68", "72", "76", "80"],
			description : desc([
				"When you finish a long rest you can coat your skin in a thick layer of stone, when you do so you gain Temp HP = 4 x Elementalist Level, these Temp HP cant be replaced by any other source unless you will it.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Earth",
			source : ["EL:CC", 90],
			minlevel : 1,
			action : ["action", "Manipulate Earth"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Mason's tools, additionally as an action you can harmlessly manipulate earth in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Terran"],
			description : desc([
				"You learn Terran and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Rock Solid",
			source : ["EL:CC", 90],
			minlevel : 6,
			savetxt : "Adv. on saves against Incapacitated, Paralyzed, Petrified, Stunned, or Unconcious;",
			description : desc([
				"You have adv on saves against effects that would cause you to be incapacitated, paralyzed, petrified, stunned, or unconcious on a failure.",
			]),
		},
		"subclassfeature10" : {
			name : "Seismography",
			source : ["EL:CC", 90],
			minlevel : 10,
			vision : "Tremorsense",
			description : desc([
				"While you are standing on the ground you have tremorsense out to a range of 15ft, at 18th level this increases to 30ft.",
			]),
		},
		"subclassfeature14" : {
			name : "Earthen Might",
			source : ["EL:CC", 89],
			minlevel : 14,
			skills : ["Athletics"],
			saves : ["Str"],
			description : desc([
				"You gain proficiency in Str saving throws and Athletics.",
			]),
		},
		"subclassfeature18" : {
			name : "Master Earth",
			source : ["EL:CC", 90],
			minlevel : 18,
			speed : { burrow : { spd : "walk", enc : "walk" } }, 
			description : desc([
				"you gain a burrow speed equal to your walking speed, you can burrow through solid rock at half your speed. You do not disturb any material through which you pass, if you end your turn in a solid object you must spend 5 PP or be shunted to the nearest unoccupied space.",
			]),
		},
	},
});
AddSubClass("elementalist", "metal", {
	regExpSearch : /^(?=.*(elementalist))(?=.*metal).*$/i,
	subname : "Metal Affinity",
	fullname : "Metal Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Mason's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Stone Mantle",
			source : ["EL:CC", 90],
			minlevel : 1,
			additional : ["4", "8", "12", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "68", "72", "76", "80"],
			description : desc([
				"When you finish a long rest you can coat your skin in a thick layer of stone, when you do so you gain Temp HP = 4 x Elementalist Level, these Temp HP cant be replaced by any other source unless you will it.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Earth",
			source : ["EL:CC", 90],
			minlevel : 1,
			action : ["action", "Manipulate Earth"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Mason's tools, additionally as an action you can harmlessly manipulate earth in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Terran"],
			description : desc([
				"You learn Terran and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Rock Solid",
			source : ["EL:CC", 90],
			minlevel : 6,
			savetxt : "Adv. on saves against Incapacitated, Paralyzed, Petrified, Stunned, or Unconcious;",
			description : desc([
				"You have adv on saves against effects that would cause you to be incapacitated, paralyzed, petrified, stunned, or unconcious on a failure.",
			]),
		},
		"subclassfeature10" : {
			name : "Metal Elementalism",
			source : ["EL:CC", 92],
			minlevel : 10,
			weapons : [
				[true, true],
			],	
			description : desc([
				"When you create a shape that deals damage, you can choose to have it deal bludgeoning, piercing, or slashing damage instead, additionally you are proficient in martial weapons that are made of metal, finally you can create elemental shapes while holding a weapon made of metal as if the hand were free.",
			]),
		},
		"subclassfeature14" : {
			name : "Arsenal",
			source : ["EL:CC", 89],
			minlevel : 14,
			armor : [
				[true, true, true, false],
			],	
			description : desc([
				"You gain proficiency in all armor that is made of metal and can touch an object made of metal and learn its current HP and AC.",
			]),
		},
		"subclassfeature18" : {
			name : "Heavy Metal",
			source : ["EL:CC", 92],
			minlevel : 18,
			description : desc([
				"When a creature fails a saving throw against one of your shapes by 10 or more and takes bludgeoning, piercing, or slashing damage as a result it instead takes double that damage.",
			]),
		},
	},
});
AddSubClass("elementalist", "plant", {
	regExpSearch : /^(?=.*(elementalist))(?=.*plant).*$/i,
	subname : "Plant Affinity",
	fullname : "Plant Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Mason's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Stone Mantle",
			source : ["EL:CC", 90],
			minlevel : 1,
			additional : ["4", "8", "12", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "68", "72", "76", "80"],
			description : desc([
				"When you finish a long rest you can coat your skin in a thick layer of stone, when you do so you gain Temp HP = 4 x Elementalist Level, these Temp HP cant be replaced by any other source unless you will it.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Earth",
			source : ["EL:CC", 90],
			minlevel : 1,
			action : ["action", "Manipulate Earth"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Mason's tools, additionally as an action you can harmlessly manipulate earth in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Terran"],
			description : desc([
				"You learn Terran and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Rock Solid",
			source : ["EL:CC", 90],
			minlevel : 6,
			savetxt : "Adv. on saves against Incapacitated, Paralyzed, Petrified, Stunned, or Unconcious;",
			description : desc([
				"You have adv on saves against effects that would cause you to be incapacitated, paralyzed, petrified, stunned, or unconcious on a failure.",
			]),
		},
		"subclassfeature10" : {
			name : "Life Elementalism",
			source : ["EL:CC", 92],
			minlevel : 10,
			description : desc([
				"When you create a shape, you regain HP equal to the amount of PP you expend creating and augmenting it (when applicable).",
			]),
		},
		"subclassfeature14" : {
			name : "Bountiful Paradise",
			source : ["EL:CC", 92],
			minlevel : 14,
			action : ["action", "Vitalizing Flood"],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"you flood your area of influence with vitalizing energy for 1 hour (or until you use an action to dismiss it), when you do so Allie creatures in the area can finish a short rest in half the usual time as long as they remain in your area of influence, allied creatures who finish a long rest in the area are cured of any disease or poisons. Once you have used this feature you cant do it again until you finish a long rest.",
			]),
		},
		"subclassfeature18" : {
			name : "Lifebringer",
			source : ["EL:CC", 92],
			minlevel : 18,
			description : desc([
				"as an action you can touch the body of a creature and expend 18 PP doing so restores the creature to life with all its hit points cures all disease, closes all wounds, and neutralilzes all poisons, but does not replace damaged or missing organs and limbs.",
			]),
		},
	},
});	
AddSubClass("elementalist", "fire", {
	regExpSearch : /^(?=.*(elementalist))(?=.*fire).*$/i,
	subname : "Fire Affinity",
	fullname : "Fire Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Glassblower's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Enduring Ember",
			source : ["EL:CC", 90],
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			additional : ["1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod"],
			description : desc([
				"When you finish a short rest, you can expend a number of HD up to your Int mod rolling those HD and regaining PP equal to the amount rolled, once you have used this feature you must finish a long rest to do so again. at 10th level you can roll a number equal to twice your Int mod.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Fire",
			source : ["EL:CC", 91],
			minlevel : 1,
			action : ["action", "Manipulate Fire"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Glassblower's tools, additionally as an action you can harmlessly manipulate fire in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Ignan"],
			description : desc([
				"You learn Ignan and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Fireproof",
			source : ["EL:CC", 89],
			minlevel : 6,
			dmgres : ["Fire"],
			description : desc([
				"after you finish a long rest, you have advantage on Dex saves and ability checks. this benefit lasts until you finish a short rest or gain a level of exhaustion.",
			]),
		},	
		"subclassfeature10" : {
			name : "Pour It On",
			source : ["EL:CC", 91],
			minlevel : 10,
			description : desc([
				"When you create shapes that deal damage and augment it, the first time the shape deals damage, it deals extra damage equal to the amount of PP expended to augment it.",
			]),
		},
		"subclassfeature14" : {
			name : "Fury of the Flames",
			source : ["EL:CC", 91],
			minlevel : 14,
			skills : ["Intimidation"],
			saves : ["Cha"],
			savetxt : "Fire Immunity;",
			description : desc([
				"you gain proficiency in Cha saves and the Intimidation skill",
			]),
		},
		"subclassfeature18" : {
			name : "Master Fire",
			source : ["EL:CC", 91],
			minlevel : 18,
			description : desc([
				"When you would deal fire damage in an area, you can choose to also damage unattended objects and structures in that area.",
			]),
		},
	},
});	
AddSubClass("elementalist", "lightning", {
	regExpSearch : /^(?=.*(elementalist))(?=.*lightning).*$/i,
	subname : "Lightning Affinity",
	fullname : "Lightning Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Glassblower's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Enduring Ember",
			source : ["EL:CC", 90],
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			additional : ["1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod"],
			description : desc([
				"When you finish a short rest, you can expend a number of HD up to your Int mod rolling those HD and regaining PP equal to the amount rolled, once you have used this feature you must finish a long rest to do so again. at 10th level you can roll a number equal to twice your Int mod.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Fire",
			source : ["EL:CC", 91],
			minlevel : 1,
			action : ["action", "Manipulate Fire"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Glassblower's tools, additionally as an action you can harmlessly manipulate fire in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Ignan"],
			description : desc([
				"You learn Ignan and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Fireproof",
			source : ["EL:CC", 89],
			minlevel : 6,
			dmgres : ["Fire"],
			description : desc([
				"after you finish a long rest, you have advantage on Dex saves and ability checks. this benefit lasts until you finish a short rest or gain a level of exhaustion.",
			]),
		},	
		"subclassfeature10" : {
			name : "Lightning Elementalism",
			source : ["EL:CC", 92],
			minlevel : 10,
			dmgres : [["Thunder"],["Lightning"]],
			description : desc([
				"When you create a shape that deals damage, you can choose to have it deal lightning or thunder damage instead, additionally you become resistant to lightning and thunder damage.",
			]),
		},
		"subclassfeature14" : {
			name : "Ride the Lightning",
			source : ["EL:CC", 93],
			minlevel : 14,
			savetxt : "Fire Immunity;",
			description : desc([
				"You can spend 10 minutes in focused meditation in which you take no action or movement to teleport yourself and up to seven willing creatures who are touching you to a place in which you are familiar in a bolt of harmless lightning, both the place you left and the place you arrive must be open to the sky.",
			]),
		},
		"subclassfeature18" : {
			name : "Gathering Storm",
			source : ["EL:CC", 93],
			minlevel : 18,
			description : desc([
				"When you expend primal power, record the amount of PP expended, this power begins to build in you as a storm. each time you expend PP it adds to the storm until expended. as an action, you can make a melee or ranged spell attack against a creature in your area of influence, discharging the electrical energy on a hit, the target takes lightning damage equal to the expended PP that built the storm, once you have done this the storm calms and is reset to 0, you also lose this benefit if you take a long rest.",
			]),
		},
	},
});
AddSubClass("elementalist", "forge", {
	regExpSearch : /^(?=.*(elementalist))(?=.*forge).*$/i,
	subname : "Forge Affinity",
	fullname : "Forge Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Glassblower's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Enduring Ember",
			source : ["EL:CC", 90],
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			additional : ["1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "1 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod", "2 x Int Mod"],
			description : desc([
				"When you finish a short rest, you can expend a number of HD up to your Int mod rolling those HD and regaining PP equal to the amount rolled, once you have used this feature you must finish a long rest to do so again. at 10th level you can roll a number equal to twice your Int mod.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Fire",
			source : ["EL:CC", 91],
			minlevel : 1,
			action : ["action", "Manipulate Fire"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Glassblower's tools, additionally as an action you can harmlessly manipulate fire in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Ignan"],
			description : desc([
				"You learn Ignan and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Fireproof",
			source : ["EL:CC", 89],
			minlevel : 6,
			dmgres : ["Fire"],
			description : desc([
				"after you finish a long rest, you have advantage on Dex saves and ability checks. this benefit lasts until you finish a short rest or gain a level of exhaustion.",
			]),
		},
		"subclassfeature10" : {
			name : "Metal Elementalism",
			source : ["EL:CC", 92],
			minlevel : 10,
			weapons : [
				[true, true],
			],	
			description : desc([
				"When you create a shape that deals damage, you can choose to have it deal bludgeoning, piercing, or slashing damage instead, additionally you are proficient in martial weapons that are made of metal, finally you can create elemental shapes while holding a weapon made of metal as if the hand were free.",
			]),
		},
		"subclassfeature14" : {
			name : "Arsenal",
			source : ["EL:CC", 89],
			minlevel : 14,
			armor : [
				[true, true, true, false],
			],	
			savetxt : "Fire Immunity;",
			description : desc([
				"You gain proficiency in all armor that is made of metal and can touch an object made of metal and learn its current HP and AC.",
			]),
		},
		"subclassfeature18" : {
			name : "Heavy Metal",
			source : ["EL:CC", 92],
			minlevel : 18,
			description : desc([
				"When a creature fails a saving throw against one of your shapes by 10 or more and takes bludgeoning, piercing, or slashing damage as a result it instead takes double that damage.",
			]),
		},
	},
});	
AddSubClass("elementalist", "water", {
	regExpSearch : /^(?=.*(elementalist))(?=.*water).*$/i,
	subname : "Water Affinity",
	fullname : "Water Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Alchemist's supplies", "Int"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Siphon",
			source : ["EL:CC", 91],
			minlevel : 1,
			action : ["action", "Siphn"],
			additional : ["1d4", "1d4", "1d4", "1d4", "1d4", "2d4", "2d4", "2d4", "2d4", "3d4", "3d4", "3d4", "3d4", "4d4", "4d4", "4d4", "4d4", "5d4", "5d4", "5d4"],
			description : desc([
				"As an action you can make a melee spell attack against a creature drawing life essence from them dealing 1d4(increases at 6th, 10th, 14th, and 18th levels) necrotic damage on a successful hit, you may then cause an ally within your area of influence to regain a number of hit points equal to the damage dealt.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Water",
			source : ["EL:CC", 91],
			minlevel : 1,
			action : ["action", "Manipulate Water"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Alchemist's supplies, additionally as an action you can harmlessly manipulate water in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 91],
			minlevel : 2,
			languageProfs : ["Aquan"],
			description : desc([
				"You learn Aquan and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Tidewalker",
			source : ["EL:CC", 91],
			minlevel : 6,
			speed : { swim : { spd : "walk", enc : "walk" } },
			description : desc([
				"You gain a swim speed equal to your walking speed and can breathe under water.",
			]),
		},
		"subclassfeature10" : {
			name : "Crushing Tide",
			source : ["EL:CC", 91],
			minlevel : 10,
			description : desc([
				"Creatures have disadvantage on te first saving throw they make against shapes you augment.",
			]),
		},
		"subclassfeature14" : {
			name : "Waves of Wisdom",
			source : ["EL:CC", 91],
			minlevel : 14,
			skills : ["Insight"],
			saves : ["Wis"],
			description : desc([
				"You gain proficiency with Wis saving throws and Insight ability checks.",
			]),
		},
		"subclassfeature18" : {
			name : "Master Water",
			source : ["EL:CC", 91],
			minlevel : 18,
			vision : ["Blindsight"],
			description : desc([
				"You have blindsight out to a range equal to your area of influence, however this sense is based on your ability to detect water such as blood or other fluids, creatures that re not at least partially composed of fluids cant be perceived in this area, when you or an allied creature is affected by one of your shapes in your area of influece the affected creature can take a reaction to move 10 feet without provoking opportunity attacks.",
			]),
		},
	},
});	
AddSubClass("elementalist", "ice", {
	regExpSearch : /^(?=.*(elementalist))(?=.*ice).*$/i,
	subname : "Ice Affinity",
	fullname : "Ice Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Alchemist's supplies", "Int"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Siphon",
			source : ["EL:CC", 91],
			minlevel : 1,
			action : ["action", "Siphn"],
			additional : ["1d4", "1d4", "1d4", "1d4", "1d4", "2d4", "2d4", "2d4", "2d4", "3d4", "3d4", "3d4", "3d4", "4d4", "4d4", "4d4", "4d4", "5d4", "5d4", "5d4"],
			description : desc([
				"As an action you can make a melee spell attack against a creature drawing life essence from them dealing 1d4(increases at 6th, 10th, 14th, and 18th levels) necrotic damage on a successful hit, you may then cause an ally within your area of influence to regain a number of hit points equal to the damage dealt.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Water",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Manipulate Water"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Alchemist's supplies, additionally as an action you can harmlessly manipulate water in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Aquan"],
			description : desc([
				"You learn Aquan and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Tidewalker",
			source : ["EL:CC", 89],
			minlevel : 6,
			speed : { swim : { spd : "walk", enc : "walk" } },
			description : desc([
				"You gain a swim speed equal to your walking speed and can breathe under water.",
			]),
		},
		"subclassfeature10" : {
			name : "Ice Elementalism",
			source : ["EL:CC", 92],
			minlevel : 10,
			savetxt : "Cold Immunity;",
			description : desc([
				"When you create a shape that deals damage, you can choose to have it deal cold damage instead, you become immune to cold damage.",
			]),
		},
		"subclassfeature14" : {
			name : "Ice Age",
			source : ["EL:CC", 92],
			minlevel : 14,
			action : ["action", "Freezing Fog"],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"As an action you create Freezing Fog in your area of influence for 4 hours (or until you use an action to dismiss it) when you do so, the temperature drops to extreme cold, the area is lightly obscured, and nonmagical fire is extinguished. You must finish a long rest before you can use this feature again.",
			]),
		},
		"subclassfeature18" : {
			name : "Frozen Doom",
			source : ["EL:CC", 90],
			minlevel : 18,
			action : ["reaction", "Frozen Doom"],
			description : desc([
				"When a creature you can see fails a save against one of your elemental shapes, you can take a reaction to spend 5 PP to attempt to freeze the creature solid, the target must succeed a Con save or be paralyzed until it has taken fire damage or is exposed to temperatures higher than 32F for 1 hour, at the end of each of its turns it may repeat the Con save ending the effect on a success.",
			]),
		},
	},
});	
AddSubClass("elementalist", "life", {
	regExpSearch : /^(?=.*(elementalist))(?=.*life).*$/i,
	subname : "Life Affinity",
	fullname : "Life Elementalist",
	source : ["EL:CC", 90],
	toolProfs : {
		primary : ["Alchemist's supplies", "Int"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Siphon",
			source : ["EL:CC", 91],
			minlevel : 1,
			action : ["action", "Siphn"],
			additional : ["1d4", "1d4", "1d4", "1d4", "1d4", "2d4", "2d4", "2d4", "2d4", "3d4", "3d4", "3d4", "3d4", "4d4", "4d4", "4d4", "4d4", "5d4", "5d4", "5d4"],
			description : desc([
				"As an action you can make a melee spell attack against a creature drawing life essence from them dealing 1d4(increases at 6th, 10th, 14th, and 18th levels) necrotic damage on a successful hit, you may then cause an ally within your area of influence to regain a number of hit points equal to the damage dealt.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Ways of Water",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Manipulate Water"],
			additional : ["5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "5-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "10-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "15-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "20-foot Cube", "25-foot Cube", "25-foot Cube", "25-foot Cube"],
			description : desc([
				"You gain proficiency in Alchemist's supplies, additionally as an action you can harmlessly manipulate water in your area of influence that cant interfere with the properties of magical effects, only natural ones",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Aquan"],
			description : desc([
				"You learn Aquan and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Tidewalker",
			source : ["EL:CC", 89],
			minlevel : 6,
			speed : { swim : { spd : "walk", enc : "walk" } },
			description : desc([
				"You gain a swim speed equal to your walking speed and can breathe under water.",
			]),
		},
		"subclassfeature10" : {
			name : "Life Elementalism",
			source : ["EL:CC", 92],
			minlevel : 10,
			description : desc([
				"When you create a shape, you regain HP equal to the amount of PP you expend creating and augmenting it (when applicable).",
			]),
		},
		"subclassfeature14" : {
			name : "Bountiful Paradise",
			source : ["EL:CC", 92],
			minlevel : 14,
			action : ["action", "Vitalizing Flood"],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"you flood your area of influence with vitalizing energy for 1 hour (or until you use an action to dismiss it), when you do so Allie creatures in the area can finish a short rest in half the usual time as long as they remain in your area of influence, allied creatures who finish a long rest in the area are cured of any disease or poisons. Once you have used this feature you cant do it again until you finish a long rest.",
			]),
		},
		"subclassfeature18" : {
			name : "Lifebringer",
			source : ["EL:CC", 92],
			minlevel : 18,
			description : desc([
				"as an action you can touch the body of a creature and expend 18 PP doing so restores the creature to life with all its hit points cures all disease, closes all wounds, and neutralilzes all poisons, but does not replace damaged or missing organs and limbs.",
			]),
		},
	},
});	
AddSubClass("elementalist", "shadow", {
	regExpSearch : /^(?=.*(elementalist))(?=.*shadow).*$/i,
	subname : "Shadow Affinity",
	fullname : "Shadow Elementalist",
	source : ["EL:CC", 89],
	toolProfs : {
		primary : ["Caligrapher's tools", "Dex"],
	},	
	features : {
		"subclassfeature1" : {
			name : "Shadowy Reflection",
			source : ["EL:CC", 80],
			minlevel : 1,
			description : desc([
				"You specialize in mimicing the elements with shadow, choose an element (Air, Earth, Fire, or Water) you gain the ability to bend shapes specific to those affinities with whisps of shadow, instead of dealing the damage one of those elements would normally deal you instead deal Psychic or Necrotic your choice and instead of their normal Saving Throw your shapes require a Wis Save to resist them. At 10th level instead of taking on a hybrid element you may choose another element to mimic gaining access to their specific shapes aswell.",
			]),
		},	
		"subclassfeature1.1" : {
			name : "Dark Puppet",
			source : ["EL:CC", 89],
			minlevel : 1,
			action : ["action", "Manipulate Shadow"],
			additional : ["1d10", "1d10", "1d10", "1d10", "1d10", "2d10", "2d10", "2d10", "2d10", "3d10", "3d10", "3d10", "3d10", "4d10", "4d10", "4d10", "4d10", "5d10", "5d10", "5d10"],
			description : desc([
				"As an action within your area of influence you can manipulate a creature's shadow the shadow reamins attached to the target but does your will, moving gesturing or even attacking, you can cause the shadow to attack the creature it is attatched to dealing 1d10 Nec/Psy damage on a success, this increased by 1d10 at 6th, 10th, 14th, and 18th levels.",
			]),
		},
		"subclassfeature2" : {
			name : "Friend of the Elements",
			source : ["EL:CC", 88],
			minlevel : 2,
			languageProfs : ["Deep Speech"],
			description : desc([
				"You learn Deep Speech and have advantage on Cha ability checks to interact with elementals.",
			]),
		},
		"subclassfeature6" : {
			name : "Nightbringer",
			source : ["EL:CC", 80],
			minlevel : 6,
			action : ["action", "Summon Darkness"],
			vision : ["Darkvision"],
			description : desc([
				"You have Darkvision to a range equal to your Area of Influence, and can see in magical darkness, additionally as an action you can fill your Area of Influence with magical darkness by spending 5 PP, this darkness lasts for 1 minute.",
			]),
		},
		"subclassfeature10" : {
			name : "Umbral Power",
			source : ["EL:CC", 80],
			minlevel : 10,
			action : ["bonus action", "Become Invisible"],
			description : desc([
				"When you create an elemental shape that affects an area you can choose to immediately snuff out any nonmagical sources of light in that area, and magical sources of light in the area that are not daylight are suppressed for 1 minute. Additionally as a bonus action you can spend 9 PP to become invisible for 1 hour, or until you attack, cast a spell, or create an elemental shape.",
			]),
		},
		"subclassfeature14" : {
			name : "Cunning of the Shadows",
			source : ["EL:CC", 81],
			minlevel : 14,
			skills : [["Deception"], ["Stealth"]],
			description : desc([
				"You gain proficiency Deception and Stealth if you are proficient in either skill already you double your proficiency bonus when you do ability checks using those skills.",
			]),
		},
		"subclassfeature18" : {
			name : "Master Shadow",
			source : ["EL:CC", 81],
			minlevel : 18,
			description : desc([
				"You have advantage on attack rolls against creatures in darkness, and creatures in darkness have disadvantage on saving throws against your elemental shapes.",
			]),
		},
	},
});
	
AddSubClass("artificer", "grenadier", {
	regExpSearch : /^(?=.*(artificer))(?=.*grenadier).*$/i,
	subname : "Grenadier",
	source : ["EL:CC", 124],	
	features : {
		"subclassfeature3" : {
			name : "Tools of the Trade",
			source : ["EL:CC", 124],
			minlevel : 3,
			description : " [proficient with alchemist's supplies and brewer's supplies], gain the ability to craft specialized explosives.",
			toolProfs : ["Alchemist's supplies", "Brewer's supplies"],
			spellcastingExtra : ["burning hands", "catapult", "pyrotechnics", "shatter", "erupting earth", "slow", "blight", "fire shield", "immolation", "telekinesis"],
			toNotesPage : [{
				name : "Fragtology Materials",
				note : [
					"Nitrosil, Artificer Level 3, Crafting DC 13, Development Cost 10 gp, 3d6 fire damage",
					"F-42, Artificer Level 6, Crafting DC 16, Development Cost 200 gp, 6d6 acid damage",
					"Arcanium Powder, Artificer Level 14, Crafting DC 24, Development Cost 1,000 gp, 12d6 thunder damage",
				],
			}],			
		},
		"subclassfeature3.1" : {
			name : "Demolition Charge",
			source : ["EL:CC", 124],
			minlevel : 3,
			description : desc([
				"You learn how to harness your Fragtology Materials to create a weapon known as a",
				"Demolition Charge, one batch of your Fragtology Materials is enough to craft 10",
				"Demolition Charges. You are the only person able to safely use one of these charges,",
				"in any other hands the charge immediately explodes. When a Demolition Charge explodes",
				"it deals damage equal to its Fragtology Material in a 15-foot radius sphere.", 
				"creatures in that area must make a Dexterity saving throw against your",
				"spell save DC.",
				"As an action, you may either throw the Demolition Charge to a point of your choice within 30 ft of you, detonating on impact",
				"or, you may place it in an unoccupied space within 5 feet of you and light the fuse, which you can set a duration for up to 1 minute",
			]),
		},	
		"subclassfeature5" : {
			name : "Sticky Bombs",
			source : ["EL:CC", 125],
			minlevel : 5,
			description : desc([
				"Immediately before you place a Demolition Charge you may use a bonus action to coat it in a sticky glue",
				"doing so makes it so that you may stick it to any surface, or creature. If you stick it to a creature make a melee spell attack", 
				"on a hit the charge is stuck and requires a Strength (Atheletics) check versus your spell save DC to be performed by a creature",
				"within 5 ft. of the affected target",
			]),
		},
		"subclassfeature9" : {
			name : "Explosive Engineering",
			source : ["EL:CC", 125],
			minlevel : 9,
			description : desc([
				"As an action you can place one of your demolition charges in an unoccupied space and begin linking it to other demolition charges",
				"Additional Demolition Charges linked in this way must be at least 15 ft. away(max of 30 ft away) from each other to a max of 10 linked charges",
				"After placed you may use an action to light the fuse of the first charge with a timer up to 1 minute in duration when the time is up all linked charges explode simultaneously",
			]),
		},	
		"subclassfeature15" : {
			name : "Arcane Catalyst", 
			source : ["EL:CC", 125],
			minlevel : 15,
			description : desc([
				"you can augment your Demolition Charges with magic, when you place or throw one of your charges you may expend an Artificer spell slot of 1st level or higher",
				"to grant one of the following benefits to your charge",
				"• Enhanced Intensity: the Demolition Charge deals an extra 2d6+1d6/SL",
				"• Blasting Boost: the area affected by your Demolition Charge increases by 10ft+5ft/SL",
				"• Shape Change: you can designate 1+1/SL creature to automatically succeed its saving throw against your Demolition Charge",
			])
		},	
	},	
});

ClassList.archanic = {
	
	regExpSearch : /archanic/i,
	name : "Archanic",
	source : ["EL:CC", 125],
	primaryAbility : ["Intelligence"],
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
	scoresMaximum : [30, 30, 30, 30, 30, 30],
	die : 8,
	subclasses : ["Master Specialist", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [],
		spells : "list",
		prepared : true,
	},
	spellcastingList : { 
		"class" : [], 
		level : [6, 9],
		extraspells : ["globe of invulnerability", "guards and wards", "heal", "magic jar", "move earth", "programmed illusion", "true seeing", "etherealness", "mordenkainen's magnificent mansion", "mirage arcane", "regenerate", "resurrection", "simulacrum", "symbol", "antimagic field", "antipathy/sympathy", "clone", "control weather", "demiplane", "mind blank", "telepathy", "gate", "power word heal", "prismatic wall", "time stop", "true polymorph"],
	},
	
	features : {
		"proficiencies" : {
			name : "Proficiencies", 
			source : ["EL:CC", 126],
			minlevel : 1,
			description : "\n   " + "Saving Throws. You gain proficiency in a single saving throw of your choice. Use the Choose Feature button on the second page to select your proficiency",
			extraname : "Bonus Saving Throw",
			extrachoices : ["Strength", "Dexterity", "Wisdom", "Charisma"],
			"strength" : {
				name : "Strength",
				description : "\n   " + "You gain proficiency in Strength Saving Throws",
				saves : ["Str"],
			},	
			"dexterity" : {
				name : "Dexterity",
				description : "\n   " + "You gain proficiency in Dexterity Saving Throws",
				saves : ["Dex"],
			},
			"wisdom" : {
				name : "Wisdom",
				description : "\n   " + "You gain proficiency in Wisdom Saving Throws",
				saves : ["Wis"],
			},	
			"charisma" : {
				name : "Charisma",
				description : "\n   " + "You gain proficiency in Charisma Saving Throws",
				saves : ["Cha"],
			},	
		},	
		"epic feat" : {
			name : "Epic Feat",
			source : ["EL:CC", 126],
			minlevel : 1,
			description : "\n   " + "When you reach 21st level, and again at 25th and 29th level, you may select one Epic feat from the Epic feat list detailed in chapter 3. You may forgo taking an Epic feat to instead increase one ability score of your choice by 4, or you can increase two ability scores of your choice by 2.",
		},	
		"arcanotech infusions" : {
			name : "Arcanotech Infusions",
			source : ["EL:CC", 126],
			minlevel : 1,
			description : desc([
				"When you infuse an item using your Infuse Item feature,", 
				"you can choose to augment it into an arcanotech version of that item.", 
				"The item permanently gains the following properties,", 
				"in addition to the properties granted by the infusion.",
				"(See Notes Page)",
			]),
			toNotesPage : [{
				name : "Arcanotech Infusions",
				note: [
					"• The item becomes a complex mechanism, with its powers",
					"rooted in equal parts magic and technology. Only you can use",
					"the item; in the hands of other creatures it is a mechanical",
					"marvel beyond their comprehension.",
					"• The item becomes an Artisans Tool of your choice in which",
					"you are proficient, and you can use the item as a spellcasting",
					"focus as long as you are holding or wearing the item.",
					"• As an action you can touch the item and infuse it, as per your",
					"Infuse Item feature.",
				],	
			}],
		},
		"fantastic machines" : {
			name : "Fantastic Machines",
			source : ["EL:CC", 127],
			minlevel : 2,
			description : desc([
				"you learn a schematic to build a fantastic machine, a magical device of genius design,", 
				"use the 'choose feature' button to select your Fantastic Machines",
			]),			
			additional : levels.map(function (n) {
					return n < 2 ? "" : (n < 4 ? 1 : n < 6 ? 2 : n < 8 ? 6 : n < 10 ? 4 : 5) + " Fantastic Machine Schematics known; max " + (n < 2 ? "" : (n < 4 ? 1 : n < 6 ? 2 : n < 8 ? 6 : n < 10 ? 4 : 5) + " infused items");
				}),
			extraname : "Fantastic Machines",
			extrachoices : ["Alchematronic Blendmaster", "Arcane Hyper-Infuser", "Arcanotech Proto-Rifle", "Clockwork Limb", "Mechanized Battle Mail", "Omnicombynamo", "Recombobulatron", "Spectrographic Polyscope", "Transmobile Siege Machine", "War Matrix"],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 4 ? 1 : n < 6 ? 2 : n < 8 ? 6 : n < 10 ? 4 : 5;
			}),
			"alchematronic blendmaster" : {
				name : "Alchematronic Blendmaster",
				description : desc([
					"The alchematronic blendmaster is an elaborate series",
					"of tubes, canisters, whirring gizmos, and strange fluids",
					"amalgamated into a single backpack and dispensing sprayer.",
					"As an action while you are wearing the blendmaster and",
					"holding the dispenser in one hand, you can expend one of",
					"its charges and project a magical liquid in a 90-foot line",
					"that is 5 feet wide, or a 30-foot cone, coating everything in",
					"the area with the fluid. The blendmaster has a number of",
					"charges equal to your Intelligence modifier and regains all",
					"expended charges when you finish a long rest. The fluid you",
					"project is determined when you use the blendmaster, and it",
					"replicates the effects of magical potions. The potion effects",
					"produced must be from the following options, but you may",
					"replicate other potion effects by feeding a potion or similar",
					"such item into the blendmaster as a part of the action",
					"(consuming the potion in the process).",
					"• Ablative Glue. Creatures in the affected area are",
					"subjected to the effects of a potion of resistance. The",
					"type of damage the potion resists is chosen by you.",
					"• Biotic Juices. Allied creatures in the affected area",
					"regain hit points as though they had consumed a",
					"potion of supreme healing. Enemy creatures in the area",
					"must succeed on a Constitution saving throw versus",
					"your spell save DC or take 10d4 + 20 acid damage, or",
					"half as much on a success.",
					"• Invigorating Liquid. Creatures in the affected area",
					"are subjected to the effects of a potion of heroism.",
					"• Vanishing Slime. Creatures in the affected area are",
					"subjected to the effects of a potion of invisibility.",
					"Unwilling creatures can attempt a Wisdom saving",
					"throw versus your spell save DC to prevent the effect.",
				]),	
			},
			"arcane hyper-infuser" : {
				name : "Arcane Hyper-Infuser",
				description : desc([
					"After months of work, you build an extraordinary device that",
					"can summon the power of Epic magic: an arcane hyper-infuser.",
					"The infuser has 1 charge for every 2 levels of archanic",
					"you have, and it regains expended charges whenever you",
					"finish a long rest. As an action while you hold the infuser, you",
					"can expend 1 charge to cast an Epic spell as a Tier 1 Epic",
					"spell, choosing from following list of spells. When you cast",
					"an Epic spell in this manner, you can expend an additional",
					"charge to increase the tier of the Epic spell by 1 for each",
					"charge you expended.",
				]),	
				usages : [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5,],
				recovery : "long rest",
				spellcastingBonus : {
					name : "Arcane Hyper-Infuser",
					spells : ["ashran's arcane absorption", "antimagic ray", "genesis", "spell sequencer", "translocation"],
					selection : ["ashran's arcane absorption", "antimagic ray", "genesis", "spell sequencer", "translocation"],
					firstCol : "1-3",
					times : 5,
				},
			},
			"arcanotech proto-rifle" : {
				name : "Arcanotech Proto-Rifle",
				description : desc([
					"The rifle takes ammunition that only an archanic can make,",
					"which are magically treated mithril rounds that each cost 1",
					"gp in raw materials. Additionally, when you create a round",
					"for the rifle you can spend an additional 4 gp to imbue it",
					"with potent energy, choosing one of the following damage",
					"types: acid, cold, fire, lightning, poison, or thunder. When you",
					"score a hit with the rifle using that ammunition, the attack",
					"deals an additional 5d10 damage of the chosen type.",
				]),	
			},
			"clockwork limb" : {
				name : "Clockwork Limb",
				description : desc([
					"After weeks of constructing minute clockwork components,",
					"you create an artificial arm that obeys your every command",
					"and is grafted onto one of your shoulders. This new limb",
					"magically functions flawlessly as if it were a part of your own",
					"body and provides the following benefits.",
					"• If you are holding a weapon with your clockwork limb, as",
					"a bonus action you may make an attack with that weapon.",
					"• If you are holding a magic item with the clockwork limb",
					"whose properties you can use by taking an action, you can",
					"also use those properties by taking a bonus action.",
					"• You gain Epic advantage on any ability check you make",
					"using your tools, as long as the hand on the clockwork",
					"limb is free to assist you.",
					"Attaching or removing the clockwork limb requires 1 hour of",
					"strenuous activity.",
				]),
			},	
			"mechanized battle mail" : {
				name : "Mechanized Battle Mail",
				description : desc([
					"This fantastic machine is a suit that endows its wearer with",
					"great strength and power. The suit fits over your body, along",
					"with anything you are wearing (including armor). Donning",
					"and doffing the suit takes 1 minute. While you wear the suit,",
					"you gain the following benefits.",
					"• Booster Jets. You have a fly speed of 90 feet, and you can",
					"hover. You can fly in this manner for up to 1 hour each day",
					"before your power runs out, at which point you fall.",
					"• Heavy Reinforcement. You have Epic advantage on",
					"Strength and Dexterity saving throws and ability checks.",
					"• Strength of Thought. If your Strength score is lower than",
					"your Intelligence score, it is instead equal to your",
					"Intelligence score. Additionally, your carrying and lifting",
					"capacity are calculated as though you were a Gargantuan",
					"creature.",
				]),
				scoresOverride : ["Int", 0, 0, 0, 0, 0],
				carryingCapacity : 0,
			},
			"omnicombynamo" : {
				name : "Omnicombynamo",
				description : desc([
					"This miraculous device is a living, beating, arcanotech heart.",
					"When you create a creature or mechanical object (such as an",
					"arcane turret) via your artificer features or through a magic",
					"item (such as a manual of golems), you can choose to magically",
					"incorporate the fantastic machine into its construction.",
					"When you do so, the target gains the following traits and",
					"benefits.",
					"• Arcane Power. The target gains a bonus to hit on weapon",
					"attacks equal to your Intelligence modifier. Additionally,",
					"once per turn when the target deals damage, it deals an",
					"additional 1d10 arcane damage for each level you have in",
					"archanic.",
					"• Superior Engineering. The target’s hit point maximum",
					"increases by 30 times your archanic level.",
					"If the target containing the combynamo is killed or",
					"destroyed, the combynamo is not destroyed but must be",
					"extracted from the target’s remains (if any).",
				]),
			},
			"recombobulatron" : {
				name : "Recombobulatron",
				description : desc([
					"This unusual mechanism appears as a small, magical",
					"toaster oven that sparks and crackles with magic. While",
					"you have the machine on your person, when you prepare",
					"your artificer spells you may prepare any spells from the",
					"wizard spell list, in addition to your ordinary spell list. The",
					"recombobulatron “cooks” your magic, changing its nature",
					"into these new spells.",
					"Additionally, when you use your Spell-Storing Item",
					"feature to store a spell while you hold the recombobulatron,",
					"you may store a 3rd-, 4th-, or 5th-level spell from your spell",
					"lists.",
				]),
				calcChanges : {
					spellList : [
						function(spList, spName, spType) {
						if (!ClassList[spName] || spList.spells || spList.psionic) return;
						if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
						var wizardLvlSpells = CreateSpellList({"class" : "wizard", level : [1,5]}, false, false, false);
							spList.extraspells = spList.extraspells.concat(wizardLvlSpells);
						},
					],
				},
			},	
			"spectrographic polyscope" : {
				name : "Spectrographic Polyscope",
				description : desc([
					"A spectrographic polyscope is an arcanotech eyepiece with",
					"dozens of gemstone lenses, allowing the wearer to calculate,",
					"measure, and examine the environment with unrivaled",
					"precision. The polyscope can be easily integrated into any",
					"headwear or armor. While you wear the polyscope, you",
					"have truesight for as far as you can see and can measure",
					"the exact distance between any two points you can see",
					"(no action required).",
					"Additionally, at the start of each of your turns you can",
					"designate a creature you can see for the scope to analyze.",
					"When you analyze a creature in this manner, you learn its",
					"current hit points, any spells or magic effects it is currently",
					"benefiting from, and any magic items it is carrying.",
					"Finally, if you use a magic item that forces a creature to",
					"make a saving throw with a DC lower than your spell save",
					"DC, you may instead have the item’s DC be your spell",
					"save DC.",
				]),
				vision : [["True Sight", "as far as you can see"]],
			},	
			"transmobile siege machine" : {
				name : "Transmobile Siege Machine",
				description : desc([
					"This fantastic machine is a piece of siege equipment that",
					"folds up into a mechanical backpack for transportation. As",
					"an action you can place the equipment on the ground in an",
					"unoccupied space, which then immediately assembles itself",
					"into its siege machine form. In its siege machine form the",
					"fantastic machine has the following statistics.",
				]),
			},
			"war matrix" : {
				name : "War Matrix",
				description : desc([
					"A thousand weapons packed into a modest clockwork",
					"device, the war matrix ensures that no archanic is unarmed",
					"on the battlefield. While in its default state, the matrix",
					"appears as a shield of interlocking mechanical components",
					"that are ready to fold and reshape at a moment’s notice.",
					"As a bonus action while you hold the war matrix, you can",
					"transform it into a nonmagical simple or martial weapon",
					"of your choice. In addition to its normal properties, the",
					"weapon has the following properties.",
					"• You are proficient in the weapon.",
					"• You cannot be disarmed of the weapon unless the limbs",
					"holding the weapon are removed in the process.",
					"• When you take the Attack action, you may make an",
					"additional attack using the weapon, in addition to the",
					"attacks you would ordinarily make.",
					"• The weapon is magical, and attacks with the weapon",
					"have a +3 bonus to attack and damage rolls.",
				]),
			},	
		},
		"wondrous infusions" : {
			name : "Wondrous Infusions",
			source : ["EL:CC", 127],
			minlevel : 4,
			description : desc([
				"You can infuse both magical and nonmagical items using your Infuse Item feature.", 
				"You can have a number of infused magic items equal to half your archanic",
				"level, rounded down, which count toward the total number of",
				"infused items you are allowed to have.",
			]),
		},
		"subclassfeature1" : {
			name : "Master Specialist",
			source : ["EL:CC", 127],
			minlevel : 6,
			description : desc([
				"Choose a specialism and put it in the 'Class' field on the first page",
				"Choose either alchemist, artillerist, battle smith, or grenadier",
			]),
		},
		"expedient artisan" : {
			name : "Expedient Artisan",
			source : ["EL:CC", 128],
			minlevel : 8,
			description : desc([
				"When you attempt to create an",
				"item, object, or structure that would ordinarily require 2 or more",
				"hours of strenuous activity to complete, you can attempt an Epic",
				"Intelligence ability check with the appropriate tools to reduce the",
				"time required to 1 hour of strenuous activity. The DC of this check",
				"is 30, but the DC increases by 2 for every 8 hours by which you",
				"are attempting to reduce the creation time. On a failure, you must",
				"either spend the ordinary amount of time required or abandon the",
				"attempt to create the item. Once you have used this feature, you",
				"must finish a long rest before you can use it again.",
			]),	
			usages : 1,
			recovery : "long rest",
			addMod : [
					{ type : "", field : "SpellSlots.CheckboxesSet.lvl5", mod : -1, text : ""},
					{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : 1, text : ""},
			],
		},
		"ss9" : {
			name : "",
			source : ["EL:CC", 128],
			minlevel : 9,
			description : desc([
				"",
			]),
			addMod : [
					{ type : "", field : "SpellSlots.CheckboxesSet.lvl6", mod : -1, text : ""},
					{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : 1, text : ""},
			],
		},	
		"grand architect" : {
			name : "Grand Architect",
			source : ["EL:CC", 128],
			minlevel : 10,
			description : desc([
				"When you finish a long rest, you can choose to forget the knowledge",
				"required to build a fantastic machine and learn how to build a new one from the list.", 
				"When you forget how to create a fantastic machine, any versions of that",
				"machine you have currently built become inert and cannot be used",
				"by you until you learn how to build it again.",
			]),
			addMod : [
					{ type : "", field : "SpellSlots.CheckboxesSet.lvl7", mod : -1, text : ""},
			],
		},
	},
};

AddSubClass("archanic", "alchemist", {
	regExpSearch : /^(?=.*(archanic))(?=.*alchemist).*$/i,
	subname : "Alchemist",
	source : ["EL:CC", 127],	
	features : {
		"subclassfeature1" : {
			name : "Alchemist",
			source : ["EL:CC", 127],
			minlevel : 6,
			description : desc([
				"As an Epic alchemist, chemistry and magic is a dangerous combination",
				"you have mastered to an unsettling degree. When you use a",
				"potion or one of your experimental elixers, you can also cast a non-",
				"Epic artificer spell with a casting time of 1 action or 1 bonus action.",
				"The spell must be cast with a spell slot using your Spellcasting",
				"feature and as a part of using the potion or experimental elixer.",
				"Spells cast in this manner only require somatic components (the",
				"act of drinking the potion) and cannot be countered by spells or",
				"magical effects (such as counterspell).",
			]),
			toNotesPage : [{
				name : "Improved Experimental Elixirs",
				note : [
					"Healing : The drinker regrows any missing limbs or apendages.",
					"Swiftness : When the drinker takes the attack action, they may make an additional attack as part of that action for the duration",
					"Resilience : The drinker gains resistance to a damage type of its choice for the duration",
					"Boldness : The drinker is immune to the frightened condition for the duration",
					"Flight : The drinker's fly speed is increased by 50 ft. for the duration",
					"Transformation : The drinker gains proficiency in a saving throw of its choice for the duration",
				],
			}],	
		},
	},	
});

AddSubClass("archanic", "artillerist", {
	regExpSearch : /^(?=.*(archanic))(?=.*artillerist).*$/i,
	subname : "Artillerist",
	source : ["EL:CC", 128],	
	features : {
		"subclassfeature1" : {
			name : "Artillerist",
			source : ["EL:CC", 128],
			minlevel : 6,
			description : desc([
				"You are a masterful engineer on the battlefield and can operate almost",
				"any piece of siege equipment independently. When you take an",
				"action to operate a piece of siege equipment, your action counts for",
				"up to four actions to operate the equipment (such as taking an action",
				"to load, and action to aim, and an action to fire the equipment).",
				"Additionally, when you create an object that is not a magic item,",
				"you can choose to fortify it with your magic. To do so you must",
				"expend one of your artificer spell slots of 1st level or higher, and",
				"the object gains resistance to all damage and adds your proficiency",
				"bonus to any saving throws it makes. This benefit lasts for 24 hours",
				"before the magic fades.",
			]),
		},
	},	
});

AddSubClass("archanic", "battle smith", {
	regExpSearch : /^(?=.*(archanic))(?=.*battle smith).*$/i,
	subname : "Battle Smith",
	source : ["EL:CC", 128],	
	features : {
		"subclassfeature1" : {
			name : "Battle Smith",
			source : ["EL:CC", 128],
			minlevel : 6,
			description : desc([
				"Your mastery of defense and smithing allows you withstand almost",
				"any assault. Iron defenders you create gain the following trait.",
				"Bound. The defender is magically bound to you. As long as you and",
				"the defender are on the same plane of existence, you can telepathically",
				"command (no action required) the defender to take actions of",
				"your choice on its turn, which the defender follows to the best of its",
				"ability. Additionally, if the defender is within 60 feet of you, half of",
				"any damage you take (rounded up) is instead taken by the defender.",
				"Additionally, you have learned how to create a special type of armor",
				"called golem armor (named after its propensity for making its",
				"wearer look like a golem).",
			]),
		},
	},	
});

AddSubClass("archanic", "grenadier", {
	regExpSearch : /^(?=.*(archanic))(?=.*grenadier).*$/i,
	subname : "Grenadier",
	source : ["EL:CC", 128],	
	features : {
		"subclassfeature1" : {
			name : "Grenadier",
			source : ["EL:CC", 128],
			minlevel : 6,
			description : desc([
				"The knowledge and resources to make the most catastrophic of",
				"explosions is at your disposal. You can create plutgnomium explosive",
				"material which can be used to create demolition charges with",
				"your Tools of The Trade feature. The details of creating plutgnomium",
				"are detailed in the Epic Fragtology Materials table.",
				"Additionally, you learn how to create a dangerous and powerful",
				"fantastic machine, a trifusion giga-bomb. This fantastic machine—",
				"which only an Epic grenadier would dare build—does not",
				"count against the number of fantastic machine schematics you",
				"can know.",
			]),
			toNotesPage : [{
				name : "Epic Fragtology Materials",
				note : [
					"Plutgnomium, Archanic Level 26, Crafting DC 36, Development Cost 5,000 gp, 20d6 arcane damage",
				],
			}],	
			extraname : "Fantastic Machines",
			extrachoices : ["Trifusion Giga-Bomb"],
			extraTimes : 1,
			autoSelectExtrachoices : [{ extrachoice : "trifusion giga-bomb" }],
			"trifusion giga-bomb" : {
				name : "Trifusion Giga-Bomb",
				description : desc([
					"A trifusion giga-bomb is a weapon of mass destruction",
					"forged from unstable matter and chaotic energy. A gigabomb",
					"is a small object which always emits an ominous",
					"ticking. As an action, you can activate the giga-bomb,",
					"which begins a loud countdown in a language of your",
					"choice. The countdown starts from an amount of time you",
					"decide, up to a maximum of 1 hour. You (and only you)",
					"can stop the countdown by taking an action to deactivate",
					"the bomb. When the countdown reaches zero, the bomb",
					"explodes, destroying itself and emitting a 100-foot-radius",
					"sphere of arcane energy. Creatures in that area must",
					"succeed on a Constitution saving throw versus your spell",
					"save DC or take 40d10 arcane damage, or half as much on",
					"a success. Additionally, objects and structures in the area",
					"take 40d10 arcane damage. Magical objects and structures",
					"instead take half damage. For every 5 minutes the bomb",
					"counts down, the radius of the sphere when it explodes",
					"increases by 100 feet.",
					"The explosion shatters planar space, leaving behind",
					"an empty void that has no properties (such as gravity)",
					"nor matter that was unable to survive the explosion. This",
					"damage slowly repairs over time, at a rate of 100 cubic feet",
					"per year.",
				]),
			},	
		},
	},	
});

ArmourList["golem armor"] = {
	regExpSearch : /golem/i,
	name : "Golem Armor",
	source : [["EL:CC", 128]],
	type : "heavy",
	ac : 21,
	stealthdis : true,
	weight : 250,
	strReq : 19,
	invName : "Golem armor",
},	

WeaponsList["arcanotech proto-rifle"] = {
	name : "Arcanotech Proto-Rifle",
	source : [["EL:CC", 129]],
	regExpSearch : /^(?=.*arcanotech proto-rifle).*$/i,
	type : "Magical",
	ability : 2,
	abilitytodamage : true,
	damage : [5, 10, "piercing"],
	range : "400/800 ft",
	description : "loading, two-handed +5d10 choice (acd,cld,fir,ltn,poi,thu)", 
	monkweapon : false,
	list : "ranged",
	weight : 3,
};
