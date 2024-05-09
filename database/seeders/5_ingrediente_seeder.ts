import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    return await Ingrediente.createMany([
      {nome: 'Humburger'},
      {nome: 'Pão'},
      {nome: 'Alface'},
      {nome: 'tomate'},
      {nome: 'molho'}
    ])
  }
}