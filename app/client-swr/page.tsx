"use client"

import axios from 'axios'
import useSWR from 'swr'
// viết hàm đi lấy dữu liệu data
const getData = (url:string)=> axios.get(url).then(res => res.data)

export default function page() {
    const {data,error} = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        getData
    )
    if(error) return <div>quá trình lấy dữ liệu thất bại</div>
    if(!data) return <div>đang tải dữ liệu</div>
   
  return (
    <div>fetch data với thư viện awr
        {data.map((item:any)=>{
            return <li>{item.name}</li>
        })} 
    </div>
  )
}
