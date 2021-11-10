import React, { useState, useRef} from 'react';

function FormBody() {
let newErrorMessage = {};
const [data,setData] = useState(
    {
        nama:"",
        email:"",
        noHandphone:"",
        pendidikan:"",
        kelas:"",
        harapan:"",
    });

const [errorMessage,setErrorMessage] = useState({
        nama:"",
        email:"",
        noHandphone:"",
        pendidikan:"",
        kelas:"",
});

const suratKesungguhan = useRef('')
const nameRegex = /^[a-zA-Z ]*$/;
const phoneRegex = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/;



    const changeValue = (e) => {
                console.log(e);
                setData({...data, [e.target.name]:e.target.value});
    };

    const validation = () => {
        if (data.nama === ""){
            console.log("nama kosong")
            let nama = {...newErrorMessage,
                nama:"Nama kosong"}
            newErrorMessage = (nama)
        }else if(!nameRegex.test(data.nama)){
            newErrorMessage = ({...newErrorMessage,
                nama:"Nama tidak boleh terdapat angka"})
        }
        if (data.noHandphone ===""){
            console.log("nomor handphone kosong")
            newErrorMessage = ({...newErrorMessage,
                noHandphone:"Nomor handphone kosong"})
        }else if(!phoneRegex.test(data.noHandphone)){
            newErrorMessage = ({...newErrorMessage,
                noHandphone:"Nomor telepon tidak sesuai ketentuan"})
        }
        if (data.email ===""){
            console.log("email kosong")
            newErrorMessage = ({...newErrorMessage,
                email:"email kosong"})
        } 
        if (data.pendidikan ===""){
            console.log("pendidikan kosong")
            newErrorMessage = ({...newErrorMessage,
                pendidikan:"pendidikan kosong"})
        }
        if (data.kelas ===""){
            console.log("kelas kosong")
            newErrorMessage = ({...newErrorMessage,
                kelas:"kelas kosong"})
        }
        console.log("validasi new message",newErrorMessage)
        setErrorMessage(newErrorMessage);
        console.log("validasi error message",errorMessage)
        console.log("validasi data",data) 
    };

    const handleSubmits = (e) => {
        validation();
        if((!(errorMessage.nama === "")) ||(!(errorMessage.email === "")) ||(!(errorMessage.noHandphone === "")) ||(!(errorMessage.pendidikan === "")) || (!(errorMessage.kelas === "")) ){
            alert("Masih ada data yang belum sesuai euy");
        }else {
            alert("Data atas nama "+ data.nama+ " berhasil diterima");
            // setData({
            //     nama:"",
            //     email:"",
            //     noHandphone:"",
            //     pendidikan:"",
            //     kelas:"",
            //     harapan:"",
            // },);
            // setErrorMessage({
            //     nama:"",
            //     email:"",
            //     noHandphone:"",
            //     pendidikan:"",
            //     kelas:"",
            // },);
        }
        console.log("handle submit error message",errorMessage)
        console.log("handle submit data",data)
        e.preventDefault();
    };

        return(
            <div className="p-5 border shadow" style={{'borderRadius':'30px'}}>
                <div className="container m-1 p-2">
                    <h3>Pendaftaran Peserta Coding Bootcamp</h3>
                    <div>{JSON.stringify(data)}</div>
                    <div>{JSON.stringify(errorMessage)}</div>
                    <form onSubmit={handleSubmits} className="p-2" style={{'borderRadius':'30px'}}>
                    <div className="mb-3">
                        <label for="InputNama" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="InputNama" placeholder="John Smith" name="nama" value={data.nama} onChange={(e)=> changeValue(e)}/>
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Email</label>
                        <input type="email" className="form-control" id="InputEmail" placeholder="something@mail.com" name="email" value={data.email} onChange={(e)=> changeValue(e)} />
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">No Handphone</label>
                        <input type="text" className="form-control" id="InputPhone" placeholder="0812345678..." name="noHandphone" value={data.noHandphone} onChange={(e)=> changeValue(e)} />
                    </div>
                    <div class="mb-3">
                        <label  className="form-label">Latar Belakang Pendidikan</label>
                        <div className="form-check">
                            <input clasName="form-check-input" type="radio" value="IT" id="radioIt" name="pendidikan" onChange={(e)=> changeValue(e)}/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                IT
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="pendidikan" value ="non-IT" id="radioNonIt"  onChange={(e)=> changeValue(e)}/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                Non-IT
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="select" className="form-label">Kelas Koding yang Dipilih</label>
                        <select id="select" className="form-select" aria-label="Default select example" name="kelas" value={data.kelas} onChange={(e)=> changeValue(e)} >
                            <option value="" >Open this select menu</option>
                            <option value="backend">Coding Backend with Golang</option>
                            <option value="frontend">Coding Frontend with ReactJS</option>
                            <option value="fullstack">Fullstack Developer</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="formFile" class="form-label">Foto Surat Kesungguhan</label>
                        <input className="form-control" type="file" id="formFile" ref={suratKesungguhan}/>
                    </div>
                    <div className="mb-3">
                        <label for="InputHarapan" class="form-label">Harapan Untuk Coding Bootcamp ini</label>
                        <textarea value={data.harapan} name="harapan" onChange={(e)=> changeValue(e)} className="form-control" id="InputHarapan" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
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