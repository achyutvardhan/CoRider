import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import TextingTo from './TextingTo';
import ChatLog from './ChatLog';
import InputArea from './InputArea';
import '../css/main.css'

interface chatItem {
    
      id: string,
      message: string,
      sender: {
        image: string,
        is_kyc_verified: boolean,
        self: boolean,
        user_id: string
      },
      time: string
}

interface ApiResponse {
  chats: chatItem[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

const Main : React.FC=()=>{
const [chatdata,setchatdata] = useState<ApiResponse | null>(null)

  useEffect( ()=>{
    const fetchData =async () => {
      await axios.get<ApiResponse>('https://qa.corider.in/assignment/chat?page=0')
      .then((res)=>{
        setchatdata(res.data)
        console.log(res.data)
      }).catch((err)=> console.log(err));
    };
    fetchData();
  },[])
   return (
    <>
    <div className="external-main">
    <Header name = {chatdata?.name} />
    <TextingTo  from ={chatdata?.from} to = {chatdata?.to}/>
      <div className="internal-main"> 
      <ChatLog chat={chatdata?.chats || []} />
    <InputArea/>
      </div>
    </div>
    </>
   )
}

export default Main;