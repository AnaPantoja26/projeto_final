class Produto {
  id?: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco?: number
    id?: number
    nome: string
    descricao: string
    porcao: string
  }

  constructor(
    id: number,
    titulo: string,
    destacado: string,
    tipo: string,
    avaliacao: string,
    descricao: string,
    capa: string,
    cardapio: {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ) {
    this.id = id
    this.titulo = titulo
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.cardapio = cardapio
  }
}
export default Produto
