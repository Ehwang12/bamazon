var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err,res){
        if (err) throw err;
        
       res.forEach(function(item){
            console.log(`
            =====${item.product_name}=====
            Item ID: ${item.item_id}
            Department: ${item.department_name}
            Price: ${item.price}
            Stock: ${item.stock_quantity}
             `)
        });
        connection.end();
    });
}