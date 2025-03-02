const UsersModel = require('../models/UsersModel');

class UsersController{

    async findAll(request, response) {
        const dados = await UsersModel.findAll()
        return response.json(dados)
    }

    async getById(request, response){
        const id = request.params.id;
        const dados = await UsersModel.getById(id);
        return response.json(dados);

    }

    async create(request, response){
        const body = request.body;
        await UsersModel.create(body);
        return response.status(201).json({
            message: "Usuário cadastrado com sucesso"
        })
    }

    async update(request, response) {
        const id =  request.params.id;
        const body = request.body;
        const atualiza = await UsersModel.update(id, body);
        return response.json({
            message: "Usuário atualizado com sucesso"
        })
    }

    async remove(request, response){
        const id = request.params.id;
        const exclude = await UsersModel.remove(id);
        return response.status(200).json({
            message: "Usuário removido com sucesso"
        })


    }
}

module.exports = UsersController;