import { calcularPontuacaoDaFamiliaPorQuantidadeDeDependenteFactory } from './factories/calcular-pontuacao-da-familia-por-quantidade-de-dependente-factory'
import { familiaComDependente, familiaSemDependente } from './mocks/familia-mock'

describe('CalcularPontuacaoDaFamiliaPorQuantidadeDeDependente', () => {
  test('Deve retornar a pontuação se atender critérios', () => {
    const { pontos, calcularPontuacaoDaFamiliaPorQuantidadeDeDependente } = calcularPontuacaoDaFamiliaPorQuantidadeDeDependenteFactory()

    const pontuacao = calcularPontuacaoDaFamiliaPorQuantidadeDeDependente.calcular(familiaComDependente)

    const resultadoEsperado = pontos
    expect(pontuacao).toBe(resultadoEsperado)
  })

  test('Deve retornar 0 se não atender critérios', () => {
    const { calcularPontuacaoDaFamiliaPorQuantidadeDeDependente } = calcularPontuacaoDaFamiliaPorQuantidadeDeDependenteFactory()

    const pontuacao = calcularPontuacaoDaFamiliaPorQuantidadeDeDependente.calcular(familiaSemDependente)

    const resultadoEsperado = 0
    expect(pontuacao).toBe(resultadoEsperado)
  })
})
