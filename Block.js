class Block{
    constructor(last_hash, hash, data){

    }

    static GenesisTree(){
        return new this('dummy_last_hash','dummy_hash', '')
    }
}