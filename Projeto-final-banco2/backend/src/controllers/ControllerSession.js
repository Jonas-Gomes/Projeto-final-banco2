
const redis = require('../database/db_redis');

module.exports = {
    async newSession(request, response){
        const usuario = request.params.usuarios;
        const senha = request.params.senha;
        
        const object = {
           idusuario,
           senha
        }

        //set redis
        redis.setex(usuario,senha,3600, JSON.stringify(object), (err,res) => {
            if(err) throw err;
            console.log(res);

            return response.json(res);
        });
    },

}