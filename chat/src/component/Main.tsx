import React from 'react'
import Header from './Header';
import TextingTo from './TextingTo';
import ChatLog from './ChatLog';
import InputArea from './InputArea';



const Main : React.FC=()=>{
   return (
    <>
    <Header/>
    <TextingTo/>
    <ChatLog/>
    <InputArea/>
    </>
   )
}

export default Main;