import { ObterFamiliasPorStatusStub } from '../stubs/obter-familias-por-status-stub'
import { CalcularPontuacaoDaFamiliaStub } from '../stubs/calcular-pontuacao-da-familia-stub'
import { ObterClassificacaoDasFamiliasComPontuacao } from '@/core/services/obter-classificacao-das-familias-com-pontuacao'

export function obterClassificacaoDasFamiliasComPontuacaoFactory () {
  const obterFamiliasPorStatusStub = new ObterFamiliasPorStatusStub()
  const calcularPontuacaoDaFamiliaStub = new CalcularPontuacaoDaFamiliaStub()
  const obterClassificacaoDasFamiliasComPontuacao = new ObterClassificacaoDasFamiliasComPontuacao(
    obterFamiliasPorStatusStub,
    calcularPontuacaoDaFamiliaStub
  )

  return {
    obterFamiliasPorStatusStub,
    calcularPontuacaoDaFamiliaStub,
    obterClassificacaoDasFamiliasComPontuacao
  }
}
