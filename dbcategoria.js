var config = require ('./dbconfig'); //instancia de dbconfig
const sql = require('mssql'); //conexion a sql

async function getCategoria(){
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request().query("select * from TM_categoria");
        return categorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategoria : getCategoria
}