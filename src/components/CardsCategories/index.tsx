import {
  Botao,
  CardCategories,
  Colunas,
  Imagem,
  Paragrafo,
  Titulo
} from './styles'

type Props = {
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco?: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const CardsCategories = ({ cardapio }: Props) => {
  return (
    <>
      <div>
        {cardapio.map((item) => (
          <div key={item.id}>
            <Colunas>
              <CardCategories>
                <Imagem src={item.foto} />
                <Titulo>{item.nome}</Titulo>
                <Paragrafo>{item.descricao}</Paragrafo>
                <Botao>Saiba Mais</Botao>
              </CardCategories>
            </Colunas>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardsCategories
