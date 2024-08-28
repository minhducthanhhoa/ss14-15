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
    <div>fetch data với thư viện swr
        {data.map((item:any)=>{
            return (
                <ul>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                    <li>{item.address}</li>
                </ul>
            )
        })} 
    </div>
  )
}
