const axios = require("axios");
require("dotenv").config();
const { api_key } = process.env;
const { Dog, Temperament } = require("../db");

let allDogs = [];

const allDogsC = async (name) => {
  const allDogsBdd = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name", "id"],
      through: {
        attributes: [],
      },
    },
  });

  const petition = (
    await axios(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`)
  ).data;
  const allDogsApi = petition.map((dog) => {
    return {
      id: dog.id,
      image: dog.image.url,
      name: dog.name,
      height: dog.height.metric,
      weight: dog.weight.metric,
      life: dog.life_span,
      temperament: dog.temperament,
    };
  });

  allDogs = [...allDogsBdd, ...allDogsApi];

  if (name) {
    const dogsByName = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );
    if (dogsByName.length) {
      return dogsByName.slice(0, 8);
    } else {
      throw new Error(`No match found for name: ${name}`);
    }
  }
  return allDogs;
};
module.exports = allDogsC;
