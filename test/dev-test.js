const Block = require('../Block');

var block = new Block('asd','abca','def','ghi');
// console.log(block.toString());
// console.log(Block.GenesisTree())
const mineBlock = Block.mineBlock(Block.GenesisTree(),'miiii')
console.log(mineBlock.toString())