import styled, { keyframes } from 'styled-components'

export const scrollArrow = keyframes`
	0% {
    transform: translatey(0)
  }
  50% {
    transform: translatey(1rem)
  }
  100% {
    transform: translatey(0)
  }
`

export const Container = styled.section`
  width: 103vw;
  height: 100vh;
  background: #aaa;
  flex-shrink: 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
`

export const DownArrow = styled.p`
  display: flex;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  font-size: 4em;
  animation: ${scrollArrow} 1s infinite;
`