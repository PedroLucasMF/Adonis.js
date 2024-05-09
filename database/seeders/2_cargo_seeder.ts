import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cargo from '../../app/models/cargo.js'

export default class extends BaseSeeder {
  async run() {
    return await Cargo.createMany([
      {nome: 'Vendedor'},
      {nome: 'Garçom'},
      {nome: 'Entregador'},
      {nome: 'Gerente'}
    ])
  }
}