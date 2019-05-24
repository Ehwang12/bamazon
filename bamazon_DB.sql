-- creating database
CREATE DATABASE bamazon_db;

-- select database
USE bamazon_db;

-- creating table for products
CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INTEGER,
  stock_quantity INTEGER,
  PRIMARY KEY (item_id)
);

-- Mock Stock
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dragon Mage Tent Set', 'Outdoor Gear', 450, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Apprentice Scout Single Tent', 'Outdoor Gear', 150, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Blorgner"s Flame Pocket Stove', 'Outdoor Gear', 600, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Baron Crystal Robe', 'Clothing', 700, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Celty Phoenix Cap (Red)', 'Clothing', 200, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Jaugernat Gris Jerky', 'Provisions', 30, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Profnic"s Potion', 'Provisions', 50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mystik Elixir', 'Provisions', 50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Varda"s Dagger', 'Weapons', 230, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Borja Heavyweight Shield', 'Weapons', 500, 1);

 