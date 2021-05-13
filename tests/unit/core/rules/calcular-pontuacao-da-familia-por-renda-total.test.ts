import { calcularPontuacaoDaFamiliaPorRendaTotalFactory } from './factories/calcular-pontuacao-da-familia-por-renda-total-factory'
import { Pessoa } from '@/core/domain/entities/pessoa.entity'
import { TipoDePessoa } from '@/core/domain/enums/tipo-de-pessoa-enum'
import { Familia } from '@/core/domain/entities/familia-entity'
import { TipoDeFamilia } from '@/core/domain/enums/tipo-de-familia-enum'

describe('CalcularPontuacaoDaFamiliaPorRendaTotal', () => {
  test('Deve retornar a pontuação se atender critérios', () => {
    const { pontos, calcularPontuacaoDaFamiliaPorRendaTotal } = calcularPontuacaoDaFamiliaPorRendaTotalFactory()
    const pessoa = new Pessoa('Teste', TipoDePessoa.DEPENDENTE, new Date(), 100)
    const familia = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
    familia.adicionarPessoa(pessoa)

    const pontuacao = calcularPontuacaoDaFamiliaPorRendaTotal.calcular(familia)

    const resultadoEsperado = pontos
    expect(pontuacao).toBe(resultadoEsperado)
  })

  test('Deve retornar 0 se não atender critérios', () => {
    const { calcularPontuacaoDaFamiliaPorRendaTotal } = calcularPontuacaoDaFamiliaPorRendaTotalFactory()
    const pessoa = new Pessoa('Teste', TipoDePessoa.CONJUGE, new Date(), 0)
    const familia = new Familia(TipoDeFamilia.CADASTRO_VALIDO)
    familia.adicionarPessoa(pessoa)

    const pontuacao = calcularPontuacaoDaFamiliaPorRendaTotal.calcular(familia)

    const resultadoEsperado = 0
    expect(pontuacao).toBe(resultadoEsperado)
  })
})
