var Block = require('./Block')

class BlockChain{
    constructor(){
        this.chain = [Block.GenesisTree()]

    }

    addBlock(data){
        var lastBlock = this.chain[this.chain.length-1];
        var newBlock = Block.mineBlock(lastBlock,data);
        this.chain.push(newBlock);
    }


    isValidChain(chain){
        //check for the genesis block, if not match then invalid
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.GenesisTree())){
            return false;
        }

        for (var i=1; i <chain.length; i++){
            const lastBlock = chain[i-1];
            const block = chain[i];

           if (block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)){
               return false;
           }
        }

        return true;
    }
}

module.exports = BlockChain;