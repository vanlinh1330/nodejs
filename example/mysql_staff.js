var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  //Update the address field:
  var sql = "UPDATE staff set name ='xxxxxxaaaaa' where id =1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
