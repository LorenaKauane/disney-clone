import React from "react"
import FilmSlider from "./FilmSlider"

import { Container, TitleSection } from "./styles"

function SectionFilm({ title, movies }) {
  return (
    <Container>
      <TitleSection>{title}</TitleSection>
      <FilmSlider movies={movies} />
    </Container>
  )
}

export default SectionFilm
