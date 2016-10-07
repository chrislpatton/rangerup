



var recovered = [];
for (var i = 0; i < lostOrders.length; i++) {
  for (var j = 0; j < savedOrders.length; j++) {
    if(savedOrders[j].order_id === lostOrders[i]) {
      recovered.push(savedOrders[j]);
    }
  }
}

console.log(recovered);