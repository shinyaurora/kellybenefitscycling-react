import { Fragment } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Target from "./components/target"
import Upcoming from "./components/upcoming"
import News from "./components/news"
import Social from "./components/social"
import Partner from "./components/partners"

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Target />
      <Upcoming />
      <News />
      <Social />
      <Partner />
    </Fragment>
  )
}

export default App;