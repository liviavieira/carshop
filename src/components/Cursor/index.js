import React from 'react'
import styled from 'styled-components'

const Cursor = styled.div`
  position: fixed;
  width: ${props => props.size ? '150px' : '80px'};
  height: ${props => props.size ? '150px' : '80px'};
  border: 1px solid #fff;
  border-radius: 50%;
  transition: width 0.3s, height 0.3s;
  pointer-events: none;
  overflow: hidden;
  z-index: 1000;
`

export default function CustomCursor({ size }) {
  const cursorRef = React.useRef(null)

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const {clientX , clientY} = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  return <Cursor size={size} ref={cursorRef}/>
}