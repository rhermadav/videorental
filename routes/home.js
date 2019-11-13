const express=require('express');
const router=express.Router();

route.get('/',(req,res)=>{
  res.render('index.pug',{title:'My Express App',message:'Hello'});
 });
 
 route.get('/api/genres',(req,res)=>{
   res.send(genres);
 });
modules.exports=router;