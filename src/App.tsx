import Home from './pages/Home';
// import About from './pages/About';
// import Services from "./pages/Services";
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
// import Projects from './components/Allprojects';
import Services from './pages/Services';
import Form from './components/Form';

// import Project from './pages/Project';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Projects />} path="/projects" />
      {/* <Route element={<Project />} path="/project" /> */}
      <Route element={<Services />} path="/services" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Form />} path="/form" />
    </Routes>
  );
}

export default App;
