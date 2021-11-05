import React, { useState } from 'react';
function Table() {
const [dataPenumpang,setDataPenumpang] = useState([{
                    id:1,
                    nama:"Adrian", 
                    umur: 22,
                    jk: "Laki-laki",
                },
                {   
                    id:2,
                    nama:"Caca", 
                    umur: 21,
                    jk: "Perempuan",
                },
            ],)

const [penumpangBaru,setPenumpangBaru] = useState({id:0,nama:"",umur:0,jk:"",})

const deleteItem = (id) => {
    let update = dataPenumpang.filter((data) => data.id !==id);
    setDataPenumpang(update)
    };

const changeValue = (e) => {
        console.log(e);
        setPenumpangBaru({...penumpangBaru, [e.target.name]:e.target.value},
        );
    };

const handleSubmit = (e) => {
        e.preventDefault();
        let newData ={...penumpangBaru,id: Math.floor(Math.random()*100) +1,
        };
        setDataPenumpang([...dataPenumpang, newData],);
        setPenumpangBaru({
            id:0,
            nama:"",
            umur:0,
            jk:"",
        },);
    };

//     constructor() {
//         super();
//         this.state = {
//             data:[{
//                 id:1,
//                 nama:"Adrian", 
//                 umur: 22,
//                 jk: "Laki-laki",
//             },
//             {   
//                 id:2,
//                 nama:"Caca", 
//                 umur: 21,
//                 jk: "Perempuan",
//             },
//         ],
//         dataForm:{
//             id:0,
//             nama: "",
//             umur:0,
//             jk:"",
//         },
//         }
// }      
   
//     deleteItem = (id) => {
//         let update = this.state.data.filter((data) => data.id !==id);
//         this.setState({
//             data: update,
//         });
//     };

    // changeValue = (e) => {
    //     console.log(e);
    //     this.setState({
    //         dataForm:{...this.state.dataForm, [e.target.name]:e.target.value},
    //     });
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     let newData ={
    //         ...this.state.dataForm,
    //         id: Math.floor(Math.random()*100) +1,
    //     };
    //     this.setState({
    //         data: [...this.state.data, newData],
    //         formData:{
    //             id:0,
    //             nama:"",
    //             umur:0,
    //             jk:"",
    //         },
    //     });
    // };

    return(
        <div className="container">
        <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Umur</th>
                <th>Jenis Kelamin</th>
            </tr>
        </thead>
        <tbody>
        {dataPenumpang.map((data) =>{
            return(
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.nama}</td>
                    <td>{data.umur}</td>
                    <td>{data.jk}</td>
                    <td>
                        <button className="btn btn-danger" 
                        onClick={() =>deleteItem(data.id)} 
                        >delete</button>
                    </td>
                </tr>
            )
        })}   
        </tbody>
        </table>
        <form 
        onSubmit={handleSubmit}
        >
        <div class="mb-3">
            <label for="inputName" class="form-label">Nama</label>
            <input type="text" class="form-control" id="inputName" name="nama" value={penumpangBaru.nama} onChange={(e)=> changeValue(e)} aria-describedby="namaHelp" />
            <div id="namaHelp" class="form-text">Masukan nama singkat</div>
        </div>
        <div class="mb-3">
            <label for="inputUmur" class="form-label">Umur</label>
            <input type="age" class="form-control" id="inputUmur" name="umur" value={penumpangBaru.umur} onChange={(e)=> changeValue(e)} aria-describedby="umurHelp"/>
            <div id="umurHelp" class="form-text">Masukan umur saat ini.</div>
        </div>
        <div className="mb-3">
        <label for="inputJk" class="form-label">Jenis Kelamin</label>
            <div class="form-check">
                <input value="Laki-Laki" class="form-check-input" type="radio" name="jk" onChange={(e)=> changeValue(e)} id="selectLaki"/>
                <label class="form-check-label" for="selectLaki">
                    Laki Laki
                </label>
            </div>
            <div class="form-check">
            <input value="Perempuan" class="form-check-input" type="radio" name="jk" id="selectPerempuan" onChange={(e)=> changeValue(e)} />
            <label class="form-check-label" for="selectPerempuan">
                Perempuan
            </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )
   }   

export default Table;