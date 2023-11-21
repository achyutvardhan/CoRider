import React from "react"
import {HamburgerIcon} from '@chakra-ui/icons'
import { Heading , IconButton ,Image ,Menu, MenuButton,MenuList , MenuItem} from '@chakra-ui/react'
import '../css/talking.css'
import img from '../Image/achyut.jpg'

interface details{
     from : string |undefined,
     to : string | undefined
}



const TextingTo : React.FC<details>=(props)=>{
    return (<>
     <div className="external-talking">
            <div className="internal-talking">
                  <div className='one-box'>
                  <Image
                  borderRadius='100px'
                  boxSize='70px'
                  src={img}
                  />
                  <div className="insider">
                  <Heading color="#606060"  margin='0' fontFamily= "Mulish" fontSize="14px" fontWeight="500" lineHeight= "normal"> From <span >{props.from}</span></Heading>
                  <Heading color="#606060" margin-top='10' fontFamily= "Mulish" fontSize="14px" fontWeight="500" lineHeight= "normal"> To <span>{props.to}</span></Heading>
                  </div>
                  </div>
                  {/* <HamburgerIcon fontSize={35} cursor="pointer" mr={20} /> */}
            <Menu >
                    <MenuButton
                     as={IconButton}
                     aria-label='Options'
                     icon={<HamburgerIcon  fontSize={35} cursor="pointer"   />}
                     mr={20}
                     border='none'
                     background='transparent'
                    />
                 <MenuList >
                   <MenuItem height='48px' padding='7px 12px' alignItems='center' gap='12' alignSelf='stretch' borderRadius='8px 8px 0px 0px' border='1px solid #E5E5E0' background='#FFF' >
                        Members
                   </MenuItem>
                   <MenuItem height='48px' padding='7px 12px' alignItems='center' gap='12' alignSelf='stretch'  border='1px solid #E5E5E0' background='#FFF'>
                        Share Number
                   </MenuItem>
                   <MenuItem height='48px' padding='7px 12px' alignItems='center' gap='12' alignSelf='stretch' borderRadius='0px 0px 8px 8px' border='1px solid #E5E5E0' background='#FFF'>
                        Report
                  </MenuItem>

                  </MenuList>
               </Menu>
            </div>
      </div>
    </>)
}

export default TextingTo;