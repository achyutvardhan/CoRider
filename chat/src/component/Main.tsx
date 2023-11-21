import React from 'react'
import Header from './Header';
import TextingTo from './TextingTo';
import ChatLog from './ChatLog';
import InputArea from './InputArea';
import '../css/main.css'


const Main : React.FC=()=>{
   return (
    <>
    <div className="external-main">
    <Header/>
    <TextingTo/>
      <div className="internal-main">  
    <ChatLog/>
    <InputArea/>
      </div>
    </div>
    </>
   )
}

export default Main;