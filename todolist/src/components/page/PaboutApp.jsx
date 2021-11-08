import Header from "../header"
import { Link } from "react-router-dom";
import AboutApp from "../aboutApp";

function PAboutApp() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Header/>
        <div className="d-flex justify-content-center">
        <Link className="m-1" to="/about/about-app">about app</Link>
        <Link className="m-1" to="/about/about-author">about author</Link>
        </div>
        <AboutApp/>
      </div>  
    </div>
  );
}

export default PAboutApp;
