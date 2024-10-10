import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import HeaderCategories from '../../components/HeaderCategories'
import Hero from '../../components/Hero'
import { Colunas } from './styles'

const Categorias = () => (
  <>
    <HeaderCategories />
    <Hero />
    <Colunas>
      <Categories />
      <Categories />
      <Categories />
      <Categories />
      <Categories />
      <Categories />
    </Colunas>
    <Footer />
  </>
)

export default Categorias
