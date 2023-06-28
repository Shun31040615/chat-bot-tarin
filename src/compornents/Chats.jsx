import React from "react"
import List from '@mui/material/List';
import {Chat} from "./index"












const Chats = (props) => {
    return(

    <List sx={{height: 400,
        padding: "0px",
        overflow: "auto",
        }} id = "scroll-area">
        
        {(props.chats).map((chat,index) => {            
            console.log("chat.text",chat.text,index)
            return <Chat text= {chat.text} type ={chat.type} key = {index.toString()} />
        })}
    </List>
)
    
}


export default Chats