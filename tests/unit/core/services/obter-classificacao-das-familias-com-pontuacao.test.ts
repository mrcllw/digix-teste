import { obterClassificacaoDasFamiliasComPontuacaoFactory } from './factories/obter-classificacao-das-familias-com-pontuacao-factory'
import { familiaComDependente, familiaComRenda, familiaComPretendenteEDependente } from './mocks/familia-mock'

const familias = [familiaComDependente, familiaComRenda, familiaComPretendenteEDependente]

describe('ObterClassificacaoDasFamiliasComPontuacao', () => {
  test('Deve obter a lista de familias', async () => {
    const { obterFamiliasPorStatusStub, obterClassificacaoDasFamiliasComPontuacao } = obterClassificacaoDasFamiliasComPontuacaoFactory()
    const obterFamiliasPorStatusSpy = jest.spyOn(obterFamiliasPorStatusStub, 'obter')
    obterFamiliasPorStatusSpy.mockResolvedValue(familias)

    await obterClassificacaoDasFamiliasComPontuacao.obter()

    const resultadoEsperado = familias
    expect(obterFamiliasPorStatusSpy).toHaveBeenCalled()
    expect(await obterFamiliasPorStatusSpy.mock.results[0].value).toEqual(resultadoEsperado)
  })

  test('Deve pontuar as familias', async () => {
    const { calcularPontuacaoDaFamiliaStub, obterClassificacaoDasFamiliasComPontuacao } = obterClassificacaoDasFamiliasComPontuacaoFactory()
    const calcularPontuacaoDaFamiliaSpy = jest.spyOn(calcularPontuacaoDaFamiliaStub, 'calcular')

    await obterClassificacaoDasFamiliasComPontuacao.obter()

    const resultadoEsperado = 3
    expect(calcularPontuacaoDaFamiliaSpy).toHaveBeenCalledTimes(resultadoEsperado)
  })

  test('Deve retornar a lista de familias ordenadas pela pontuacao', async () => {
    const { obterFamiliasPorStatusStub, calcularPontuacaoDaFamiliaStub, obterClassificacaoDasFamiliasComPontuacao } = obterClassificacaoDasFamiliasComPontuacaoFactory()
    jest.spyOn(obterFamiliasPorStatusStub, 'obter').mockResolvedValue(familias)
    const calcularPontuacaoDaFamiliaSpy = jest.spyOn(calcularPontuacaoDaFamiliaStub, 'calcular')
    calcularPontuacaoDaFamiliaSpy.mockReturnValueOnce(2)
    calcularPontuacaoDaFamiliaSpy.mockReturnValueOnce(1)
    calcularPontuacaoDaFamiliaSpy.mockReturnValueOnce(3)

    const familiasOrdenadas = await obterClassificacaoDasFamiliasComPontuacao.obter()

    const resultadoEsperado = [
      {
        pessoas: familiaComPretendenteEDependente.pessoas,
        status: familiaComPretendenteEDependente.status,
        pontuacao: 3
      },
      {
        pessoas: familiaComDependente.pessoas,
        status: familiaComDependente.status,
        pontuacao: 2
      },
      {
        pessoas: familiaComRenda.pessoas,
        status: familiaComRenda.status,
        pontuacao: 1
      }
    ]
    expect(familiasOrdenadas).toEqual(resultadoEsperado)
  })
})
