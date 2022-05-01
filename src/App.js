import NavBar from './NavBar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import { Route, Routes } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>

    </div>
  );
}

export default App;
