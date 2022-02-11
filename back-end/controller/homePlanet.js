const axios = require("axios");
const getHomePlanet = async (url) => {
  if (url === "") {
    return null;
  }
  try {
    const homeWorldData = await axios({
      method: "get",
      url: url,
    });
    const homePlanetData = homeWorldData.data;

    return {
      name: homePlanetData.name,
      terrain: homePlanetData.terrain,
      population: homePlanetData.population,
    };
  } catch (error) {
    throw "Something went wrong !!";
  }
};
module.exports = getHomePlanet;
