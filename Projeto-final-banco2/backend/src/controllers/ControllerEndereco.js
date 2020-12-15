const Endereco = require('../models/Endereco');

module.exports = {
    async create(request, response){
        const {matricula,cidade,estado,rua,bairro} = request.body;

        Endereco.create({
            matricula,
            cidade,
            estado,
            rua,
            bairro
        });

        return response.json({matricula}); 
    },

    async list(request, response){
        await Endereco.findAll().then((endereco => {
            return response.json(endereco);
        }));
    },
    
    async delete(request, response){
        Endereco.destroy({where: {matricula: request.params.id}});
        
        then(response.json({endereco}));
    },
    
    async update(request, response){
        const {cidade,estado,rua,bairro} = request.body;

        await Endereco.update({
            cidade,
            estado,
            rua,
            bairro
        });

        return response.json({matricula}); 
    }

}