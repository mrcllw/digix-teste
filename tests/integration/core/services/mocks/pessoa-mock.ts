import { Pessoa } from "@/core/domain/entities/pessoa.entity"
import { TipoDePessoa } from "@/core/domain/enums/tipo-de-pessoa-enum"

export const pessoaPretendente = new Pessoa('Teste', TipoDePessoa.PRETENDENTE, new Date(2020, 4, 12), 0)
export const pessoaDependente = new Pessoa('Teste', TipoDePessoa.DEPENDENTE, new Date(), 0)
export const pessoaRenda = new Pessoa('Teste', TipoDePessoa.CONJUGE, new Date(), 500)
