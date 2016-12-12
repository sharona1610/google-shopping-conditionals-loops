var data = require('../products.json');
// Write your solutions below
var items = data.items

for (var i in items){
  var type= items[i].product
  var inv= type.brand
  console.log("Brand is "+ inv);
  var price = type.inventories[0].price
  console.log("Price is "+price);
  var img = type.images
  for (var j in img){
    console.log("Link to image is " + img[j].link);
  }
}
