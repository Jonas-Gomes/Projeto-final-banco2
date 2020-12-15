
const redis = require('../database/db_redis');

module.exports = {
    async newSession(request, response){
        
        const {matricula, senha} = request.body;
        const object = {
           matricula: matricula,
           senha: senha
        }

        //set redis
        await redis.set("teste", JSON.stringify(object), (err,res) => {
            if(err) throw err;
            console.log(res);

            return response.json(res);
        });
    },

}