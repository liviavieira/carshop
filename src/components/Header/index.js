import React from 'react'
import * as S from './styles'

export default function Header({ handleIncrease , handleDecrease }) {
    return (
        <S.Container>
            <S.Wrapper>

                <S.Title>
                    ride the
                    <span>classic</span>
                </S.Title>
                <S.Arrow 
                    onMouseEnter={handleIncrease} 
                    onMouseLeave={handleDecrease}
                >
                    ➭
                </S.Arrow>

            </S.Wrapper>
        </S.Container>
    )
}

