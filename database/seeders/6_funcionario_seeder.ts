import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
    return await Funcionario.createMany([
      {nome: 'Hugo',
      cpf: '143.456.789-00',
      email: 'HugoJobs@gmail.com',
      telefone: '1928-8674',
      sexo: 'M',
      cargo_id: 1},

      {nome: 'Yago',
      cpf: '124.456.789-10',
      email: 'TheYagoGod@gmail.com',
      telefone: '9228-8674',
      sexo: 'M',
      cargo_id: 2},

      {nome: 'Eduarda',
      cpf: '123.476.709-20',
      email: 'DuDaChef@gmail.com',
      telefone: '9928-8604',
      sexo: 'F',
      cargo_id: 3},

      {nome: 'Cleber',
      cpf: '123.456.889-30',
      email: 'ClebinhoDoGrau@gmail.com',
      telefone: '9028-8679',
      sexo: 'M',
      cargo_id: 4}
    ])
  }
}