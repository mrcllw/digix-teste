import { CalcularPontuacaoDaFamilia } from './calcular-pontuacao-da-familia'
import { Familia } from '../domain/entities/familia-entity'

export class CalcularPontuacaoDaFamiliaPorRendaTotal implements CalcularPontuacaoDaFamilia {
  pontos: number;
  rendaMinima: number;
  rendaMaxima: number;

  constructor (pontos: number, rendaMinima: number, rendaMaxima: number) {
    this.rendaMinima = rendaMinima
    this.rendaMaxima = rendaMaxima
    this.pontos = pontos
  }

  calcular (familia: Familia): number {
    let pontuacao = 0
    const rendaDaFamilia = familia.obterRendaDaFamilia()
    const familiaEstaNoValorMinimoDeRenda = rendaDaFamilia >= this.rendaMinima
    const familiaEstaNoValorMaximoDeRenda = rendaDaFamilia <= this.rendaMaxima

    if (familiaEstaNoValorMinimoDeRenda && familiaEstaNoValorMaximoDeRenda) {
      pontuacao = this.pontos
    }

    return pontuacao
  }
}
