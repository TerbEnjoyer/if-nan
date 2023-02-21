
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
function run () {
  readline.question('Say some number', Numb => {
    let number = Number(Numb);
  
    if (isNaN(number)) {
      console.log('Bledny input, wprowadz liczbe!');
      run();
    } else {
      for (let i = 0; i < number; i++) {
        console.log("Iteracja")
        readline.close();
      }
    }
  
    
  });
}

run();
