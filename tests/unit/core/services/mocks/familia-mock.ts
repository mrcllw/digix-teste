import { Familia } from '@/core/domain/entities/familia-entity'
import { TipoDeFamilia } from '@/core/domain/enums/tipo-de-familia-enum'
import { pessoaPretendente, pessoaDependente, pessoaRenda } from './pessoa-mock'

export const familiaComPretendenteEDependente = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familiaComPretendenteEDependente.adicionarPessoa(pessoaPretendente)
familiaComPretendenteEDependente.adicionarPessoa(pessoaDependente)

export const familiaComDependente = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familiaComDependente.adicionarPessoa(pessoaDependente)

export const familiaComRenda = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familiaComRenda.adicionarPessoa(pessoaRenda)

export const familiaInvalida = new Familia(TipoDeFamilia.CADASTRO_INCOMPLETO)
