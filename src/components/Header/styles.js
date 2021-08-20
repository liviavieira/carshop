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
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font: 800 8em 'Playfair Display';
  text-transform: uppercase;
  line-height: 1;

  span {
    font-size: 1.1em;
  }
`

export const Arrow = styled.p`
  padding: 2rem 3rem;
  font-size: 6em;
  animation: ${scrollArrow} 0.6s infinite;
  user-select: none;
`