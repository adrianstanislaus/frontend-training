import React, { useState,useEffect} from 'react';
function Body() {
const [dataList,setDataList] = useState([
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
],)

const [dataEach,setDataEach] = useState({
    id:0,
    title:"",
    completed:false,
},)

const [dataEdit,setDataEdit] = useState({
                id:0,
                title:"",
                completed:false,
            },)


    // constructor(){
    //     super();
    //     this.state= {
            // dataList: [
            //     {
            //         id:1,
            //         title:"Mengerjakan tugas",
            //         completed:true,
            //     },
            //     {
            //         id:2,
            //         title:"Belajar untuk ulangan",
            //         completed:false,
            //     },
            // ],
            // dataEach: {
            //     id:0,
            //     title:"",
            //     completed:false,
            // },
    //         dataEdit:{
    //             id:0,
    //             title:"",
    //             completed:false,
    //         },
    //     }
    // }

   const deleteItem = (id) => {
        let update = dataList.filter((data) => data.id !==id);
        setDataList(update);
    };

    const editState = (titleId,editId,index) => {
        const currentTitle = document.getElementById(titleId);
        const editTitle = document.getElementById(editId);
        currentTitle.style.display = "none";
        editTitle.setAttribute("type","text")
        editTitle.setAttribute("value",dataList[index].title)
        setDataEdit(dataList[index]);
    };

    const normalState = (titleId,editId,index) => {
        const currentTitle = document.getElementById(titleId);
        const editTitle = document.getElementById(editId);
        currentTitle.style.display = "block";
        editTitle.setAttribute("value",dataList[index].title)
        editTitle.setAttribute("type","hidden")
        
    };

    const clickCheck = (index) => {
        let update = dataList;
        update[index] = {...update[index],completed:!update[index].completed};
        setDataList(update);
    };

    const changeValue = (e) => {
        console.log(e);
        setDataEach({...dataEach, [e.target.name]:e.target.value});
    };

    const editChangeValue = (e) => {
        console.log(e);
        setDataEdit({...dataEdit, [e.target.name]:e.target.value},
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(dataEach.title === ""){
            alert("Masih kosong euy");
        }else {
            let newData ={
                ...dataEach,
                id: Math.floor(Math.random()*100) +1,
            };
            setDataList([...dataList, newData]);
            setDataEach({
                id:0,
                title:"",
                completed:false,
            },)
        }
      
    };

    const handleEdit = (e,index,titleId,editId) => {
        e.preventDefault();
        if(dataEdit.title === ""){
            alert("Masih kosong euy");
        }else {
            let newData ={
                ...dataEdit,
            };
            let update = dataList;
                update[index] = {...update[index],title:newData.title};
                setDataList(update);
                setDataEdit({
                    id:0,
                    title:"",
                    completed:false,
                },)
            normalState(titleId,editId,index);
        };
    };
    

        return(
            <div>
                <div className="container m-1 p-2">
                    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                        <input type="text" className="form-control" id="inputTitle" name="title" value={dataEach.title} onChange={(e)=> changeValue(e)} placeholder="add something to do here..."/>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                </div>
                
                <div className="d-flex justify-content-center">
                    <table className="d-flex table justify-content-center m-1">
                        <tbody>
                        {dataList.map((data,index) =>{
                            return( 
                                <tr key={data.id}>
                                    <td>
                                        <div class="form-check">
                                        {data.completed ===true && 
                                        <div>
                                            <input  onClick={() => clickCheck(index)} class="form-check-input" type="checkbox" value={data.completed} checked/>
                                            <label id={'title'+data.id} class="form-check-label"  style={{textDecoration: 'line-through',color: 'gray'}}>
                                                {data.title}
                                                </label>
                                            
                                        </div>
                                        }
                                        {data.completed ===false && 
                                        <div>
                                            <input onClick={() =>clickCheck(index)} class="form-check-input" type="checkbox" value={data.completed} />
                                            <label id={'title'+data.id} class="form-check-label" onClick={() =>editState('title'+data.id,'editTitle'+data.id,index)}>
                                                {data.title}
                                                </label>
                                            <form onSubmit={(e) =>handleEdit(e,index,'title'+data.id,'editTitle'+data.id)}>
                                            <input id={'editTitle'+data.id} className="form-control" name="title" value={dataEdit.title} onChange={(e)=> editChangeValue(e)} type="hidden"/>
                                            </form>
                                        </div>
                                        }
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() =>deleteItem(data.id)}>delete</button>
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

export default Body;