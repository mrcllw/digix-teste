import { calcularPontuacaoDaFamiliaPorIdadeDoPretendenteFactory } from './factories/calcular-pontuacao-da-familia-por-idade-do-pretendente-factory'
import { familiaComPretendenteValido, familiaComPretendenteInvalido } from './mocks/familia-mock'

describe('CalcularPontuacaoDaFamiliaPorIdadeDoPretendente', () => {
  test('Deve retornar a pontuação se atender critérios', () => {
    const { pontos, calcularPontuacaoDaFamiliaPorIdadeDoPretendente } = calcularPontuacaoDaFamiliaPorIdadeDoPretendenteFactory()

    const pontuacao = calcularPontuacaoDaFamiliaPorIdadeDoPretendente.calcular(familiaComPretendenteValido)

    const resultadoEsperado = pontos
    expect(pontuacao).toBe(resultadoEsperado)
  })

  test('Deve retornar 0 se não atender critérios', () => {
    const { calcularPontuacaoDaFamiliaPorIdadeDoPretendente } = calcularPontuacaoDaFamiliaPorIdadeDoPretendenteFactory()

    const pontuacao = calcularPontuacaoDaFamiliaPorIdadeDoPretendente.calcular(familiaComPretendenteInvalido)

    const resultadoEsperado = 0
    expect(pontuacao).toBe(resultadoEsperado)
  })
})
