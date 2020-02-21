var BlockChain = require('../BlockChain')
var Block = require('../Block')

describe('BlockChain', () =>{
    let bc;

    beforeEach(() =>{
        bc = new BlockChain();

    //  var block = new Block()
    })

    it('Check first element in blockchain', () =>{
        expect(bc.chain[0]).toEqual(Block.GenesisTree())
    })

    it('Check the data in the chain with insert one',() =>{
        const data = 'haloooo'
        bc.addBlock(data)
        expect(bc.chain[bc.chain.length-1].data).toEqual(data)
    })
})