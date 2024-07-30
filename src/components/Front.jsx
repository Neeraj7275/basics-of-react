import React, { useRef } from 'react'
import Card from './Card'

const Front = () => {
    const ref = useRef(null);
    const data = [
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing fjgnbnf jertgjn.",
            filesize:".9mb",
            close: false,
            tag: {isOpen:true, tagtitle:"Download Now", tagColor:"blue"},
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing fjgnbnf jertgjn.",
            filesize:".9mb",
            close: true,
            tag: { isOpen:true, tagtitle:"Upload",tagColor:"green"},
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing fjgnbnf jertgjn.",
            filesize:".9mb",
            close: true,
            tag: { isOpen:false, tagtitle:"Upload",tagColor:"green"},
        },
    ];
  return (
         <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
         {data.map((item,index)=>(
            <Card data={item} reference={ref} />
         ))}
    </div>
  )
}

export default Front