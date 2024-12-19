import Navbar from "./component/Navbar/Navbar"
import Home from "./page/Home/Home"
import About from "./page/About/About"
import Project from "./page/Project/Project"
import Contact from "./page/Contact/Contact"

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App
