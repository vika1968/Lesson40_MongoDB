import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

mongoose.set('strictQuery', true)

//const mongo_uri = "mongodb+srv://Gili-Admin:vVRkGyPKCvDxPnK1@cluster0.7mbcr.mongodb.net/JulyDBTest?retryWrites=true&w=majority"
const mongo_uri = "mongodb+srv://Vika_Admin:GyKrKZ6ypumDub9w@cluster0.vao2ixu.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongo_uri).then(res => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log("at mongoose.connect:")
    console.log(err.message)
})

// import userRoutes from "./API/users/usersRoutes";
import userRoutes from "./API/users/usersRoutes";
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  console.log(`server is active on port : ${PORT}`);
});

// npm init  ---creating a package.json file
// npm i -g nodemon
// npm i -g ts-node
//npm i express @types/node @types/express

// npm i mongoose   -  sifriya svyazi megdu MongoDB i Node.js

// sozdaem file gitignore v glavnom dereve papki.  Pri pull - vse bistree rabptaet
//Pri skachivanii (clone) s gita, zapustit' npm i ( sveryaet s depenndensies i ustanavlivaet vse neobxodimoe)