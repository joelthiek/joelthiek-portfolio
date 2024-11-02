import Banner from "./components/Banner"
import Contact from "./components/Contact"
import FooterBottom from "./components/FooterBottom"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Resume from './components/Resume'

function App() {

  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <header>
        <Navbar />
      </header>
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Projects />
          <Resume />
          <Contact />
          <FooterBottom />
        </div>
      </div>
    </main>
  )
}

export default App
