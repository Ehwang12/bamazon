var mysql = require('mysql');
var inquirer = require('inquirer');

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

//logging all items in database
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

//function to execute inquirer questions
function questions() {
    inquirer
      .prompt ([
        //asking which item customer would like to buy
        {type: "number",
        name: "itemId",
        message: "Young Master, what is the ID of the item you'd like to purchase?"  
        },
        //asking how many of item they would like to buy
        {type: "number",
         name: "quantity",
         message: "How many do you desire?",
        }
      ])
} //take response from questions and:
//using response back from itemId question query database for particular item entered
    //if in stock 
        //subtract one from total stock
        //update stock
        //grab price of item from database
        //console log "Fortuna's blessings for your purchase. Your total will be 'item price' grubles."
    //else if not in stock
        //console log "Fortune's folly Young Master, we are out of stock of the item. "
        //go to inquirer prompt
            //would you like to oder something else?
                //brings back to initial questions
            //quit
                //connection.end();