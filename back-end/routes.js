const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/people/:id", async (req, res) => {
  const id = req.params.id;
  console.log("id-", id);
  try {
    const data = await axios({
      method: "get",
      url: `https://swapi.dev/api/people/${id}`,
    });
    const response = await data.data;
    res.json(response);
  } catch (error) {
    res.send(`Error Message ${error}`);
  }
});

module.exports = router;
