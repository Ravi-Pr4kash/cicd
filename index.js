import express from 'express'

const app = express();

app.post('/signup' , (req,res) => {
    res.json({
        message: "Signup page"
    })
})

app.post('/signin', (req,res) => {
    res.json({
        message: "Signin page"
    })
})

app.get('/users', (req,res) => {
    res.json({
        message: "available users"
    })
})


app.listen(3000)