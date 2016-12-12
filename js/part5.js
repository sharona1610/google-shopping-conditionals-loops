var data = require('../products.json');
// Write your solutions below
var items = data.items
var tally=0

for (var i in items){
  var type= items[i].product
  var inv= type.brand
  var aut=type.author.name
  if(inv==="Canon"&& aut==="eBay")
      console.log(type.title);
}
