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

    if (pretendente) {
      const idadeDoPretendente = pretendente.obterIdade()
      const pretendenteEstaEntreIdadeMinima = idadeDoPretendente >= this.idadeMinima
      const pretendenteEstaEntreIdadeMaxima = this.idadeMaxima ? idadeDoPretendente <= this.idadeMaxima : true

      if (pretendenteEstaEntreIdadeMinima && pretendenteEstaEntreIdadeMaxima) {
        pontuacao = this.pontos
      }
    }

    return pontuacao
  }
}
