let express         = require('express')
let bodyParser      = require('body-parser');
let cors            = require('cors');
let mongoose        = require('mongoose');

let usersRoutes     = require("./routes/usersRoutes")
let commentsRoutes  = require("./routes/commentsRoutes");

let app             = express();

let urlDB = process.env.URLDB || "mongodb://localhost/movies";

mongoose.set('useNewUrlParser',     true);
mongoose.set('useFindAndModify',    false);
mongoose.set('useCreateIndex',      true);

mongoose.connect(urlDB)
.then(() => console.log("Movies DB online."))
.catch(error => console.log(error));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send("API comments" + port));

app.use('/users',       usersRoutes);
app.use('/comments',    commentsRoutes);

let port = process.env.PORT || 8080;

app.listen(port, () => console.log("Servidor inicializador en el puerto: " + port));