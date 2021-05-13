import { CalcularPontuacaoDaFamilia } from './calcular-pontuacao-da-familia'
import { Familia } from '../domain/entities/familia-entity'

export class CalcularPontuacaoDaFamiliaPorIdadeDoPretendente implements CalcularPontuacaoDaFamilia {
  pontos: number;
  idadeMinima: number;
  idadeMaxima?: number;

  constructor (pontos: number, idadeMinima: number, idadeMaxima?: number) {
    this.idadeMinima = idadeMinima
    this.idadeMaxima = idadeMaxima
    this.pontos = pontos
  }

  calcular (familia: Familia): number {
    let pontuacao = 0
    const pretendente = familia.obterPretendente()

    if (pretendente && pretendente.obterIdade() >= this.idadeMinima && (this.idadeMaxima ? pretendente.obterIdade() <= this.idadeMaxima : true)) {
      pontuacao = this.pontos
    }

    return pontuacao
  }
}
