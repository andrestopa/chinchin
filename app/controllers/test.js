const Test = require('../models/test');

module.exports = {
    getAllData: async (req, res) => {
        try {
            const allData = await Test.find({});
            res.status(200).json({
                data: allData
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "failed",
                err: error
            });
        }
    }
}

