import React from 'react'
import Adress from './Adress'
import { useState } from 'react'
import Cassete from './Cassete'
import AdressesList from './AdressesList'

const Connection = () => {

    const [index,setIndex] = useState(0)
    const [splicedAddresses, setSplicedAddresses] = useState([]);

    function handleNextAdress(){
      setIndex(index+1)
    }
    function handleAddToCassete() {
      
    }

  return (
    <div>      
      <Adress index={index}/>
      <AdressesList index={index} setIndex={setIndex} splicedAddresses={splicedAddresses} />
      <button className='bg-black p-2 m-2 rounded-full text-white hover:bg-gray-200' onClick={handleNextAdress}>Next adress</button>
      <Cassete index={index} setSplicedAddresses={setSplicedAddresses} />  
      
    </div>
  )
}

export default Connection
