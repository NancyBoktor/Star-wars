const axios = require("axios");
const getHomePlanet = async (url) => {
  try {
    const homeWorldData = await axios({
      method: "get",
      url: url,
    });
    const homePlanetData = homeWorldData.data;

    return {
      homeWorld: {
        name: homePlanetData.name,
        terrain: homePlanetData.terrain,
        population: homePlanetData.population,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = getHomePlanet;
