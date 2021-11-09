import React, { useState,} from 'react';

function FormBody() {
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

        return(
            <div className="p-5 border shadow" style={{'border-radius':'30px'}}>
                <div className="container m-1 p-2">
                    <h3>Pendaftaran Peserta Coding Bootcamp</h3>
                    <form onSubmit={handleSubmit} className="p-2" style={{'border-radius':'30px'}}>
                    <div class="mb-3">
                        <label for="InputNama" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="InputNama" placeholder="John Smith" required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="InputEmail" placeholder="something@mail.com" required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">No Handphone</label>
                        <input type="text" class="form-control" id="InputPhone" placeholder="0812345678..." required/>
                    </div>
                    <div class="mb-3">
                        <label for="radio" class="form-label">Latar Belakang Pendidikan</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" value="IT" id="radioIt"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                IT
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" value ="non-IT"id="radioNonIt" checked/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Non-IT
                            </label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="select" class="form-label">Kelas Koding yang Dipilih</label>
                        <select id="select" class="form-select" aria-label="Default select example" required>
                            <option value="">Open this select menu</option>
                            <option value="backend">Coding Backend with Golang</option>
                            <option value="frontend">Coding Frontend with ReactJS</option>
                            <option value="fullstack">Fullstack Developer</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Foto Surat Kesungguhan</label>
                        <input class="form-control" type="file" id="formFile" required/>
                    </div>
                    <div class="mb-3">
                        <label for="InputHarapan" class="form-label">Harapan Untuk Coding Bootcamp ini</label>
                        <textarea class="form-control" id="InputHarapan" rows="3"></textarea>
                    </div>
                        <button type="submit" className="btn btn-primary" style={{'border-radius':'30px'}}>Submit</button>
                        <button type="reset" className="btn btn-danger" style={{'border-radius':'30px'}}>Reset</button>
                    </form>
                </div>
            </div>
             )
    }

export default FormBody;