import './App.css';
import Home from "./assets/home.jsx";
import Contactus from "./assets/contact_us.jsx";
import { Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
