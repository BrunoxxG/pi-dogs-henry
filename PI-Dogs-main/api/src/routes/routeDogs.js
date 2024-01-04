const { Router } = require("express");

const { getAllDogsH } = require("../handlers/getAllDogsH");
const { getDogsByIdH } = require("../handlers/getDogsByIdH");
const { postDogsH } = require("../handlers/postDogsH");
const { deleteDogsH } = require("../handlers/deleteDogsH");

const dogsRouter = Router();

dogsRouter.get("/", getAllDogsH);
dogsRouter.get("/:id", getDogsByIdH);
dogsRouter.post("/", postDogsH);
dogsRouter.delete("/:id", deleteDogsH);

module.exports = dogsRouter;
