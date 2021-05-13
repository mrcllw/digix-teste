import { CalcularPontuacaoDaFamilia } from './calcular-pontuacao-da-familia'
import { Familia } from '../domain/entities/familia-entity'

export class CalcularPontuacaoDaFamiliaComposite implements CalcularPontuacaoDaFamilia {
  constructor (
    private readonly calcularPontuacoesDaFamilia: CalcularPontuacaoDaFamilia[]
  ) {}

  calcular (familia: Familia): number {
    let pontuacao = 0

    for (const calcularPontuacaoDaFamilia of this.calcularPontuacoesDaFamilia) {
      pontuacao += calcularPontuacaoDaFamilia.calcular(familia)
    }

    return pontuacao
  }
}
