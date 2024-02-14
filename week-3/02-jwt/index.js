const express = require("express")

const app = express();
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod")
const Port = 3000;
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);


function signJwt(username, password) {
    const usernameRes = emailSchema.safeParse(username)
    const passwordRes = passwordSchema.safeParse(password)


    if(!usernameRes.success || !passwordRes.success){
        return null;
    }

    const signature  = jwt.sign(username, jwtPassword)
    return signature
}


app.get("/singup", function(req, res){
    const newUN = req.query.user;
    const newPass = req.query.pass;
    const token = signJwt(newUN, newPass);
    const decode = jwt.decode(token)
    res.json({
        msg :  token,
        data: decode
    })
})

function verifyUser(token){
    try{
        const signal = jwt.verify(token, jwtPassword)
        return signal
    }

    catch(error){
        return "FAILED"
    }
}

app.post("/verifyUser", function(req, res){
    const vToken = req.headers.token;
    res.send(verifyUser(vToken))
})



app.listen(Port)

