import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeaderCards from '../../components/HeaderCards'

export type Produto = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao?: number
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

const cardsHome: Produto[] = []

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
      <HeaderCards produtos={cardsHome} />
      <Footer />
    </>
  )
}

export default Home
