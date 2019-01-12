const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = '';
rl.question('Which port to use to start the server?\nport:', (port) => {
  result += `port: ${port}`;
  result += '\n';
  rl.question('Which folder to use to sharing file(in format /home/kudrya/Documents)?\npath:', (path) => {
    result += `path: ${path}`;
    result += '\n';
    fs.writeFileSync('configuration.yml', result);
    rl.close();
    console.log('Success');
  });
});