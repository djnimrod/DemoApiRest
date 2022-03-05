const dbcategoria = require ('./dbcategoria');

// requerido en todos

var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require('cors');
const { response } = require('express');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router); // ruta principal

router.route('/categoria').get((request, response)=> {
    dbcategoria.getCategoria().then(result => {
        response.json(result[0]);
    })
})


var port =  process.env.PORT || 8090;
app.listen(port);
console.log('running in port') + port; // mensaje de inicio

// probarlo en postman en el puerto 8090 en local, con el verbo GET
