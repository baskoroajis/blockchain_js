const express = require('express');
const BlockChain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = new express();
const bc = new BlockChain();

app.get('/getBlocks',(req,res)=>{
    res.json(bc.chain);
})


app.listen(HTTP_PORT, () => {console.log('server listening on port ', HTTP_PORT)})