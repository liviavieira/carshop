import styled, { keyframes } from 'styled-components'

export const scrollArrow = keyframes`
  50% {
    transform: translatey(10px)
  }
`

export const Container = styled.section`
  width: 103vw;
  height: 100vh;
  background: #aaa;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    padding: 2rem 0;
    height: auto;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 95%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Img = styled.img`
  width: 100%;
`

export const DownArrow = styled.p`
  align-self: center;
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 3.5em;
  animation: ${scrollArrow} 1s infinite;

  @media (max-width: 1024px) {
    display: none;
  }
`