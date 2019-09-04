const events = require ('./events');

fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    events.on('fileRead',function)
});

// need buffer
