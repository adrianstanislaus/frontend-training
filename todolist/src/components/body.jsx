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
            dataEach: {
                id:0,
                title:"",
                completed:false,
            },
            dataEdit:{
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

    editState = (titleId,editId,index) => {
        const currentTitle = document.getElementById(titleId);
        const editTitle = document.getElementById(editId);
        currentTitle.style.display = "none";
        editTitle.setAttribute("type","text")
        editTitle.setAttribute("value",this.state.dataList[index].title)
        this.setState({
            dataEdit:this.state.dataList[index]
        });
    };

    normalState = (titleId,editId,index) => {
        const currentTitle = document.getElementById(titleId);
        const editTitle = document.getElementById(editId);
        currentTitle.style.display = "block";
        editTitle.setAttribute("value",this.state.dataList[index].title)
        editTitle.setAttribute("type","hidden")
        
    };

    clickCheck = (index) => {
        let update = this.state.dataList;
        update[index] = {...update[index],completed:!update[index].completed};
        this.setState({
            dataList:update
        });
        
    }

    changeValue = (e) => {
        console.log(e);
        this.setState({
            dataEach:{...this.state.dataEach, [e.target.name]:e.target.value},
        });
    };

    editChangeValue = (e) => {
        console.log(e);
        this.setState({
            dataEdit:{...this.state.dataEdit, [e.target.name]:e.target.value},
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.dataEach.title === ""){
            alert("Masih kosong euy");
        }else {
            let newData ={
                ...this.state.dataEach,
                id: Math.floor(Math.random()*100) +1,
            };
            this.setState({
                dataList: [...this.state.dataList, newData],
                dataEach:{
                    id:0,
                    title:"",
                    completed:false,
                },
            });
        }
      
    };

    handleEdit = (e,index,titleId,editId) => {
        e.preventDefault();
        if(this.state.dataEdit.title === ""){
            alert("Masih kosong euy");
        }else {
            let newData ={
                ...this.state.dataEdit,
            };
            let update = this.state.dataList;
                update[index] = {...update[index],title:newData.title};
                this.setState({
                    dataList:update,
                    dataEdit:{
                        id:0,
                        title:"",
                        completed:false,
                    },
                });
            this.normalState(titleId,editId,index);
        };

      
    };

    render(){
        return(
            <div>
                <div className="container m-1 p-2">
                    <form onSubmit={this.handleSubmit} className="d-flex justify-content-center">
                        <input type="text" className="form-control" id="inputTitle" name="title" value={this.state.dataEach.title} onChange={(e)=> this.changeValue(e)} placeholder="add something to do here..."/>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                </div>
                
                <div className="d-flex justify-content-center">
                    <table className="d-flex table justify-content-center m-1">
                        <tbody>
                        {this.state.dataList.map((data,index) =>{
                            return( 
                                <tr key={data.id}>
                                    <td>
                                        <div class="form-check">
                                        {data.completed ===true && 
                                        <div>
                                            <input  onClick={() =>this.clickCheck(index)} class="form-check-input" type="checkbox" value={data.completed} checked/>
                                            <label id={'title'+data.id} class="form-check-label"  style={{textDecoration: 'line-through',color: 'gray'}}>
                                                {data.title}
                                                </label>
                                            
                                        </div>
                                        }
                                        {data.completed ===false && 
                                        <div>
                                            <input onClick={() =>this.clickCheck(index)} class="form-check-input" type="checkbox" value={data.completed} />
                                            <label id={'title'+data.id} class="form-check-label" onClick={() =>this.editState('title'+data.id,'editTitle'+data.id,index)}>
                                                {data.title}
                                                </label>
                                            <form onSubmit={(e) =>this.handleEdit(e,index,'title'+data.id,'editTitle'+data.id)}>
                                            <input id={'editTitle'+data.id} className="form-control" name="title" value={this.state.dataEdit.title} onChange={(e)=> this.editChangeValue(e)} type="hidden"/>
                                            </form>
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