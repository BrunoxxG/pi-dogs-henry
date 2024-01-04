const allDogsC = require("../controllers/allDogsC");

const getAllDogsH = async (req, res) => {
  const { name } = req.query;
  try {
    const allDogs = await allDogsC(name);
    res.status(200).json(allDogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllDogsH };
