//exercicio-1

let num = 19;
let par = num % 2 ===0;
console.log(par);

//exercicio-2

let anoNascimento = 2010;
let anoAtual = 2024;
let idade = anoAtual- anoNascimento;
if(idade >=18){
    console.log("Maior")
} else {
    console.log("Menor")
} 

//exercicio-3

let nota1 =6;
let nota2 =9;
let mediaFinal = ( nota1+nota2)/2;
if(mediaFinal >7){
    console.log("Aprovado, sua obrigação")
}else {
    ("Reprovado, estude mais")
}

//exercicio-4

let numero3 = 8;
if (numero3 >=16){
    console.log("Pode votar!Vote consciente!");
} else {
    console.log("Idade não suficiente para votar!")
}

//exercicio-5

let num1 = 8;
let num2 = 4;
if(num1> num2)
    {
    console.log("num1 é maior que o os outros")
}

//exercicio-6

let horasTrabalhadas = 37;
if (horasTrabalhadas >=40) {
    console.log("Você fez hora extra")
}else (
    console.log("Você não fez hora extra")
)

  
let horasTrabalhadas2 = 37;
console.log(horasTrabalhadas2 >40);

//exercicio-7
 
let numero4 = 91; 
if (numero4 >= 10 && numero4 <= 50) {
    console.log("O número está dentro ");
} else {
    console.log("O número está fora ");
}

//exercicio-8

let letra = "a";
if('aeiouAEIOU'.includes(letra)){
    console.log("É uma vogal");
}else {
    console.log("É uma consoante");
}

//exercicio-9

let mes = "agosto";
if (mes === "dezembro" || mes === "janeiro" || mes === "julho") {
    console.log("Mes de Ferias")
} else {
    console.log("Mes normal para voce clt")
}


//exercicio-10

let nota= 90;
if (nota >=90){
    console.log("Nota A")
}else if  ( nota >=80) {
    console.log("Nota B")
}else if ( nota >=70) {
    console.log("Nota C")
}else if ( nota >=60){
    console.log("Nota D")
}else {
    console.log("Nota F")
}

//NIVEL MEDIO

//exercicio-1

let numero5 = 18;
let numero6 = 11;
let numero7 = 44;
if( numero5 > numero6 && numero5 > numero7) {
console.log("O maior numero e "+ numero5)
}else if (numero6 > numero5 && numero6 > numero7) {
    console.log("O maior numero e " + numero6)
}else {
    console.log("O maior numero e " + numero7)
}

//exercicio-2

let texto = "thiago";
let primeiraLetra = texto [0]
if(primeiraLetra >= "A" && primeiraLetra <="z") {
    console.log("A primeira letra é maiuscula");
} else {
    console.log("A primeirra letra é minuscula");
}

//exercicio-3

let atual = 32;
let quente = 30;
let frio = 15;
if (atual <= frio){
    console.log("Ta frio, bom para ficar em casa")
}else if (atual >=15 && atual <-30) {
    console.log("O clima está bom")
}else if (atual >30){
    console.log("Ta calor")
}

//exercicio-4

let anoAtual1 = new Date(). getFullYear;
let anoBissexto = (anoAtual1 % 4 === 0 && anoAtual % 100 !==0) || (anoAtual1 % 400 === 0);
console.log (anoBissexto ? "Esse é um ano bissexto" : "Esse não é um ano bissexto");

//exercicio-5

let num3 = 15;
let num4 = 40;
if (num3 %5 === 0 && num4 %5 ===0){
    console.log("Todos são diviveis por 5")
}else if (num3 %5 === 0 && num4 %5 !== 0){
    console.log("So o primeiro numero e divisivel")
}else if (num3 %5 !== 0 && num4 %5 === 0){
    console.log("So o segundo numero e divisivel")
}else{
    console.log("Nenhum dos dois numeros sao divisiveis")
}

//exerciico-6

let corSemaforo = "vermelho";
if ( corSemaforo === "verde"){
     console.log("Siga");
}else if (corSemaforo === "amarelo"){
    console.log("Aguarde");
}else if (corSemaforo === "vermelho"){
    console.log("Pare");
}else {
    console.log("Quebrado")
}

//exercicio-7

