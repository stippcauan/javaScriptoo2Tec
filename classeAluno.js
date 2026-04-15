class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    calculaMédia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
        obterStatus(){
            const media = this.calculaMédia();
            if (media >= 7) {
                return "Aprovado"
            } else if (media >= 5) {
                return "Recuperação"
            } else {
                return "Reprovado"
            }
        
        }
        exibirRelatorio(){
            console.log(`===============================`);
            console.log(`Relatorio do aluno ${this.nome}`);
            console.log(`Matricula ${this.matricula}`);
            console.log(`Média Final ${this.calculaMédia()}`);
            console.log(`Status ${this.obterStatus}`);
            console.log(`===============================`);
        }
    }
const turma = [
    new Aluno(`Cauan`, `CGM5050`,[9.2, 6.5, 7.2]),
    new Aluno(`Pietro`, `CGM5051`,[8.2, 5.3, 6.2]),
    new Aluno(`Luiz`, `CGM5052`,[5.5, 8.7, 9.9]),
    new Aluno(`Bruno`, `CGM5053`,[3.2, 6.1, 6.0]),
    new Aluno(`Ana`, `CGM5054`,[9.8, 8.7, 6.3]),
]

console.log(turma[1]);

for (let i = 0; i < turma.length; i++ ){
    turma[i].exibirRelatorio();
}

// let aluno1 = new Aluno("Cauan", 5500, [8.0, 7.3, 9.0]);

// console.log(aluno1.calculaMédia());
// console.log(aluno1.obterStatus());

// aluno1.exibirRelatorio();

