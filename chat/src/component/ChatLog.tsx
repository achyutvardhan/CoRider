import React, { useEffect } from "react"
import { useState } from "react"
import {Box, Divider,AbsoluteCenter }from '@chakra-ui/react'
import "../css/chat.css"
import Dialogbox from "./Dialogbox"
import Senderchat from "./Senderchat"


interface chatItem {
    
    id: string | undefined,
    message: string | undefined,
    sender: {
      image: string | undefined, 
      is_kyc_verified: boolean | undefined,
      self: boolean | undefined,
      user_id: string | undefined
    },
    time: string | undefined
}



const ChatLog: React.FC<{chat: chatItem[]}>=(props)=>{

   const [recevier,setreceiver] = useState<boolean|null>(null)

    return (
        <>
        <div className="external-chat">
            <div className="internal-chat">
                
                <Box position='relative' padding='10'>
                <Divider border= '1px solid #B7B7B7' />
                 <AbsoluteCenter bg='white' px='4' color='#B7B7B7'  fontFamily='Mulish' fontSize='15px' fontStyle='normal' fontWeight='400' lineHeight='normal'>
                 12 NOV , 2023
                 </AbsoluteCenter>
                </Box>
                { 
                 props.chat.map((data)=>{
                    if(data.sender.self == true)
                    {
                       return <Senderchat message={data.message} />
                    }else{
                       return <Dialogbox message={data.message} src={data.sender.image} />
                    }
                 }) 
               }

            </div>
        </div>
        </>
    )
}

export default ChatLog;
