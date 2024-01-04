const deleteDogsC = require("../controllers/delteDogsC");

const deleteDogsH = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteDogs = await deleteDogsC(id);
    res.status(200).json(deleteDogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { deleteDogsH };