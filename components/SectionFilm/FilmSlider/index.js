import React from "react"

import { Container, SliderFilm } from "./styles"

function FilmSlider({ movies }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  }

  return (
    <SliderFilm {...settings}>
      {movies.map(movie => (
        <Container>
          <a>
            <img src={movie.cardImg} alt="" />
          </a>
        </Container>
      ))}
    </SliderFilm>
  )
}

export default FilmSlider
