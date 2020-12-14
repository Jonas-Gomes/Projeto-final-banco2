const mongoose = require('mongoose');

// Conexão com o mongoDB
mongoose.connect('mongodb://172.19.0.2:27017/alunos', {useNewUrlParser: true, useUnifiedTopology: true});

require('../models/User');

module.exports = mongoose;