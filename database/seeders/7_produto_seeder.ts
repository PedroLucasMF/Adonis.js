import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    return await Produto.createMany([
      {nome: 'X-Tudo',
      preco: 10.50,
      tamanho: 'grande',
      tipoId: 2},

      {nome: 'Hot Dog Frango',
      preco: 7.50,
      tamanho: 'medio',
      tipoId: 2},

      {nome: 'Coca',
      preco: 10.50,
      tamanho: '2L',
      tipoId: 1},
      
      {nome: 'Torre Chopp',
      preco: 30.50,
      tamanho: '5L', 
      tipoId: 1}
      
    ])
  }
}