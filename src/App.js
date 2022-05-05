import NavBar from './components/NavBar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Pictures from './pages/35mm';
import { Route, Routes } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import { useEffect, useState } from 'react';


function App() {

  const [isMobile, setIsMobile] = useState(false)
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 992) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize)
  })

  useEffect(() => {
    console.log(isMobile)
  },[isMobile])

  if(!isMobile ){
    return (
      <div>
        <NavBar/>
        <Routes>
              <Route exact path="/" element={<Home isMobile={isMobile}/>}/>
              <Route path="/experience" element={<Experience isMobile={isMobile}/>}/>
              <Route path="/projects" element={<Projects isMobile={isMobile}/>}/>
              <Route path="/35mm" element={<Pictures isMobile={isMobile}/>}/>
        </Routes>
      </div>
    );
  }else{
    return(
      <div>
        <NavBar/>
        <Home isMobile={isMobile}/>
        <Experience isMobile={isMobile}/>
        <Projects isMobile={isMobile}/>
        <Pictures isMobile={isMobile}/>
      </div>
    )
  }
}

export default App;
