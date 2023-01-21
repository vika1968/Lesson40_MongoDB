import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { 
    type: String,
    requierd: true,
    unique: true 
},
  password: String,
});

const UserModel = mongoose.model('users', UserSchema); // users ( kak table) - collection v Baze

export default UserModel;

//mongodb+srv://Vika_Admin:<password>@cluster0.vao2ixu.mongodb.net/?retryWrites=true&w=majority

//<password> Tut zapisat' moy PW - yana2002
  
//mongodb.net/? -- posle ? - napizat'  nazvanie 