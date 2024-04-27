// import type { HttpContext } from '@adonisjs/core/http'

import Produto from "../models/produto.js"

export default class ProdutosController {
    async index(){
        return await Produto.all()
    }
    async store(){
        return [3,2,1]
    }
}