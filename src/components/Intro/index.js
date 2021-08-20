import React from 'react'
import * as S from './styles'

export default function Intro({  handleIncrease , handleDecrease}) {
    return (
        <S.Container>
            <S.Wrapper>

                <S.Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</S.Title>
                <S.Text>
                    Nullam condimentum nisi in sapien rutrum, et interdum arcu auctor. Donec tempus vel nibh sed vehicula. Ut commodo tortor ut nulla volutpat, ut volutpat purus pulvinar. Aliquam elementum vestibulum scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </S.Text>
                <S.Link href="#shop_now">
                    <S.Button  
                        onMouseEnter={handleIncrease} 
                        onMouseLeave={handleDecrease}
                    />
                </S.Link>
                
            </S.Wrapper>
        </S.Container>
    )
}