const axios = require("axios");
require("dotenv").config();
const { api_key } = process.env;
const { Dog, Temperament } = require("../db");

const dogsByIdC = async (id) => {
  let dogsById;

  if (id.length > 3) {
    dogsById = await Dog.findByPk(id, { include: Temperament });
    if (!dogsById) {
      throw new Error(`Dogs with ID ${id} not found in the database`);
    }
  } else {
    try {
      const response = await axios(
        `https://api.thedogapi.com/v1/breeds?api_key=${api_key}`
      );
      const dog = response.data.find((dog) => dog.id === Number(id));
      dogsById = {
        name: dog.name,
        id: dog.id,
        image: dog.image.url,
        height: dog.height.metric,
        weight: dog.weight.metric,
        life: dog.life_span,
        temperament: dog.temperament,
      };
    } catch (error) {
      throw new Error(`ID ${id} inexistente`);
    }
  }
  return dogsById;
};
module.exports = dogsByIdC;
