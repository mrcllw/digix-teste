import { Familia } from '@/core/domain/entities/familia-entity'

export interface CalcularPontuacaoDaFamilia {
  calcular (familia: Familia): number
}
