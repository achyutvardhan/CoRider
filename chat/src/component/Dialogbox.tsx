import React from "react";
import { Avatar } from "@chakra-ui/react"; 
import img from "../Image/achyut.jpg"
import '../css/dialogbox.css'

const Dialogbox : React.FC =()=>{
    return (<>
    <div className="external-dialog">
        <div className="internal-dialog">
            <Avatar name="CoRider" borderRadius='100px'
                  boxSize='60px' src={img}/>
            <div className="user-chat">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque animi rem iusto fugit mollitia, iure sapiente. Accusamus ipsum eligendi deserunt ratione quae? Similique inventore quibusdam autem possimus nesciunt perspiciatis saepe.</div>
        </div>
    </div>
    </>)
}

export default Dialogbox;