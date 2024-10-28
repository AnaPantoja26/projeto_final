import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeaderCards from '../../components/HeaderCards'
import Produto from '../../models/Produto'

const cardsHome: Produto[] = [
  {
    id: 1,
    infos: ['Destaque da semana', 'italiana']
  },
  {
    id: 2,
    infos: ['italiana']
  },
  {
    id: 3,
    infos: ['italiana']
  },
  {
    id: 4,
    infos: ['italiana']
  },
  {
    id: 5,
    infos: ['italiana']
  },
  {
    id: 6,
    infos: ['italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <HeaderCards produtos={cardsHome} />
    <Footer />
  </>
)

export default Home
