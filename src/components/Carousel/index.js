import React from 'react'
import Slider from 'react-elastic-carousel'
import * as S from './styles'

import car1 from '../../assets/sliderGif1.gif'
import car2 from '../../assets/sliderGif2.gif'
import car3 from '../../assets/sliderGif3.gif'

export default function Carousel({ handleIncrease , handleDecrease }) {
  return (
    <S.Container>
      <S.Wrapper>

        <Slider>
          <S.Img src={car1}/>
          <S.Img src={car2}/>
          <S.Img src={car3}/>
        </Slider>
        <S.DownArrow 
          onMouseEnter={handleIncrease} 
          onMouseLeave={handleDecrease}
        >
          ↓
        </S.DownArrow>

      </S.Wrapper>
    </S.Container>
  )
}