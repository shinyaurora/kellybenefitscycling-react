import { Fragment } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Target from "./components/target"
import Result from "./components/result"
import Upcoming from "./components/upcoming"
import News from "./components/news"

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Target />
      <Result />
      <Upcoming />
      <News />
    </Fragment>
  )
}

export default App;