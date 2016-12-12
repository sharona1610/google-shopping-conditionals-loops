var data = require('../products.json');
// Write your solutions below
var items = data.items
var tally=0

for (var i in items){
  var type= items[i].kind
  if(type==='shopping#product'){
    tally+=1
  }
}
console.log(tally);
