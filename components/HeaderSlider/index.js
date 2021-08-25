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
    <SliderHeader {...settings}>
      <Container>
        <a>
          <img src="/images/what-if-slider.jpeg" alt="" />
        </a>
      </Container>
      <Container>
        <a>
          <img src="/images/star-wars-slider.jpeg" alt="" />
        </a>
      </Container>
      <Container>
        <a>
          <img src="/images/monstro-trabalho-slider.jpeg" alt="" />
        </a>
      </Container>
    </SliderHeader>
  )
}

export default HeaderSlider
