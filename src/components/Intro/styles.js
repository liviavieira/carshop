import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 100vh;
  color: #fff;
  background: #000;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100vw;
    font-size: 1.4em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 55%;
  height: 66%;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    width: 80%;
    height: 55%;
  }
`

export const Title = styled.h2`
  font: 300 2.8em 'Playfair Display';

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`

export const Text = styled.p`
  font: 500 0.9em sans-serif;
  line-height: 1.5;
`

export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #fff;
  text-transform: uppercase;
  font: 500 1em sans-serif;
  color: #fff;
  background: transparent;
  transition: all 0.5s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    bottom: -5%;
    left: 6%;
    width: 90%;
    height: 0;
    border-radius: 50%;
    background: #fff;
    transition: all 0.4s;
    overflow: hidden;
  }
  &:after {
    content: 'SHOP NOW';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.4s;
  }

  &:hover {
    color: #000;
    transform: translatey(-5px);

    &:before {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }
`

export const Link = styled.a`
  display: block;
  margin: 0 auto;
  width: 12rem;
  height: 3.5rem;
`