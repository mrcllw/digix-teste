import { TipoDeFamilia } from '../domain/enums/tipo-de-familia-enum'
import { Familia } from '../domain/entities/familia-entity'

export interface ObterFamiliasPorStatusRepository {
  obter (status: TipoDeFamilia): Promise<Familia[]>
}
