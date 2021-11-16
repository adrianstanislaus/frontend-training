import "./Home.css"
import React, { useState,useEffect} from 'react';
const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data
    
    const [state, setState] = useState({
        nama: "",
        umur: "",
        jenisKelamin: "",
      })
    
      const onChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
      }
    
      const handleSubmit = (e) => {
        if (state.nama.trim() && state.umur && state.jenisKelamin) {
          const umur = state.umur
          if (umur >= 75 || umur <= 12) {
            alert("Umur tidak sesuai")
          } else {
            const newData = {
            id: state.id,
              nama: state.nama,
              umur: state.umur,
              jenisKelamin: state.jenisKelamin,
            }
            props.updatePengunjung(newData)
            setState({
              nama: "",
              umur: "",
              jenisKelamin: "Pria",
            })
          }
        } else {
          alert("Data masih ada yang kosong")
        }
      }

      const handleEdit = (id) => {
        const currentTitle = document.getElementById('viewMode'+id);
        const editTitle = document.getElementById('editMode'+id);
        currentTitle.style.display = "none";
        editTitle.style.display = "block";
        setState({
            id: id,
            nama: document.getElementById('nama'+id).innerHTML,
            umur: document.getElementById('umur'+id).innerHTML,
            jenisKelamin: document.getElementById('jk'+id).innerHTML,})
    };
    

    return (
        <>
        <tr id={'viewMode'+id}>
            <td id={'nama'+id}>{nama}</td>
            <td id={'umur'+id}>{umur}</td>
            <td id={'jk'+id}>{jenis_kelamin}</td>
            <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
            <td className="removeBorder" onClick={() => handleEdit(id)}><button>edit</button></td>
        </tr>
        <>
        <tr id={'editMode'+id} style={{display:'none'}}>
            <td><input type="text" className="input-text" placeholder={nama} value={state.nama} name="nama" onChange={onChange} /></td>
            <td><input type="number" className="input-text" placeholder={umur} value={state.umur} name="umur" onChange={onChange} /></td>
            <td>
                {jenis_kelamin==="Pria"?(<select onChange={onChange} name="jenisKelamin">
            <option value="Pria" selected>
                Pria
            </option>
            <option value="Wanita">Wanita</option>
            </select>): (<select onChange={onChange} name="jenisKelamin">
            <option value="Pria">
                Pria
            </option>
            <option value="Wanita" selected>Wanita</option>
            </select>)}
            </td>
            <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
            <td className="removeBorder" onClick={() => handleSubmit()}><button>submit edit</button></td>
        </tr>
    </>
    </>
    )
}

export default ListItem;