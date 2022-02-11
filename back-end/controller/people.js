const axios = require("axios");
const getPeopleById = async (id) => {
  if (!id) {
    throw "Missing id!!!";
  }
  try {
    const data = await axios({
      method: "get",
      url: `https://swapi.dev/api/people/${id}`,
    });
    const response = data.data;
    return {
      name: response.name,
      height: response.height,
      mass: response.mass,
      hair_color: response.hair_color,
      skin_color: response.skin_color,
      gender: response.gender,
      birth_year: response.birth_year,
      homeworld: response.homeworld,
      species: response.species,
      films: response.films,
    };
  } catch (error) {
    throw "wrong id !!";
  }
};
module.exports = getPeopleById;
