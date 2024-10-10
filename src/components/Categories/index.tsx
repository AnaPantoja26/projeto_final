import { CardCategories, Imagem, Titulo, Paragrafo, Botao } from './styles'
import pizza from '../../assets/images/pizza marguerita.png'

const Categories = () => (
  <>
    <CardCategories>
      <Imagem src={pizza} alt="Pizza de Marguerita" />
      <Titulo>Pizza Marguerita</Titulo>
      <Paragrafo>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Paragrafo>
      <Botao>Adicionar ao carrinho</Botao>
    </CardCategories>
  </>
)

export default Categories
