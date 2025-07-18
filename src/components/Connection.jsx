import React from 'react'
import Adress from './Adress'
import { useState } from 'react'
import Cassete from './Cassete'
import AdressesList from './AdressesList'

import SpliterTest from './SpliterTest'
import { adresses, initalPorts } from '../constants'

const Connection = () => {

  const [index, setIndex] = useState(0)
  const [splicedAddresses, setSplicedAddresses] = useState([]);
  const [port, setPort] = useState(initalPorts)
  




  function handleNextAdress() {
    setIndex(index + 1)
  }
  function handleAddToCassete() {

  }

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <Adress index={index} />

        <SpliterTest need={adresses[index].users} port={port} setPort={setPort} />

      </div>

      <AdressesList index={index} setIndex={setIndex} splicedAddresses={splicedAddresses} />
      <button className='bg-black p-2 m-2 rounded-full text-white hover:bg-gray-200' onClick={handleNextAdress}>Next adress</button>
      <Cassete index={index} setSplicedAddresses={setSplicedAddresses} />
    </div>
  )
}

export default Connection