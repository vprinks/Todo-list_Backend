const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todolist")
.then(()=> console.log("database connected"))
.catch((error)=>console.log(err.message));