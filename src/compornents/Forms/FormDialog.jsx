import React, { Component, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';
import { EmailRounded } from '@mui/icons-material';






const FormDialog= (props) => {
    const open = props.open;
    const handleClose = props.handleClose;
    const [name , setName] = useState("");
    const [email , setEmail] = useState();
    const [description , setDescription] = useState();

    const inputName = (event) => {
        setName(event.target.value)
        console.log({name:event.target})
        console.log(name);
    }
  
    const inputEmail = (event) => {
        setEmail(event.target.value)
    }

    const inputDescription = (event) => {
        setDescription(event.target.value)
    }

    const submitForm = () =>{
        const payload = {
            text:"お問い合わせがありました\n"  +
            "お名前:" + name + "\n" +
            "Email" + email + "\n" +
            "お問い合わせ内容\n" + description
        }
        const url = "https://hooks.slack.com/services/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"

        fetch(url,{
            method:"POST",
            body: JSON.stringify(payload)
        }).then(() => {
            alert("送信完了")
            setName("")
            setEmail("")
            setDescription("")
            return props.handleClose()
        })
    }
    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          お問い合わせフォーム
        </DialogTitle>
        <DialogContent>          
            <TextInput
                label = {"お名前(必須)"} multiline = {false} rows ={1}
                value = {name} type = {"text"} onChange = {inputName}
            />

            <TextInput
                label = {"メールアドレス(必須)"} multiline = {false} rows ={1}
                value = {email} type = {"email"} onChange = {inputEmail}
            />

            <TextInput
                label = {"お問い合わせ内容(必須)"} multiline = {true} rows ={5}
                value = {description} type = {"text"} onChange = {inputDescription}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={submitForm} autoFocus>
            送信
          </Button>
        </DialogActions>
      </Dialog>
      );
}

export default FormDialog;