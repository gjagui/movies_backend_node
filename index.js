let express         = require('express')
let bodyParser      = require('body-parser');
let cors            = require('cors');

let commentsRoutes  = require("./routes/commentsRoutes");
let usersRoutes     = require("./routes/usersRoutes")

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send("API comments" + port));

app.use('/comments', commentsRoutes);
app.use('/users', usersRoutes);

let port = process.env.PORT || 8080;

app.listen(port, () => console.log("Servidor inicializador en el puerto: " + port));