import React from 'react'
import { FaFileInvoice } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"



function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <FaFileInvoice />
      <p className='text-sm mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0  w-full left-0'>
        <div className='flex items-center justify-between py-3 px-9 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center'>
            {data.close ? <IoIosClose /> : <FiDownload size=".7rem" color='#fff' />}
          </span>
        </div>
        {
          data.tag.isOpen ? (
            <div className={`tag py-4 w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
          ) : null}

      </div>
    </motion.div>

  )
}

export default Card
