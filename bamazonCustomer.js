var inquirer = require("inquirer");

var mysql = require("mysql");

var port = process.env.PORT || 3306;
var ip = process.env.IP || '127.0.0.1';

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readColleges();
});
function readColleges() {
  connection.query("SELECT id FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

inquirer
  .prompt([

  	 {
      type: "list",
      message: "What ID is the product you would like to buy?",
      choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      name: "products"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    {
    	type: "confirm",
    	message: "How many would you like to buy?"
    	name: "confirm",
    	default: 1
    }

  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nInsufficient quantity! " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });

  //needs a function that can loop through the array of amount of products left if there are enough subtract that amount fromt he list if there is not more else log insuffienct amount 