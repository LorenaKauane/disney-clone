import Company from "../components/Company"
import Header from "../components/Header"
import HeaderSlider from "../components/HeaderSlider"
import { Main } from "../components/Main/styles"
import SectionFilm from "../components/SectionFilm"

import jsonMovies from "../disneyPlusFilms.json"

export default function Home() {
  return (
    <Main>
      <Header />
      <HeaderSlider />
      <Company />
      <SectionFilm
        title={jsonMovies.recommend.title}
        movies={jsonMovies.recommend.movies}
      />
      <SectionFilm
        title={jsonMovies.news.title}
        movies={jsonMovies.news.movies}
      />
      <SectionFilm
        title={jsonMovies.originals.title}
        movies={jsonMovies.originals.movies}
      />
      <SectionFilm
        title={jsonMovies.emmyNominee.title}
        movies={jsonMovies.emmyNominee.movies}
      />
    </Main>
  )
}
