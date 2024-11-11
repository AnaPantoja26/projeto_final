import { Imagem, Titulo, SubTitulo } from './styles'
// import bannerImg from '../../assets/images/Hero.png'
import Produto from '../../models/Produto'

export type Props = {
  produtos: Produto[]
}

const Hero = ({ produtos }: Props) => (
  <div>
    {produtos.map((produto) => (
      <div key={produto.id}>
        <Imagem style={{ backgroundImage: `url(${produto.capa})` }}>
          <Titulo>{produto.tipo}</Titulo>
          <SubTitulo>{produto.titulo}</SubTitulo>
        </Imagem>
      </div>
    ))}
  </div>
)

export default Hero
