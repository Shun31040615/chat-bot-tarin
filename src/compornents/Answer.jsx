import React from "react"
import {makeStyles} from '@mui/material/styles';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { borderColor } from "@mui/system";


      ///button: {
        //borderColor:"#FFB549",
        //fontweight:600,
        //marginbottom:"8px",
        //"&:hover":{
            //backgroundcolor:"#FFB549",
          //  color:"#fff",
        //}
      //};

const Answer = (props) =>{

    return(
        <Button sx={{ fontWeight: 600, marginBottom: "8px", borderColor: '#FFB549',color: "#FFB549",
        "&:hover":{
            backgroundColor:"#FFB549",
            color:"#fff",
            borderColor:"#FFB549"
          },
         }} variant="outlined" onClick = {()=>props.select(props.content,props.nextId)}>{props.content}</Button>
    )
}

export default Answer
