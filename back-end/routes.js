const express = require("express");
const router = express.Router();
const getHomePlanet = require("./controller/getHomePlanet");
const getPeopleById = require("./controller/getPeopleById");
const getFilms = require("./controller/getFilms");
const getSpecies = require("./controller/getSpecies");

router.get("/people/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const CharacterInfo = await getPeopleById(id);
    console.log(CharacterInfo);
    const homeplanetdata = await getHomePlanet(CharacterInfo.homeworld);
    const speciesData = await getSpecies(CharacterInfo.species);
    const filmsData = await getFilms(CharacterInfo);
    const responseData = {
      ...CharacterInfo,
      homeworld: homeplanetdata,
      films: filmsData,
      species: speciesData,
    };
    console.log("Response", responseData);
    res.json(responseData);
  } catch (error) {
    res.status(404).send(`Error Message ${error}`);
  }
});

module.exports = router;
