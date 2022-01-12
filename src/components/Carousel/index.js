import React from 'react'
import Slider from 'react-slick'

import * as S from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import car1 from '../../assets/sliderGif1.gif'
import car2 from '../../assets/sliderGif2.gif'
import car3 from '../../assets/sliderGif3.gif'

export default function Carousel({ handleIncrease , handleDecrease }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    draggable: true,
    centerMode: true,
    accessibility: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false
        }
      }
    ]
  };

  return (
    <S.Container>
      <S.Wrapper>

        <Slider {...settings}>
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