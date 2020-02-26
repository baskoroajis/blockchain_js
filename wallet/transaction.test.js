const Transaction = require('./transaction');
const Wallet = require('../wallet');


describe('Transaction', () => {
    let transaction, wallet, amount,recepient;

    beforeEach(()=>{
        wallet = new Wallet();
        amount = 50;
        recepient = 'r3cepi3nt';
        transaction = Transaction.newTransaction(wallet,recepient,amount);

    }) 

    it('Test subsctracted amount is valid ', () => {
        expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount);

    });

    it('test the amount is added to recepient ', () =>{
        expect(transaction.outputs.find(output => output.address === recepient).amount).toEqual(amount);
    });

   
    it ('test amount in input is same with sender amount', ()=>{
        expect(transaction.input.amount).toEqual(wallet.balance)
    })

    describe('Transaction that over the exceed ', () => {
        let transaction, amount;
        beforeEach(() => {
            amount = 50000;
            transaction = Transaction.newTransaction(wallet, recepient, amount);
        });

        it('test for amount exceed ', () =>{
            expect(transaction).toEqual(undefined);
        })
    });
})