import db from '@/utils/db'
//import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';

import { NextResponse } from 'next/server';

export const GET = async(request) =>{
    const tasks = await db.task.findMany();
    return NextResponse.json({data :tasks});
}

export const POST =  async(request) =>{

   const data = await request.json()
   const task = await db.task.create({
    data : {
        content : data.content,
    }
   })
    return NextResponse.json({data:task});
}