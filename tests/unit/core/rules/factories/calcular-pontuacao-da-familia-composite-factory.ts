import { CalcularPontuacaoDaFamiliaStub } from '../stubs/calcular-pontuacao-da-familia-stub'
import { CalcularPontuacaoDaFamiliaComposite } from '@/core/rules/calcular-pontuacao-da-familia-composite'

export function calcularPontuacaoDaFamiliaCompositeFactory () {
  const calcularPontuacaoDaFamiliaStub = new CalcularPontuacaoDaFamiliaStub()
  const calcularPontuacaoDaFamiliaComposite = new CalcularPontuacaoDaFamiliaComposite([
    calcularPontuacaoDaFamiliaStub, calcularPontuacaoDaFamiliaStub
  ])

  return {
    calcularPontuacaoDaFamiliaStub,
    calcularPontuacaoDaFamiliaComposite
  }
}
