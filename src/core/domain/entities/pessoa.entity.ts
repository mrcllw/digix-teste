import { TipoDePessoa } from '../enums/tipo-de-pessoa-enum'
import { Helpers } from '@/utils/helpers'

export class Pessoa {
  _nome: string
  _tipo: TipoDePessoa
  _dataDeNascimento: Date
  _renda: number

  constructor (nome: string, tipo: TipoDePessoa, dataDeNascimento: Date, renda: number) {
    this._nome = nome
    this._tipo = tipo
    this._dataDeNascimento = dataDeNascimento
    this._renda = renda
  }

  get nome (): string {
    return this._nome
  }

  get tipo (): TipoDePessoa {
    return this._tipo
  }

  get dataDeNascimento (): Date {
    return this._dataDeNascimento
  }

  get renda (): number {
    return this._renda
  }

  obterIdade (): number {
    return Helpers.obterIdadePelaData(this._dataDeNascimento)
  }

  ehPretendente (): boolean {
    return this._tipo === TipoDePessoa.PRETENDENTE
  }

  ehDependente (): boolean {
    return this._tipo === TipoDePessoa.DEPENDENTE
  }
}
