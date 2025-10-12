import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Footer} from "./layout/sections/footer/footer.tsx";


function App() {
    return (
        <div className="App">
          <Header />
          <Main/>
          <Skills/>
          <Projects/>
          <About/>
          <Footer/>
        </div>
    )
}

export default App
