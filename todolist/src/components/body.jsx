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

    deleteItem = (id) => {
        let update = this.state.dataList.filter((data) => data.id !==id);
        this.setState({
            dataList: update,
        });
    };

    clickCheck = (index) => {
        let update = this.state.dataList;
        update[index] = {...update[index],completed:!update[index].completed};
        this.setState({
            dataList:update
        });
        
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
                        {this.state.dataList.map((data,index) =>{
                            return( 
                                <tr key={data.id}>
                                    <td>
                                        <div class="form-check">
                                        {data.completed ===true && 
                                        <div>
                                            <input  onClick={() =>this.clickCheck(index)} class="form-check-input" type="checkbox" value={data.completed} id="flexCheckDefault" checked/>
                                            <label class="form-check-label" for="flexCheckDefault" style={{textDecoration: 'line-through'}}>
                                            {data.title}
                                            </label>
                                        </div>
                                        }
                                        {data.completed ===false && 
                                        <div>
                                        <input onClick={() =>this.clickCheck(index)} class="form-check-input" type="checkbox" value={data.completed} id="flexCheckDefault"/>
                                        <label  class="form-check-label" for="flexCheckDefault">
                                            {data.title}
                                            </label>
                                        </div>
                                        }
                                        
                                       
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() =>this.deleteItem(data.id)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })}  
                        </tbody>
                    </table>
                </div>
            </div>
            
            
        )
    }
}

export default Body;