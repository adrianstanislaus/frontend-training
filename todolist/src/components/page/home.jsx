import * as React from "react";
import Header from "../header"
import Body from "../body"

function Home() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Header/>
        <Body/>
      </div>  
    </div>
  );
}

export default Home;
