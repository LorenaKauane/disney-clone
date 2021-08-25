import Company from "../components/Company"
import Header from "../components/Header"
import HeaderSlider from "../components/HeaderSlider"
import { Main } from "../components/Main/styles"

export default function Home() {
  return (
    <Main>
      <Header />
      <HeaderSlider />
      <Company />
    </Main>
  )
}
