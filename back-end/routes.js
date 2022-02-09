const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/people/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await axios.get(`https://swapi.dev/api/people/${id}`);
    const response = await data.data;
    res.json(response);
  } catch (error) {
    res.send(`Error Message ${error}`);
  }
});

// router.get("/peopleNames", async (req, res) => {
//   try {
//     const data = await axios.get("https://swapi.dev/api/people/");
//     const response = await data.data.results;
//     const peopleNames = await response.map((p) => {
//       return { name: p.name, id: response.indexOf(p) + 1 };
//     });
//     res.json(peopleNames);
//   } catch (error) {
//     res.send(`Error Message ${error}`);
//   }
// });
module.exports = router;
