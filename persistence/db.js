let mongoose = require('mongoose');

let db = 'mongodb://localhost/appdist';

let opts = {
    useNewUrlParser : true,
    connectTimeoutMS:20000
};

mongoose
.connect(db,opts)
.then(() => console.log(`Conectado a ${db}`))
.catch(e => console.log(`ERROR: ${e}`))