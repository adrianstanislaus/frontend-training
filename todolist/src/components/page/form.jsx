import * as React from "react";
import FormBody from "../formBody";
import Header from "../header"

function Form() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Header/>
        <FormBody/>
      </div>  
    </div>
  );
}

export default Form;
