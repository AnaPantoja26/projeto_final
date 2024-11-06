import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeaderCards from '../../components/HeaderCards'

type Produto = {
  id: number
  titulo: string
  destaque: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [cardsHome, setCardsHome] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((res) => res.json())
      .then((res) => setCardsHome(res))
  }, [])

  return (
    <>
      <Header />
      <HeaderCards />
      <Footer />
    </>
  )
}

export default Home
