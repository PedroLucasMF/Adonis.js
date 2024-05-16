import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoIngrediente from '../../app/models/produto_ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    return await ProdutoIngrediente.createMany([
      {ingrediente_id: 2,
      produto_id: 2},

      {ingrediente_id: 4,
      produto_id: 1},

      {ingrediente_id: 1,
      produto_id: 1},
      
    ])
  }
}