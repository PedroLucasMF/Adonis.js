import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoIngrediente from '../../app/models/produto_ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    return await ProdutoIngrediente.createMany([
      {ingredientes_id: 2,
      produto_id: 2},

      {ingredientes_id: 4,
      produto_id: 1},

      {ingredientes_id: 1,
      produto_id: 1},
      
    ])
  }
}