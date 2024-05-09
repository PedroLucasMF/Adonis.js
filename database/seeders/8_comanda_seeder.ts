import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comanda from '../../app/models/comanda.js'

export default class extends BaseSeeder {
  async run() {
    return await Comanda.createMany([
      {nome: 'Hugo',
      mesa: '2-A',
      cliente_id: 1,
      funcionario_id: 1,
      pagamento_id: 1},

      {nome: 'Jose',
      mesa: '1-B',
      cliente_id: 2,
      funcionario_id:2,
      pagamento_id: 2},

      {nome: 'Maria',
      mesa: '3-C',
      cliente_id: 3,
      funcionario_id: 3,
      pagamento_id: 3}
    ])
  }
}