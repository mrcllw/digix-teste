import { Familia } from '@/core/domain/entities/familia-entity'
import { TipoDeFamilia } from '@/core/domain/enums/tipo-de-familia-enum'
import { ObterFamiliasPorStatusRepository } from '@/core/repositories/obter-familias-por-status-repository'
import { familiaComPretendenteEDependente, familiaComDependente, familiaComRenda } from '../mocks/familia-mock'

export class ObterFamiliasPorStatusStub implements ObterFamiliasPorStatusRepository {
  async obter (status: TipoDeFamilia): Promise<Familia[]> {
    return Promise.resolve([familiaComDependente, familiaComRenda, familiaComPretendenteEDependente])
  }
}
