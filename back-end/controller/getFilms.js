const axios = require("axios");
const getFilms = async (response) => {
  try {
    const filmPromise = response.films.map((film) => axios.get(film));
    const filmsData = await Promise.all(filmPromise);
    const films = filmsData.map((f) => f.data);
    const reqFilmsData = films.map((fD) => {
      return {
        Title: fD.title,
        Director: fD.director,
        Producers: fD.producer,
        ReleaseDate: fD.release_date,
      };
    });
    return reqFilmsData;
  } catch (error) {
    console.log(`Error Message ${error}`);
  }
  //console.log(reqFilmsData);
};
module.exports = getFilms;
