import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormaPagamento from '../../app/models/forma_pagamento.js'

export default class extends BaseSeeder {
  async run() {
    return await FormaPagamento.createMany([
      {nome: 'Debito'},
      {nome: 'Credito'},
      {nome: 'Pix'},
      {nome: 'Dinheiro'}
    ])
  }
}