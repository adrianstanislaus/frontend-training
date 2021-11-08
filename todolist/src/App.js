import './App.css';
import * as React from "react";
import Home from "./components/page/home"
import About from "./components/page/about"
import NoMatch from "./components/page/noMatch"
import { Routes, Route, } from "react-router-dom";
import PAboutApp from './components/page/PaboutApp';
import PAboutAuthor from './components/page/PaboutAuthor';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="about/about-app" element={<PAboutApp />} />
          <Route path="about/about-author" element={<PAboutAuthor />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
  );
}

export default App;
