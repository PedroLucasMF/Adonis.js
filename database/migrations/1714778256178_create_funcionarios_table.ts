import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cargo_id').unsigned().references('id').inTable('cargos').notNullable()
      table.string('nome')
      table.string('cpf')
      table.string('email')
      table.string('sexo')
      table.string('telefone')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}