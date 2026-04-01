class carro {
    constructor(nome, ano, marca) {
        this.nome = nome;
        this.ano = ano;
        this.marca = marca;
    }
    saudar(){
        console.log(`Olá! Meu carro é ${this.nome}!, o ano é ${this.ano}!, a marca é ${this.marca}!`);
    }
}
let carro1 = new carro ("Dell Rey", 1985, "Ford");
carro1.saudar();



