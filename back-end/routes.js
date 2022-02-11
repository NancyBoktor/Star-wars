const express = require("express");
const getHomePlanet = require("./controller/homePlanet");
const getPeopleById = require("./controller/people");
const getFilms = require("./controller/films");
const getSpecies = require("./controller/species");
const router = express.Router();

router.get("/people/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const CharacterInfo = await getPeopleById(id);
    const homeplanetdata = await getHomePlanet(CharacterInfo.homeworld);
    const speciesData = await getSpecies(CharacterInfo.species);
    const filmsData = await getFilms(CharacterInfo);
    const responseData = {
      ...CharacterInfo,
      homeworld: homeplanetdata,
      films: filmsData,
      species: speciesData,
    };
    res.json(responseData);
  } catch (error) {
    res.status(404).send(`Error Message ${error}`);
  }
});

module.exports = router;
