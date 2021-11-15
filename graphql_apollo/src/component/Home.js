
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {
    useQuery,
    gql
  } from "@apollo/client";

import React, { useState } from 'react';

const PENGUNJUNG = gql`
  query GetAnggota {
    anggota {
        id
        nama
        umur
        jenis_kelamin
      }
  }
`;

function Home() {
    const { loading, error, data } = useQuery(PENGUNJUNG);
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
        return (
            <div>
                <Header/>
                { loading && <h1>loading...</h1>}
                { error && <h1>error...</h1>}
                { !loading && 
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