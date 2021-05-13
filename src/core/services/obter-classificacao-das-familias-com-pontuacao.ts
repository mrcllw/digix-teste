import { ObterClassificacaoDasFamiliasComPontuacaoUseCase } from '@/core/domain/use-cases/obter-classificacao-das-familias-com-pontuacao-use-case'
import { ObterFamiliasPorStatusRepository } from '../repositories/obter-familias-por-status-repository'
import { CalcularPontuacaoDaFamilia } from '@/core/rules/calcular-pontuacao-da-familia'
import { TipoDeFamilia } from '../domain/enums/tipo-de-familia-enum'
import { Familia } from '../domain/entities/familia-entity'
import { FamiliaDto } from './dtos/familia-dto'
import { FamiliaMapper } from './mappers/familia-mapper'

export class ObterClassificacaoDasFamiliasComPontuacao implements ObterClassificacaoDasFamiliasComPontuacaoUseCase {
  constructor (
    private readonly obterFamiliasPorStatusRepository: ObterFamiliasPorStatusRepository,
    private readonly calcularPontuacaoDaFamilia: CalcularPontuacaoDaFamilia
  ) {}

  async obter (): Promise<FamiliaDto[]> {
    const familias = await this.obterFamiliasPorStatusRepository.obter(TipoDeFamilia.CADASTRO_VALIDO)

    const formatarFamilia = (familia: Familia) => {
      const familiaDto = FamiliaMapper.toDto(familia)
      familiaDto.pontuacao = this.calcularPontuacaoDaFamilia.calcular(familia)
      return familiaDto
    }

    const ordenarFamiliasPorPontuacao = (familiaA: FamiliaDto, familiaB: FamiliaDto) => {
      return familiaA.pontuacao > familiaB.pontuacao ? -1 : 1
    }

    return familias
      .map(formatarFamilia)
      .sort(ordenarFamiliasPorPontuacao)
  }
}
