const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host: 'proyectofinal.cnw8pfiu7vxu.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'miriam0017',
    port: "3306",
    database: 'sistemas'
});

sqlConnecion.connect(function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Se conecto con exito");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;
