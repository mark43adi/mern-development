
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send('hello from router');
    
});

const jsonparser = bodyParser.json();

router.post('/register',jsonparser,async (req,res)=>{
    const {name, email, phone , work, password, cpassword} = req.body;
    //console.log(req.body);
    //res.json({message:req.body});
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"please fill all the required fields"});
    }
    try{
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(422).json({error:"email aready exists"});
        }else if(password != cpassword){
            return res.status(422).json({error:"password does not match"});

        }
        else{

            const user = new User({name, email , phone , work, password, cpassword});
            await user.save();
        }

        
        

        res.status(201).json({message:"user regsitered successfully!"});

    } catch (err) {
        console.log(err);
    }
    
});


router.post('/signin',jsonparser, async (req,res)=>{
    try{
        const {password, email} = req.body;
        if(!password || !email){
            return res.status(400).json({message:"please fill email and password"});
        }
        const userLogin = await User.findOne({email:email});
        if(!userLogin){
            return res.status(400).json({error:"invalid email and password"});

        }
        //console.log(userLogin);
        const isMatch = await bcrypt.compare(password,userLogin.password);

        let token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwttoken",token,{
            expires: new Date(Date.now()+ 256780000000),
            httpOnly:true

        });

        if(!isMatch){
            return res.status(400).json({error:"invalid email and password"});

        }
        else{
            return res.json({message:"signin successull"});
        }

    } catch (err){
        console.log(err);
    }
});

module.exports = router;