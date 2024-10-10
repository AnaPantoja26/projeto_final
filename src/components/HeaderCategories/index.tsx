import { Fundo, Titulo, SubTitulo } from './styles'
import vetorFundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.svg'

const HeaderCategories = () => (
  <Fundo style={{ backgroundImage: `url(${vetorFundo})` }}>
    <Titulo>Restaurante</Titulo>
    <img src={logo} alt="Logo" />
    <SubTitulo>0 produto(s) no carrinho</SubTitulo>
  </Fundo>
)

export default HeaderCategories
