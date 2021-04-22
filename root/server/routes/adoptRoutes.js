const express = require('express')
const router = express.Router()

const order = require('../models/order')


    
    
router.route('/')
    .post(async(req,res)=>{
        const newOrder = new order({
            title: req.body.formData.title,
            namePet: req.body.formData.namePet,
            age: req.body.formData.age,
            nameUser: req.body.formData.nameUser,
            address: req.body.formData.address,
            city: req.body.formData.city,
            state: req.body.formData.state,
        })
        await newOrder.save((err)=>{
            if(err) return console.log(err)
            console.log("se salvo correctamente")
        })
    })
    .get(async(req,res)=>{
        const Orders = await order.find({})
        res.send(Orders)
    })


module.exports = router