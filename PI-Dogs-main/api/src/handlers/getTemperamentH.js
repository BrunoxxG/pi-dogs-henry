const { temperamentsBD } = require('../controllers/temperamentsC');
 
const getTemperamentH = async(req,res) => {
  try {
    const response = await temperamentsBD() 
    res.status(200).json(response)
  } catch (error) {
res.status(400).json({ error: error.message })    
  }
};

module.exports = { getTemperamentH };
