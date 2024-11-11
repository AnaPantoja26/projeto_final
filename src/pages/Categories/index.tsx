import Footer from '../../components/Footer'
import HeaderCategories from '../../components/HeaderCategories'
import Hero from '../../components/Hero'
import {
  Modal,
  ModalContent,
  Image,
  TituloCard,
  ParagrafoCard,
  ModalCard,
  HeaderCard,
  BotaoCard
} from './styles'
import pizza3 from '../../assets/images/pizza marguerita 3.png'
import fechar from '../../assets/images/close.png'
import { useEffect, useState } from 'react'
import { CardCategories } from '../../components/CardsCategories/styles'

type Produto = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
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

const Categorias = () => {
  const [cardsCategories, setCardsCategories] = useState<Produto[]>([])
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  // const [buttonText, setButtonText] = useState('Adicionar ao carrinho')

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/')
      .then((res) => res.json())
      .then((res) => setCardsCategories(res))
  }, [])

  return (
    <>
      <HeaderCategories />
      <Hero produtos={cardsCategories} />
      {/* <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <HeaderCard>
            <img
              src={fechar}
              alt="Fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </HeaderCard>
          <ModalCard>
            <div>
              <Image src={pizza3} alt="Pizza de Marguerita" />
            </div>
            <div>
              <TituloCard>Pizza Marguerita</TituloCard>
              <ParagrafoCard>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br></br>
                <br></br>
                Serve: de 2 a 3 pessoas
              </ParagrafoCard>
              <BotaoCard>Adicionar ao carrinho - R$ 60,90</BotaoCard>
            </div>
          </ModalCard>
        </ModalContent>
        <div className="overlay"></div>
      </Modal> */}
      <CardCategories />
      <Footer />
    </>
  )
}

export default Categorias
