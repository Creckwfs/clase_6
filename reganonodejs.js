let num1 = process.argv[2]
let num2 = process.argv[3]
for (num1; num1 <= num2; num1 ++) {
    console.log(num1)
}

//WhILE
let num1 = process.argv[2]
let num2 = process.argv[3]
while (num1 <=num2){
    console.log(num1);
num1= num1 +1;
}

//DO WHILE
let num1 = parseFloat(prompt("¿Desde que numero quieres que empiece"))
let num2 = parseFloat(prompt("Hasta que numero quieres que termine"))
do {
    console.log(num1);
    num1=num1+1;
}while (num1<num2);