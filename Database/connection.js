import mongoose from "mongoose";

//connect your database here
mongoose.connect(
    "mongodb://localhost:27017/animals",{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>{
    console.log("Connected to database.");
}).catch(()=>{
    console.log("Database connection failed");
});