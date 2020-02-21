var Block = require('../Block')

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
})