import { calcularPontuacaoDaFamiliaPorRendaTotalFactory } from './factories/calcular-pontuacao-da-familia-por-renda-total-factory'
import { familiaComRenda, familiaSemRenda } from './mocks/familia-mock'

describe('CalcularPontuacaoDaFamiliaPorRendaTotal', () => {
  test('Deve retornar a pontuação se atender critérios', () => {
    const { pontos, calcularPontuacaoDaFamiliaPorRendaTotal } = calcularPontuacaoDaFamiliaPorRendaTotalFactory()

    const pontuacao = calcularPontuacaoDaFamiliaPorRendaTotal.calcular(familiaComRenda)

    const resultadoEsperado = pontos
    expect(pontuacao).toBe(resultadoEsperado)
  })

  test('Deve retornar 0 se não atender critérios', () => {
    const { calcularPontuacaoDaFamiliaPorRendaTotal } = calcularPontuacaoDaFamiliaPorRendaTotalFactory()

    const pontuacao = calcularPontuacaoDaFamiliaPorRendaTotal.calcular(familiaSemRenda)

    const resultadoEsperado = 0
    expect(pontuacao).toBe(resultadoEsperado)
  })
})
