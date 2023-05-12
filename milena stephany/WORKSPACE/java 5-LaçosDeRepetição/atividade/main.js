let contador = 1;
while (contador <= 50) {
console.log(`Valor = ${contador}`);
contador++;
}
console.clear();

let i = 0,
text = '';
do {
text += `O número é ${i}\n`;
i++;
} while (i < 10);
console.log(text);
console.clear();

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }

