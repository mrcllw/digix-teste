import { calcularPontuacaoDaFamiliaPorQuantidadeDeDependenteFactory } from './factories/calcular-pontuacao-da-familia-por-quantidade-de-dependente-factory'
import { Pessoa } from '@/core/domain/entities/pessoa.entity'
import { TipoDePessoa } from '@/core/domain/enums/tipo-de-pessoa-enum'
import { Familia } from '@/core/domain/entities/familia-entity'
import { TipoDeFamilia } from '@/core/domain/enums/tipo-de-familia-enum'

describe('CalcularPontuacaoDaFamiliaPorQuantidadeDeDependente', () => {
  test('Deve retornar a pontuação se atender critérios', () => {
    const { pontos, calcularPontuacaoDaFamiliaPorQuantidadeDeDependente } = calcularPontuacaoDaFamiliaPorQuantidadeDeDependenteFactory()
    const pessoa = new Pessoa('Teste', TipoDePessoa.DEPENDENTE, new Date(), 0)
    const familia = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
    familia.adicionarPessoa(pessoa)

    const pontuacao = calcularPontuacaoDaFamiliaPorQuantidadeDeDependente.calcular(familia)

    const resultadoEsperado = pontos
    expect(pontuacao).toBe(resultadoEsperado)
  })

  test('Deve retornar 0 se não atender critérios', () => {
    const { calcularPontuacaoDaFamiliaPorQuantidadeDeDependente } = calcularPontuacaoDaFamiliaPorQuantidadeDeDependenteFactory()
    const familia = new Familia(TipoDeFamilia.CADASTRO_VALIDO)

    const pontuacao = calcularPontuacaoDaFamiliaPorQuantidadeDeDependente.calcular(familia)

    const resultadoEsperado = 0
    expect(pontuacao).toBe(resultadoEsperado)
  })
})
