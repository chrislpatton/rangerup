



var recovered = [];
for (var i = 0; i < lostOrders.length; i++) {
  for (var j = 0; j < allOrders.length; j++) {
    if(allOrders[j].order_id === lostOrders[i]) {
      recovered.push(savedOrders[j]);
    }
  }
}

var fields = ['order_id', 'order_total', 'order_tax', 'order_shipping','contact.name','contact.billing.company','contact.billing.street1','contact.billing.street2', 'contact.billing.city','contact.billing.state','contact.billing.zip','contact.billing.country','contact.billing.country_iso','contact.shipping.company','contact.shipping.street1','contact.billing.street2', 'contact.shipping.street2','contact.shipping.city','contact.shipping.state','contact.shipping.zip','contact.shipping.country','contact.shipping.country_iso','contact.people.firstname','contact.people.lastname','contact.people.email','contact.people.phone','line_items[0].sku','line_items[0].name','line_items[0].description','line_items.category','line_items.other','line_items[0].unitPrice','line_items[0].salePrice','line_items[0].quantity','line_items[0].totalPrice','line_items[0].imageUrl','line_items[0].attributes.size'];


var csv = json2csv({ data: recovered, fields: fields });

  
$('#save-btn').click(function(){
var blob = new Blob([csv],{type:'text/plain/charset=utf-8'});
saveAs(blob,"testfile.csv");

})