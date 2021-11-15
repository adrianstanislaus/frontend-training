import './App.css';
import Home from "./assets/home.jsx";
import Contactus from "./assets/contact_us.jsx";
import News from "./assets/news";
import { Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
