import express from 'express'

const router = express.Router();

//  router.get('/login', (req,res)=>{
//     res.render('auth/login');
//  })

router.route('/login')

    .get(function(req, res){
        res.render('auth/login', {
            autenticado: true
        })
    })



export default router;
