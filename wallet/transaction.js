const ChainUtils = require('../chain-util');

class Transaction {

    constructor(){
        this.id = ChainUtils.id();
        this.input = null;
        this.outputs = [];
    }

    static newTransaction(senderWallet, recipient, amount){
        const transaction = new this();

        if (amount > senderWallet.balance){
            console.log('invalid amount, because amount is greater than senderWallet')
            return ;
        }

        transaction.outputs.push(...[
            {amount : senderWallet.balance - amount, address : senderWallet.publicKey},
            {amount, address : recipient}
        ])

        Transaction.signTransaction(transaction, senderWallet);

        return transaction;
    }

    static signTransaction(transaction, senderWallet){
        transaction.input = {
            timestamp : Date.now(),
            amount : senderWallet.balance,
            address : senderWallet.publicKey,
            signature : senderWallet.sign(ChainUtils.hash(transaction.outputs))
        }
    }


}

module.exports = Transaction;