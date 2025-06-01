import React from 'react'
import MenuItem from './components/MenuItem'
import {AiFillHome} from 'react-icons/ai'

const page = () => {
  return (
    <div>
      <MenuItem title="home" address="/" Icon={AiFillHome}/>
    </div>
  )
}

export default page