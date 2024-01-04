const dogsByIdC = require("../controllers/dogsByIdC");

const getDogsByIdH = async (req, res) => {
  const { id } = req.params;
  try {
    const dogsId = await dogsByIdC(id);
    res.status(200).json(dogsId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDogsByIdH };
