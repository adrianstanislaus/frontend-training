import logoalta from "./logo-ALTA.png";
import "./home.css"
import { Link } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import ArticleCards from "./articlelist";
import axios from 'axios';

function News() {
const [article,setArticle] = useState(
    []
);

const [apiError,setApiError] = useState("");

useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        ' https://newsapi.org/v2/top-headlines?country=id&apiKey=00327a1349b948b5891bc869c39fc00e',
      );

      setArticle(result.data.articles);
      console.log("fetch data",article)
      console.log("real data",result.data.articles)
    };

    fetchData();
  }, []);


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
            <li className="nav-item mx-3">
            <Link className="nav-link" to="/news">NEWS</Link>
            </li>
        </ul>
        </div>
    </div>
  </nav>
  <main className="d-flex mt-5 justify-content-center">
      <hero className="d-flex m-5 py-3 justify-content-center flex-wrap">
      {article.length > 0 && <ArticleCards articles={article} />}
      {apiError && <p>Could not fetch any articles. Please try again.</p>}
        
    
    </hero>
  </main>
</body>
    )
};

export default News;