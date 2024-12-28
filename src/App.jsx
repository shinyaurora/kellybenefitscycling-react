import { Fragment } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Target from "./components/target"
import Result from "./components/result"
import Upcoming from "./components/upcoming"
import News from "./components/news"
import Contact from "./components/contact"
import Social from "./components/social"
import Partner from "./components/partners"
import Footer from "./components/footer"

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Target />
      <Upcoming />
      <News />
      <Social />
      <Result />
      <Partner />
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default App;