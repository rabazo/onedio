import React from 'react'
import { Link } from 'react-router-dom';

const heads=["TEST","VİDEO","YEMEK","EĞLENCE","KİTAP","SİNEMA TV"]

export default function Navbar() {
  return (
    <div>
      <header className='bg-white h-16  flex flex-row font-semibold text-lg  items-center'>
          <div className='mr-24 font-extrabold ml-96'>
            <span>Bi</span>
            <span className='text-red-500'>DURMA</span>
            <span>Bak</span>
          </div>
          <div className='flex flex-row ml-20'>{heads.map((baslik , index)=>(<Link to={baslik.toLowerCase()}> <div className='mr-9'>{baslik}</div></Link>))}</div>
          
          <div className=' ml-24 flex flex-row'>

          </div>
      </header>

      <main className='bg-black h-10 flex flex-row font-semibold text-lg  items-center'>
        <div className='text-gray-300 flex flex-row items-center ml-96'>
       
          <div className='ml-4 border-l pl-1 font-normal text-sm'> NELER OLUYOR ?</div>
         
          </div>
          <div className='font-extralight text-xs ml-2 flex flex-row items-center text-gray-100'>
            <div>Cumhurbaşkanı Erdoğan Evlenecek Çiftler İçin Kredi ve Yeni Doğacak Bebekler İçin Yardım Desteklerini Duyurdu</div>
          </div>
      </main>
    </div>

   
  )
}
