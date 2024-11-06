import Tag from '../Tag'
import { Botao, Card, CardImg, Descricao, Infos, Nota, Titulo } from './styles'
import { Link } from 'react-router-dom'

export type Props = {
  title: string
  tipos: string[]
  avaliacao?: number
  descricao: string
  capa: string
}

const Cards = ({ title, tipos, avaliacao, descricao, capa }: Props) => (
  <Card>
    <CardImg src={capa} alt="Prato de macarrão" />
    <Infos>
      {tipos.map((tipo) => (
        <Tag key={tipo}>{tipo}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Nota>{avaliacao}</Nota>
    <Descricao>{descricao}</Descricao>
    <Botao>
      <Link to="/categories">Saiba Mais</Link>
    </Botao>
  </Card>
)

export default Cards
