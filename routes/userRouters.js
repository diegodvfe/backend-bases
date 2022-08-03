import express from 'express'
import {  formularioLogin, registroUser } from '../controllers/userController.js';

const router = express.Router();


router.get('/login', formularioLogin)

router.get('/registro', registroUser)

    



export default router;
