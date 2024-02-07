//global object

console.log(global);

// we don't actually have to explicitly type global it's just available to us out of the box
global.setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);

// the difference between set timeout and set interval is that set interval keeps on running the function every one second and set timeout is only going to run it once after three seconds

const int = setInterval(() => {
  console.log('in the interval')
}, 1000);

//__dirname especially is useful when we're working with node to get the current directory of our file because we're sometimes interacting with different files and we need to formulate paths between them.
console.log(__dirname);
console.log(__filename);

