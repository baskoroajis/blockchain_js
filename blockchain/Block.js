// var forge = require('node-forge');
// var sha256 = require('js-sha256');
var sha256 = require('crypto-js/sha256');

const {DIFICULTY, MINE_RATE} = require('../config');

class Block{
    constructor(timeStamp, lastHash, hash, data, nonce, dificulty){
        this.timeStamp = timeStamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.dificulty = dificulty;
    }

    toString(){
        return `Block -- 
            TimeStamp : ${this.timeStamp}
            LastHash : ${this.lastHash.substring(0,10)}
            Hash : ${this.hash.substring(0,10)}
            Nonce : ${this.nonce}
            data : ${this.data}
            dificulty : ${this.dificulty}
        `
    }

    static mineBlock(lastBlock, data){
        let timeStamp, hash;
        const lastHash = lastBlock.hash;
        let {dificulty} = lastBlock;
        let nonce = 0;
        
        do{
            nonce++;
            timeStamp = Date.now();
            dificulty = Block.adjustDificulty(lastBlock, timeStamp);
            hash = Block.hash(timeStamp,lastHash,data,nonce);
        }while(hash.substring(0, dificulty) !== '0'.repeat(dificulty))

        return new this(timeStamp, lastHash, hash, data, nonce, dificulty);
    }

    static adjustDificulty(block, currentTimeStamp){
        //check is lastblock (timestamp + mine_rate) is more than current timestamp, it's mean the mining time is to easy (so need to decrease) because current timestamp is less than that (lasttimestamp + mine_rate)
        let expectedtimeStamp = block.timeStamp + MINE_RATE;
        let dificulty = expectedtimeStamp > currentTimeStamp ? block.dificulty + 1 :  block.dificulty - 1;
        return dificulty;
    }
    static hash(timeStamp,lastHash,data,nonce){
        return sha256(`${timeStamp}${lastHash}${data}${nonce}`).toString();
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

    static blockHash(block){
        const {timeStamp, lastHash, data,nonce} = block;
        return this.hash(timeStamp, lastHash, data,nonce) //sha256.create(`${timeStamp}${lastHash}${data}`).toString();
    }

    static GenesisTree(){
        return new this("Genesis time", '-------','Genesis-Hash', '', 0,DIFICULTY)
    }
}

module.exports = Block