import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    return await Produto.createMany([
      {nome: 'X-Tudo',
      preco: 10.50,
      tamanho: 'grande',
      tipo_id: 2},

      {nome: 'Hot Dog Frango',
      preco: 7.50,
      tamanho: 'medio',
      tipo_id: 2},

      {nome: 'Coca',
      preco: 10.50,
      tamanho: '2L',
      tipo_id: 1},
      
      {nome: 'Torre Chopp',
      preco: 30.50,
      tamanho: '5L', 
      tipo_id: 1}
      
    ])
  }
}