// [JS-A02] Escreva um programa em JavaScript que solicite ao usuário o nome, altura em centímetros e peso de uma pessoa. O programa deve calcular o índice de massa corporal (IMC) dessa pessoa, considerando a fórmula IMC = peso / (altura * altura), onde a altura deve ser convertida de centímetros para metros. Em seguida, o programa deve classificar o peso com base no IMC calculado, de acordo com a tabela a seguir:

// Menor que 16: Baixo peso muito grave
// De 16 a 16.99: Baixo peso grave
// De 17 a 18.49: Baixo peso
// De 18.50 a 24.99: Peso normal
// De 25 a 29.99: Sobrepeso
// De 30 a 34.99: Obesidade grau I
// De 35 a 39.99: Obesidade grau II
// Maior ou igual a 40: Obesidade grau III
// O programa deve exibir o nome da pessoa, o índice de massa corporal calculado e a classificação correspondente.

const nome = prompt("Escreva seu nome: ")
const altura_cm = Number(prompt("Escreva a sua altura em centímetros: "))
const peso = Number(prompt("Digite o seu peso: "))

const altura_m = altura_cm / 100

const imc = peso / (altura_m * altura_m)

let classificacao

if (imc < 16){
    classificacao = "Baixo peso, muito grave";
}
else if (imc >= 16 && imc <= 16.99){
    classificacao = "Baixo peso, peso grave";
} 
else if (imc >= 17 && imc <= 18.49){
    classificacao = "Baixo peso";
}
else if (imc >= 18.50 && imc <= 24.99){
    classificacao = "Peso normal";
}
else if (imc >= 25 && imc <= 29.99){
    classificacao = "Sobrepeso";
}
else if (imc >= 30 && imc <= 34.99){
    classificacao = "Obesidade grau | ";
}
else if (imc >= 35 && imc <= 39.99){
    classificacao = "Obesidade grau || ";
}
else {
    classificacao = "Obesidade grau ||| ";
}

console.log(`nome ${nome}`);
console.log(`imc ${imc.toFixed(2)}`);
console.log(`classificao ${classificacao}`);
