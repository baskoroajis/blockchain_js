const express = require('express');
const BlockChain = require('../blockchain');
const bodyParser = require('body-parser');
const P2pServer = require('./p2p-server');

const HTTP_PORT = process.env.HTTP_PORT || 3001;
app.use(bodyParser.json())


const app = new express();
const bc = new BlockChain();
const p2pServer = new P2pServer(bc);

app.get('/blocks',(req,res)=>{
    res.json(bc.chain);
})

app.post('/mine', (req,res) => {
    const newBlock = bc.addBlock(req.body.data);
    console.log(`new block added to chain ${newBlock}`);
    res.redirect('/blocks');
})




app.listen(HTTP_PORT, () => {console.log('server listening on port ', HTTP_PORT)})
p2pServer.listen();