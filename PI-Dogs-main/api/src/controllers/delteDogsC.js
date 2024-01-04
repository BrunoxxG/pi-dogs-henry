const { Dog } = require("../db");

const deleteDogsC = async (id) => {
  return await Dog.destroy({ where: { id: id } });
};

module.exports = deleteDogsC;
