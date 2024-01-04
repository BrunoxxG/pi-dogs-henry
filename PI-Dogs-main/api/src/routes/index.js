const { Router } = require("express");

const dogsRouter = require("./routeDogs");
const temperamentsRoute = require("./routeTemperaments");

const router = Router();

router.use("/dogs", dogsRouter);
router.use("/temperaments", temperamentsRoute);

module.exports = router;
