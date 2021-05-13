import { CalcularPontuacaoDaFamiliaPorQuantidadeDeDependente } from '@/core/rules/calcular-pontuacao-da-familia-por-quantidade-de-dependente'

export function calcularPontuacaoDaFamiliaPorQuantidadeDeDependenteFactory () {
  const pontos = 3
  const idadeMinima = 1
  const idadeMaxima = 2
  const calcularPontuacaoDaFamiliaPorQuantidadeDeDependente = new CalcularPontuacaoDaFamiliaPorQuantidadeDeDependente(pontos, idadeMinima, idadeMaxima)

  return {
    pontos,
    calcularPontuacaoDaFamiliaPorQuantidadeDeDependente
  }
}
