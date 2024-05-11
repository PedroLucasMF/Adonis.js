import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "../models/cliente.js";

export default class ClientesController {

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Cliente.query().paginate(page,perPage)
    }

    async show({params}: HttpContext){
       return await Cliente.findOrFail(params.id)
    } 

    async store({request}: HttpContext){
        
        const dados = request.only(['nome', 'cpf', 'email', 'telefone'])
        
        return await Cliente.create(dados)
    } 

    async update({params, request}: HttpContext){
        const item = await Cliente.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'email', 'telefone'])

        item.merge(dados)

        return await item.save()
        
    }

    async destroy({params}: HttpContext){

       const item = await Cliente.findOrFail(params.id) 
       item.delete()
    } 

}