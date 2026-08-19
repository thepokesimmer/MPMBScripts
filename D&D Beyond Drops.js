var iFileName = "DDBD.js";
RequiredSheetVersion("13.2.3", 26);
SourceList.DDBD = {
    name : "D&D Beyond Drops",
    abbreviation : "DDBD", 
    group : "D&D Beyond",
    date : "2026/08/11" 
};
BackgroundList["pact seeker"] = {
    regExpSearch : /^(?=.*pact)(?=.*seeker).*$/i,
    name : "Pact Seeker",
    source : [["DDBD", 0]],
    scorestxt : "+2 to one and +1 to another -or- +1 to all three: Constitution, Intelligence, and Charisma",
    skills : ["Arcana", "Persuasion"],
    toolProfs : [["Calligrapher's Supplies", "Dex"]],
    gold : 2,
    equipleft : [
        ["Book", "", 5],
        ["Calligrapher's supplies", "", 5],
        ["Ink, 1 ounce bottle of", "", 0],
        ["Ink pen", "", 0],
        ["Parchment, sheets of", 10, ""],
    ],
    equipright : [
        ["Traveler's clothes", "", 4],
        ["Belt pouch (with coins)", "", 1],
    ],
    feature : "Pact Seeker"
};
BackgroundFeatureList["pact seeker"] = {
    description : "You had a purpose in mind. Perhaps you were seeking out knowledge or power, or maybe you were in search of hidden secrets. One way or another, your journey led you to seek out an extraplanar entity. Once you made contact, a deal was struck, and your life changed.",
    source : [["DDBD", 0]],
    featsAdd: [{ type: "planar pact" }],
};
FeatsList["fey pact"] = {
    name : "Fey Pact",
    source : [["DDBD", 0]],
    prerequisite : "Can't have another Planar Pact feat",
	type : "planar pact",
    description : "I gain proficiency in Nature and learn Sylvan (or another language if already known). I learn Druidcraft and 1 Divination or Enchantment cantrip. As a reaction when rolling 5 or lower on a Deception/Persuasion check, I can reroll and must use the new roll.",
    descriptionFull : "Planar Pact Feat (Prerequisite: Can’t Have Another Planar Pact Feat).\n\nYou gain the following benefits.\nFey Bond. You know Sylvan. If you already know Sylvan when you select this feat, you instead learn one language of your choice from the language tables in the Player’s Handbook. You also gain Proficiency in the Nature skill.\nFey Cantrips. You know the Druidcraft cantrip and learn one other cantrip of your choice from the Divination or Enchantment school of magic. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose when you select this feat).\nHoneyed Words. When you roll a 5 or lower on the d20 for a Charisma (Deception) or Charisma (Persuasion) check, you can take a Reaction to reroll the check, and you must use the new roll. Once you take this Reaction, you can’t use this benefit again until you finish a Long Rest.",
    skills : ["Nature"],
    languageProfs : ["Sylvan"],
    spellcastingBonus : [{
        name : "Fey Cantrips (Druidcraft)",
        spells : ["druidcraft"],
        selection : ["druidcraft"],
        firstCol : "atwill"
    }, {
        name : "Fey Cantrips (Choice)",
        "class" : "any",
        school : ["Div", "Ench"],
        level : [0, 0],
        firstCol : "atwill"
    }],
    action : [["reaction", "Honeyed Words (roll 5 or less)"]],
    usages : 1,
    recovery : "long rest"
};
FeatsList["fey sentinel"] = {
    name : "Fey Sentinel",
    source : [["DDBD", 0]],
    prerequisite : "Level 4+ and the Fey Pact feat",
    prereqeval : function(v) { 
        return v.characterLevel >= 4 && CurrentFeats.known.indexOf("fey pact") !== -1; 
    },
    type : "general",
    descriptionFull : "General Feat (Prerequisite: Level 4+, Fey Pact Feat)\n\nYou gain the following benefits.\nAbility Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\nFading Target. When an enemy misses you with an attack roll, you can take a Reaction to gain the Invisible condition until the start of your next turn or until immediately after you make an attack roll, deal damage, or cast a spell. Once you use this benefit, you can’t do so again until you finish a Long Rest.\nFey Shift. When you take the Dash action, you can forgo the extra movement to teleport to an unoccupied space you can see within a distance equal to half your Speed instead.\nNature’s Roots. You always have the Entangle spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. The spell’s spellcasting ability is the ability increased by this feat.\nWhen you reach character level 5, you also always have the Plant Growth spell prepared and can cast it the same way.",
    action : [["reaction", "Fading Target (when missed)"]],
    usages : 1,
    recovery : "long rest",
    spellcastingBonus : [{
        name : "Nature's Roots (Level 1)",
        spells : ["entangle"],
        selection : ["entangle"],
        firstCol : "oncelr",
        allowUpCasting : true
    }, {
        name : "Nature's Roots (Level 5)",
        spells : ["plant growth"],
        selection : ["plant growth"],
        times : [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        firstCol : "oncelr",
        allowUpCasting : true
    }],
    choices : ["Intelligence", "Wisdom", "Charisma"],
    "intelligence" : {
        description : "1/LR, when an enemy misses me, Reaction to become Invisible until my next turn/I attack/cast. When I Dash, I can forgo extra movement to teleport up to half my Speed. I learn Entangle and, at 5th level, Plant Growth (cast 1/LR without a slot, or with slots). [+1 Int]",
        scores : [0, 0, 0, 1, 0, 0],
        spellcastingAbility : 4
    },
    "wisdom" : {
        description : "1/LR, when an enemy misses me, Reaction to become Invisible until my next turn/I attack/cast. When I Dash, I can forgo extra movement to teleport up to half my Speed. I learn Entangle and, at 5th level, Plant Growth (cast 1/LR without a slot, or with slots). [+1 Wis]",
        scores : [0, 0, 0, 0, 1, 0],
        spellcastingAbility : 5
    },
    "charisma" : {
        description : "1/LR, when an enemy misses me, Reaction to become Invisible until my next turn/I attack/cast. When I Dash, I can forgo extra movement to teleport up to half my Speed. I learn Entangle and, at 5th level, Plant Growth (cast 1/LR without a slot, or with slots). [+1 Cha]",
        scores : [0, 0, 0, 0, 0, 1],
        spellcastingAbility : 6
    }
};
FeatsList["fey tormentor"] = {
    name : "Fey Tormentor",
    type : "general",
    source : [["DDBD", 0]],
    prerequisite : "Level 4+ and the Fey Pact feat",
    prereqeval : function(v) { 
        return v.characterLevel >= 4 && CurrentFeats.known.indexOf("fey pact") !== -1; 
    },
    descriptionFull : "General Feat (Prerequisite: Level 4+, Fey Pact Feat)\n\nYou gain the following benefits.\nAbility Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\nFaerie Time Warp. As a Bonus Action, choose up to three creatures you can see within 60 feet of yourself. Each target makes a Wisdom saving throw (DC 8 plus the ability modifier of the score increased by this feat and your Proficiency Bonus). On a failed save, the target’s Speed is reduced by 10 feet, and it takes a −2 penalty to AC until the end of your next turn.\nOnce you use this benefit, you can’t use it again until you finish a Long Rest.\nHag’s Hex. You always have the Hex spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast it using any spell slots you have. The spell’s spellcasting ability is the ability increased by this feat.\nWhen you reach character level 5, you also have the Bestow Curse spell prepared and can cast it in the same way.",
    action : [["bonus action", "Faerie Time Warp"]],
    usages : 1,
    recovery : "long rest",
    limfeaname : "Faerie Time Warp",
    spellcastingBonus : [{
        name : "Hag's Hex",
        spells : ["hex"],
        selection : ["hex"],
        firstCol : "oncelr",
        allowUpCasting : true
    }, {
        name : "Hag's Hex (Level 5)",
        spells : ["bestow curse"],
        selection : ["bestow curse"],
        firstCol : "oncelr",
        allowUpCasting : true,
        times : levels.map(function(n) { return n < 5 ? 0 : 1; })
    }],
    choices : ["Intelligence", "Wisdom", "Charisma"],
    "intelligence" : {
        description : "1/LR, as a Bonus Action, up to 3 creatures within 60 ft must make a Wis save (DC 8+Int+PB). On fail, speed -10 ft and -2 AC until my next turn ends. I have Hex and Bestow Curse (lvl 5+) prepared, and cast each 1/LR without a slot or use slots. [+1 Int]",
        scores : [0, 0, 0, 1, 0, 0],
        spellcastingAbility : 4
    },
    "wisdom" : {
        description : "1/LR, as a Bonus Action, up to 3 creatures within 60 ft must make a Wis save (DC 8+Wis+PB). On fail, speed -10 ft and -2 AC until my next turn ends. I have Hex and Bestow Curse (lvl 5+) prepared, and cast each 1/LR without a slot or use slots. [+1 Wis]",
        scores : [0, 0, 0, 0, 1, 0],
        spellcastingAbility : 5
    },
    "charisma" : {
        description : "1/LR, as a Bonus Action, up to 3 creatures within 60 ft must make a Wis save (DC 8+Cha+PB). On fail, speed -10 ft and -2 AC until my next turn ends. I have Hex and Bestow Curse (lvl 5+) prepared, and cast each 1/LR without a slot or use slots. [+1 Cha]",
        scores : [0, 0, 0, 0, 0, 1],
        spellcastingAbility : 6
    }
};
FeatsList["infernal pact"] = {
    name : "Infernal Pact",
    source : [["DDBD", 0]],
    prerequisite : "Can't have another Planar Pact feat",
    type : "planar pact",
    description : "I have Resistance to Fire and Poison damage. I gain proficiency in the Deception skill. I can also see normally in dim light and darkness (both magical and nonmagical) out to a range of 60 ft.",
    descriptionFull : "Planar Pact Feat (Prerequisite: Can’t Have Another Planar Pact Feat).\n\nYou gain the following benefits.\nInfernal Resistance. You have Resistance to Fire damage and Poison damage.\nInfernal Sight. You can see normally in Dim Light and Darkness—both magical and nonmagical—within 60 feet of yourself.\nSilver-Tongued. You gain proficiency in the Deception skill.",
    skills : ["Deception"],
    dmgres : ["Fire", "Poison"],
    vision : [["Darkvision (magical & nonmagical)", 60]]
};
FeatsList["infernal bulwark"] = {
    name : "Infernal Bulwark",
    source : [["DDBD", 0]],
    prerequisite : "Level 4+ and the Infernal Pact feat",
    prereqeval : function(v) { 
        return v.characterLevel >= 4 && CurrentFeats.known.indexOf("infernal pact") !== -1; 
    },
    type : "general",
    descriptionFull : "General Feat (Prerequisite: Level 4+, Infernal Pact Feat)\n\nYou gain the following benefits.\nAbility Score Increase. Increase your Constitution or Charisma score by 1, to a maximum of 20.\nDevil’s Flesh. Your skin thickens and assumes a scaled, leathery texture. While you aren’t wearing armor or wielding a Shield, your base Armor Class equals 10 plus your Dexterity modifier plus the modifier of the ability increased by this feat.\nInfernal Protection. You always have the Armor of Agathys spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. When you cast it without a spell slot using this feature, you cast this spell as its level 2 version, and it deals Fire damage instead of Cold damage. You can also cast the spell using any spell slots you have of the appropriate level. Charisma is your spellcasting ability for this spell.\nVengeful Surge. Whenever a creature you can see within 60 feet of yourself forces you to make a saving throw and you succeed, you can take a Reaction to deal 1d10 Fire damage to that creature.\nYou can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
    action : [["reaction", "Vengeful Surge (on save)"]],
    usages : "Proficiency Bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    spellcastingBonus : [{
        name : "Infernal Protection",
        spells : ["armor of agathys"],
        selection : ["armor of agathys"],
        firstCol : "oncelr",
        allowUpCasting : true,
        spellcastingAbility : 6
    }],
    weaponOptions : [{
        regExpSearch : /^(?=.*vengeful)(?=.*surge).*$/i,
        name : "Vengeful Surge",
        source : [["DDBD", 0]],
        ability : 1, 
        type : "AlwaysProf",
        damage : [1, 10, "fire"],
        range : "60 ft",
        description : "Reaction when succeeding on a save forced by a creature I can see",
        abilitytodamage : false,
        isAlwaysProf : true
    }],
    weaponsAdd : ["Vengeful Surge"],
    choices : ["Constitution", "Charisma"],
    "constitution" : {
        description : "1/LR, cast Armor of Agathys at 2nd level (deals Fire dmg instead of Cold); can also use slots. Unarmored AC is 10 + Dex + Con (no shield). On a successful save, use Reaction to deal 1d10 Fire dmg to the creature that forced it. [+1 Con]",
        scores : [0, 0, 1, 0, 0, 0],
        armorOptions : [{
            regExpSearch : /^(?=.*devil)(?=.*flesh).*$/i,
            name : "Devil's Flesh (Con)",
            source : [["DDBD", 0]],
            ac : "10+Con",
            selectNow : true
        }]
    },
    "charisma" : {
        description : "1/LR, cast Armor of Agathys at 2nd level (deals Fire dmg instead of Cold); can also use slots. Unarmored AC is 10 + Dex + Cha (no shield). On a successful save, use Reaction to deal 1d10 Fire dmg to the creature that forced it. [+1 Cha]",
        scores : [0, 0, 0, 0, 0, 1],
        armorOptions : [{
            regExpSearch : /^(?=.*devil)(?=.*flesh).*$/i,
            name : "Devil's Flesh (Cha)",
            source : [["DDBD", 0]],
            ac : "10+Cha",
            selectNow : true
        }]
    }
};
FeatsList["infernal dragoon"] = {
    name : "Infernal Dragoon",
    source : [["DDBD", 0]],
    prerequisite : "Level 4+ and the Infernal Pact feat",
    prereqeval : function(v) { 
        return v.characterLevel >= 4 && CurrentFeats.known.indexOf("infernal pact") !== -1; 
    },
    type : "general",
    descriptionFull : "General Feat (Prerequisite: Level 4+, Infernal Pact Feat)\n\nYou gain the following benefits.\nAbility Score Increase. Increase your Constitution or Charisma score by 1, to a maximum of 20.\nDevilish Aura. Your close association with diabolic powers unsettles others. You can take a Magic action to manifest an aura of fear in a 30-foot Emanation originating from yourself. Each creature of your choice in that area makes a Charisma saving throw (DC 8 plus the modifier of the ability increased by this feat plus your Proficiency Bonus). On a failed save, it has the Frightened condition until the end of its next turn. On a successful save, a creature is unaffected, and it is immune to this ability for 24 hours.\nDevil’s Favor. You can call on your infernal patron to aid you. When you make a D20 Test, you can add a +2 bonus to the roll. Once you use this benefit, you can’t do so again until you finish a Long Rest.\nDiabolic Empowerment. You always have the Magic Weapon spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. When you cast it without a spell slot using this feature, the spell’s duration becomes 8 hours for that casting. You can also cast the spell using any spell slots you have of the appropriate level. Charisma is your spellcasting ability for this spell.",
    action : [["action", "Devilish Aura"]],
    usages : 1,
    recovery : "long rest",
    limfeaname : "Devil's Favor",
    spellcastingBonus : [{
        name : "Diabolic Empowerment",
        spells : ["magic weapon"],
        selection : ["magic weapon"],
        firstCol : "oncelr",
        allowUpCasting : true,
        spellcastingAbility : 6
    }],
    choices : ["Constitution", "Charisma"],
    "constitution" : {
        description : "1/LR, add +2 to a D20 Test (Devil's Favor). Magic action: 30-ft eman., chosen creatures make Cha save (DC 8+Con+PB) or Frightened until next turn end (immune 24h on pass). I always have Magic Weapon prepared and cast 1/LR without slot (lasts 8 hr) or with slots using Cha. [+1 Con]",
        scores : [0, 0, 1, 0, 0, 0]
    },
    "charisma" : {
        description : "1/LR, add +2 to a D20 Test (Devil's Favor). Magic action: 30-ft eman., chosen creatures make Cha save (DC 8+Cha+PB) or Frightened until next turn end (immune 24h on pass). I always have Magic Weapon prepared and cast 1/LR without slot (lasts 8 hr) or with slots using Cha. [+1 Cha]",
        scores : [0, 0, 0, 0, 0, 1]
    }
};
FeatsList["pack fighting"] = {
    name : "Pack Fighting",
    source : [["DDBD", 0]],
    prerequisite : "Fighting Style Feature",
    type : "fighting style",
    description : "When making a melee attack with a weapon or unarmed strike, I gain a +1 bonus to damage if an ally (not incapacitated) is within 5 ft of the target. This bonus becomes +2 if that ally also has the Pack Fighting feat.",
    descriptionFull : "Fighting Style Feat (Prerequisite: Fighting Style Feature)\n\nWhen you make a melee attack with a weapon or an Unarmed Strike against a creature, you gain a +1 bonus to the damage roll if at least one of your allies is within 5 feet of the creature and the ally doesn’t have the Incapacitated condition. If at least one ally within 5 feet of the creature also has this feat and doesn’t have the Incapacitated condition, this bonus increases to +2.",
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.isMeleeWeapon) {
                    fields.Description += (fields.Description ? '; ' : '') + '+1/+2 dmg w/ ally w/in 5ft';
                }
            },
            "When I make a melee attack with a weapon or an unarmed strike, I gain a +1 bonus to the damage roll if at least one ally (not incapacitated) is within 5 feet of the target. This increases to +2 if the ally also has the Pack Fighting feat."
        ]
    }
};
FeatsList["prone fighting"] = {
    name : "Prone Fighting",
    source : [["DDBD", 0]],
    prerequisite : "Fighting Style Feature",
    type : "fighting style",
    description : "While I have the Prone condition, I don't suffer Disadvantage on my attack rolls, and attackers don't gain Advantage on attack rolls against me because of it.",
    descriptionFull : "Fighting Style Feat (Prerequisite: Fighting Style Feature)\n\nWhile you have the Prone condition, you don’t have Disadvantage due to the Prone condition on attack rolls, and the Prone condition doesn’t grant Advantage on attack rolls made against you."
};
FeatsList["shifting combatant"] = {
    name : "Shifting Combatant",
    source : [["DDBD", 0]],
    prerequisite : "Level 4+ and the Weapon Mastery feature",
    prereqeval : function(v) { 
        return v.characterLevel >= 4; 
    },
    type : "general",
    descriptionFull : "General Feat (Prerequisite: Level 4+, Weapon Mastery Feature)\n\nYou gain the following benefits.\nAbility Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20.\nDomino Strike. When you hit a creature with a weapon and activate the Push mastery property to push that creature into a space occupied by a Large or smaller creature, you can force the creatures to collide. Each creature must succeed on a Constitution saving throw (DC 8 plus the ability modifier of the score increased by this feat and your Proficiency Bonus) or have the Prone condition.\nFearless Leap. When you make a Long Jump, moving at least 10 feet immediately before the jump, and land in a space within 5 feet of two or more enemies, attack rolls made against you have Disadvantage until the start of your next turn.",
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (fields.Description && (/push/i).test(fields.Description)) {
                    fields.Description += (fields.Description ? '; ' : '') + 'Collision: Con save or both Prone';
                }
            },
            "When I hit a creature with a weapon and activate the Push mastery property, if I push it into a space occupied by a Large or smaller creature, I can force a collision. Both creatures must make a Con save or fall Prone."
        ]
    },
    choices : ["Strength", "Dexterity"],
    "strength" : {
        description : "If I push a creature with the Push mastery into a \u2264Large creature's space, I can force a collision. Both make a Con save (DC 8+Str+PB) or fall Prone. If I Long Jump (10+ ft start) and land within 5 ft of 2+ enemies, attacks vs me have Disadv. until my next turn starts. [+1 Str]",
        scores : [1, 0, 0, 0, 0, 0]
    },
    "dexterity" : {
        description : "If I push a creature with the Push mastery into a \u2264Large creature's space, I can force a collision. Both make a Con save (DC 8+Dex+PB) or fall Prone. If I Long Jump (10+ ft start) and land within 5 ft of 2+ enemies, attacks vs me have Disadv. until my next turn starts. [+1 Dex]",
        scores : [0, 1, 0, 0, 0, 0]
    }
};
FeatsList["tactical combatant"] = {
    name : "Tactical Combatant",
    source : [["DDBD", 0]],
    prerequisite : "Level 4+ and Strength or Dexterity 13+",
    prereqeval : function(v) { 
        return v.characterLevel >= 4; 
    },
    type : "general",
    descriptionFull : "General Feat (Prerequisite: Level 4+ and Strength or Dexterity 13+)\n\nYou gain the following benefits.\nAbility Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 20.\nBuffering Strike. When you hit a creature with a weapon, you can gain Temporary Hit Points equal to the total number rolled on the weapon’s damage dice. Once you use this benefit, you can’t use it again until you roll Initiative or finish a Short or Long Rest.\nHoned Instincts. When you fail an ability check, you can roll 1d6 and add the number rolled to the ability check, potentially turning it into a success. Once you use this benefit, you can’t use it again until you roll Initiative or finish a Short or Long Rest.",
    extraLimitedFeatures : [{
        name : "Buffering Strike",
        usages : 1,
        recovery : "Combat"
    }, {
        name : "Honed Instincts",
        usages : 1,
        recovery : "Combat"
    }],
    choices : ["Strength", "Dexterity"],
    "strength" : {
        description : "1/Combat (or Rest), when I hit with a weapon, I can gain Temp HP equal to the weapon's total damage dice roll. 1/Combat, when I fail an ability check, I can roll 1d6 and add it to the check, potentially succeeding. [+1 Str]",
        scores : [1, 0, 0, 0, 0, 0]
    },
    "dexterity" : {
        description : "1/Combat (or Rest), when I hit with a weapon, I can gain Temp HP equal to the weapon's total damage dice roll. 1/Combat, when I fail an ability check, I can roll 1d6 and add it to the check, potentially succeeding. [+1 Dex]",
        scores : [0, 1, 0, 0, 0, 0]
    }
};
SpellsList["astral flood"] = {
    name : "Astral Flood",
    classes : ["bard", "cleric", "sorcerer", "wizard"],
    source : [["DDBD", 0]],
    level : 3,
    school : "Evoc",
    time : "Act",
    range : "S:30-ft cone",
    components : "V,S,M",
    compMaterial : "a mixture of water and powdered silver",
    duration : "Instantaneous",
    save : "Dex",
    description : "30-ft cone all crea Dex save or 4d10+1d10/SL Cold or Radiant dmg; Cold: Disadv. on next D20 test; Radiant: Blinded beyond 15 ft till my next turn end",
    descriptionFull : "You channel energy from the Astral Sea to unleash a torrent of magic from you in a 30-foot Cone. Each creature in the Cone must succeed on a Dexterity saving throw or take 4d10 Cold or Radiant damage (chosen when you cast this spell). Your choice of damage type determines an additional effect:\n\nCold Damage. The target has Disadvantage on the next D20 Test it makes before the end of your next turn.\nRadiant Damage. The target can see only within 15 feet of itself, and it has the Blinded condition for everything beyond that distance until the end of your next turn.\n\nAt Higher Levels: The damage increases by 1d10 for each spell slot level above 3."
};
SpellsList["buzzing bee"] = {
    name : "Buzzing Bee",
    classes : ["druid", "ranger", "sorcerer", "wizard"],
    source : [["DDBD", 0]],
    level : 1,
    school : "Conj",
    time : "Act",
    range : "120 ft",
    components : "V,S,M",
    compMaterial : "A dab of honey",
    duration : "Conc, 1 min",
    description : "1 target Disadv. on Perception, Stealth, Con (Conc.) saves; can't be Invisible; ends if >120 ft",
    descriptionFull : "You call forth a noisy spectral bee. You target a creature that you can see within range. The bee hovers around the target, distracting it with loud buzzing. For the duration, the target has Disadvantage on Wisdom (Perception) checks, Dexterity (Stealth) checks, and Constitution saving throws made to maintain Concentration. In addition, the target cannot benefit from the Invisible condition.\n\nThe bee moves with the target, hovering within 3 feet of it as long as the target is within 120 feet of you. The bee disappears when the spell ends or if the target moves out of range."
};
SpellsList["insidious rhythm"] = {
    name : "Insidious Rhythm",
    classes : ["bard"],
    source : [["DDBD", 0]],
    level : 1,
    school : "Ench",
    time : "Act",
    range : "120 ft",
    components : "V,S",
    duration : "Conc, 1 min",
    save : "Wis",
    description : "1 crea Wis save or Disadv. on Int checks and Con (Conc.) saves; save end of turn; +1 crea/SL",
    descriptionFull : "One creature of your choice that you can see within range hears a haunting yet catchy tune that continuously repeats in its mind. The target must succeed on a Wisdom saving throw, or it has Disadvantage on Intelligence checks and on Constitution saving throws made to maintain Concentration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.\n\nAt Higher Levels: You can target one additional creature for each spell slot level above 1."
};
SpellsList["leomund's lamentable belaborment"] = {
    name : "Leomund's Lamentable Belaborment",
    classes : ["bard", "sorcerer", "wizard"],
    source : [["DDBD", 0]],
    level : 6,
    school : "Ench",
    time : "Act",
    range : "30 ft",
    components : "V",
    duration : "1 min",
    save : "Int",
    description : "10-ft rad Int save or Charmed (argues, Speed 0, Blind/Deaf to non-targets); immune if Int <3/no lang",
    descriptionFull : "You proclaim an insightful or inflammatory statement, such as a claim about the politics of a nearby town. Each creature in a 10-foot-radius Sphere centered on a point you choose within range must succeed on an Intelligence saving throw or have the Charmed condition until the spell ends. Any creature that doesn’t share a language with you or that has an Intelligence score lower than 3 automatically succeeds on the saving throw.\n\nWhile Charmed, a target must spend its turn discussing or arguing for or against your statement. For the duration, the target has a Speed of 0 and has the Blinded and Deafened conditions with respect to everyone except you and other targets affected by this spell.\n\nAt the end of each of its turns, the target repeats the save, ending the spell on itself on a success."
};
SpellsList["sticks to snakes"] = {
    name : "Sticks to Snakes",
    classes : ["cleric", "druid", "ranger"],
    source : [["DDBD", 0]],
    level : 4,
    school : "Trans",
    time : "Act",
    range : "90 ft",
    components : "V,S,M",
    compMaterial : "A small piece of bark and several snake scales",
    duration : "Conc, 1 min",
    save : "Cha",
    description : "Turn 4 sticks (+2/SL) into Venomous Snakes; held objs get Cha save; BA to command within 500 ft",
    descriptionFull : "You can choose up to four nonmagical sticks no longer than a Quarterstaff (or similar pieces of nonmagical wood, such as Torches, Spears, etc.) that you can see within range to shape-shift into snakes. Creatures that are holding a targeted object can make a Charisma saving throw, preventing the target from shape-shifting on a success. Each shape-shifted target uses the Venomous Snake stat block.\n\nEach of these snakes is Friendly to you and your allies. In combat, it shares your Initiative count and takes its turn immediately after yours.\n\nUntil the spell ends, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. When the creature drops to 0 Hit Points, it reverts to its object form, and any remaining damage carries over to that form.\n\nAt Higher Levels: You can target two additional objects for each spell slot level above 4."
};
SpellsList["searing orb"] = {
    name : "Searing Orb",
    classes : ["cleric", "paladin"],
    source : [["DDBD", 0]],
    level : 2,
    school : "Evoc",
    time : "Act",
    range : "60 ft",
    components : "S,M",
    compMaterial : "Metallic flakes and a pinch of phosphorus",
    duration : "Instantaneous",
    save : "Con",
    description : "Ranged spell atk 3d4+1d4/SL Radiant dmg; hit/miss 10-ft rad Con save or Blinded till its next turn end",
    descriptionFull : "You create and hurl a pulsing orb of energy at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 3d4 Radiant damage. Hit or miss, the orb then explodes in a flash of light. The target and each creature within 10 feet of it make a Constitution saving throw. On a failed save, a creature has the Blinded condition until the end of its next turn.\n\nAt Higher Levels: The damage increases by 1d4 for each spell slot level above 2."
};
SpellsList["tortoise shell"] = {
    name : "Tortoise Shell",
    classes : ["artificer", "druid", "ranger", "wizard"],
    source : [["DDBD", 0]],
    level : 2,
    school : "Abjur",
    time : "Act",
    range : "Touch",
    components : "V,S",
    duration : "Conc, 1 min",
    description : "Willing creature gets +3 AC; bonus becomes +1 if it moves until start of next turn",
    descriptionFull : "You touch a willing creature. Until the spell ends, the target’s skin hardens into a tortoise shell, and the target gains a +3 bonus to AC. If the target moves, the bonus becomes +1 instead until the start of its next turn."
};
SpellsList["void star"] = {
    name : "Void Star",
    classes : ["warlock", "wizard"],
    source : [["DDBD", 0]],
    level : 7,
    school : "Necro",
    time : "Act",
    range : "120 ft",
    components : "V,S,M",
    compMaterial : "A fragment of a meteorite",
    duration : "Instantaneous",
    description : "Ranged spell atk 6d12 Necrotic dmg; end of next turn takes 3d12 Necrotic dmg and I regain HP equal to damage dealt; +1d12/SL",
    descriptionFull : "You conjure forth a fragment of a dark star and launch it at one creature that you can see within range. Make a ranged spell attack against the target. On a hit, the target takes 6d12 Necrotic damage. At the end of the target’s next turn, it takes 3d12 Necrotic damage, and you regain Hit Points equal to the amount of Necrotic damage dealt.\n\nAt Higher Levels: The damage (both initial and later) increases by 1d12 for each spell slot level above 7."
};
MagicItemsList["climber's ammunition"] = {
    name : "Climber's Ammunition",
    source : [["DDBD", 0]],
    type : "weapon (any ammunition)",
    rarity : "uncommon",
    description : "On hitting a solid surface, attaches and trails a magic rope (supports 500 lb) for 1 hr or until dismissed. Ammo becomes nonmagical when rope vanishes. Breaks and deals no damage if it hits a creature.",
    descriptionFull : "When you hit a solid surface with this piece of magic ammunition, the ammunition attaches to the surface, and a magic rope trails out from behind it. The rope remains in place for 1 hour or until you dismiss it (no action required). It can support up to 500 pounds at once, breaking if that limit is exceeded. Once the rope vanishes, the ammunition becomes nonmagical.\n\nIf you hit a creature with this ammunition, the ammunition immediately breaks on impact and deals no damage to the target.",
    chooseGear : {
        type : "ammo",
        prefixOrSuffix : "prefix",
        itemName1stPage : ["prefix", "Climber's"],
        descriptionChange : ["replace", "ammunition"],
        excludeCheck : function(inObjKey, inObj) {
            // Ensures only the allowed ammunition types can be selected
            var validAmmo = /arrow|bolt|bullet|needle/i;
            return !validAmmo.test(inObj.name);
        }
    }
};
MagicItemsList["amulet of retributive healing"] = {
    name : "Amulet of Retributive Healing",
    source : [["DDBD", 0]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "When I restore Hit Points to another creature, I can expend 1 charge to regain the exact same amount of Hit Points.",
    descriptionFull : "This amulet has 3 charges and regains 1d3 expended charges daily at dawn. When you restore Hit Points to one other creature, you can expend 1 charge to regain the same amount of Hit Points.",
    usages : 3,
    recovery : "dawn",
    additional : "regains 1d3"
};
MagicItemsList["eternal chalk"] = {
    name : "Eternal Chalk",
    source : [["DDBD", 0]],
    type : "wondrous item",
    rarity : "common",
    description : "This chalk never breaks or wears down. I choose the color and whether it emits a faint glow when I use it. Marks I make can't be erased for 7 days by anyone except me.",
    descriptionFull : "A stick of Eternal Chalk never breaks or wears down with normal use. When using this chalk, you can choose the color of its marks and whether they emit a faint glow. Any marks you make with this chalk can’t be erased for 7 days by anyone except you."
};
MagicItemsList["goggles of foe-finding"] = {
    name : "Goggles of Foe-Finding",
    source : [["DDBD", 0]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "While wearing these goggles, my ranged attacks with weapons ignore Half Cover and Three-Quarters Cover.",
    descriptionFull : "While you’re wearing these goggles, your ranged attacks with weapons ignore Half Cover and Three-Quarters Cover.",
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                // Checks if the attack is not a spell, and is either a ranged weapon or a thrown weapon
                if (!v.isSpell && (v.isRangedWeapon || (/\\bthrown\\b/i).test(fields.Description))) {
                    fields.Description += (fields.Description ? '; ' : '') + 'Ignores 1/2 & 3/4 cover';
                }
            },
            "While wearing these goggles, my ranged attacks with weapons ignore half and three-quarters cover."
        ]
    }
};
MagicItemsList["salubrious armor"] = {
    name : "Salubrious Armor",
    source : [["DDBD", 0]],
    type : "armor (plate or scale mail)",
    rarity : "rare",
    attunement : true,
    description : "Whenever I regain Hit Points while wearing this armor, it takes on a reddish tint, and I gain a +1 bonus to my AC until the end of my next turn.",
    descriptionFull : "Whenever you regain Hit Points while wearing this armor, it takes on a reddish tint, and you gain a +1 bonus to Armor Class until the end of your next turn.",
    allowDuplicates : true,
	choices: ["Scale Mail", "Plate"],
    "scale mail": {
        description: "Whenever I regain Hit Points while wearing this scale mail, it takes on a reddish tint, and I gain a +1 bonus to my AC until the end of my next turn.",
        descriptionFull: "Whenever you regain Hit Points while wearing this scale mail, it takes on a reddish tint, and you gain a +1 bonus to Armor Class until the end of your next turn.",
        armorOptions: {
            regExpSearch: /^(?=.*salubrious)(?=.*scale)(?=.*mail).*$/i,
            name: "Salubrious Scale Mail",
            source: ["DDBD", 0],
            type: "medium",
            ac: "14",
            stealthdis: true,
            weight: 45,
            selectNow: true,
        },
    },
    "plate": {
        description: "Whenever I regain Hit Points while wearing this plate armor, it takes on a reddish tint, and I gain a +1 bonus to my AC until the end of my next turn.",
        descriptionFull: "Whenever you regain Hit Points while wearing this plate armor, it takes on a reddish tint, and you gain a +1 bonus to Armor Class until the end of your next turn.",
        armorOptions: {
            regExpSearch: /^(?=.*salubrious)(?=.*plate)(?=.*armor).*$/i,
            name: "Salubrious Plate Armor",
            source: ["DDBD", 0],
            ac: "18",
            type: "heavy",
            stealthdis: true,
            weight: 65,
            strReq: 15,
            selectNow: true,
        },
    },
};
MagicItemsList["stormwalker's cloak"] = {
    name : "Stormwalker's Cloak",
    source : [["DDBD", 0]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "I have Resistance to Lightning and Thunder damage. As a reaction when damaged by a creature I can see within 60 ft, I can expend 1 charge to cast Hellish Rebuke (DC 13). It deals Lightning or Thunder dmg instead of Fire.",
    descriptionFull : "While wearing this cloak, you gain the following benefits.\n\nShocking Feedback. The cloak has 3 charges and regains all expended charges daily at dawn. You can expend 1 charge to cast Hellish Rebuke from the cloak (DC 13), and the spell deals your choice of Lightning or Thunder damage instead of the usual Fire damage.\n\nStorm Resistance. You have Resistance to Lightning and Thunder damage.",
    dmgres : ["Lightning", "Thunder"],
    usages : 3,
    recovery : "dawn",
    action : [["reaction", "Shocking Feedback (Hellish Rebuke)"]],
    spellcastingBonus : [{
        name : "Shocking Feedback",
        spells : ["hellish rebuke"],
        selection : ["hellish rebuke"],
        firstCol : "1",
        fixedDC : 13
    }],
    spellChanges : {
        "hellish rebuke" : {
			name : "Shocking Feedback",
            description: "Cast on taking damage; creature that dealt damage takes 2d10+1d10/SL Light/Thund dmg; save halves",
            changes : "When casting Hellish Rebuke using the Stormwalker's Cloak, I can choose to deal Lightning or Thunder damage instead of Fire damage."
        }
    }
};
MagicItemsList["alarm pylon"] = {
    name : "Alarm Pylon",
    source : [["DDBD", 0]],
    type : "wondrous item",
    rarity : "uncommon",
    description : "As an action, I can activate/deactivate this 5-ft stone pylon. When activated, I set a trigger: a spell of a specific school is cast, a creature takes 5+ dmg, or an object takes 10+ dmg. If triggered within 300 ft, it rings for 10 seconds, audible up to 300 ft away.",
    descriptionFull : "This 5-foot-tall post is made of stone and etched with runes. As a Magic action, you can activate the pylon by touching the runes and specifying one of the following triggers:\n\u2022 A creature or item casts a spell from a specific school of magic.\n\u2022 A creature takes 5 or more damage.\n\u2022 An object takes 10 or more damage.\n\nIf the chosen trigger occurs within 300 feet of the pylon while the pylon is activated, the pylon emits a ringing alarm for 10 seconds, which is audible up to 300 feet away.\n\nYou can take a Magic action to deactivate the pylon.",
    action : [["action", "Alarm Pylon (activate/deactivate)"]]
};
MagicItemsList["silencing satchel"] = {
    name : "Silencing Satchel",
    source : [["DDBD", 0]],
    type : "wondrous item",
    rarity : "uncommon",
    description : "As an action (1 charge), 1 creature within 60 ft must make a DC 15 Cha save or be cursed for 1 min. While cursed, its mouth is sealed shut: it can't cast spells with Verbal components, eat, or drink potions. The target repeats the save at the end of each of its turns.",
    descriptionFull : "This magic satchel has 3 charges and regains 1d3 expended charges daily at dawn. As a Magic action, you can expend 1 charge and tighten the satchel’s drawstring to inflict a silencing hex on a creature you can see within 60 feet of yourself. The target must succeed on a DC 15 Charisma saving throw or be cursed for 1 minute. While the target is cursed, its mouth is sealed shut. The target can’t cast any spell with a Verbal component, consume potions, or take in food or drink. The target makes a DC 15 Charisma save at the end of each of its turns, ending the curse early on a success.",
    usages : 3,
    recovery : "dawn",
    additional : "regains 1d3",
    action : [["action", "Silencing Satchel (1 charge)"]]
};
MagicItemsList["sync ring"] = {
    name : "Sync Ring",
    source : [["DDBD", 0]],
    type : "ring",
    rarity : "uncommon",
    attunement : true,
    description : "When attuned to this ring, I choose a blank book I am touching. Anything I write with the hand wearing this ring is magically copied into the chosen book. Magical writing is transcribed literally but is nonmagical. Attunement ends if the book fills up or if it is on a different plane than me for more than 24 hours.",
    descriptionFull : "When you attune to this ring, choose a blank book you are touching. Thereafter, whenever you write something using the hand that wears the ring, a copy of your writing magically appears in the chosen book. Magical writing, such as a spell copied from a Spell Scroll or a glyph inscribed for the Glyph of Warding spell, is transcribed literally but is nonmagical.\n\nIf no blank pages are left in the book or the book is on a different plane of existence than you for more than 24 hours, your Attunement to the ring ends."
};
MagicItemsList["unraveling cloak"] = {
    name : "Unraveling Cloak",
    source : [["DDBD", 0]],
    type : "wondrous item",
    rarity : "common",
    description : "As an action, I can unbutton the cloak to leave a continuous thread behind me (up to 100 miles). Finding it requires a DC 15 Wis (Perception) Search action. I can use an action to rebutton it to stop it. Teleporting destroys any unraveled thread.",
    descriptionFull : "When you take a Magic action to remove the button from the hood of this cloak, the cloak’s fabric unravels behind you wherever you go, leaving a continuous thread. Other creatures can see the thread only if they take the Search action to look for it and succeed on a DC 15 Wisdom (Perception) check.\n\nThe cloak ceases to unravel after 100 miles or if you take a Magic action to rebutton the cloak. If you teleport while the cloak is unraveling, any unraveled thread is immediately destroyed.",
    action : [["action", "Unraveling Cloak (unbutton/rebutton)"]]
};
MagicItemsList["wand of misdirection"] = {
    name : "Wand of Misdirection",
    source : [["DDBD", 0]],
    type : "wand",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a spellcaster",
    prereqeval : function(v) {
        return v.isSpellcaster;
    },
    description : "While holding the wand, I can expend 1 charge to cast the Mislead spell from it.",
    descriptionFull : "This wand has 4 charges and regains 1d4 expended charges daily at dawn. While holding the wand, you can expend 1 charge to cast Mislead from it.",
    usages : 4,
    recovery : "dawn",
    additional : "regains 1d4",
    spellcastingBonus : [{
        name : "1 charge",
        spells : ["mislead"],
        selection : ["mislead"],
        firstCol : "1"
    }]
};
