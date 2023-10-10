var iFileName = "MFPR";
RequiredSheetVersion("13.1.7");
SourceList.MFPR = {
	name : "Mind Flayer Playable Race",
	abbreviation : 'MFPR',
	group : "https://drive.google.com/file/d/0Bw4_sxykbTWcb1Jub29LYlBnY0E/view?resourcekey=0-FTUpRoARoP-NAVYKvFTPNw",
	date : "2023/10/02",
};

RaceList["mind flayer"] = {
	regExpSearch : /^((?=.*illithid)|((?=.*mind)(?=.*flayer))).*$/i,
	name : "Mind Flayer",
	source : ["MFPR"],
	plural : "Mind Flayers",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Deep Speech", "Undercommon"],
	vision : [["Darkvision", 60]],
	weaponOptions : [{
		regExpSearch : /^(?=.*mind)(?=.*blast).*$/i,
		name : "Mind Blast",
		source : [['MFPR']],
		ability : 4,
		type : "Natural",
		damage : [1, 6, "psychic"],
		range : "Sight",
		description : "half damage on successful save",
		abilitytodamage : false,
		dc : true,
		dbMindBlast : true
	},	{
		regExpSearch : /^(?=.*Tentacles).*$/i,
		name : "Tentacles",
		source : [['MFPR']],
		ability : 4,
		type : "Natural",
		damage : [1, 4, "psychic"],
		range : "Melee",
		description : "If crea. grappled by tentacles is reduced to 0 hp, its brain is devoured, you learn some of its memories",
		abilitytodamage : true,
		dc : false,
	}],
	weaponsAdd : [["Mind Blast"], ["Tentacles"]],
	age : "Illithids fully complete ceremorphosis by the age of 9, and have become fully mature by age 15. Illithids live longer than humans, but rarely past 150 years.",
	scores : [0, 0, 0, 2, 0, 1],
	traits : "Illithid (+2 Intelligence, +1 Charisma), \nLesser Magic Resistance: Whenever you are profcient in a saving throw against a magical spell or efect you gain advantage on it.\n Mind Blast: Though signifcantly weaker without the full power of the mind fayers' collective networked intelligence behind them, lone illithids' mental assaults are still dangerous. You can loose a wave of psionic energy against a creature you can see as an action. The target must make a Intelligence saving throw with a DC equal to 8 + your Intelligence modifer + your profciency bonus or take 1d8 psychic damage. At 6th level this damage increases to 2d8 and at 11th level the target is stunned for one round. Once you use this feature you must fnish a short or long rest to use it again.\nTentacles: You can use your powerful tentacles to pull a foe's head closer to your mouth. If a creature starts its turn grappled by you, it takes 1d4 psychic damage. If a humanoid grappled by you is reduced to 0 hit points, you may kill it by extracting and devouring its brain. When eating a creatures brain, you learn some of its memories or recent thoughts of the DM's choosing.",
	features : {
		"mind blast" : {
			name : "Mind Blast",
			limfeaname : "Mind Blast",
			minlevel : 1,
			usages : 1,
			additional : levels.map(function (n) {
					return (n < 6 ? 1 : 2 ) + 'd6' + (n < 11 ? "" : "+ Stun");
				}),
			recovery : "short rest",
			action : [["action", ""]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.dbMindBlast && CurrentRace.known === 'mind flayer') {
							fields.Damage_Die = (CurrentRace.level < 6 ? 1 : 2) + 'd6';
							if (v.theWea.dbMindBlast && CurrentRace.known === 'mind flayer' && CurrentRace.level >= 11) {
								fields.Description += (fields.Description ? '; ' : '') + 'on a failed save the crea. is stunned for one round.';
							}	
						}
					}
				]
			}
		}	
	}
};
