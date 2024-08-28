"use client"
import axios from 'axios'
import React from 'react'

async function getData() {
    try {
        const res = await axios.get("https://example.com/invalid-endpoint1111");
        return res.data;
    } catch (error) {
        return "Trang không tồn tại"
    }
}

export default async function page() {
    const data = await getData();
  return (
    <div>{data}</div>
  )
}
