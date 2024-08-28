"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            let res = await axios.get("http://localhost:3000/api");
            setProducts(res.data);
        }
        getData();
    },[])
  return (
    <div>
        {products.map((item:any)=>{
            return (
                <ul>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>src = "{item.image}"</li>
                </ul>
            )
        })}
    </div>
  )
}
