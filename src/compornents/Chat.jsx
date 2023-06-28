import React from "react"
import ListItem from '@mui/material/ListItem';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';




const Chat =(props) => {
  const isquestion = (props.type ==="question");
  const classes = isquestion ? "p-chat__row":"p-chat__reverse";
    return(
        <ListItem className = {classes}>
        <ListItemAvatar>
          {isquestion ? (<Avatar alt="icon" src="/static/images/avatar/1.jpg" />):
          (<Avatar alt="icon" src="/static/images/avatar/1.jpg" />)}
          
        </ListItemAvatar>
        <div className = "p-chat__bubble">
            {props.text}
        </div>
      </ListItem>
    )
}

export default Chat