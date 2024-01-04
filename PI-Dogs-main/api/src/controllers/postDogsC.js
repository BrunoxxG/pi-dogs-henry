const { Dog, Temperament } = require("../db");

const postDogsC = async (image, name, height, weight, life, temperament) => {
  const newDog = await Dog.create({ name, image, height, weight, life });

  const temperaments = await Temperament.findAll({
    where: { name: temperament },
  });

  const temperamentName = temperaments[0].name;

  await newDog.addTemperament(temperaments);
  return await Dog.findByPk(newDog.id, {
    include: {
      model: Temperament,
      attributes: ["id", "name"],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = postDogsC;
