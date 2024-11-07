import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  margin-top: 56px;
  margin-right: 80px;
  width: 472px;
  height: auto;
  border: 1px solid ${cores.rosaEscuro};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardImg = styled.img`
  width: 470px;
  height: 217px;
`

export const Titulo = styled.h3`
  color: ${cores.rosaEscuro};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 7px;
  margin-top: 8px;
  display: flex;
`
export const Descricao = styled.p`
  color: ${cores.rosaEscuro};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
  margin-top: 17px;
`
export const Botao = styled.button`
  background-color: ${cores.rosaEscuro};
  margin-left: 7px;
  border: none;
  margin-top: 16px;
  padding: 4px;
  cursor: pointer;
  margin-bottom: 8px;
  a {
    text-decoration: none;
    color: ${cores.bege};
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Nota = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: auto;
  margin-right: 8px;
  display: flex;
  align-items: center;
`
export const LogoNota = styled.img`
  margin-left: 8px;
`
