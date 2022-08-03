import express from 'express'


const formularioLogin = (req, res) =>{
   res.render('auth/login', {

   })
}

const registroUser = (req, res) =>{
    res.render('auth/registro', {
 
    })
 }
 



export {
    formularioLogin,
    registroUser,
}