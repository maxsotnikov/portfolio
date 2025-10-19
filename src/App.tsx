import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Footer} from "./layout/footer/footer.tsx";


function App() {
    return (
        <>
          <Header />
          <Main/>
          <Skills/>
          <Projects/>
          <About/>
          <Footer/>
        </>
    )
}

export default App
