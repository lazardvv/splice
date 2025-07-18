import React from 'react'
import Adress from './Adress'
import { useState } from 'react'
import Cassete from './Cassete'
import AdressesList from './AdressesList'
import Splitters from './Splitters'
import SpliterTest from './SpliterTest'

const Connection = () => {

  const [index, setIndex] = useState(0)
  const [splicedAddresses, setSplicedAddresses] = useState([]);
  


  function handleNextAdress() {
    setIndex(index + 1)
  }
  function handleAddToCassete() {

  }

  return (
    <div>{/* Connection component to manage addresses and cassettes 
      <div className='flex justify-between items-center mb-4'>
        <Adress index={index} />
        <Splitters />
      </div>

      <AdressesList index={index} setIndex={setIndex} splicedAddresses={splicedAddresses} />
      <button className='bg-black p-2 m-2 rounded-full text-white hover:bg-gray-200' onClick={handleNextAdress}>Next adress</button>
      <Cassete index={index} setSplicedAddresses={setSplicedAddresses} />*/ }


      <SpliterTest need={3} />

    </div>
  )
}

export default Connection