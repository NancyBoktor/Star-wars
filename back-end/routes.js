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
    console.log(error);
  }
});

module.exports = router;
