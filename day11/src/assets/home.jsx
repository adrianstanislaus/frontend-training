import logoalta from "./logo-ALTA.png";
import profile_pic from "./matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import "./home.css"
import { Link } from "react-router-dom";

function Home() {
    return(
        <body className="bg-image homebody">
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom shadow-sm py-2">
    <div className="container">
        <a className="navbar-brand" href=""><img src={logoalta} width="100em" alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item active mx-3">
            <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item mx-3">
            <a className="nav-link" >ABOUT</a>
            </li>
            <li className="nav-item mx-3">
            <a className="nav-link" >EXPERIENCE</a>
            </li>
            <li className="nav-item mx-3">
            <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
        </ul>
        </div>
    </div>
  </nav>
  <main className="d-flex mt-5 justify-content-center">
      <hero className="d-flex m-5 py-3 justify-content-center flex-wrap">
        <profileimage>
            <img id="profileimage" src={profile_pic} width="350vw" className="img-fluid" alt="profile-image"/>
        </profileimage>
        <profilecontent className="m-4 p-3">
            <h4>Hi, my name is</h4>
            <h1>Anne Sullivan</h1>
            <h2>I build things for the web</h2>
            <Link id="getintouch" className="btn btn-primary mt-2"  to="/contact" role="button">Get In Touch</Link>
        </profilecontent>
    </hero>
  </main>
</body>
    )
};

export default Home