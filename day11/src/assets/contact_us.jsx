import logoalta from "./logo-ALTA-v2@2x.png"
import "./contact_us.css"

function Contactus() {
    return(
<main>
    <header>
        <div className="d-flex flex-wrap">
            <div id="background" class="bg-image">
                <div id="leftcol" class="d-flex justify-content-center align-items-center">
                    <logo>
                        <img id="logoalta" src={logoalta} alt="logoalta"/>
                    </logo>
                </div>
            </div>
            <form-wrapper className="d-flex border">
                <div id="contactbox" className="mx-5 my-5 pt-2">
                    <h3>Contact Us</h3>
                    <form>
                        <div className="mb-2">
                            <label for="formGroupExampleInput" className="form-label">Full Name<span style={{"color": "red"}}>*</span></label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Full Name Here..."/>
                        </div>
                        <div class="mb-2">
                            <label for="formGroupExampleInput2" className="form-label">Email Address<span style={{"color": "red"}}>*</span></label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="example@domain.com"/>
                        </div>
                        <div class="mb-2">
                            <label for="formGroupExampleInput3" className="form-label">Phone Number<span style={{"color": "red"}}>*</span></label>
                            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="0812xxxxxx"/>
                        </div>
                        <div className="mb-2">
                            <label for="formGroupExampleInput4" className="form-label">Nationality</label>
                            <select className="form-select" aria-label="Default select example" id="formGroupExampleInput4">
                                <option selected>Open this select menu</option>
                                <option value="Indonesian">Indonesia</option>
                                <option value="English">Inggris</option>
                                <option value="French">Prancis</option>
                            </select>
                        </div>
                        <div className="mb-2">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Pesan"></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </form-wrapper>
        </div>
    </header>
    
</main>
    )
};

export default Contactus;