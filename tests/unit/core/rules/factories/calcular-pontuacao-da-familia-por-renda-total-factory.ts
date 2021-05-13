import { CalcularPontuacaoDaFamiliaPorRendaTotal } from '@/core/rules/calcular-pontuacao-da-familia-por-renda-total'

export function calcularPontuacaoDaFamiliaPorRendaTotalFactory () {
  const pontos = 3
  const idadeMinima = 10
  const idadeMaxima = 100
  const calcularPontuacaoDaFamiliaPorRendaTotal = new CalcularPontuacaoDaFamiliaPorRendaTotal(pontos, idadeMinima, idadeMaxima)

  return {
    pontos,
    calcularPontuacaoDaFamiliaPorRendaTotal
  }
}
