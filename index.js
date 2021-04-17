const fetch = require('node-fetch');

const settings = {
  hiScores: {
    osrs: {
      skills: ['Overall','Attack','Defence','Strength','Hitpoints','Ranged','Prayer','Magic','Cooking','Woodcutting','Fletching','Fishing','Firemaking','Crafting','Smithing','Mining','Herblore','Agility','Thieving','Slayer','Farming','Runecrafting','Hunter','Construction'],
      url: name => `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${name}`
    },
    rs3: {
      skills: ['Overall','Attack','Defence','Strength','Constitution','Ranged','Prayer','Magic','Cooking','Woodcutting','Fletching','Fishing','Firemaking','Crafting','Smithing','Mining','Herblore','Agility','Thieving','Slayer','Farming','Runecrafting','Hunter','Construction','Summoning','Dungeoneering','Divination','Invention','Archaeology'],
      url: name => `https://secure.runescape.com/m=hiscore/index_lite.ws?player=${name}`
    }
  }
}

const hiScores = async (game, playerName) => {
  const res = await fetch(settings.hiScores[game].url(playerName));
  if(res.status !== 200) return null;
  const skillData = (await res.text()).split('\n');
  const stats = {};
  const skills = settings.hiScores[game].skills;
  for(let i = 0; i < skills.length; i++){
    const [ rank, level, experience ] = skillData[i].split(',');
    stats[skills[i]] = { rank: parseInt(rank), level: parseInt(level), experience: parseInt(experience) };
  }
  return stats;
}

module.exports = { hiScores }