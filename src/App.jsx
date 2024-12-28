import { Fragment } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Target from "./components/target"
import Upcoming from "./components/upcoming"

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Target />
      <Upcoming />
    </Fragment>
  )
}

export default App;