DROP DATABASE IF EXISTS bamazon;
CREATE SCHEMA bamazon;

USE bamazon;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(30),
stock_quantity INTEGER(30),
PRIMARY KEY (id)
);