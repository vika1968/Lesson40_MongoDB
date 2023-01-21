"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        requierd: true,
        unique: true
    },
    password: String,
});
const UserModel = mongoose_1.default.model('users', UserSchema); // users ( kak table) - collection v Baze
exports.default = UserModel;
//mongodb+srv://Vika_Admin:<password>@cluster0.vao2ixu.mongodb.net/?retryWrites=true&w=majority
//<password> Tut zapisat' moy PW - yana2002
//mongodb.net/? -- posle ? - napizat'  nazvanie 
