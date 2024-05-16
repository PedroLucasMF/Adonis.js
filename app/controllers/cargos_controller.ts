import type { HttpContext } from '@adonisjs/core/http'
import Cargo from '../models/cargo.js'

export default class CargosController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Cargo.query().paginate(page,perPage)
    }

    async show({params}: HttpContext){
       return await Cargo.findOrFail(params.id)
    } 

    async store({request}: HttpContext){
        
        const dados = request.only(['nome'])
        
        return await Cargo.create(dados)
    } 

    async update({params, request}: HttpContext){
        const item = await Cargo.findOrFail(params.id)
        const dados = request.only(['nome'])

        item.merge(dados)

        return await item.save()
        
    }

    async destroy({params}: HttpContext){

       const item = await Cargo.findOrFail(params.id) 
       item.delete()
    } 
}