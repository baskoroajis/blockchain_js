var BlockChain = require('../index')
var Block = require('../Block')

describe('BlockChain', () =>{
    let bc, bc2;

    beforeEach(() =>{
        bc = new BlockChain();
        bc2 = new BlockChain();
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

    it('cek for creating new chain with valid data', ()=>{
        bc2.addBlock('foo');
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    })

    it('cek for invalid data ', ()=>{
        bc2.chain[0].data = 'not foo';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    })


    it('add new corrupt data', () =>{
        bc2.addBlock('new foo');
        bc2.chain[1] = 'corrupt not foo';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    })


    it('replace chain with valid chain ', () => {
        bc2.addBlock('newchain');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    })

    it('replace chain with invalid data', ()=>{
        bc.addBlock('newInvalidchain');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);
    })

 
})