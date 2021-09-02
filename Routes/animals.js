//All animal API routes here
import express from "express";
import animalModel from "../Models/schema.js";

const router = express.Router();

//get animal data from database
router.get("/", async(req,res)=>{
    try{
        const animals = await animalModel.find({});
        res.status(200).send(animals);
    }catch(err){
        res.status(400).send(err);
    }
});

//to post/create data 
router.post("/", async(req,res)=>{
    try{
        // req.setHeader('Access-Control-Allow-Origin', '*');
        // console.log(req.body);
        const animal = new animalModel(req.body);
        console.log(animal);
        const saveAnimal = await animal.save();
        res.status(201).send(saveAnimal);
    }catch(err){
        res.status(400).send(err);
    }
});

//to get animal by id
router.get("/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const getAnimal = await animalModel.find({_id:`${id}`});
        res.send(getAnimal);
    }catch(err){
        res.status(400).send(err);
    }
});

//To update animal data by id
router.patch("/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const animal = await animalModel.updateOne({_id:`${id}`}, req.body);
        res.send(animal);
    }catch(err){
        res.status(400).send(err);
    }
});

//To delete by id
router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const animal = await animalModel.deleteOne({ _id: `${id}` });
      res.send(animal);
    } catch (e) {
      res.status(400).send(e);
    }
  });
export default router;
