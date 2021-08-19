function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deepdish", "traditional",["mozzarella"],["pepperoni", "sausage"])
console.log(p1)

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p2)

var p3 = pizzaOven("flatbread", "marinara", "mozzarella", "jalapenos")
console.log(p3)

var p4 = pizzaOven("cheese stuffed", "bbq", "parmesan", "chicken")
console.log(p4)

// Attempt at random pizza generator
function randomPizza(crustType, sauceType, cheeses, toppings){
    var ingredients = {
        crustType = ["deepdish", "hand-tossed", "flatbread", "cheese stuffed"];
        sauceType = ["marinara", "pesto", "bbq", "white sauce"];
        cheeses = ["mozzarella", "cheddar", "american", "parmesan"];
        toppings = ["jalapeno", "pepperoni", "chicken", "sausage", "onion", "mushroom"];
    }
}