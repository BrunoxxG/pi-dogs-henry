const { Router } = require("express");
const { getTemperamentH } = require("../handlers/getTemperamentH");

const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemperamentH);

module.exports = temperamentsRouter;
