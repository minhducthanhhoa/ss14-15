import React from 'react'
import axios, { Axios } from 'axios'

async function getData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("res", res);
    return res.data;
}

export default async function page() {
    const user = await getData();
  return (
    <div>
        Tìm nạp dữ liệu server bằng axios
        {user.map((item:any)=>{
            return <li>{item.name}</li>
        })}
    </div>
  )
}
