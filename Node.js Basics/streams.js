// Streams and Buffers in Node.js:
// Streams are like flowing water: instead of waiting for a pool to fill up completely, we can start using the water as it flows in.
// Similarly, in Node.js, streams allow us to process large amounts of data in small, manageable chunks called buffers.

// There are two main types of streams:
// 1. Readable streams: for reading data from a source.
// 2. Writable streams: for writing data to a destination.

// Example:
// Readable streams allow us to read data from a file incrementally, without loading the entire file into memory at once.
// Writable streams allow us to write data to a file piece by piece, which is useful for handling large files efficiently.

// Additionally, we can use the 'pipe' method to simplify passing data from a readable stream to a writable stream, 
// which is handy for straightforward data transfers without additional processing.

// Overall, streams and buffers in Node.js are essential for efficiently working with large datasets, 
// allowing us to process data incrementally and avoid memory issues.
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt')


// readStream.on('data', (chunk) => {
//   console.log('------NEW CHUNK------');
//   console.log(chunk.toString());
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);