import { Familia } from "@/core/domain/entities/familia-entity"
import { TipoDeFamilia } from "@/core/domain/enums/tipo-de-familia-enum"
import { pessoaPretendente, pessoaDependente, pessoaRenda } from '../mocks/pessoa-mock'

export const familia1 = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familia1.adicionarPessoa(pessoaPretendente)
familia1.adicionarPessoa(pessoaDependente)

export const familia2 = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familia2.adicionarPessoa(pessoaDependente)
familia2.adicionarPessoa(pessoaDependente)

export const familia3 = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familia3.adicionarPessoa(pessoaRenda)

export const familia4 = new Familia(TipoDeFamilia.CADASTRO_INCOMPLETO)
familia4.adicionarPessoa(pessoaPretendente)
familia4.adicionarPessoa(pessoaDependente)
familia4.adicionarPessoa(pessoaRenda)
