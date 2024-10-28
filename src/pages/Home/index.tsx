import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HeaderCards from '../../components/HeaderCards'
import Footer from '../../components/Footer'

export type Produto = {
  id?: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco?: number
    id?: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [cardsHome, setCardsHome] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((res) => res.json())
      .then((res) => setCardsHome(res))
  })

  return (
    <>
      <Header />
      <HeaderCards produtos={cardsHome} />
      <Footer />
    </>
  )
}

export default Home
