import { Fragment } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Target from "./components/target"

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Target />
    </Fragment>
  )
}

export default App;