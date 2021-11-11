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

    const emptyList = () => {
        const Title = document.getElementById("emptyList");
        Title.style.display = "inline";
    };

    const notEmptyList = () => {
        const Title = document.getElementById("emptyList");
        Title.style.display = "none";
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
            alert("Masih kosong nih");
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
    useEffect(()=>{
        if(dataList.length === 0){
            emptyList()
        }else{
            notEmptyList()
        }
        console.log("test")
    })
    

        return(
            <div className="p-5 border shadow" style={{'border-radius':'30px'}}>
                <div className="container m-1 p-2">
                    <form onSubmit={handleSubmit} className="d-flex justify-content-center border" style={{'border-radius':'30px'}}>
                        <input type="text" className="form-control" id="inputTitle" name="title" value={dataEach.title} onChange={(e)=> changeValue(e)} placeholder="add something to do here..." style={{'border-radius':'30px','border':'none'}}/>
                        <button type="submit" className="btn btn-primary" style={{'border-radius':'30px'}}>add</button>
                    </form>
                </div>
                
                <div className="d-flex  justify-content-center">
                    <table className="d-flex table justify-content-center m-1">
                        <tbody className="p-1">
                        <h3 id="emptyList" style={{display:'none',color:'gray'}}>Yeay gak ada tugas :)</h3>
                        {dataList.map((data,index) =>{
                            return( 
                                <tr className="p-3" style={{}} key={data.id}>
                                    <td className="m-3">
                                        <div class="form-check">
                                        <div>
                                            {data.completed && <input onChange={(e)=> editChangeValue(e)} onClick={() =>clickCheck(index)} class="form-check-input" type="checkbox" value={data.completed} name="completed" checked/>}
                                            {!data.completed && <input onChange={(e)=> editChangeValue(e)} onClick={() =>clickCheck(index)} class="form-check-input" type="checkbox" value={data.completed} name="completed" />}
                                            <label id={'title'+data.id} class="form-check-label"  onClick={() =>editState('title'+data.id,'editTitle'+data.id,index)}  style={data.completed? {textDecoration: 'line-through',color: 'gray'}:{}}>
                                                {data.title}
                                                </label>
                                            <form onSubmit={(e) =>handleEdit(e,index,'title'+data.id,'editTitle'+data.id)}>
                                            <input id={'editTitle'+data.id} style={{'border-radius':'30px'}} className="form-control" name="title" value={dataEdit.title} onChange={(e)=> editChangeValue(e)} type="hidden"/>
                                            </form>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button style={{'border-radius':'30px','padding-top':'0'}} className="btn btn-danger" onClick={() =>deleteItem(data.id)}>x</button>
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