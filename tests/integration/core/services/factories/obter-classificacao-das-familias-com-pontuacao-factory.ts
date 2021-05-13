import { CalcularPontuacaoDaFamiliaComposite } from "@/core/rules/calcular-pontuacao-da-familia-composite"
import { CalcularPontuacaoDaFamiliaPorIdadeDoPretendente } from "@/core/rules/calcular-pontuacao-da-familia-por-idade-do-pretendente"
import { CalcularPontuacaoDaFamiliaPorQuantidadeDeDependente } from "@/core/rules/calcular-pontuacao-da-familia-por-quantidade-de-dependente"
import { CalcularPontuacaoDaFamiliaPorRendaTotal } from "@/core/rules/calcular-pontuacao-da-familia-por-renda-total"
import { ObterClassificacaoDasFamiliasComPontuacao } from "@/core/services/obter-classificacao-das-familias-com-pontuacao"
import { ObterFamiliasPorStatusMock } from "../mocks/obter-familias-por-status-mock"

export function obterClassificacaoDasFamiliasComPontuacaoFactory() {
  const calcularPontuacaoDaFamiliaPorIdadeDoPretendente = new CalcularPontuacaoDaFamiliaPorIdadeDoPretendente(5, 1, 2)
    const calcularPontuacaoDaFamiliaPorQuantidadeDeDependente = new CalcularPontuacaoDaFamiliaPorQuantidadeDeDependente(3, 1, 2)
    const calcularPontuacaoDaFamiliaPorRendaTotal = new CalcularPontuacaoDaFamiliaPorRendaTotal(2, 100, 1000)

    const obterFamiliasPorStatusMock = new ObterFamiliasPorStatusMock()
    const calcularPontuacaoDaFamiliaComposite = new CalcularPontuacaoDaFamiliaComposite([
      calcularPontuacaoDaFamiliaPorIdadeDoPretendente,
      calcularPontuacaoDaFamiliaPorQuantidadeDeDependente,
      calcularPontuacaoDaFamiliaPorRendaTotal
    ])

    const obterClassificacaoDasFamiliasComPontuacao = new ObterClassificacaoDasFamiliasComPontuacao(
      obterFamiliasPorStatusMock,
      calcularPontuacaoDaFamiliaComposite
    )

    return obterClassificacaoDasFamiliasComPontuacao
}