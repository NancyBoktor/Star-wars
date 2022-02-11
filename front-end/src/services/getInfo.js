import axios from "axios";

const getCharacterbyId = async (id) => {
  return await axios({
    method: "get",
    url: `${process.env.REACT_APP_API}/people/${id}`,
  });
};

export default getCharacterbyId;
