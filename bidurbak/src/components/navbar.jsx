import React from 'react'
import { FaUser,FaSearch } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

const heads=["TEST","VİDEO","YEMEK","EĞLENCE","KİTAP","SİNEMA TV"]

export default function Navbar() {
  return (
    <div>
      <header className='bg-white h-16  flex flex-row font-semibold text-lg  items-center'>
          <div className='mr-24 font-extrabold ml-96'>
            <span>Bi</span>
            <span className='text-red-500'>Dur</span>
            <span>Bak</span>
          </div>
          <div className='flex flex-row ml-20'>{heads.map((baslik , index)=>(<Link to={baslik.toLowerCase()}> <div className='mr-9'>{baslik}</div></Link>))}</div>
          
          <div className=' ml-24 flex flex-row'>
            <span className='ml-16'><FaSearch></FaSearch></span> 
            <span className='ml-16'><FaUser></FaUser></span>
          </div>
      </header>

      <main className='bg-black h-10 flex flex-row font-semibold text-lg  items-center'>
        <div className='text-gray-300 flex flex-row items-center ml-96'>
          <div><FaRegNewspaper></FaRegNewspaper></div>
          <div className='ml-4 border-l pl-1 font-normal text-sm'> NELER OLUYOR ?</div>
          <div className='text-red-500 text-sm ml-1 mr-1'><GoDotFill></GoDotFill></div>
          </div>
          <div className='font-extralight text-xs ml-2 flex flex-row items-center text-gray-100'>
            <div>Cumhurbaşkanı Erdoğan Evlenecek Çiftler İçin Kredi ve Yeni Doğacak Bebekler İçin Yardım Desteklerini Duyurdu</div>
          </div>
      </main>
    </div>

   
  )
}
