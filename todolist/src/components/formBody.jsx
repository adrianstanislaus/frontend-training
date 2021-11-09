import React, { useState, useRef} from 'react';

function FormBody() {
const [data,setData] = useState(
    {
        nama:"",
        email:"",
        noHandphone:"",
        pendidikan:"",
        kelas:"",
        harapan:"",
    })

const [errorMessage,setErrorMessage] = useState({
        nama:"",
        email:"",
        noHandphone:"",
        pendidikan:"",
        kelas:"",
},)

const suratKesungguhan = useRef('')
const nameRegex = /^[a-zA-Z ]*$/;
const phoneRegex = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/;



    const changeValue = (e) => {
                console.log(e);
                setData({...data, [e.target.name]:e.target.value});
    };

    const validation = () => {
        if (data.nama === ""){
            let nama = {...errorMessage,
                nama:"Nama kosong"}
            setErrorMessage(nama)
        }else if(!nameRegex.test(data.nama)){
            setErrorMessage({...errorMessage,
                nama:"Nama tidak boleh terdapat angka"})
        }
        if (data.noHandphone ===""){
            setErrorMessage({...errorMessage,
                noHandphone:"Nomor kosong kosong"})
        }else if(!phoneRegex.test(data.noHandphone)){
            setErrorMessage({...errorMessage,
                noHandphone:"Nomor telepon tidak sesuai ketentuan"})
        }
        if (data.email ===""){
            setErrorMessage({...errorMessage,
                email:"email kosong"})
        } 
        if (data.pendidikan ===""){
            setErrorMessage({...errorMessage,
                pendidikan:"pendidikan kosong"})
        }
        if (data.kelas ===""){
            setErrorMessage({...errorMessage,
                kelas:"kelas kosong"})
        }
        console.log("validasi",errorMessage)
        console.log("validasi",data)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validation()
        if((!(errorMessage.nama === "")) ||(!(errorMessage.email === "")) ||(!(errorMessage.noHandphone === "")) ||(!(errorMessage.pendidikan === "")) || (!(errorMessage.kelas === "")) ){
            alert("Masih ada data yang belum sesuai euy");
        }else {
            alert("Data atas nama "+ data.nama+ " berhasil diterima");
            setData({
                nama:"",
                email:"",
                noHandphone:"",
                pendidikan:"",
                kelas:"",
                harapan:"",
            },)
            setErrorMessage({
                nama:"",
                email:"",
                noHandphone:"",
                pendidikan:"",
                kelas:"",
            },)
        console.log("handle submit",errorMessage)
        console.log("handle submit",data)
        }
        
      
    };

        return(
            <div className="p-5 border shadow" style={{'borderRadius':'30px'}}>
                <div className="container m-1 p-2">
                    <h3>Pendaftaran Peserta Coding Bootcamp</h3>
                    <form onSubmit={handleSubmit} className="p-2" style={{'borderRadius':'30px'}}>
                    <div class="mb-3">
                        <label for="InputNama" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="InputNama" placeholder="John Smith" name="nama" value={data.nama} onChange={(e)=> changeValue(e)}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="InputEmail" placeholder="something@mail.com" name="email" value={data.email} onChange={(e)=> changeValue(e)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">No Handphone</label>
                        <input type="text" class="form-control" id="InputPhone" placeholder="0812345678..." name="noHandphone" value={data.noHandphone} onChange={(e)=> changeValue(e)} />
                    </div>
                    <div class="mb-3">
                        <label for="radio" class="form-label">Latar Belakang Pendidikan</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="IT" id="radioIt" name="pendidikan" onChange={(e)=> changeValue(e)}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                IT
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="pendidikan" value ="non-IT" id="radioNonIt"  onChange={(e)=> changeValue(e)}/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Non-IT
                            </label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="select" class="form-label">Kelas Koding yang Dipilih</label>
                        <select id="select" class="form-select" aria-label="Default select example" name="kelas" value={data.kelas} onChange={(e)=> changeValue(e)} >
                            <option value="" >Open this select menu</option>
                            <option value="backend">Coding Backend with Golang</option>
                            <option value="frontend">Coding Frontend with ReactJS</option>
                            <option value="fullstack">Fullstack Developer</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Foto Surat Kesungguhan</label>
                        <input class="form-control" type="file" id="formFile" ref={suratKesungguhan}/>
                    </div>
                    <div class="mb-3">
                        <label for="InputHarapan" class="form-label">Harapan Untuk Coding Bootcamp ini</label>
                        <textarea value={data.harapan} name="harapan" onChange={(e)=> changeValue(e)} class="form-control" id="InputHarapan" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                    <ul>
                    {(!errorMessage.nama ==="") &&
                    <li>{errorMessage.nama}</li>
                    }
                    {(!errorMessage.email ==="") &&
                    <li>{errorMessage.email}</li>
                    }
                    {(!errorMessage.noHandphone ==="") &&
                    <li>{errorMessage.noHandphone}</li>
                    }
                    {(!errorMessage.pendidikan ==="") &&
                    <li>{errorMessage.pendidikan}</li>
                    }
                    {(!errorMessage.kelas ==="") &&
                    <li>{errorMessage.kelas}</li>
                    }
                    </ul>
                    </div>
                        <button type="submit" className="btn btn-primary" style={{'borderRadius':'30px'}}>Submit</button>
                        <button type="reset" className="btn btn-danger" style={{'borderRadius':'30px'}}>Reset</button>
                    </form>
                </div>
            </div>
             )
    }

export default FormBody;