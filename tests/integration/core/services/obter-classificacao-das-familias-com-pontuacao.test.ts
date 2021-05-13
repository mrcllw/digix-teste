import { obterClassificacaoDasFamiliasComPontuacaoFactory } from "./factories/obter-classificacao-das-familias-com-pontuacao-factory"

describe.only('ObterClassificacaoDasFamiliasComPontuacao', () => {
  test('Deve retornar lista de familias ordenadas pela pontuação', async () => {
    const obterClassificacaoDasFamiliasComPontuacao = obterClassificacaoDasFamiliasComPontuacaoFactory()

    const listaDeFamilias = await obterClassificacaoDasFamiliasComPontuacao.obter()

    expect(
      listaDeFamilias.every((familia, index) => (index === 0 || familia.pontuacao <= listaDeFamilias[index - 1].pontuacao))
    ).toBe(true)
  })
})
