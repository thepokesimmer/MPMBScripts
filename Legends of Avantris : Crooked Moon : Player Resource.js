var iFileName = "LA:CM:PR";
RequiredSheetVersion("13.2.3");
SourceList["LA:CM:PR"] = {
  name: "Legends of Avantris : Crooked Moon : Player Resource",
  abbreviation: "LA:CM:PR",
  abbreviationSpellsheet: "CM",
  group: "Legends of Avantris",
};
//Species
RaceList.ashborn = {
	regExpSearch : /ashborn/i,
	name : "Ashborn",
	source : [["LA:CM:PR", 3]],
	plural : "Ashborn",
	size : 4,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", 2],
	vision : [["Darkvision", 60]],
	action : [["reaction", "Fiendish Fortune"]],
	extraLimitedFeatures : [{
		name : "Venomous Sting",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}, {
		name : "Fiendish Fortune",
		usages : 1,
		recovery : "short rest",
	}, {
		name : "Charm Person",
		usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		altresource : "SS 1+",
		recovery : "long rest",
	}, {
		name : "Invisibility",
		usages : [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		altresource : "SS 2+",
		recovery : "long rest",
	}],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /scorpion sting/i,
		name : "Scorpion Sting",
		source : [["LA:CM:PR", 2]],
		ability : [1, 2],
		damage : [1, 4, "Piercing"],
		description : "On a hit, you can cause the target makes a Con save DC=8+Con+Prof, on fail 1d6 Poison dmg, 2d6 at 10th level;",
	},
	weaponsAdd : ["Scorpion Sting"],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name : "Ashen Legacy",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		times : 1,
		firstCol : "atwill",
	  }, {
		name : "Ashen Legacy",
		spells : ["charm person"],
		selection : ["charm person"],
		times : levels.map( function(n) {
			return n < 3 ? 0 : 1;
		}),
		firstCol : "oncelr",
	  }, {
		name : "Ashen Legacy",
		spells : ["invisibility"],
		selection : ["invisibility"],
		times : levels.map( function(n) {
			return n < 5 ? 0 : 1;
		}),
		firstCol : "oncelr",
	  }],
	trait : "Ashborn (my creature type is Fiend)" +
		"\n \u2022 Darkvision: 60 ft." +
		"\n \u2022 Scorpion Sting: You have a natural weapon of a Scorpion Sting that deals 1d4 + Str/Dex Piercing damage, when you make a Sting attack and hit you can cause the Target to makes a Con save (DC = 8 + Con + Prof) dealing an extra 1d6(2d6 at 10th level) Poison damage on a failes save, you can do this extra Poison damage a number of times equal to your Proficiency Bonus." +
		"\n \u2022 Fiendish Fortune: Once per Short/Long rest, as a Reaction when hit by a non-crit attack you can cause the attack to miss you and a creature of your choice within 5 feet takes Force damage equal to your Prof Bonus." +
		"\n \u2022 Ashen Lineage: You gain the Minor Illusion cantrip. You learn Charm Person at level 3 & Invisibility at level 5; These spells are always Prepared & you can cast them without a spell slot once each per Long Rest or use Spell Slots; Int, Wis, or Cha is your spellcasting ability. (Choose the ability with the lineage)"
};
RaceList.azureborn = {
	regExpSearch : /azureborn/i,
	name : "Azureborn",
	source : [["LA:CM:PR", 4]],
	plural : "Azureborn",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : "walk" },
	},
	languageProfs : ["Common", 2],
	vision : [["Darkvision", 60]],
	action : [["bonus action", "Winds of Magic (Dash)"]],
	extraLimitedFeatures : [{
		name : "Winds of Magic",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}, {
		name : "Glimpse Fate",
		usages : 1,
		recovery : "short rest",
	}, {
		name : "Augury",
		usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		altresource : "SS 2+",
		recovery : "long rest",
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name : "Azure Legacy",
		spells : ["guidance"],
		selection : ["guidance"],
		times : 1,
		firstCol : "atwill",
	  }, {
		name : "Azure Legacy",
		spells : ["augury"],
		selection : ["augury"],
		times : levels.map( function(n) {
			return n < 3 ? 0 : 1;
		}),
		firstCol : "oncelr",
	  }],
	trait : "Azureborn (my creature type is Humanoid)" +
		"\n \u2022 Darkvision: 60 ft." +
		"\n \u2022 Winds of Magic: As a Bns A, you can take the Dash action and increase your Fly Speed by 10 feet until the end of the turn. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest." +
		"\n \u2022 Glimpse Fate: Once per Short/Long rest, when you roll Initiative, but are not surprised, you can choose a number of creatures equal to your Prof Bonus. The targets have Advantage on the Initiative rolls." +
		"\n \u2022 Azure Lineage: You gain the Guidance cantrip. You learn Augury at level 3; These spells are always Prepared & you can cast them without a spell slot once each per Long Rest or use Spell Slots; Int, Wis, or Cha is your spellcasting ability. (Choose the ability with the lineage)"
};
RaceList.bogborn = {
	regExpSearch : /bogborn/i,
	name : "Bogborn",
	source : [["LA:CM:PR", 5]],
	plural : "Bogborn",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	skillstxt: "Choose one between Perception, or Survival",
	vision : [["Darkvision", 60]],
	savetxt: {text: ["Adv. on Ability Checks vs. ending the Grappled condition; "]},
	action : [["bonus action", "Guiding Bond"], ["bonus action", "Regeneration"]],
	extraLimitedFeatures : [{
		name : "Guiding Bond",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	carryingCapacity: 2,
	trait : "Bogborn (my creature type is Giant)" +
		"\n \u2022 Darkvision: 60 ft." +
		"\n \u2022 Bog Bulk: You have Advantage on any ability check you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity." +
		"\n \u2022 Guiding Bond: As a Bonus Action, you can magically place a mark on a creature you can see within 60 feet of yourself. The mark lasts for 1 minute, and takes the form of ephemeral plants, moss, fungus, or swamp animals that only you can see. For the duration, you can add 1d4 to ability checks and attack rolls you make against the marked creature. You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest." +
		"\n \u2022 Keen Senses: You have proficiency in the Perception or Survival skill." +
		"\n \u2022 Regeneration: As a Bonus Action, you can expend one of your Hit Point Dice, roll the die, and regain a number of Hit Points equal to the number rolled plus your Constitution modifier (minimum of 1 Hit Point). If you take Acid or Fire damage, this trait doesn't function until the end of your next turn."
};
RaceList.curseborn = {
	regExpSearch : /curseborn/i,
	name : "Curseborn",
	source : [["LA:CM:PR", 6]],
	plural : "Curseborn",
	size : 3,
	speed : { 
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", 2],
	skillstxt: "Choose one between Investigation, Perception, or Survival",
	vision : [["Darkvision", 60]],
	action : [["reaction", "Grey Balance"]],
	extraLimitedFeatures : [{
		name : "Curse (Cursed Claws)",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}, {
		name : "Grey Balance",
		usages : 1,
		recovery : "long rest",
	}],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /cursed claws/i,
		name : "Cursed Claws",
		source : [["LA:CM:PR", 6]],
		ability : [1, 2],
		damage : [1, 6, "Slashing"],
		description: "On Hit, can curse target (see Racial Traits)",
	},
	trait : "Curseborn (my creature type is Humanoid)" +
		"\n \u2022 Darkvision: 60 ft." +
		"\n \u2022 Cursed Claws: You have claws you can use to make Unarmed Strikes, which deal 1d6 Slashing damage on a hit. You can use Strength or Dexterity for attack and damage rolls with your claws. When you hit a creature with your claws, you can curse the target until the start of your next turn. While cursed, the target emits wisps of fog and has Disadvantage on D20 Tests. You can curse a creature a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest." +
		"\n \u2022 Grey Balance: When you fail a saving throw, you can take a Reaction to succeed instead. When you do, you have Disadvantage on D20 Tests until the end of your next turn. You can use this trait once, and you regain the ability to do so when you finish a Long Rest." +
		"\n \u2022 Lupine Senses: You have proficiency in the Investigation, Perception, or Survival skill."
};
RaceList.deepborn = {
	regExpSearch : /deepborn/i,
	name : "Deepborn",
	source : [["LA:CM:PR", 7]],
	plural : "Deepborn",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : "walk" },
	},
	languageProfs : ["Deep Speech", "Common", 2],
	vision : [["Darkvision", 60]],
	action : [["action", "Eldritch Gibbering"], ["bonus action", "Endless Hunger"]],
	extraLimitedFeatures : [{
		name : "Endless Hunger",
		usages : 1,
		recovery : "short rest",
	}],
	trait : "Deepborn (my creature type is Aberration)" +
		"\n \u2022 Darkvision: 60 ft." +
		"\n \u2022 Amphibious: You can breathe air and water." +
		"\n \u2022 Eldritch Gibbering: Thanks to your eldritch connection to the Hungering Ones, you speak Deep Speech. As a Magic action, you can gibber in that language. Each creature of your choice in a 30-foot Emanation originating from you must succeed on a Wisdom saving throw (DC 8 plus your Proficiency Bonus and Intelligence, Wisdom, or Charisma modifier; choose the ability when you select this species) or roll a d6 and consult the table below. The effect lasts until the start of your next turn. Once any target fails its save against this trait, you can’t use it again until you finish a Short or Long Rest. 1-2 The target has Disadvantage on attack rolls. 3-4 The target's Speed becomes 0. 5-6 The target can't take Reactions." +
		"\n \u2022 Endless Hunger: As a Bonus Action, you can embrace your connection to the Hungering Ones. Until the start of your next turn, you know the location of any creatures that aren’t Constructs or Undead within 60 feet of yourself, and your attack rolls against those creatures can’t have Disadvantage. Once you use this trait, you can’t use it again until you finish a Short or Long Rest."
};
RaceList.gnarlborn = {
	regExpSearch : /gnarlborn/i,
	name : "Gnarlborn",
	source : [["LA:CM:PR", 8]],
	plural : "Gnarlborn",
	size : 3,
	savetxt : { text : [ "Adv. vs checks and saves against being moved against will or Grapled and Prone conditions; " ], },
	speed : { 
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	vision : [["Tremorsense", 60]],
	action : [["bonus action", "Root Sense"], ["bonus action", "Grasping Branches"]],
	extraLimitedFeatures : [{
		name : "Grasping Branches",
		usages : 1,
		recovery : "short rest",
	}, {
		name : "Root Sense",
		usages : 1,
		recovery : "short rest",
	}],
	carryingCapacity: 2,
	trait : "Gnarlborn (my creature type is Plant)" +
		"\n \u2022 Deep Roots: You have Advantage on ability checks and saving throws against being moved against your will or to avoid the Prone condition." +
		"\n \u2022 Elderwood Whispers: You can draw on the memory of the Elderwood spirits. When you finish a Long Rest, you gain proficiency with a skill, a tool, or learn one language of your choice until you next finish a Long Rest." +
		"\n \u2022 Grasping Branches: As a Bonus Action, you can magically unleash the binding power of the dark wood. Choose a Large or smaller creature within 30 feet of yourself. The creature must make a Strength saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, the target has the Restrained condition for 1 minute as branches appear and ensnare it. On a successful save, its Speed is halved until the end of its next turn. A Restrained creature repeats the save at the end of each of its turns, ending the effect on itself on a success. The branches vanish when the condition ends. Once you use this trait, you can’t do so again until you finish a Short or Long Rest." +
		"\n \u2022 Root Sense: As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. Once you use this trait, you can’t do so again until you finish a Short or Long Rest." +
		"\n \u2022 Towering Size: You have Advantage on any ability check you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity."
};
RaceList.graveborn = {
	regExpSearch : /graveborn/i,
	name : "Graveborn",
	source : [["LA:CM:PR", 9]],
	plural : "Graveborn",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	dmgres : ["Cold"],
	vision : [["Darkvision", 60]],
	extraLimitedFeatures : [{
		name : "Infused Drakkonite",
		usages : "1",
		recovery : "short rest",
	}, {
		name : "Devour Corpse",
		usages : 1,
		recovery : "short rest",
	}],
	trait : "Graveborn (my creature type is Undead)" +
		"\n \u2022 Darkvision: 60 ft." +
		"\n \u2022 Devour Corpse: You can eat spoiled and rotten food as if it were fresh. Additionally, if you spend 1 minute eating flesh from the corpse of a Small or larger creature that isn’t a Construct, roll one of your Hit Point Dice without expending it (even if you have none remaining). You regain a number of Hit Points equal to the number rolled plus your Constitution modifier (minimum of 1 Hit Point). Once you regain Hit Points using this trait, you can’t do so again until you finish a Short or Long Rest." +
		"\n \u2022 Frozen Waste: You have Resistance to Cold damage." +
		"\n \u2022 Infused Drakkonite: When you damage a creature, you can ignore any Resistances it has, and it takes extra Necrotic damage equal to your Proficiency Bonus. Once you use this trait, you can’t do so again until you finish a Short or Long Rest."
};
RaceList.harvestborn = {
	regExpSearch : /harvestborn/i,
	name : "Harvestborn",
	source : [["LA:CM:PR", 10]],
	plural : "Harvestborn",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	action : [["bonus action", "Heal (Gift of the Green"]],
	extraLimitedFeatures : [{
		name : "Culling",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}, {
		name : "Gift of the Green",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name : "Jack-O-Lantern",
		spells : ["dancing lights"],
		selection : ["dancing lights"],
		times : 1,
		firstCol : "atwill",
	}],
	trait : "Harvestborn (my creature type is Construct)" +
		"\n \u2022 Culling: When you damage a Bloodied creature, you can deal an extra 1d12 Necrotic damage to it. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest." +
		"\n \u2022 Gift of the Green: As a Bonus Action, you can touch the ground and choose a creature also touching the ground within 30 feet of yourself. That creature can expend and roll one Hit Point Die, and it regains a number of Hit Points equal to the number rolled plus your Proficiency Bonus. You can use this trait a number of times equal to your Proficiency Bonus. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest." +
		"\n \u2022 Jack-O-Lantern: You know the Dancing Lights cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose the ability when you select this species)." +
		"\n \u2022 Scarecrow Nature: You don’t require air, food, or drink." +
		"\n \u2022 Watchful Rest: You don’t need to sleep, and magic can't put you to sleep. Moreover, you can finish a Long Rest in 4 hours if you spend those hours in an inactive, motionless state, during which you retain consciousness."
};
RaceList.plagueborn = {
	regExpSearch : /plagueborn/i,
	name : "Plagueborn",
	source : [["LA:CM:PR", 11]],
	plural : "Plagueborn",
	size : [3, 4],
	speed : { 
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : "walk" },
	},
	savetxt : { text : ["Adv. vs saves against Poisoned Condition and magical Contagions"], },
	languageProfs : ["Common", 2],
	skills : ["Deception", "Stealth"],
	vision : [["Darkvision", 60]],
	extraLimitedFeatures : [{
		name : "Plague Bearer",
		usages : 1,
		recovery : "long rest",
	}],
	trait : "Plagueborn (my creature type is Humanoid)" +
		"\n \u2022 Darkvision: 60 ft." +
		"\n \u2022 Born in Filth: You have Advantage on saving throws to avoid or end the Poisoned condition or magical contagions." +
		"\n \u2022 Infected Cunning: The plague you carry binds you to rats and imparts their cunning. You gain proficiency in the Deception or Stealth skill." +
		"\n \u2022 Plague Bearer: When you hit a creature with an attack roll, you can spread your magical contagion to the target. The target must succeed on a Constitution saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus) or become afflicted with your plague for 1 minute. While afflicted, the target has Disadvantage on attack rolls and ability checks and takes 1d4 Poison damage at the start of each of its turns. The target repeats the save at the end of each of its turns, ending the plague on itself on a success. Once you use this trait, you can’t do so again until you finish a Long Rest."
};
RaceList.relicborn = {
	regExpSearch : /relicborn/i,
	name : "Relicborn",
	source : [["LA:CM:PR", 12]],
	plural : "Relicborn",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 }
	},
	skills : ["Performance"],
	toolsProfs : ["Musical Instrument", 1],
	languageProfs : ["Common", 2],
	action : [["bonus action", "Dance of Death"], ["reaction", "Moment of Remembrance"]],
	extraLimitedFeatures : [{
		name : "Moment of Remembrance (Success)",
		usages : 1,
		recovery : "short rest",
	}],
	trait : "Relicborn (my creature type is Undead)" +
		"\n \u2022 Dance of Death: As a Bonus Action, you can make a DC 15 Charisma (Musical Instrument or Performance) check. If you succeed, the next attack roll you make before the end of your turn has Advantage. If you succeed on the check by 5 or more, you can roll one of your Hit Point Dice (without expending it) and gain Temporary Hit Points equal to the number rolled." +
		"\n \u2022 Eternal Party: You don’t need to sleep, and you can finish a Long Rest in 4 hours if you spend those hours enjoying revelry, such as telling stories or playing music." +
		"\n \u2022 Moment of Remembrance: When another creature you can see within 30 feet of you fails a D20 Test, you can take a Reaction to let the target add 1d4 to the total, potentially causing it to succeed. Once this trait changes a failed roll into a success, you can’t use it again until you finish a Short or Long Rest." +
		"\n \u2022 Soul of Revelry: You don’t require air, food, or drink." +
		"\n \u2022 Watchful Rest: You gain proficiency in the Performance skill or with one kind of Musical Instrument."
};
RaceList.silkborn = {
	regExpSearch : /silkborn/i,
	name : "Silkborn",
	source : [["LA:CM:PR", 13]],
	plural : "Silkborn",
	size : 3,
	speed : { 
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : "walk" },
	},
	languageProfs : ["Common", 2],
	vision : [["Darkvision", 60]],
	extraLimitedFeatures : [{
		name : "Bejeweled Carapace",
		usages : 1,
		recovery : "short rest",
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name : "Silken Legacy",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		times : 1,
		firstCol : "atwill",
	  }, {
		name : "Silken Legacy",
		spells : ["find familiar"],
		selection : ["find familiar"],
		times : levels.map( function(n) {
			return n < 3 ? 0 : 1;
		}),
		firstCol : "oncelr",
	  }, {
		name : "Silken Legacy",
		spells : ["web"],
		selection : ["web"],
		times : levels.map( function(n) {
			return n < 5 ? 0 : 1;
		}),
		firstCol : "oncelr",
	  }],
	trait : "Silkborn (my creature type is Humanoid)" +
		"\n \u2022 Darkvision: 60 ft." +
		"\n \u2022 Bejeweled Carapace: When you are hit with an attack roll, you can take a Reaction to add your Proficiency Bonus to your AC against that attack, potentially causing it to miss. Once you use this trait, you can’t do so again until you finish a Short or Long Rest." +
		"\n \u2022 Silken Legacy: You know the Thaumaturgy cantrip. Starting at character level 3, you always have the Find Familiar spell (the familiar takes the form of a jeweled insect or arachnid) prepared, and starting at character level 5, you always have the Web spell prepared. You can cast each spell once without a spell slot or Material components. You regain the ability to cast them in that way when you finish a Long Rest. You can also cast either spell using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select this species)." +
		"\n \u2022 Spider Climb: You can climb difficult surfaces, including along ceilings, without needing an ability check and while leaving your hands free."
};
RaceList.stoneborn = {
	regExpSearch : /stoneborn/i,
	name : "Stoneborn",
	source : [["LA:CM:PR", 14]],
	plural : "Stoneborn",
	size : [3, 4],
	speed : { 
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : "walk" },
	},
	skillstxt : "You gain proficiency in the Insight, Perception, or Survival skill",
	languageProfs : ["Common", 2],
	action : [["bonus action", "Argent Gleam (Bless or Dash)"], ["reaction", "Silver Bulwark"]],
	extraLimitedFeatures : [{
		name : "Argent Gleam",
		usages : 1,
		recovery : "long rest",
	}, {
		name : "Silver Bulwark",
		usages : 1,
		recovery : "short rest",
	}],
	trait : "Stoneborn (my creature type is Construct)" +
		"\n \u2022 Argent Gleam: As a Bonus Action, you can channel a mote of the Silver Path's light with your choice of one of the following options:\n-Path’s Grace: You cast the Bless spell, requiring no Material components.\n-Zealous Charge: You take the Dash action. The first time you make an attack roll before the end of your turn, on a hit or miss, the target takes an extra 2d6 Radiant damage.\nOnce you use this trait’s Bonus Action, you can’t do so again until you finish a Long Rest." +
		"\n \u2022 Silver Bulwark: You can call upon the Silver Path to protect you. When you take Bludgeoning, Piercing, or Slashing damage, you can take a Reaction to gain Resistance to those three damage types until the start of your next turn. Once you use this trait, you can’t do so again until you finish a Short or Long Rest." +
		"\n \u2022 Watchful Senses: You gain proficiency in the Insight, Perception, or Survival skill."
};
RaceList.threadborn = {
	regExpSearch : /threadborn/i,
	name : "Threadborn",
	source : [["LA:CM:PR", 15]],
	plural : "Threadborn",
	size : [3, 4],
	speed : { 
		walk : { spd : 30, enc : 20 },
	},
	dmgres : ["Psychic"],
	languageProfs : ["Common", 2],
	action : [["reaction", "You've Got a Friend"]],
	extraLimitedFeatures : [{
		name : "You've Got a Friend",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name : "Soothing Heart",
		spells : ["guidance"],
		selection : ["guidance"],
		times : 1,
		firstCol : "atwill",
	  }, {
		name : "Soothing Heart",
		spells : ["sanctuary"],
		selection : ["sanctuary"],
		times : levels.map( function(n) {
			return n < 3 ? 0 : 1;
		}),
		firstCol : "oncelr",
	  }, {
		name : "Soothing Heart",
		spells : ["calm emotions"],
		selection : ["calm emotions"],
		times : levels.map( function(n) {
			return n < 5 ? 0 : 1;
		}),
		firstCol : "oncelr",
	  }],
	trait : "Threadborn (my creature type is Construct)" +
		"\n \u2022 Ball Jointed: You can move through a space as narrow as 1 foot wide as if it were Difficult Terrain." +
		"\n \u2022 Innocent Mind: You have Resistance to Psychic damage." +
		"\n \u2022 Sewn Nature: You don’t require air, food, or drink." +
		"\n \u2022 Soothing: You know the Guidance cantrip. Starting at character level 3, you always have the Sanctuary spell prepared, and starting at character level 5, you always have the Calm Emotions spell prepared. You can cast each spell once without a spell slot. When you cast Calm Emotions in this way, it can target creatures of any type. You regain the ability to cast them using this trait when you finish a Long Rest. You can also cast either spell using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select this species)." +
		"\n \u2022 You've Got a Friend: When a creature you can see within 30 feet of yourself fails an ability check using a skill, you can take a Reaction to cast Guidance on the creature, ignoring the spell's normal range. The creature can add the spell's 1d4 to its ability check, potentially causing it to succeed, then the spell ends. You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
};
//Subclasses
AddSubClass("barbarian", "experiment", {
	regExpSearch : /^(?=.*(barbarian))(?=.*(experiment)).*$/i,
	subname : "Path of the Experiment",
	source : [["LA:CM:PR", 18]],
	features: {
		"subclassfeature3" : {
			name : "Alchemical Experiments",
			source : [["LA:CM:PR", 18]],
			minlevel : 3,
			toolProfs : "Alchemist's Supplies",
			description : desc([
				"I gain a set of Alchemist's Supplies and proficiency in their use. Additionally I can use Alchemist's Supplies instead of an Herbalism Kit to craft Potions of Healing."
			]),
		},
		"subclassfeature3.1" : {
			name : "Volatile Serum",
			source : [["LA:CM:PR", 18]],
			minlevel : 3,
			action : [["bonus action", "Change Serum (While Raging)"]],
			toNotesPage : [{
				name : "Volatile Serums",
				note : [
					"	Ferocity: This serum throws me into an energized frenzy. I ignore Difficult Terrain, and when I hit with a Melee weapon or Unarmed Strike, I can activate the Cleave mastery property in addition to a different mastery property I'm using.",
					"	Monstrosity: The serum expands my body to monstrous proportions and can change my appearance in cosmetic ways, such as by altering facial features, skin tone, and hair length or color. My reach increases by 5 feet, and once per turn when I miss with an attack roll that relies on Strength, I can add my Rage Damage bonus to the total, potentially causing the attack to hit. If I am smaller than Large, I become Large, along with anything I am wearing or carrying. If there isn't enough room to accommodate the size change, my size doesn't change.",
					"	Reconstruction: The serum dulls pain and forces wounds to rapidly knit. Upon activation and at the start of each of my turns, I can expend and roll a Hit Point Die. I regain a number of Hit Points equal to the number rolled plus my Constitution modifier (minimum of 1 Hit Point). I gain any excess beyond my Hit Point maximum as Temporary Hit Points. If I take Acid or Fire damage, this serum doesn't function at the start of my next turn.",
				],
			}],
			description : desc([
				"When I enter my Rage I choose one serum to inject myself with and gain its benefit, this benefit lasts while my rage is active, or until I choose a new serum as a Bonus Action. (See Notes Page)."
			]),
		},
		"subclassfeature6" : {
			name : "Augmentation Compounds",
			source : [["LA:CM:PR", 19]],
			minlevel : 6,
			toNotesPage : [{
				name : "Augmentation Compounds",
				note : [
					"	Stimulated Senses: I gain Blindsight out to a range of 30 feet. If I already have Blindsight, its range increases by 30 feet.",
					"	Maddening Fumes: My skin emeits aggression-spiked fumes in a 30-foot Emanation. While in the Emanation, an enemy's Speed is halved, and if it starts its turn there it must succeed on a Wisdom saving throw (DC 8 plus my Constitution modifier and Proficiency Bonus) or have Disadvantage on attack rolls agains targets other than me until the start of its next turn.",
					"	Corrosive Expulsion: When I take the Attack action on my turn, I can replace of of the attacks with a spray of caustic chemicals from my implants in a 15-foot Cone, or a 30-Foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). Roll a number of d8s equal to your Rage Damage bonus. On a failed save, a target takes Acid damage to the total rolled, or half as much damage on a successful one.",
				],
			}],
			description : desc([
				"When I enter my Rage I choose one compound to inject myself with, in addition to my serum, this follows the same rules as my Volatile Serum (See Notes Page)."
			]),
		},
		"subclassfeature10" : {
			name : "Reactive Catalyst",
			source : [["LA:CM:PR", 19]],
			minlevel : 10,
			savetxt : { text : ["End Blinded, Deafened, Poisoned or Stunned when Entering Rage; Adv. vs Con saves (While Raging); "], },
			action : ["reaction", "Rage (Reactive Catalyst)"],
			description : desc([
				"When I take damage, or when I gain the Blinded, Deafened, Poisoned, or Stunned conditions, I can take a Reaction to enter my Rage before the damage or conditions are applied. When I enter my Rage, I end any of those conditions on myself, including any triggering conditions. Additionally, while my Rage is active, I have Adv. on Con saves."
			]),
		},
		"subclassfeature14" : {
			name: "Biochemical Admixture",
			source: [["LA:CM:PR", 19]],
			minlevel: 14,
			action: "action",
			usages: 1,
			recovery: "long rest",
			description: desc([
				"When I activate an option of my Volatile Serum, I activate two options instead of one. Additionally, when a crea. w/i 5 ft. of me damages me with a melee attack while my Rage is active, the crea. takes 1d12 Acid dmg. A crea. can take this dmg only once per turn."
			]),
		},
	},
});
AddSubClass("bard", "whistles", {
	regExpSearch : /^(?=.*(bard))(?=.*(whistles)).*$/i,
	subname : "College of Whistles",
	source : [["LA:CM:PR", 20]],
	features : {
		"subclassfeature3": {
			name: "Handy Haints",
			source: [["LA:CM:PR", 20]],
			minlevel: 3,
			action : [["reaction", "Handy Haints"]],
			toNotesPage : [{
				name : "Handy Haints",
				note : [
					"	Grump: This red-tinged, elderly spirit dressed in threadbare rags threatens my foes and harangues my allies to do better. The inspired creature and its allies within the aura have Advantage on Charisma (Intimidation) checks and Strength saving throws. In addition, when a creature inside the aura deals damage, I can take a Reaction to increase the damage dealt to one target by a roll of my Bardic Inspiration die plus my Charisma modifier.",
					"	Sad Sack: The blueish, melancholic spirit saps the fervor from your foes. The inspired creature and its allies within the aura have Half Cover against ranged attacks. In addition, when a creature inside the aura takes damage, I can take a Reaction to reduce the damage taken by an amount equal to a roll of my Bardic Inspiration die plus my Charisma modifier.",
					"	Scamp: The gold-hued, childlike spirit delights and invigorates my allies. When the inspired creature or its allies starts a turn in the aura, that creature's Speed increases by 10 feet until the end of its next turn. In addition, when a creature inside the aura fails a saving throw, I can take a Reaction to let the creature reroll the d20.",
				],
			}],
			description: desc([
				"When I inspire a creature with Bardic Inspiration, I summon a ghostly apparition that drifts around the inspired target. The haint creates an aura in a 15-foot Emanation from the target and disappears after 1 minute, when I summon a new haint, when I use the Reaction it grants me, or if I have the Incapacitated condition or die. When summoned I choose its form (see notes page).",
			]),
		},
		"subclassfeature3.1": {
			name: "Whistling Wanderer",
			source: [["LA:CM:PR", 21]],
			minlevel: 3,
			description: desc([
				"Wanderer's Bindle: When I finish a Long Rest, I can touch a nonmagical bag, sack, or similar and magically transform it into a container that functions as a Handy Haversack, if I create a second bindle, I die, or I am more than 1 mile from my bindle it loses its magic and anything inside appears in an unoccupied space nearby it.\nWhistled Spells: I can whistle in place of Verbal components for my Bard spells, observers must make a DC 15 Int (Arcana) check to recognize my whistling as spellcasting.",
			]),
		},
		"subclassfeature6" : {
			name : "Homeward Bound",
			source : [["LA:CM:PR", 21]],
			minlevel : 6,
			extraLimitedFeatures : [{
				name : "Marked Locations",
				usages : "Charisma modifier per ",
				usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
				recovery : "unmark",
			}, {
				name : "Homeward Bound",
				usages : 1,
				recovery : "long rest",
			}],
			spellcastingBonus : [{
				name : "Homeward Bound",
				spells : ["teleportation circle"],
				selection : ["teleportation circle"],
				times : levels.map( function(n) {
					return n < 9 ? 0 : 1;
				}),
				prepared : true,
			}],
			description : desc([
				"When I finish a Long Rest, I can physically mark a location. After marking a location I can use this feature to cast Teleportation Circle, Once per Long Rest, to summon a Phantom Train, which whisks away any creatures who enter the circle to one of my marked locations. I can mark a number of locations equal to my Charisma modifier (minimum of 1). If I mark a location beyond my maximum, one of my previous marks of choice fades, at 9th level, I always have Teleportation Circle prepared.",
			]),
		},
		"subclassfeature6.1" : {
			name : "Ride the Rails",
			source : [["LA:CM:PR", 21]],
			minlevel : 6,
			usages : 1,
			recovery : "long rest",
			altresource : "SS 3+",
			action : [["action", "Ride the Rails"]],
			description : desc([
				"As a Magic action, I can summon a spectral locomotive that myself and up to six willing creatures can hitch a ride on. The locomotive hurtles forward in a 120-foot-line, 10-foot-wide, and passes through objects and crea. When I hitch a ride, I can teleport to an unoccupied space of my choice along the line, crea. who accompany me appear in the closest unoccupied spaces to me. Any other crea. in the line must make a Wis save, or be Deafened until the start of my next turn, be pushed up to 10 feet away from the line's point of origin, and take an amount of Psy dmg. equal to three rolls of my BI die. I can use this feature once per long rest, unless I expend a level 3+ spell slot to restore my use of it.",
			]),
		},
		"subclassfeature14" : {
			name : "Last Stop",
			source : [["LA:CM:PR", 21]],
			minlevel : 14,
			action : [["action", "Last Stop"]],
			usages : 1,
			recovery : "long rest",
			altresource : "SS 7+",
			description : desc([
				"As a Magic action, I blow a whistle that is audible up to 300 ft away. Up to six creatures of my choie that I can see within range must make a Cha save or be Cursed. When a cursed target takes Psy dmg, it has the Frightened condition toward the source of the dmg until the end of its next turn. The furst time a Cursed target takes Psy dmg, it has Vulnerability to Psy dmg. The target repeats the save at the end of each turn, ending the effect on a success, or after 1 min, it auto-succeeds. I can use this feature once per long rest, unless I expend a level 7+ spell slot to restore my use of it.",
			]),
		},
	},
});
AddSubClass("cleric", "harvest", {
	regExpSearch: /^(?=.*(cleric))(?=.*(harvest)).*$/i,
	subname: "Harvest Domain",
	source: [["LA:CM:PR", 22]],
	features: {
		"subclassfeature3" : {
			name : "Community Almanac",
			source : [["LA:CM:PR", 22]],
			minlevel : 3,
			toolProfs : "Herbalism Kit",
			skillstxt : "I gain proficiency in the Nature or Survival skill",
			description : desc([
				"I gain an Herbalism Kit, and I have proficiency with it. I also gain proficiency in the Nature or Survival skill.",
			]),
		},
		"subclassfeature3.1" : {
			name : "Harvest Domain Spells",
			source : [["LA:CM:PR", 22]],
			minlevel : 3,
			choices : ["Sowing", "Growing", "Reaping"],
			"sowing" : {
				name : "Sowing Harvest Domain Spells",
				spellcastingExtra: ["druidcraft", "goodberry", "lesser restoration", "harvest moonglow", "death ward", "awaken"],
				description : desc([
					"When I finish a Short or Long Rest, I choose an aspect of the Harvest cycle and gain a set of Prepared spells associated with that cycle. Use 'Choose Feature' button to select the aspect of the Harvest Cycle you wish to embody.",
				]),
			},
			"growing" : {
				name : "Growing Harvest Domain Spells",
				spellcastingExtra: ["guidance", "entangle", "summer winds", "plant growth", "sanctum of the shepard", "mass cure wounds"],
				description : desc([
					"When I finish a Short or Long Rest, I choose an aspect of the Harvest cycle and gain a set of Prepared spells associated with that cycle. Use 'Choose Feature' button to select the aspect of the Harvest Cycle you wish to embody.",
				]),
			},
			"reaping" : {
				name : "Reaping Harvest Domain Spells",
				spellcastingExtra: ["chill touch", "inflict wounds", "hold person", "culling sickle", "consuming pyre", "field of reaping"],
				description : desc([
					"When I finish a Short or Long Rest, I choose an aspect of the Harvest cycle and gain a set of Prepared spells associated with that cycle. Use 'Choose Feature' button to select the aspect of the Harvest Cycle you wish to embody.",
				]),
			},
			description : desc([
				"When I finish a Short or Long Rest, I choose an aspect of the Harvest cycle and gain a set of Prepared spells associated with that cycle. Use 'Choose Feature' button to select the aspect of the Harvest Cycle you wish to embody.",
			]),
		},
		"subclassfeature3.2" : {
			name : "Cornucopia",
			source : [["LA:CM:PR", 23]],
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			description : desc([
				"Once per Long Rest, If I don't have the Incapacitated condition when I start a Short Rest, I can magically create a Cornucopia filled with enough food for Prof x 2 crea. when crea. eat the food I can distribute My Cleric level d4's to the characters who roll them and regain HP equal to the total, the Cornucopia and any uneaten food vanishes at the end of the Short Rest.",
			]),
		},
		"subclassfeature3.3" : {
			name : "Channel Divinity: Bountiful Harvest",
			source : [["LA:CM:PR", 23]],
			minlevel : 3,
			action : "action",
			toNotesPage : [{
				name : "Channel Divinity: Bountiful Harvest",
				note : [
					"	Sowing: A target gains a number of Temporary Hit Points equal to my Proficiency Bonus plus my Wisdom modifier.",
					"	Growing: Until the end of my next turn, when a target makes an attack roll or ability check, it adds 1d4 to the total.",
					"	Reaping: A target deals extra Necrotic damage equal to my Proficiency Bonus the first time ti damages a creature before the end of my next turn.",
				],
			}],
			description : desc([
				"As a Magic action, I can expend a use of my CD to invoke the spirit of the harvest. Up to six creatures within 60 feet of me gain Heroic Inspiration. A creature must finish a Long Rest before it can gain Heroic Inspiration from this feature again. Additionally my current aspect of the Harvest grants an additional benefit (see notes page).",
			]),
		},
		"subclassfeature6" : {
			name: "Blessing of the Seasons",
			source: [["LA:CM:PR", 23]],
			minlevel: 6,
			action : [["reaction", "Blessing of the Seasons"]],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			description: desc([
				"Wis mod per Long Rest, As a Reaction, when a crea. I can see within 30 ft fails a save associated with my Harvest Cycle Aspect, I can allow them to reroll the save and take the new number, Additionally, after the save succeeds or fails, roll a number of d4's equal to my Prof, the target regains HP equal to the roll. Sowing: Dex & Cha, Growing: Con & Int, Reaping: Str & Wis",
			]),
		},
		"subclassfeature17" : {
			name : "Eternal Wheel",
			source : [["LA:CM:PR", 23]],
			minlevel : 17,
			usages : 1,
			recovery : "long rest",
			altresource : "SS 7+",
			toNotesPage : [{
				name : "Channel Divinity: Bountiful Harvest",
				note : [
					"	Sowing: Targets gain the effect of the Regenerate spell for 1 minute, or until I lose concentration.",
					"	Growing: Targets gain Advantage on saving throws and ability checks for 1 hour, or until I lose Concentration (as if concentrating on a spell).",
					"	Reaping: Targets gain Resistance to Necrotic, Psychic, and Poison damage for 1 hour.",
				],
			}],
			description : desc([
				"When I use Channel Divinity: Bountiful Harvest, crea. affected by it gain additional benefits based on my current aspect (see notes page). I can use this feature Once before a Long Rest, unless I expend a spell slot of level 7+ to restore my use of it.",
			]),
		},
	},
});
AddSubClass("druid", "old ways", {
	regExpSearch : /^(?=.*(druid))(?=.*(old ways)).*$/i,
	subname : "Circle of the Old Ways",
	source : [["LA:CM:PR", 24]],
	spellcastingExtra : ["ancestral guidance", "barkskin", "shield of faith", "shillelagh", "spike growth", "magic circle", "plant growth", "freedom of movement", "mordenkainen's private sanctum", "awaken", "tree stride"],
	features : {
		"subclassfeature3" : {
			name : "Bough and Branch",
			source : [["LA:CM:PR", 25]],
			minlevel : 3,
			description : desc([
				"When I cast Shillelagh, I can cause a Shield of gnarled wood to grow in my free hand (if I have one), while not Incapacitated, I can't be disarmed. Additionally, for the duration of Shillelagh I ignore Somatic components for my Druid spells, and my Shillelagh becomes a Druidic Focus for me.",
			]),
		},
		"subclassfeature3.1" : {
			name : "Wood Wose",
			source : [["LA:CM:PR", 25]],
			minlevel : 3,
			action : "bonus action",
			toNotesPage : [{
				name : "Wood Wose",
				note : [
					"	Bark Bulwark: While I am not wearing armor, my base Armor Class is 10 plus my Dexterity and Wisdom modifiers.",
					"	Elderwood Sap: When I hit a creature with an attack roll using the weapon enhanced by Shillelagh, the target is coated in Elderwood sap until the start of my next turn. While coated, the target has Disadvantage on attack rolls against targets other than me.",
					"	Oaken Resolve: You have Advantage on Strength and Constitution saving throws.",
				],
			}],
			description : desc([
				"As a Bonus Action or as part of casting Shillelagh, I can expend a use of my Wild Shape to infuse myself with the power of the primordial woods (see notes page for benefits). This effect lasts for 10 mins. Ends Early if I dismiss it, have the Incapacitated condition, or die.",
			]),
		},
		"subclassfeature6" : {
			name : "Oak and Thorn",
			source : [["LA:CM:PR", 25]],
			minlevel : 6,
			toNotesPage : [{
				name : "Oak and Thorn",
				note : [
					"	Oakenfist: I can attack twice instead of once whenever I take the Attack action on my turn.",
					"	Gnarled Thorns: Once on each of my turns when I hit a creature with a melee attack roll using a weapon, the target takes an extra 1d6 Piercing damage.",
				],
			}],
			description : desc([
				"When I activate my Wood Wose, I gain the following additional benefits (See Notes Page).",
			]),
		},
		"subclassfeature10" : {
			name : "Deepwood Elder",
			source : [["LA:CM:PR", 25]],
			minlevel : 10,
			toNotesPage : [{
				name : "Deepwood Elder",
				note : [
					"	Primeval Wrath: Once per turn, when I hit a creature with a melee attack, I can force the target to succeed on a Strength saving throw against my spell save DC or have the Prone condition.",
					"	Bramblebark: When a creature within 5 feet of me hits me with a melee attack, the attacker takes 1d8 Piercing damage. A creature takes this damage only once per turn.",
					"	Rampant Growth: When I activate Wood Wose and at the start of each of my subsequent turns, I gain a number of Temporary Hit Points equal to my Wisdom modifier plus my Proficiency Bonus.",
				],
			}],
			description : desc([
				"When I activate my Wood Wose, I gain the following additional benefits (See Notes Page).",
			]),
		},
		"subclassfeature14" : {
			name : "Ancient Protector",
			source : [["LA:CM:PR", 25]],
			minlevel : 14,
			action : [["reaction", " (Vengeance of the Elders)"]],
			toNotesPage : [{
				name : "Ancient Protector",
				note : [
					"	Old Growth: My size increases to Large (along with anything I'm wearing or carrying) if there is space to accomodate my growth, and my reach increases by 5 feet.",
					"	Mighty Trunk: I gain Resistance to Bludgeoning and Piercing damage.",
					"	Vengeance of the Elders: When a creature that is covered in Elderwood Sap and is within my reach makes an attack roll, I can take a Reaction to make a melee attack against the creature.",
				],
			}],
			description : desc([
				"When I activate my Wood Wose, I gain the following additional benefits (See Notes Page).",
			]),
		},
	},
});
AddSubClass("druid", "wicker", {
	regExpSearch : /^(?=.*(druid))(?=.*(wicker)).*$/i,
	subname : "Circle of Wicker",
	source : [["LA:CM:PR", 26]],
	spellcastingExtra : ["bane", "bless", "summer winds", "zone of truth", "bestow curse", "leomund's tiny hut", "death ward", "sanctum of the shepard", "hold monster", "lucky charm"],
	features : {
		"subclassfeature3" : {
			name : "Bewitched Effigy",
			source : [["LA:CM:PR", 26]],
			minlevel : 3,
			action : "bonus action",
			toNotesPage : [{
				name : "Bewitched Effigy",
				note : [
					"	Sacrifice: When a creature in the aura takes damage, I can take a Reaction to deal Fire damage to the creature equal to 1d8 plus my Wisdom modifier.",
					"	Soothe: When I create the effigy, and as a Bonus Action on subsequent turns while the effigy remains, one creature that I can see in the aura regains 1d6 Hit Points. I can use this effigy to restore Hit Points a number of times equal to twice my Wisdom modifier.",
					"	Ward: Me and my allies within the aura gain a +1 bonus to AC.",
				],
			}],
			description : desc([
				"As a Bonus Action, I can expend a use of my Wild Shape to create a wicker effigy in an unoccupied space I can see within 30 feet of myself. The effigy is a small object (AC 15; HP equal to 5 x my Druid Level; Vulnerable to Fire; Immune to Poison and Psychic). The Effigy vanishes after 1 minute, when reduced to 0 HP or when I use this feature again. The effigy radiates an aura (chosen when created) in a 30-foot Emanation and fills the are with dim light. (See Notes Page for choices).",
			]),
		},
		"subclassfeature3.1" : {
			name : "Wicker Token",
			source : [["LA:CM:PR", 27]],
			minlevel : 6,
			description : desc([
				"When I finish a Long Rest, I can create a number of tokens equal to my Prof. The tokens are Tiny objects (AC 5; HP 1; Immunity to Poison and Psychic dmg). The tokens vanish when I finish my next Long Rest. I can cast spells with a range of touch on a creature carrying one of my tokens while the two of us are on the same plane of existance.",      
			]),
		},
		"subclassfeature6" : {
			name : "Wicker Rising",
			source : [["LA:CM:PR", 27]],
			minlevel : 6,
			description : desc([
				"The effects of my wicker effigy increase. Sacrifice becomes 2d8+Wis Fire; Soothe becomes 1d8 and I can expend 5 HP from the effigy to remove a Charmed, Frightened, Paralyzed, Poisoned, or Stunned condition; Ward gain a resistance to a damage type other than Force.",      
			]),
		},
		"subclassfeature10" : {
			name : "Soulbound Poppet",
			source : [["LA:CM:PR", 27]],
			minlevel : 10,
			action : "action",
			description : desc([
				"As a Magic action, I can expend a use of my Wild Shape and choose a crea. I can see within 60 ft and create a wicker doll in their likeness. The doll is a Tiny Object (AC 10; HP 10; Vulneraboe to Fire; Immune to Poison and Psychic). The Doll vanishes after 1 minute or when it is reduced to 0 HP. While the Doll exists the target has Disadv. on attacks agains the holder, and when the holder deals damage to the target for the first time on a turn deal an extra 2d10 Necro dmg.",      
			]),
		},
		"subclassfeature14" : {
			name : "Wicker Zenith",
			source : [["LA:CM:PR", 27]],
			minlevel : 14,
			description : desc([
				"My Wicker effigy grows in power, at the start of my turn I can change the aura of my effigy to a different one, additionally the auras grow stronger. Sacrifice becomes 3d8 + Wis Fire dmg; Soothe When I or my allies start our turn in the aura the Charmed or Frightened condition (target's choice) ends on it; Ward Choose an ability. My allies and I in the aura have Advantage on saves made with the chosen ability.",
			]),
		},
	},
});
AddSubClass("fighter", "eldritch knight", {
	regExpSearch: /^(?=.*(fighter))(?=.*(eldritch))(?=.*(knight)).*$/i,
	subname: "Eldritch Knight",
	source: [["LA:CM:PR", 28]],
	features: {
		"subclassfeature3": {
			name: "Death Knight",
			source: [["LA:CM:PR", 28]],
			minlevel: 3,
			limfeaname : "Draugr Die",
			usages : ["", "", 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 12],
			recovery : "long rest",
			additional : ["", "", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12"],
			"dark rider": {
				name: "Dark Rider",
				extraname: "Death Knight Feature",
				action: ["bonus action", ""],
				description: levels.map(function(n) {
					if(n < 3) return "";
					var description = desc([
						"As a Bonus Action, I manafest a ghostly steed that only I can mount. The steed uses the Warhorse stat block, but its creature type is Undead, it has Resistance to Bludgeoning, Piercing, and Slashing damage, and it can only take the Dash, Disengage, and Dodge actions. When the steed takes the Dash action, I can expend and roll a Draugr Die. During the movement from that action, the steed's Speed increases by a number of feet equal to 5 times the number rolled. The steed vanishes after 1 hour, if reduced to 0 Hit Points, if I have the Incapacitated condition, or if I die.",
					]);
					if(n >= 10) {
						description += desc([
							"At 10th level, The ghostly steed of my Dark Rider power now ignores Difficult Terrain. Additionally, when my steed takes the Dash, Disengage, or Dodge action, I can expend and roll a Draugr Die. My steed magically teleports (with me, if I'm riding it) to an unoccupied space I can see within 60 feet of the steed. Each creature of my choice within 10 feet of the steed when it appears must succeed on a Constitution saving throw, taking Necrotic damage equal to the number rolled on the Draugr Die plus my Constitution modifier on a failed save or half as much damage on a sucessful one."
						]);
					}
					if(n >= 15) {
						description += desc([
							"At 15th level, When I use my Dark Rider power, I can allow one creature of my choice to mount the steed in addition to me. Additionally, when I expend a Draugr Die during the steed's Dash action, it can move through solid objects and creatures as if they were Difficult Terrain (along with any riders). If the steed ends its turn inside a solid object, it and any riders take 1d10 Force damage and are shunted to the nearest unoccupied space."
						]);
					}
					return description;
				}),	
			},
		    "grave guard": {
				name: "Grave Guard",
				extraname: "Death Knight Feature",
				action: [["reaction", ""]],
				description: levels.map(function(n) {
					if(n < 3) return "";
					var description = desc([
						"When I take damage, I can take a Reaction to expend and roll a Draugr Die. Reduce the damage I take by the number rolled plus my Constitution modifier.",
					]);
					if(n >= 10) {
						description += desc([
							"At 10th level, When I use my Grave Guard power in response to a creature damaging me, the creature takes Psychic damage equal to half the amount of damage the power reduced."
						]);
					}
					if(n >= 15) {
						description += desc([
							"At 15th level, When I use my Grave Guard power, choose one of the triggering damage types. I have Resistance to that damage type (including the triggering damage) until the start of my next turn."
						]);
					}
					return description;
				}),
		    },
		    "soul reaper": {
				name: "Soul Reaper",
				extraname: "Focus Feature",
				action: [["action", " (with Attack action)"]],
				description: levels.map(function(n) {
					if(n < 3) return "";
					var description = desc([
						"When I take the Attack action, I can forego one of my attacks to magically call forth ghostly hands around a creature within 60 feet of myself, Expend and roll a Draugr Die. The target must make a Strength saving throw. On a failed save, it takes Necrotic damage equal to the number rolled on the Draugr Die plus my Constitution modifier, and it has the Grappled condition (escape DC = my Death Knight power save DC) for 1 minute. On a successful save, it takes half as much damage only.",
					]);
					if(n >= 10) {
						description += desc([
							"At 10th level, When a creature Grappled by my Soul Reaper power starts its turn, it takes Psychic damage equal to my Proficiency Bonus. When it does, I can take a Reaction to expend and roll a Draugr Die, adding the number rolled to the damage."
						]);
					}
					if(n >= 15) {
						description += desc([
							"At 15th level, A creature Grappled by my Soul Reaper power has the Restrained condition until the grapple ends."
						]);
					}
					return description;
				}),
		    },
		    autoSelectExtrachoices: [{
				extrachoice: "dark rider"
		    }, {
				extrachoice: "grave guard"
		    }, {
				extrachoice: "soul reaper"
		    }],
			description: desc([
				"I gain a pool of dice called Draugr Dice which I can use to fuel my abilities. I regain one expended Dragr Die when I finish a Short Rest, and all of them when I finish a Long Rest. My save DC for these powers is 8 plus my Con and Prof. (See Third Page).",
			]),
		},
		"subclassfeature7": {
			name: "Siphoning Souls",
			source: [["LA:CM:PR", 29]],
			minlevel: 7,
			description: desc([
				"Mortal Coil: When an non-Construct/Undead enemy dies within 30 ft of me I can Regain one expended Draugr Die.",
				"Whisper of the Departed: When I make an ability check, I can expend and roll a Draugr Die and add the result to the roll.",
			]),
		},
		"subclassfeature10": {
			name: "Tomb Castellan",
			source: [["LA:CM:PR", 29]],
			minlevel: 10,
			description: desc([
				"My Death Knight feature improves (See Third Page)",
			]),
		},
		"subclassfeature15": {
			name: "Grave Lord",
			source: [["LA:CM:PR", 29]],
			minlevel: 15,
			description: desc([
				"My Death Knight feature improves again (See Third Page)",
			]),
		},
		"subclassfeature18": {
			name: "Might of the Necropolis",
			source: [["LA:CM:PR", 29]],
			minlevel: 18,
			description: desc([
				"Eternal Vigil: I nolonger suffer the effects of aging, I can't be magically aged, and I don't die of old age. In addition, I no longer require air, food, drink, or sleep.",
				"Restless Dead: When I roll Initiative, if I have fewer than 3 Draugr Dice, I regain expended dice until I have 3."
			]),
		},
	},
});
AddSubClass("monk", "pestilent haze", {
	regExpSearch: /^(?=.*(monk))(?=.*(pestilent haze)).*$/i,
	subname: "Warrior of the Pestilent Haze",
	source: [["LA:CM:PR", 30]],
	features: {
		"subclassfeature3": {
			name: "Contagious Discipline",
			source: [["LA:CM:PR", 30]],
			minlevel: 3,
			action : [["action", "Miasmic Plague (with Attack Action; 1 FP)"]],
			description: desc([
				"Claws of Pestilence: My unarmed strikes deal Slashing damage instead of Bludgeoning. When I hit a creature with an attack granted by my Flurry of Blows, I deal extra Necrotic damage equal to one roll of my Martial Arts Die.",
				"Miasmic Plauge: When I hit a creature with an Unarmed Strike, I can expend 1 FP to force the creature to succeed on a Con save or be cursed for 1 minute. While cursed, the creature has the Poisoned condition, and takes extra Necrotic damage from my Unarmed Strikes equal to one roll of my Martial Arts die. A creature can take this damage only once per turn. The creature repeats the save at the end of each turn. If I foregoe the extra damage from Claws of Pestilence, I can use Miasmic Plague without paying its FP cost.",
			]),
		},
		"subclassfeature3.1": {
			name: "Gift of Pestilence",
			source: [["LA:CM:PR", 31]],
			minlevel: 3,
			limfeaname : "Animal Messenger",
			usages : 1,
			recovery : "long rest",
			savetxt : { text : ["Adv. vs saves against Poisoned condition or magical contagions"], },
			dmgres : ["Poison", "Necrotic"],
			spellcastingBonus : [{
				name : "Gift of Pestilence",
				spells : ["animal messenger"],
				selection : ["animal messenger"],
				times : 1,
				firstCol : "oncelr",
			}],
			description: desc([
				"I have Advantage against saves to avoid or end the Poisoned Condition, I also have Resistance to Poison and Necrotic damage.",
				"I learn how to communicate simple concepts with vermin such as rats, pigeons, and insects, Additionally, I can cast Animal Messenger using Wisdom as my spellcasting ability to target Tiny Beast vermin, I can do this once per long rest.",
			]),
		},
		"subclassfeature6": {
			name: "Potent Plague",
			source: [["LA:CM:PR", 31]],
			minlevel: 6,
			description : desc([
				"When I deal Necrotic or Poison damage, I ignore the target's Resistance to those damage types, if any."
			]),
		},
		"subclassfeature6.1": {
			name: "Tolling Censer",
			source: [["LA:CM:PR", 31]],
			minlevel: 6,
			action : [["action", " (2 FP)"]],
			description: desc([
				"For 2 FP I can unleash a 20-foot Emanation centered on myself, Each creature of my choice in the area must make a Con save. On a failed save, a creature takes Necrotic damage euql to two rolls of my Martial Arts die and is cursed by my Miasmic Plague. On a success, it takes half as much damage only.",
			]),
		},
		"subclassfeature11": {
			name: "Tolling Censer",
			source: [["LA:CM:PR", 31]],
			minlevel: 11,
			action : [["bonus action", "Scurrying Spread (1 FP)"]],
			description: desc([
				"The strength of my Miasmic Plague has increased",
				"Choking Miasma: Con saves against my Miasmic Plague have Disadvantage.",
				"Scurrying Spread: for 1 FP I can use my Step of the Wind, until the end of my turn, when I enter a space within 5 feet of a creature of my choice, it must succeed a Con save or be cursed by my Miasmic Plague. A creature makes this save only once per turn.",
			]),
		},
		"subclassfeature17": {
			name: "Epidemic",
			source: [["LA:CM:PR", 31]],
			minlevel: 17,
			description: desc([
				"My Miasmic Plague ignores a target's Immunity to the Poisoned condition. Additionally, when I deal Necrotic damage to a target cursed by my Miasmic Plague, it takes extra Necrotic damage equal to one roll of my Martial Arts die.",
			]),
		},
	},
});
AddSubClass("paladin", "castigation", {
	regExpSearch: /^(?=.*(paladin))(?=.*(castigation)).*$/i,
	subname: "Oath of Castigation",
	source: [["LA:CM:PR", 32]],
	spellcastingExtra: ["divine favor", "inflict wounds", "chain of conviction", "hold person", "counterspell", "speak with dead", "consuming pyre", "locate creature", "flame strike", "hold monster"],
	features: {
		"subclassfeature3": {
			name: "Channel Divinity: Castigate",
			source: [["LA:CM:PR", 32]],
			minlevel: 3,
			description : desc([
				"As a Magic action, I can expend a use of my Channel Divinity to select a number of crea. up to my Cha mod I can see w/i 30 ft of myself. Each crea. must succeed a Str save or be wrapped in fiery shackles and have its speed reduced to 0. As a Bns A, I can cause the shackles to flare dealing 2d6 Fire dmg to each bound crea. A crea. repeats the save at the end of each turn, or auto-succeeds after 1 minute."
			]),
			action : [["action", "Castigate"], ["bonus action", "Castigate (Flare)"]],
		},
		"subclassfeature3.1": {
			name: "Channel Divinity: Incite",
			source: [["LA:CM:PR", 32]],
			minlevel: 3,
			description : desc([
				"As a Magic action, I can expend a use of my Channel Divinity to gain Adv. on Int (Investigation) and Wis (Insight) checks for 10 mins. As a Bonus Action while this effect is active, I can choose a crea. I can see w/i 10 ft. The target must succeed a Cha save or have the Frightened condition for 1 minute. While the target is Frightened in this way, it can't speak a deliberate lie. This effect ends early if the target takes damage or I use this Bns A. again."
			]),
			action : [["action", "Incite"], ["bonus action", "Incite (Fear)"]],
		},
		"subclassfeature7": {
			name: "Kindling Aura",
			source: [["LA:CM:PR", 33]],
			minlevel: 7,
			description : desc("While I'm conscious, allies within range and I ignore creatures' Resistance to Fire and Radiant dmg, and when an affected creature hits with a weapon attack, it can deal Fire dmg instead of the normal dmg. In addition, I and affected creatures can add my Cha to Int (Investigation) and Wis (Insight) checks."),
			addMod: [
			  {type: "skill", field: "Investigation", mod: "Cha", text: "I can add my Charisma modifier to Investigation rolls."},
			  {type: "skill", field: "Insight", mod: "Cha", text: "I can add my Charisma modifier to Insight rolls."},
			],
			additional : levels.map(function (n) {
			return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura";
			}),
		},
		"subclassfeature15": {
			name: "Fervent Inquisitor",
			source: [["LA:CM:PR", 33]],
			minlevel: 15,
			action : [["reaction", ""]],
			description: desc([
				"As a Reaction, when an ally within 30 ft is hit by a crea. I can gain Advantage on my next attack roll against the crea. that dealt damage. Additionally when I deal Fire or Radiant dmg to a Bloodied creature, I become aware of any lies it has willingly and knowingly spoken in my presence within the last 24 hours.",
			]),
		},
		"subclassfeature20": {
			name: "Fire and Brimstone",
			source: [["LA:CM:PR", 33]],
			minlevel: 20,
			action: "bonus action",
			usages: 1,
			recovery: "long rest",
			altResource: "SS 5",
			description: desc([
				"As a Bonus Action, I can give myself the benefits below for 10 minutes:",
				"Blazing Ardor: I gain Immunity to Fire damage.",
				"Relentless Judgement: My reach increases by 10 ft, and my melee attacks ignore Half and Three-Quarter Cover.",
				"Punish the Wicked: When I hit a crea. with an Opportunity Attack, or when a Hostile crea. ends its turn within my reach, it must succed a Cha save, or be Prone and its Speed is reduced to 0 until the start of its next turn.",
				"I can end it for free; I can spend a level 5 spell slot or Long Rest to restore it.",
			]),
		},
	},
});
AddSubClass("ranger", "grim harbinger", {
	regExpSearch: /^(?=.*(ranger))(?=.*(grim))(?=.*(harbinger)).*$/i,
	subname: "Grim Harbinger",
	source: [["LA:CM:PR", 34]],
	spellcastingExtra: ["bane", "hold person", "fear", "intrusive despair", "dream"],
	features: {
		"subclassfeature3": {
			name: "Omen of Doom",
			source: [["LA:CM:PR", 35]],
			minlevel: 3,
			action : [["bonus action", " (Mark Target)"], ["bonus action", " (Command Grim)"]],
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "short rest",
			altResource : "SS 1+",
			description: desc([
				"As a Bns A, I can mark a target w/i 90ft as Doomed, Once per turn, when I atk a doomed target it takes an extra 1d6 Necro Dmg.",
				"Additionally, a ghostly creature called a Grim appears in an unoccupied space w/i 30ft of the doomed target. The Grim is friendly towards me and my allies and vanishes when I die, the doomed creature dies, the Grim is reduced to 0 HP or I use this feature again.",
				"In combat, the Grim acts during my turn and can move and use its Rea. on its own, but only takes the Dodge action unless I use my Bns A to command it to take an action in its stat block or some other action. I can command it as part of the same Bns A used for Omen of Doom, or I can sacrifice one of my attacks when I take the Attack action to command the grim to take the Ominous Rend action. If I have the Incapacitated condition, the Grim ats on its own and is not limited to the Dodge action.",
			]),
		},
		"subclassfeature7": {
			name: "Harbinger of Doom",
			source: [["LA:CM:PR", 35]],
			minlevel: 7,
			description: desc([
				"Graveyard Hunter: The Grim's Ominous Rend action deals an extra 1d6 Necro dmg on a hit.",
				"Mortal Reminder: When I deal damage to a doomed creature I can change the damage type to Necro.",
				"Necro dmg dealt by me or my Grim ignores Resistance.",
			]),
		},
		"subclassfeature11": {
			name: "Grave Bond",
			source: [["LA:CM:PR", 35]],
			minlevel: 11,
			action : [["reaction", "Inescapable Fate (Force Reroll)"]],
			dmgres : ["Necrotic"],
			usages: 1,
			recovery: "long rest",
			description: desc([
				"Ghostly Hound: The Grim gains Resistance to Blud., Pierc., and Slash. dmg.",
				"Grave Fortitude: I gain Resistance to Necro. dmg.",
				"Inesapable Fate: When the target of my Omen of Doom succeeds a save, I can use a Rea. to force a reroll with Disadv. Once I cause a save to fail, I can't use it again until my current Omen of Doom ends.",
			]),
		},
		"subclassfeature15": {
			name: "Sealed Fate",
			source: [["LA:CM:PR", 35]],
			minlevel: 15,
			limfeaname : "Marked for Death",
			usages : 1,
			recovery : "long rest",
			altResource : "SS 4+",
			description: desc([
				"Jaws of Doom: The Grim's Ominous Rend action deals an extra 1d6 Necro dmg (for a total of 2d6 extra dmg).",
				"Marked for Death: When I use Omen of Doom, I can force the target to make a Cha save vs my Spell Save DC. On a failed save , the target has Vulnerability to dmg dealt by my Grim and to the extra dmg I deal with Omen of Doom. Once I use this benefit, I can't use it again until I finish a Long Rest. I can also restore my use of it by expending a level 4+ spell slot (no action required).",
			]),
		},
	},
});
CreatureList.grim = {
	name : "Grim",
	source : [["LA:CM:PR", 35]],
	regExpSearch : /^(?=.*grim).*$/i,
	size : 3,
	type : ["Undead"],
	isSummon : true,
	alignment : "Neutral",
	ac : "13+oWis",
	hp : 10,
	hd : [1, 8],
	hdLinked : ["ranger"],
	speed : "40 ft",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : 0,
	scores : [16, 16, 14, 14, 10, 10],
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Understands the languages I know",
	attacksAction : 1,
	addMod : [
		{ type : "skill", field : "all", mod : "Prof", text : "The Grim adds it proficiency bonus to all its ability check and saving throws." },
		{ type : "skill", field : "Init", mod : "Prof", text : "The Grim adds it proficiency bonus to all its ability check and saving throws." },
		{ type : "save", field : "all", mod : "Prof", text : "The Grim adds it proficiency bonus to all its ability check and saving throws." }
	],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.ranger && !classes.known.ranger_ua23pt6) return;
			var rgrLvl = classes.known.ranger ? classes.known.ranger.level : classes.known.ranger_ua23pt6.level;
			HDobj.alt.push(5 + 5 * rgrLvl);
			HDobj.altStr.push(" = 5 as a base\n + " + "5 \xD7" + rgrLvl + " from its master's Ranger level");
		},
		setAltHp : true,
		hpForceRecalc : true,
	},
	attacks : [{
		name : "Ominous Rend",
		ability : 1,
		damage : [1, 6, "Necrotic"],
		modifiers : ["", "oWis"],
		range : "Melee (5 ft)",
		description : "If target is crea., it has the Frightened condition until the start of my next turn. +1d6 Necro dmg at 7th and 15th levels.",
		useSpellMod : "ranger",
	}],
	traits : [{
		name : "Incorporeal Movement",
		description : "The Grim can move through other creatures and objects as if they were Difficult Terrain. The grim takes 1d10 Force damage if it ends its turn inside an object.",
		joinString : "\n   ",
	}, {
		name : "Shared Fate",
		description : "Add my Proficiency Bonus to any ability check or saving throw the grim makes.",
		joinString : "\n   ",
	}],	
	features : [{
		name : "Baleful Howl",
		description : " * Reaction * Trigger: A creature moves out of the grim's reach. Response - Wisdom Saving Throw: My Spell Save DC, the triggering creature. Failure: The target's Speed is 0 until the end of the turn.",
		joinString : "\n   ",
	}],
};
AddSubClass("rogue", "sinner", {
  regExpSearch: /^(?=.*(rogue))(?=.*(sinner)).*$/i,
  subname: "Sinner",
  source: [["LA:CM:PR", 36]],
  spellcastingAbility: 4,
  features: {
    "subclassfeature3": {
      name: "Hex Slinger",
      source: [["LA:CM:PR", 36]],
      minlevel: 3,
	  usages: "Charisma modifier per ",
      usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
      recovery: "short rest",
      description: desc([
        "When I deal damage with my sneak attack, designate 2 dice, the number rolled on those dice determines the extra effect from my Hex Slinger Jinx table.",
      ]),
	  toNotesPage : [{
		name : "Hex Slinger Jinx",
		note : [
			"2d6	Jinx",
			"2		Snake Eyes. On the target's next turn, it can only do one of the following: move or take an action or Bonus Action. If it targets you or your allies with an attack on that turn, it takes 2d6 Psychic damge.",
			"3-4	The Nightmare. The target has the Frightened condition until the end of its next turn, and it must immediately take a Reactn to move as far as it can away from you, up to its Speed.",
			"5-6	Whiskey Bottle. The target drops anything it's holding. Until the end of its next turn, when the target picks up an item, it must succeed on a DC 15 Dexterity saving throw or drop the item immediately.",
			"7		Cheap Shop. Until the end of its next turn, the target's Speed is halved, and for that duration, attack rolls against it have Advantage.",
			"8-9	Withered Arm. Until the end of its next turn, the target has Disadvantage on D20 Tests that rely on Strength.",
			"10-11	Bad Luck. Until the end of its next turn, when the target makes an attak roll or a saving throw, it subtracts 1d6 from the total.",
			"12		Dead Man. If the next attack roll you make before the end of your next turn misses, it hits instead. If the first attack roll hits, the attack is automatically a Critical Hit. If you roll a 20 on the D20, roll the attack's damage dice three times instead of twice.",
		],
	  }],	
    },
    "subclassfeature3.1": {
      name: "Get Jinxed",
      source: [["LA:CM:PR", 36]],
      minlevel: 3,
      toolProfs: [["Gaming Sets", 2]],
	  spellcastingBonus : [{
		  name : "Parlor Trick",
		  spells : ["dancing lights", "mage hand", "minor illusion", "mysterious presence", "prestidigitation"],
		  times : 1,
	  }],
      description: desc([
        "Cards and Bones: I gain proficiency with two Gaming Sets of my choice.",
		"Jinx Weapon: As a 1-hour ritual using a Gaming Set, I can magically create a Jinx Weapon that channels my Jinxcraft. This weapon takes the form of a Pistol or a Gaming set (which uses the Pistol stats), for me this weapon ignores the Loading property and creates its own ammunition that deals Force damage. In Gaming set form, I throw cards, dice, or other pieces, or use them to unleash bolts for force. Alternatively I can infuse a Simple or Martial weapon I have Prof with, changing its damage to Force. I can only have 1 hex weapon at a time.",
		"Parlor Trick: I learn one of the following Cantrips of choice: Dancing Lights, Mage Hand, Minor Illusion, Mysterious Presence, or Prestidigitation. Charisma is my spellcasting ability for it.",
      ]),
    },
    "subclassfeature9": {
      name: "Borrowed Luck",
      source: [["LA:CM:PR", 37]],
      minlevel: 9,
      description: desc([
        "When I use Hex Slinger, I gain Heroic Inspiration if I don't have, If I do have Heroic Inspiration I can expend my Heroic Inspiration instead of expending a use of Hex Slinger.",
      ]),
    },
    "subclassfeature13": {
      name: "Pick Your Poison",
      source: [["LA:CM:PR", 37]],
      minlevel: 13,
      description: desc([
        "When I use Hex Slinger, I can roll the designated Sneak Attack dice twice and choose which total to use. If the roll I choose is the same number on both dice, the target takes Psychic damage equal to m level. If the roll I choose is a 2 or a 12, I don't expend that use of Hex Slinger.",
      ]),
    },
    "subclassfeature17": {
      name: "The Other Side",
      source: [["LA:CM:PR", 37]],
      minlevel: 17,
      description: desc([
        "Crossroads Devilry: When I miss with an attack roll or fail a saving throw, I can expend and roll any number of my Sneak Attack dice (choose the number before I roll) and add the total rolled to the attack or save, potentially turning a miss into a hit or failure into success. Expended dice return after I next use my Sneak Attack.",
		"Lady Luck's Smiling: When a creature hits me with an attack roll, I can expend and roll any number of my Sneak Attack dice (choose the number before I roll) and add the total rolled to my AC against that attack, potentially causing the attack to miss. Expended dice return after I next use my Sneak Attack.",
      ]),
    },
  },
});
AddSubClass("sorcerer", "crimson", {
  regExpSearch: /^(?=.*(sorcerer))(?=.*(crimson)).*$/i,
  subname: "Crimson Sorcery",
  source: [["LA:CM:PR", 38]],
  spellcastingExtra : ["aid", "blood bolt", "cure wounds", "inflict wounds", "blood sacrifice", "crimson harvest", "vampiric touch", "death ward", "sacrificial siphon", "field of reaping", "mass cure wounds"],
  spellcastingExtraApplyNonconform: true,
  features: {
    "subclassfeature3": {
      name: "Blood Well",
      source: [["LA:CM:PR", 38]],
      minlevel: 3,
	  usages : 1,
	  recovery : "long rest",
      action: "bonus action",
      description: desc([
        "Once per Long Rest When I deal damage or restore Hit Points to a creature, I can expend my Blood Well to add 1d8 to the total for 1 target. I can regain my use of this by dealing 10 or more Necrotic damage to a target in one go.",
      ]),
    },
    "subclassfeature6": {
      name: "Pool of Blood",
      source: [["LA:CM:PR", 39]],
      minlevel: 6,
	  action : [["bonus action", ""]],
      description: desc([
        "As a Bonus Action, I can expend my Blood Well to dissolve into a pool of blood, along with everything I'm wearing or carrying, for 1 hour. The transformation ends early if I drop to 0 Hit Points or if I choose to end it (no action required). While in this form, I use my game statistics with the following changes (see notes page).",
      ]),
	  toNotesPage : [{
		  name : "Pool of Blood",
		  note : [
			"While In my Pool of Blood form, My stats change in the following ways.",
			"My Speed becomes 10 feet.",
			"I gain Climb and Swim Speeds equal to my Speed, and I can climb difficult surfaces, including along ceilings, without needing to make an ability check.",
			"I have Resistance to Bludgeoning, Piercing, and Slashing damage.",
			"I have Immunity to the Prone condition.",
			"I have Advantage on Strength, Dexterity, and Constitution saving throws.",
			"I can pss through small holes, narrow openings, and even mere cracks.",
			"I can enter and occupy he space of another creature.",
			"I can't drop, use, or otherwise interact with anything I am carrying or holding.",
			"I can't talk, manipulate objects, attack, or cast spells.",
		  ],
	  }],
    },
    "subclassfeature6.1": {
      name: "Scarlet Vigor",
      source: [["LA:CM:PR", 39]],
      minlevel: 6,
      dmgres: ["Necrotic"],
      description: desc([
        "I have Resistance to Necrotic damage. In addition, when I finish a Short Rest, I can expend my Blood Well to reduce my Exhaustion level, if any, by 1.",
      ]),
    },
    "subclassfeature14": {
      name: "Vital Siphoning",
      source: [["LA:CM:PR", 39]],
      minlevel: 14,
      action: "bonus action",
      description: desc([
        "As a Bonus Action, I can expend 1 Hit Point Die to gain one of the following benefits.",
		"Blood Boil: I regain the use of my Blood Well.",
		"Crimson Pulse. Expend my Blood Well to make the next Metamagic option I use this turn cost no Sorcery Points",
      ]),
    },
    "subclassfeature18": {
      name: "Sanguine Feast",
      source: [["LA:CM:PR", 39]],
      minlevel: 18,
      action: "action",
      usages: 1,
      recovery: "long rest",
      altResource: "5 SP",
      description: desc([
        "As a Magic action, I can unleash tendrils of blood that lash any creatures of my choice within 30ft of me. A target must make a Con save, taking 5d8 Necrotic dmg on a failed save, or half as much on a success. If my Blood Well is already expended when I use this action, the targets have Disadvantage on the saving throw. If at least one creature takes damage from Sanguine Feast, I regain a number of Hit Points equal to the damage roll. Once I use this feature, I can't do so again until I finish a Long Rest, unless I spend 5 Sorcery Points to use it again.",
      ]),
    },
  },
});
AddSubClass("warlock", "great fool", {
  regExpSearch: /^(?=.*(warlock))(?=.*(great fool)).*$/i,
  subname: "Great Fool Patron",
  source: [["LA:CM:PR", 40]],
  spellcastingExtra : ["disguise self", "tasha's hideous laughter", "rope trick", "spiritual weapon", "vicious mockery", "blink", "stinking cloud", "phantasmal killer", "puppet master", "bigby's hand", "mislead"],
  spellcastingExtraApplyNonconform: true,
  features: {
    "subclassfeature3": {
      name: "Killing Joke",
      source: [["LA:CM:PR", 41]],
      minlevel: 3,
	  action : [["reaction", ""]],
      usages: "Charisma modifier per ",
      usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
      recovery: "long rest",	  
      description: desc([
        "When I see a creature within 60ft of me take damage or fail a saving throw, I can use my Reaction to cast Vicious Mockery on that creature, I can use this Reaction a umber of times equal to my Cha mod, I regain one expended use when I finis a Short Rest, and regain all uses when I finish a Long Rest.",
      ]),
    },
    "subclassfeature6": {
      name: "Jester's Japes",
      source: [["LA:CM:PR", 41]],
      minlevel: 6,
	  usages : 1,
	  recovery : "short rest",
	  action: [["action", ""]],
      description: desc([
        "Once per Short Rest, as a Magic action, I can target a creature within 60ft of me and force it to succeed a Cha save or suffer one of these curses (see third page), The curse lasts for 1 minute. The creature repeats the save at the end of each of its turns ending the curse on a success.",
      ]),
	    "flower spurt" : {
			name : "Flower Spurt",
			extraname : "Jester's Japes Options",
			source : [["LA:CM:PR", 41]],
			description : desc("I spray a strange liquid at the creature's eyes, giving it the Blinded condition."),
		},
		"clown shoes" : {
			name : "Clown Shoes",
			extraname : "Jester's Japes Options",
			source : [["LA:CM:PR", 41]],
			description : desc("The creature's feet or similar appendages grow to awkwardly exaggerated proportions. The creature's Speed is halved, and it has Disadvantage on ability checks and saving throws that rely on Dexterity."),
		},
		"honk honk" : {
			name : "Honk Honk",
			extraname : "Jester's Japes Options",
			source : [["LA:CM:PR", 41]],
			description : desc("The creature emits sounds, such as honks, chimes, or squeaks, that are audible out to 100 feet withevery movment, no matter how slight. The creature can't benefit from the Invisible condition."),
		},
		"jolly arms" : {
			name : "Jolly Arms",
			extraname : "Jester's Japes Options",
			source : [["LA:CM:PR", 41]],
			description : desc("Any weapon or Unarmed Strike the creature attacks with, including natural weapons such as fangs and claws, takes on a comical appearance as if it were made of wood, stuffed cloth, or balloons. The target deals half damage with weapon attacks and Unarmed Strikes."),
		},
		autoSelectExtrachoices : [{
			extrachoice : "flower spurt"
		}, {
			extrachoice : "clown shoes"
		}, {
			extrachoice : "honk honk"
		}, {
			extrachoice : "jolly arms"
		}],
    },
    "subclassfeature10": {
      name: "Mocking Banter",
      source: [["LA:CM:PR", 41]],
      minlevel: 10,
	  action : "reaction",
      usages: 1,
      recovery: "short rest",
      description: desc([
        "Once per Short Rest as a reaction to being damaged by a target, I can force the target to make a Wis save against my Spell Save DC. On a failed save, the target takes Psychic dmg equal to the triggering damage I took, or half as much on a success.",
      ]),
    },
    "subclassfeature14": {
      name: "Send in the Clowns",
      source: [["LA:CM:PR", 41]],
      minlevel: 14,
	  action : "action",
	  usages : 1,
	  recovery : "long rest",
      description: desc([
        "Once per Long Rest as a Magic action, I can summon three ghostly fools. The fools are translucent and intangible, and resemble clowns, jesters, or similar entertainers. Make up to three melee spell attacks against creatures within 60 feet of me. On a hit, a target takes 2d10 Psy. dmg and has the Frighened condition until the end of its next turn, or the Prone condition (my choice). I can use my action on subsequent turns to repeat these attacks. The fools remain for 1 minute or until I have the Incapacitated condition or I die.",
      ]),
    },
  },
});
AddSubClass("warlock", "horned king", {
  regExpSearch: /^(?=.*(warlock))(?=.*(horned king)).*$/i,
  subname: "Horned King Patron",
  source: [["LA:CM:PR", 42]],
  spellcastingExtra : ["animal friendship", "bane", "spike growth", "suggestion", "bestow curse", "fly", "phantasmal killer", "polymorph", "dominate person", "scrying"],
  spellcastingExtraApplyNonconform: true,
  features: {
    "subclassfeature3": {
      name: "Witch Mark",
      source: [["LA:CM:PR", 42]],
      minlevel: 3,	  
      description: desc([
        "When I finish a Long Rest, I can imbue a tiny non-magical object with one of my Warlock spells that has a casting time of an action, a creature holding the marked object can take a Magic action to cast the spell (using my Charisma modifier, spell attack bonus, or spell save DC). The mark fades when the spell is cast or when I finish a Long Rest.",
      ]),
    },
	"subclassfeature3.1": {
      name: "Malediction",
      source: [["LA:CM:PR", 43]],
      minlevel: 3,
	  action : [["action", ""], ["reaction", " (When attacked by crea)"]],
      description: desc([
        "As a Magic Action, I can curse a crea. I can see w/i 60ft of me. Alternatively, when a creature w/i range targets me with an attack roll or a spell, I can use my Rea. to curse the creature with my choice of one of the curses below (See third Page) I can use this feature my Cha. mod times per long rest.",
      ]),
	    "agony" : {
			name : "Agony",
			extraname : "Malediction Options",
			source : [["LA:CM:PR", 41]],
			description : desc("The target has Disadvantage on its next ttack roll or Constitution saving throw to maintain Concentration (my choice)."),
		},
		"hate" : {
			name : "Hate",
			extraname : "Malediction Options",
			source : [["LA:CM:PR", 41]],
			description : desc("The target has Disadvantage on its next Intelligence, Wisdom, or Charisma saving throw (my choice)."),
		},
		"rot" : {
			name : "Rot",
			extraname : "Malediction Options",
			source : [["LA:CM:PR", 41]],
			description : desc("The next time the target takes damage, it takes an extra 1d10 Necrotic damage, and it can't regain Hit Points until the end of its next turn."),
		},
		autoSelectExtrachoices : [{
			extrachoice : "agony"
		}, {
			extrachoice : "hate"
		}, {
			extrachoice : "rot"
		}],
    },
    "subclassfeature6": {
      name: "Spiteful Curse",
      source: [["LA:CM:PR", 43]],
      minlevel: 6,
	  limfeaname : "Bestow Curse",
	  usages : 1,
	  recovery : "long rest",
      description: desc([
        "When I use Malediction, I can now cast Bestow Curse once without a spell slot as the action or Reaction for that feature, I regain the ability to cast it in this way when I finish a Long Rest. If the target succeeds on its save, my use of htis feature is not expended. When I cast the spell in this way, its range becomes 60 feet, and it lasts for 1 minute with no Concentration required. If the target succeeds on its save, choose one Malediction curse, the target suffers from that curse instead.",
      ]),
    },
    "subclassfeature10": {
      name: "Crown of Horns",
      source: [["LA:CM:PR", 43]],
      minlevel: 10,
	  action : "bonus action",
      usages: 1,
      recovery: "short rest",
      description: desc([
        "Once per Long rest as a Bonus Action I can for 1 minute take on the mark of the Horned King granting me the following benefits. I can restore my use of this feature by expending a Pact Magic spell slot (no action required).",
		"Dark Heart: Once on each of my turns when I dmg a crea, the target takes an extra 1d8 Necro dmg.",
		"King of All: I radiate an aura of power in a 20ft Emanation that originates from me. When I activate this feature, and at the start fo each of my turns, I can choose a crea I can see in the aura. The crea must succeed a Cha save or suffer one fo the following effects of my choice.", 
		"-Enticement. The target has the Charmed condition.", 
		"-Wickedness. The target has Disadvantage on attack rolls and ability checks.", 
		"-Terror. The target has the Frightened condition and must move away from me by the safest route durring its turn unless there is nowhere to move.",
      ]),
    },
    "subclassfeature14": {
      name: "Gather the Coven",
      source: [["LA:CM:PR", 43]],
      minlevel: 14,
	  action : [["bonus action", "Fly By Night"]],
	  usages : 1,
	  recovery : "short rest",
      description: desc([
        "I can perform a 1-hour ritual to bond with up to six willing creatures. This bond grants the following benefits (see notes page).",
      ]),
	  toNotesPage : [{
		  name : "Coven Bond",
		  note : [
			"Witchcraft. Choose one of the curses from my Malediction feature. The bonded creatures can now each use that Reaction option once, and they regain the ability to do so when they finish a Long Rest",
			"Fly By Night. As a Bonus Action, choose one of the bonded creatures. If the target and I are on the same plane of existence, I magically teleport to the nearest unoccupied space next to the creature. i can use this beneifit once, and I regain the ability to do so when I finish a Short or Long Rest. If my Crown of Horns feature is active when I use this Bonus Action, the use isn't expended.",
			"Hand of the King. While my Crown of Horns feature is active, the first time a bonded creature damagesanother creature during its turn, the target takes an extra 1d10 Necrotic damage.",
		  ]
	  }],		  
    },
  },
});
AddSubClass("wizard", "occultist", {
  regExpSearch: /^(?=.*(wizard))(?=.*(occultist)).*$/i,
  subname: "Occultist",
  source: [["LA:CM:PR", 42]],
  features: {
    "subclassfeature3": {
      name: "Forbidden Knowledge",
      source: [["LA:CM:PR", 44]],
      minlevel: 3,
	  languageProfs : ["Deep Speech", 1],
	  spellcastingBonus: [{
		name: "Forbidden Knowledge",
		"class": "warlock",
		times : 1,
		level: [1, 1],
		prepared : true,
	  }],
      description: desc([
        "I learn the Deep Speech language or One language of choice, additionally, choose a level 1 spell from the Warlock spell list, this spell is always prepared and can be changed when I finish a Long Rest.",
      ]),
    },
    "subclassfeature3.1": {
      name: "Intrusion",
      source: [["LA:CM:PR", 44]],
      minlevel: 3,
	  action : ["bonus action", " (expend spell slot)"],
	  usages : 1,
	  recovery : "long rest",
	  additional : ["", "", "Intrusion Die Starting Size 1d6", "Intrusion Die Starting Size 1d6", "Intrusion Die Starting Size 1d8", "Intrusion Die Starting Size 1d8", "Intrusion Die Starting Size 1d8", "Intrusion Die Starting Size 1d8", "Intrusion Die Starting Size 1d8", "Intrusion Die Starting Size 1d8", "Intrusion Die Starting Size 1d10", "Intrusion Die Starting Size 1d10", "Intrusion Die Starting Size 1d10", "Intrusion Die Starting Size 1d10", "Intrusion Die Starting Size 1d10", "Intrusion Die Starting Size 1d10", "Intrusion Die Starting Size 1d12", "Intrusion Die Starting Size 1d12", "Intrusion Die Starting Size 1d12", "Intrusion Die Starting Size 1d12",],
      description: desc([
        "I gain a die called an Intrusion Die which starts out as a d6, as I use my features the ID can increase or decrease along this progression (d2, d3, d4, d6, d8, d10, d12).",
		"When I use a feature that risks Intrusion roll my ID. On a 2 or higher, no Intrusion occurs, and the ID reduces in size by one step.",
		"On a roll of 1, the ID rises in size by one step, and I roll on the Intrusion table (see notes page) to determine what happens as reality fractures. Intrusions use my spell save DC.",
		"Additionally I can risk Intrusion when I cast a spell using a spell slot to gain one of the following benefits.", 
		"-Overwhelming Mind. One target of the spell has Disadvantage on the first saving throw made against it.", 
		"-Seeking Eye. I have Advantage on the first attack roll I make for the spell.",
      ]),
	  toNotesPage : [{
		  name : "Intrusions table",
		  note : [
			"1d12		Effect",
			"1			I feel a presence behind me that whispers incomprehensible things into my soul. Until th end of my next turn, I can only do one of the following on a turn: take an action, a Bonus Action, or move.",
			"2			Space twists and melts in a 30ft Emanation around me. Each creature (including me) in the area struggles against the warping of reality. An affected creature's Speed is halved until the end of my next turn.",
			"3			The nearest other creature within 60ft of me must succeed on a Con save or take Necrotic damage equal to two rolls of my ID (at its starting size), and I regain a number of Hit Points equal to the damage dealt.",
			"4			Reality tears in my space until the end of my next turn. Me and each creature that can see the tear must succeed on a Wisdom save or have the Frightened ondition while the tear exists.",
			"5			One of my arms warps into an alien appendage, such as a distorted version of an arm or a twisting tentacle, for 1 minute. I can make Unarmed Strikes with the limb using my spell attack bonus. Instead of the normal damage, roll a number of my ID (at its starting size) equal to my Prof Bonus. The target takes Acid damage equal to the total rolled.",
			"6			Alien landscapes overlay my vision, giving me the Blinded condition until the end of my next turn.",
			"7			Unnatural thoughts disorient me, giving me the Incapacitated condition until the end of my next turn.",
			"8			I experience an instant of terrible clarity. I take Psychic damage equal to two rolls of my ID (at its starting size), and for 1 minute, my spell save DC is increased by 2.",
			"9			I regain an expended spell slot of level 5 or lower (my choice), and I take Necrotic damage equal to twice the slot's level. This damage can't be reduced or prevented in any way.",
			"10			When I cause this Intrusion and at the end of each of my turns for 1 minute, pulses in the fabric of space fill a 15ft Emanation originating from me, giving me and each creature in it the Prone condition.",
			"11			For 1 hour, I hear whispered, disembodied thoughts of hateful scorn directed at me. While I hear the whispers, I have Disadvantage on ability checks and saving throws that rely on Wisdom.",
			"12			An Aberration or a Fiend with a CR equal to my Wizard level or lower (DM's choice) appears in an unoccupied space within 30ft of me. The DM decides the creature's attitude (Hostile/Indifferent/Friendly) and actions.",
		  ],
	  }],		  
    },
    "subclassfeature6": {
      name: "Reality Tear",
      source: [["LA:CM:PR", 44]],
      minlevel: 6,
	  spellcastingBonus: [{
		name: "Reality Tear",
		"class": "warlock",
		times : 1,
		level: [1, 3],
		prepared : true,
	  }],
	  usages : 1,
	  recovery : "long rest",
      description: desc([
        "Choose a level 3 or lower spell from the Warlock spell list, this spell is always prepared and can be changed when I finish a Long Rest. I can risk Intrusion to remove the need to Concentrate on it, in which it lasts for the duration or 1 minute whichever is shorter. Additionally I can cause an automatic Inrusion (and increase the die's size one step, up to its starting size) to cast the spell once without a spell slot, and I regain the ability to do so when I finish a Long Rest.",
      ]),
    },
    "subclassfeature10": {
      name: "Occult Presence",
      source: [["LA:CM:PR", 45]],
      minlevel: 10,
	  action : [["bonus action", " (Cause Intrusion and Change)"]],
      description: desc([
        "When I cause an Intrusion, I can roll twice and choose the result to use, and I can negate an Intrusion by gaining 1 level of Exhaustion. Additionally I can choose one benefit use 'choose feature' button to select the option. I can change my benefit when I finish a Long Rest or As a Bonus Action, I can cause an automatic Intrusion (and increase the die's size one step, up to its starting size) to change my chosen benfit.",
      ]),
	  choices : ["Alien Consciousness", "Cosmic Resistance", "Spacial Domination"],
	  "alien consciousness" : {
		  name : "Alien Consciousness",
		  savetxt : { immune : ["Charmed", "Frightened", "Possessed"], },
		  description : desc([
			"I gain Immunity to the Charmed and Frightened conditions, and I can't be Possessed.",
		  ]),
	  },
	  "cosmic resistance" : {
		  name : "Cosmic Resistance",
		  dmgres : ["Necrotic", "Psychic"],
		  description : desc([
			"I gain Resistance to Necrotic and Psychic damage.",
		  ]),
	  },
	  "spacial domination" : {
		  name : "Spacial Domination",
		  speed: {
			fly: {spd: "walk", enc: "walk"}
		  },
		  description : desc([
			"I gain a Fly Speed equal to my Speed and can hover.",
		  ]),
	  },
    },
    "subclassfeature14": {
	  name : "Beyond Space",
	  source : [["LA:CM:PR", 45]],
	  minlevel : 14,
	  limfeaname : "Beyond Space (Teleport)",
	  usages : 1,
	  recovery : "long rest",
	  spellcastingBonus: [{
		name: "Beyond Space",
		spells : ["scrying"],
		selection : ["scrying"],
		times : 1,
		prepared : true,
	  }],
	  description : desc([
		"I always have the Scrying spell prepared, when I cast Scrying, I can risk Intrusion to choose one of the following.", 
		"-All Knowing. Treat my connection to a target creature as if I have part of its body.", 
		"-All Seeing. Cast the spell as an action instead of its normal castign time.", 
		"When I cast Scrying, during the spell's duration, I can cause an automatic Intrusion (and increase the die's size one step, up to its starting size) to teleport myself, and any willing creatures within 10 feet of me, to unoocupied spaces I can see through the scrying sensor. Once I teleport in this way, I cant do so again until I finish a Long Rest.",
	  ]),
	},
  },
});
AddSubClass("wizard", "philosopher", {
  regExpSearch: /^(?=.*(wizard))(?=.*(philosopher)).*$/i,
  subname: "Philosopher",
  source: [["LA:CM:PR", 46]],
  features: {
    "subclassfeature3": {
      name: "Alchemical Knowledge",
      source: [["LA:CM:PR", 46]],
      minlevel: 3,
	  toolProfs : ["Alchemist's Supplies"],
      description: desc([
        "I gain a set of Alchemist's Supplies. I have proficiency with it and can use it as an Arcane Focus. Additionally, I can use Alchemist's Supplies instead of the normal tool to craft a magic item.",
      ]),
    },
    "subclassfeature3.1": {
      name: "Quintessence",
      source: [["LA:CM:PR", 46]],
      minlevel: 3,
	  spellcastingBonus : [{
		  name : "Quintessence",
		  spells : ["dissolution"],
		  selection : ["dissolution"],
		  times : 1,
	  }],
      description: desc([
        "I gain the Dissolution cantrip. A creature or object I reduce to 0 Hit Points with this cantrip is destroyed. If the target was Small or larger, it dissolves into a measure (1 ounce) of crystaline powder called Quintessence. I can have a maximum amouont of Quintessence equal to twice my Int mod at one time (minimum of 2 measures). If I create more, the oldest measure vanishes. I can use Quintessnce I am touchingin the following ways (see notes page).",
      ]),
	  toNotesPage : [{
		  name : "Quintessence Usages",
		  note : [
			"Material Component. When I cast a spell I can expend Quintessence to serve as the spell's Material components up to a value of 100 GP per Quintessence expended.",
			"Reagent. When I scribe a spell into my spellbook, or when I use Alchemist's Supplies to craft a magic item, I can expend Quintessence to serve as 50 GP worth of material for the task per Quintessence expended.",
			"Vitriolic Enhancement. When I cast a spell that deals damage, I can expend 1 QUuntessence as an additional Material component to change one damage type the spell deals to Force.",
		  ],
	  }],		  
    },
    "subclassfeature6": {
      name: "Albedo",
      source: [["LA:CM:PR", 47]],
      minlevel: 6,
      description: desc([
        "I can purify my Quintessence to amplify my spells. When I cast a spell using a spell slot, I can expend 1 Quintessence as a Material component to increase the level of the spell slot by 1, up to 9. The maximum Quintessence I can expend in this way on a given spell is half of my Prof Bonus (Rounded up).",
      ]),
    },
    "subclassfeature10": {
      name: "Citrinas",
      source: [["LA:CM:PR", 47]],
      minlevel: 10,
	  extraLimitedFeatures : [{
		  name : "Creation",
		  usages : 1,
		  recovery : "long rest",
	  }, {
		  name : "Fabricate",
		  usages : 1,
		  recovery : "long rest",
	  }],
	  spellcastingBonus : [{
		  name : "Citrinas",
		  spells : ["creation", "fabricate"],
		  selection : ["creation", "fabricate"],
		  times : 2,
		  firstCol : "oncelr",
	  }],
      description: desc([
        "I always have the Creation and Fabricate spells prepared, and I can cast each spell once without expending a spel slot, regaining the ability to do so when I finish a Long Rest. When i cast a spell usingthis feature, I can cast the spell as an action rather than its normal casting time. I can also cast the spell normally using spell slots of the appropriate level.",
		"Additionally, when I cast Creation, I can expend a number of Quintessence up to my Int mod (min of 1) to multiply the spell's duration by 1 plus the amount expended.",
      ]),
    },
    "subclassfeature14": {
	  name : "Rubedo",
	  source : [["LA:CM:PR", 47]],
	  minlevel : 14,
	  action : [["reaction", "Equivalent Exchange (5 Q)"]],
	  description : desc([
		"When I finish a Short or Long Rest, I can expend 10 Quintessence to create a philosopher's stone - a translucent red crystal, The stone is a Tiny magical object with AC 19, HP 20, and Immunity to all damag except Force. If I create a second stone the first one vanishes. While I carry the stone, It grants me the following benefits. (See notes page).",
	  ]),
	  toNotesPage : [{
		  name : "Philosopher's Stone Benefits",
		  note : [
			"Amplification. When I cast a spell, I can expend up to 2 Quintessence as an additional Material component to increase my spell save DC for that spell by the same amount.",
			"Equivalent Exchange. When I fail a saving throw, I can take a Reaction to expend 5 Quintessence to succeed the save instead.",
			"Longevity. I stop againg and don't suffer any effects from old age, including dying from it.",
			"Sympathy. The stone counts as part of my body for the purpose of the Scrying spell and for spells that restore me to life if I die. The stone itself serves as the Material component for the spell (if any) and is destroyed when the spell is cast.",
		  ],
	  }],
	},
  },
});
//Backgrounds
BackgroundList.amnesiac = {
  regExpSearch: /^(?=.*amnesiac).*$/i,
  name: "Amnesiac",
  source: [["LA:CM:PR", 49]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skillstxt: "Choose two",
  toolProfs : ["Tool", 1],
  gold: 11,
  equipleft: [
    ["Book (personal notes)", "", 5],
    ["Ink, 1 ounce bottle of", "", ""],
    ["Ink pen", "", 4],
  ],
  equipright: [
    ["Traveler's clothes", "", 4],
  ],
  feature: "Memory Starved [Origin]",
  trait: [
    "Scattered Memories. I don't choose the skill proficieincies or tool proficiency when I select this background, and I don't determine the two languages that are part of my origin - these are parts of my past that I am missing. Instead, I can pick one of those proficiencies or the languages during play at any time. The knowledge might return in a spontaneous flash, even as I make a roll that relies on the proficiency, or slowly emerge as I struggle to solve a problem. Once I choose one of these features, I can't choos e another until I gain a level."
  ],
};
BackgroundFeatureList["memory starved [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 49]],
  eval: function () {
    AddFeat("Memory Starved [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Memory Starved [Origin]");
  }
};
BackgroundList["crimson aspirant"] = {
  regExpSearch: /^(?=.*crimson aspirant).*$/i,
  name: "Crimson Aspirant",
  source: [["LA:CM:PR", 50]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Arcana", "Medicine"],
  toolProfs : ["Herbalism Kit"],
  gold: 10,
  equipleft: [
    ["Herbalism kit", "", 3],
    ["Healer's kit", "", 3],
    ["Vials", 3, ""],
  ],
  equipright: [
    ["Dagger", "", 1],
	["Fine clothes", "", 6],
  ],
  feature: "Crimson Ritualist [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["crimson ritualist [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 50]],
  eval: function () {
    AddFeat("Crimson Ritualist [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Crimson Ritualist [Origin]");
  }
};
BackgroundList["crossroads gambler"] = {
  regExpSearch: /^(?=.*crossroads gambler).*$/i,
  name: "Crossroads Gambler",
  source: [["LA:CM:PR", 51]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Deception", "Insight"],
  toolProfs : ["Gaming Set", 1],
  gold: 23,
  equipleft: [
    ["Gaming set (chosen by background)", "", ""],
    ["Caltrops", "", 2],
    ["Fine wine (bottle)", "", 2],
  ],
  equipright: [
	["Fine clothes", "", 6],
  ],
  feature: "Fate Gambler [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["fate gambler [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 51]],
  eval: function () {
    AddFeat("Fate Gambler [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Fate Gambler [Origin]");
  }
};
BackgroundList.cultist = {
  regExpSearch: /^(?=.*cultist).*$/i,
  name: "Cultist",
  source: [["LA:CM:PR", 52]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Arcana"],
  skillstxt : "Choose 1 based on Cultist Affinity",
  languageProfs : ["Cultist Affinity"],
  toolProfs : ["Calligrapher's Supplies"],
  gold: 10,
  equipleft: [
    ["Calligraher's Supplies", "", 5],
    ["Holy Symbol (Amulet: cult insignia)", "", 1],
  ],
  equipright: [
	["Costume (Cult Garb)", "", 4],
	["Traveler's clothes", "", 4],
  ],
  feature: "Cult Initiate [Origin]",
  trait: [
    "Cultist Affinities",
	"Cult Patron	Skill		Language",
	"Aberration		Perception	Deep Speech",
	"Celestial		Religion	Celestial",
	"Fiend(Demon)	Religion	Abyssal",
	"Fiend(Devil)	Religion	Infernal",
	"Fey			Nature		Sylvan",
  ],
};
BackgroundFeatureList["cult initiate [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 52]],
  eval: function () {
    AddFeat("Cult Initiate [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Cult Initiate [Origin]");
  }
};
BackgroundList["druskenvald dweller"] = {
  regExpSearch: /^(?=.*druskenvald dweller).*$/i,
  name: "Druskenvald Dweller",
  source: [["LA:CM:PR", 53]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Survival"],
  skillstxt : "Choose 1 based on Cultist Affinity",
  toolProfs : ["Province Affinity", 1],
  gold: 10,
  equipleft: [
    ["Artisan tools (province affinity)", "", ""],
    ["Map (Druskenvald's provinces)", "", ""],
  ],
  equipright: [
	["Traveler's clothes", "", 4],
  ],
  trait: [
    "Province Affinities",
	"Ardengloom: History and Herbalism Kit, Astramar: Arcana and Navigator's Tools, Bubonia: Medicine and Poisoner's Kit, Chernabos: Deception and Calligrapher's Supplies, Edwardia: Investigation and Tinker's Tools, Enoch: Nature and Leatherworker's Tools, Kalero: Performance and Musical Instrument, Olmarsh: Arcana and Cartographer's Supplies, Nerukhet: Persuasion and Weaver's Tools, Pholsense: Religion and Mason's Tools, Picco: Performance and Woodworker's Tools, Syndramas: Athletics and Cook's Utensils, Zulrogg: Survival and Herbalism Kit.",
  ],
};
BackgroundList.experiment = {
  regExpSearch: /^(?=.*experiment).*$/i,
  name: "Experiment",
  source: [["LA:CM:PR", 54]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Intimidation", "Medicine"],
  toolProfs : ["Alchemist's Supplies"],
  gold: 5,
  equipleft: [
    ["Alchemist's Supplies", "", 8],
    ["Manacles", "", 6],
  ],
  equipright: [
	["Perfume (to cover chemical smell)", "", ""],
	["Traveler's clothes (with hooded cloak)", "", 4],
  ],
  feature: "Altered [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["altered [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 54]],
  eval: function () {
    AddFeat("Altered [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Altered [Origin]");
  }
};
BackgroundList["ghostlight passenger"] = {
  regExpSearch: /^(?=.*ghostlight passenger).*$/i,
  name: "Ghostlight Passenger",
  source: [["LA:CM:PR", 55]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Insight", "Persuasion"],
  toolProfs : ["Smith's Tools"],
  gold: 5,
  equipleft: [
    ["Smith's Tools", "", 8],
    ["Bullseye Lantern", "", 2],
  ],
  equipright: [
	["Oil, flasks of", 3, 1],
	["Fine clothes", "", 6],
  ],
  feature: "Ghostlight Medium [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["ghostlight medium [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 55]],
  eval: function () {
    AddFeat("Ghostlight Medium [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Ghostlight Medium [Origin]");
  }
};
BackgroundList["night stalker"] = {
  regExpSearch: /^(?=.*night stalker).*$/i,
  name: "Night Stalker",
  source: [["LA:CM:PR", 56]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Stealth"],
  skillstxt : "Choose one from: Arcana, History, Religion, Nature",
  toolProfs : ["Leatherworker's Tools"],
  gold: 8,
  equipleft: [
    ["Leatherworker's tools", "", 5],
    ["Book (one creature type)", "", 5],
	["Hooded lantern", "", 2],
	["Hunting trap", "", 25],
  ],
  equipright: [
	["Oil, flasks of", 3, 1],
	["Traveler's clothes", "", 4],
  ],
  feature: "Hunter of Hunters [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["hunter of hunters [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 56]],
  eval: function () {
    AddFeat("Hunter of Hunters [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Hunter of Hunters [Origin]");
  }
};
BackgroundList["reflected wanderer"] = {
  regExpSearch: /^(?=.*reflected wanderer).*$/i,
  name: "Reflected Wanderer",
  source: [["LA:CM:PR", 57]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Deception", "Investigation"],
  toolProfs : ["Disguise Kit"],
  gold: 16,
  equipleft: [
    ["Disguise kit", "", 3],
    ["Mirror", "", 0.5],
  ],
  equipright: [
	["Traveler's clothes", "", 4],
  ],
  feature: "Unreflected [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["unreflected [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 57]],
  eval: function () {
    AddFeat("Unreflected [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Unreflected [Origin]");
  }
};
BackgroundList["rest warden"] = {
  regExpSearch: /^(?=.*rest warden).*$/i,
  name: "Rest Warden",
  source: [["LA:CM:PR", 58]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Religion", "Survival"],
  toolProfs : ["Mason's Tools"],
  gold: 10,
  equipleft: [
    ["Mason's Tools", "", 8],
    ["Hooded lantern", "", 2],
	["Oil, flasks of", 3, 1],
  ],
  equipright: [
	["Traveler's clothes (with thick gloves and dark-colored hood)", "", 4],
	["Shovel", "", 5],
	["Soap", "", ""],
  ],
  feature: "Grave Keeper [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["grave keeper [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 58]],
  eval: function () {
    AddFeat("Grave Keeper [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Grave Keeper [Origin]");
  }
};
BackgroundList.reveler = {
  regExpSearch: /^(?=.*reveler).*$/i,
  name: "Reveler",
  source: [["LA:CM:PR", 59]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Performance", "Stealth"],
  languageProfs : ["One Language of Choice", 1],
  toolProfs : ["Musical Instrument", 1],
  gold: 10,
  equipleft: [
    ["Musical Instrument", "", ""],
    ["Ball Bearings", "", 2],
	["Costume (jovial character with a laughing mask)", "", 4],
  ],
  equipright: [
	["Hunting trap", "", 25],
	["Manacles", "", 6],
	["Torches (for juggling)", 3, 1],
	["Traveler's clothes", "", 4],
  ],
  feature: "Reveling Fool [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["reveling fool [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 59]],
  eval: function () {
    AddFeat("Reveling Fool [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Reveling Fool [Origin]");
  }
};
BackgroundList["scholar of the forbidden"] = {
  regExpSearch: /^(?=.*scholar of the forbidden).*$/i,
  name: "Scholar of the Forbidden",
  source: [["LA:CM:PR", 60]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Arcana", "Intimidation"],
  languageProfs : ["One Language of Choice", 1],
  toolProfs : ["Calligrapher's Supplies"],
  gold: 2,
  equipleft: [
    ["Calligrapher's Supplies", "", 5],
    ["Book (a topic of arcana)", "", 5],
	["Ink, 1 ounce bottle of", "", ""],
	["Ink pen", "", ""],
  ],
  equipright: [
	["Lamp", "", 1],
	["Oil, flasks of", 3, 1],
	["Paper, sheets of", 10, ""],
  ],
  feature: "Dread Speech [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["dread speech [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 60]],
  eval: function () {
    AddFeat("Dread Speech [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Dread Speech [Origin]");
  }
};
BackgroundList["wicker weaver"] = {
  regExpSearch: /^(?=.*wicker weaver).*$/i,
  name: "Wicker Weaver",
  source: [["LA:CM:PR", 61]],
  scorestxt: ["+2 and +1 to 2 different scores -or- +1 to 3 different scores"],
  skills: ["Insight", "Nature"],
  languageProfs : ["Sylvan"],
  toolProfs : ["Weaver's Tools"],
  gold: 19,
  equipleft: [
    ["Weaver's Tools", "", 5],
    ["Basket (with dry reeds ready to weave)", "", 2],
	["Book (druidic lore)", "", 5],
	["Iron pot", "", 10],
  ],
  equipright: [
	["Quarterstaff", "", 4],
	["Traveler's clothes", "", 4],
  ],
  feature: "Charm Twister [Origin]",
  trait: [
    "",
  ],
};
BackgroundFeatureList["charm twister [origin]"] = {
  description: desc([
    "",
  ]),
  source: [["LA:CM:PR", 61]],
  eval: function () {
    AddFeat("Charm Twister [Origin]");
  },
  removeeval: function () {
    RemoveFeat("Charm Twister [Origin]");
  }
};
//Feats
//Origin Feats
FeatsList.altered = {
  name: "Altered [Origin]",
  source: [["LA:CM:PR", 63]],
  regExpSearch: /^(?=.*altered).*$/i,
  choices : ["Aquatic Adaptation", "Natural Armor (Dex)", "Natural Armor (Con)", "Natural Weapons", "Night Vision"],
  "aquatic adaptation" : {
	  name : "Aquatic Adaptation",
	  speed : { swim : { spd : "walk", enc : "walk"} },
	  description : "I have gills or mucus membranes that allow me to breathe water, and I have webbed extremities that grant me a Swim Speed equal to your Speed.",
  },
  "natural armor (dex)" : {
	  name : "Natural Armor (Dex)",
	  armorOptions: [{
        regExpSearch: /justToAddToDropDownAndEffectWildShape/,
        name: "Natural Armor (Dex)",
        source: [["LA:CM:PR", 63]],
        ac: 13,
        affectsWildShape: true,
        selectNow: true
      }],
	  description : "I have scales, plates or thick hide that grants you an AC of 13 + my Dexterity modifier.",
  },
  "natural armor (con)" : {
	  name : "Natural Armor (Con)",
	  armorOptions: [{
        regExpSearch: /justToAddToDropDownAndEffectWildShape/,
        name: "Natural Armor (Con)",
        source: [["LA:CM:PR", 63]],
        ac: "13+Con",
		dex : -10,
        affectsWildShape: true,
        selectNow: true
      }],
	  description : "I have scales, plates or thick hide that grants you an AC of 13 + my Constitution modifier.",
  },
  "natural weapons" : {
	  name : "Natural Weapons",
	  weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /natural weapons/i,
		name : "Natural Weapons",
		source : [["LA:CM:PR", 63]],
		ability : 1,
		damage : [1, 8, "Blud/Pierc/Slash"],
		description: "Depending on the Natural Weapon the damage changes to the appropriate type.",
	},
	  description : "I have claws, fangs, horns or some other natural weapon that I can use to make Unarmed Strikes that deal 1d8 damage on a hit. The damage is Bludgeoning, Piercing, or Slashing as appropriate to the form.",
  },
  "night vision" : {
	  name : "Night Vision",
	  vision: [["Darkvision", "fixed 60"], ["Darkvision", "+30"]],
	  description : "I have Darkvision with a range of 60 feet. If I already have Darkvision, its range increases by 30 feet.",
  },
  description: "I have augmented my body to take on new traits, use the 'choose feature' button to select my alteration.",
  descriptionFull: desc([
    "You have been changed through magic, science, or a volatile blend of the two. You have a blatant physical augmentation of your choice from the options below. The augmentation is obvious-such as with stiches, grafts or other creature's body parts, or implants-unless disguised.",
    "Aquatic Adaptation. You have gills or mucus membranes that allow you to breathe water, and you have webbed extremities that grant you a Swim Speed equal to your Speed.",
    "Natural Armor. You have scales, plates or thick hide that grants you an AC of 13 + your Dexterity or Constitution modifier (choose the ability when you select this feat).",
	"Natural Weapon. You have claws, fangs, horns or some other natural weapon that you can use to make Unarmed Strikes that deal 1d8 damage on a hit. The damage is Bludgeoning, Piercing, or Slashing as appropriate to the form.",
	"Night Vision. You have Darkvision with a range of 60 feet. If you already have Darkvision, its range increases by 30 feet.",
  ]),
};
FeatsList["charm twister"] = {
  name: "Charm Twister [Origin]",
  source: [["LA:CM:PR", 63]],
  regExpSearch: /^(?=.*charm twister).*$/i,
  action : [["action", "Twisted Hex"]],
  limfeaname : "Bless",
  usages : 1,
  recovery : "long rest",
  spellcastingAbility: [4, 5, 6],
  spellcastingBonus : [{
	  name : "Old Blessing",
	  spells : ["bless"],
	  selection : ["bless"],
	  times : 1,
	  firstCol : "oncelr",
  }],
  description: "I gain the ability to weave wicker charms, 1/LR I can cast the Bless spell with this feature targeting only creas carrying a wicker charm I've woven. I can also cast this spell using any spell slots I have. Additionally as a Magic action, I can target one crea, choose an ability, while the chosen crea is carrying my charm or the charm is in a place the crea considers home, the crea has Disadv on checks and attack rolls with the chosen ability. Once the crea fails a check or attack roll they can roll a Cha save, DC=8+Prof+spellcasting ability chosen for this feat destroying the charm on a success. I can have only one crea targeted at a time for this option.",
  descriptionFull: desc([
    "You know hedge remedies and hexes passed down through Old Ways teachings, nd you can impart them into small wicker charms you weave. You gain the following benefits.",
	"Old Blessing. You can cast the Bless spell once using this benefit, targeting only creatures carrying a wicker charm you've woven, and you can't do so again until you finish a Longrest. You can also cast the spell using any spell slots you have. Your spellcasting ability for castingthe spell in this way is Intelligence, Wisdom, or Charisma (choose the ability when you select this feat).",
	"Twisted Hex. As a Magic action, you can weave spite into a wicker charm you touch. Choose an ability. When another creature is carryig the charm, or while the charm is within an area that the creature consideres home, it has Disadvantage on ability checks and attack rolls using the chosen ability. When the creature fails one of these rolls, it can make a Charisma saving throw, destroying the charm on a success (DC = 8 plus your Proficiency Bonus and the ability modifier you chose for Old Blessing). You can only have one Twisted Hex charm at a time. If you make a new one, the previous one loses its magic.",
  ]),
};
FeatsList["crimson ritualist"] = {
  name: "Crimson Ritualist [Origin]",
  source: [["LA:CM:PR", 63]],
  regExpSearch: /^(?=.*crimson ritualist).*$/i,
  action : [["bonus action", "Bottled Life (Drink)"]],
  spellcastingAbility: [4, 5, 6],
  spellcastingBonus : [{
	  name : "Blood Lash",
	  spells : ["blood bolt"],
	  selection : ["blood bolt"],
	  times : 1,
	  firstCol : "oncelr",
  }],
  description: "I learn the Blood Bolt cantrip. Additionally when I finish a Long Rest, I can perform a 1-minute ritual to vial some of my Hit Dice (up to my Prof Bonus) as a Bonus Action a creature can drink the vial regaining a number of Hit Points equal to the number of my Hit Dice bottled plus their Constitution, the vial remains potent until I finish a Long Rest.",
  descriptionFull: desc([
    "Your study of blood magic and life force has borne fuit, granting you the following benefits.",
	"Blood Lash. You learn the Blood Bolt cantrip. Your spellcasting ability for it is Intelligence, Wisdom, or Charisma (choose the ability when you select this feat).",
	"Bottled Life. When you finish a Long Rest, you can perform a 1-minute ritual to transfer some of your life essence into a vessel for later use. Expend a number of Hit Point Dice up to your Proficiency Bonus, and bleed into a vial of water or other liquid. As a Bonus Action, a creature can drink the vial to roll the Hit Dice you expended. The creature regains a number of Hit Points equal to the total rolled plus its Constitution modifier. The vial remains potent until you finish a Long Rest.",
  ]),
};
FeatsList["cult initiate"] = {
  name: "Cult Initiate [Origin]",
  source: [["LA:CM:PR", 63]],
  regExpSearch: /^(?=.*cult initiate).*$/i,
  spellcastingAbility: [4, 5, 6],
  limfeaname : "Cult Initiate: Level 1 Spell",
  usages : 1,
  recovery : "short rest",
  spellcastingBonus: [{
	name: "Cult Initiate: Two Cantrips",
	"class": "warlock",
	times : 2,
	level: [0, 0],
  }, {
	name: "Cult Initiate: Level 1 Spell",
	"class": "warlock",
	times : 1,
	level: [1, 1],
	firstCol : "oncesr",
  }],
  description: "I learn two Cantrips and one Level 1 spell from the Warlock Spell List, I can cast the Level 1 spell for free once per Short or Long Rest with this feature, or with any spell slots that I have available. I can change out one spell when I gain a level but the new spell must be of the same level as the one I am changing out.",
  descriptionFull: desc([
    "Your cult instructs you in eldritch rites, granting you the following benefits.",
	"Two Cantrips. You learn two cantrips of your choice from the Warlock spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feat's spells (choose the ability when you select this feat).",
	"Level 1 Spell. Choose a level 1 spell from the Warlock spell list. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Short or Long Rest. You can also cast the spell using an spell slots you have.",
	"Spell Change. Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the Warlock spell list.",
  ]),
};
FeatsList["dread speech"] = {
  name: "Dread Speech [Origin]",
  source: [["LA:CM:PR", 64]],
  regExpSearch: /^(?=.*dread speech).*$/i,
  action : [["bonus action", "Eldritch Word"]],
  extraLimitedFeatures : [{
	  name : "Bane",
	  usages : 1,
	  recovery : "long rest",
  }, {
	  name : "Eldritch Word",
	  usages : 1,
	  recovery : "short rest",
  }],
  limfeaname : "Bane",
  usages : 1,
  recovery : "long rest",
  spellcastingAbility: [4, 5, 6],
  spellcastingBonus : [{
	  name : "Shred Fate",
	  spells : ["bane"],
	  selection : ["bane"],
	  times : 1,
	  firstCol : "oncelr",
  }],
  description: "I gain the Bane spell and can cast it for free once per Long Rest or using any spell slots I have. Once per Short or Long Rest As a Bonus Action, I can speak a magical word forcing a creature within 60 feet of me to make a Wis save or have the Frightened condition until the start of my next turn, I can use this Bonus Action additional times before a rest, but each time I do I take 1d6 Necrotic damage that can not be reduced/prevented in any way.",
  descriptionFull: desc([
    "You have articulated a few words of forbidden truth that resonate with-and fray-the fabric of creation, grantingyou the following benefits.",
	"Eldritch Word. As a Bonus Action, you can speak a magical word aloud to force a creature within 60 feet of yourself to make a Wisdom saving throw (DC = 8 pls your Proficiency Bonus and Intelligence, Wisdom, or Charisma modifier; choose the ability when you select this feat). On a failed save, the target hasthe Frightened condition until the start of your next turn. You can use this benefit safely once, and you regain the ability to do so when you finish a Short or Long Rest. You can use it again before resting, but you take 1d6 Necrotic damage, which can't be reduced or prevented in any way.",
	"Shred Fate. Your dread secrets can unravel the destiny of your foes. You always have the Bane spell prepared, and your spellcasting ability for it is the ability you chose for Eldritch Word. You can cast it once without Material components o a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest. You can also cast the spell using any spell slots you have.",
  ]),
};
FeatsList["fate gambler"] = {
  name: "Fate Gambler [Origin]",
  source: [["LA:CM:PR", 64]],
  regExpSearch: /^(?=.*fate gambler).*$/i,
  action : [["bonus action", "Win Big (Temp HP)"]],
  description: "When I succeed on an ability check made against another creature, when I reduce a creature with a cr of 1/8 or higher to 0 hit points, or a creature of cr 1/8 or higher fails a saving throw I forced it to make I gain Heroic Inspiration if I don't already have it. Additionally as a Bonus Action I can expend my Heroic Inspiration to gain a number of Temp HP equal to my level.",
  descriptionFull: desc([
    "Coming out ahead, whether in games of chance or in live-or-death contention, fills you with resolve and vigor. You gain the following benefits.",
	"Bet Big. If you don't already have it, you gain Heroic Inspiration whenever you succeed on an bility check made against another creature, when you reduce a creature to 0 Hit Points, or when a creature fails a saving throw you forced it to make. If, in any of these cases, the creature has a CR of 0 or lacks a CR (such as another character), you don't gain Heroic Inspiration.",
	"Win Big. As a Bonus Action, you can expend your Heroic Inspiration to gain a number of Temporary Hit Points equal to your level.",
  ]),
};
FeatsList["ghostlight medium"] = {
  name: "Ghostlight Medium [Origin]",
  source: [["LA:CM:PR", 64]],
  regExpSearch: /^(?=.*ghostlight medium).*$/i,
  action : [["bonus action", "Spirit Sense"]],
  limfeaname : "Spirit Sense",
  usages : 1,
  recovery : "short rest",
  description: "Once per Short or Long Rest as a Bonus Action I can sense the presence of Undead or creatures on the Ethereal plane within 60 feet of me and know their distance and direction, additionally when I damage a creature with Incoporeal Movement I can ignore the creature's damage Resistances, if any.",
  descriptionFull: desc([
    "You formed a mystical connection to the Ghostlight Express that affords you insight into the nature of spirits, granting the following benefits.",
	"Ghostly Touch. When you damage creature with the Incoporeal Movement trait, you can ignore the creature's damage Resistances, if any.",
	"Spirit Sense. As a Bonus Action, you can sense any Undead within 60 feet of you, or an creatures in the Ethereal Plane that overlaps that area. You learn the distance and direction to any creatures you detect (or an Ethereal creature's equivalent position on your plane). Once you detect a creature with this benefit, you can't use it again until you finish a Short or Long Rest.",
  ]),
};
FeatsList["grave keeper"] = {
  name: "Grave Keeper [Origin]",
  source: [["LA:CM:PR", 64]],
  regExpSearch: /^(?=.*grave keeper).*$/i,
  action : [["action", "Channel Divinity: Turn Undead"]],
  limfeaname : "Channel Divinity: Turn Undead",
  usages : 1,
  recovery : "long rest",
  description: "Once per Long Rest as a Magic action I can use the Cleric's Channel Divinity: Turn Undead, If I have this feature already I gain an additional use of it. Additionally, I can perform a 10-minute ritual to prepare a Medium or smaller corpse expending at least 10 GP worth of materials to prevent the corpse from becoming Undead.",
  descriptionFull: desc([
    "Studying funeral rites and tending the dead's rest has made you a conduit between the worlds of he living and the dead. You gain the following benefits.",
	"Divine Channel. You gain one use of the Channel Divinity feature from the Cleric class, and you can create the Turn Undead effect with it. If you already have Channel Divinity, you add this use to the feature from one class of your choice. Your save DC for this benefit is 8 plus your Wisdom modifier and Proficiency Bonus.",
	"Last Rites. You can enact a 10-minute ritual to prepare the corpse of a Medium orsmaller creature expending at least 10 GP worth of incense, oils, linnen, wraps or similar trappings. The prepared corpse can't become Undead.",
  ]),
};
FeatsList["hunter of hunters"] = {
  name: "Hunter of Hunters [Origin]",
  source: [["LA:CM:PR", 64]],
  regExpSearch: /^(?=.*hunter of hunters).*$/i,
  action : [["bonus action", " (Dead Aim)"]],
  description: "As a Bonus Action, I can study a creature's weak points to ignore it's Resistances, if any, the next time I deal damage before the start of my next turn. Additionally, I have Advantage on ability checks to recall information about creatures.",
  descriptionFull: desc([
    "You are adept at hunting monstrous prey, granting you the following benefits.",
	"Dead Aim. As a Bonus Action, you can scrutinize a creature to spot its vulnerable point. The next time you deal damage to the creature before the start of your next turn, you ignorethe creature's damage Resistances, if any.",
	"Studied Quarry. You have Advantage on ability checks made to recall information about a creature.",
  ]),
};
FeatsList["memory starved"] = {
  name: "Memory Starved [Origin]",
  source: [["LA:CM:PR", 65]],
  regExpSearch: /^(?=.*memory starved).*$/i,
  savetxt : { adv_vs : ["Charmed", "Having memories read or altered"], },
  description: "I have Advantage on Intelligence (Investigation) checks and on saving throws to avoid or end the Charmed condition and to avoid having my memories read or altered.",
  descriptionFull: desc([
    "Your mind ravenously gathers details and desperately clings to its memories and faculties, granting you the following benefits.",
	"Desperate Detail. You have Advantage on Intelligence (Investigation) checks.",
	"Iron Mind. You have Advantage on saving throws made to avoid or end the Charmed condition and to avoid having your memories read or altered.",
  ]),
};
FeatsList["reveling fool"] = {
  name: "Reveling Fool [Origin]",
  source: [["LA:CM:PR", 65]],
  regExpSearch: /^(?=.*reveling fool).*$/i,
  limfeaname : "Tasha's Hideous Laughter",
  usages : 1,
  recovery : "long rest",
  spellcastingAbility: [4, 5, 6],
  spellcastingBonus : [{
	  name : "Jester's Repartee",
	  spells : "tasha's hideous laughter",
	  selection : "tasha's hideous laughter",
	  times : 1,
	  firstCol : "oncelr",
  }],
  description: "I learn the Tasha's Hideous Laughter spell and can cast it once per Long Rest without Material components or a spell slot.I can also cast this spell using any spell slots I have. Additionally, When I don a jovial mask and a foolish costume I am able to get away with minor transgressions against people in a position of authority or station.",
  descriptionFull: desc([
    "You joined a troup of madcap revelers and learned to take on the guise of a fool, channeling otherworldly laughter and joviality. You gain the following benefits.",
	"Fool's Mask. By donning a jovial mask and a fool's, jester's, or clown's costume, you take on a new identity that hides your own. In the guise of the fool, you can get away with minor transgressions against people in positions of authority or station.",
	"Jester's Repartee. You always have the Tasha's Hideous Laughter spell prepared, and your spellcasting ability for it is Intelligence, Wisdom, or Charisma (choose the ability when you select this feat). You can cast it once without Material components or a spell slot, you regain the ability to cast it in this way when you finish a Long Rest. You can also cast the spell using any spell slots you have.",
  ]),
};
FeatsList.unreflected = {
  name: "Unreflected [Origin]",
  source: [["LA:CM:PR", 65]],
  regExpSearch: /^(?=.*unreflected).*$/i,
  description: "Creatures have Disadvantage on Wisdom (Insight) checks against me. Additionally, while I am in a group of at least two other creatures of my type that are no more than one size larger or smaller, I can take the Hide action using Charisma (Deception) instead of Dexterity (Stealth), without the need for cover or being obscured, if I am 5 feet or more away from at least two other such creatures, I am revealed.",
  descriptionFull: desc([
    "Your image is seperated from you, making you unable to cast a refection or shadow, but you're abe to easliy slip notice. You gain the following benefits.",
	"Inscrutable. Creatures have Disadvantage on Wisdom (Insight) checks made against you.",
	"Unremarkable. The loss of some part of yourself leaves you able to fade into the background. WHile you are within a group of at least two other creatures of your type and that are no more than one size larger or smaller than you, you can take the Hide aciton from creatures outside that group by making a Charisma (Deception) chek instead of Dexterity (Stealth), with no need for being behind cover or Heavily Obscured. If you are ever more than 5 feet from at least two other such creatures while hiding this way, you are revealed.",
  ]),
};
//General Feats
FeatsList["death defier"] = {
  name: "Death Defier",
  source: [["LA:CM:PR", 65]],
  regExpSearch: /^(?=.*death defier).*$/i,
  usages : 1,
  recovery : "long rest",
  scores: [0, 0, 1, 0, 0, 0],
  description: "+1 Con. Add Con to Death Saving Throws. Once per Long Rest, if I would be killed right out by an effect without making Death Saving Throws or I would be reduced to 0 Hit Points without dealing damage, I instead am reduced to a number of HP equal to my level.",  
  descriptionFull: desc([
    "When the hand of death reaches for your soul, you have found a way to reject its call. You gain the following benefits.",
    "Ability Score Increase : Increase your Constitution score by 1, to a maximum of 20.",
    "Cling to Life. You add your Constitution modfier (minimum of 1) to Death Saving Throws.",
    "Enduring Vitality. If an effect would kill you outright without Death Saving Throws or would reduce you directly to 0 Hit Points without dealing damage, you are instead reduced to a number of Hit Points equal to your level. You can't use this benefit again until you finish a Long Rest.",
  ]),
  prerequisite: "Level 4",
  prereqeval: function (v) {
    return v.characterLevel >= 4;
  },
};
FeatsList["swift witchcraft"] = {
  name: "Swift Witchcraft",
  source: [["LA:CM:PR", 65]],
  regExpSearch: /^(?=.*swift witchcraft).*$/i,
  action : "action",
  usages : 1,
  recovery : "long rest",
  scorestxt: "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20",
  description: "+1 Int, Wis, or Cha. Once per Long Rest, I can cast a spell with a casting time of 1 minute as an Action.", 
  descriptionFull: desc([
    "You have honed your skills in the rituals of witchcraft and can quickly weave your magic in times of need. You gain the following benefits.",
    "Ability Score Increase : Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
    "Swift Invocation. You can use an action to cast a spell that has a casting time of1 minute. Once you sue this benefit, you can't do so again until you finish a Long Rest.",
  ]),
  prerequisite: "Level 4 and The Spellcasting or Pact Magic Feature",
  prereqeval: function (v) {
    return v.characterLevel >= 4 && v.isSpellcaster;
  },
};
//Dark Bargains
FeatsList["dark bargains"] = {
	name : "Dark Bargains [Supernatural Gifts]",
	source : [["LA:CM:PR", 68]],
	regExpSearch : /dark bargains/i,
	description : "A Dark Bargain is usually offered by utterly unknowable, unfathomable power.",
	descriptionFull : "A supernatural gift is a special reward granted by a being or force of great magical power. Dark Bargain. A Dark Bargain is usually offered by utterly unknowable, unfathomable power.",
	choices : ["Bestial Awakening", "Call of the Lonely", "Collector of Stories", "Crooked Fortune", "Cult of Personality", "Hand of Death", "Might of the Old", "Self-Serving Sacrifice", "Shrouded Spirit", "Skin of Coffin Nails", "Stilled Hungers", "Unquenchable Fury", "Wings of Whispers"],
	"bestial awakening" : {
		name: "Bestial Awakening [Supernatural Gift]",
		limfeaname : "Polymorph",
		usages : 1,
		recovery : "long rest",
		spellcastingAbility: [4, 5, 6],
		spellcastingBonus : [{
			name : "Beast Skin",
			spells : ["polymorph"],
			selection : ["polymorph"],
			times : 1,
			firstCol : "oncelr",
		}],
		description : "I learn the Polymorph spell and can cast it Once per Long Rest without using its spell components or a spell slot, when I use the spell in this way I can only target myself. I can also cast this spell using any spell slots I have. Additionally, If I am damaged by a Silvered Weapon it surpasses any Resistances or Immunities to damage I have. If I am damaged by a Silvered Weapon or touch silver I can't regain Hit Points until I finish a rest.",
		descriptionFull : desc([
			"The feral world calls to your soul, howling for you to join it. You can give in to the call and transform into a beast, but the touch of silver bites you more deeply than the sharpest fang.",
			"Beast Skin. You always have the Polymorph spell prepared. You can cast it once without a spell slot or spel components but can target only yourself, and you regain the ability to cast t in that way when you finish a Long Rest. You can calso cast it uisng slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for the spell when you cast it without a spell slot (choose the ability when you select this Dark Bargain.",
			"Damage from Silvered Weapons ignores any Resistance or Immunity to damage you have. If you take damage from a Silvered Weapon or touch silver with your bare skin (or its equivalent), you can't regain Hit Points until you finish a Short or Long Rest.",
		]),			
	},
	"call of the lonely" : {
		name: "Call of the Lonely [Supernatural Gift]",
		action : [["bonus action", "Summon Doppelganger"], ["action", "Dismiss Doppelganger"]],
		limfeaname : "Summon Doppelganger",
		usages : 1,
		recovery : "long rest",
		description : "Once per Long Rest as a Bonus Action, while I am unseen I can summon a doppelganger companion who acts on my initiative, when he appears he may bring an item of unknown origin, while this companion is on the field it and I give off an unnerving aura which affects my allies, if a creature that isn't Hostile towards me sees me or my companion they must make a DC 15 Wis save or have the Frightened condition until the start of its next turn. This companion lasts for 1 hour, unless it dies, I die, or I use my Action to politely dismiss it.",
		descriptionFull : desc([
			"In the depths of your solitude, and when your hope withers on the branch, you were granted acompanion you can call on. You never have to be alone again. This companion is Friendly toward you but is deeply unsettling to your allies.",	
			"Never Alone. When no other creature can see you, you can use a Bonus Actio to call your companion, which appears in an unoccupied space within 10 feet of you. It takes the form of a person or a vague silhouette, and it uses the Doppelganger stat block. It is Friendly toward you and acts as your ally, and it takes its turn on your Initiative in combat. It disappears after 1 hour, when it dies, when you die, or when you use an actionto politely dismiss it. When it disappears, it drops anything it was wearing or carrying. Once you use this Bonus Action, you can't use it again until you finish a Long Rest.",
			"Precocious Frind. The companion sometimes appears with trinkets, Cursed Curios, or other items. It might tell you where it got them, or it might not (GM's choice). If it took the object from someone who misses it or wants it back, that could create difficulties for you.",
			"Unsettling Presence. While your companion is summoned, both it and you exude a frightful air that unnerves your allies. While the companion is summoned, a creature that isn't Hostile toward you that starts its turn able to see you or the companion must succeed on a DC 15 Wisdom saving throw or have the Frightened condition until the start of its next turn.",
		]),	
	},
	"collector of stories" : {
		name: "Collector of Stories [Supernatural Gift]",
		limfeaname : "Legend Lore",
		usages : 1,
		recovery : "long rest",
		spellcastingAbility: [4, 5, 6],
		spellcastingBonus : [{
			name : "Gathered Tales",
			spells : ["legend lore"],
			selection : ["legend lore"],
			times : 1,
			firstCol : "oncelr",
		}],
		description : "I learn the Legend Lore spell and can cast it Once per Long Rest without using its spell components or a spell slot, when I use the spell in this way one Friendly NPC (the DM chooses) forgets ever meeting me. I can meet the NPC again and attempt to rebuild the relationship, but my presence unnerves them and our relationship can never improve beyond Indifferent and I have Disadv. on Cha checks against them.",
		descriptionFull : desc([
			"You have an insatiable desire to gather the tales of the world. Sometimes, you inadvertently take the story of meeting another person and keep it to yourself, forever.",
			"Gathered Tales. You always have the Legend Lore spell prepared. You can cast it once without a spell slot or spell components, and you regain the abilithy to cast it in this way when you finish a Long Rest. You can also cast it using splots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcating ability for the spell when you cast it without a spell slot (choose the ability when you select this Dark Bargain).",
			"Hoarded Stories. When you use this bargain to cast Legend Lore without a spell slot, a Friendly NPC (the DM chooses) forgets ever meeting you. You can meet them again and attempt to build a realtionship, but you forever cause an unsettling discomfort in them. The NPC's attitude toward you can't ever improve beyond indifferent, and you have Disadvantage on all Charisma checks against them.",
		]),	
	},
	"crooked fortune" : {
		name: "Crooked Fortune [Supernatural Gift]",
		description : "When I fail a save, I can choose to suceed instead taking no damage on the success even if I would normally have taken half. However, doing so makes my next three saving throws be rolled at Disadvantage and they can not benefit from Advantage. When I succeed one of these rolls I gain 1 level of exhaustion, when I succeed or fail all three saves I regain the use of this feature.",
		descriptionFull : desc([
			"The crooked fate that governs Druskenvald has taken a liking to you. You can avoid calamity, but you must pay back your good fortune eventually.",
			"Cheat Fate. When you fail a saving throw, you can choose to succeed instead. When you do so, if you would take half damage on a successful save, you take no damage instead. Once you use Cheat Fate, you can't use it again until you pay the price (see below).",
			"Delayed Price. After you use Cheat Fate, your next three saving throws have Disadvantage and can't have Advantage, and you gain 1 Exhaustion level when you suceed on one of the saves. Once you succeed or fail on the third saving throw, you regain the use of Cheat Fat. The powers that govern the warp and weft of fate don't take kindly to cheating outside thier terms-at the DM's discretion, saving throws made intentionally or without true consequences simply to pay this price painlessly don't count.",
		]),	
	},
	"cult of personality" : {
		name : "Cult of Personality [Supernatural Gift]",
		action : [["action", "Honeyed Words"]],
		limfeaname : "Honeyed Words",
		usages : 1,
		recovery : "short rest",
		description : "Once per Rest as a Magic action I can Charm a creature within 60 feet of me. The Charmed target is an ally and follows my commands as long as they don't require the target to harm themselves. If the target carries out a command they find Odious they can make a DC 15 Wis save ending the Charm on a Success. This effect ends after 24 hours, I use this feature again on a new target, or until my allies or I deal damage to the target or cause it to make a saving throw. Once this effect ends the target is immune for 24 hours. If a target is immune to the Charmed condition, they have Disadvantage on D20 tests instead and I gain Temp HP equal to my level. Additionally, at the start of my turn when I have no allies I can see or hear within 20 ft of me, I lose any Temp HP I have and have Disadvantage on d20 tests until the start of my next turn.",
		descriptionFull : desc([
			"You are a force of harm and allure with which to be reckoned. While others fall over themselves to stumble into your good graces, you might find that you end up needing them more than they need you.",
			"Honeyed Words. As a Magic action, you can speak sweet words to a creature within 60 feet of you. The creature has the Charmed condition for 24 hours, until you use this feature again, or until you or your allies deal any damage to the target or force it to make a saving throw. The Charmed target is your ally and follows your commands as long as they don't require the target to harm itself. If the target carries out a command it finds odious, it makes a DC 15 Wisdom saving throw, ending the condition on itself on a success. Once the condition ends, the target is immune to this feature for 24 hours. If the target is Immune to the Charmed condition it instead has Disadvantage on D20 Tests until the start of your next turn, and you gain a number of Temporary Hit Points equal to your level. Once you use this feature, you can't use it again until you finish a Short or Long Rest.",
			"Solitary Weakness. If you start your turn with no allies that you can see or hear within 20 feet of you, you lose any Temporary Hit Points you have from any source, and you have Disadvantage on D20 Tests until the start of your next turn.",
		]),
	},
	"hand of death" : {
		name: "Hand of Death [Supernatural Gift]",
		savetxt : { text : "I have Adv. on Con saves; ", },
		description : "I have Adv. on Con saves, Additionally, when I have 0 HP at the start of my turn or when I die, I can instead choose to regain a number of HP equal to half my max. I can't do so again until a humanoid other than myself dies within 30ft of me and until then when I regain Hit Points I only regain half the amount. Other creatures within 10ft of me have Disadv on Death Saves and can't restore Hit Points to a crea with 0 HP by any means.",
		descriptionFull : desc([
			"Death has no claim on you. In exchange for staying its cold hand without that hand closing, you become a maw through which death feeds on the world around you.",
			"Adamant Endurance. You have Advantage on Constitution saving throws.",
			"Cling to Life. When you have 0 Hit Points at the start of your turn, or when you die, you can instead choose to regain a number of Hit Points equal to half your maximum. Once you use this feature, you can't use it again. After using it, whenever you regan Hit Points through any means, you gain only half that amount. Once a Huanoid (other than you) dies within 30 feet of you, you regain the use of thisfeature, and yo can regain Hit Points as normal.",
			"Death Knell. Other creatures within 10 feet of you have Disadvantage on Death Saving Throws, and can't restore Hit Points to a creature with 0 Hit Points by any means.",
		]),	
	},
	"might of the old" : {
		name: "Might of the Old [Supernatural Gift]",
		scores : [2, -2, 0, 0, 0, 0],
		scoresMaximum : [22, 0, 0, 0, 0, 0],
		action : [["bonus action", "Primeval Strength"]],
		limfeaname : "Primeval Strength",
		usages : 1,
		recovery : "long rest",
		description : "My Strength score increases by 2 to a max of 22 and my Dexterity decreases by 2. Once per Long Rest as a Bonus Action I can increase by strength to 25 for 1 minute and I deal double damage to objects, when I do this my skin takes on a bark-like texture which makes me Vulnerable to Fire damage until I finish a Long Rest.",
		descriptionFull : desc([
			"Ancient and primeval power dwells within the oldest forests of Druskenvald. These powers pour their strength into you but can overwhelm you with their unchanging nature.",
			"Ancient Might. Your Strength score increases by 2, to a Maximum of 22, and your Dexterity score decreases by 2.",
			"Primeval Strength. As a Bonus Action, you can call upon the might of the ancients to raise your Strength score to 25 for 1 minute, during which time you deal double damage to objects. Once you use this Bonus Action, you can't use it again until you finish a Long Rest.",
			"Pyre's Price. When you activate Primeval Strength, your skin takes on a bark-like texture, during which time you have Vulnerability to Fire damage. Your skin returns to normal when you finish a Long Rest.",
		]),	
	},
	"self-serving sacrifice" : {
		name: "Self-Serving Sacrifice [Supernatural Gift]",
		action : [["reaction", "Critical Savior (Switch Places)"]],
		limfeaname : "Critical Savior",
		usages : 1,
		recovery : "short rest",
		spellcastingAbility: [4, 5, 6],
		spellcastingBonus : [{
			name : "Final Sacrifice",
			spells : ["true resurrection"],
			selection : ["true resurrection"],
			times : 1,
			firstCol : 1,
		}],
		description : "Once per Rest when a crea w/i 120ft of me is Crit or reduced to 0 HP, I can use my Rea. to magically switch places with them I roll a number of d6 equal to half my level. I take force damage equal to the roll and the target I switched with heals for that amount, I lose one level of Exhaustion if any and the switched target gains one level of Exhaustion. Additionally, when I finish a Rest each crea within 100ft of me loses 1 Hit Die (before spending HD in the case of a short rest). Lastly, I can cast True Resurrection once with Dark Bargain, when I do I ignore its requirements and I die. My soul becomes bound to the crea I returned to life and when that crea takes a Long Rest, half way through the rest they must roll a d20 on a 1, my soul takes the form of a Wraith within 100ft and tries to kill the crea. Once the wraith appears it can again for 30 days.",
		descriptionFull : desc([
			"You can snatch others from the jaws of death but your own grip lingers too tightly. The feeling of saving others from suffering fills you with resolve, even as it drains the vigor from those you rescue.",
			"Critical Savior. When a creature within 120 feet of you is subjected to a Critical Hit or is reduced to 0 Hit Points, you can use your Reaction to magically switch places with the target. Each of you teleports to the other’s space. Roll a number of d6s equal to half your level. You take Force damage equal to the total rolled, you gain Heroic Inspiration, and your Exhaustion level, if any, is reduced by 1. The target regains Hit Points equal to the total rolled and gains 1 Exhaustion level. You can’t use this feature again until you finish a Short or Long Rest.",
			"Draining Presence. When you finish a Short or Long Rest, each creature within 100 feet of you loses one Hit Point Die (before spending Hit Dice in the case of finishing a Short Rest).",
			"Final Sacrifice. You can cast True Resurrection using this bargain requiring no spell slot or spell components. Intelligence, Wisdom, or Charisma is your spellcasting ability for the spell when you cast it without a spell slot (choose the ability when you select this Dark Bargain). When you cast the spell this way, you die, and nothing can prevent it. Your soul is bound to torment the creature you returned to life, and you can’t be raised from the dead by any means. When the creature takes a Long Rest, it must roll a d20 halfway through the rest’s duration. On a 1, your soul takes the form of a Wraith within 100 feet of the creature and tries to kill it. The wraith vanishes after 8 hours, or when it dies. Once the wraith appears, it can’t appear again for 30 days.",
		]),	
	},
	"shrouded spirit" : {
		name: "Shrouded Spirit [Supernatural Gift]",
		dmgres : ["Necrotic"],
		savetxt : { adv_vs : ["spells and effects created by Undead"], },
		description : "I have Resistance to Necrotic damage and have Adv on saves against spells and effects created by Undead. I must consume 1 lb of raw flesh per day or suffer Malnutrition, When targeted by effects such as a Paladin's Divine Sense or Detect Evil and Good, I register as Undead.",
		descriptionFull : desc([
			"The pall of death drapes over you like the Shroud of Druskenvald. This shroud protects you from the depredations of the Undead, but it draws you ever nearer to their cold embrace.",
			"Inured to Undeath. You have Resistance to Necrotic damage, and you have Advantage on saving throws against spells and effects created by Undead.",
			"Unholy Appetite. You must consume one pound of raw flesh (it needn’t be fresh) per day or suffer Malnutrition.",
			"Withering Soul. Features that detect your creature type, such as a Paladin’s Divine Sense or the Detect Evil and Good spell, treat you as Undead if your creature type isn’t Undead already.",
		]),	
	},
	"skin of coffin nails" : {
		name: "Skin of Coffin Nails [Supernatural Gift]",
		description : "I gain Resistance to Blud, Pierc, or Slash dmg. (chosen when I select this Dark Bargain). I can change the type when I finish a Rest. When I suffer a Crit from the chosen damage it becomes a normal hit instead. When I am immersed in water or splashed with at least 1 gallon, my skin tightens and grows rusty until I finish a Rest. During that time my speed and ability to hold my breath is halved, and my Resistance to my chosen type becomes Vulnerability instead.",
		descriptionFull : desc([
			"Your body becomes as coldly unrelenting as iron nails sealing away the dead. You can shrug off staggering punishment, but the waters of the world no longer embrace you, as if spiting your defiance.",
			"Iron Grit. You gain Resistance to Bludgeoning, Piercing, or Slashing damage (your choice when you select this Dark Bargain). You can change the damage type to one of the other options when you finish a Short or Long Rest. When you suffer a Critical Hit from the chosen damage type, it becomes a normal hit instead.",
			"Watery Doom. When you are immersed in water or splashed with at least 1 gallon of water (such as from a bucket or being rained on), your skin tightens and grows rusty until you finish a Short or Long Rest. During that time, your Speed and the time you can hold your breath are halved, and your Resistance to the chosen damage type for Iron Grit becomes Vulnerability instead. At the GM's discretion, other liquids can also trigger this feature.",
		]),	
	},
	"stilled hungers" : {
		name: "Stilled Hungers [Supernatural Gift]",
		dmgres : ["Poison"],
		savetxt : { 
			adv_vs : ["Poisoned Condition"], 
			text : "Vulnerable to Psychic; Disadv. on saves against the Frightened condition; ",
		},
		description : "Forgoing food and drink does not give me Exhaustion levels, and I have Resistance to Poison dmg and Adv against saves to avoid or end the Poisoned contition. Additionally, I have Vulnerability to Psychic dmg and Disadv aganst saves to avoid or end the Frightened condition. A Calm Emothions spell cast on me supresses this drawback.",
		descriptionFull : desc([
			"Food, drink, and maladies of the flesh have lost their hold over you, but these are the very things that keep a soul vital while in the land of the living. Your mind grows ravenous absent those urges—your thoughts crack with gnawing fears, and your dreams wither into crooked nightmares.",
			"Sated Cravings. Forgoing food and drink doesn't give you Exhaustion levels. You have Resistance to Poison damage, and you have Advantage on saving throws to avoid or end the Poisoned condition.",
			"Tenuous Psyche. You have Vulnerability to Psychic damage and Disadvantage on saving throws to avoid or end the Frightened condition. A Calm Emotions spell cast on you suppresses this feature for its duration.",
		]),	
	},
	"unquenchable fury" : {
		name: "Unquenchable Fury [Supernatural Gift]",
		action : [["bonus action", " (With Attack Action)"]],
		description : "Once per Long Rest as a Bonus Action, when I take the Attack action I can enter a Fury While in this Fury I can make one additional melee attack when I take the Attack action on my turn, and I reduce all damage I take by an amount equal to my Prof Bonus. The Fury ends if I have the Incapacitated condition, if I die, or if I end my turn and there are no creatures within 60ft that I can see or hear. I regain the ability to use this feature if I kill a Humanoid. While in a Fury, I must make a DC 15 Wis save at the start of each turn. On a successful save, I can choose to end my fury or continue it. On a failure I no longer make the saves at the start of my turns, and I regard the creature nearest to me as an enemy. (see full description).",
		descriptionFull : desc([
			"Anger is a powerful tool. This bargain stokes it into a formidable inferno, but it threatens to consume everything in its path.",
			"Furious Onslaught. As a Bonus Action, or when you take the Attack action on your turn, you can choose to enter a fury. While in this fury, you can make one additional melee attack when you take the Attack action on your turn, and you reduce all damage you take by an amount equal to your Proficiency Bonus. The fury ends if you have the Incapacitated condition, if you die, or if you end your turn and there are no creatures within 60 feet of you that you can see or hear. Once you use this feature, you can’t use it again until you finish a Long Rest. You also regain the use of this feature when you kill a Humanoid.",
			"Red Haze. While you are in a fury, you must make a DC 15 Wisdom saving throw at the start of each of your turns. On a successful save, you can choose to end your fury or continue it. On a failed save, you no longer make the saving throw at the start of your turns, and you regard the creature nearest to you that you can see or hear as your enemy (if there are multiple, choose one at random). On each of your turns, you must move as close to the creature as possible and take the Attack action, targeting that creature with melee attacks. If you’re unable to get close enough to the creature to attack it, your turn ends after you’ve used up all your available movement. If the creature dies or can no longer be seen or heard by you, the next nearest creature that you can see or hear becomes your new target.",
		]),	
	},
	"wings of whispers" : {
		name: "Wings of Whispers [Supernatural Gift]",
		action : [["bonus action", "Murderous Flight"]],
		limfeaname : "Murderous Flight",
		usages : 1,
		recovery : "short rest",
		description : "Once per Rest as a Bonus Action, for 10 minutes I can summon a murder of crows and ravens in a 20-foot Emanation which grants me a Fly Speed equal to my Speed. The birds remain until I finish a Rest. While they are present, I have Disadv. on Dexterity (Stealth) checks, and the birds whisper secrets into the minds of others, granting them Adv on Wisdom (Insight and Perception) checks made against me.",
		descriptionFull : desc([
			"You have been gifted with secrets that you can call upon in the form of ravens and crows to bear you aloft, but at the risk of revealing your own secrets in turn.",
			"Murderous Flight. As a Bonus Action, you can magically gain a Fly Speed equal to your Speed (and you can hover) for 10 minutes. During this time, a mass of shadows takes the shape of a murder of crows and ravens (but they aren’t truly creatures). The birds appear in a 20-foot Emanation originating from you and take flight and whirl around you when you fly. Once you use this feature, you can’t do so again until you finish a Short or Long Rest, unless you gain 1 Exhaustion level to use it again early.",
			"Whispered Secrets. The birds that appear when you activate Murderous Flight remain and continue to follow you until you finish a Short or Long Rest. While the birds are present, you have Disadvantage on Dexterity (Stealth) checks, and the birds whisper your secrets into the minds of other creatures, granting them Advantage on Wisdom (Insight or Perception) checks made against you.",
		]),	
	},
};
//Spells
SpellsList["ancestral communion"] = {
	name : "Ancesral Communion",
	source : [["LA:CM:PR", 75]],
	classes : ["cleric", "druid", "ranger", "sorcerer"],
	level : 1,
	school : "Div",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Concentration, up to 1 minute",
	description : "For the duration, at the start of my turn I gain Heroic Inspiration.",
	descriptionFull : "You invoke the wisdom of your ancestors to gain insight into your trials. When you cast the spell, and at the start of each of your turns for the duration, you gain Heroic Inspiration if you don't already have it."
};
SpellsList["blood bolt"] = {
	name : "Blood Bolt",
	source : [["LA:CM:PR", 75]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Make a ranged spell attack, on a hit 1d6 Necrotic dmg; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "Make a ranged spell attack, on a hit `CD`d6 Necrotic dmg",
	descriptionFull : "You hurl a twisting bolt of blood at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d6 Necrotic damage, and you gain a number of Temporary Hit Points equal to your Proficiency Bonus." + "\n   " + "This damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6).",
};
SpellsList["blood sacrifice"] = {
	name : "Blood Sacrifice",
	source : [["LA:CM:PR", 75]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Necro",
	time : "1 bns a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a drop of your own blood",
	duration : "1 minute",
	description : "I take 1d6+1d6/SL Necro dmg. to deal an extra 1d6+1d6/SL dmg on my spells that deals dmg. for the duration.",
	descriptionFull : "You sacrifice a portion of your life force to enhance your magical power. When you cast this spell, you take 1d6 Necrotic damage, which can't be reduced or prvented in any way. For the duration when you cast a spell that deals damage, one target of the spell (your choice) takes an extra 1d6 damage of the same type as the spell's normal damage type (your choice if there are multiple). " + AtHigherLevels + "The damage you take and the extra damage your spells deal both increase by 1d6 for each spell slot level above 2.",
};
SpellsList["buried alive"] = {
	name : "Buried Alive",
	source : [["LA:CM:PR", 75]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "60 feet",
	components : "V,S,M",
	compMaterial : "a pinch of grave dirt",
	duration : "Instantaneous",
	description : "1 Crea w/i range that touches the ground Str save, on fail is buried in ground up to 10ft deep. (see full description).",
	descriptionFull : "You send your enemies to their graves even if they aren’t dead yet. A creature that you can see within range that is standing on the ground must make a Strength saving throw. On a failed save, the ground opens and swallows the target, burying it up to 10 feet deep. While buried, the target has Total Cover, has the Restrained and Blinded conditions, and can’t breathe. On a successful save, the target has the Prone condition, and its Speed is 0 until the end of its next turn. A buried creature can dig out of the grave by using its action to make a DC 15 Strength (Athletics) check. On a success, it digs 5 feet closer to the surface. If it succeeds by 5 or more, it reaches the surface. When the creature reaches the surface, it exits the ground with the Prone condition. The target automatically succeeds on its saving throw if it’s standing on any thickness of stone or metal, or at least 2 inches of wood."
};
SpellsList["call of the wild"] = {
	name : "Call of the Wild",
	source : [["LA:CM:PR", 75]],
	classes : ["bard", "druid", "ranger", "warlock"],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a bit of animal fur or hide",
	save : "Wis",
	duration : "Concentration, up to 1 minute",
	description : "Each Beast in a 100-foot Emanation Wis save, fail Charmed, understands and follows commands to the best of its ability, action to issue new commands.",
	descriptionFull : "You unleash a primal howl that calls lesser creatures to your command. Each Beast in a 100-foot Emanation originating from you when you cast the spell must make a Wisdom saving throw. On a failed save, a target has the Charmed condition, it can understand your commands, and it follows them on its next turn to the best of its ability. On your subsequent turns, you can take a Magic action to issue a new command. On a successful save, a target has the Charmed condition until the start of your next turn, but you have no additional ability to command it. The howl is audible within 300 feet."
};
SpellsList["captivate undead"] = {
	name : "Captivate Undead",
	source : [["LA:CM:PR", 76]],
	classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 feet",
	components : "V,S,M",
	compMaterial : "a pinch of bone dust",
	duration : "Concentration, up to 1 hour",
	save : "Cha",
	description : "1+1/SL Undead w/i range Cha save fail, for duration target is Charmed and Friendly toward me. Success target has Disadv. on next atk roll against me before the start of next turn.",
	descriptionFull : "You usurp the negative energy animating an Undead creature that you can see within range, attempting to take control of it. The target must make a Charisma saving throw. On a failed save, for the duration, the target has the Charmed condition (ignoring any Immunity to that condition), and it is Friendly toward you. On a successful save, the target has Disadvantage on the next attack roll it makes against you before the start of your next turn. If you or any of your allies damage the target or force it to make a saving throw, the spell ends. " + AtHigherLevels + "You can target one additional creature for each spell slot level above 1.",
};
SpellsList["chain of conviction"] = {
	name : "Chain of Conviction",
	source : [["LA:CM:PR", 76]],
	classes : ["paladin", "warlock"],
	level : 2,
	school : "Conj",
	time : "1 bns a",
	range : "30 feet",
	components : "S",
	duration : "1 minute",
	save : "Str",
	description : "1 crea w/i range Str save fail, 2d6+1d6/SL Force and pulled up to 30ft toward me and bound by the chain. (see full description).",
	descriptionFull : "You hurl a spectral, barbed chain at a creature that you can see within range. The target makes a Strength saving throw. On a failed save, the target takes 2d6 Force damage, is pulled up to 30 feet toward you, and is bound by the chain. While bound by the chain, the creature is tethered to you and can’t move or teleport to a space more than 30 feet away from you, and you have Advantage on attack rolls made against the creature. On a successful save, the target takes half as much damage only. The bound target repeats the save at the end of each of its turns, ending the spell on itself on a success. If you are ever more than 30 feet away from the target, the spell ends. " + AtHigherLevels + "The damage icreases by 1d6 for each spell slot above 2.",
};
SpellsList["chorus of the lost"] = {
	name : "Chorus of the Lost",
	source : [["LA:CM:PR", 76]],
	classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 feet",
	components : "V,S,M",
	compMaterial : "a silver bell worth 10+ GP",
	duration : "Concentration, up to 1 minute",
	save : "Wis",
	description : "ea crea in 15ft Emanation w/i range Wis save, fail 2d6+1d6/SL Psy dmg. and has Frightend condition for duration. success half dmg and frightened till end of turn.",
	descriptionFull : "You summon the eerie song and wailing of lost souls from a point you can see within range. Each creature in a 15-foot-radius Sphere centered there must make a Wisdom saving throw. On a failed save, the target takes 2d6 Psychic damage, and it has the Frightened condition for the duration. On a successful save, it takes half as much damage, and it has the Frightened condition until the end of its next turn. A Frightened target repeats the save at the end of each of its turns, ending the spell on itself on a success. " + AtHigherLevels + "The damage icreases by 1d6 for each spell slot above 2.",
};
SpellsList["consuming pyre"] = {
	name : "Consuming Pyre",
	source : [["LA:CM:PR", 76]],
	classes : ["druid", "paladin", "warlock"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "90 feet",
	components : "V,S",
	save : "Dex",
	duration : "Concentration, up to 1 minute",
	description : "1 crea w/i range Dex save fail 2d8 Fire and 2d8 Necrotic or Radiant dmg, success half dmg (see full description).",
	descriptionFull : "You unleash a primal howl that calls lesser creatures to your command. Each Beast in a 100-foot Emanation originating from you when you cast the spell must make a Wisdom saving throw. On a failed save, a target has the Charmed condition, it can understand your commands, and it follows them on its next turn to the best of its ability. On your subsequent turns, you can take a Magic action to issue a new command. On a successful save, a target has the Charmed condition until the start of your next turn, but you have no additional ability to command it. The howl is audible within 300 feet."
};
SpellsList["creeping rot"] = {
	name : "Creeping Rot",
	source : [["LA:CM:PR", 77]],
	classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "90 feet",
	components : "V,S",
	duration : "1 minute",
	save : "Con",
	description : "Rot tendril 1 visible crea/plant and 3+1/SL crea/plant in 30 ft of 1st; 3d8 Necro dmg and psn'd (1d8 Necro at start of turn); save halves",
	descriptionFull : "You send tendrils of black and gray rot toward a target that you can see within range. Three tendrils then leap from that target to as many as three other targets of your choice, each of which must be within 30 feet of the first target. A target can be a creature or a nonmagical plant that isn’t a creature, such as a tree or shrub. In either case, each can be targeted by only one of the tendrils. A target that is a creature must make a Constitution saving throw. On a failed save, it takes 3d8 Necrotic damage and has the Poisoned condition for the duration. On a successful save, it takes half as much damage only. A creature Poisoned in this way takes 1d8 Necrotic damage at the start of each of its turns. A Poisoned creature repeats the save at the end of each of its turns, ending the spell on itself on a success. A Plant creature automatically fails the initial save, and a nonmagical plant that isn’t a creature simply withers and dies. " + AtHigherLevels + "One additional tendril leaps from the first target to another target for each spell slot level above 3.",
};
SpellsList["crimson harvest"] = {
	name : "Crimson Harvest",
	source : [["LA:CM:PR", 77]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a vial of blood",
	duration : "Instantaneous",
	save : "Dex",
	description : "Ea crea in 15ft Emanation save or 3d10+1d10/SL Necro dmg; save halves. 1 crea in Emanation regains HP equal to dmg.",
	descriptionFull : "A wave of blood sweeps out from you in a 15-foot Emanation. Each creature of your choice in the wave must make a Dexterity saving throw, taking 3d10 Necrotic damage on a failed save, or half as much damage on a successful one. If you damage at least one Small or larger creature, one creature of your choice that you can see within the Emanation regains a number of Hit Points equal to half the damage roll. " + AtHigherLevels + "The damage increases by 1d10 for each spell slot level above 3.",
};
SpellsList["crooked ward"] = {
	name : "Crooked Ward",
	source : [["LA:CM:PR", 77]],
	classes : ["druid", "ranger", "warlock", "wizard"],
	level : 3,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a five-pointed wicker star",
	duration : "Concentration, up to 10 minutes",
	save : "Wis",
	description : "Mark and imobile surface, 30ft-Radius Sphere. Ea Abber, Fey, Fiend, Monstr, or Undead in area, Disadv. checks, and atk rolls. Wis save or Fright.",
	descriptionFull : "You touch an immobile surface and mark a symbol that causes agony in twisted creatures. An Invisible, 30-foot-radius Sphere springs out from the point you touch. Each Aberration, Fey, Fiend, Monstrosity, or Undead in the Sphere has Disadvantage on ability checks and attack rolls. When an affected creature enters the Sphere for the first time on a turn or starts its turn there, it must succeed on a Wisdom saving throw or have the Frightened condition until the start of its next turn. " + AtHigherLevels + "You can maintain Concentration on this spell for longer if you cast it using a spell slot of level 4 (up to 1 hour) or 5 (up to 8 hours). If you use a level 6+ spell slot, the spell doesn't require Concentration, and the duration becomes 24 hours.",
};
SpellsList["culling sickle"] = {
	name : "Culling Sickle",
	source : [["LA:CM:PR", 77]],
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Abjur",
	time : "1 bns a",
	range : "Self",
	components : "V,S",
	duration : "Concentration, up to 1 minute",
	save : "Wis",
	description : "A spectral sickle appears as a bns a. command it it atk a crea w/i 30ft, ranged spell attack, 2d8 Necro + I gain Temp HP = 1/2 dmg, sickle returns.",
	descriptionFull : "You create a ghostly sickle that lasts for the duration and can strike out at your foes. The sickle appears hovering in your space and moves with you. When you cast this spell and as a Bonus Action on each of your turns, you can direct it to fly at and strike a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 2d8 Necrotic damage, and you gain Temporary Hit Points equal to half the damage dealt. After the sickle hits or misses, it returns to hover in your space. " + AtHigherLevels + "The damage increases by 1d8 for each spell slot level above 3.",
};
SpellsList["cursed cacophony"] = {
	name : "Cursed Cacophony",
	source : [["LA:CM:PR", 78]],
	classes : ["bard", "sorcerer", "warlock"],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "S,M",
	compMaterial : "a sheet of music",
	duration : "Concentration, up to 10 minutes",
	save : "Wis",
	ritual : true,
	description : "1 crea I am familiar with on same plane, save or be cursed. Target Disadv on D20 tests, repeats save on first failed D20 test per turn.",
	descriptionFull : "You focus on a creature that you are familiar with that is on the same plane of existence as you. The target must succeed on a Wisdom saving throw or be cursed for the duration. Once a target fails its saving throw against this spell, you can't target it with a ritual casting of the spell for 24 hours. While cursed, the target hears haunting, discordant music and has Disadvantage on D20 Tests. The first time the target fails a D20 Test during a turn, it repeats the save against this spell with neither Advantage nor Disadvantage, ending the spell early on a success.",
};
SpellsList["devil's due"] = {
	name : "Devil's Due",
	source : [["LA:CM:PR", 78]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 1,
	school : "Necro",
	time : "1 rea",
	timeFull : "Reaction, which you take when another creature within range takes damage",
	range : "30 feet",
	components : "S,M",
	compMaterial : "a glob of pitch",
	duration : "Instantaneous",
	description : "When a crea w/i range takes dmg I can roll 1+1/SL HD and regain HP equal to the roll plus my Spell Mod, if crea was hit by crit, regain double the HP.",
	descriptionFull : "You absorb a measure of a creature's suffering and escaping vital essence. Expend and roll one Hit Point Die. You regain a number of Hit Points equal to the number rolled plus your spellcasting ability modifier. If the creature took damage from a Critical Hit, double the number of Hit Points you regain. " + AtHigherLevels + "You can expend one additional Hit Point Die for each spell slot level above 1.",
};
SpellsList.dissolution = {
	name : "Dissolution",
	source : [["LA:CM:PR", 78]],
	classes : ["wizard"],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Make a melee spell attack, on a hit 1d8 Force dmg, target AC -1 for next attack roll before end of my next turn. +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "Make a melee spell attack, on a hit `CD`d8 Force dmg, target AC -1 for next attack roll before end of my next turn.",
	descriptionFull : "You touch a creature or nonmagical object and break the target’s substance down into its most fundamental components. Make a melee spell attack. On a hit, the target takes 1d8 Force damage, and its AC is reduced by 1 against the next attack roll made against it before the end of your next turn." + "\n   " + "This damage increases by 1d8 when you reach 5th Level (2d8), 11th level (3d8) and 17th level (4d8).",
};
SpellsList["eye burn"] = {
	name : "Eye Burn",
	source : [["LA:CM:PR", 78]],
	classes : ["druid", "warlock", "wizard"],
	level : 0,
	school : "Trans",
	time : "1 rea",
	timeFull : "Reaction, which you take when a creature you can see within range targets you with an attack",
	range : "30 feet",
	components : "V,S,M",
	compMaterial : "a smear of camphor",
	duration : "1 round",
	save : "Wis",
	description : "When a crea attacks me Wis save or Blinded",
	descriptionFull : "You sting the eyes of a creature attacking you. The target must make a Constitution saving throw (a creature with Blindsight or Immunity to the Blinded condition succeeds automatically). On a failed save, the target has the Blinded condition until the end of the turn. On a successful save, it must subtract 1d4 from the triggering attack roll. The target automatically succeeds on its saves against your subsequent casting of this spell for 24 hours.",
};
SpellsList["field of reaping"] = {
	name : "Field of Reaping",
	source : [["LA:CM:PR", 78]],
	classes : ["cleric", "druid", "warlock"],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "90 feet",
	components : "V,S,M",
	compMaterial : "a dried corn husk or wheat hull",
	duration : "Concentration, up to 1 minute",
	save : "Wis",
	description : "Create a 30ft cube w/i range a Hostile crea w/i area is cursed til end of its next turn, while cursed, first time crea takes dmg it takes an extra 1d6+1d6/SL Necro and a crea of my choice in the area regains HP equal to damage.",
	descriptionFull : "You create a shadowy field that reaps escaping life force in a 30-foot Cube originating from a point within range. A creature Hostile to you in the field when it appears, or when it enters the field for the first time on a turn or ends its turn there, is cursed until the end of its next turn. While cursed, the first time the creature takes damage during a turn, it takes an extra 1d6 Necrotic damage, and a creature of your choice within the field that isn’t cursed by it regains a number of Hit Points equal to the Necrotic damage taken. " + AtHigherLevels + "The damage increases by 1d6 for each spell slot level above 5.",
};
SpellsList["ghastly charge"] = {
	name : "Ghastly Charge",
	source : [["LA:CM:PR", 79]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 6,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a scrap of a banner",
	duration : "Instantaneous",
	save : "Wis",
	description : "90ft long 20ft wide line, Wis save 5d12+1d12/SL Necro dmg and frightened must immediately use Reac to move away, success halves.",
	descriptionFull : "You call forth the spirits of long-dead knights, which charge forward from you in a 90-foot long, 20-foot wide Line, and then vanish. Each creature of your choice in the Line must make a Wisdom saving throw. On a failed save, a target takes 5d12 Necrotic damage, has the Frightened condition until the start of your next turn, and must immediately use its Reaction, if available, to move as far from you as it can, using the safest route. On a successful save, the creature takes half as much damage only. " + AtHigherLevels + "The damage increases by 1d12 for each spell slot level above 6.",
};
SpellsList["harvest moonglow"] = {
	name : "Harvest Moonglow",
	source : [["LA:CM:PR", 79]],
	classes : ["cleric", "druid", "ranger"],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60 feet",
	components : "V,S,M",
	compMaterial : "a piece of moonstone",
	duration : "1 hour",
	save : "Wis",
	description : "20ft rad. sphere w/i range, invisible creas become visible, but slightly transluscent, an ally in the area Bns A to absorb some of the light to gain 2d6+1d6/SL.",
	descriptionFull : "You call upon the light of the harvest moon to illuminate a 20-foot-radius Sphere centered on a point within range. The area is bathed in silvery Dim Light. Creatures and objects with the Invisible condition in the light become visible as translucent, shimmering images. When one of your allies is within the light, it can use a Bonus Action to absorb some of the light and gain 2d6 Temporary Hit Points. " + AtHigherLevels + "The Temporary Hit Points increase by 1d6 for each spell slot above 3.",
};
SpellsList["harrowing ballad"] = {
	name : "Harrowing Ballad",
	source : [["LA:CM:PR", 79]],
	classes : ["bard", "sorcerer", "wizard"],
	level : 2,
	school : "Ench",
	time : "1 bns a",
	range : "120 feet",
	components : "V,S",
	duration : "Concenration, up to 1 minute",
	save : "Int",
	description : "1 crea w/i range with Int 4+ makes an Int save, or Charmed. 1d6+1d6/SL Psy dmg at start of each of target's turn. Crea Disadv on Perception, Concentration saves.",
	descriptionFull : "You inflict a mind-eroding song on a creature that you can see within range. If the creature has an Intelligence of 4 or higher, it must succeed on an Intelligence saving throw or have the Charmed condition for the duration. While Charmed in this way, the target is struck with a rapidly repeating ballad that only it can hear; it takes 1d6 Psychic damage at the start of each of its turns, and it has Disadvantage on Wisdom (Perception) checks and on Constitution saving throws made to maintain its Concentration. The target repeats the save at the end of each of its turns, ending the spell on a success. " + AtHigherLevels + "The damage increases by 1d6 for each spell slot above 2.",
};
SpellsList["hungering blade"] = {
	name : "Hungering Blade",
	source : [["LA:CM:PR", 79]],
	classes : ["paladin", "ranger", "warlock"],
	level : 1,
	school : "Necro",
	time : "1 bns a",
	range : "Self",
	components : "V,S",
	duration : "1 minute",
	description : "The first time on a turn I hit with a weapon or Unarmed Strike, I deal extra Necro dmg equal to my spell mod, and gain Temp HP equal to the dmg dealt.",
	descriptionFull : "You imbue a weapon you are holding, or your Unarmed Strikes, with ravenous negative energy. For the duration, when you hit a creature with an attack using the empowered weapon or Unarmed Strike for the first time on a turn, the target takes Necrotic damage equal to your spellcasting ability modifier, and you gain a number of Temporary Hit Points equal to the Necrotic damage dealt.",
};
SpellsList["intrusive despair"] = {
	name : "Intrusive Despair",
	source : [["LA:CM:PR", 79]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "90 feet",
	components : "V,S,M",
	compMaterial : "a devil's trumpet blossom",
	duration : "Concentration, up to 1 minute",
	save : "Wis",
	description : "1 crea w/i range cursed, When target makes Attack, or Magic action, Wis save or waste action. Once saves 3 times spell ends.",
	descriptionFull : "You curse a creature within range, filling its mind with creeping paranoia and despair. When the target takes the Attack or Magic action, it must succeed on a Wisdom saving throw or waste its action. Once the target succeeds on three saving throws against this spell, the spell ends.",
};
SpellsList.isolation = {
	name : "Isolation",
	source : [["LA:CM:PR", 80]],
	classes : ["warlock", "wizard"],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "120 feet",
	components : "V,S,M",
	compMaterial : "a small metal cube",
	duration : "Concentration, up to 1 minute",
	save : "Wis",
	description : "1 crea w/i range can't perceive any other creatures by any means and moves around them, rationalizing thiri movements. repeat save at end of turn.",
	descriptionFull : "One creature that you can see within range must succeed on a Wisdom saving throw or have its mind shrouded in the dread of total isolation. For the duration, all other creatures have the Invisible condition toward the target, which the target can’t see through—even with Blindsight, Truesight, or magic such as the See Invisibility spell—and the target can’t perceive other creatures with any of its other senses. The target moves around other creatures, or otherwise rationalizes not moving through spaces occupied by them (such as perceiving a door as closed or as a wall if another creature is standing in the way). The target still feels pain but can’t identify the source of any injury caused by another creature. The target repeats the saving throw at the end of each of its turns, ending the spell on itself on a success.",
};
SpellsList["lucky charm"] = {
	name : "Lucky Charm",
	source : [["LA:CM:PR", 80]],
	classes : ["bard", "paladin", "ranger", "warlock"],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a four-leaf clover and a shard of broken mirror",
	duration : "Concentration, up to 1 hour",
	description : "Touch Tiny, nonmagic obj. another crea who carries it has Adv on D20 Tests, and I have Disadv on D20 Tests for duration.",
	descriptionFull : "You touch a Tiny, nonmagical object, infusing it with a portion of your own luck for the duration. While another creature carries the object, that creature has Advantage on D20 Tests, and you have Disadvantage on D20 Tests.",
};
SpellsList.martyr = {
	name : "Martyr",
	source : [["LA:CM:PR", 80]],
	classes : ["cleric", "paladin", "wizard"],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a Dagger worth at least 1 CP",
	duration : "Instantaneous",
	description : "Touch a dead crea, who died w/i last min. Target returns to life w/ my current HP and I drop to 0 HP with 2 failed death saves, make a death save, can't become stable till after save.",
	descriptionFull : "You touch a dead creature that died within the last minute and transfer your life essence into it. The target returns to life with Hit Points equal to your current Hit Point total. You immediately drop to 0 Hit Points (which nothing can prevent) with two failed Death Saving Throws, and you must immediately make a Death Save. You can’t regain Hit Points or become Stable until after you make this save.",
};
SpellsList["mirrored agony"] = {
	name : "Mirrored Agony",
	source : [["LA:CM:PR", 80]],
	classes : ["bard", "sorcerer", "wizard"],
	level : 5,
	school : "Abjur",
	time : "1 rea",
	timeFull : "Reaction, which you take when a creature you can see within 60 feet of you damages your ally",
	range : "60 feet",
	components : "V,S,M",
	compMaterial : "a pin or needle",
	duration : "Instantaneous",
	save : "Wis",
	description : "Trigger crea. makes Wis save, fail: Psy dmg equal to dmg of triggering attack, save: half as much Psy dmg.",
	descriptionFull : "The triggering creature makes a Wisdom saving throw. On a failed save, it takes an amount of Psychic damage equal to the damage it dealt to your ally. On a successful save, it takes half as much damage.",
};
SpellsList["mist of mourning"] = {
	name : "Mist of Mourning",
	source : [["LA:CM:PR", 80]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "60 feet",
	components : "V,S,M",
	compMaterial : "a vial of tears",
	duration : "Concentration, up to 10 minutes",
	save : "Cha",
	description : "20ft-rad. Sphere w/i range each crea. appear/enter first time/end turn Cha save or speed halved, Disadv on atk rolls, and -1d8 from dmg rolls until end of its next turn.",
	descriptionFull : "You summon a thin mist that saps joy and vigor in a 20-foot-radius Sphere centered on a point within range. Each creature in the mist when it appears, or when it moves into the mist for the first time on a turn or ends its turn there, must succeed on a Charisma saving throw or be filled with deep melancholy until the end of its next turn. An affected creature’s Speed is halved, it has Disadvantage on attack rolls, and it subtracts 1d8 from all its damage rolls.",
};
SpellsList["murder of crows"] = {
	name : "Murder of Crows",
	source : [["LA:CM:PR", 81]],
	classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a crow feather",
	duration : "Instantaneous",
	save : "Dex",
	description : "ea crea of choice w/i 30ft cone, Dex save fail: 5d6+1d6/SL Force dmg and Blinded, success: half dmg only. Blinded crea repeat save at end of ea turn or end if regain hp.",
	descriptionFull : "You summon and unleash a murder of deadly crows. Each creature of your choice in a 30-foot Cone originating from you makes a Dexterity saving throw. On a failed save, the target takes 5d6 Force damage and has the Blinded condition. On a successful save, it takes half as much damage only. A Blinded creature repeats the save at the end of each of its turns, ending the effect on itself on a success. The effect also ends if the creature regains any Hit Points. The crows disperse and vanish after they strike. " + AtHigherLevels + "The damage increases by 1d6 for each spell slot above 4.",
};
SpellsList["mysterous presence"] = {
	name : "Mysterious Presence",
	source : [["LA:CM:PR", 81]],
	classes : ["bard", "druid", "sorcerer"],
	level : 0,
	school : "Illus",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Concentration, up to 1 minute",
	description : "1 crea for duration, other crea have -1d4 to Wis (Insight or Percpetion) checks made against target crea.",
	descriptionFull : "You touch a willing creature and shroud its presence. Until the spell ends, other creatures must subtract 1d4 from any Wisdom (Insight or Perception) checks made against the target.",
};
SpellsList["puppet master"] = {
	name : "Puppet Master",
	source : [["LA:CM:PR", 81]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a marionette string",
	duration : "Concentration, up to 1 minute",
	save : "Wis",
	description : "1 crea w/i range Wis save, or Charmed for duration. (see full description).",
	descriptionFull : "One creature that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. Magical marionette strings attach to the Charmed creature’s limbs or body, and it must use its action on its turn to make a melee attack against a creature other than itself that you mentally choose, moving to reach the target if necessary. The target can act normally on its turn if you don’t choose another creature, or if the creature isn’t within the target’s reach after it moves. The target repeats the save at the end of each of its turns, ending the spell on itself on a success. On your later turns, you must take a Bonus Action to maintain control of the target, or the spell ends.",
};
SpellsList["sacrificial siphon"] = {
	name : "Sacrificial Siphon",
	source : [["LA:CM:PR", 81]],
	classes : ["cleric", "paladin", "warlock", "wizard"],
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "S",
	duration : "Concentration, up to 1 minute",
	save : "Cha",
	description : "1 crea Cha save, or Cursed for duration. (see full description).",
	descriptionFull : "You touch another creature and lay a curse that drains the target’s vitality and transfers it to you. The target must make a Charisma saving throw. On a failed save, the target is cursed for the duration. While cursed, the target must subtract 1d4 from its attack rolls and ability checks, and when the target takes damage, you can take a Reaction to gain 10 Temporary Hit Points. On a successful save, you gain 5 Temporary Hit Points, and the target must subtract 1d4 from its ability checks until the start of your next turn.",
};
SpellsList["sanctum of the shepherd"] = {
	name : "Sanctum of the Shepherd",
	source : [["LA:CM:PR", 82]],
	classes : ["cleric", "paladin", "wizard"],
	level : 4,
	school : "Abjur",
	time : "1 min",
	range : "5 feet",
	components : "V,S,M",
	compMaterial : "adamantine or diamond powder worth 200+ GP, which the spell consumes",
	duration : "24 hours",
	description : "20ft-rad sphere, Me and spell mod number of crea. of choice who finish a long rest in sphere gain +1 to AC for remainder of duration.",
	descriptionFull : "You create a 20-foot-radius Sphere of faint, shimmering light centered on a point within range. You and a number of creatures of your choice up to your spellcasting ability modifier (minimum of 1 other creature) can absorb protective magic from the Sphere. When any of the chosen creatures finish a Long Rest in the area, the Sphere vanishes, and those creatures gain +1 bonus to AC for the remainder of the duration. Chosen creatures who don’t finish a Long Rest in the Sphere gain no benefit.",
};
SpellsList["sanctum of the flock"] = {
	name : "Sanctum of the Flock",
	source : [["LA:CM:PR", 82]],
	classes : ["bard", "cleric", "paladin"],
	level : 3,
	school : "Trans",
	time : "1 min",
	range : "5 feet",
	components : "V,S,M",
	compMaterial : "powdered silver worth 25+ GP, which the spell consumes",
	duration : "24 hours",
	description : "20ft-rad sphere, Me and spell mod number of crea. of choice who finish a long rest in sphere gain 2d10 Temp HP, and for remainder of duration Adv on Cha checks using a skill they are prof with.",
	descriptionFull : "You create a 20-foot-radius Sphere of faint, shimmering light centered on a point within range. You and a number of creatures of your choice up to your spellcasting ability modifier (minimum of 1 other creature) can absorb empowering magic from the Sphere. When any of the chosen creatures finish a Long Rest in the area, the Sphere vanishes, and those creatures gain 2d10 Temporary Hit Points, and for the remainder of the duration, they have Advantage on Charisma checks that use one of their skill proficiencies. Chosen creatures who don’t finish a Long Rest in the Sphere gain no benefit.",
};
SpellsList["sanguine secrets"] = {
	name : "Sanguine Secrets",
	source : [["LA:CM:PR", 82]],
	classes : ["ranger", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Div",
	time : "1 bns a",
	range : "30 feet",
	components : "V,S,M",
	compMaterial : "a drop of blood, which the spell consumes",
	duration : "1 round",
	description : "1 Crea, learn Species, Crea Type, Current HP, Conditions affecting, as well as Vulnerability, Resistance, and Immunities, and next check or atk roll is made with Adv against target.",
	descriptionFull : "You draw knowledge through the power of blood about a creature you can see within range. You learn the target’s species and creature type, its current Hit Points, and any conditions affecting it. You also learn if it has any of the following, and, if so, what they are: Vulnerability, Resistance, or Immunity to damage or conditions. Additionally, the next ability check or attack roll you make against the target before the end of your next turn has Advantage.",
};
SpellsList["scarlet dawn"] = {
	name : "Scarlet Dawn",
	source : [["LA:CM:PR", 83]],
	classes : ["cleric", "druid", "paladin", "ranger", "warlock", "wizard"],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "120 feet",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "20x60ft Cylinder w/i range, ea crea (not Construct or Undead) Con save, or 4d10+1d10/SL Necro dmg, half on success. Construct and Undead w/i regain 4d10 HP. dispells darkness of level or lower.",
	descriptionFull : "Crimson light shines down in a 20-foot-radius, 60-foot high Cylinder centered on a point within range. Each creature in that area that isn’t a Construct or Undead must make a Constitution saving throw, taking 4d10 Necrotic damage on a failed save or half as much damage on a successful one. Constructs and Undead in the area regain 4d10 Hit Points. If any of this spell’s area overlaps with an area of Darkness created by a spell of level 3 or lower, that other spell is dispelled. " + AtHigherLevels + "The damage increases by 1d10 and the level of spell that can be dispelled increases by 1 for each spell slot above 3.",
};
SpellsList["shadow drain"] = {
	name : "Shadow Drain",
	source : [["LA:CM:PR", 83]],
	classes : ["sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Concentration, up to 1 minute",
	save : "Cha",
	description : "15ft Emanation from me, When I cast this spell, designate crea to be unaffected. Once/turn when enters/starts turn in area. Cha save fail: 2d6+1d6/SL Necro dmg and Disadv on atk rolls and checks til end of its next turn, save: half dmg only.",
	descriptionFull : "You siphon away the vitality and sense of self through the shadows of nearby creatures in a 15-foot Emanation originating from you. When you cast this spell, you can designate creatures to be unaffected by it. Whenever any other creature enters the Emanation or starts its turn there, or when the Emanation enters a creature’s space, the creature must make a Charisma saving throw. On a failed save, the creature takes 2d6 Necrotic damage and has Disadvantage on attack rolls and ability checks until the end of its next turn. On a successful save, the creature takes half as much damage only. A creature makes this save only once per turn. " + AtHigherLevels + "The damage increases by 1d6 for each spell slot above 3.",
};
SpellsList["summer winds"] = {
	name : "Summer Winds",
	source : [["LA:CM:PR", 83]],
	classes : ["cleric", "druid", "paladin", "ranger"],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "15ft one, allies regain 2d6+2d6/SL HP, Hostile Undead Con save, or 2d6+2d6/SL Rad dmg on fail, half on success.",
	descriptionFull : "You unleash a blast of light and wind in a 15-foot Cone. Your allies in the Cone regain 2d6 Hit Points. Undead within the Cone that are Hostile to you must make a Constitution saving throw, taking 2d6 Radiant damage on a failed save, or half as much damage on a successful one. " + AtHigherLevels + "The damage and healing increases by 2d6 for each spell slot above 2.",
};
SpellsList["unraveling whisper"] = {
	name : "Unraveling Whisper",
	source : [["LA:CM:PR", 83]],
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "30 feet",
	components : "V,S",
	duration : "1 round",
	save : "Wis",
	description : "1+1/SL crea w/i range, Wis save, fail: 2d6 Psy dmg and Frightened (Vulnerable to Blud/Pierc/Slash) til start of my next turn. success: half dmg only.",
	descriptionFull : "Choose a creature you can see within range and whisper a frightful phrase that only the target can hear. The target must make a Wisdom saving throw. On a failed save, the target takes 2d6 Psychic damage and has the Frightened condition until the start of your next turn. On a successful save, the target takes half as much damage only. While Frightened in this way, the creature has Vulnerability to your choice of Bludgeoning, Piercing, or Slashing damage. " + AtHigherLevels + "You can target one additional creature for each spell slot above 2.",
};
SpellsList["veil of the reaper"] = {
	name : "Veil of the Reaper",
	source : [["LA:CM:PR", 83]],
	classes : ["ranger", "sorcerer", "warlock", "wizard"],
	level : 2,
	school : "Illus",
	time : "1 bns a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a dried corn husk or wheat straw",
	duration : "Concentration, up to 1 minute",
	description : "for duration, at end of turn in which I hit with an atk roll, i become Invisible til the start of my next turn.",
	descriptionFull : "You wrap yourself in shadows that veil you between strikes. At the end of any turn in which you hit a creature with an attack roll, you gain the Invisible condition until the start of your next turn.",
};
