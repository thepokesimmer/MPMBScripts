var iFileName = "FoS";
RequiredSheetVersion("13.1.7");
SourceList["FoS"] = {
	name : "Fangs of Sekolah",
	abbreviation : "FoS",	
	group : "Fangs of Sekolah",
	date : "2023/07/18",
};

MagicItemsList["fangs of sekolah"] = {
	name : "Fangs of Sekolah",
	sortname : "Fangs of Sekolah",
	source : [["Fos"]],
	type : "wonderous item",
	rarity : "rare",
	description : "The Fangs of Sekolah are metal shark-like fangs, that must be inserted into your skull by praying to the god of sharks, Sekolah, for two hours, and then placing them over your teeth. They will destroy your current teeth, and give you unbreakable steel fangs. When you have completed the ritual, you have the following features while the fangs are not removed. See Notes Page for Details",
	action : [["reaction", "(Blood Frenzy)"]],
	languageProfs : ["Sahuagin"],
	vision : [["Blindsight", "fixed 30"], ["Blindsight Near Bleeding Creature", "fixed 60"]],
	speed : { swim : { spd : "walk", enc : "walk" } },
	toNotesPage : [{
			name : "Fangs of Sekolah",
			note : [
				"Bite. The fangs are considered a natural weapon, which you can bite with to deal 1d8 piercing damage. This damage is increased to 1d12 against aquatic elves, merrows, and merfolk.",
				"Blood Frenzy. When a hostile creature takes damage while within 5 feet of you, you can use your reaction to make a Bite attack on them.",
				"Hold Breath. You can breathe underwater for 30 minutes.",
				"Shark Sense. While underwater, you have a blindsight of 30 feet. If a creature is bleeding, your blindsight is increased to 60 feet for detecting that creature.",
				"Shark Fins. You gain a swimming speed equal to your base walking speed.",
				"Tongue of the Depths. You can speak and understand the Sahuagin language.",
   		],
  }],
	weaponsAdd : ["Bite"],
	weaponOptions : {
		baseWeapon : "rapier",
		regExpSearch : /bite/i,
		name : "Bite",
		source : [["FoS"]],
		description : "This damage is increased to 1d12 against aquatic elves, merrows, and merfolk.",
		modifiers : [0, 0]
	},
};
