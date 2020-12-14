const mongoose = require('../database/index.js');
const User = mongoose.model('User');


module.exports = {
    
    
    // List
    async list(request,response){
        const users = await User.find();

        return response.json(users);
    },

    // Buscar por id
    async listById(request, response){
        const user = await User.findById(request.params.id);

        return response.json(user);
    },
    // Create
    async create(request,response){
        const newUser = await User.create(request.body);

        return response.json(newUser);
    },
    // Update
    async update(request,response){
        const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true});

        return response.json(user);
    },
    
    // Delete
    async delete(request,response){
        const user = await User.findByIdAndDelete(request.params.id);

        return response.send();
    }
}