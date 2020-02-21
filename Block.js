var forge = require('node-forge');
var sha256 = require('js-sha256');

class Block{
    constructor(timestamp, last_hash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = last_hash;
        this.hash = hash;
        this.data = data
    }

    toString(){
        return `Block -- 
            TimeStamp : ${this.timestamp}
            LastHash : ${this.lastHash}
            Hash : ${this.hash}
            data : ${this.data}
        `
    }

    static mineBlock(lastBlock, data){
        const timeStamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timeStamp,lastHash,data); //sha256.create(`${timeStamp}${lastHash}${data}`);
        return new this(timeStamp, lastHash, hash, data);
    }

    static hash(timeStamp,lastHash,data){
        return sha256.create(`${timeStamp}${lastHash}${data}`).toString();
    }

    static blockHash(block){
        const {timeStamp, lastHash, data} = block;
        return sha256.create(`${timeStamp}${lastHash}${data}`)
    }
    static GenesisTree(){
        return new this("Genesis time", '-------','Genesis-Hash', '')
    }
}

module.exports = Block