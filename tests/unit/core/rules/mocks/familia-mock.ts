import { Familia } from "@/core/domain/entities/familia-entity"
import { TipoDeFamilia } from "@/core/domain/enums/tipo-de-familia-enum"
import { pretendenteComIdadeInvalida, pretendenteComIdadeValida, dependente, pessoaComRenda, pessoaSemRenda } from "./pessoa-mock"

export const familiaComPretendenteValido = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familiaComPretendenteValido.adicionarPessoa(pretendenteComIdadeValida)

export const familiaComPretendenteInvalido = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familiaComPretendenteInvalido.adicionarPessoa(pretendenteComIdadeInvalida)

export const familiaComDependente = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familiaComDependente.adicionarPessoa(dependente)

export const familiaSemDependente = new Familia(TipoDeFamilia.CADASTRO_VALIDO)

export const familiaComRenda = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familiaComRenda.adicionarPessoa(pessoaComRenda)

export const familiaSemRenda = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
familiaSemRenda.adicionarPessoa(pessoaSemRenda)
