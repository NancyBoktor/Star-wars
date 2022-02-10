const axios = require("axios");
const getSpecies = async (arr) => {
  if (arr.length === 0) {
    return null;
  }
  try {
    const data = arr.map((url) =>
      axios({
        method: "get",
        url: url,
      })
    );
    const speciesPromise = await Promise.all(data);
    //console.log("hhhhhhhhh", speciesPromise);
    const speciesDataArr = speciesPromise.map((s) => s.data);
    const speciesData = speciesDataArr.map((sD) => {
      return {
        name: sD.name,
        average_lifespan: sD.average_lifespan,
        classification: sD.classification,
        language: sD.language,
      };
    });
    return speciesData;
  } catch (error) {
    console.log(error);
  }
};
module.exports = getSpecies;
