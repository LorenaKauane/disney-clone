import Slider from "react-slick"
import styled from "styled-components"

export const SliderFilm = styled(Slider)`
  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    display: none !important;
  }

  .slick-next {
    display: none !important;
  }

  .slick-slide:not(.slick-active) {
    opacity: 0.5;
  }
`

export const Container = styled.div`
  cursor: pointer;
  position: relative;

  a {
    border-radius: 24px;
    display: block;
    padding: 0px 15px;

    img {
      border-radius: 24px;
      width: 100%;
      min-width: 227px;
      height: 100%;
      margin: 20px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

      overflow: hidden;

      transition: opacity 500ms ease-in-out 0s;
      border: 3px solid rgb(249, 249, 249, 0.01);

      :hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
          rgb(0 0 0 / 70%) 0px 30px 22px -10px;
        border: 3px solid rgb(249, 249, 249, 0.8);
        transform: scale(1.05);
      }
    }
  }
`
