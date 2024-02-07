//fs is file system
const fs = require('fs');


//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//   console.log(err);
//   }
  // if i console.log(data) here, i will get <Buffer 68 65 6c 6c 6f 2c 20 6e 69 6e 6a 61 73> in my console. so a buffer is basically just a package of data that's been sent to us when we read this file.  but for now if we want to see the actual string data this in text format we can just use the to string method on this data and it will turn the buffer into a string so we can read it.
//   console.log(data.toString());
// });
 
// console.log('last line');


//writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//   console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//   console.log('file was written');
// });



//directories
//fs.existsSync is a synchronous method meaning it will block the code it's only gonna take a very short amount of time to do though and it's gonna check if something exists now I want to check if the assets folder exists
// this doesn't make much sense because if it exists then this is going to return true and it's going to try to make it but we don't want that because we only want this to run if it doesn't exist okay so I want to reverse the result of this and I can do that by placing an exclamation mark in front of it so now if this does exist.
if(!fs.existsSync('./assets')){
  fs.mkdir('./assets', (err) => {
 if(err) {
  console.log(err);
  }
 console.log('folder created');
  })
}else{
  fs.rmdir('./assets', (err) => {
    if(err){
      console.log(err)
    }
    console.log('folder deleted');
  })
}


//deleting files
if (fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (err)=>{
    if(err){
      console.log(err);
    }
    console.log('file deleted');
  })
}