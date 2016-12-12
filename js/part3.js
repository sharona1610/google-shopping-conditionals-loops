var data = require('../products.json');
// Write your solutions below
var items = data.items
var tally=0

for (var i in items){
  var type= items[i].product
  var inv= type.images
  if(inv.length>1)
      console.log(type.title);

}

//console.log(items[0].product[0].inventories);
