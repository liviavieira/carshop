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
`

export const CarBox = styled.div`
  margin-bottom: 4rem;
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
    bottom: 0;
    left: 0;
    width: 5rem;
    height: 50%;
    background: yellow;
    mix-blend-mode: soft-light;
    transition: all 0.8s cubic-bezier(0.68, -0.6, 0.265, 2);
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
`

export const OrderBox = styled.div`
  width: 35%
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
  width: 2rem;
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