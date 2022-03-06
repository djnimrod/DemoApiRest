const dbcategoria = require ('./dbcategoria');

// requerido en todos

var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require('cors');
const { response } = require('express');
const Categoria = require('./categoria');

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

router.route('/categoria/:id').get((request, response)=> {
    dbcategoria.getCategoriaById(request.params.id).then(result => {
        response.json(result[0]);
    })
})

router.route('/categoria/guardar').post((request, response)=> {
    let categoria = {...request.body}
    dbcategoria.insertCategoria(categoria).then(result => {
        response.json(result[0]);
    })
})
// update categoria
router.route('/categoria/actualisar').post((request, response)=> {
    let categoria = {...request.body}
    dbcategoria.updateCategoria(categoria).then(result => {
        response.json(result[0]);
    })
})



// probarlo en postman en el puerto 8090 en local, con el verbo GET
// para probar la busqueda por id: get http://localhost:8090/api/categoria/1
//donde 1 es el id de categoria por parametro
// para update con Post, con la ruta determinada/actualisar
var port =  process.env.PORT || 8090;
app.listen(port);
console.log('running in port') + port; // mensaje de inicio

