import React from 'react'
import {ArrowBackIcon,EditIcon} from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/react'
import '../css/header.css'

interface headername {
name :string | undefined
}

const Header : React.FC<headername>=(props)=>{
   return (
    <>
      <div className="external-header">
            <div className="internal-header">
                  <div className='one-box'>
                  <ArrowBackIcon fontSize={25} />
                  <Heading ml={50} as='h2'>{props.name}</Heading>
                  </div>
                  <EditIcon fontSize={25} mr={20} />
            </div>
      </div>
    </>
   )
}

export default Header;