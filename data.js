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
     "desc": "(Passive) Increase Max HP by 10% of Max CP. Recovers 6% CP every turn if CP is less than 50%.",
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
  }
 ],
 "secret": [],
 "senjutsu": []
};
