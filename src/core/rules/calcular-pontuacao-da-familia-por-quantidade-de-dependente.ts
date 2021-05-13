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

    if (quantidadeDeDependentes >= this.quantidadeMinima && (this.quantidadeMaxima ? quantidadeDeDependentes <= this.quantidadeMaxima : true)) {
      pontuacao = this.pontos
    }

    return pontuacao
  }
}
