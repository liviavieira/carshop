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

  @media (min-width: 1024px) {
    &:hover {
      backdrop-filter: blur(10px) brightness(.8);
    }
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100vw;
    height: 4rem;
    border-right: none;
  }
`

// hamburger menu
export const Menu = styled.button`
  margin: 3rem auto;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 1900px) {
    margin: 4rem auto;
    transform: scale(1.6);
  }

  @media (max-width: 1024px) {
    margin: 0;
    padding: 1.4rem 1rem 1rem;
    border-right: 2px solid #fff;
  }
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