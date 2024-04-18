const Category = require("../models/categoryModel")

const categoryCtrl = {
    getCategories:async (req, res) => {
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (error) {
            return res.status(500).json({msg: err.message})
        }
    },

    createCategory:async (req, res) => {
        try {
            res.json("check admin success")
        } catch (error) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = categoryCtrl