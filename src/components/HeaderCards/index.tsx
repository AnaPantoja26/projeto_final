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

// import Produto from '../../models/Produto'
// import Cards from '../Cards'
// import { List, ListCard } from './styles'

// export type Props = {
//   produtos: Produto[]
// }

// const HeaderCards = ({ produtos }: Props) => (
//   <section>
//     <ListCard>
//       <List>
//         {produtos.map((produto) => (
//           <Cards key={produto.id} infos={produto.infos} />
//         ))}
//       </List>
//     </ListCard>
//   </section>
// )

// export default HeaderCards
