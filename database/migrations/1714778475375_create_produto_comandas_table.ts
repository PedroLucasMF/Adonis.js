import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produto_comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('comanda_id').unsigned().references('id').inTable('comandas').notNullable()
      table.integer('produto_id').unsigned().references('id').inTable('produtos').notNullable()
      table.integer('quantidade')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}