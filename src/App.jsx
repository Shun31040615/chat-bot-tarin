import React, { Component, useEffect, useState,useCallback } from 'react';
import defaultDataset from "./dataset"
import "./assets/styles/style.css"
import {Answerslist, Chats} from './compornents/index.js';
import { Chat } from '@mui/icons-material';
import FormDialog from './compornents/Forms/FormDialog';




function App() {

  const [answers, setAnswers] = useState([]);
  const [chats , setChats] = useState([]);
  const [dataset , setDataset] = useState(defaultDataset);
  const [open , setOpen] = useState(false);
  const [currentId, setCurrentId] = useState("init");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  },[setOpen]);

  const displaynextquestion = (nextquestionId,nextDataset)=>{

    addChats({
      text:nextDataset.question,
      type:"question"
    })
    
    setAnswers(nextDataset.answers)
    console.log("nextquestionId:", nextquestionId)

  }

  const selectanswer = (selectedanswer,nextquestionId) => {
    switch(true){
      case(nextquestionId === "init"):
      setTimeout(() => displaynextquestion(nextquestionId, dataset[nextquestionId]),3000);
      
        break;

      case(/^http:*/.test(nextquestionId)):
        const a = document.createElement("a");
        a.href = nextquestionId;
        a.target = "_blank";
        a.click();
        break;
      
      case(nextquestionId === "contact"):
      handleClickOpen();
        break;

      default:
      
      addChats({
        text:selectedanswer,
        type:"answer"
      })
      console.log("chats完了")
      console.log("nextquestionId:", nextquestionId)
      setTimeout(() => displaynextquestion(nextquestionId, dataset[nextquestionId]),3000);
      break;
    }
  }
  const addChats = (chat) =>{
    setChats(prevChats =>{
    return  [...prevChats, chat]
  })
  }
  
  useEffect(() => {
    const initAnswer=""
    selectanswer(initAnswer,currentId)  
    console.log(currentId);
    console.log("実行");
  },[]);
 
  useEffect((prevProps,prevState,snapshot) => {
    const scrollArea = document.getElementById("scroll-area")
    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  })

  return (
    <section className = "c-section"> 
      <div className = "c-box">
        <Chats chats = {chats}/>
        {console.log("ca;",chats)}
        <Answerslist answers = {answers} select = {selectanswer}/>
        <FormDialog open = {open} handleClose = {handleClose} />
      </div> 
    </section>
  );
}

export default App;
