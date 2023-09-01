const express = require('express');
const router = express.Router();
const { getUniqueCompanies, getCompanyDetails } = require('../controllers/getData');

router.get('/unique-companies', getUniqueCompanies);
router.get('/:companyName', getCompanyDetails);
// router.get('/unique-companie-logos', getUniqueCompanieLogos);

module.exports = router;
