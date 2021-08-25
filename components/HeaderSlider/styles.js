import styled from "styled-components"
import Slider from "react-slick"

export const SliderHeader = styled(Slider)`
  margin: 9vh 5vh;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

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
  border-radius: 4px;
  position: relative;

  a {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 3px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
      width: 100%;
      height: 100%;
    }

    :hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
      padding: 0;
      transition-duration: 300ms;
    }
  }
`
