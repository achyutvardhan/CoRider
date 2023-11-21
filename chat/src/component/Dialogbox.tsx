import React from "react";
import { Avatar } from "@chakra-ui/react"; 
import img from "../Image/achyut.jpg"
import '../css/dialogbox.css'


 interface receiverMessage{
    message : string | undefined,
    src : string | undefined
 }
const Dialogbox : React.FC<receiverMessage> =(props)=>{
    return (<>
    <div className="external-dialog">
        <div className="internal-dialog">
            <Avatar name="CoRider" borderRadius='100px'
                  boxSize='60px' src={props.src}/>
            <div className="user-chat">{props.message}</div>
        </div>
    </div>
    </>)
}

export default Dialogbox;