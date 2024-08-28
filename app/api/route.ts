// cấu hình các method (GET,PUSH,...)

import { NextResponse } from "next/server";

let products = [
    {
        id: 1,
        name: "iPhone 6",
        price: 3000000,
        image: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg"
    },
    {
        id: 2,
        name: "iPhone 7",
        price: 6000000,
        image: "https://damluongstore.com.vn/wp-content/uploads/2021/04/iphone-7-plus-hong-11.jpg"
    },
    {
        id: 3,
        name: "iPhone 8",
        price: 9000000,
        image: "https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg"
    }
]

export async function GET() {
    return NextResponse.json(products);
}