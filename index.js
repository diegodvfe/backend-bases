import express from 'express' 
import userRouters from './routes/userRouters.js'

// Create the web aplication
const app = express () 

app.set('view engine', 'pug');
app.set( 'views', './views')

// Container static
app.use(express.static('public'))


app.use('/', userRouters)

// Define a pourt 
const port = 4000;

app.listen(port, ()=> {
    console.log(`El puerto esta funicnado ${port}`)
})