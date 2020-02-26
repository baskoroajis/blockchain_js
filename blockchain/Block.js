// var forge = require('node-forge');
// var sha256 = require('js-sha256');
var sha256 = require('crypto-js/sha256');

const {DIFICULTY} = require('../config');

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
        let {dificulty} = lastBlock.dificulty;
        let nonce = 0;
        
        do{
            nonce++;
            timeStamp = Date.now();
            dificulty 
            hash = Block.hash(timeStamp,lastHash,data,nonce);
        }while(hash.substring(0, DIFICULTY) !== '0'.repeat(DIFICULTY))

        return new this(timeStamp, lastHash, hash, data, nonce);
    }

    static adjustDificulty(block, currentTimeStamp){
        //check is lastblock timestamp + mine_rate is
    }
    static hash(timeStamp,lastHash,data,nonce){
        return sha256(`${timeStamp}${lastHash}${data}${nonce}`).toString();
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

    static blockHash(block){
        const {timeStamp, lastHash, data,nonce} = block;
        return this.hash(timeStamp, lastHash, data,nonce) //sha256.create(`${timeStamp}${lastHash}${data}`).toString();
    }

    static GenesisTree(){
        return new this("Genesis time", '-------','Genesis-Hash', '', 0)
    }
}

module.exports = Block