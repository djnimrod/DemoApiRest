var config = require ('./dbconfig'); //instancia de dbconfig
const sql = require('mssql'); //conexion a sql

async function getCategoria(){
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request().query("SP_L_CATEGORIA_01");
        return categorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function getCategoriaById(cat_id){

    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request()
        .input('input_parameter',sql.Int,cat_id)
               .query("select * from TM_categoria whwere CAT_ID=@input_parameter");
        return categorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}


async function insertCategoria(categoria){

    try {
        let pool = await sql.connect(config);
        let InsertCategorias = await pool.request()
        .input('cat_id',sql.Int,categoria.cat_id)
        .input('cat_nom',sql.VarChar,categoria.cat_nom)
        .input('cat_obs',sql.VarChar,categoria.cat_obs)
        .execute("SP_I_CATEGORIA_01");
        return InsertCategorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}

// UPDATE

async function updateCategoria(categoria){

    try {
        let pool = await sql.connect(config);
        let UpdateCategorias = await pool.request()
        .input('cat_id',sql.Int,categoria.cat_id)
        .input('cat_nom',sql.VarChar,categoria.cat_nom)
        .input('cat_obs',sql.VarChar,categoria.cat_obs)
        .execute("SP_U_CATEGORIA_01");
        return UpdateCategorias.recordsets;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {

getCategoria : getCategoria,
    getCategoriaById : getCategoriaById,
    insertCategoria : insertCategoria,
    updateCategoria : updateCategoria
}