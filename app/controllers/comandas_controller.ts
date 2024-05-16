import type { HttpContext } from '@adonisjs/core/http'
import Comanda from '../models/comanda.js'

export default class ComandasController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Comanda.query().paginate(page,perPage)
    }

    async show({params}: HttpContext){
       return await Comanda.findOrFail(params.id)
    } 

    async store({request}: HttpContext){
        
        const dados = request.only(['nome', 'mesa', 'funcionarioId', 'clienteId', 'pagamentoId'])
        
        return await Comanda.create(dados)
    } 

    async update({params, request}: HttpContext){
        const item = await Comanda.findOrFail(params.id)
        const dados = request.only(['nome', 'mesa', 'funcionarioId', 'clienteId', 'pagamentoId'])

        item.merge(dados)

        return await item.save()
        
    }

    async destroy({params}: HttpContext){

       const item = await Comanda.findOrFail(params.id) 
       item.delete()
    } 
}