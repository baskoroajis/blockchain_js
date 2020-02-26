const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const UuidV1 = require('uuid/v1');
var sha256 = require('crypto-js/sha256');

class ChainUtil{
    static genKeyPair(){
        return ec.genKeyPair();
    }

    static id(){
        return UuidV1();
    }

    static hash(dataToHash){
        return sha256(dataToHash).toString();
    }
}


module.exports = ChainUtil;