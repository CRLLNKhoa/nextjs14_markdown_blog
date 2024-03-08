"use client"
import React from 'react'
import Markdown from 'react-markdown'
import Link from "next/link"
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown';
import CommentComponents from '@/components/commentComponent';

export default function Page({params: {slug}}) {
  return (
    <main className='flex flex-col pt-4 pb-1 pr-4 h-full'>
    <h1 className='font-bold text-xl underline underline-offset-2 cursor-pointer'>React micro-animations library</h1>
    <p className='text-xs'>Posted at 1921-01-10</p>
    {/* <Markdown className='flex flex-col pb-4 content mt-4'>{text}</Markdown> */}
    <Link className='mt-auto underline underline-offset-2 text-sm font-bold flex group' href="/"> 
    <UseAnimations className='rotate-90' animation={arrowDown} size={22} />
    <p className='group-hover:bg-[#2E405B] group-hover:text-white duration-500 px-2'>Back to home</p></Link>
    <div className='mt-4 pb-8'><CommentComponents /></div>
</main>
  )
}
