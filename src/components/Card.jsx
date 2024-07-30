import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
        <motion.div drag dragConstraints={reference} className='relative overflow-hidden w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10'>
        <FaRegFileAlt />
        <p className='text-xs mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center justify-between mb-3 px-5'>
            <h5>{data.filesize}</h5>
            {data.close ? <IoMdClose /> : <LuDownload />}
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='font-semibold text-sm'>{data.tag.tagtitle}</h3>
            </div>
            )}
        </div>
        </motion.div>
  )
}

export default Card