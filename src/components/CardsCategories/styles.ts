import styled from 'styled-components'
import { cores } from '../../styles'

export const Colunas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1366px;

  margin-left: 171px;
  margin-right: 1171px;
  margin-top: 56px;
  margin-bottom: 120px;
`

export const CardCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${cores.rosaEscuro};
  height: 340px;
  margin-top: 32px;
  margin-right: 32px;
`
export const Imagem = styled.img`
  padding: 8px;
  width: 316px;
  height: 167px;
  // object-fit: cover;
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
  padding: 0 8px;
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
  text-decoration: none;
  width: 304px;
  height: 24px;
  margin: 0 8px;

  transition: background-color 0.5s;
  &:hover {
    background-color: ${cores.bege};
    cursor: pointer;
  }
`
