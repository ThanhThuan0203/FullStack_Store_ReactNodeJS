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
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg:"this category already exist"})

            const newCategory = new Category({name})

            await newCategory.save();
            return res.json({msg:"created category successfully"})
            res.json("check admin success")
        } catch (error) {
            return res.status(500).json({msg: err.message})
        }
    },

    deleteCategory:async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg:"category deleted successfull"})
        } catch (error) {
            return res.status(500).json({msg: err.message})
        }
    },

    updateCategory:async (req, res) => {
        try {
            const {name} = req.body

            await Category.findOneAndUpdate({_id: req.params.id}, {name})
            
            res.json({msg:"category updated successfull"})
        } catch (error) {
            return res.status(500).json({msg: err.message})
        }
    },


}

module.exports = categoryCtrl