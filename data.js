// Edit this file to add talents. Tabs: extreme, secret, senjutsu
const TABS = {
 "extreme": [
  {
   "name": "Eye of Mirror",
   "image": "images/eye-of-mirror.png",
   "thumb": "thumbs/eye-of-mirror.png",
   "desc": "An ancient eye skill which grants the user strong vision and perception, but it also brings a huge physical burden.",
   "skills": [
    {
     "name": "Eye of Mirror",
     "desc": "(Passive) After enemy used a skill in battle, there is 15% chance you can automatically copy and use that skill immediately. Not effective when CP is not adequate for copying skill. (PVP Jutsu)(Talent skills will not be copied).",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 50.26,
     "y": 9.3
    },
    {
     "name": "Crescent Eye of Mirror",
     "desc": "(Passive) 20% to rebound Genjutsu.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 50.26,
     "y": 33.73
    },
    {
     "name": "Mirror of Passion",
     "desc": "Reduce target HP by 4% for 5 turns.",
     "damage": "900",
     "cp": "1180",
     "cd": "22",
     "x": 14.54,
     "y": 62.22
    },
    {
     "name": "Mirror of Grace",
     "desc": "100% chance to inflict Chaos & Restriction on target (cannot control character and use jutsu). Reduce target damage by 100% for 3 turns.",
     "damage": "0",
     "cp": "705",
     "cd": "18",
     "x": 84.95,
     "y": 62.22
    },
    {
     "name": "Mirror of Strength",
     "desc": "Activate titan attack per action damage from base weapon/skill (550% damage of character level)(5 turns). Successful Titan Attack has 20% chance to 'Stun' the enemy for 1 turn.",
     "damage": "550",
     "cp": "910",
     "cd": "24",
     "x": 14.54,
     "y": 86.96
    },
    {
     "name": "Mirror of Freedom",
     "desc": "(Passive) Recover HP and CP by 50% when HP is below 0 for once. User cannot use Eye of Mirror skills again in the same battle.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 84.95,
     "y": 86.96
    }
   ]
  },
  {
   "name": "Eight Extremities",
   "image": "images/eight-extremities.png",
   "thumb": "thumbs/eight-extremities.png",
   "desc": "This talent focuses on the flexibility of 8 body parts and the art of taijutsu. Explosive power can be achieved under extreme mode, but there will be serious side effects.",
   "skills": [
    {
     "name": "Soul Punch",
     "desc": "Basic: Concentrates chakra on your palm and punch the target.",
     "damage": "708",
     "cp": "20",
     "cd": "6",
     "x": 28.84,
     "y": 9.67
    },
    {
     "name": "Eight Extremities",
     "desc": "(Passive) Increases attack damage of taijutsu skill type by 20%. Reduce HP deduction from taijutsu skill type by 100%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 28.84,
     "y": 35.57
    },
    {
     "name": "Eight Extremities Fist",
     "desc": "100% chance to reduce target's CP by 50%.",
     "damage": "1000",
     "cp": "900",
     "cd": "19",
     "x": 76.28,
     "y": 35.57
    },
    {
     "name": "Eight Extremities Strengthen",
     "desc": "(Passive) Increases agility by 20%. Increases maximum HP by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 28.84,
     "y": 60.84
    },
    {
     "name": "Extreme Mode",
     "desc": "Increases attack damage of all taijutsu by 80% (5 turns). User cannot be healed (5 turns).",
     "damage": "0",
     "cp": "1450",
     "cd": "16",
     "x": 28.84,
     "y": 85.8
    },
    {
     "name": "Ultimate Dance",
     "desc": "Must be in Extreme Mode. 90% chance to +CP Cost of target for 3 turns.",
     "damage": "1778",
     "cp": "1000",
     "cd": "19",
     "x": 76.28,
     "y": 85.8
    }
   ]
  },
  {
   "name": "Dark Eye",
   "image": "images/dark-eye.png",
   "thumb": "thumbs/dark-eye.png",
   "desc": "Combine eye skill with acupuncture skill to give the user the ability to look through the target's nerves and meridians.",
   "skills": [
    {
     "name": "Dark Eye",
     "desc": "(Passive) Increase accuracy by 10%. Increase dodge chance by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 52.45,
     "y": 9.42
    },
    {
     "name": "Meridian Kekkai",
     "desc": "(Passive) Whenever your CP was absorbed or reduced, attacker will receive 55% the absorbed/reduced CP as damage and has 50% chance of getting stunned for 1 turn. (No effect with CP reduction over time skills).",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 14.99,
     "y": 37.69
    },
    {
     "name": "Acupuncture: Meridian Anesthesia",
     "desc": "Reduce damage taken by 20% (4 turns). Recover HP by 20% each turn (3 turns). User is not allowed to charge (3 turns).",
     "damage": "0",
     "cp": "820",
     "cd": "16",
     "x": 85.27,
     "y": 37.69
    },
    {
     "name": "Meridian Search",
     "desc": "(Passive) Increase critical chance by 5%. Increase critical damage by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 14.99,
     "y": 62.31
    },
    {
     "name": "Meridian Strengthen",
     "desc": "(Passive) Increases maximum CP by 20%. Recover CP by extra 25% per charge.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 85.27,
     "y": 62.31
    },
    {
     "name": "Acupuncture: Meridian Destruction",
     "desc": "Restrict target (cannot use skills) (2 turns). 85% chance to clear all buff of target",
     "damage": "1145",
     "cp": "1180",
     "cd": "20",
     "x": 52.45,
     "y": 90.43
    }
   ]
  },
  {
   "name": "Deadly Performance",
   "image": "images/deadly-performance.png",
   "thumb": "thumbs/deadly-performance.png",
   "desc": "Dead Bone performer can summon deceased beings in battle. Advanced performers can manipulate more dead bones at the same time.",
   "skills": [
    {
     "name": "Onmyouji: Wondrous Doors",
     "desc": "Convert 100% of taken damage to HP positively (4 turns).",
     "damage": "0",
     "cp": "550",
     "cd": "16",
     "x": 14.88,
     "y": 9.81
    },
    {
     "name": "Samurai: One Sword",
     "desc": "Expose target defence for 40% (3 turns). Reduce target's dodge chance by 40% (3 turns).",
     "damage": "1230",
     "cp": "1180",
     "cd": "20",
     "x": 86.95,
     "y": 9.81
    },
    {
     "name": "Soul of Onmyouji",
     "desc": "(Passive) Reduce damage taken by 5%. 20% chance to resist stun .",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 14.88,
     "y": 33.23
    },
    {
     "name": "Soul of Samurai",
     "desc": "(Passive) 19% chance to rebound 50% damage taken.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 86.95,
     "y": 33.23
    },
    {
     "name": "Burial of Dead Bone",
     "desc": "All enemies cannot use weapon, jutsu and talent to attack (3 turns).",
     "damage": "410",
     "cp": "1460",
     "cd": "26",
     "x": 52.22,
     "y": 62.5
    },
    {
     "name": "Divine Wind of Onmyousamurai",
     "desc": "Convert damage caused by this jutsu to HP by 100%.",
     "damage": "1540",
     "cp": "1000",
     "cd": "16",
     "x": 52.22,
     "y": 86.23
    }
   ]
  },
  {
   "name": "Orochi's Rage",
   "image": "images/orochis-rage.png",
   "thumb": "thumbs/orochis-rage.png",
   "desc": "Blessed by the great snake Orochi, the user gains protection and immunity to poison and also gains the ability to revive the dead.",
   "skills": [
    {
     "name": "Orochi's Scales",
     "desc": "(Passive) Reduce damage taken by 10% and recover 4% HP when your current HP is below 50%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.0,
     "y": 8.9
    },
    {
     "name": "Orochi's Blessing",
     "desc": "(Passive) Granted immunity to poison and 20% chance to recover HP when attacking (60% of damage dealt).",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.75,
     "y": 34.05
    },
    {
     "name": "Snake Summoning Technique",
     "desc": "Poison the enemy by 8% for 3 turns.",
     "damage": "956",
     "cp": "1021",
     "cd": "21",
     "x": 14.93,
     "y": 63.19
    },
    {
     "name": "Snake Binding Technique",
     "desc": "Vulnerable your target by 60% for 2 turns.",
     "damage": "990",
     "cp": "910",
     "cd": "18",
     "x": 82.59,
     "y": 63.19
    },
    {
     "name": "Orochi's Roar",
     "desc": "Strike fear for 3 turns.",
     "damage": "780",
     "cp": "1090",
     "cd": "20",
     "x": 14.93,
     "y": 88.65
    },
    {
     "name": "The Circle of Transmigration",
     "desc": "Revive your teammates with 30% HP/CP by sacrificing 50% of your current HP. One time only. Cannot use talent abilities after that.",
     "damage": "0",
     "cp": "750",
     "cd": "99",
     "x": 82.59,
     "y": 88.65
    }
   ]
  },
  {
   "name": "Saint Power",
   "image": "images/saint-power.png",
   "thumb": "thumbs/saint-power.png",
   "desc": "Saint Power allows the user to achieve the pinnacle of chakra manipulation by understanding the fundamental essence of life.",
   "skills": [
    {
     "name": "Saint Soul",
     "desc": "(Passive) Recover HP by 220% every turn. Increase healing power of scrolls by 150%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.5,
     "y": 8.96
    },
    {
     "name": "Saint Physique",
     "desc": "(Passive) Recover 200 HP every turn if current HP is less than 70%. Increase maximum HP by 800.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.75,
     "y": 34.31
    },
    {
     "name": "Saint Fist",
     "desc": "75% chance to clear all targets' positive status.",
     "damage": "900",
     "cp": "1150",
     "cd": "18",
     "x": 14.32,
     "y": 63.68
    },
    {
     "name": "Saint Light",
     "desc": "Instant recover 2800 HP for team.",
     "damage": "0",
     "cp": "975",
     "cd": "18",
     "x": 83.42,
     "y": 63.68
    },
    {
     "name": "Saint Blessing",
     "desc": "Recover HP by 1000 every turn (4 turns).",
     "damage": "0",
     "cp": "1280",
     "cd": "18",
     "x": 14.32,
     "y": 89.34
    },
    {
     "name": "Unyielding Saint",
     "desc": "(Passive) Triggered in death. Maintaining 1 HP. Increase all attack damage by 130% and ignore 130% target's dodge. But User cannot use any skill and HP cannot be recover. One-time only.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 83.42,
     "y": 89.34
    }
   ]
  },
  {
   "name": "Insect Symbiosis",
   "image": "images/insect-symbiosis.png",
   "thumb": "thumbs/insect-symbiosis.png",
   "desc": "Years of studying various insect and learning their biology has unraveled the secrets of insect utilization and manipulation.",
   "skills": [
    {
     "name": "Beetle Carapace",
     "desc": "(Passive) Reduce damage taken by 10%. Increase purify chance by 1% purify chance on every 700 max CP.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.24,
     "y": 8.88
    },
    {
     "name": "Primal Evolution",
     "desc": "Increase Max HP by 10% of Max CP. Recovers 6% CP every turn if CP is less than 50%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 50.0,
     "y": 34.0
    },
    {
     "name": "Pestilence",
     "desc": "Drains 35% of the target's max CP. If the target's CP turns to 0 after drain, stuns the target for 3 turns.",
     "damage": "980",
     "cp": "1000",
     "cd": "17",
     "x": 15.15,
     "y": 63.09
    },
    {
     "name": "Medial Evolution",
     "desc": "(Passive) Has 50% chance to recover 650HP whenever the user uses direct CP reduction and drain attacks.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 83.84,
     "y": 63.09
    },
    {
     "name": "Ultimate Evolution",
     "desc": "(Passive) Increases all attack damage by 10% of the user's max CP.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 15.15,
     "y": 88.51
    },
    {
     "name": "Holocaust",
     "desc": "Reduce the target's CP by 40% and inflict negative status 'Restriction' for 3 turns. If the target's CP turn to 0 after the attacks, the target cannot recover CP for 2 turns.",
     "damage": "1120",
     "cp": "1200",
     "cd": "18",
     "x": 83.84,
     "y": 88.51
    }
   ]
  },
  {
   "name": "Soul Marionette",
   "image": "images/soul-marionette.png",
   "thumb": "thumbs/soul-marionette.png",
   "desc": "A new body that was created by puppeteer after abandoning their flesh body. Become a full-fledged puppet while still being a puppeteer.",
   "skills": [
    {
     "name": "Ultimate String",
     "desc": "(Passive) 50% chance to inflict chaos everytime the user poison the enemy for 2 turns, recover 650 HP instantly.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 14.46,
     "y": 9.97
    },
    {
     "name": "Perfect Control Marionette",
     "desc": "(Passive) Increase max damage by 10%. Increase purify chance by 1% every 700 max HP.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 82.29,
     "y": 9.97
    },
    {
     "name": "Puppet Stab",
     "desc": "Bleeding enemy by 100% for 3 turns and poison enemy by 5% for 3 turns.",
     "damage": "628",
     "cp": "512",
     "cd": "14",
     "x": 14.46,
     "y": 33.28
    },
    {
     "name": "Poison Thrust",
     "desc": "Put 1 random skill into cooldown for 8 turns and poison enemy by 7% for 3 turns.",
     "damage": "1230",
     "cp": "1180",
     "cd": "18",
     "x": 82.29,
     "y": 33.28
    },
    {
     "name": "Puppet Mode",
     "desc": "Purify instantly, gain Anti Internal injury for 4 turns. (This effect cannot be dispersed).",
     "damage": "0",
     "cp": "1450",
     "cd": "16",
     "x": 51.12,
     "y": 63.18
    },
    {
     "name": "Performance of a Hundred Puppets",
     "desc": "Damage all enemies. User gain 100% protection againts any damage for 3 turns.",
     "damage": "1778",
     "cp": "1000",
     "cd": "16",
     "x": 51.12,
     "y": 88.1
    }
   ]
  },
  {
   "name": "Eye of Creation",
   "image": "images/eye-of-creation.png",
   "thumb": "thumbs/eye-of-creation.png",
   "desc": "The Eye of Creation skills unlock visionary power, enabling users to manifest and reshape intricate realities with unparalleled creativity.",
   "skills": [
    {
     "name": "Future Vision",
     "desc": "(Passive) 45% chance to use skill without CP (Talent is not affected). For the first time the skill is used, has 25% chance to cut the cooldown in half (Talent and Senjutsu is not affected).",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 14.5,
     "y": 9.95
    },
    {
     "name": "Chakra Convergence",
     "desc": "(Passive) If Future Vision is activated, convert 100% of that skill's CP Cost to increase damage of that turn.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 82.5,
     "y": 9.95
    },
    {
     "name": "Time Manipulation",
     "desc": "Instantly remove all buffs and debuffs from user, also recover HP & CP by 30%. Can be used either in stun, restriction or chaos condition, etc.",
     "damage": "0",
     "cp": "500",
     "cd": "30",
     "x": 14.5,
     "y": 32.91
    },
    {
     "name": "Chronos Seal",
     "desc": "Put 1 target's random skill into cooldown for 7 turns. 100% chance to disperse target.",
     "damage": "1230",
     "cp": "910",
     "cd": "16",
     "x": 82.5,
     "y": 32.91
    },
    {
     "name": "Tailed Beast Absorption",
     "desc": "(Passive) Increase purify chance and max CP by 15%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 51.25,
     "y": 63.08
    },
    {
     "name": "Eternal Slumber",
     "desc": "Inflict sleep for 4 turns. High chance to crit.",
     "damage": "1540",
     "cp": "1000",
     "cd": "19",
     "x": 51.25,
     "y": 87.8
    }
   ]
  },
  {
   "name": "Knowledge of Time",
   "image": "images/knowledge-of-time.png",
   "thumb": "thumbs/knowledge-of-time.png",
   "desc": "The Knowledge of Time grants control over temporal flow, enhancing agility, amplifying power through speed, and shaping inevitable outcomes.",
   "skills": [
    {
     "name": "Knowledge of the Ages",
     "desc": "(Passive) For every 500 max HP, increase agility by 2.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 14.5,
     "y": 9.69
    },
    {
     "name": "Essence of Time",
     "desc": "(Passive) For every 12 agility points, increase all attack damage by 1%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 82.5,
     "y": 9.69
    },
    {
     "name": "Garden of Wisdom",
     "desc": "Increase all active buff duration by 3 turns.",
     "damage": "0",
     "cp": "820",
     "cd": "16",
     "x": 14.5,
     "y": 32.34
    },
    {
     "name": "Future Sentence",
     "desc": "Stores all damage dealt to the enemy for 3 turns. After that, damage is applied as an effect that ignores all damage reduction effects, but can be negated by Debuff Resistance. Cannot be dispersed.",
     "damage": "0",
     "cp": "1450",
     "cd": "16",
     "x": 82.5,
     "y": 32.34
    },
    {
     "name": "Heaven Judgement",
     "desc": "Inflict Chaos on all enemy for 3 turns.",
     "damage": "550",
     "cp": "910",
     "cd": "16",
     "x": 51.25,
     "y": 61.72
    },
    {
     "name": "Holy Pillar",
     "desc": "Reduce enemy's CP by 55% and inflict Internal Injury for 3 turns.",
     "damage": "1000",
     "cp": "1000",
     "cd": "19",
     "x": 51.25,
     "y": 85.94
    }
   ]
  },
  {
   "name": "Byakugan",
   "image": "images/byakugan.png",
   "thumb": "thumbs/byakugan.png",
   "desc": "A legendary eye technique that grants the user extraordinary vision, allowing them to see through obstacles and perceive the flow of chakra.",
   "skills": [
    {
     "name": "Byakugan Focus",
     "desc": "(Passive) Increase accuracy 25%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 48.75,
     "y": 8.92
    },
    {
     "name": "Byakugan Precision",
     "desc": "(Passive) Increase critical chance by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 34.15
    },
    {
     "name": "Awareness",
     "desc": "Dodge and Accuracy increase 30% on self for 3 turns.",
     "damage": "250",
     "cp": "150",
     "cd": "3",
     "x": 14.25,
     "y": 63.69
    },
    {
     "name": "Byakugan",
     "desc": "(Passive) Damage reduce 27% on self for 3 turns. Recover 27% on self for 3 turns.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 83.25,
     "y": 63.69
    },
    {
     "name": "Sixty-four Palms",
     "desc": "Restrict target from using any skill (3 turns). Block target from charging (6 turns)",
     "damage": "250",
     "cp": "150",
     "cd": "3",
     "x": 14.25,
     "y": 89.23
    },
    {
     "name": "Twin-lion Shot",
     "desc": "Instantly reduce 11% of enemy HP & CP.",
     "damage": "250",
     "cp": "150",
     "cd": "3",
     "x": 83.25,
     "y": 89.23
    }
   ]
  },
  {
   "name": "Sharingan",
   "image": "images/sharingan.png",
   "thumb": "thumbs/sharingan.png",
   "desc": "Legendary eyes that enhance perception and unlock forbidden techniques.",
   "skills": [
    {
     "name": "Tomoe Mastery",
     "desc": "(Passive) Increase accuracy by 15% and agility by 15.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 14.5,
     "y": 9.89
    },
    {
     "name": "Tomoe Insight",
     "desc": "(Passive) Increase dodge rate by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 82.5,
     "y": 9.89
    },
    {
     "name": "Amaterasu",
     "desc": "Blaze 5% on enemy for 10 turns.",
     "damage": "250",
     "cp": "150",
     "cd": "12",
     "x": 14.5,
     "y": 33.01
    },
    {
     "name": "Tsukuyomi",
     "desc": "Inflict Restriction on enemy for 3 turns. Weaken 99% for 3 turns and Chaos for 3 turns.",
     "damage": "250",
     "cp": "150",
     "cd": "14",
     "x": 82.5,
     "y": 33.01
    },
    {
     "name": "Izanagi",
     "desc": "(Passive) Revive once per battle. Remove all buffs and debuffs and recover 1750 HP & CP. All Sharingan skills are sealed for the rest of the battle",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 51.25,
     "y": 63.0
    },
    {
     "name": "Susanoo",
     "desc": "Activate Titan Mode (5 turns) which will activate after successful attacks on opponent. Each attack has a 15% chance to disperse enemy.",
     "damage": "700",
     "cp": "150",
     "cd": "18",
     "x": 51.25,
     "y": 87.72
    }
   ]
  },
  {
   "name": "Super Beast Scroll",
   "image": "images/super-beast-scroll.png",
   "thumb": "thumbs/super-beast-scroll.png",
   "desc": "A secret art that brings ink drawings to life.",
   "skills": [
    {
     "name": "Ink Reservoir",
     "desc": "(Passive) Increase max CP by 30%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 48.75,
     "y": 8.9
    },
    {
     "name": "Beast Vitality",
     "desc": "(Passive) Increase max HP by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 33.44
    },
    {
     "name": "Ink Titan Smash",
     "desc": "Inflict Restriction on enemy for 3 turns and inflict Weaken 50% for 3 turns.",
     "damage": "1125",
     "cp": "675",
     "cd": "20",
     "x": 14.25,
     "y": 62.88
    },
    {
     "name": "Ink Tiger Snatch",
     "desc": "Drains target current HP by 30% and CP by 60%.",
     "damage": "1375",
     "cp": "825",
     "cd": "16",
     "x": 83.0,
     "y": 62.88
    },
    {
     "name": "Ink Smash",
     "desc": "Stun an enemy for 4 turns.",
     "damage": "900",
     "cp": "675",
     "cd": "16",
     "x": 14.25,
     "y": 88.65
    },
    {
     "name": "Ink Dragon",
     "desc": "Inflict 60% Muddy on enemy for 5 turns.",
     "damage": "1300",
     "cp": "975",
     "cd": "20",
     "x": 83.0,
     "y": 88.65
    }
   ]
  },
  {
   "name": "Paper",
   "image": "images/paper.png",
   "thumb": "thumbs/paper.png",
   "desc": "A secret wind technique that commands razor-sharp sheets of paper, sending them through the air to slice enemies with deadly precision.",
   "skills": [
    {
     "name": "Paper Drift",
     "desc": "(Passive) Increase accuracy by 15% and agility by 10.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 51.64,
     "y": 8.9
    },
    {
     "name": "Paper Gale Edge",
     "desc": "(Passive) Increase dodge by 15%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 15.62,
     "y": 37.88
    },
    {
     "name": "Papershield",
     "desc": "Purify and gain 60% dodge rate for 3 turns.",
     "damage": "0",
     "cp": "375",
     "cd": "14",
     "x": 83.63,
     "y": 37.58
    },
    {
     "name": "Papercut",
     "desc": "Disperse the enemy. Inflict bleeding 100% on enemy for 3 turns.",
     "damage": "600",
     "cp": "615",
     "cd": "18",
     "x": 15.62,
     "y": 62.88
    },
    {
     "name": "Paper Circle Cut",
     "desc": "Dismantle enemy for 6 turns.",
     "damage": "820",
     "cp": "625",
     "cd": "12",
     "x": 83.63,
     "y": 62.88
    },
    {
     "name": "Paperwave",
     "desc": "High damage, low cooldown.",
     "damage": "1030",
     "cp": "510",
     "cd": "6",
     "x": 51.64,
     "y": 90.8
    }
   ]
  },
  {
   "name": "Magma",
   "image": "images/magma.png",
   "thumb": "thumbs/magma.png",
   "desc": "A devastating technique that unleashes scorching molten lava.",
   "skills": [
    {
     "name": "Magma Scalding Skin",
     "desc": "(Passive) 30% chance to inflict Blaze 3% on the attacker for 1 turn when hit.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 14.96,
     "y": 9.88
    },
    {
     "name": "Magma Vitality",
     "desc": "(Passive) Increase max HP by 10% and accuracy by 15%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 82.29,
     "y": 9.88
    },
    {
     "name": "Meteor Volcano",
     "desc": "Inflict 8% Burn on ALL enemy for 3 turns.",
     "damage": "1250",
     "cp": "1000",
     "cd": "20",
     "x": 14.96,
     "y": 33.77
    },
    {
     "name": "Magma Hand",
     "desc": "Instantly reduce target's max HP by 10%. Burn 10% for 1 turn.",
     "damage": "900",
     "cp": "625",
     "cd": "18",
     "x": 82.29,
     "y": 33.77
    },
    {
     "name": "Magma Explosion",
     "desc": "Disperse the target.",
     "damage": "1100",
     "cp": "750",
     "cd": "16",
     "x": 51.12,
     "y": 64.58
    },
    {
     "name": "Hellhound",
     "desc": "Instantly reduce target's max HP by 8% and inflict Internal Injury on enemy for 3 turns.",
     "damage": "800",
     "cp": "600",
     "cd": "14",
     "x": 51.12,
     "y": 89.79
    }
   ]
  }
 ],
 "secret": [
  {
   "name": "Demon Sound",
   "image": "images/demon-sound.png",
   "thumb": "thumbs/demon-sound.png",
   "desc": "The Demon Sound is combined by the elements of Thunder and Wind. Users interfere targets with different kinds of sounds and music.",
   "skills": [
    {
     "name": "Demon Song",
     "desc": "(Passive Skill) 70% chance to reduce target's damage by 32% (3 turns) by hitting enemy with thunder-wind ninjutsu.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.13,
     "y": 30.12
    },
    {
     "name": "Demon Song: Phantom Wave",
     "desc": "Play the song of demon to interfere with the attention of target. Reduce target's accuracy - extra 20% dodge rate during target's attack (3 turns). Reduce target's critical chance by 20% (3 turns).",
     "damage": "1000",
     "cp": "910",
     "cd": "16",
     "x": 15.46,
     "y": 74.56
    },
    {
     "name": "Demon Song: Song of Fantasia",
     "desc": "Play the song of demon to temporarily erase jutsu knowledge of target. Put target's 1 random skill into cooldown for 14 turns (PvP Jutsu).",
     "damage": "1000",
     "cp": "729",
     "cd": "14",
     "x": 84.29,
     "y": 74.56
    }
   ]
  },
  {
   "name": "Enraged Forest",
   "image": "images/enraged-forest.png",
   "thumb": "thumbs/enraged-forest.png",
   "desc": "The Enraged Forest is combined by the elements of Water and Earth. User manipulates the growth of tree and uses wood to attack target.",
   "skills": [
    {
     "name": "Nature Power",
     "desc": "(Passive Skill) 58% chance to recover 6% HP & CP when using water and Earth skills.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.18
    },
    {
     "name": "Secret Enraged Forest: Smothering Bind",
     "desc": "Entwine target with branches of tree. Stun target (2 turn).",
     "damage": "730",
     "cp": "825",
     "cd": "15",
     "x": 15.5,
     "y": 72.24
    },
    {
     "name": "Secret Enraged Forest: Matsuri",
     "desc": "Entwine target with explosion of giant branches of a tree.",
     "damage": "1630",
     "cp": "1000",
     "cd": "16",
     "x": 84.5,
     "y": 72.24
    }
   ]
  },
  {
   "name": "Explosive Lava",
   "image": "images/explosive-lava.png",
   "thumb": "thumbs/explosive-lava.png",
   "desc": "Explosive Lava is combined by the elements of Fire and Earth. User damage target by ignition and explosion.",
   "skills": [
    {
     "name": "Explosive Lava",
     "desc": "(Passive Skill) Increase fire-earth ninjutsu damage by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.75,
     "y": 28.22
    },
    {
     "name": "Secret Lava: Lava Shield",
     "desc": "Stick target with pieces of lava when target attacks user. Affected target receives extra damage when user attacks with fire-earth ninjutsu. Lava Shield (6 Turns). Inflict 'Lava' on target (target receives extra 20% damage from fire, earth ninjutsu and Secret Lava: Lava Spirits) 2 turns. reduce target's dodge rate by 20% (2 turns).",
     "damage": "0",
     "cp": "600",
     "cd": "20",
     "x": 15.66,
     "y": 69.86
    },
    {
     "name": "Secret Lava: Lava Spirits",
     "desc": "Create explosive clay bugs and dispatch them to target. 70% Chance to inflict 3% 'Burn' for 2 turns.",
     "damage": "1120",
     "cp": "1009",
     "cd": "16",
     "x": 85.35,
     "y": 69.86
    }
   ]
  },
  {
   "name": "Hidden Silhouette",
   "image": "images/hidden-silhouette.png",
   "thumb": "thumbs/hidden-silhouette.png",
   "desc": "Silhouette user manipulates human shadows to restrict and control target. Advanced user can incarnate shadows into physical objects and attack target directly.",
   "skills": [
    {
     "name": "Silhouette Capture",
     "desc": "(Passive Skill) Any attack may inflict Capture (debuff) on target. Target under Capture status has lower dodge chance. 15% chance to inflict Capture on target (Reduce target's dodge chance by 10% for 3 turns)",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.43
    },
    {
     "name": "Secret Silhouette: Strangle",
     "desc": "Restrict and strangle target by manipulating the shadow. Damage tripled when target is in 'Silhouette' status. User and target get 'Stun' 3 Turns. Target reduce 2% HP each 3 turns. Increase Silhouette chance by 15%",
     "damage": "0",
     "cp": "480",
     "cd": "16",
     "x": 15.5,
     "y": 72.86
    },
    {
     "name": "Secret Silhouette: Extinguish",
     "desc": "Restrict and stab target with shadow spears. Damage tripled when target is in 'Silhouette' status. Restrict target (2 turn). Increase Silhouette chance by 15%",
     "damage": "425",
     "cp": "910",
     "cd": "16",
     "x": 84.5,
     "y": 72.86
    }
   ]
  },
  {
   "name": "Icy Crystal",
   "image": "images/icy-crystal.png",
   "thumb": "thumbs/icy-crystal.png",
   "desc": "Combine Wind and Water elements together to form a new element type - Icy Crystal. Use low temperature to attack target or protect yourself.",
   "skills": [
    {
     "name": "Absolute Zero Zone",
     "desc": "(Passive Skill) Chance to freeze enemy by hitting enemy with wind-water ninjutsu. 13% chance to freeze target (1 turn)",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.01
    },
    {
     "name": "Secret Icy Crystal: Hakukage Horo",
     "desc": "Freeze down all the moisture and form a armor. Damage will be decrease when being attacked and target will reduce CP. Reduce damage taken by 30% (2 turns). Reduce Target's 12% CP during target's attack",
     "damage": "0",
     "cp": "910",
     "cd": "20",
     "x": 15.5,
     "y": 71.83
    },
    {
     "name": "Secret Icy Crystal: Icy Kaleidoscope",
     "desc": "Hide yourself in hundreds of crystal and attack target back and forth between the crystals. Wind and Water Jutsu will increase their damage. Target receives extra 12% damage from wind, water ninjutsu (3 turns)",
     "damage": "1180",
     "cp": "1360",
     "cd": "16",
     "x": 84.5,
     "y": 71.83
    }
   ]
  },
  {
   "name": "Iron Sand",
   "image": "images/iron-sand.png",
   "thumb": "thumbs/iron-sand.png",
   "desc": "Iron Sand is a powerful skill that manipulates particles to create versatile weapons or defenses. The user controls the iron sand to form barriers and projectiles, making it highly adaptable in combat.",
   "skills": [
    {
     "name": "Metallic Control",
     "desc": "(Passive Skill) Allows the user to manipulate ferrous particles, providing an occasional, formidable defense mechanism when under heavy attack. If the user receives more than 1000 damage in a single turn, they have a 15% chance to gain 100% protection (Buff: Wolfram) for the next turn.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.01
    },
    {
     "name": "Secret Iron Sand: Aegis Shield",
     "desc": "The user harnesses the power of iron sand to enter a heightened state, significantly enhancing their resilience and mental clarity. Clear all debuffs. Reduce damage taken by 100% for 3 turns.",
     "damage": "0",
     "cp": "540",
     "cd": "16",
     "x": 15.5,
     "y": 71.83
    },
    {
     "name": "Secret Iron Sand: Ferrous Barrage",
     "desc": "The user commands iron sand to execute a devastating strike, disrupting the enemy's energy flow and leaving them significantly more vulnerable to subsequent attacks. Enemy's CP is reduced by 1000 instantly, and the enemy become vulnerable, receiving 50% more damage and weaken it for the next 2 turns.",
     "damage": "822",
     "cp": "804",
     "cd": "15",
     "x": 84.5,
     "y": 71.83
    }
   ]
  },
  {
   "name": "Crystal Manifestation",
   "image": "images/crystal-manifestation.png",
   "thumb": "thumbs/crystal-manifestation.png",
   "desc": "Crystal Manifestation taps into the latent energies of the environment, channeling them to create intricate and powerful crystalline structures.",
   "skills": [
    {
     "name": "Crystal Mastery",
     "desc": "(Passive Skill) Crystal Mastery is a passive skill that bestows the user with an exceptional bond to the mystical properties of crystals. This skill grants a heightened resistance to negative effects, allowing the user 10% chance to resist all debuff.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.5,
     "y": 29.6
    },
    {
     "name": "Secret: Crystal Summoner's Art",
     "desc": "Secret: Crystal Summoner's Art is an enigmatic skill that channels the mystical energies of the crystals to sap the life force of enemies. This skill reduces the enemy's HP and CP by a fixed amount. Reduce enemy HP and CP by 800.",
     "damage": "425",
     "cp": "1009",
     "cd": "12",
     "x": 15.58,
     "y": 73.28
    },
    {
     "name": "Secret: Crystal Rain Conjuration",
     "desc": "Secret: Crystal Rain Conjuration is a formidable skill that calls forth a shower of razor-sharp crystalline shards from the sky. When activated, a deluge of shimmering crystals rains down upon the battlefield. All enemies inflicted by internal injury and bleeding for 2 turns. (70% amount bleeding)",
     "damage": "708",
     "cp": "1000",
     "cd": "16",
     "x": 84.92,
     "y": 73.28
    }
   ]
  },
  {
   "name": "Light Matter",
   "image": "images/light-matter.png",
   "thumb": "thumbs/light-matter.png",
   "desc": "The Light Matter channels radiant energy to boost courage, enhance abilities, and unleash light to empower and destroy.",
   "skills": [
    {
     "name": "Light Heart",
     "desc": "(Passive Skill) A heart with pure light will help you to be more courageous and strong. 10% chance to apply Internal Injury for 2 turns after dealing damage.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.62,
     "y": 29.26
    },
    {
     "name": "Secret: Light of Courage",
     "desc": "Secret: Gather the power of light and use it to buff yourself. Increase accuracy and damage by 60% for 5 turns (Solar Might).",
     "damage": "0",
     "cp": "1009",
     "cd": "12",
     "x": 15.62,
     "y": 72.44
    },
    {
     "name": "Secret: Ray of Light",
     "desc": "Secret: Concentrate the power of light and use it like a ray to deal damage to enemies. Deal damage to one enemy, this skill can be used frequently. (This skill is high accurate).",
     "damage": "708",
     "cp": "20",
     "cd": "6",
     "x": 85.14,
     "y": 72.44
    }
   ]
  },
  {
   "name": "Dark Matter",
   "image": "images/dark-matter.png",
   "thumb": "thumbs/dark-matter.png",
   "desc": "The Dark Matter harnesses primordial darkness to strengthen the body, empower attacks, and strike as a shadow from the void.",
   "skills": [
    {
     "name": "Dark Heart",
     "desc": "(Passive Skill) A heart embraced by darkness grants resilience through fear and despair, making you unyielding and relentless. 10% chance to apply disable enemy weapon effect for 2 turns upon damaging the enemy.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.01
    },
    {
     "name": "Secret: Oblivion Surge",
     "desc": "Secret: Darkness floods your body, increasing strength and endurance while shrouding you in shadow. Clear all debuffs. Gain immunity to bleeding effect for 4 turns.",
     "damage": "0",
     "cp": "540",
     "cd": "16",
     "x": 15.5,
     "y": 71.83
    },
    {
     "name": "Dark Phantom Assassinate",
     "desc": "Secret: Concentrate the power of dark and turn into a dark phantom to deal damage to enemy. Inflict 'Blind' to target by 65% for 3 turns.",
     "damage": "1000",
     "cp": "910",
     "cd": "16",
     "x": 84.5,
     "y": 71.83
    }
   ]
  },
  {
   "name": "Lunar Fang",
   "image": "images/lunar-fang.png",
   "thumb": "thumbs/lunar-fang.png",
   "desc": "Awaken the feral power hidden beneath the moonlight. Lunar Beast grants its wielder savage strength, heightened instincts, and devastating celestial techniques capable.",
   "skills": [
    {
     "name": "Lunar Fang Lunar Blessing",
     "desc": "(Passive Skill) Increases ALL damage by 15%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.43
    },
    {
     "name": "Lunar Fury",
     "desc": "Instantly purify yourself. Increase damage dealt by 75% for 3 turns.",
     "damage": "0",
     "cp": "870",
     "cd": "16",
     "x": 15.5,
     "y": 72.86
    },
    {
     "name": "Celestial Thunderclap Strike",
     "desc": "Deal high damage.",
     "damage": "1735",
     "cp": "1000",
     "cd": "16",
     "x": 84.5,
     "y": 72.86
    }
   ]
  },
  {
   "name": "Lightning Infusion",
   "image": "images/lightning-infusion.png",
   "thumb": "thumbs/lightning-infusion.png",
   "desc": "Master the art of lightning chakra and infuse your attacks with high-voltage energy to strike enemies",
   "skills": [
    {
     "name": "Lightning Infusion Precision",
     "desc": "(Passive Skill) Increases Critical Damage by 20%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.01
    },
    {
     "name": "Electric Wrath",
     "desc": "Inflict Bleeding 100% on enemy for 3 turns.",
     "damage": "860",
     "cp": "600",
     "cd": "18",
     "x": 15.5,
     "y": 71.83
    },
    {
     "name": "Electric Strangle",
     "desc": "Inflict Stun on enemy for 3 turns.",
     "damage": "600",
     "cp": "400",
     "cd": "22",
     "x": 84.5,
     "y": 71.83
    }
   ]
  },
  {
   "name": "Black Thunder",
   "image": "images/balck-thunder.png",
   "thumb": "thumbs/balck-thunder.png",
   "desc": "A forbidden lightning art that condenses chakra into violent black electricity.",
   "skills": [
    {
     "name": "Black Thunder Savagery",
     "desc": "(Passive Skill) Increases Critical Damage dealt by 15%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.01
    },
    {
     "name": "Black Panther",
     "desc": "Remove all negative buffs and gain \"Lightning Armor\" while under the effect gain Increased Damage, Critical Chance and Ignore targets dodge rate by 50% for 3 turns.",
     "damage": "0",
     "cp": "500",
     "cd": "14",
     "x": 15.5,
     "y": 71.83
    },
    {
     "name": "Black Laser Circus",
     "desc": "Inflicts Numb (decrease targets dodge rate) by 30% for 3 turns.",
     "damage": "1300",
     "cp": "1000",
     "cd": "14",
     "x": 84.5,
     "y": 71.83
    }
   ]
  },
  {
   "name": "Snowstorm",
   "image": "images/snowstorm.png",
   "thumb": "thumbs/snowstorm.png",
   "desc": "A powerful ice technique.",
   "skills": [
    {
     "name": "Snowstorm Ice Release",
     "desc": "(Passive Skill) 10% Chance to Freeze enemies when dealing damage for 1 turn.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.62,
     "y": 28.85
    },
    {
     "name": "Blizzard Slice",
     "desc": "Inflicts Frozen on enemy for 3 turns and instantly Reduce their Max CP by 10%.",
     "damage": "600",
     "cp": "400",
     "cd": "14",
     "x": 15.62,
     "y": 71.43
    },
    {
     "name": "Snow Dragon",
     "desc": "Inflicts 30% Slow (decrease their agility) on enemy for 3 turns and inflict Weaken (reducing their damage dealt) by 50% for 3 turns.",
     "damage": "1000",
     "cp": "370",
     "cd": "14",
     "x": 85.14,
     "y": 71.43
    }
   ]
  },
  {
   "name": "Soul Music",
   "image": "images/soul-music.png",
   "thumb": "thumbs/soul-music.png",
   "desc": "A mysterious melody that resonates with the soul. Its enchanted rhythm disrupts the enemy's spirit while empowering the user with mystical energy.",
   "skills": [
    {
     "name": "Soul Music Rhythm",
     "desc": "(Passive Skill) Increases Dodge rate by 10 % and Max CP by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.26
    },
    {
     "name": "Explosive Soundtrack",
     "desc": "Inflict Restriction on ALL enemy for 3 turns and 30% Disorient for 3 turns.",
     "damage": "1000",
     "cp": "900",
     "cd": "16",
     "x": 15.5,
     "y": 72.44
    },
    {
     "name": "Souls Inner Song",
     "desc": "Remove all debuffs on yourself and gain 50% Reflexes (Increases dodge chance) on self for 3 turns.",
     "damage": "0",
     "cp": "1000",
     "cd": "16",
     "x": 84.5,
     "y": 72.44
    }
   ]
  },
  {
   "name": "Inner Light",
   "image": "images/inner-light.png",
   "thumb": "thumbs/inner-light.png",
   "desc": "A secret technique that awakens the hidden light within the soul, releasing pure spiritual energy to strengthen the user and overcome the darkness.",
   "skills": [
    {
     "name": "Inner Cleansing",
     "desc": "(Passive Skill) Increases Purify chance by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.26
    },
    {
     "name": "Yata no Kagami",
     "desc": "Regeneration 20% on self for 5 turns.",
     "damage": "0",
     "cp": "1000",
     "cd": "16",
     "x": 15.5,
     "y": 72.44
    },
    {
     "name": "Yasakani no Magatama",
     "desc": "Disperse enemy (Remove all positive buffs).",
     "damage": "1000",
     "cp": "1000",
     "cd": "18",
     "x": 84.5,
     "y": 72.44
    }
   ]
  },
  {
   "name": "Thunder Clap",
   "image": "images/thunderclap.png",
   "thumb": "thumbs/thunderclap.png",
   "desc": "A powerful lightning technique that unleashes a deafening thunderclap, striking enemies with a sudden burst of electrical energy.",
   "skills": [
    {
     "name": "Thunder Precision",
     "desc": "(Passive Skill) Increases Critical chance by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.5,
     "y": 29.01
    },
    {
     "name": "Thundersplitter",
     "desc": "Bleeding 200% on enemy for 2 turns.",
     "damage": "900",
     "cp": "1125",
     "cd": "16",
     "x": 15.58,
     "y": 71.83
    },
    {
     "name": "Thunderblast",
     "desc": "Inflict Negate (target is unable to gain buffs) on enemy for 3 turns.",
     "damage": "1000",
     "cp": "600",
     "cd": "18",
     "x": 84.92,
     "y": 71.83
    }
   ]
  },
  {
   "name": "Mangekyou Sharingan",
   "image": "images/mangekyou-sharingan.png",
   "thumb": "thumbs/mangekyou-sharingan.png",
   "desc": "A legendary eye technique awakened through powerful emotions, granting the user extraordinary visual prowess and mysterious abilities beyond the ordinary Sharingan.",
   "skills": [
    {
     "name": "Mirror Pupil",
     "desc": "(Passive Skill) Reflects an incoming genjutsu back at its caster with a 30% chance, and copies an enemy jutsu that strikes you with a 5% chance.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.18
    },
    {
     "name": "Nitoryu: Amaterasu",
     "desc": "Inflict Burn 8% on enemy for 3 turns.",
     "damage": "900",
     "cp": "750",
     "cd": "12",
     "x": 15.5,
     "y": 72.24
    },
    {
     "name": "Fireball Amaterasu",
     "desc": "Inflict 8% Blaze on enemy for 3 turns. This effect is uncleansable.",
     "damage": "1250",
     "cp": "900",
     "cd": "16",
     "x": 84.5,
     "y": 72.24
    }
   ]
  },
  {
   "name": "Eternal Black Flame",
   "image": "images/eternal-black-flame.png",
   "thumb": "thumbs/eternal-black-flame.png",
   "desc": "A forbidden fire technique that summons mysterious black flames, relentlessly burning the target with an inextinguishable blaze.",
   "skills": [
    {
     "name": "Eternal Black Flame Vitality",
     "desc": "(Passive Skill) Increases Max HP by 20%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.62,
     "y": 29.01
    },
    {
     "name": "Hell Eruption",
     "desc": "Inflict Blaze 10% on enemy for 2 turns. This effect cannot be cleansed.",
     "damage": "1185",
     "cp": "415",
     "cd": "10",
     "x": 15.62,
     "y": 71.83
    },
    {
     "name": "Deaths Hand",
     "desc": "Drains enemy current HP by 30% and Current CP by 10%.",
     "damage": "1310",
     "cp": "810",
     "cd": "14",
     "x": 85.14,
     "y": 71.83
    }
   ]
  },
  {
   "name": "Katsuryugan",
   "image": "images/katsuryugan.png",
   "thumb": "thumbs/katsuryugan.png",
   "desc": "The legendary eye of the Chinoike Clan. Grants its wielder powerful genjutsu and the ability to manipulate blood.",
   "skills": [
    {
     "name": "Blood Feast",
     "desc": "(Passive Skill) Lifesteal 30% of damage dealt.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.18
    },
    {
     "name": "Blood Curse",
     "desc": "Regen 33% HP on self for 5 turns and gain 30% Protection for 5 turns.",
     "damage": "0",
     "cp": "370",
     "cd": "10",
     "x": 15.5,
     "y": 72.24
    },
    {
     "name": "Blood Dragons",
     "desc": "Attack all targets to inflict 100% internal Injury for 3 turns. Decrease Purify Active chance by 60% on all enemies for 3 turns.",
     "damage": "1200",
     "cp": "620",
     "cd": "14",
     "x": 84.5,
     "y": 72.24
    }
   ]
  },
  {
   "name": "Crystal Sanctuary",
   "image": "images/crystal-sanctuary.png",
   "thumb": "thumbs/crystal-sanctuary.png",
   "desc": "A secret crystal technique.",
   "skills": [
    {
     "name": "Crystal Bulwark",
     "desc": "(Passive Skill) Increases Max CP by 10%. Reduces Damage Taken by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.34
    },
    {
     "name": "Crystal Dragon",
     "desc": "Stun an enemy for 3 turns.",
     "damage": "400",
     "cp": "400",
     "cd": "13",
     "x": 15.5,
     "y": 72.65
    },
    {
     "name": "Crystal Mirror Explosion",
     "desc": "Remove all buffs from the enemy and Reduce MAX CP by 50%.",
     "damage": "600",
     "cp": "400",
     "cd": "8",
     "x": 84.5,
     "y": 72.65
    }
   ]
  },
  {
   "name": "Tremor",
   "image": "images/tremor.png",
   "thumb": "thumbs/tremor.png",
   "desc": "A powerful earth technique that sends violent vibrations through the ground, shaking enemies off balance with devastating force.",
   "skills": [
    {
     "name": "Seismic Force",
     "desc": "(Passive Skill) Increased damage dealth by 20%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.13,
     "y": 29.01
    },
    {
     "name": "Severe Earthquake",
     "desc": "Inflicts 100% Vulnerable (increasing damage taken) on enemy for 3 turns.",
     "damage": "1125",
     "cp": "565",
     "cd": "16",
     "x": 15.46,
     "y": 71.83
    },
    {
     "name": "Shockwave",
     "desc": "Disperse the enemy and inflict and increases their CP Cost of skills by 100% for 3 turns.",
     "damage": "975",
     "cp": "750",
     "cd": "18",
     "x": 84.29,
     "y": 71.83
    }
   ]
  },
  {
   "name": "Archery",
   "image": "images/archery.png",
   "thumb": "thumbs/archery.png",
   "desc": "A precise combat art that channels energy through the bow, allowing the user to strike enemies from afar with swift and deadly arrows.",
   "skills": [
    {
     "name": "Archery Focus",
     "desc": "(Passive Skill) Increases Accuracy by 15%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.62,
     "y": 29.26
    },
    {
     "name": "Sky Reversal Shot",
     "desc": "Inflicts Negate (Enemy cannot recieve buffs) on enemy for 3 turns. Inflicts Bleeding 75% on enemy for 3 turns.",
     "damage": "1050",
     "cp": "620",
     "cd": "16",
     "x": 15.62,
     "y": 72.44
    },
    {
     "name": "Echo Shots",
     "desc": "Inflict 100% Disorient (Decreases targets critical, dodge, combustion, purify and reactive force) for 3 turns.",
     "damage": "1000",
     "cp": "625",
     "cd": "14",
     "x": 85.14,
     "y": 72.44
    }
   ]
  },
  {
   "name": "Raijin Flash",
   "image": "images/rajin-flash.png",
   "thumb": "thumbs/rajin-flash.png",
   "desc": "A legendary lightning technique that moves with the speed of thunder, striking the enemy in a brilliant flash before they can react.",
   "skills": [
    {
     "name": "Raijin Step",
     "desc": "(Passive Skill) Increases Agility by 15.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.13,
     "y": 29.43
    },
    {
     "name": "Raijin Senbonzakura",
     "desc": "Inflict Internal Injury on enemy for 5 turns and drains 10% HP by.",
     "damage": "1200",
     "cp": "800",
     "cd": "16",
     "x": 15.46,
     "y": 72.86
    },
    {
     "name": "Raijin Rasenshuriken",
     "desc": "Disperse the enemy (Remove all positive active effects).",
     "damage": "1200",
     "cp": "875",
     "cd": "16",
     "x": 84.29,
     "y": 72.86
    }
   ]
  },
  {
   "name": "Abyssal Void",
   "image": "images/abyssal-void.png",
   "thumb": "thumbs/abyssal-void.png",
   "desc": "A forbidden technique that summons the power of the endless abyss, engulfing enemies in a dark void that consumes everything in its path.",
   "skills": [
    {
     "name": "Emptiness",
     "desc": "(Passive Skill) Increases MAX cp by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.13,
     "y": 28.85
    },
    {
     "name": "Black Hole",
     "desc": "Drains 80% of the enemy current CP.",
     "damage": "1125",
     "cp": "1250",
     "cd": "16",
     "x": 15.46,
     "y": 71.43
    },
    {
     "name": "Gravity Ball",
     "desc": "Target one enemy. Put all of that target's skills on cooldown for 5 turns and inflict Prison 10% for 3 turns.",
     "damage": "1200",
     "cp": "750",
     "cd": "16",
     "x": 84.29,
     "y": 71.43
    }
   ]
  },
  {
   "name": "Sunfire",
   "image": "images/sunfire.png",
   "thumb": "thumbs/sunfire.png",
   "desc": "A legendary fire technique that harnesses the scorching power of the sun, engulfing enemies in radiant flames of overwhelming heat.",
   "skills": [
    {
     "name": "Solar Fury",
     "desc": "(Passive Skill) Increases accuracy by 25%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.13,
     "y": 28.85
    },
    {
     "name": "Sunfire",
     "desc": "Inflict 10% Suffocate on enemy for 3 turns.",
     "damage": "800",
     "cp": "400",
     "cd": "10",
     "x": 15.46,
     "y": 71.43
    },
    {
     "name": "Sunburn",
     "desc": "Attack all targets to Burn 10% on all enemy for 3 turns.",
     "damage": "870",
     "cp": "420",
     "cd": "10",
     "x": 84.29,
     "y": 71.43
    }
   ]
  },
  {
   "name": "Storm Cloud",
   "image": "images/stormcloud.png",
   "thumb": "thumbs/stormcloud.png",
   "desc": "A powerful lightning technique that summons dark storm clouds, raining down thunderbolts upon enemies with devastating force.",
   "skills": [
    {
     "name": "Storm Focus",
     "desc": "(Passive Skill) Increases Critical chance by 20%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.18
    },
    {
     "name": "Thunderstorm",
     "desc": "Inflicts Barrier on enemy for 1 turns. Inflicts 50% Numb on enemy for 3 turns.",
     "damage": "900",
     "cp": "1000",
     "cd": "14",
     "x": 15.5,
     "y": 72.24
    },
    {
     "name": "Thundercloud",
     "desc": "Inflicts Disorient (Decrease dodge, accuracy, purify and reactive force) chance by 100% on enemy for 3 turns.",
     "damage": "1125",
     "cp": "1500",
     "cd": "12",
     "x": 84.5,
     "y": 72.24
    }
   ]
  },
  {
   "name": "Snow Release",
   "image": "images/snow-release.png",
   "thumb": "thumbs/snow-release.png",
   "desc": "Awaken an ancient technique - Snow Release. Snow Release specializes in low CP cost skills, modifying target stats and counter attacking with ease.",
   "skills": [
    {
     "name": "Snow Release",
     "desc": "(Passive Skill) Recieve 9% damage as CP instead of HP. (Conversion rate: 1HP = 3CP)",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.0,
     "y": 28.77
    },
    {
     "name": "Snow Release: Gigantic Snowball Barrage",
     "desc": "Stun on enemy for 2 turns.",
     "damage": "300",
     "cp": "200",
     "cd": "18",
     "x": 15.42,
     "y": 71.23
    },
    {
     "name": "Snow Release: Snow Spike Massacre",
     "desc": "Inflicts Frozen on enemy for 3 turns.",
     "damage": "400",
     "cp": "300",
     "cd": "18",
     "x": 84.08,
     "y": 71.23
    }
   ]
  },
  {
   "name": "Gale Release",
   "image": "images/gale-release.png",
   "thumb": "thumbs/gale-release.png",
   "desc": "A super rare combination of Lightning, Wind and Water releases combining into light speed attacks.",
   "skills": [
    {
     "name": "Gale Armor",
     "desc": "(Passive Skill) Increases user's Critical by 15% and Dodge by 15%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.26
    },
    {
     "name": "Gale Laser",
     "desc": "Decrease Purify chance by 60% on all enemies for 3 turns.",
     "damage": "700",
     "cp": "600",
     "cd": "18",
     "x": 15.5,
     "y": 72.44
    },
    {
     "name": "Gale Light Beam",
     "desc": "Increase users damage dealt by 100% for 3 turns. Energize (Increase users Crit, Dodge, Combustion, Reactive and purify) chance 30% for 3 turns.",
     "damage": "0",
     "cp": "600",
     "cd": "18",
     "x": 84.5,
     "y": 72.44
    }
   ]
  },
  {
   "name": "Puppeteering",
   "image": "images/puppeteering.png",
   "thumb": "thumbs/puppeteering.png",
   "desc": "Forbidden technique, used in taking control of foreign objects.",
   "skills": [
    {
     "name": "Chakra Network",
     "desc": "(Passive Skill) Increases purify chance by 12%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.18
    },
    {
     "name": "Steel Puppet - Black Hole",
     "desc": "100% chance to Disperse target's all statuses.",
     "damage": "700",
     "cp": "800",
     "cd": "14",
     "x": 15.5,
     "y": 72.24
    },
    {
     "name": "Gold Puppet - Poison Field",
     "desc": "Inflict 12% Poison on enemy for 5 turns.",
     "damage": "700",
     "cp": "800",
     "cd": "20",
     "x": 84.5,
     "y": 72.24
    }
   ]
  },
  {
   "name": "Sand Burrial",
   "image": "images/sand-burial.png",
   "thumb": "thumbs/sand-burial.png",
   "desc": "An ancient ability, giving user control over sand. Often used in quick counterattacks.",
   "skills": [
    {
     "name": "Sand Armor",
     "desc": "(Passive Skill) Recovers HP of the 25% CP Cost when using a jutsu.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.26
    },
    {
     "name": "Almighty Sand Shield",
     "desc": "Increases users Reactive Force 100% for 5 turns. Recover Hp 10% on self for 5 turns.",
     "damage": "0",
     "cp": "800",
     "cd": "22",
     "x": 15.5,
     "y": 72.44
    },
    {
     "name": "Sand Cage Burrial",
     "desc": "Inflicts 10% Suffocate (reduce max hp & cp) on enemy for 3 turns.",
     "damage": "500",
     "cp": "900",
     "cd": "22",
     "x": 84.5,
     "y": 72.44
    }
   ]
  },
  {
   "name": "Vampire's Touch",
   "image": "images/vampires-touch.png",
   "thumb": "thumbs/vampires-touch.png",
   "desc": "The ultimate ability to control individual blood cells of yourself and the enemy. May lead to extreme bloodlust.",
   "skills": [
    {
     "name": "Vampire's Touch",
     "desc": "(Passive Skill) Restore 10% of damage done as CP.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.0,
     "y": 29.18
    },
    {
     "name": "Secret Vampire's Touch: Blood Drago",
     "desc": "Inflicts 40% Dark Curse on enemy for 3 turns. Decrease Purify chance 40% on enemy for 3 turns.",
     "damage": "400",
     "cp": "800",
     "cd": "14",
     "x": 15.42,
     "y": 72.24
    },
    {
     "name": "Secret Vampire's Touch: Parasite Viru",
     "desc": "Drains 10% of enemy current HP. Inflicts Internal Injury 100% on enemy for 3 turns.",
     "damage": "500",
     "cp": "850",
     "cd": "18",
     "x": 84.08,
     "y": 72.24
    }
   ]
  },
  {
   "name": "Macabre Bone Pulse",
   "image": "images/macabre-bone-pulse.png",
   "thumb": "thumbs/macabre-bone-pulse.png",
   "desc": "This talent bestows upon its user the power to control their own skeletal structure.",
   "skills": [
    {
     "name": "Marrow Shield",
     "desc": "(Passive Skill) Reduce damage taken by 10%.",
     "damage": "0",
     "cp": "0",
     "cd": "0",
     "x": 49.25,
     "y": 29.18
    },
    {
     "name": "Zephyr Bone Barrage",
     "desc": "Inflicts Vulnerable 50% on enemy for 3 turns. Inflicts Disorient 50% on enemy for 3 turns.",
     "damage": "600",
     "cp": "300",
     "cd": "15",
     "x": 15.5,
     "y": 72.24
    },
    {
     "name": "Incursion of the Ivory Spikes",
     "desc": "Inflicts Slow 30% on enemy for 3 turns.",
     "damage": "800",
     "cp": "700",
     "cd": "14",
     "x": 84.5,
     "y": 72.24
    }
   ]
  }
 ],
 "senjutsu": []
};
