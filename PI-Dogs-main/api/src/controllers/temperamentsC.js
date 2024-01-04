const axios = require("axios");
const { Temperament } = require("../db");
require("dotenv").config();
const { api_key } = process.env;

const temperamentsBD = async () => {
  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds?api_key=${api_key}`
  );
  const temperamentSet = new Set();
  data.forEach((temp) => {
    if (temp.temperament) {
      const reaccion = temp.temperament.split(",").map((t) => t.trim());
      reaccion.forEach((humor) => {
        temperamentSet.add(humor);
      });
    }
  });
  const temperamentosAPI = Array.from(temperamentSet);
  const tempEnBD = await Temperament.findAll();
  if (tempEnBD.length === 0) {
    temperamentosAPI.map((animo) => {
      Temperament.findOrCreate({ where: { name: animo } });
    });
    console.log("Temperamentos cargados a la Base De Datos");
  } else {
    console.log("Ya estan cargados los temperamentos");
  }
  return temperamentosAPI;
};

module.exports = { temperamentsBD };
