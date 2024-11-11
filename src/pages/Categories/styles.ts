import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosaEscuro};
  color: ${cores.begeClaro};
  margin-left: 171px;
  width: 1025px;
  height: 344px;
`
export const ModalCard = styled.div`
  display: flex;
`
export const HeaderCard = styled.header`
  margin: 8px 8px 0 1000px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  margin: 8px 24px 32px 32px;
`
export const TituloCard = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    align-text: center:
    height: 21px;
    margin-top: 5px;
    `
export const ParagrafoCard = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  margin-top: 16px;
  width: 656px;
  height: 176px;
  padding-right: 52px;
`
export const BotaoCard = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    align-text: center:
    background-color: ${cores.bege};
    color: ${cores.rosaEscuro};
    text-decoration: none;
    cursor: pointer;
    border: none;
    padding: 4px 7px 4px 7px;
    margin-top: 16px;
    `
