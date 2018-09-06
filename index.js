var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price= Math.floor(Math.random() * (100-1) + 1);
 var output=[];
 var obj={
   itemName:item,
   itemPrice:price
 }
 for (var i=0; i<item.length; i++){
 output.push(`itemName: ${item[i]}, itemPrice: ${price[i]}`);
 }
 //output=`itemName: ${item}, itemPrice: ${price}`;
//return output;
}
return `${itemName} has been added to your cart.`

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
