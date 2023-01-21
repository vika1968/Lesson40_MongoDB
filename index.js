"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
mongoose_1.default.set('strictQuery', true);
//const mongo_uri = "mongodb+srv://Gili-Admin:vVRkGyPKCvDxPnK1@cluster0.7mbcr.mongodb.net/JulyDBTest?retryWrites=true&w=majority"
const mongo_uri = "mongodb+srv://Vika_Admin:GyKrKZ6ypumDub9w@cluster0.vao2ixu.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default.connect(mongo_uri).then(res => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log("at mongoose.connect:");
    console.log(err.message);
});
// import userRoutes from "./API/users/usersRoutes";
const usersRoutes_1 = __importDefault(require("./API/users/usersRoutes"));
app.use("/api/users", usersRoutes_1.default);
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
