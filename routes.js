const { json } = require('body-parser')
const express = require('express')
const routes = express.Router()
const database_model = require('./model/datamodel')
// GETTING ALL 
routes.get('/', async (req,res)=>{

 try{
    const ge = await database_model.find()
    res.json(ge)
 }catch (err) {
res.status(500),json({messege:err.messege})
 }
})
// GETTING ONE
routes.get('/:id', getSubscriber, (req, res) => {
  res.json(res.maindata)
})
// POSTING ONE
routes.post('/',async(req,res)=>{
 const dat = new database_model({
  name : req.body.name,
  date : req.body.date,
  avaliblity : req.body.avaliblity
 })
 try{
  const newma = await dat.save()
  res.status(201).json(newma)
 }catch (err) {
res.status(500).json({message:err.messege})
 }
})
// UPDATING ONE
routes.patch('/:id',getSubscriber ,async(req,res)=>{
  if(req.body.name != null){
    res.maindata.name = req.body.name
  }
  if(req.body.date != null){
    res.maindata.date = req.body.date
  }
    if(req.body.avaliblity != null){
    res.maindata.avaliblity = req.body.avaliblity
  }
  try{
    const updatedate = await res.maindata.save()
    res.json(updatedate)
  }catch(err){
    res.status(500).json({messege:err.message})
  }

})
// DELETING One
routes.delete('/:id', getSubscriber ,async(req,res)=>{
  try{
    await res.maindata.remove()
    res.json({messenge:"item deleted"})
  }catch(err){
    res.status(500).json({message:err.messege})
  }

    
})


async function getSubscriber(req, res, next) {
  let maindata
  try {
    maindata = await database_model.findById(req.params.id)
    if (maindata == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.maindata = maindata
  next()
}

module.exports = routes
