const axios = require("axios");

const getFilms = async (arr) => {
  if (arr.length === 0) {
    return null;
  }
  try {
    const filmPromise = arr.films.map((film) => axios.get(film));
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
    throw "Something went wrong !!";
  }
};
module.exports = getFilms;
