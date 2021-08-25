import React from "react"
import Image from "next/image"
import { Container, ImageProfile } from "./styles"

function Header() {
  return (
    <Container>
      <Image src="/images/logo.svg" width={80} height={48} />

      <div>
        <div>Item menu1</div>
        <div>Item menu1</div>
        <div>Item menu1</div>
      </div>

      <ImageProfile src="/images/profile.png" width={48} height={48} />
    </Container>
  )
}

export default Header
