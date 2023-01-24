const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log("Meat add in the beginning");
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add sugar
console.log("Sugar add at the end");
shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove Honey
console.log("Removed Honey");
shoppingCart.splice(4, 1);
console.log(shoppingCart);

// modify Tea to Green tea
console.log("Remove tea and add Green tea");
shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);