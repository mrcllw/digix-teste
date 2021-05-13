import { Pessoa } from './pessoa.entity'
import { TipoDeFamilia } from '../enums/tipo-de-familia-enum'

export class Familia {
  _pessoas: Pessoa[]
  _status: TipoDeFamilia

  constructor (status: TipoDeFamilia) {
    this._pessoas = []
    this._status = status
  }

  get pessoas (): Pessoa[] {
    return this._pessoas
  }

  get status (): TipoDeFamilia {
    return this._status
  }

  adicionarPessoa (pessoa: Pessoa): void {
    this._pessoas.push(pessoa)
  }

  obterRendaDaFamilia (): number {
    const somarRenda = (acumulador: number, valorAtual: Pessoa) => acumulador + valorAtual.renda
    return this._pessoas.reduce(somarRenda, 0)
  }

  obterPretendente (): Pessoa | undefined {
    return this._pessoas.find(pessoa => pessoa.ehPretendente())
  }

  obterQuantidadeDeDependentes (): number {
    return this._pessoas.filter(pessoa => pessoa.ehDependente()).length
  }
}
