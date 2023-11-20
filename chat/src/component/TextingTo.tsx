import React from "react"
import {HamburgerIcon} from '@chakra-ui/icons'
import { Heading , IconButton ,Image} from '@chakra-ui/react'
import '../css/talking.css'
import img from '../Image/achyut.jpg'




const TextingTo : React.FC=()=>{
    return (<>
     <div className="external-talking">
            <div className="internal-talking">
                  <div className='one-box'>
                  <Image
                  borderRadius='100px'
                  boxSize='90px'
                  src={img}
                  />
                  <div className="insider">
                  <Heading color="#606060"  fontFamily= "Mulish" fontSize="16px" fontWeight="500" lineHeight= "normal"> From <span >Achyut</span></Heading>
                  <Heading color="#606060"  fontFamily= "Mulish" fontSize="16px" fontWeight="500" lineHeight= "normal"> To <span>vardhan</span></Heading>
                  </div>
                  </div>
                  <HamburgerIcon fontSize={35} cursor="pointer" mr={20} />
            </div>
      </div>
    </>)
}

export default TextingTo;