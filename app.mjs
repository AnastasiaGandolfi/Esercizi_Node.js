// Create a script that uses the Node.js core fs.writeFile() (callback API) method to write a text file. The documentation for this method is on the Node.js File system page.

import { fstat, writeFile } from 'fs';
// import { Buffer } from 'buffer';

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
const data = 'Hello World'
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


