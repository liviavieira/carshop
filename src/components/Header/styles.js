import styled, { keyframes } from 'styled-components'

import headerBg from '../../assets/headerBg.gif'

export const scrollArrow = keyframes`
	0% {
    transform: translatex(0)
  }
  50% {
    transform: translatex(1rem)
  }
  100% {
    transform: translatex(0)
  }
`

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  color: #fff;
  background: url(${headerBg}) no-repeat;
  background-size: cover;
  flex-shrink: 0;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-top: 40vh;
  }
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font: 800 8em 'Playfair Display';
  text-shadow: 0 0 10px #000;
  text-transform: uppercase;
  line-height: 1;

  span {
    font-size: 1.1em;
  }

  @media (max-width: 325px) {
    font-size: 6.5em;
  }
`

export const Arrow = styled.p`
  padding: 2rem 3rem;
  font-size: 6em;
  animation: ${scrollArrow} 0.6s infinite;
  user-select: none;

  @media (max-width: 1024px) {
    align-self: end;
    padding: 0;
    transform: rotate(90deg);
    animation: none;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`