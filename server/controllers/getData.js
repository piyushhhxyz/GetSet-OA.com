const questions = require('../models/questions');

exports.getUniqueCompanies = async (req, res) => {
    try {
        const uniqueCompanies = await questions.aggregate([
            {
                $group: {
                    _id: "$companyName",
                    companyLogo: { $first: "$companyPhoto" }
                }
            }
        ]);
    
        res.status(200).json(uniqueCompanies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getCompanyDetails = async(req,res) => {
    const { companyName } = req.params;
    try {
        const companyDetails = await questions.find({ companyName });
        console.log(companyDetails)
        res.status(200).json(companyDetails);
    } catch (error) {
        console.error('Error fetching company details:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
