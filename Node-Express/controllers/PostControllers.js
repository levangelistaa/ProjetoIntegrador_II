const PostModel = require('../models/PostModel');

class PostControllers{

    async findAll(request, response) {
        const dados = await PostModel.findAll()
        for(let dado of dados){
            dado.price = dado.price.toFixed(2);
            if(dado.price_with_discount){
                dado.price_with_discount = dado.price_with_discount.toFixed(2);
            }
        }
        return response.json(dados)
    }

    async getById(request, response){
        const id = request.params.id;
        const dados = await PostModel.getById(id);
        dados[0].price = dados[0].price.toFixed(2);
        if(dados[0].price_with_discount){
            dados[0].price_with_discount = dados[0].price_with_discount.toFixed(2);
        }

        return response.json(dados);


    }

    async create(request, response){
        const body = request.body;
        await PostModel.create(body);
        return response.status(201).json({
            message: "Produto cadastrado com sucesso"
        })
    }

    async update(request, response) {
        const id = request.params.id;
        const body = request.body;
        const atualiza = await PostModel.update(id, body);
        return response.json({
            message: "Produto atualizado com sucesso"
        })
    }

    async remove(request, response){
        const id = request.params.id;
        const exclude = await PostModel.remove(id);
        return response.status(200).json({
            message: "Produto removido com sucesso"
        })


    }
}

module.exports = PostControllers;