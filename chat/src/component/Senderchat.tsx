import React from "react";
import '../css/dialogbox.css'
import '../css/senderchat.css'


interface  sendMessage { 

    message : string | undefined
}
const Senderchat : React.FC<sendMessage> =(props)=>{
    return (<>
    <div className="external-sender">
        <div className="internal-sender">
            <div className="sender-chat">{props.message}</div>
        </div>
    </div>
    </>)
}

export default Senderchat;