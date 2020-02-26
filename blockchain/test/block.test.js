var Block = require('../Block')
const {DIFICULTY} = require('../../config');


describe('Block', () =>{
    let block,lastblock,data;

    beforeEach(() =>{
        data = 'bas';
        lastblock = Block.GenesisTree();
        block = Block.mineBlock(lastblock,data);
    })

    it('sets data match with the input', ()=> {
        expect(block.data).toEqual(data);
    })

    it('sets lastHash match with lastblock lasthash',() =>{
        expect(block.lastHash).toEqual(lastblock.hash);
    })

    it('set for hash is meet with the DIFICULTY ',()=>{
        expect(block.hash.substring(0,DIFICULTY)).toEqual('0'.repeat(DIFICULTY));
        console.log(block.toString());
    })
})