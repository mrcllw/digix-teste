import { ObterFamiliasPorStatusRepository } from "@/core/repositories/obter-familias-por-status-repository"
import { Familia } from "@/core/domain/entities/familia-entity"
import { familia1, familia2, familia3, familia4 } from "./familia-mock"
import { TipoDeFamilia } from "@/core/domain/enums/tipo-de-familia-enum"

export class ObterFamiliasPorStatusMock implements ObterFamiliasPorStatusRepository {
  familia: Familia[] = [familia1, familia2, familia3, familia4]

  obter(status: TipoDeFamilia): Promise<Familia[]> {
    const familias = this.familia.filter(familia => familia.status === status)
    return Promise.resolve(familias)
  }
}