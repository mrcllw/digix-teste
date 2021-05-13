import { Pessoa } from "@/core/domain/entities/pessoa.entity"
import { TipoDePessoa } from "@/core/domain/enums/tipo-de-pessoa-enum"

export const pretendenteComIdadeValida = new Pessoa('Teste', TipoDePessoa.PRETENDENTE, new Date(2020, 4, 12), 0)
export const pretendenteComIdadeInvalida = new Pessoa('Teste', TipoDePessoa.PRETENDENTE, new Date(2000, 4, 12), 0)
export const dependente = new Pessoa('Teste', TipoDePessoa.DEPENDENTE, new Date(), 0)
export const pessoaComRenda = new Pessoa('Teste', TipoDePessoa.DEPENDENTE, new Date(), 100)
export const pessoaSemRenda = new Pessoa('Teste', TipoDePessoa.CONJUGE, new Date(), 0)
