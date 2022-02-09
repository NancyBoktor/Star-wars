import axios from "axios";

const getCharacterbyId = async (id) => {
  try {
    return await axios({
      method: "get",
      url: `http://localhost:3001/api/people/${id}`,
    });
  } catch (error) {
    console.log(error);
  }
};
export default getCharacterbyId;
