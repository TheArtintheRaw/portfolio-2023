import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
    initial={{
      x: -200,
      opacity: 0,
    }}
    transition={{
      duration: 1.2,
    }}
    whileInView={{
      x: -10,
      opacity: 1,
    }}
    className="flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
            x: -10,
            opacity: 1,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="headshot"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[350px] mx-auto"
        />
        <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">A Little About <span className="underline decoration-[#f9a50a]/50">Myself</span></h4>
        <p className="text-sm">{pageInfo?.backgroundInformation}</p>
      </div>
        </motion.div>
  )
}