import React from "react"
import Image from "next/image"
import { Container, ImageProfile, Wrapper } from "./styles"
import HeaderItem from "./HeaderItem"

function Header() {
  return (
    <Container>
      <Wrapper>
        <Image src="/images/logo.svg" width={80} height={48} />
        <HeaderItem />
      </Wrapper>

      <ImageProfile src="/images/profile.png" width={48} height={48} />
    </Container>
  )
}

export default Header
