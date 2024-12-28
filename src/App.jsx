import { Fragment } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Target from "./components/target"
import Result from "./components/result"

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Target />
      <Result />
    </Fragment>
  )
}

export default App;