import React from "react";

const ArticleCards = (props) => {
    return (
      <div classname="d-flex">
           {props.articles.map((article,index) => (
        <div key={article.title + index} class="card m-3" style={{maxWidth:"50vw"}}>
            <img class="card-img-top" src={article.urlToImage} alt="Card image cap"></img>
        <div class="card-body">
          <a href={article.url} class="card-title">{article.title}</a>
          <h6 class="card-subtitle mb-2 text-muted">{article.author}</h6>
          <p class="card-text">{article.description}</p>
          <p  class="card-subtitle">{article.publishedAt}</p>
        </div>
      </div>
      ))}
      </div>
    );
  };
  
  export default ArticleCards;