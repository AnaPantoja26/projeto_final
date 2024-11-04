import { Produto } from '../../pages/Home'
import Cards from '../Cards'
import { List, ListCard } from './styles'

export type Props = {
  produtos: Produto[]
}

const HeaderCards = ({ produtos }: Props) => (
  <section>
    <ListCard>
      <List>
        {produtos.map((produto) => (
          <Cards
            key={produto.id}
            titulo={produto.titulo}
            destacado={produto.destacado}
            tipo={produto.tipo}
            avaliacao={produto.avaliacao}
            descricao={produto.descricao}
            capa={produto.capa}
            cardapio={produto.cardapio}
          />
        ))}
      </List>
    </ListCard>
  </section>
)

export default HeaderCards
