fs.writeFile( file, Buffer.from(text), (err, data) => {
    if(err) { throw err; }
    console.log(`${file} saved`);
  });