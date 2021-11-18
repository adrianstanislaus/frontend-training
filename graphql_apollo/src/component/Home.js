import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {
    gql,
    useLazyQuery,
    useMutation,
    useSubscription
  } from "@apollo/client";

import React, { useState, useEffect } from 'react';

const SUBSCRIPTION_PENGUNJUNG_BY_ID = gql`
subscription MySubscription($id: Int_comparison_exp = {}) {
  anggota(where: {id: $id}) {
    jenis_kelamin
    nama
    umur
    id
  }
}
`;

const PENGUNJUNG_BY_ID = gql`
query MyQuery($id: Int_comparison_exp = {}) {
    anggota(where: {id: $id}) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const INSERT_PENGUNJUNG = gql`
mutation MyMutation( $umur: Int  $nama: String = "", $jenis_kelamin: String = "") {
    insert_anggota(objects: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
      affected_rows
    }
  }`;

const DELETE_PENGUNJUNG = gql`
mutation MyMutation2($id: Int_comparison_exp = {}) {
    delete_anggota(where: {id: $id}) {
      affected_rows
    }
  }
`;

const UPDATE_PENGUNJUNG = gql`
mutation MyMutation3($umur: Int = 10, $nama: String = "", $jenis_kelamin: String = "", $id: Int_comparison_exp = {}) {
    update_anggota(where: {id: $id}, _set: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
      affected_rows
    }
  }
`;

function Home() {
    //const [getPengunjung, { loading, error, data }] = useLazyQuery(PENGUNJUNG_BY_ID,{ fetchPolicy: 'no-cache' ,notifyOnNetworkStatusChange: true});
    const [id,setId] = useState("");
    const [notExist,setNotExist] = useState(false);
    const [variables,setVariables] = useState({});
    const { loading, error, data } = useSubscription(SUBSCRIPTION_PENGUNJUNG_BY_ID,{variables:variables});
    const [insertToDo,{ data: dataInsert, loading: loadingInsert, error: errorInsert }] = useMutation(INSERT_PENGUNJUNG)
    const [deleteToDo,{ data: dataDelete, loading: loadingDelete, error: errorDelete }] = useMutation(DELETE_PENGUNJUNG)
    const [updateToDo,{ data: dataUpdate, loading: loadingUpdate, error: errorUpdate }] = useMutation(UPDATE_PENGUNJUNG)
  
    
    const hapusPengunjung = id => {
        deleteToDo({variables:{id:{"_eq": id}}})
    };

    const updatePengunjung = updatedUser => {
        updateToDo({variables:{id:{"_eq": updatedUser.id},nama:updatedUser.nama,umur:updatedUser.umur,jenis_kelamin:updatedUser.jenisKelamin}})
    };
    
    const tambahPengunjung = newUser => {
        insertToDo({variables:{nama:newUser.nama,umur:newUser.umur,jenis_kelamin:newUser.jenisKelamin}})  
    };

    useEffect(()=> {
        if (data?.anggota.length === 0) {
          setNotExist(true)
        }else{
          setNotExist(false)
        }
    },[data]);

    const onGetData = () => {
        if (id===""){
            setVariables({})
        }else{
            setVariables({id:{"_eq": id}})
        }     
    };

    const onChangeId = (e) => {
        if(e.target) {
            setId(e.target.value)
        }
    };

        return (
            <div>
                <Header/>
                <div>
                <input value={id} onChange={onChangeId}/>
                <button onClick={() => onGetData()}>find by id</button>
                </div><br></br>
                { (loading || loadingInsert || loadingDelete || loadingUpdate) ? 
                    (<h1>loading...</h1>):
                 error ? (<h1>error...</h1>):
                (<ListPassenger 
                data={data?.anggota}
                hapusPengunjung={hapusPengunjung}
                updatePengunjung={updatePengunjung}
                />
                )
                }
                {notExist && <p>tidak ada data yang sesuai :(</p>}
                <PassengerInput
                    tambahPengunjung={tambahPengunjung}
                />
            </div>
        )
    }


export default Home;