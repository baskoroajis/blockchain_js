const Block = require('../Block');
const Wallet = require('../../wallet');
var block = new Block('asd','abca','def','ghi');
// console.log(block.toString());
// console.log(Block.GenesisTree())
//const mineBlock = Block.mineBlock(Block.GenesisTree(),'miiii')
// console.log(mineBlock.toString())

const wallet = new Wallet();
console.log(wallet.toString());