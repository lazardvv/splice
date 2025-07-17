import React from 'react'
import { adresses } from '../constants'

const Adress = ({ index }) => {
  return (
    <div>
      <div className='flex'>
        <div>
          <p className='label-style'>id: </p>
          <p className='label-style'>Street: </p>
          <p className='label-style'>Street number: </p>
          <p className='label-style'>District:</p>
          <p className='label-style'>Users:</p>
          <p className='label-style'>Tube Nr: </p>
          <p className='label-style'>Tube Type:</p>
          <p className='label-style'>Micro Tube Nr:</p>
          <p className='label-style'>Cable Length:</p>
          <p className='label-style'>Fibers:  </p>
        </div>
        <div>
          <p className='bg-black text-white mt-2 p-2 rounded-full'> {adresses[index].id}</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'> {adresses[index].street}</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'>{adresses[index].streetNumber}</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'> {adresses[index].district}</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'>{adresses[index].users}</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'> {adresses[index].tubeNr}</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'> {adresses[index].tubeType}</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'>{adresses[index].microTubeNr}</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'> {adresses[index].cableLength} m</p>
          <p className='bg-black text-white mt-2 p-2 rounded-full'> {adresses[index].fibers} </p>
        </div>
      </div>
    </div>
  )
}

export default Adress
