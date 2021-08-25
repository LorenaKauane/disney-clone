import React from "react"
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai"
import { FiFilm } from "react-icons/fi"
import { RiComputerFill } from "react-icons/ri"
import { Container, Item } from "./styles"

function HeaderItem() {
  return (
    <Container>
      <Item>
        <AiFillHome />
        <p>Início</p>
      </Item>
      <Item>
        <AiOutlineSearch />
        <p>Pesquisa</p>
      </Item>
      <Item>
        <AiOutlinePlus />
        <p>Minha lista</p>
      </Item>
      <Item>
        <AiFillStar />
        <p>Originais</p>
      </Item>
      <Item>
        <FiFilm />
        <p>Filmes </p>
      </Item>
      <Item>
        <RiComputerFill />
        <p>Series</p>
      </Item>
    </Container>
  )
}

export default HeaderItem
