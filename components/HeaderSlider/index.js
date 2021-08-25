import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Container, SliderHeader } from "./styles"

function HeaderSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Container>
      <SliderHeader {...settings}>
        <a>
          <img src="/images/what-if-slider.jpeg" />
        </a>
        <a>
          <img src="/images/star-wars-slider.jpeg" />
        </a>
        <a>
          <img src="/images/monstro-trabalho-slider.jpeg" />
        </a>
      </SliderHeader>
    </Container>
  )
}

export default HeaderSlider
