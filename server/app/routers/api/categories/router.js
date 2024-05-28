const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

const { browse, read  } = require("../../../controllers/categoryActions");

// Route to get a list of programs
router.get("/", browse);

router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;