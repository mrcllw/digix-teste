import { CalcularPontuacaoDaFamiliaPorIdadeDoPretendente } from '@/core/rules/calcular-pontuacao-da-familia-por-idade-do-pretendente'

export function calcularPontuacaoDaFamiliaPorIdadeDoPretendenteFactory () {
  const pontos = 3
  const idadeMinima = 1
  const idadeMaxima = 2
  const calcularPontuacaoDaFamiliaPorIdadeDoPretendente = new CalcularPontuacaoDaFamiliaPorIdadeDoPretendente(pontos, idadeMinima, idadeMaxima)

  return {
    pontos,
    calcularPontuacaoDaFamiliaPorIdadeDoPretendente
  }
}
