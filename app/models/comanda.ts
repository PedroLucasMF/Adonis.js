import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa:string

  @column()
  declare nome:string

  @column()
  declare clienteId:Number

  @column()
  declare funcionarioId:Number

  @column()
  declare pagamentoId:Number

  @column()
  declare dt_Pag: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}