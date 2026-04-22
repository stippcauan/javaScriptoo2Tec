class Animal{
    fazerSom(){
        console.log("Som generico de animal...");
    }
}

class Cachoro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU AU 🐶🐶🐶")
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log("MIAL MIAL MIAL MIAL MIAL 🐱🐱🐱")
    }
}

class Vaca extends Animal{
    fazerSom(){
        console.log("MUU MUU MUU MUU MUU 🐮🐮🐮")
    }
}

const meusObjetos = [new Cachoro(), new Gato(), new Vaca()];

for (let i = 0; i < meusObjetos.length; i++ ){
    meusObjetos[i].fazerSom();
}