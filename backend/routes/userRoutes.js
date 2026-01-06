const express = require("express");
const router = express.Router();
const { createUser, getUsers, fetchAndStoreUsers } = require("../controllers/userController");

router.post("/create", createUser);
router.get("/list", getUsers);
router.post("/fetch-and-store",fetchAndStoreUsers)

module.exports = router;
