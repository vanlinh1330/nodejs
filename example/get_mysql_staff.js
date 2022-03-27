var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  //Return the first 5 customers:
  con.query("SELECT staff.name as tennhanvien, groups.name as tenhom FROM staff JOIN groups ON staff.groups_id = groups.id", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

