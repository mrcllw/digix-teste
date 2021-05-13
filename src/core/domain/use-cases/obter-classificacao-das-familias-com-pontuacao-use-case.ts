import { FamiliaDto } from '../../services/dtos/familia-dto'

export interface ObterClassificacaoDasFamiliasComPontuacaoUseCase {
  obter (): Promise<FamiliaDto[]>
}
