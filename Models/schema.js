import mongoose from "mongoose";

//creating schema for animals data
const animalSchema = new mongoose.Schema({
    name:{
       type: String,
       required:true,
    },
    url:{
       type: String,
       required:true,
    },
});

//creating the collection
const createAnimal = new mongoose.model("Animals", animalSchema);

export default createAnimal;