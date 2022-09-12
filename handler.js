const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'database-1.cdgssua8nm3e.sa-east-1.rds.amazonaws.com',
  user: 'admin',
  port:"3306",
  password: '12345678',
  database: 'register',
});


module.exports.register = async (event, context, callback) => {  
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = "INSERT INTO funcionario (funcionario) VALUES ('"+event.funcionario+"')";
  con.query(sql, (err, res) => {
    if (err) {
      throw err
    }
    callback(null, 'funcionario Registrato.');

    if(event.atualizarfuncionario){

    }

    
    if(event.deletefuncionario) {
      sql = "DELETE funcionario (funcionario) VALUES ('"+event.deletefuncionario+"')";
      callback(null, 'Funcionario deletado')
    }
    
  });
};


//https://dp0yvbegr1.execute-api.sa-east-1.amazonaws.com/beta