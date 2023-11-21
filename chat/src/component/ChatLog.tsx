import React from "react"
import {Box, Divider,AbsoluteCenter }from '@chakra-ui/react'
import "../css/chat.css"
import Dialogbox from "./Dialogbox"
import Senderchat from "./Senderchat"

const ChatLog: React.FC=()=>{
    return (
        <>
        <div className="external-chat">
            <div className="internal-chat">
                
                <Box position='relative' padding='10'>
                <Divider border= '1px solid #B7B7B7' />
                 <AbsoluteCenter bg='white' px='4' color='#B7B7B7'  fontFamily='Mulish' fontSize='15px' fontStyle='normal' fontWeight='400' lineHeight='normal'>
                 12 JAN, 2023
                 </AbsoluteCenter>
                </Box>
  
              <Dialogbox/>
              <Dialogbox/>
              <Dialogbox/>
              <Senderchat/>
              <Dialogbox/>
              <Dialogbox/>
              <Senderchat/>


            </div>
        </div>
        </>
    )
}

export default ChatLog;
