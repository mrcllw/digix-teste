import { Familia } from "@/core/domain/entities/familia-entity";
import { FamiliaDto } from "../dtos/familia-dto";

export class FamiliaMapper {
  static toDto (familia: Familia): FamiliaDto {
    return {
      pessoas: familia.pessoas,
      status: familia.status,
      pontuacao: 0
    }
  }
}