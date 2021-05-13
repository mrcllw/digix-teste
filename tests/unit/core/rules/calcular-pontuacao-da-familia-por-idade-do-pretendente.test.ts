import { calcularPontuacaoDaFamiliaPorIdadeDoPretendenteFactory } from './factories/calcular-pontuacao-da-familia-por-idade-do-pretendente-factory'
import { Pessoa } from '@/core/domain/entities/pessoa.entity'
import { TipoDePessoa } from '@/core/domain/enums/tipo-de-pessoa-enum'
import { Familia } from '@/core/domain/entities/familia-entity'
import { TipoDeFamilia } from '@/core/domain/enums/tipo-de-familia-enum'

describe('CalcularPontuacaoDaFamiliaPorIdadeDoPretendente', () => {
  test('Deve retornar a pontuação se atender critérios', () => {
    const { pontos, calcularPontuacaoDaFamiliaPorIdadeDoPretendente } = calcularPontuacaoDaFamiliaPorIdadeDoPretendenteFactory()
    const pessoa = new Pessoa('Teste', TipoDePessoa.PRETENDENTE, new Date(2020, 4, 12), 0)
    const familia = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
    familia.adicionarPessoa(pessoa)

    const pontuacao = calcularPontuacaoDaFamiliaPorIdadeDoPretendente.calcular(familia)

    const resultadoEsperado = pontos
    expect(pontuacao).toBe(resultadoEsperado)
  })

  test('Deve retornar 0 se não atender critérios', () => {
    const { calcularPontuacaoDaFamiliaPorIdadeDoPretendente } = calcularPontuacaoDaFamiliaPorIdadeDoPretendenteFactory()
    const pessoa = new Pessoa('Teste', TipoDePessoa.PRETENDENTE, new Date(2000, 4, 12), 0)
    const familia = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
    familia.adicionarPessoa(pessoa)

    const pontuacao = calcularPontuacaoDaFamiliaPorIdadeDoPretendente.calcular(familia)

    const resultadoEsperado = 0
    expect(pontuacao).toBe(resultadoEsperado)
  })
})
