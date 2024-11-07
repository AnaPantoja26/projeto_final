import Tag from '../Tag'
import {
  Botao,
  Card,
  CardImg,
  Descricao,
  Infos,
  LogoNota,
  Nota,
  Titulo
} from './styles'
import { Link } from 'react-router-dom'
import nota from '../../assets/images/Page-1.png'

type Props = {
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Cards = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <Card>
    <CardImg src={capa} alt="Restaurante em destaque" />
    <Titulo>
      {titulo}
      <Nota>
        {avaliacao}
        <LogoNota src={nota} alt="avaliação" />
      </Nota>
    </Titulo>
    <Infos>
      {/* <Tag>{destacado}</Tag> */}
      <Tag>{tipo}</Tag>
    </Infos>
    <Descricao>{descricao}</Descricao>
    <Botao>
      <Link to="/categories">Saiba Mais</Link>
    </Botao>
  </Card>
)

export default Cards

//fazer um styles para avaliacao
//perguntar aos tutores como fazer para aparecer e integrar um booleano ao projeto?
