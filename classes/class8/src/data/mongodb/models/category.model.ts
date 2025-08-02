import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

});

export const CategoryModel = mongoose.model("Category",categorySchema)