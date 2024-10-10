import Produto from '../../models/Produto'
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
          <Cards key={produto.id} infos={produto.infos} />
        ))}
      </List>
    </ListCard>
  </section>
)

export default HeaderCards
