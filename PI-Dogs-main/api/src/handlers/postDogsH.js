const postDogsC = require("../controllers/postDogsC");

const postDogsH = async (req, res) => {
  const { image, name, height, weight, life, temperament } = req.body;
  try {
    const post = await postDogsC(
      image,
      name,
      height,
      weight,
      life,
      temperament
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postDogsH };
