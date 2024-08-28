import React from 'react'
// dùng fetch đu lấy dữ liệu và render dữ liệu ở phía server
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
}

export default async function page() {
    const user = await getData();
  return (
    <div>
        Tìm nạp dữ liệu server với fetch 
        {user.map((item:any)=>{
            return <li>{item.name}</li>
        })}
    </div>
  )
}
