
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function run() {
  readline.question('Input some number: ', num => {
    let number = Number(num);

    if (!isNaN(number)) {
      for (let i = 0; i < number; i++) {
        console.log("iteration", i + 1)
        readline.close();
      }
      return;
    }

    console.log('Wrong input, provide a number!\n');
    run();
  });
}

run();
