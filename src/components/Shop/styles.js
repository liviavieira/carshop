import styled from 'styled-components'

export const Container = styled.section`
  padding: 1rem 0;
  width: 100vw;
  height: 100vh;
  color: #fff;
  background: #444;
  flex-shrink: 0;
  overflow: hidden;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 88%;
  height: 100%;

  @media (min-width: 1900px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    width: 98%;
    font-size: .8em;
  }
`

export const Title = styled.h2`
  display: flex;
  justify-content: center;
`

export const Shop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  height: 100%;
`
  
export const CarList = styled.div`
  width: 60%;
  border: 1px solid #aaa;
  overflow: scroll;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eee; 
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ccc; 
  }

  @media (max-width: 768px) {
    width: 63%;
  }
`

export const CarBox = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const Car = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 10px;
  border: 1px solid #666;
  background: #333;
`

export const CarModel = styled.h2`
  position: relative;
  font: 600 2em 'Roboto Condensed';
  transition: 1s;

  &:before {
    content: '';
    position: absolute;
    top: 1rem;
    left: 0;
    width: 5rem;
    height: 1rem;
    background: yellow;
    mix-blend-mode: soft-light;
    transition: all 0.8s cubic-bezier(0.68, -0.6, 0.265, 2);

    @media (min-width: 1900px) {
      top: 2rem;
      width: 12rem;
      height: 2.2rem;
    }
  }

  &:hover { 
    text-shadow: 0 0 3px #fff;

    &:before {
      height: 90%;
    }
  }
`

export const CarImg = styled.img`
  width: 100%;
  transition: 0.5s;

  &:hover {
    filter: contrast(1.05);
  }
`

export const CarDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10px;
  background: #333;

  @media (max-width: 768px) {
    flex-direction: column;

    p:last-child {
      padding-top: 10px;
      text-align: center;
      font-size: 1.2em;
    }
  }
`

export const OrderBox = styled.div`
  width: 36%;
`
  
export const ShoppingCart = styled.div`
  padding: 5px;
  height: 80%;
  border: 1px solid #aaa;
`

export const Order = styled.div`
  margin-bottom: 1rem;
  background: #333;
`

export const OrderCar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 10px;
  width: 100%;
  border: 1px solid #aaa;
  background: #888;
`

export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 10px;

`

export const OrderCost = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4px;
`

export const Add = styled.button`
  padding-top: 2px;
  min-width: 2rem;
  height: 2rem;
  font-size: 1.5em;
  font-weight: 600;
  color: #333;
  border: none;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    box-shadow: 0 0 10px #111;
    background: #eee;
  }

  @media (min-width: 1900px) {
    min-width: 4rem;
    height: 4rem;
  }

  @media (max-width: 768px) {
    transform: scale(.8);
    font-size: 2em;
  }
`

export const Remove = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5em;
  font-weight: 600;
  color: #888;
  border: none;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
`