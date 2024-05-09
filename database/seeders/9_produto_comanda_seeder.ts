import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoComanda from '../../app/models/produto_comanda.js'

export default class extends BaseSeeder {
  async run() {
    return await ProdutoComanda.createMany([
      {quantidade: 3,
      comanda_id: 1,
      produto_id: 2},

      {quantidade: 2,
        comanda_id: 2,
        produto_id: 3},

        {quantidade: 1,
          comanda_id: 3,
          produto_id: 1},
      
    ])
  }
}