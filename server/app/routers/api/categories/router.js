const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

const { categoryList, selectCategorie  } = require("../../../controllers/categoryActions");

// Route to get a list of programs
router.get("/", categoryList);

router.get("/:id", selectCategorie);

/* ************************************************************************* */

module.exports = router;