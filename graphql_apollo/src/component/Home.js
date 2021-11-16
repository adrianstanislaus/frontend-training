
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {
    useQuery,
    gql,
    useLazyQuery
  } from "@apollo/client";

import React, { useState, useEffect } from 'react';

const PENGUNJUNG = gql`
query MyQuery($id: Int) {
    anggota(where: {id: {_eq: $id}}) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

function Home() {
    const [getPengunjung, { loading, error, data }] = useLazyQuery(PENGUNJUNG,{ fetchPolicy: 'no-cache' });
    const [id,setId] = useState("");
    const [fetch,setFetch] = useState(false);
    const [list,setList] = useState([]);
    
    const hapusPengunjung = id => {
        setList([      
                ...list.filter(item => {        
                    return item.id !== id;      
                })    
            ]  
        );
    };
    
    const tambahPengunjung = newUser => {
        const newData = {
            id: uuidv4(),
            ...newUser
        }; 
        setList([...list, newData]  
        );
    };

    const onGetData = () => {
        getPengunjung({variables:{
            id: id,
        }
        })
        setTimeout(() => {setFetch(true)}, 5000);
        
        
    };

    const onChangeId = (e) => {
        if(e.target) {
            setId(e.target.value)
        }
    };

        return (
            <div>
                <Header/>
                <input value={id} onChange={onChangeId}/>
                <button onClick={() => onGetData()}>get list</button>
                { loading && <h1>loading...</h1>}
                { error && <h1>error...</h1>}
                { (!loading && !error && fetch) && 
                <ListPassenger 
                data={data.anggota}
                hapusPengunjung={hapusPengunjung}/>
                }
                <PassengerInput
                    tambahPengunjung={tambahPengunjung}
                />
            </div>
        )
    }


export default Home;