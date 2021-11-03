import { Component } from "react";
class Body extends Component {
    constructor(){
        super();
        this.state= {
            dataList: [
                {
                    id:1,
                    title:"Mengerjakan tugas",
                    completed:true,
                },
                {
                    id:2,
                    title:"Belajar untuk ulangan",
                    completed:false,
                },
            ],
            DataEach: {
                id:0,
                title:"",
                completed:false,
            },
        }
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="d-flex justify-content-center border">
                        <input type="text" className="form-control" id="inputTitle" name="title" value="" placeholder="add something to do here..."/>
                        <button className="btn btn-primary">submit</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <table className="table">
                        <tbody>
                        <tr className="d-flex justify-content-center">
                            <td className=""><input className="form-check-input" type="checkbox"/></td>
                            <td className=""><p>title</p></td>
                            <td className="">
                                <button className="btn btn-danger">delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            
        )
    }
}

export default Body;