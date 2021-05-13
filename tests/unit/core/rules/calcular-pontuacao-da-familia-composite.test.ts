import { CalcularPontuacaoDaFamiliaComposite } from '@/core/rules/calcular-pontuacao-da-familia-composite'
import { calcularPontuacaoDaFamiliaCompositeFactory } from './factories/calcular-pontuacao-da-familia-composite-factory'
import { Familia } from '@/core/domain/entities/familia-entity'
import { TipoDeFamilia } from '@/core/domain/enums/tipo-de-familia-enum'

const familia = new Familia(TipoDeFamilia.CADASTRO_VALIDO)

describe('CalcularPontuacaoDaFamiliaComposite', () => {
  test('Deve somar as pontuações de cada calculo injetado', () => {
    const { calcularPontuacaoDaFamiliaStub, calcularPontuacaoDaFamiliaComposite } = calcularPontuacaoDaFamiliaCompositeFactory()
    const resultadoPrimeiroCalculo = 1
    const resultadoSegundoCalculo = 3
    const calcularPontuacaoDaFamiliaSpy = jest.spyOn(calcularPontuacaoDaFamiliaStub, 'calcular')
    calcularPontuacaoDaFamiliaSpy.mockReturnValueOnce(resultadoPrimeiroCalculo)
    calcularPontuacaoDaFamiliaSpy.mockReturnValueOnce(resultadoSegundoCalculo)

    const pontuacao = calcularPontuacaoDaFamiliaComposite.calcular(familia)

    const resultadoEsperado = resultadoPrimeiroCalculo + resultadoSegundoCalculo
    expect(pontuacao).toBe(resultadoEsperado)
  })

  test('Deve retornar 0 se não possuir calculo injetado', () => {
    const calcularPontuacaoDaFamilia = new CalcularPontuacaoDaFamiliaComposite([])

    const pontuacao = calcularPontuacaoDaFamilia.calcular(familia)

    const resultadoEsperado = 0
    expect(pontuacao).toBe(resultadoEsperado)
  })
})
