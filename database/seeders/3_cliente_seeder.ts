import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
    return await Cliente.createMany([
      {nome: 'José',
      cpf: '123.456.789-00',
      email: 'josereidelas@gmail.com',
      telefone: '9928-8674'},

      {nome: 'Hugo',
      cpf: '123.456.789-10',
      email: 'huginho09@gmail.com',
      telefone: '9028-8674'},

      {nome: 'Maria',
      cpf: '123.456.789-20',
      email: 'mariaPrincesa@gmail.com',
      telefone: '9928-8604'},

      {nome: 'Cleber',
      cpf: '123.456.789-30',
      email: 'ClebiGod@gmail.com',
      telefone: '9028-8679'}
    ])
  }
}