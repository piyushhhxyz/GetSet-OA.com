const express = require('express');
const router = express.Router();
const { getUniqueCompanies } = require('../controllers/getData');

router.get('/unique-companies', getUniqueCompanies);
// router.get('/unique-companie-logos', getUniqueCompanieLogos);

module.exports = router;
