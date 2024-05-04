import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: Number
  
  @column()
  declare nome:string

  @column()
  declare cpf:string

  @column()
  declare email:string

  @column()
  declare telefone:string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}