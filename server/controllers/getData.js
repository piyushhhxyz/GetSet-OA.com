const questions = require('../models/questions');

exports.getUniqueCompanies = async (req, res) => {
    try {
        const uniqueCompanies = await questions.distinct('companyName');
        console.log(uniqueCompanies)
        res.json(uniqueCompanies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
