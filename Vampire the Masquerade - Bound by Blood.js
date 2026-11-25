var iFileName = "VtM:BB";
RequiredSheetVersion("13.2.3", 26);
SourceList["VtM:BB"] = {
    name: "Vampire: The Masquerade - Bound by Blood",
    abbreviation: "VtM:BB",
    abbreviationSpellsheet: "BB",
    group: "Ghostfire Gaming",
};
//Kindred class & 6 Subclasses
ClassList.kindred = {
    regExpSearch: /^(?=.*kindred).*$/i,
	name: "Kindred",
    source: ["VtM:BB", 0],
    primaryAbility: "Charisma",
	abilitySave: 6,
    prereqs: "Charisma 13",
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    die: 10,
    saves: ["Con", "Cha"],
    skillstxt: {
        primary: "Choose 2: Athletics, Deception, History, Intimidation, Perception, Persuasion, Survival, or Stealth.",
        secondary: "Choose 1: Athletics, Deception, History, Intimidation, Perception, Persuasion, Survival, or Stealth."
    },
    armorProfs: {
        primary: [true, false, false, false, "Breastplate"],
        secondary: [true, false, false, false, "Breastplate"]
    },
    weaponProfs: {
        primary: [true, false, ["Light Martial Weapons"]],
        secondary: [true, false]
    },
	startingEquipment: [{
		gold: 15,
		pack: "explorer",
		equipright: [
			["Leather armor", "", 10],
			["Daggers", 2, 1],
			["Shortsword", "", 2],
			["Choice of Artisan's Tools", "", ""],
		],
		equip1stPage: {
			weapons: ["Dagger", "Shortsword"],
			ammo: [["Daggers", 2]],
		},
	}, {
		gold: 75,
	}],
    subclasses: ["Kindred Subclass", []],
	subclassGainedLevel: 3,
    features: {
        "feed": {
            name: "Feed",
            source: ["VtM:BB", 0],
            minlevel: 1,
            description: desc([
                "As an action, I can feed on a willing, Charmed, or Incapacitated/Grappled/Restrained target within 5 ft.",
                "I roll Feed Dice + Con mod (min 1). The target takes Necrotic damage and its max HP drops by the total.",
                "I regain 1 Blood Point on a 6 of a d6 Feed Die, or if the target's max HP is reduced to 0.",
                "A willing/Charmed target can spend 1 HD to reduce its max HP and give me 1 BP without ending the Charm."
            ]),
            additional: levels.map(function (n) {
                return (n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6) + "d6 Feed Dice";
            }),
            action: [["action", "Feed"]]
        },
        "the beast": {
            name: "The Beast",
            source: ["VtM:BB", 0],
            minlevel: 1,
            description: desc([
                "As a Bonus Action, I gain Advantage on D20 Tests until the start of my next turn.",
                "Hunger: If I fail a D20 Test with this Advantage, I become bloodlusted for 1 minute or until I Feed.",
                "Bloodlusted: I must move to the nearest prey, Attack to grapple, and use my action to Feed."
            ]),
            usages: "Proficiency Bonus per ",
            usagescalc: "event.value = How('Proficiency Bonus');",
            recovery: "short rest",
            action: [["bonus action", " (Gain Adv on D20 Test)"]]
        },
        "blood potency": {
            name: "Blood Potency",
            source: ["VtM:BB", 0],
            minlevel: 1,
            description: desc([
                "I am fueled by Blood Points, which I can expend to power my Kindred feats and subclass features.",
                "Heal Wounds: As a Bonus Action, expend 1 BP to regain 1d10 + Kindred level Hit Points.",
                "Hunger Sated: If I fail a D20 Test affected by The Beast, expend 1 BP to ignore Hunger."
            ]),
            usages: [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11],
            recovery: " (Feed)",
            action: [["bonus action", " (Heal Wounds)"]]
        },
        "kindred biology": {
            name: "Kindred Biology",
            source: ["VtM:BB", 0],
            minlevel: 1,
            description: desc([
                "I am Undead, don't age, and don't regain BP on a rest. I need 1 BP for Long Rest benefits.",
                "I can't eat/drink. I need 1 BP/day for sustenance or make a DC 10 Con save to avoid Exhaustion.",
                "I auto-succeed Death Saves, but Fire/Radiant at 0 HP or beheading kills me outright.",
                "I am Vulnerable to Fire/Radiant, and take 5 Radiant dmg if I start my turn in sunlight.",
                "Piercing wooden weapon at 0 HP or on a crit Paralyzes me. At Exhaustion 6, I drop to 1 HP Unconscious.",
                "Charisma is my spellcasting ability. Spells require no V/S components, and no M unless consumed/cost."
            ]),
            vision: [["Darkvision", 60]],
            savetxt: { text: ["Vulnerability to Fire and Radiant damage, Auto-succeed Death Saves", "Stake at 0 HP/Crit = Paralyzed"] },
        },
		"kindred feat": {
            name: "Kindred Feat",
            source: ["VtM:BB", 0],
            minlevel: 2,
            description: desc([
                "I gain a Kindred feat of my choice for which I qualify.",
                "I gain an additional Kindred feat at Kindred levels 7, 10, 13, and 17."
            ]),
            additional: levels.map(function (n) {
                if (n < 2) return "";
                if (n < 7) return "1 feat known";
                if (n < 10) return "2 feats known";
                if (n < 13) return "3 feats known";
                if (n < 17) return "4 feats known";
                return "5 feats known";
            })
        },
        "subclassfeature3": {
            name: "Kindred Subclass",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "Choose a Kindred Subclass that represents your specialization.",
                "I gain features from my chosen subclass at 3rd level and higher."
            ])
        },
		"bestial fury": {
            name: "Bestial Fury",
            source: ["VtM:BB", 0],
            minlevel: 5,
            description: desc([
                "Once per turn on a Melee/Unarmed hit, I can expend 2 uses of The Beast to roll the damage dice twice and use either.",
                "If this damage reduces the target to 0 HP, I can't choose to knock it out nonlethally.",
                "Bestial Flurry: While affected by The Beast, I can attack twice instead of once when taking the Attack action."
            ])
        },
        "improved feed": {
            name: "Improved Feed",
            source: ["VtM:BB", 0],
            minlevel: 5,
            description: desc([
                "I can use my Feed feature as a Bonus Action.",
                "Additionally, creatures Grappled by me have Disadvantage on checks to escape the grapple."
            ]),
            action: [["bonus action", "Feed"]]
        },
        "vampiric will": {
            name: "Vampiric Will",
            source: ["VtM:BB", 0],
            minlevel: 10,
            description: desc([
                "I have Advantage on saving throws to avoid or end the Charmed condition, and against effects that turn undead."
            ]),
            savetxt: { adv_vs: ["Charmed", "Turn Undead"] }
        },
        "efficient feeding": {
            name: "Efficient Feeding",
            source: ["VtM:BB", 0],
            minlevel: 14,
            description: desc([
                "Whenever I roll a die for my Feed feature, I can reroll the die, but I must use the new roll."
            ])
        },
        "ancient awakening": {
            name: "Ancient Awakening",
            source: ["VtM:BB", 0],
            minlevel: 20,
            description: desc([
                "The essence of the original Antediluvians awakens. I pick four Ability Scores to increase by +2 (maximum 25).",
                "If a subclass feature allows a maximum above 25, I can increase it up to that noted maximum."
            ]),
            scorestxt: "+2 to four Ability Scores (max 25)",
			scoresMaximum: [25, 25, 25, 25, 25, 25],
        }
    }
};
AddSubClass("kindred", "brujah", {
    regExpSearch: /^(?=.*brujah).*$/i,
    subname: "Brujah",
	fullname: "Brujah",
    source: ["VtM:BB", 0],
    features: {
        "subclassfeature3": {
            name: "Brujah Bane",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "If I fail a D20 Test affected by The Beast and expend Blood Points to ignore Hunger,",
                "I must expend Blood Points equal to my Proficiency Bonus instead of 1."
            ])
        },
        "subclassfeature3.1": {
            name: "Fighting Fury",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "I can expend 1 Blood Point to gain the following benefits for 1 minute:",
                "Brawn: Advantage on my first Melee weapon/Unarmed Strike attack roll on my turn.",
                "Swiftness: I can take the Dash or Dodge action as a Bonus Action.",
                "Weapon Training: I gain proficiency with Martial weapons, and two weapon masteries."
            ]),
            weaponProfs: [false, true],
            action: [["bonus action", " (Dash/Dodge)"]],
			additional: "2 Weapon Masteries",
			extraTimes: 2,
			extraname: "Weapon Mastery",
			choicesWeaponMasteries: true,
        },
        "subclassfeature6": {
            name: "Fearsome",
            source: ["VtM:BB", 0],
            minlevel: 6,
            description: desc([
                "Predatory Aura: I have Advantage on Charisma (Intimidation) checks.",
                "Dread Gaze: I can expend 1 Blood Point to cast the Fear spell."
            ]),
			advantages: [
				["Intimidation", true],
			],
            spellFirstColTitle : "BP",
			spellcastingBonus: [{
                name: "Dread Gaze",
                spells: ["fear"],
                selection: ["fear"],
                firstCol: "1-3"
            }]
        },
        "subclassfeature9": {
            name: "Fleetness",
            source: ["VtM:BB", 0],
            minlevel: 9,
            description: desc([
                "Dizzying Speed: I can expend 3 Blood Points to cast Haste on myself.",
                "When I cast the spell in this way, I do not suffer lethargy when it ends."
            ]),
            spellcastingBonus: [{
                name: "Dizzying Speed",
                spells: ["haste"],
                selection: ["haste"],
                firstCol: "3 BP"
            }],
        },
        "subclassfeature11": {
            name: "Burning Wrath",
            source: ["VtM:BB", 0],
            minlevel: 11,
            description: desc([
                "As a Bonus Action, expend 2 BP to empower my Unarmed Strikes for 1 min.",
                "It ends early if I fail to make an attack roll against an enemy on my turn.",
                "While active, my Unarmed Strikes deal an extra 2d8 Necrotic damage."
            ]),
            action: [["bonus action", ""]],
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.baseWeaponName == 'unarmed strike') {
                            fields.Description += (fields.Description ? '; ' : '') + '+2d8 Necrotic dmg while Burning Wrath is active';
                        }
                    },
                    "While Burning Wrath is active, my unarmed strikes deal an extra 2d8 Necrotic damage."
                ]
            }
        },
        "subclassfeature15": {
            name: "Rouse Emotions",
            source: ["VtM:BB", 0],
            minlevel: 15,
            description: desc([
                "I can expend 3 Blood Points to cast Charm Person, Confusion, or Fear, modified:",
                "Enthrall (Charm Person): Cast at 6th level; targets have Disadv. on the save.",
                "Incite (Confusion): A creature that fails the save automatically rolls 7-8 for behavior.",
                "Terrorize (Fear): No Concentration required; targets have Disadv. on the save."
            ]),
            spellcastingBonus: [{
                name: "Rouse Emotions",
                spells: ["charm person", "confusion"],
                selection: ["charm person", "confusion"],
                times: 2,
                firstCol: "3"
            }],
        },
        "subclassfeature18": {
            name: "Puissant Might",
            source: ["VtM:BB", 0],
            minlevel: 18,
            description: desc([
                "My Strength score increases by 4, to a maximum of 30.",
                "Pulverize: When I hit with a Melee weapon or Unarmed Strike, it deals two extra dice of damage."
            ]),
            scores: [4, 0, 0, 0, 0, 0],
            scoresMaximum: [30, 0, 0, 0, 0, 0],
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.isMeleeWeapon) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Pulverize (+2 damage dice)';
                        }
                    },
                    "My melee weapons and unarmed strikes deal two extra dice of damage."
                ]
            }
        }
    }
});
AddSubClass("kindred", "gangrel", {
    regExpSearch: /^(?=.*gangrel).*$/i,
    subname: "Gangrel",
	fullname: "Gangrel",
    source: ["VtM:BB", 0],
    features: {
        "subclassfeature3": {
            name: "Gangrel Bane",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "If I am affected by the Hunger of my Beast feature, I have Disadvantage on Charisma",
                "(Deception and Persuasion) checks until I finish a Long Rest."
            ])
        },
        "subclassfeature3.1": {
            name: "Gifts of the Beast",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "Eyes of the Beast: The range of my Darkvision increases to 240 feet.",
                "Feral Weapons: As a Bonus Action, I can expend 1 BP to grow claws for 1 minute.",
                "While active, I can use Dex for Unarmed Strikes, and they deal 2d6 Slashing dmg."
            ]),
            vision: [["Darkvision", 240]],
            action: [["bonus action", " (Feral Weapons)"]],
            weaponOptions: [{
                regExpSearch: /^(?=.*feral)(?=.*claw).*$/i,
                name: "Feral Claws",
                source: ["VtM:BB", 0],
                ability: 1,
                type: "Natural",
                damage: [2, 6, "slashing"],
                range: "Melee",
                description: "Finesse",
                abilitytodamage: true
            }],
            weaponsAdd: ["Feral Claws"]
        },
        "subclassfeature6": {
            name: "Feral Spirit",
            source: ["VtM:BB", 0],
            minlevel: 6,
            description: desc([
                "Beastmind: I can telepathically speak to/Influence Beasts within 30 ft by making eye contact.",
                "Like Minds: I can cast Animal Friendship at a spell level equal to my Prof Bonus for free.",
                "Wild Hunger: When affected by Hunger, my Unarmed Strikes deal an extra 1d6 Slashing dmg,",
                "and I count as one size larger when determining what I can grapple."
            ]),
			carryingCapacity: 2,
			spellFirstColTitle : "BP",
            spellcastingBonus: [{
                name: "Like Minds",
                spells: ["animal friendship"],
                selection: ["animal friendship"],
                firstCol: "atwill"
            }],
            spellChanges: {
                "animal friendship": {
                    description: "PB beasts save or Charmed; ends if the beast is damaged by me or my allies",
                    changes: "When cast using my Like Minds feature, Animal Friendship is cast at a spell slot level equal to my Proficiency Bonus without expending a spell slot."
                }
            },
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.baseWeaponName == 'unarmed strike' || v.theWea.name == 'Feral Claws') {
                            fields.Description += (fields.Description ? '; ' : '') + '+1d6 Slashing dmg while Hunger active';
                        }
                    },
                    "While affected by the Hunger of my Beast feature, my Unarmed Strikes and Feral Claws deal an extra 1d6 Slashing damage."
                ]
            }
        },
        "subclassfeature9": {
            name: "Gifts of Survival",
            source: ["VtM:BB", 0],
            minlevel: 9,
            description: desc([
                "Feral Fortitude: When taking damage (except Fire/Radiant), I can use a Reaction to",
                "reduce the damage taken by my Proficiency Bonus + Constitution mod (min 1).",
                "Meld with Earth: As a Magic action, expend 1 BP to cast Meld into Stone (dirt/sand/clay).",
                "While this spell is active, I gain Tremorsense with a range of 60 feet."
            ]),
            action: [["reaction", " (Feral Fortitude)"], ["action", " (Meld with Earth)"]],
            spellcastingBonus: [{
                name: "Meld with Earth",
                spells: ["meld into stone"],
                selection: ["meld into stone"],
                firstCol: "1"
            }],
            spellChanges: {
                "meld into stone": {
                    description: "I merge into dirt, sand, or clay; gain Tremorsense 60 ft; Action to leave",
                    changes: "When cast using my Meld with Earth feature, the surface must be dirt, sand, or clay instead of stone. Additionally, I gain Tremorsense 60 ft while the spell is active."
                }
            }
        },
        "subclassfeature11": {
            name: "Corporeal Mastery",
            source: ["VtM:BB", 0],
            minlevel: 11,
            description: desc([
                "As a Magic action, I can expend BP to shape-shift into a Beast form (see Known Forms).",
                "Lasts for 1/2 Kindred lvl in hours, until I use this again, am Incapacitated, die, or",
                "end it as a Bonus Action. I gain Temp HP equal to my Kindred level.",
                "Known Forms: (2 BP): Bat, Cat, Rat, Raven, Wolf. (4 BP): Dire Wolf, Giant Bat,",
                "Giant Rat, Panther. I retain my type, HP, HD, Int/Wis/Cha, features, langs, and feats.",
                "Equipment merges and nonmagical items have no effect. I can't speak."
            ]),
            action: [["action", " (Enter Beast Form)"], ["bonus action", " (End Beast Form)"]]
        },
        "subclassfeature15": {
            name: "Command the Beast",
            source: ["VtM:BB", 0],
            minlevel: 15,
            description: desc([
                "Rein: I can cast Dominate Beast (7th-level) without a spell slot/Concentration (1/Long Rest).",
                "Rouse: As a Reaction when an Undead (Kindred) I see within 30 ft makes a D20 Test, I can",
                "expend 1 BP to force them to use their Beast feature. Fails if they have no uses left."
            ]),
            action: [["reaction", " (Rouse)"]],
            spellcastingBonus: [{
                name: "Rein",
                spells: ["dominate beast"],
                selection: ["dominate beast"],
                firstCol: "oncelr"
            }],
            spellChanges: {
                "dominate beast": {
                    description: "Beast save or Charmed, I dictate actions telepathically; no Concentration",
                    changes: "When cast using my Rein feature, Dominate Beast is cast as a 7th-level spell, requires no spell slot, and does not require Concentration."
                }
            }
        },
        "subclassfeature18": {
            name: "Protean Rewards",
            source: ["VtM:BB", 0],
            minlevel: 18,
            description: desc([
                "Flesh of Marble: As a Magic action, expend 2 BP to double my Feral Fortitude Damage",
                "Reduction for 1 minute.",
                "Mistform: Expend 2 BP to cast Gaseous Form on myself (no Concentration required)."
            ]),
            action: [["action", " (Flesh of Marble)"]],
            spellcastingBonus: [{
                name: "Mistform",
                spells: ["gaseous form"],
                selection: ["gaseous form"],
                firstCol: "2"
            }],
            spellChanges: {
                "gaseous form": {
                    description: "I become incorporeal mist, Fly 10 ft; drop non-magical items; no Concentration",
                    changes: "When cast using my Mistform feature, Gaseous Form does not require Concentration."
                }
            }
        }
    }
});
AddSubClass("kindred", "lasombra", {
    regExpSearch: /^(?=.*lasombra).*$/i,
    subname: "Lasombra",
	fullname: "Lasombra",
    source: ["VtM:BB", 0],
    features: {
        "subclassfeature3": {
            name: "Lasombra Bane",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "When I roll a 1 on the d20 of a D20 Test, I have Disadvantage on the next D20 Test",
                "I make within 1 minute."
            ])
        },
        "subclassfeature3.1": {
            name: "Taste of Oblivion",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "Oblivion's Sight: I can see normally in Dim Light and Darkness (both magical",
                "and nonmagical) within 120 ft of myself.",
                "Shadow Cloak: I have Advantage on Dex (Stealth) checks and can Hide as a Bonus Action."
            ]),
            vision: [["Darkvision (magical/nonmagical)", 120]],
            advantages: [["Stealth", true]],
            action: [["bonus action", " (Hide)"]]
        },
        "subclassfeature6": {
            name: "Shadow Mastery",
            source: ["VtM:BB", 0],
            minlevel: 6,
            description: desc([
                "Shrouding: I can expend 1 Blood Point to cast Darkness.",
                "Arms of Ahriman: I can expend 2 BP to cast Evard's Black Tentacles. When cast in this",
                "way, the tentacles deal 1d6 Bludgeoning and 2d6 Cold damage (instead of 3d6 Bludg.)."
            ]),
			spellFirstColTitle : "BP",
            spellcastingBonus: [{
                name: "Shrouding",
                spells: ["darkness"],
                selection: ["darkness"],
                firstCol: "1"
            }, {
                name: "Arms of Ahriman",
                spells: ["evard's black tentacles"],
                selection: ["evard's black tentacles"],
                firstCol: "2"
            }],
            spellChanges: {
                "evard's black tentacles": {
                    description: "All enter/start in 20-ft rad save or Restrained & 1d6 Bludg. + 2d6 Cold dmg/rnd; Str/Dex check escape",
                    changes: "When cast using my Arms of Ahriman feature, the tentacles deal 1d6 Bludgeoning damage and 2d6 Cold damage instead of 3d6 Bludgeoning damage."
                }
            }
        },
        "subclassfeature9": {
            name: "Force of Will",
            source: ["VtM:BB", 0],
            minlevel: 9,
            description: desc([
                "Mesmerize: I can expend 1 Blood Point to cast Suggestion.",
                "Shhh ...: As a Magic action, expend 1 BP to mentally lull a creature I see in 15 ft to sleep.",
                "It must make a Wis save (DC 8 + Cha mod + Prof Bonus) or be Unconscious for 10 min.",
                "Ends if it takes damage or someone uses an action to shake it awake.",
                "Creatures that don't sleep (like elves) or are immune to Exhaustion auto-succeed."
            ]),
            action: [["action", " (Shhh ...)"]],
            spellcastingBonus: [{
                name: "Mesmerize",
                spells: ["suggestion"],
                selection: ["suggestion"],
                firstCol: "1"
            }]
        },
        "subclassfeature11": {
            name: "Abyssal Strength",
            source: ["VtM:BB", 0],
            minlevel: 11,
            description: desc([
                "Monstrous Might: As a Bonus Action, I can expend 2 Blood Points to increase my",
                "Strength score by an amount equal to my Proficiency Bonus for 1 minute."
            ]),
            action: [["bonus action", " (Monstrous Might)"]]
        },
        "subclassfeature15": {
            name: "Crush Weakness",
            source: ["VtM:BB", 0],
            minlevel: 15,
            description: desc([
                "Dark Judgment: As a Reaction when a creature I see in 30 ft fails an ability check or",
                "saving throw, I can expend 2 BP to deal 4d8 Psychic damage to it.",
                "Obliviate: As a Reaction when a creature I see in 10 ft misses an attack roll, I can",
                "expend 2 BP to deal 2d8 Bludgeoning and 2d8 Cold damage to it."
            ]),
            action: [["reaction", " (Dark Judgment)"], ["reaction", " (Obliviate)"]]
        },
        "subclassfeature18": {
            name: "Tenebrous Form",
            source: ["VtM:BB", 0],
            minlevel: 18,
            description: desc([
                "As a Magic action, I can expend 5 BP to assume Tenebrous Form for 1 min. Benefits:",
                "Armored by Darkness: I have a +4 bonus to AC.",
                "Dark Vigor: I gain 4d10 Temporary Hit Points.",
                "Power of Oblivion: I have Advantage on Strength and Constitution checks & saving throws.",
                "Umbral Limbs: Unarmed Strikes gain +5 ft reach, +2d10 Cold dmg, and grapple Huge/smaller.",
                "Shadowstep: I can expend 1 BP to cast Misty Step to an unoccupied space in Dim Light/Darkness.",
                "Extend Shadows: I can expend 1 BP to increase the duration of Tenebrous Form by 1 minute."
            ]),
            action: [["action", " (Enter Tenebrous Form)"], ["bonus action", "Misty Step (in Tenebrous Form)"]],
			spellcastingBonus : [{
				name : "Shadowstep",
				spells : ["misty step"],
				selection : ["misty step"],
				times : 1,
				firstCol : "1",
			}],
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.baseWeaponName == 'unarmed strike') {
                            fields.Description += (fields.Description ? '; ' : '') + 'Reach +5 ft and +2d10 Cold dmg while in Tenebrous Form';
                        }
                    },
                    "While in my Tenebrous Form, my Unarmed Strikes gain an additional 5 feet of reach and deal an extra 2d10 Cold damage."
                ]
            }
        }
    }
});
AddSubClass("kindred", "nosferatu", {
    regExpSearch: /^(?=.*nosferatu).*$/i,
    subname: "Nosferatu",
	fullname: "Nosferatu",
    source: ["VtM:BB", 0],
    features: {
        "subclassfeature3": {
            name: "Nosferatu Bane",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "My physical appearance is monstrous and unsettling. I have Disadvantage on Charisma",
                "checks when interacting with non-Undead that can see my hideous visage."
            ])
        },
        "subclassfeature3.1": {
            name: "Hidden in Plain Sight",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "Mask of a Thousand Faces: I can cast Disguise Self without expending a spell slot.",
                "Vanish: I can cast Invisibility without a spell slot a number of times equal to my Prof Bonus."
            ]),
            usages: "Proficiency Bonus per ",
            usagescalc: "event.value = How('Proficiency Bonus');",
            recovery: "short rest",
			spellFirstColTitle : "BP",
            spellcastingBonus: [{
                name: "Mask of a Thousand Faces",
                spells: ["disguise self"],
                selection: ["disguise self"],
                firstCol: "atwill"
            }, {
                name: "Vanish",
                spells: ["invisibility"],
                selection: ["invisibility"],
                firstCol: "PB"
            }]
        },
        "subclassfeature6": {
            name: "Monstrous Gifts",
            source: ["VtM:BB", 0],
            minlevel: 6,
            description: desc([
                "I can choose two Monstrous Gift benefits using the \"Choose Feature\" button."
            ]),
            extraname: "Monstrous Gift",
            extrachoices: ["Animalist", "Ears of the Bat", "Feral Talons", "Leathery Hide", "Patagia", "The Terror"],
            extraTimes: 2,
            "animalist": {
                name: "Animalist",
                description: desc([
                    "I can cast Animal Friendship, Animal Messenger, and Speak with Animals without a",
                    "spell slot. Once I cast each spell this way, I can't do so again until a Short/Long Rest."
                ]),
                spellcastingBonus: [{
                    name: "Animalist",
                    spells: ["animal friendship", "animal messenger", "speak with animals"],
                    selection: ["animal friendship", "animal messenger", "speak with animals"],
                    times: 3,
                    firstCol: "oncesr+markedbox"
                }]
            },
            "ears of the bat": {
                name: "Ears of the Bat",
                description: "I have Blindsight with a range of 60 feet.",
                vision: [["Blindsight", 60]]
            },
            "feral talons": {
                name: "Feral Talons",
                description: desc([
                    "I have a Climb Speed equal to my Speed.",
                    "When I hit with an Unarmed Strike, I can deal 1d8 + Str mod Slashing damage instead."
                ]),
                speed: { climb: { spd: "walk", enc: "walk" } },
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (v.baseWeaponName == 'unarmed strike') {
                                fields.Damage_Die = '1d8';
                                fields.Damage_Type = 'Slashing';
                            }
                        },
                        "My Unarmed Strikes deal 1d8 Slashing damage instead of their normal damage."
                    ]
                }
            },
            "leathery hide": {
                name: "Leathery Hide",
                description: desc([
                    "Damage dealt to me (except Fire and Radiant) is reduced by an amount equal to my",
                    "Constitution modifier (minimum reduction of 1)."
                ])
            },
            "patagia": {
                name: "Patagia",
                description: desc([
                    "If not Incapacitated or in Heavy armor, I can glide, moving 5 ft horizontally per 1 ft descended.",
                    "When I would take fall damage, I can use a Reaction to reduce the damage to 0."
                ]),
                action: [["reaction", " (reduce fall damage)"]]
            },
            "the terror": {
                name: "The Terror",
                description: desc([
                    "As an action, I can reveal my monstrous nature to up to 3 creatures I see in 30 ft.",
                    "Targets must succeed on a Wis save (DC 8 + Cha mod + Prof Bonus) or be Frightened",
                    "for 1 minute, or until I deal damage to them."
                ]),
                action: [["action", " (The Terror)"]]
            }
        },
        "subclassfeature9": {
            name: "Inhuman Strength",
            source: ["VtM:BB", 0],
            minlevel: 9,
            description: desc([
                "My Strength score increases by 2, to a maximum of 25.",
                "Powerful Blows: As a Bonus Action, I can expend 3 BP for 1 minute. When I hit",
                "with a Melee weapon or Unarmed Strike, the target takes an extra 1d10 Force damage."
            ]),
            scores: [2, 0, 0, 0, 0, 0],
            scoresMaximum: [25, 0, 0, 0, 0, 0],
            action: [["bonus action", " (Powerful Blows)"]],
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.isMeleeWeapon || v.baseWeaponName == 'unarmed strike') {
                            fields.Description += (fields.Description ? '; ' : '') + '+1d10 Force dmg while Powerful Blows active';
                        }
                    },
                    "While my Powerful Blows feature is active, my melee weapons and unarmed strikes deal an extra 1d10 Force damage."
                ]
            }
        },
        "subclassfeature11": {
            name: "The Concealing",
            source: ["VtM:BB", 0],
            minlevel: 11,
            description: desc([
                "Conceal: As an action, expend 3 BP to touch an object and make it vanish from sight",
                "and memory. Memories are recovered by Investigation, Remove Curse, or Greater Restoration.",
                "Cloak the Gathering: When I cast Invisibility, I can expend up to 6 BP to affect",
                "additional creatures within 30 feet."
            ]),
            action: [["action", " (Conceal)"]]
        },
        "subclassfeature15": {
            name: "Greater Monstrous Gifts",
            source: ["VtM:BB", 0],
            minlevel: 15,
            description: desc([
                "I can choose one Greater Monstrous Gift benefit using the \"Choose Feature\" button."
            ]),
            extraname: "Greater Monstrous Gift",
            extrachoices: ["Call the Wretched", "Distending Jaws", "One with the Night", "Skin of the Chameleon", "Stony Flesh", "Wings of the Gargoyle"],
            extraTimes: 1,
            "call the wretched": {
                name: "Call the Wretched",
                description: "I can expend 2 Blood Points to cast the Blight or Insect Plague spell.",
                spellcastingBonus: [{
                    name: "Call the Wretched",
                    spells: ["blight", "insect plague"],
                    selection: ["blight", "insect plague"],
                    times: 2,
                    firstCol: "2"
                }]
            },
            "distending jaws": {
                name: "Distending Jaws",
                description: desc([
                    "I can roll one additional Feed Die when I feed.",
                    "I can use my jaws to make Unarmed Strikes that deal 2d6 + Str mod Piercing damage."
                ]),
                weaponOptions: [{
                    regExpSearch: /^(?=.*distending)(?=.*jaw).*$/i,
                    name: "Distending Jaws",
                    source: ["VtM:BB", 0],
                    ability: 1,
                    type: "Natural",
                    damage: [2, 6, "piercing"],
                    range: "Melee",
                    description: "Unarmed Strike",
                    abilitytodamage: true
                }],
                weaponsAdd: ["Distending Jaws"]
            },
            "one with the night": {
                name: "One with the Night",
                description: desc([
                    "My Blindsight is increased to 90 feet.",
                    "I can see normally in Dim Light and Darkness (both magical and nonmagical) within 120 ft."
                ]),
                vision: [["Blindsight", 90], ["Darkvision (magical/nonmagical)", 120]]
            },
            "skin of the chameleon": {
                name: "Skin of the Chameleon",
                description: "I can expend 2 BP to cast Greater Invisibility. I also have Advantage on Dex (Stealth) checks.",
                advantages: [["Stealth", true]],
                spellcastingBonus: [{
                    name: "Skin of the Chameleon",
                    spells: ["greater invisibility"],
                    selection: ["greater invisibility"],
                    firstCol: "2"
                }]
            },
            "stony flesh": {
                name: "Stony Flesh",
                description: desc([
                    "As a Reaction when taking damage, I can expend 1 BP to gain Resistance for 1 min to two",
                    "damage types (not Fire, Psychic, or Radiant), including against the triggering damage."
                ]),
                action: [["reaction", " (Stony Flesh)"]]
            },
            "wings of the gargoyle": {
                name: "Wings of the Gargoyle",
                description: "While I'm not wearing Heavy armor, my Speed increases by 10 ft, and I gain a Fly Speed equal to my Speed.",
                speed: { walk: { spd: "+10", enc: "+10" }, fly: { spd: "walk", enc: "walk" } }
            }
        },
        "subclassfeature18": {
            name: "Lord of Vermin",
            source: ["VtM:BB", 0],
            minlevel: 18,
            description: desc([
                "As an action, I can expend 3 Blood Points to summon 1d4 + 1 swarms of bats, insects,",
                "or rats for 1 hour."
            ]),
            action: [["action", " (Summon Swarms)"]],
            usages: 1,
            recovery: "short rest"
        },
        "subclassfeature18.1": {
            name: "Stalk the Shadows",
            source: ["VtM:BB", 0],
            minlevel: 18,
            description: desc([
                "I can cast Greater Invisibility on myself without a spell slot a number of times equal to",
                "my Proficiency Bonus."
            ]),
            usages: "Proficiency Bonus per ",
            usagescalc: "event.value = How('Proficiency Bonus');",
            recovery: "short rest",
            spellcastingBonus: [{
                name: "Stalk the Shadows",
                spells: ["greater invisibility"],
                selection: ["greater invisibility"],
                firstCol: "PB"
            }]
        }
    }
});
AddSubClass("kindred", "toreador", {
    regExpSearch: /^(?=.*toreador).*$/i,
    subname: "Toreador",
	fullname: "Toreador",
    source: ["VtM:BB", 0],
    features: {
        "subclassfeature3": {
            name: "An Artist's Soul",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "Auspicious Senses: I have Advantage on Int (Investigation) and Wis (Perception) checks.",
                "In addition, the range of my Darkvision increases to 120 feet.",
                "Chosen for Talent: I gain proficiency in two skills and one tool of my choice.",
                "If I already have proficiency in a chosen skill, I gain Expertise in it instead."
            ]),
			skillstxt : ["Choose 2 skills to gain proficiency or expertise"],
			toolsProf : ["One tool of choice", 1],
            vision: [["Darkvision", 120]],
            advantages: [["Investigation", true], ["Perception", true]]
        },
        "subclassfeature3.1": {
            name: "Toreador Bane",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "When I roll a 9 or lower on the d20 for an Int (Investigation) or Wis (Perception)",
                "check, I see nothing of beauty and gain the Restrained condition.",
                "At the end of each of my turns, I can make a DC 10 Wis save to end the condition."
            ])
        },
        "subclassfeature6": {
            name: "Depth of Feelings",
            source: ["VtM:BB", 0],
            minlevel: 6,
            description: desc([
                "Aura Sight: As an action, expend 2 BP to see auras for 1 min. I can ask the GM up to",
                "two yes/no questions (e.g., creature type, spellcasting, hostility, lying).",
                "Entrancement: I can expend 1 BP to cast Calm Emotions, Charm Monster, or Charm Person."
            ]),
            action: [["action", " (Aura Sight)"]],
			spellFirstColTitle : "BP",
            spellcastingBonus: [{
                name: "Entrancement",
                spells: ["calm emotions", "charm monster", "charm person"],
                selection: ["calm emotions", "charm monster", "charm person"],
                times: 3,
                firstCol: "1"
            }]
        },
        "subclassfeature9": {
            name: "Live Fast...",
            source: ["VtM:BB", 0],
            minlevel: 9,
            description: desc([
                "My Dexterity score increases by 2, to a maximum of 25.",
                "...Be a Good Looking Corpse (Rapidity): As a Bonus Action, I can expend 1 BP to gain an",
                "additional action this turn (Attack [1 attack only], Dash, Disengage, Hide, or Utilize).",
                "This effect lasts for a number of turns equal to my Proficiency Bonus."
            ]),
            scores: [0, 2, 0, 0, 0, 0],
            scoresMaximum: [0, 25, 0, 0, 0, 0],
            action: [["bonus action", " (Rapidity)"]]
        },
        "subclassfeature11": {
            name: "Visionary",
            source: ["VtM:BB", 0],
            minlevel: 11,
            description: desc([
                "Practiced Perfection: I gain Expertise in three of my skill proficiencies.",
                "Spirit's Touch: As an action, I can expend 2 BP to touch an object and perceive its",
                "emotional residue for 10 min. I can ask the GM a number of questions equal to my",
                "Proficiency Bonus about the object's past, last user, properties, or magic."
            ]),
			skillstxt : ["Choose 3 proficient skills to gain expertise in"],
            action: [["action", " (Spirit's Touch)"]]
        },
        "subclassfeature15": {
            name: "Truly Majestic",
            source: ["VtM:BB", 0],
            minlevel: 15,
            description: desc([
                "Eerily Convincing: I have Advantage on Charisma (Deception and Persuasion) checks.",
                "Spells cast using my Entrancement feature impose Disadvantage on the saving throw.",
                "Majesty: I can expend 3 BP to cast Sanctuary on myself. When cast in this way, the",
                "spell doesn't end if I make an attack roll, cast a spell, or deal damage."
            ]),
            advantages: [["Deception", true], ["Persuasion", true]],
            spellcastingBonus: [{
                name: "Majesty",
                spells: ["sanctuary"],
                selection: ["sanctuary"],
                firstCol: "3"
            }],
            spellChanges: {
                "calm emotions": {
                    description: "Humanoids in 20-ft rad save at Disadv. or Charmed/Frightened suppressed, or made indifferent",
                    changes: "Because of my Truly Majestic feature, targets have Disadvantage on their saving throw against this spell."
                },
                "charm monster": {
                    description: "1 crea save at Disadv. or Charmed; Adv. if in combat",
                    changes: "Because of my Truly Majestic feature, the target has Disadvantage on its saving throw against this spell."
                },
                "charm person": {
                    description: "1 Humanoid save at Disadv. or Charmed; Adv. if in combat",
                    changes: "Because of my Truly Majestic feature, the target has Disadvantage on its saving throw against this spell."
                },
                "sanctuary": {
                    description: "Any crea that targets me with an attack or harmful spell must first make a Wis save",
                    changes: "When cast using my Majesty feature, Sanctuary doesn't end if I make an attack roll, cast a spell, or deal damage."
                }
            }
        },
        "subclassfeature18": {
            name: "Magnum Opus",
            source: ["VtM:BB", 0],
            minlevel: 18,
            description: desc([
                "I can choose two Magnum Opus benefits using the \"Choose Feature\" button."
            ]),
            extraname: "Magnum Opus",
            extrachoices: ["Flicker", "Clairvoyance", "Open Mind", "Star Magnetism"],
            extraTimes: 2,
            "flicker": {
                name: "Flicker",
                description: desc([
                    "As a Bonus Action, I can expend 3 BP to dance between the beats of a mortal's heart.",
                    "Until the start of my next turn, I have a +3 bonus to AC, my Speed is doubled,",
                    "my movement doesn't provoke Opportunity Attacks, and I have Adv. on attack rolls."
                ]),
                action: [["bonus action", " (Flicker)"]]
            },
            "clairvoyance": {
                name: "Clairvoyance",
                description: "I can expend 2 BP to cast Clairvoyance or Scrying. The sensor created can't be perceived.",
                spellcastingBonus: [{
                    name: "Clairvoyance (Magnum Opus)",
                    spells: ["clairvoyance", "scrying"],
                    selection: ["clairvoyance", "scrying"],
                    times: 2,
                    firstCol: "2"
                }],
                spellChanges: {
                    "clairvoyance": {
                        description: "Invisible and imperceivable sensor sees or hears 1 mile away; 1 a switch see/hear",
                        changes: "When cast using my Magnum Opus feature, the sensor can't be perceived."
                    },
                    "scrying": {
                        description: "Invisible and imperceivable sensor sees/hears specific crea/loc; save mod by connection",
                        changes: "When cast using my Magnum Opus feature, the sensor can't be perceived."
                    }
                }
            },
            "open mind": {
                name: "Open Mind",
                description: desc([
                    "As an action, I can expend 1 BP to telepathically link with known creatures within",
                    "5 miles or creatures I see in 120 ft. The link lasts 8 hours while we are within",
                    "5 miles of each other, sharing words, images, and sounds. Targets recognize me."
                ]),
                action: [["action", " (Open Mind)"]]
            },
            "star magnetism": {
                name: "Star Magnetism",
                description: desc([
                    "I can expend 3 BP to cast Mass Suggestion. The range becomes 1 mile, no line of",
                    "sight is needed, it targets anyone I can communicate with, and requires no Concentration."
                ]),
                spellcastingBonus: [{
                    name: "Star Magnetism",
                    spells: ["mass suggestion"],
                    selection: ["mass suggestion"],
                    firstCol: "3"
                }],
                spellChanges: {
                    "mass suggestion": {
                        description: "Up to 12 creatures I can communicate with within 1 mile follow a reasonable course of action for 24h",
                        changes: "When cast using my Magnum Opus feature, I don't need line of sight, the range is 1 mile, it affects any creature I can communicate with, and it requires no Concentration."
                    }
                }
            }
        }
    }
});
AddSubClass("kindred", "ventrue", {
    regExpSearch: /^(?=.*ventrue).*$/i,
    subname: "Ventrue",
	fullname: "Ventrue",
    source: ["VtM:BB", 0],
    features: {
        "subclassfeature3": {
            name: "Voice of Authority",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "Unshakably Confident: I have Advantage on Wisdom saving throws.",
                "Do as I Say: I can cast Command and Suggestion without expending a spell slot.",
                "I can cast either spell in this way a total number of times equal to my Prof Bonus."
            ]),
            savetxt: { text: ["Adv. on Wisdom saves"] },
            usages: "Proficiency Bonus per ",
            usagescalc: "event.value = How('Proficiency Bonus');",
            recovery: "short rest",
			spellFirstColTitle : "BP",
            spellcastingBonus: [{
                name: "Do as I Say",
                spells: ["command", "suggestion"],
                selection: ["command", "suggestion"],
                times: 2,
                firstCol: "PB"
            }]
        },
        "subclassfeature3.1": {
            name: "Ventrue Bane",
            source: ["VtM:BB", 0],
            minlevel: 3,
            description: desc([
                "I have a refined palate and must choose a specific physical or social aspect for prey.",
                "When I Feed on a creature without my preferred aspect, I roll half the number of Feed Dice."
            ])
        },
        "subclassfeature6": {
            name: "Dare Not Falter",
            source: ["VtM:BB", 0],
            minlevel: 6,
            description: desc([
                "Toughened: My HP maximum increases by 1 for each Kindred level I possess.",
                "Unswayable Mind: If I fail a save to avoid or end the Charmed, Frightened, or Stunned",
                "condition, I can reroll it, but I must use the new roll."
            ]),
            savetxt: { text: ["Reroll failed saves vs Charmed/Frightened/Stunned"] },
            calcChanges: {
                hp: function (totalHD) {
                    if (classes.known.kindred) {
                        return [classes.known.kindred.level, "Toughened (Kindred)"];
                    }
                }
            }
        },
        "subclassfeature9": {
            name: "Domineering Control",
            source: ["VtM:BB", 0],
            minlevel: 9,
            description: desc([
                "Befuddle (1 BP): Cast Hypnotic Pattern. Int 4+ has Disadv. on the save; Int \u2264 3 auto-succeeds.",
                "Persuade (1 BP): Cast Charm Monster.",
                "Entrance (2 BP): As an action, make a Persuasion check vs a creature I see in 30 ft.",
                "Target makes Wis save (DC = check) or is Stunned until end of my next turn (repeats save EoT).",
                "Terrify (1 BP): As an action, make an Intimidation check vs a creature I see in 30 ft.",
                "Target makes Wis save (DC = check) or is Frightened for 1 min (repeats save EoT).",
                "For Entrance and Terrify, creatures with Int \u2264 3 automatically succeed."
            ]),
            action: [["action", " (Entrance)"], ["action", " (Terrify)"]],
            spellcastingBonus: [{
                name: "Befuddle/Persuade",
                spells: ["hypnotic pattern", "charm monster"],
                selection: ["hypnotic pattern", "charm monster"],
                times: 2,
                firstCol: "1"
            }],
            spellChanges: {
                "hypnotic pattern": {
                    description: "30-ft cube all sighted crea save or Charmed, Incapacitated, and speed 0; Int \u2265 4 Disadv, Int \u2264 3 auto-succeed",
                    changes: "When cast using my Domineering Control feature, creatures with an Intelligence of 4 or higher have Disadvantage on the saving throw, and creatures with an Intelligence of 3 or lower automatically succeed."
                }
            }
        },
        "subclassfeature11": {
            name: "Mass Manipulation",
            source: ["VtM:BB", 0],
            minlevel: 11,
            description: desc([
                "I can expend Blood Points to cast Mass Suggestion at varying levels:",
                "Level 11 (3 BP): 6th-level | Level 15 (4 BP): 7th-level",
                "Level 18 (5 BP): 8th-level | Level 20 (6 BP): 9th-level"
            ]),
            spellcastingBonus: [{
                name: "Mass Manipulation",
                spells: ["mass suggestion"],
                selection: ["mass suggestion"],
                firstCol: "3+"
            }]
        },
        "subclassfeature15": {
            name: "Sanguine Fortification",
            source: ["VtM:BB", 0],
            minlevel: 15,
            description: desc([
                "Draught of Endurance: As a Reaction when a creature in 60 ft drinks my vitae, I can",
                "expend 2 BP to grant them Temporary HP equal to twice my Kindred level.",
                "Flesh of Marble: As a Reaction when taking damage (except Fire/Radiant), expend 2 BP to",
                "halve the damage (round down), or 4 BP to reduce the damage to 0."
            ]),
            action: [["reaction", " (Draught of Endurance)"], ["reaction", " (Flesh of Marble)"]]
        },
        "subclassfeature18": {
            name: "Lordly Power",
            source: ["VtM:BB", 0],
            minlevel: 18,
            description: desc([
                "Penetrating Dominance: Creatures I see in 60 ft have Disadv. on saves vs Charmed.",
                "Imposing Aura: When a creature in 15 ft targets me with an attack/damaging spell, it makes a",
                "Wis save (DC 8 + Str mod + PB) or must choose a new target or lose the attack/spell. A",
                "successful save makes it immune to this aura for 24 hours.",
                "Summon: As an action, expend 3 BP to urge a Beast/Humanoid/Undead I've touched to come",
                "to me. Wis save (DC 8 + Cha mod + PB); fail = safely moves toward me (repeats save at dusk)."
            ]),
            action: [["action", " (Summon)"]]
        }
    }
});
//Backgrounds
BackgroundList.ghoul = {
    regExpSearch: /ghoul/i,
    name: "Ghoul",
    source: ["VtM:BB", 0],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Dexterity, and Charisma",
    skills: ["Perception", "Survival"],
    toolProfs: [["Artisan's tools", 1]],
    gold: 10,
    equipleft: [
        ["Artisan's tools (same as proficiency)", "", 5],
        ["Kindred Vitae", "", 1],
        ["Hooded lantern", "", 2],
        ["Shortbow", "", 2],
        ["Quiver, with:", "", 1],
        ["- Arrows", 20, 0.05]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Belt pouch (with coins)", "", 1],
        ["Dagger", "", 1]
    ],
    equip1stPage: {
        weapons: ["Dagger", "Shortbow"],
        ammo: [["Arrows", 20]]
    },
    feature: "Ghoul"
};
BackgroundFeatureList.ghoul = {
    description: "I am a Ghoul, sustained by the vitae of a Kindred master. This dark blessing grants me supernatural vitality and binds me to the creatures of the night.",
    source: ["VtM:BB", 0],
    featsAdd: ["Nocturnal"]
};
BackgroundList.ritualist = {
    regExpSearch: /ritualist/i,
    name: "Ritualist",
    source: ["VtM:BB", 0],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Intelligence, Wisdom, and Charisma",
    skills: ["Arcana", "History"],
    toolProfs: ["Alchemist's supplies"],
    gold: 9,
    equipleft: [
        ["Alchemist's supplies", "", 8],
        ["Book (rituals)", "", 5],
        ["Ink, 1 ounce bottle of", "", 0]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Belt pouch (with coins)", "", 1],
        ["Dagger", "", 1]
    ],
    equip1stPage: {
        weapons: ["Dagger"]
    },
    feature: "Ritualist"
};
BackgroundFeatureList.ritualist = {
    description: "I am a Ritualist, steeped in the occult and the esoteric. I practice blood magic and delve into arcane secrets best left forgotten.",
    source: ["VtM:BB", 0],
    featsAdd: [{ key: "magic initiate", choice: "wizard" }]
};
BackgroundList["scholar of the hunt"] = {
    regExpSearch: /^(?=.*scholar)(?=.*hunt).*$/i,
    name: "Scholar of the Hunt",
    source: ["VtM:BB", 0],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Intelligence, and Wisdom",
    skills: ["Arcana", "Investigation"],
    toolProfs: [["Gaming set", 1]],
    gold: 15,
    equipleft: [
        ["Gaming set (same as proficiency)", "", 0],
        ["Manacles", "", 6],
        ["Mirror", "", 0.5]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Scholar of the Hunt"
};
BackgroundFeatureList["scholar of the hunt"] = {
    description: "I am a Scholar of the Hunt, dedicating my life and research to understanding the undead and monstrous in order to hunt them—or aid them.",
    source: ["VtM:BB", 0],
    featsAdd: ["Well-Read"]
};
BackgroundList.thrall = {
    regExpSearch: /thrall/i,
    name: "Thrall",
    source: ["VtM:BB", 0],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Wisdom, and Charisma",
    skills: ["Athletics", "Medicine"],
    toolProfs: [["Gaming set or musical instrument", 1]],
    gold: 32,
    equipleft: [
        ["Gaming set or instrument", "", 0],
        ["Healer's kit", "", 3],
        ["Bullseye lantern", "", 2]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Thrall"
};
BackgroundFeatureList.thrall = {
    description: "I am a Thrall, bound to the dominating will of a vampire. I serve them faithfully from the shadows and use what I've learned to survive.",
    source: ["VtM:BB", 0],
    featsAdd: ["Healthy"]
};
BackgroundList.touchstone = {
    regExpSearch: /touchstone/i,
    name: "Touchstone",
    source: ["VtM:BB", 0],
    scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Intelligence, and Charisma",
    skills: ["Persuasion", "Survival"],
    toolProfs: [["Artisan's tools", 1]],
    gold: 16,
    equipleft: [
        ["Artisan's tools (same as proficiency)", "", 5]
    ],
    equipright: [
        ["Traveler's clothes", "", 4],
        ["Belt pouch (with coins)", "", 1]
    ],
    feature: "Touchstone"
};
BackgroundFeatureList.touchstone = {
    description: "I am a Touchstone, a mortal tether to humanity for a Kindred. By remaining close, I ground them in the mortal world and keep the Beast at bay.",
    source: ["VtM:BB", 0],
    featsAdd: ["Protected"]
};
//Origin feats
FeatsList.healthy = {
    name: "Healthy",
    source: ["VtM:BB", 0],
    type: "origin",
    description: "The first time I would spend a Hit Point Die after a Short or Long Rest, I gain the benefit of spending it but do not expend the die. I also gain proficiency in one saving throw of my choice.",
    descriptionFull: "You have, for whatever reason, maintained a physically healthy lifestyle. You gain the following benefits.\n\nHit Die Use: The first time you would spend a Hit Point Die after completing a Short or Long Rest, you gain the benefit of spending the Hit Die but do not spend it.\n\nSaving Throw Proficiency: Choose one ability in which you lack saving throw proficiency. You gain saving throw proficiency with the chosen ability.",
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    "strength": {
        description: "The first time I would spend a Hit Die after a Short/Long Rest, I gain the benefit but do not expend the die. I gain proficiency in Strength saving throws.",
        saves: ["Str"]
    },
    "dexterity": {
        description: "The first time I would spend a Hit Die after a Short/Long Rest, I gain the benefit but do not expend the die. I gain proficiency in Dexterity saving throws.",
        saves: ["Dex"]
    },
    "constitution": {
        description: "The first time I would spend a Hit Die after a Short/Long Rest, I gain the benefit but do not expend the die. I gain proficiency in Constitution saving throws.",
        saves: ["Con"]
    },
    "intelligence": {
        description: "The first time I would spend a Hit Die after a Short/Long Rest, I gain the benefit but do not expend the die. I gain proficiency in Intelligence saving throws.",
        saves: ["Int"]
    },
    "wisdom": {
        description: "The first time I would spend a Hit Die after a Short/Long Rest, I gain the benefit but do not expend the die. I gain proficiency in Wisdom saving throws.",
        saves: ["Wis"]
    },
    "charisma": {
        description: "The first time I would spend a Hit Die after a Short/Long Rest, I gain the benefit but do not expend the die. I gain proficiency in Charisma saving throws.",
        saves: ["Cha"]
    }
};
FeatsList.nocturnal = {
    name: "Nocturnal",
    source: ["VtM:BB", 0],
    type: "origin",
    description: "I have Darkvision 60 ft (or +30 ft if I already have it). When I make a Dex (Stealth) check in Dim Light or Darkness, I can treat a roll of 9 or lower on the d20 as a 10.",
    descriptionFull: "You have spent many formative years in the darkness of night. You gain the following benefits.\n\nDarkvision: You have Darkvision with a range of 60 feet. If you already have Darkvision, its range increases by 30 feet.\n\nSlink in Shadows: Whenever you make a Dexterity (Stealth) check while in Dim Light or Darkness, you can treat a roll of 9 or lower on the d20 as a 10.",
    vision: [["Darkvision", "+30"], ["Darkvision", "fixed 60"]],
};
FeatsList.protected = {
    name: "Protected",
    source: ["VtM:BB", 0],
    type: "origin",
    description: "I have Luck Points equal to my Prof Bonus. I can spend 1 LP to reroll a D20 Test of 9 or lower (must use new roll), or spend 1 LP when reduced to 0 HP (and not killed outright) to drop to 1 HP instead.",
    descriptionFull: "You have someone or something guarding you for as long as you can remember, even if you don't know why. You gain the following benefits.\n\nLuck Points: You have a number of Luck Points equal to your Proficiency Bonus. You regain expended points on a Long Rest.\n\nReroll: Whenever you make a D20 Test and roll 9 or lower, you can spend 1 LP to reroll. You must accept the second result.\n\nStabilize: When reduced to 0 HP and not killed outright, you can spend 1 LP to drop to 1 HP instead.",
    usages: "Proficiency Bonus per ",
    usagescalc: "event.value = How('Proficiency Bonus');",
    recovery: "long rest",
    action: [["reaction", "Luck Point (Reroll / Stabilize)"]]
};
FeatsList["thin-blooded"] = {
    name: "Thin-Blooded",
    source: ["VtM:BB", 0],
    type: "origin",
    description: "I have Blood Points (PB-1). As an action, I can Feed (2d6 Feed Dice) on a willing/charmed/incapacitated target in 5 ft. Charisma is my spellcasting ability for Kindred feats (no V/S/M components). I ignore Kindred class prereqs for feats, but can't take Kindred levels.",
    descriptionFull: "You have a portion of a vampire's blood flowing in your veins. You gain the following benefits.\n\nAble to Feed: You feed on the blood of other creatures... (See Kindred Class for Feed rules). You have 2d6 Feed Dice.\n\nKindred, but Not Kindred: You ignore the Kindred class prerequisite for choosing Kindred feats. You can't gain levels in the Kindred class.\n\nKindred Vitae: You have a number of Blood Points equal to your Proficiency Bonus minus one.\n\nSupernatural Spellcasting: Charisma is your spellcasting ability for Kindred feats. Spells require no V/S components, no M components unless consumed/cost, and damage can't break your Concentration for them.",
    usages: "Proficiency Bonus - 1 per ",
    usagescalc: "event.value = Math.max(1, How('Proficiency Bonus') - 1);",
    recovery: "long rest",
    action: [["action", " (Feed)"]]
};
FeatsList["well-read"] = {
    name: "Well-Read",
    source: ["VtM:BB", 0],
    type: "origin",
    description: "When rolling Initiative, I can learn one Immunity, Resistance, Vulnerability, or Trait of a creature I see in 30 ft. When I roll a 1 on an Int (Arcana/History) check, I can reroll it (must use new roll). Successes on these checks grant additional rare lore.",
    descriptionFull: "You grew up with your nose buried in books. You gain the following benefits.\n\nCreature Lore: When you roll Initiative, you can recall lore about a creature you can see within 30 feet of yourself; you know one Immunity, Resistance, Vulnerability, or Trait of that creature.\n\nFont of Useful Knowledge: When you roll a 1 on an Intelligence (Arcana or History) check, you can reroll the die, and you must use the new roll.\n\nRare Knowledge: If you succeed on an Intelligence (Arcana or History) check, you learn additional lore. The GM has final say on what you learn."
};
// Kindred Feats
FeatsList.alacrity = {
    name: "Alacrity",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 2+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 2) ||
            (v.characterLevel >= 2 && classes.known.feats && classes.known.feats.indexOf("thin-blooded") !== -1);
    },
    description: "My Speed increases by 10 ft, and I have Advantage on Initiative rolls. As a Bonus Action, I can expend 1 Blood Point to gain an additional action this turn, which can only be used to take the Attack (one attack only) or Disengage action.",
    descriptionFull: [
        "You move at supernatural speeds. You gain the following benefits.",
        "Burst of Speed. As a Bonus Action, you can expend 1 Blood Point to gain an additional action. That action can be used to take only the Attack (one attack only) or Disengage action.",
        "Fast. Your Speed increases by 10 feet, and you have Advantage on Initiative rolls."
    ],
    speed: { allModes: "+10" },
    advantages: [["Initiative", true]],
    action: [["bonus action", "Burst of Speed (1 BP)"]]
};
FeatsList["cloak of shadows"] = {
    name: "Cloak of Shadows",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 2+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 2) ||
            (v.characterLevel >= 2 && classes.known.feats && classes.known.feats.indexOf("thin-blooded") !== -1);
    },
    description: "As a Bonus Action, I gain Advantage on my next Dex (Stealth) check this turn. As an action, I can gain the Invisible condition until the end of my next turn. I can use Unseen Passage a number of times equal to my Proficiency Bonus per Long Rest.",
    descriptionFull: [
        "You are adept at supernaturally masking your presence. You gain the following benefits.",
        "Enshrouded. As a Bonus Action, you give yourself Advantage on your next Dexterity (Stealth) check on the current turn.",
        "Unseen Passage. As a Magic action, you gain the Invisible condition until the end of your next turn. You can use this Magic action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
    ],
    action: [
        ["bonus action", "Enshrouded (Adv. on Stealth)"],
        ["action", "Unseen Passage (Invisible)"]
    ],
    usages: "Proficiency Bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest",
    limfeaname: "Unseen Passage"
};
FeatsList["convincing thoughts"] = {
    name: "Convincing Thoughts",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 7+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 7) ||
            (v.characterLevel >= 7 && classes.known.feats && classes.known.feats.indexOf("thin-blooded") !== -1);
    },
    description: "I can cast Charm Person without a spell slot a number of times equal to my Proficiency Bonus per Long Rest. When spells or effects that cause the Charmed condition end, the target doesn't know it was Charmed by me. [+1 Charisma]",
    descriptionFull: [
        "Your supernatural powers of persuasion are uncannily hidden from your victim's mind. You gain the following benefits.",
        "Ability Score Increase. Increase your Charisma score by 1, to a maximum of 20.",
        "Charming Smile. You can cast the Charm Person spell without expending a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
        "Rationalize. When spells or effects that cause the Charmed condition end, the target doesn't know it was Charmed by you."
    ],
    scores: [0, 0, 0, 0, 0, 1],
    spellcastingAbility: 6,
    spellcastingBonus: [{
        name: "Charming Smile",
        spells: ["charm person"],
        selection: ["charm person"],
        firstCol: "PB/lr"
    }],
    usages: "Proficiency Bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest",
    limfeaname: "Charming Smile (Charm Person)"
};
FeatsList.daywalker = {
    name: "Daywalker",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Kindred",
    prereqeval: function (v) {
        return !!classes.known.kindred ||
            (classes.known.feats && classes.known.feats.indexOf("thin-blooded") !== -1);
    },
    description: "I reduce damage taken from sunlight by 2. As a Bonus Action, I can expend 1 Blood Point to remove my Vulnerability to Radiant damage for 1 minute. When I start a Long Rest, I can make a DC 12 Con save to count as having at least 1 Blood Point for that rest.",
    descriptionFull: [
        "The sun's light doesn't harm you as badly as it does other Kindred. You gain the following benefits.",
        "Dhampir's Boon. When you take damage from sunlight, reduce the damage taken by 2.",
        "Endure Radiance. As a Bonus Action, you can expend 1 Blood Point to remove your Vulnerability to Radiant damage for 1 minute.",
        "Wake with Evening's Freshness. When you start a Long Rest, you can make a DC 12 Constitution saving throw. If you succeed, you count as having at least 1 Blood Point for that Long Rest."
    ],
    action: [["bonus action", "Endure Radiance (1 BP)"]]
};
FeatsList["feral whispers"] = {
    name: "Feral Whispers",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 2+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 2) ||
            (v.characterLevel >= 2 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "As an action, I can expend 1 BP to summon Large or smaller Beasts equal to my Cha mod (min 1; total CR \u2264 PB). They arrive in 1d4+1 rounds, are Charmed for 1 min, act right after me, and obey verbal commands. I can also cast Speak with Animals as a Ritual only.",
    descriptionFull: [
        "You have an animalistic connection to the creatures of the wilderness. You gain the following benefits.",
        "Call of the Wild. As a Magic action, you can expend 1 Blood Point to summon a number of Large or smaller Beasts (such as a Rat or Wolf) equal to your Charisma modifier (minimum of 1). The total Challenge Rating for summoned Beasts can't exceed your Proficiency Bonus. A summoned Beast arrives at your location in 1d4 + 1 rounds and is Charmed by you for 1 minute after it arrives. In combat, a Beast shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        "Shared Spirit. You can cast the Speak with Animals spell, but only as a Ritual."
    ],
    action: [["action", "Call of the Wild (1 BP)"]],
    spellcastingAbility: 6,
    spellcastingBonus: [{
        name: "Shared Spirit",
        spells: ["speak with animals"],
        selection: ["speak with animals"],
        firstCol: "(R)"
    }]
};
FeatsList["forceful presence"] = {
    name: "Forceful Presence",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 2+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 2) ||
            (v.characterLevel >= 2 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "Awe (Bonus Action, PB/LR): Gain Adv. on Cha (Intimidation, Performance, Persuasion) checks for 10 min. Daunt (Bonus Action, PB/LR): Make an Intimidation check vs a creature I see in 30 ft; it makes a Wis save (DC = check) or is Frightened for 1 min (repeats EoT; Int \u2264 3 auto-succeeds).",
    descriptionFull: [
        "You can focus your vampiric presence to instill emotions in others. You gain the following benefits.",
        "Awe. As a Bonus Action, you give yourself Advantage on Charisma (Intimidation, Performance, and Persuasion) checks for 10 minutes. You can use this benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.",
        "Daunt. As a Bonus Action, make a Charisma (Intimidation) check and choose a creature you can see within 30 feet of you. The target must make a Wisdom saving throw with a DC equal to the result of your Intimidation check. On a failed save, the creature has the Frightened condition for 1 minute. At the end of each of the Frightened creature's turns, the creature repeats the save, ending the effect on itself on a success. A creature with an Intelligence of 3 or lower automatically succeeds on its saving throw against this effect. You can use this benefit a number of times equal to your Proficiency Bonus and regain all expended uses when you finish a Long Rest."
    ],
    action: [
        ["bonus action", "Awe (Adv. Cha checks)"],
        ["bonus action", "Daunt (Frighten)"]
    ],
    extraLimitedFeatures: [{
        name: "Awe (Forceful Presence)",
        usages: "Proficiency Bonus per ",
        usagescalc: "event.value = Number(How('Proficiency Bonus'));",
        recovery: "long rest"
    }, {
        name: "Daunt (Forceful Presence)",
        usages: "Proficiency Bonus per ",
        usagescalc: "event.value = Number(How('Proficiency Bonus'));",
        recovery: "long rest"
    }]
};
FeatsList["hardened skin"] = {
    name: "Hardened Skin",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 7+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 7) ||
            (v.characterLevel >= 7 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "I gain Resistance to either Bludgeoning or Slashing damage (my choice). [+1 Constitution]",
    descriptionFull: [
        "Your skin is dense and difficult to damage. You gain the following benefits.",
        "Ability Score Increase. Increase your Constitution score by 1, to a maximum of 20.",
        "Damage Resistance. Select Bludgeoning or Slashing damage. You have Resistance to the chosen damage."
    ],
    scores: [0, 0, 1, 0, 0, 0],
    choices: ["Bludgeoning", "Slashing"],
    choicesNotInMenu: true,
    "bludgeoning": {
        name: "Hardened Skin [Bludgeoning]",
        description: "I have Resistance to Bludgeoning damage. [+1 Constitution]",
        dmgres: ["Bludgeoning"]
    },
    "slashing": {
        name: "Hardened Skin [Slashing]",
        description: "I have Resistance to Slashing damage. [+1 Constitution]",
        dmgres: ["Slashing"]
    }
};
FeatsList["heightened senses"] = {
    name: "Heightened Senses",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 2+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 2) ||
            (v.characterLevel >= 2 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "I have Advantage on Wisdom (Insight and Perception) checks and Blindsight with a range of 30 ft. I can cast See Invisibility without a spell slot a number of times equal to my Proficiency Bonus per Long Rest.",
    descriptionFull: [
        "Your vampiric senses are stronger and more precise than ever before. You gain the following benefits.",
        "Preternatural Perception. You have Advantage on Wisdom (Insight and Perception) checks.",
        "Sense the Unseen. You have Blindsight with a range of 30 feet. In addition, you can cast the See Invisibility spell without expending a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
    ],
    advantages: [["Insight", true], ["Perception", true]],
    vision: [["Blindsight", 30]],
    spellcastingAbility: 6,
    spellcastingBonus: [{
        name: "Sense the Unseen",
        spells: ["see invisibility"],
        selection: ["see invisibility"],
        firstCol: "PB/lr"
    }],
    usages: "Proficiency Bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest",
    limfeaname: "Sense the Unseen (See Invisibility)"
};
FeatsList["lethal body"] = {
    name: "Lethal Body",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 4+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 4) ||
            (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "I can deal 1d8 extra damage (same type) when I hit a target with an Unarmed Strike. Creatures have Disadvantage on ability checks and saving throws to escape my grapple.",
    descriptionFull: [
        "You possess potent vampiric strength, turning your bare hands into deadly weapons.",
        "Crushing Blows. You can deal 1d8 extra damage when you hit a target with an Unarmed Strike. The extra damage is the same type dealt by that strike.",
        "Iron Grip. A creature has Disadvantage on ability checks and saving throws to escape your grapple."
    ],
    calcChanges: {
        atkAdd: [
            function (fields, v) {
                if (v.baseWeaponName === "unarmed strike") {
                    fields.Description += (fields.Description ? "; " : "") + "+1d8 extra dmg (same type)";
                }
            },
            "I can deal 1d8 extra damage of the same type when I hit a target with an Unarmed Strike."
        ]
    }
};
FeatsList["loyal servant"] = {
    name: "Loyal Servant",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 7+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 7) ||
            (v.characterLevel >= 7 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "A Beast or Humanoid (CR \u2264 half my Proficiency Bonus) is Blood Bound to me. It gains one Kindred feat (counting as a level 2 Kindred) and can spend 1 Hit Die in place of 1 Blood Point for it. If it dies or leaves, I can choose a new one after 30 days. [See Notes page for Blood Bond]",
    descriptionFull: [
        "You have a loyal companion who has gained power from your blood. You gain the following benefits.",
        "Companion. A loyal Beast or Humanoid is Blood Bound to you. Choose a Beast or Humanoid stat block that has a maximum Challenge Rating of up to half your Proficiency Bonus. When choosing a companion, you may look in the monster section of source books or elsewhere for an eligible Beast or Humanoid if the Game Master permits you to do so.",
        "Power in the Blood. Your Loyal Servant has one Kindred feat of your choice, and it counts as a level 2 Kindred for the purpose of selecting a Kindred feat. In addition, your Loyal Servant can spend 1 Hit Point Die in place of 1 Blood Point for the purpose of its feat.",
        "Replacing a Servant. If your servant is killed or otherwise leaves, you can choose a new Loyal Servant after 30 days. The GM can lengthen or shorten this time based on in-game circumstances."
    ],
    toNotesPage: [{
        name: "The Blood Bond (Loyal Servant)",
        note: [
            "While Blood Bound to a Kindred, a creature is considered Charmed by that Kindred and has Advantage on saving throws to avoid being Charmed or Frightened by other creatures. This is in addition to the effects from the Kindred Vitae consumable.",
            "A Blood Bond can be suppressed for 1 minute if the creature succeeds on a DC 25 Charisma saving throw. The bond is only permanently removed if the creature doesn't drink from that Kindred again for a year, or if the Kindred in question is killed."
        ]
    }]
};
FeatsList["mind tricks"] = {
    name: "Mind Tricks",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 2+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 2) ||
            (v.characterLevel >= 2 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "I can cast Command without a spell slot a number of times equal to my Proficiency Bonus per Long Rest. I also gain access to a special command—Forget: the target has only a hazy and unsure recollection of the last 5 minutes.",
    descriptionFull: [
        "You can dominate others with your mental powers. You gain the following benefits.",
        "Cloud Memory. You can cast the Command spell without expending a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. In addition, you gain access to a special command.",
        "Forget. The target has only a hazy and unsure recollection of the last 5 minutes."
    ],
    spellcastingAbility: 6,
    spellcastingBonus: [{
        name: "Cloud Memory",
        spells: ["command"],
        selection: ["command"],
        firstCol: "PB/lr"
    }],
    spellChanges: {
        "command": {
            description: "1+1/SL crea save or follow 1-word command (incl. Forget: hazy memory of last 5 min)",
            changes: "With Mind Tricks, I gain the Forget command: the target has only a hazy and unsure recollection of the last 5 minutes."
        }
    },
    usages: "Proficiency Bonus per ",
    usagescalc: "event.value = Number(How('Proficiency Bonus'));",
    recovery: "long rest",
    limfeaname: "Cloud Memory (Command)"
};
FeatsList["self-control"] = {
    name: "Self-Control",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 2+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 2) ||
            (v.characterLevel >= 2 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "When I would be affected by the Hunger of my Beast feature, I can take a Reaction to immediately end the effect. I can do this a number of times equal to my Wisdom modifier (min 1) per Long Rest. [+1 Wisdom]",
    descriptionFull: [
        "You manage your Beast better than many. You gain the following benefits.",
        "Ability Score Increase. Increase your Wisdom score by 1, to a maximum of 20.",
        "Reining the Beast. When you would be affected by the Hunger of your Beast feature, you can take a Reaction to immediately end the effect. You can use this benefit a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a Long Rest."
    ],
    scores: [0, 0, 0, 0, 1, 0],
    action: [["reaction", "Reining the Beast (End Hunger)"]],
    usages: "Wisdom modifier per ",
    usagescalc: "event.value = Math.max(1, Number(What('Wis Mod')));",
    recovery: "long rest",
    limfeaname: "Reining the Beast"
};
FeatsList["the kiss"] = {
    name: "The Kiss",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Kindred",
    prereqeval: function (v) {
        return !!classes.known.kindred ||
            (CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "When I feed, I can choose to roll d4s instead of d6s for my Feed Dice. When I do so, I regain 1 Blood Point on a roll of a 4 on the d4, and the creature is Charmed by me until the end of my next turn.",
    descriptionFull: [
        "Your bite is intoxicating to your prey.",
        "Pleasurable Feeding. When you feed, you can choose to roll d4s instead of d6s for your Feed Dice. When you do so, you regain 1 Blood Point on a roll of a 4 on the d4, and the creature is Charmed by you. The Charmed condition lasts until the end of your next turn."
    ]
};
FeatsList["touch of darkness"] = {
    name: "Touch of Darkness",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 2+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 2) ||
            (v.characterLevel >= 2 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "I can see normally in Dim Light and Darkness (both magical and nonmagical) within 120 ft of myself, and I have Advantage on Dexterity (Stealth) checks.",
    descriptionFull: [
        "There is darkness within you, and it has given you a gift. You gain the following benefits.",
        "Eyes of Night. You can see normally in Dim Light and Darkness—both magical and nonmagical—within 120 feet of yourself.",
        "Shadowplay. You have Advantage on Dexterity (Stealth) checks."
    ],
    vision: [["Darkvision (magical/nonmagical)", 120]],
    advantages: [["Stealth", true]]
};
FeatsList["vitae concentration"] = {
    name: "Vitae Concentration",
    source: ["VtM:BB", 0],
    type: "kindred",
    prerequisite: "Level 4+ Kindred",
    prereqeval: function (v) {
        return (classes.known.kindred && classes.known.kindred.level >= 4) ||
            (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
    },
    description: "My Blood Point maximum increases by my Constitution modifier (minimum of 1). [+1 Constitution]",
    descriptionFull: [
        "Your body is more efficient at holding and processing vitae. You gain the following benefits.",
        "Ability Score Increase. Increase your Constitution score by 1, to a maximum of 20.",
        "Increase Blood Pool. Your Blood Point maximum increases by your Constitution modifier (minimum of 1)."
    ],
    scores: [0, 0, 1, 0, 0, 0],
    extraLimitedFeatures: [{
        name: "Blood Potency",
        usages: "Constitution modifier",
        usagescalc: "event.value = Math.max(1, Number(What('Con Mod')));",
        addToExisting: true
    }]
};
// Discipline Acquisition feats
FeatsList["discipline acquisition (animalism)"] = {
    name: "Discipline Acquisition (Animalism)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    spellcastingAbility: 6,
    description: "Select a tier of Discipline Acquisition (Animalism): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Animalism) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "I gain proficiency in the Animal Handling and Nature skills. If I already have proficiency in either skill, I gain Expertise in it instead.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "You gain proficiency in the Animal Handling and Nature skills. If you already have proficiency in that skill, you gain Expertise in it."
        ],
        skills: [["Animal Handling", "increment"], ["Nature", "increment"]]
    },
    "greater": {
        name: "Greater Discipline Acquisition (Animalism)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Animalism)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (animalism)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "I can cast Speak with Animals and Animal Messenger as Rituals only. I can cast Animal Friendship without a spell slot a number of times equal to my Proficiency Bonus per Long Rest.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "You can cast the Speak with Animals and Animal Messenger spells but only as Rituals. You can cast the Animal Friendship spell without expending a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
        ],
        spellcastingBonus: [{
            name: "Animalism (Rituals)",
            spells: ["speak with animals", "animal messenger"],
            selection: ["speak with animals", "animal messenger"],
            times: 2,
            firstCol: "(R)"
        }, {
            name: "Animalism (Animal Friendship)",
            spells: ["animal friendship"],
            selection: ["animal friendship"],
            firstCol: "PB/lr"
        }],
        usages: "Proficiency Bonus per ",
        usagescalc: "event.value = Number(How('Proficiency Bonus'));",
        recovery: "long rest",
        limfeaname: "Animal Friendship (Animalism)"
    },
    "superior": {
        name: "Superior Discipline Acquisition (Animalism)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Animalism)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (animalism)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "I can expend 1 Blood Point to cast Charm Monster or Dominate Beast. When cast in this way, the target has Disadvantage on its saving throw against the spell.",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "You can expend 1 Blood Point to cast the Charm Monster or Dominate Beast spell. When you cast the spell in this way, the target has Disadvantage on the saving throw against the spell."
        ],
        spellcastingBonus: [{
            name: "Superior Animalism",
            spells: ["charm monster", "dominate beast"],
            selection: ["charm monster", "dominate beast"],
            times: 2,
            firstCol: "1 BP"
        }],
        spellChanges: {
            "charm monster": {
                description: "1 crea save (at Disadv.) or Charmed; Adv. if in combat",
                changes: "When cast using Superior Discipline Acquisition (Animalism), the target has Disadvantage on the saving throw."
            },
            "dominate beast": {
                description: "1 Beast save (at Disadv.) or Charmed and telepathically commanded",
                changes: "When cast using Superior Discipline Acquisition (Animalism), the target has Disadvantage on the saving throw."
            }
        }
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Animalism)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Animalism)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (animalism)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "1/Long Rest, I can cast Dominate Beast as a 7th-level spell without expending a spell slot, and I can modify it so that it doesn't require Concentration.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "You cast the Dominate Beast spell as its level 7 version without expending a spell slot, and you can modify it so that it doesn't require Concentration. Once you cast the spell with this feat, you can't do so in this way again until you finish a Long Rest."
        ],
        spellcastingBonus: [{
            name: "Supreme Animalism",
            spells: ["dominate beast"],
            selection: ["dominate beast"],
            firstCol: "oncelr"
        }],
        spellChanges: {
            "dominate beast": {
                description: "7th-lvl (1/LR): 1 Beast save or Charmed & telepathically commanded; no Concentration",
                changes: "When cast using Supreme Discipline Acquisition (Animalism), Dominate Beast is cast at 7th level without a spell slot and doesn't require Concentration."
            }
        },
        usages: 1,
        recovery: "long rest",
        limfeaname: "Dominate Beast (Supreme Animalism)"
    }
};
FeatsList["discipline acquisition (auspex)"] = {
    name: "Discipline Acquisition (Auspex)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    spellcastingAbility: 6,
    description: "Select a tier of Discipline Acquisition (Auspex): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Auspex) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "I gain proficiency in the Investigation and Perception skills. If I already have proficiency in either skill, I gain Expertise in it instead.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "You gain proficiency in the Investigation and Perception skills. If you already have proficiency in that skill, you gain Expertise in it."
        ],
        skills: [["Investigation", "increment"], ["Perception", "increment"]]
    },
    "greater": {
        name: "Greater Discipline Acquisition (Auspex)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Auspex)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (auspex)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "As a Bonus Action, I can expend 1 Blood Point to gain Advantage on Intelligence and Wisdom checks and saving throws for 1 minute.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "As a Bonus Action, you can expend 1 Blood Point to gain Advantage on Intelligence and Wisdom checks and saving throws for 1 minute."
        ],
        action: [["bonus action", "Greater Auspex (1 BP: Adv. Int/Wis)"]]
    },
    "superior": {
        name: "Superior Discipline Acquisition (Auspex)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Auspex)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (auspex)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "I can cast Detect Magic as a ritual only. I can cast Clairvoyance and Telepathy without expending a spell slot, once each per Long Rest.",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "You can cast Detect Magic but only as a ritual. You can cast Clairvoyance and Telepathy. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can't cast that spell in this way again until you finish a Long Rest."
        ],
        spellcastingBonus: [{
            name: "Superior Auspex (Ritual)",
            spells: ["detect magic"],
            selection: ["detect magic"],
            firstCol: "(R)"
        }, {
            name: "Superior Auspex (1/LR)",
            spells: ["clairvoyance", "telepathy"],
            selection: ["clairvoyance", "telepathy"],
            times: 2,
            firstCol: "oncelr"
        }]
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Auspex)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Auspex)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (auspex)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "I can expend 2 Blood Points to cast the True Seeing spell on myself.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "You can expend 2 Blood Points to cast the True Seeing spell on yourself."
        ],
        spellcastingBonus: [{
            name: "Supreme Auspex",
            spells: ["true seeing"],
            selection: ["true seeing"],
            firstCol: "2 BP"
        }],
        spellChanges: {
            "true seeing": {
                range: "Self",
                changes: "When cast using Supreme Discipline Acquisition (Auspex), True Seeing can only be cast on yourself."
            }
        }
    }
};
FeatsList["discipline acquisition (celerity)"] = {
    name: "Discipline Acquisition (Celerity)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    spellcastingAbility: 6,
    description: "Select a tier of Discipline Acquisition (Celerity): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Celerity) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "I gain an extra Reaction, which I can use with any of my existing Reactions.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "You gain an extra Reaction, which you can use with any of your existing Reactions."
        ],
        action: [["reaction", "Extra Reaction (Celerity)"]]
    },
    "greater": {
        name: "Greater Discipline Acquisition (Celerity)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Celerity)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (celerity)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "As a Bonus Action or as a Reaction when hit by an attack roll, I can expend 1 Blood Point to double my Speed and gain a +3 bonus to AC until the start of my next turn.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "As a Bonus Action or as a Reaction when you are hit by an attack roll, you can expend 1 Blood Point to double your Speed and gain a +3 bonus to AC until the start of your next turn."
        ],
        action: [
            ["bonus action", "Greater Celerity (1 BP: 2x Spd, +3 AC)"],
            ["reaction", "Greater Celerity (1 BP: 2x Spd, +3 AC)"]
        ]
    },
    "superior": {
        name: "Superior Discipline Acquisition (Celerity)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Celerity)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (celerity)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "As a Bonus Action, I can expend 1 Blood Point to gain an additional action this turn. That action can be used only to take the Attack (one attack only), Dash, Disengage, Dodge, Hide, or Utilize action.",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "As a Bonus Action, you can expend 1 Blood Point to gain an additional action. That action can be used to take only the Attack (one attack only), Dash, Disengage, Dodge, Hide, or Utilize action."
        ],
        action: [["bonus action", "Superior Celerity (1 BP: Extra Action)"]]
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Celerity)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Celerity)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (celerity)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "I can expend 2 Blood Points to cast the Haste spell on myself. When the spell ends, I am not Incapacitated and my Speed isn't reduced to 0.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "You can expend 2 Blood Points to cast the Haste spell on yourself. When you cast the spell in this way, when the spell ends, you aren't Incapacitated and your Speed isn't reduced to 0."
        ],
        spellcastingBonus: [{
            name: "Supreme Celerity",
            spells: ["haste"],
            selection: ["haste"],
            firstCol: "2 BP"
        }],
        spellChanges: {
            "haste": {
                range: "Self",
                description: "Double speed, +2 AC, adv. on Dex saves, extra action (limited); no lethargy when it ends",
                changes: "When cast using Supreme Discipline Acquisition (Celerity), Haste targets only yourself and you suffer no lethargy when it ends."
            }
        }
    }
};
FeatsList["discipline acquisition (dominate)"] = {
    name: "Discipline Acquisition (Dominate)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    spellcastingAbility: 6,
    description: "Select a tier of Discipline Acquisition (Dominate): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Dominate) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "I gain proficiency in the Deception and Intimidation skills. If I already have proficiency in either skill, I gain Expertise in it instead.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "You gain proficiency in the Deception and Intimidation skills. If you already have proficiency in that skill, you gain Expertise in it."
        ],
        skills: [["Deception", "increment"], ["Intimidation", "increment"]]
    },
    "greater": {
        name: "Greater Discipline Acquisition (Dominate)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Dominate)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (dominate)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "I can cast Charm Person and Suggestion without expending a spell slot a combined number of times equal to my Proficiency Bonus per Long Rest.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "You can cast the Charm Person and Suggestion spells. You can cast either spell without expending a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest."
        ],
        spellcastingBonus: [{
            name: "Greater Dominate",
            spells: ["charm person", "suggestion"],
            selection: ["charm person", "suggestion"],
            times: 2,
            firstCol: "PB/lr"
        }],
        usages: "Proficiency Bonus per ",
        usagescalc: "event.value = Number(How('Proficiency Bonus'));",
        recovery: "long rest",
        limfeaname: "Greater Dominate (Charm Person / Suggestion)"
    },
    "superior": {
        name: "Superior Discipline Acquisition (Dominate)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Dominate)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (dominate)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "I can expend 3 Blood Points to cast Mass Suggestion. When cast in this way, creatures have Disadvantage on the saving throw against the spell.",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "You can expend 3 Blood Points to cast the Mass Suggestion spell. When you cast the spell in this way, creatures have Disadvantage on the saving throw against the spell."
        ],
        spellcastingBonus: [{
            name: "Superior Dominate",
            spells: ["mass suggestion"],
            selection: ["mass suggestion"],
            firstCol: "3 BP"
        }],
        spellChanges: {
            "mass suggestion": {
                description: "Up to 12 crea save (at Disadv.) or follow a reasonable course of action for 24h",
                changes: "When cast using Superior Discipline Acquisition (Dominate), creatures have Disadvantage on the saving throw against the spell."
            }
        }
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Dominate)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Dominate)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (dominate)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "1/Long Rest, I can cast Dominate Person as a 7th-level spell without expending a spell slot, and I can modify it so that it doesn't require Concentration.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "You cast the Dominate Person spell as its level 7 version without expending a spell slot, and you can modify it so that it doesn't require Concentration. Once you cast the spell with this feat, you can't do so in this way again until you finish a Long Rest."
        ],
        spellcastingBonus: [{
            name: "Supreme Dominate",
            spells: ["dominate person"],
            selection: ["dominate person"],
            firstCol: "oncelr"
        }],
        spellChanges: {
            "dominate person": {
                description: "7th-lvl (1/LR): 1 Humanoid save or Charmed & telepathically commanded; no Concentration",
                changes: "When cast using Supreme Discipline Acquisition (Dominate), Dominate Person is cast at 7th level without a spell slot and doesn't require Concentration."
            }
        },
        usages: 1,
        recovery: "long rest",
        limfeaname: "Dominate Person (Supreme Dominate)"
    }
};
FeatsList["discipline acquisition (fortitude)"] = {
    name: "Discipline Acquisition (Fortitude)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    description: "Select a tier of Discipline Acquisition (Fortitude): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Fortitude) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "Damage dealt to me, except Fire and Radiant, is reduced by an amount equal to my Proficiency Bonus.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "Damage dealt to you except Fire and Radiant is reduced by an amount equal to your Proficiency Bonus."
        ]
    },
    "greater": {
        name: "Greater Discipline Acquisition (Fortitude)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Fortitude)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (fortitude)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "I have Advantage on Constitution saving throws. When subjected to an effect that allows a Con save for half damage (while not Incapacitated), I take no damage on a success and half damage on a failure.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "When you're subjected to an effect that allows you to make a Constitution saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can't use this feat if you have the Incapacitated condition. In addition, you have Advantage on Constitution saving throws."
        ],
        savetxt: { text: ["Adv. on Con saves", "Con save for half: pass = 0, fail = half"] }
    },
    "superior": {
        name: "Superior Discipline Acquisition (Fortitude)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Fortitude)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (fortitude)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "When I take damage except Fire and Radiant, I can take a Reaction to reduce the damage taken by my Proficiency Bonus plus my Constitution modifier (minimum reduction of 1).",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "When you take damage except Fire and Radiant, you can take a Reaction to reduce the damage taken by your Proficiency Bonus plus your Constitution modifier (minimum reduction of 1)."
        ],
        action: [["reaction", "Superior Fortitude (Reduce dmg by PB + Con)"]]
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Fortitude)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Fortitude)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (fortitude)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "When I take damage except Fire and Radiant, I can take a Reaction and expend 2 Blood Points to halve the damage (round down) or 4 Blood Points to reduce the damage to 0.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "When you take damage except Fire and Radiant, you can take a Reaction and expend 2 Blood Points to reduce the damage you take by half (round down) or 4 Blood Points to reduce the damage to 0."
        ],
        action: [["reaction", "Supreme Fortitude (2 BP: half, 4 BP: 0)"]]
    }
};
FeatsList["discipline acquisition (obfuscate)"] = {
    name: "Discipline Acquisition (Obfuscate)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    spellcastingAbility: 6,
    description: "Select a tier of Discipline Acquisition (Obfuscate): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Obfuscate) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "I gain proficiency in the Sleight of Hand and Stealth skills. If I already have proficiency in either skill, I gain Expertise in it instead.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "You gain proficiency in the Sleight of Hand and Stealth skills. If you already have proficiency in that skill, you gain Expertise in it."
        ],
        skills: [["Sleight of Hand", "increment"], ["Stealth", "increment"]]
    },
    "greater": {
        name: "Greater Discipline Acquisition (Obfuscate)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Obfuscate)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (obfuscate)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "While entirely in Darkness, I have the Invisible condition to any creature that relies on Darkvision to see me in that Darkness.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "While entirely in Darkness, you have the Invisible condition to any creature that relies on Darkvision to see you in that Darkness."
        ]
    },
    "superior": {
        name: "Superior Discipline Acquisition (Obfuscate)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Obfuscate)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (obfuscate)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "I can cast Invisibility without a spell slot a number of times equal to my Proficiency Bonus per Long Rest. When I gain the Invisible condition, I can expend up to 3 BP to grant up to 3 other creatures I see within 30 ft the Invisible condition for 1 minute (1 BP per creature).",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "You can cast the Invisibility spell without expending a spell slot a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. In addition, when you gain the Invisible condition, you can expend up to 3 Blood Points to grant up to three other creatures that you can see within 30 feet of yourself the Invisible condition for 1 minute. The number of Blood Points expended in this way equals the number of creatures affected by this feat."
        ],
        spellcastingBonus: [{
            name: "Superior Obfuscate",
            spells: ["invisibility"],
            selection: ["invisibility"],
            firstCol: "PB/lr"
        }],
        usages: "Proficiency Bonus per ",
        usagescalc: "event.value = Number(How('Proficiency Bonus'));",
        recovery: "long rest",
        limfeaname: "Invisibility (Superior Obfuscate)"
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Obfuscate)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Obfuscate)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (obfuscate)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "I can expend 1 Blood Point to cast Greater Invisibility, and I can modify it so that it doesn't require Concentration. I also have Advantage on Dexterity (Stealth) checks.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "You can expend 1 Blood Point to cast the Greater Invisibility spell. When you cast the spell in this way, you can modify it so that it doesn't require Concentration. In addition, you have Advantage on Dexterity (Stealth) checks."
        ],
        advantages: [["Stealth", true]],
        spellcastingBonus: [{
            name: "Supreme Obfuscate",
            spells: ["greater invisibility"],
            selection: ["greater invisibility"],
            firstCol: "1 BP"
        }],
        spellChanges: {
            "greater invisibility": {
                description: "1 crea Invisible for 1 min; no Concentration",
                changes: "When cast using Supreme Discipline Acquisition (Obfuscate), Greater Invisibility does not require Concentration."
            }
        }
    }
};
FeatsList["discipline acquisition (oblivion)"] = {
    name: "Discipline Acquisition (Oblivion)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    spellcastingAbility: 6,
    description: "Select a tier of Discipline Acquisition (Oblivion): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Oblivion) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "I can see normally in Dim Light and Darkness—both magical and nonmagical—within 90 feet of myself.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "You can see normally in Dim Light and Darkness—both magical and nonmagical—within 90 feet of yourself."
        ],
        vision: [["Darkvision (magical/nonmagical)", 90]]
    },
    "greater": {
        name: "Greater Discipline Acquisition (Oblivion)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Oblivion)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (oblivion)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "I can expend 1 Blood Point to cast Darkness, and I can modify it so that it doesn't require Concentration.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "You can expend 1 Blood Point to cast the Darkness spell. When you cast the spell in this way, you can modify it so that it doesn't require Concentration."
        ],
        spellcastingBonus: [{
            name: "Greater Oblivion",
            spells: ["darkness"],
            selection: ["darkness"],
            firstCol: "1 BP"
        }],
        spellChanges: {
            "darkness": {
                description: "15-ft rad magical darkness; no Concentration",
                changes: "When cast using Greater Discipline Acquisition (Oblivion), Darkness does not require Concentration."
            }
        }
    },
    "superior": {
        name: "Superior Discipline Acquisition (Oblivion)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Oblivion)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (oblivion)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "I can expend 2 Blood Points to cast Evard's Black Tentacles. When cast in this way, it deals 1d6 Bludgeoning and 2d6 Cold damage instead of 3d6 Bludgeoning damage.",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "You can expend 2 Blood Points to cast the Black Tentacles spell. When you cast the spell in this way, the Black Tentacles deal 1d6 Bludgeoning damage and 2d6 Cold damage (instead of 3d6 Bludgeoning damage)."
        ],
        spellcastingBonus: [{
            name: "Superior Oblivion",
            spells: ["evard's black tentacles"],
            selection: ["evard's black tentacles"],
            firstCol: "2 BP"
        }],
        spellChanges: {
            "evard's black tentacles": {
                description: "All enter/start in 20-ft sq save or Restrained & 1d6 Bludg. + 2d6 Cold dmg/rnd; Str/Dex check escape",
                changes: "When cast using Superior Discipline Acquisition (Oblivion), the tentacles deal 1d6 Bludgeoning damage and 2d6 Cold damage instead of 3d6 Bludgeoning damage."
            }
        }
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Oblivion)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Oblivion)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (oblivion)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "When a creature I can see within 10 ft misses an attack roll, I can take a Reaction and expend 1 Blood Point to deal 2d8 Bludgeoning and 2d8 Cold damage to it.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "When a creature that you can see within 10 feet of you misses an attack roll, you can take a Reaction and expend 1 Blood Point to deal 2d8 Bludgeoning damage and 2d8 Cold damage to that creature."
        ],
        action: [["reaction", "Supreme Oblivion (1 BP: 2d8 Bludg + 2d8 Cold)"]]
    }
};
FeatsList["discipline acquisition (potence)"] = {
    name: "Discipline Acquisition (Potence)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    description: "Select a tier of Discipline Acquisition (Potence): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Potence) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "When I hit a creature with a Melee weapon or Unarmed Strike as part of the Attack action on my turn, I can deal extra damage equal to my Proficiency Bonus.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "When you hit a creature with a Melee weapon or Unarmed Strike as part of the Attack action on your turn, you can deal extra damage to the target equal to your Proficiency Bonus."
        ],
        calcChanges: {
            atkAdd: [
                function (fields, v) {
                    if (v.isMeleeWeapon || v.baseWeaponName === "unarmed strike") {
                        fields.Description += (fields.Description ? "; " : "") + "+PB dmg (Attack action on my turn)";
                    }
                },
                "When I hit with a Melee weapon or Unarmed Strike as part of the Attack action on my turn, I can deal extra damage equal to my Proficiency Bonus."
            ]
        }
    },
    "greater": {
        name: "Greater Discipline Acquisition (Potence)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Potence)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (potence)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "As a Bonus Action, I can expend 2 Blood Points for 1 minute to deal an extra 1d10 Force damage on Melee weapon and Unarmed Strike hits, and deal double damage to objects and structures.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "As a Bonus Action, you can expend 2 Blood Points to empower your strikes for 1 minute. When you hit a target with an attack roll using a Melee weapon or an Unarmed Strike, the target takes an extra 1d10 Force damage. In addition, you deal double damage to objects and structures."
        ],
        action: [["bonus action", "Greater Potence (2 BP: +1d10 Force, 2x vs objects)"]]
    },
    "superior": {
        name: "Superior Discipline Acquisition (Potence)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Potence)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (potence)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "As a Bonus Action, I can expend up to 6 Blood Points to increase my Strength score by an amount equal to the Blood Points expended for 1 hour.",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "As a Bonus Action, you can expend up to 6 Blood Points to increase your Strength score by an amount equal to the number of Blood Points expended in this way for 1 hour."
        ],
        action: [["bonus action", "Superior Potence (1-6 BP: +Str for 1 hr)"]]
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Potence)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Potence)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (potence)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "As a Bonus Action, I can expend 2 Blood Points to gain Advantage on Strength attack rolls for 1 minute. Whenever I have Advantage on a Strength attack roll, I can reroll one of the dice once.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "As a Bonus Action, you can expend 2 Blood Points to give yourself Advantage on attack rolls using Strength for 1 minute. In addition, whenever you have Advantage on an attack roll using Strength, you can reroll one of the dice once."
        ],
        action: [["bonus action", "Supreme Potence (2 BP: Adv. on Str attacks)"]]
    }
};
FeatsList["discipline acquisition (presence)"] = {
    name: "Discipline Acquisition (Presence)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    spellcastingAbility: 6,
    description: "Select a tier of Discipline Acquisition (Presence): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Presence) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "I gain proficiency in the Performance and Persuasion skills. If I already have proficiency in either skill, I gain Expertise in it instead.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "You gain proficiency in the Performance and Persuasion skills. If you already have proficiency in that skill, you gain Expertise in it."
        ],
        skills: [["Performance", "increment"], ["Persuasion", "increment"]]
    },
    "greater": {
        name: "Greater Discipline Acquisition (Presence)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Presence)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (presence)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "I can expend 3 Blood Points to cast Fear. When cast in this way, I can modify it so that it doesn't require Concentration, and creatures have Disadvantage on the saving throw.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "You expend 3 Blood Points to cast the Fear spell. When you cast the spell in this way, you can modify it so that it doesn't require Concentration, and creatures have Disadvantage on the saving throw against the spell."
        ],
        spellcastingBonus: [{
            name: "Greater Presence",
            spells: ["fear"],
            selection: ["fear"],
            firstCol: "3 BP"
        }],
        spellChanges: {
            "fear": {
                description: "30-ft cone all save (at Disadv.) or drop items & Frightened; Dash away; no Concentration",
                changes: "When cast using Greater Discipline Acquisition (Presence), Fear does not require Concentration and creatures have Disadvantage on the saving throw."
            }
        }
    },
    "superior": {
        name: "Superior Discipline Acquisition (Presence)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Presence)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (presence)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "I can cast the Suggestion spell without expending a spell slot.",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "You can cast the Suggestion spell without expending a spell slot."
        ],
        spellcastingBonus: [{
            name: "Superior Presence",
            spells: ["suggestion"],
            selection: ["suggestion"],
            firstCol: "atwill"
        }]
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Presence)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Presence)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (presence)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "I can expend 3 Blood Points to cast Sanctuary on myself. When cast in this way, the spell doesn't end if I make an attack roll, cast a spell, or deal damage.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "You can expend 3 Blood Points to cast the Sanctuary spell on yourself. When you cast the spell in this way, the spell doesn't end if you make an attack roll, cast a spell, or deal damage."
        ],
        spellcastingBonus: [{
            name: "Supreme Presence",
            spells: ["sanctuary"],
            selection: ["sanctuary"],
            firstCol: "3 BP"
        }],
        spellChanges: {
            "sanctuary": {
                range: "Self",
                description: "Any crea targeting me with an attack/harmful spell must make a Wis save; doesn't end on attack/spell/dmg",
                changes: "When cast using Supreme Discipline Acquisition (Presence), Sanctuary targets only yourself and doesn't end if you make an attack roll, cast a spell, or deal damage."
            }
        }
    }
};
FeatsList["discipline acquisition (protean)"] = {
    name: "Discipline Acquisition (Protean)",
    source: ["VtM:BB", 0],
    type: "kindred",
    allowDuplicates: true,
    spellcastingAbility: 6,
    description: "Select a tier of Discipline Acquisition (Protean): Base (Lvl 4+), Greater (Lvl 8+), Superior (Lvl 12+), or Supreme (Lvl 16+).",
    choices: ["Base", "Greater", "Superior", "Supreme"],
    "base": {
        name: "Discipline Acquisition (Protean) [Base]",
        prerequisite: "Level 4+ Kindred",
        prereqeval: function (v) {
            return (classes.known.kindred && classes.known.kindred.level >= 4) ||
                (v.characterLevel >= 4 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
        },
        description: "I can deal an extra 1d6 Slashing damage to a target I hit with an Unarmed Strike.",
        descriptionFull: [
            "You learn the basic concepts of a vampiric Discipline from another clan or bloodline. You gain the following benefits.",
            "You can deal an extra 1d6 Slashing damage to a target you hit with an Unarmed Strike."
        ],
        calcChanges: {
            atkAdd: [
                function (fields, v) {
                    if (v.baseWeaponName === "unarmed strike") {
                        fields.Description += (fields.Description ? "; " : "") + "+1d6 Slashing dmg";
                    }
                },
                "I can deal an extra 1d6 Slashing damage to a target I hit with an Unarmed Strike."
            ]
        }
    },
    "greater": {
        name: "Greater Discipline Acquisition (Protean)",
        prerequisite: "Level 8+ Kindred, Discipline Acquisition (Protean)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 8) ||
                (v.characterLevel >= 8 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (protean)" && CurrentFeats.choices[i] === "base") return true;
            }
            return false;
        },
        description: "As a Bonus Action, I can expend 2 Blood Points to deal an extra 2d6 Slashing damage to a target I hit with an Unarmed Strike for 1 minute.",
        descriptionFull: [
            "Your talents with the vampiric Discipline of another clan or bloodline have improved. You gain the following benefits.",
            "As a Bonus Action, you can expend 2 Blood Points to deal an extra 2d6 Slashing damage to a target you hit with an Unarmed Strike for 1 minute."
        ],
        action: [["bonus action", "Greater Protean (2 BP: +2d6 Slashing Unarmed)"]]
    },
    "superior": {
        name: "Superior Discipline Acquisition (Protean)",
        prerequisite: "Level 12+ Kindred, Greater Discipline Acquisition (Protean)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 12) ||
                (v.characterLevel >= 12 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (protean)" && CurrentFeats.choices[i] === "greater") return true;
            }
            return false;
        },
        description: "I can expend 1 Blood Point to cast Meld into Stone on myself. The surface must be dirt, sand, or clay, and the duration becomes 24 hours.",
        descriptionFull: [
            "The vampiric Discipline of another clan or bloodline is now second nature to you. You gain the following benefits.",
            "You can expend 1 Blood Point to cast the Meld into Stone spell on yourself. When you cast the spell in this way, the object or surface must be dirt, sand, or clay, and the spell's duration becomes 24 hours for that casting."
        ],
        spellcastingBonus: [{
            name: "Superior Protean",
            spells: ["meld into stone"],
            selection: ["meld into stone"],
            firstCol: "1 BP"
        }],
        spellChanges: {
            "meld into stone": {
                duration: "24 h",
                description: "I merge into dirt, sand, or clay for 24 hours; Action to leave",
                changes: "When cast using Superior Discipline Acquisition (Protean), the surface must be dirt, sand, or clay, and the duration is 24 hours."
            }
        }
    },
    "supreme": {
        name: "Supreme Discipline Acquisition (Protean)",
        prerequisite: "Level 16+ Kindred, Superior Discipline Acquisition (Protean)",
        prereqeval: function (v) {
            var lvlOk = (classes.known.kindred && classes.known.kindred.level >= 16) ||
                (v.characterLevel >= 16 && CurrentFeats.known.indexOf("thin-blooded") !== -1);
            if (!lvlOk) return false;
            for (var i = 0; i < CurrentFeats.known.length; i++) {
                if (CurrentFeats.known[i] === "discipline acquisition (protean)" && CurrentFeats.choices[i] === "superior") return true;
            }
            return false;
        },
        description: "I can expend 3 BP to cast Polymorph on myself into a Bat, Cat, Rat, Raven, or Wolf (or 4 BP for Dire Wolf, Giant Bat, Giant Rat, or Panther). I retain my Int, Wis, and Cha scores.",
        descriptionFull: [
            "You have learned all you can about a vampiric Discipline of another clan or bloodline. You gain the following benefits.",
            "You can expend 3 Blood Points to cast Polymorph on yourself, shape-shifting into a Bat, Cat, Rat, Raven, or Wolf. You can expend 1 additional Blood Point to shape-shift into a Dire Wolf, Giant Bat, Giant Rat, or Panther. While in that form, you retain your Intelligence, Wisdom, and Charisma scores."
        ],
        spellcastingBonus: [{
            name: "Supreme Protean",
            spells: ["polymorph"],
            selection: ["polymorph"],
            firstCol: "3-4 BP"
        }],
        spellChanges: {
            "polymorph": {
                range: "Self",
                description: "3 BP: Bat/Cat/Rat/Raven/Wolf; 4 BP: Dire Wolf/Giant Bat/Giant Rat/Panther; retain Int, Wis, Cha",
                changes: "When cast using Supreme Discipline Acquisition (Protean), Polymorph targets only yourself, is limited to specific Beast forms based on BP spent, and you retain your Intelligence, Wisdom, and Charisma scores."
            }
        }
    }
};
//Epic Boon feats
FeatsList["boon of generations"] = {
    name: "Boon of Generations",
    type: "epic boon",
    source: ["VtM:BB", 0],
    prerequisite: "Level 19+ Kindred",
    prereqeval: function (v) { 
        return v.characterLevel >= 19 && classes.known.kindred !== undefined; 
    },
    description: "Whenever I roll a 1 on a Feed Die, I can reroll it and must use the new roll. My Blood Point maximum increases by 5. [+1 to one ability score of my choice]",
    descriptionFull: "Epic Boon Feat (Prerequisite: Level 19+ Kindred)\n\nYou have become the embodiment of the ancient vampires of your bloodline. You gain the following benefits.\n\nAbility Score Increase. Increase one ability score of your choice by 1, to a maximum of 30.\nDeep Feeding. Whenever you roll a Feed Die for your Feed feature, you can reroll the die if it rolls a 1, and you must use the new roll.\nPotent Blood. Your Blood Point maximum increases by 5.",
    extraLimitedFeatures: [{
        name: "Blood Potency",
        usages: 5,
        addToExisting: true
    }],
    choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
    choicesNotInMenu: true,
    "strength": {
        name: "Boon of Generations [Str]",
        description: "Whenever I roll a 1 on a Feed Die, I can reroll it and must use the new roll. My Blood Point maximum increases by 5. [+1 Strength]",
        scores: [1, 0, 0, 0, 0, 0],
        scoresMaximum: [30, 0, 0, 0, 0, 0]
    },
    "dexterity": {
        name: "Boon of Generations [Dex]",
        description: "Whenever I roll a 1 on a Feed Die, I can reroll it and must use the new roll. My Blood Point maximum increases by 5. [+1 Dexterity]",
        scores: [0, 1, 0, 0, 0, 0],
        scoresMaximum: [0, 30, 0, 0, 0, 0]
    },
    "constitution": {
        name: "Boon of Generations [Con]",
        description: "Whenever I roll a 1 on a Feed Die, I can reroll it and must use the new roll. My Blood Point maximum increases by 5. [+1 Constitution]",
        scores: [0, 0, 1, 0, 0, 0],
        scoresMaximum: [0, 0, 30, 0, 0, 0]
    },
    "intelligence": {
        name: "Boon of Generations [Int]",
        description: "Whenever I roll a 1 on a Feed Die, I can reroll it and must use the new roll. My Blood Point maximum increases by 5. [+1 Intelligence]",
        scores: [0, 0, 0, 1, 0, 0],
        scoresMaximum: [0, 0, 0, 30, 0, 0]
    },
    "wisdom": {
        name: "Boon of Generations [Wis]",
        description: "Whenever I roll a 1 on a Feed Die, I can reroll it and must use the new roll. My Blood Point maximum increases by 5. [+1 Wisdom]",
        scores: [0, 0, 0, 0, 1, 0],
        scoresMaximum: [0, 0, 0, 0, 30, 0]
    },
    "charisma": {
        name: "Boon of Generations [Cha]",
        description: "Whenever I roll a 1 on a Feed Die, I can reroll it and must use the new roll. My Blood Point maximum increases by 5. [+1 Charisma]",
        scores: [0, 0, 0, 0, 0, 1],
        scoresMaximum: [0, 0, 0, 0, 0, 30]
    }
};
//Equipment
WeaponsList["wooden stake"] = {
    regExpSearch: /^(?=.*wooden)(?=.*stake).*$/i,
    name: "Wooden stake",
    infoname: "Wooden stake [1 sp]",
    source: ["VtM:BB", 0],
    list: "melee",
    ability: 1,
    type: "Simple",
    damage: [1, 4, "piercing"],
    range: "Melee",
    weight: 1,
    description: "Light; Action: DC 15 Int (Medicine) to drive into Restrained/Unconscious Kindred's heart",
    mastery: "nick",
    tooltip: "Driving the Stake. If I am within 5 feet of a Kindred with the Restrained or Unconscious condition, I can take an action to make a DC 15 Intelligence (Medicine) check. On a successful check, the wooden stake is driven into the heart of the Kindred."
};
PacksList["hunter's kit"] = {
    name: "Hunter's kit (50 gp)",
    source: ["VtM:BB", 0],
    items: [
        ["Backpack, with:", "", 5],
        ["Candles", 6, ""],
        ["Crowbar", "", 5],
        ["Holy symbol", "", 1],
        ["Holy water, vials of", 2, 1],
        ["Mirror", "", 0.5],
        ["Torches", 4, 1],
        ["Wooden stakes", "", 1] // Update amount if the book specifies a quantity
    ]
};
GearList["leather undervest"] = {
    infoname: "Leather undervest [10 gp]",
    name: "Leather undervest",
    amount: "",
    weight: ""
};
MagicItemsList["leather undervest"] = {
    name: "Leather Undervest",
    source: ["VtM:BB", 0],
    type: "Adventuring Gear",
    rarity: "10 GP",
    description: "Can be worn under any armor, capping my Dexterity modifier to AC at +3. Piercing damage from attacks hitting me is reduced by 2, and Int (Medicine) checks to stake me in the heart have Disadvantage.",
    descriptionFull: [
        "These layered leather patches are worn under clothing or armor. The vest fits over the upper chest and back, protecting several internal organs from puncture, particularly the heart. While wearing a leather undervest, you gain the following benefits.",
        "Underarmor. The leather undervest can be worn with any type of armor.",
        "Limited Flexibility. The undervest allows a max Dexterity modifier of 3.",
        "Pierce Protection. When you're hit by an attack while you're wearing a leather undervest, any Piercing damage dealt to you by that attack is reduced by 2. In addition, Intelligence (Medicine) checks to stake you in the heart have Disadvantage."
    ]
};
MagicItemsList["kindred vitae"] = {
    name: "Kindred Vitae",
    source: ["VtM:BB", 0],
    type: "Potion",
    rarity: "Uncommon",
    weight: 0.5,
    description: "Non-Kindred drinking this gain +2 Strength and +5 ft Speed for 1 week, 2d6 Temporary HP, and ignore 1 year of natural aging. However, for 1 year, the drinker has Disadvantage on saves vs being Charmed or Frightened by Undead.",
    descriptionFull: [
        "Vitae, blood from within a Kindred, has powerful properties that are passed on when imbibed by a non-Kindred. A single Blood Point can be stored in a drinkable vessel for up to 48 hours without alchemical treatment. When you drink this potion, you gain the following effects.",
        "Increased Strength and Speed: Your Strength score increases by 2, and your Speed increases by 5 feet for 1 week.",
        "Increased Vitality: You gain 2d6 Temporary Hit Points.",
        "Reduced Aging: You physically ignore the next year of natural aging.",
        "However, mortals who drink this potion are more susceptible to the powers of the Undead. For the period of 1 year, you have Disadvantage on saving throws against being Charmed or Frightened by Undead."
    ]
};
// Silver / Silvered Weapons Description & Tooltip
DefaultEvalsList["VtM:BB Silver Weapons"] = {
    atkAdd: [
        function (fields, v) {
            if (!v.isWeapon || !/\bsilver(ed)?\b/i.test(v.WeaponTextName)) return;
            var excluded = ["club", "greatclub", "light hammer", "mace", "quarterstaff", "flail", "maul", "warhammer"];
            if (excluded.indexOf(v.baseWeaponName) !== -1) return;
            if (v.isRangedWeapon && (v.theWea.ammo || /ammunition/i.test(fields.Description))) return;

            if (!/\bsilvered\b/i.test(fields.Description)) {
                if (fields.Description) fields.Description += fields.Description.indexOf(";") !== -1 ? "; " : ", ";
                fields.Description += "Silvered";
            }
            if (fields.Description_Tooltip) fields.Description_Tooltip += "\n\n";
            fields.Description_Tooltip += toUni("Silver Weapon Upkeep", "bold") + " (VtM:BB)\n" +
                "When I make an attack roll with a silver weapon or piece of ammunition, it takes a cumulative -1 penalty to attack rolls. The weapon or piece of ammunition is destroyed if the penalty reaches -5. The penalty can be removed by casting the Mending spell on the object or by succeeding on a DC 10 Dexterity check using Smith's Tools as part of a Short Rest or Long Rest.";
        },
        'Add the word "Silver" or "Silvered" to the name of an eligible weapon to list "Silvered" in its description and add the VtM:BB Silver Weapon Upkeep rule to its tooltip.',
        10
    ]
};
// Wood / Wooden Weapons Description & Tooltip
DefaultEvalsList["VtM:BB Wooden Weapons"] = {
    atkAdd: [
        function (fields, v) {
            if (!v.isWeapon || !/\bwood(en)?\b/i.test(v.WeaponTextName)) return;
            if (!/piercing/i.test(fields.Damage_Type)) return;
            var isRangedNoAmmo = v.isRangedWeapon && !v.theWea.ammo && !/ammunition/i.test(fields.Description);
            if (!v.isMeleeWeapon && !isRangedNoAmmo) return;

            if (!/\bwooden\b/i.test(fields.Description)) {
                if (fields.Description) fields.Description += fields.Description.indexOf(";") !== -1 ? "; " : ", ";
                fields.Description += "Wooden";
            }
            if (fields.Description_Tooltip) fields.Description_Tooltip += "\n\n";
            fields.Description_Tooltip += toUni("Wooden Weapon", "bold") + " (VtM:BB)\n" +
                "When I make an attack roll with a wooden Melee weapon and roll a 1 on the d20, the weapon splinters and is destroyed. Wooden ammunition is destroyed after hitting or missing a target.";
        },
        'Add the word "Wood" or "Wooden" to the name of an eligible piercing weapon to list "Wooden" in its description and add the VtM:BB Wooden Weapon rule to its tooltip.',
        10
    ]
};