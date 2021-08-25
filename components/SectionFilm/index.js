import React from "react"

import { Container, TitleSection } from "./styles"

function SectionFilm({ title, movies }) {
  return (
    <Container>
      <TitleSection>{title}</TitleSection>
      <div>Movies</div>
    </Container>
  )
}

export default SectionFilm
