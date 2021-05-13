export class Helpers {
  static obterIdadePelaData (data: Date) {
    const hoje = new Date()
    let diferencaEntreAnos = hoje.getFullYear() - data.getFullYear()
    const diferencaEntreMeses = hoje.getMonth() - data.getMonth()
    const diaNaoChegou = hoje.getDate() < data.getDate()

    if (diferencaEntreMeses < 0 || (diferencaEntreMeses === 0 && diaNaoChegou)) {
      diferencaEntreAnos--
    }

    return diferencaEntreAnos
  }
}
