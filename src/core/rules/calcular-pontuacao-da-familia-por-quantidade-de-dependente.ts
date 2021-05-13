import { CalcularPontuacaoDaFamilia } from './calcular-pontuacao-da-familia'
import { Familia } from '../domain/entities/familia-entity'

export class CalcularPontuacaoDaFamiliaPorQuantidadeDeDependente implements CalcularPontuacaoDaFamilia {
  pontos: number;
  quantidadeMinima: number;
  quantidadeMaxima?: number;

  constructor (pontos: number, quantidadeMinima: number, quantidadeMaxima?: number) {
    this.quantidadeMinima = quantidadeMinima
    this.quantidadeMaxima = quantidadeMaxima
    this.pontos = pontos
  }

  calcular (familia: Familia): number {
    let pontuacao = 0
    const quantidadeDeDependentes = familia.obterQuantidadeDeDependentes()
    const familiaEstaNaQuantidadeMinimaDeDependentes = quantidadeDeDependentes >= this.quantidadeMinima
    const fmailiaEstaNaQuantidadeMaximaDeDependentes = this.quantidadeMaxima ? quantidadeDeDependentes <= this.quantidadeMaxima : true

    if (familiaEstaNaQuantidadeMinimaDeDependentes && fmailiaEstaNaQuantidadeMaximaDeDependentes) {
      pontuacao = this.pontos
    }

    return pontuacao
  }
}
