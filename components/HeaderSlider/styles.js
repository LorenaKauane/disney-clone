import styled from "styled-components"
import Slider from "react-slick"

export const Container = styled.div``

export const SliderHeader = styled(Slider)`
  margin: 9vh 5vh;

  .slick-prev {
    display: none !important;
  }
  .slick-next {
    display: none !important;
  }
`
