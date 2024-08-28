"use client"
import axios from 'axios'
import React from 'react'

async function getData() {
    const res = await axios.get("https://open-meteo.com/");
    return res.data;
}

export default async function page() {
    const data = await getData();
  return (
    <div>
        Thông tin thời tiết
        {data.map((item:any)=>{
            return <li>{item.temperature_2m}</li>
        })}
    </div>
  )
}
