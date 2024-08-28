"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            let res = await axios.get("http://localhost:3001/api");
            setUser(res.data);
        }
        getData();
    },[])
    // render dữ liệu ở phía client
  return (
    <div>page
        {user.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
