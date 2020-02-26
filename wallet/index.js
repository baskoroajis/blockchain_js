const { INITIAL_BALANCE } = require('../config');
const ChainUtil = require('../chain-util');

class Wallet{

    constructor(){
        this.balance =  INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    toString(){
        return ` 
            initialBalance : ${this.balance}
            keyPair : ${this.keyPair}
            publicKey : ${this.publicKey.toString()}
        `;
    }

    sign(dataHash){
        return this.keyPair.sign(dataHash);
    }
}

module.exports = Wallet;