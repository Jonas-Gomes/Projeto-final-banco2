const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    matricula:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    senha:{
        type: String,
        required: true,
    },
});

mongoose.model('User',UserSchema);
