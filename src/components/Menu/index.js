import React from 'react'
import * as S from './styles'

export default function Menu ({ open , handleMenu , handleIncrease , handleDecrease }) {
    return (
        <S.NavBar>
            <S.Menu onClick={handleMenu} onMouseEnter={handleIncrease} onMouseLeave={handleDecrease}>
                <S.Bar1 open={open} />
                <S.Bar2 open={open} />
                <S.Bar3 open={open} />
            </S.Menu>
            <S.Link href="#"></S.Link>
            <S.Link href="#"></S.Link>
            <S.Link href="#"></S.Link>
        </S.NavBar>
    )
}