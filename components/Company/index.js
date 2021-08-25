import React from "react"

import { Container, Item, ImgCompany } from "./styles"

function Company() {
  return (
    <Container>
      <Item>
        <ImgCompany src="/images/viewers-disney.png" />
      </Item>
      <Item>
        <ImgCompany src="/images/viewers-pixar.png" />
      </Item>
      <Item>
        <ImgCompany src="/images/viewers-marvel.png" />
      </Item>
      <Item>
        <ImgCompany src="/images/viewers-starwars.png" />
      </Item>
      <Item>
        <ImgCompany src="/images/viewers-national.png" />
      </Item>
    </Container>
  )
}

export default Company
