import styled from 'styled-components'

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 6vw;
  height: 100vh;
  border-right: 1px solid #fff;
  transition: all .6s ease-in;
  z-index: 999;

  &:hover {
    backdrop-filter: blur(10px) brightness(.8);
  }
`

// hamburger menu
export const Menu = styled.button`
  margin: 3rem auto;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const Bar1 = styled.div`
  margin-bottom: 8px;
  width: 20px;
  height: 3px;
  border-radius: 10px;
  background: #fff;
  transform: ${props => props.open ? 'translate(2px,5px) rotate(45deg)' : ''};
  transition: 0.6s cubic-bezier(0.42,-0.85, 0.1, 1.44);
`

export const Bar2 = styled(Bar1)`
  width: 35px;
  transform: ${props => props.open ? 'rotate(-45deg)' : ''};
`

export const Bar3 = styled(Bar1)`
  width: ${props => props.open ? '20px' : '27px'};
  transform: ${props => props.open ? 'translate(13px,-6px) rotate(45deg)' : ''};
`

export const Link = styled.a`
  color: #fff; 
  text-decoration: none;
`