var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

// connection.connect(function(err){
//     if(err) throw err;
//     console.log("connected as id " + connection.threadId);
//     afterConnection();
// });

//function to execute inquirer questions
function menu() {
    console.log(`
    * ~ * ~ Welcome to Vogner's Shoppe ~ * ~ *
    `)
    //then execute questions for order
    inquirer
      .prompt ([
        {
          type: "list",
          name: "menu",
          message: "What would you like to do?",
          choices: ["Browse the Shoppe", "Place an Order", "Come Back Later"]
        }
      ])
      //take response from questions and:
      .then(function(input){
        //if browse the shoppe
        if (input.menu === "Browse the Shoppe") {
            //enact list function
            listItems();
        } //else if place an order
          else if (input.menu === "Place an Order") {
            //enact place order function
            placeOrder();
        } //else if come back later
          else if (input.menu === "Come Back Later") {
            //quit
            connection.end();
        }    
      })
      .catch (function(err) {
          console.log(err);
      });   
} 
menu();

//function for logging all items in database
function listItems() {
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
        menu();
    });
}

//function for placing order
function placeOrder() {
    inquirer
      .prompt ([
        //asking which item customer would like to buy
        {
            type: "number",
            name: "itemId",
            message: "Young Master, what is the ID of the item you'd like to purchase?"  
         },
         //asking how many of item they would like to buy
         {
            type: "number",
            name: "quantity",
            message: "How many do you desire?",
         }
      ]).then (function(input){
        console.log("The Item ID is: " + parseInt(input.itemId));
        console.log("You ordered " + input.quantity + " of this item.");
        menu();
        
      }).catch (function(err) {
          console.log(err);
      });
}

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
                //callback to questions();
            //quit
                //connection.end();