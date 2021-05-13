import { CalcularPontuacaoDaFamilia } from '@/core/rules/calcular-pontuacao-da-familia'
import { Familia } from '@/core/domain/entities/familia-entity'

export class CalcularPontuacaoDaFamiliaStub implements CalcularPontuacaoDaFamilia {
  pontuacaoTotal: number = 0

  calcular (familia: Familia): number {
    return this.pontuacaoTotal
  }
}
