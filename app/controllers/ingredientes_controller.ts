import type { HttpContext } from '@adonisjs/core/http'
import Ingrediente from '../models/ingrediente.js'

export default class IngredientesController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Ingrediente.query().paginate(page,perPage)
    }

    async show({params}: HttpContext){
       return await Ingrediente.findOrFail(params.id)
    } 

    async store({request}: HttpContext){
        
        const dados = request.only(['nome', 'descricao'])
        
        return await Ingrediente.create(dados)
    } 

    async update({params, request}: HttpContext){
        const item = await Ingrediente.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao'])

        item.merge(dados)

        return await item.save()
        
    }

    async destroy({params}: HttpContext){

       const item = await Ingrediente.findOrFail(params.id) 
       item.delete()
    } 
}