import styled from 'styled-components'
import { cores } from '../../styles'

export const CardCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${cores.rosaEscuro};
  max-width: 300px;
  height: 338px;
  margin-top: 32px;
`
export const Imagem = styled.img`
  padding: 8px;
  width: 304px;
  height: 167px;
`
export const Titulo = styled.h2`
  color: ${cores.bege};
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;
`
export const Paragrafo = styled.p`
  color: ${cores.bege};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
`

export const Botao = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosaEscuro};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  align-text: center;
  border: none;
  cursor: pointer:
  text-decoration: none;
  width: 304px;
  height: 24px;
  margin: 0 8px;
`
