import React from 'react'

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

export default async function page() {
    const post = await getData();
  return (
    <div>
        {post.map((item:any)=>{
            return <li>{item.title}</li>
        })}
    </div>
  )
}
