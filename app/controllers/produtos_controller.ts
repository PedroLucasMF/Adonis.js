import type { HttpContext } from '@adonisjs/core/http'

import Produto from "../models/produto.js"

export default class ProdutosController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Produto.query().preload('tipo')
                                    .preload('ingrediente')
                                    .paginate(page,perPage)
    }

    async show({params}: HttpContext){
    //    return await Produto.findOrFail(params.id)
        return await Produto.query()
                            .where('id', params.id)
                            .preload('tipo')
                            .preload('ingrediente')
                            .first()

    } 

    async store({request}: HttpContext){
        
        const dados = request.only(['nome', 'preco', 'tamanho', 'tipo_id'])
        
        return await Produto.create(dados)
    } 

    async update({params, request}: HttpContext){
        const item = await Produto.findOrFail(params.id)
        const dados = request.only(['nome', 'preco', 'tamanho', 'tipo_id'])

        item.merge(dados)

        return await item.save()
        
    }

    async destroy({params}: HttpContext){

       const item = await Produto.findOrFail(params.id) 
       item.delete()
    } 
}