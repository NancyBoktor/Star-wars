const express = require("express");
const getHomePlanet = require("./controller/homePlanet");
const getPeopleById = require("./controller/people");
const getFilms = require("./controller/films");
const getSpecies = require("./controller/species");
const router = express.Router();

router.get("/people/:id", async (req, res) => {
  const id = req.params.id;

  try {
    /* --- Get render-info for the character by id --- */
    const CharacterInfo = await getPeopleById(id);

    /* --- Get render-info for the character homePlanet --- */
    const homeplanetdata = await getHomePlanet(CharacterInfo.homeworld);

    /* --- Get render-info for the character species --- */
    const speciesData = await getSpecies(CharacterInfo.species);

    /* --- Get render-info for the character films --- */
    const filmsData = await getFilms(CharacterInfo);

    /* --- send response with the total render-info --- */
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
