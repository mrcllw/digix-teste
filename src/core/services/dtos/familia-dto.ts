import { Pessoa } from '../../domain/entities/pessoa.entity'
import { TipoDeFamilia } from '../../domain/enums/tipo-de-familia-enum'

export type FamiliaDto = {
  pessoas: Pessoa[]
  status: TipoDeFamilia
  pontuacao: number
}
