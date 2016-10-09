



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

  
/*function CSV(array) {
    // Use first element to choose the keys and the order
    var keys = Object.keys(array[0]);

    // Build header
    var result = keys.join("\t") + "\n";

    // Add the rows
    array.forEach(function(obj){
        keys.forEach(function(k, ix){
            if (ix) console.log("this is ix ",ix);result += "\t"; console.log("this is result after ix ", result);
            result += obj[k];
            console.log("this is result after obj[k] ", result );
        });
        result += "\n";
        console.log("result after '\n' ", result)
    });

    return result;
}

function ConvertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';

                for (var i = 0; i < 1; i++) {
            var keys = '';

            for (var index in array[i]) {
                if (typeof array[i][index] !== 'object' ){
                    if (keys != '') {
                            keys += ',' ;
                        }
                    keys +=  index + '\t';
                } else {
                    for(var key in array[i][index]) {
                        if (typeof array[i][index][key] !=="object"){
                            if (keys != '' || ',') {
                                keys += ','  ;
                            }
                                keys +=  key + '\t';
                        } else {
                            for (var key2 in array[i][index][key]){
                                if (typeof array[i][index][key][key2] !=='object'){
                                    if (keys != '') {
                                        keys += ',';
                                    } 
                                        keys += key2 + '\t';
                                } else {
                                    for (var key3 in array[i][index][key][key2]){
                                        if (typeof array[i][index][key][key2][key3] !== 'object') {
                                            if (keys!= '') {
                                                keys += ',';
                                            }
                                            keys += key3 + '\t';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            }

            str += keys + '\n';
        }        


// beginning of product details
       /* for (var i = 0; i < array.length; i++) {
            var line = '';

            for (var index in array[i]) {
                if (typeof array[i][index] !== 'object' ){
                    if (line != '') {
                        	line += ',';
                        }
                    line +=  array[i][index] + '\t';
                } else {
                    for(var key in array[i][index]) {
                        if (typeof array[i][index][key] !=="object"){
                            if (line != '' || ',') {
                                line += ',';
                            }
                                line +=  array[i][index][key] + '\t';
                        } else {
                            for (var key2 in array[i][index][key]){
                                if (typeof array[i][index][key][key2] !=='object'){
                                    if (line != '') {
                                        line += ',';
                                    } 
                                        line += array[i][index][key][key2]+ '\t';
                                } else {
                                    for (var key3 in array[i][index][key][key2]){
                                        if (typeof array[i][index][key][key2][key3] !== 'object') {
                                            if (line!= '') {
                                                line += ',';
                                            }
                                            line += array[i][index][key][key2][key3]+ '\t';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            }

            str += line + '\n';
        }

        return str;*/
    /*}*/
    
//console.log(ConvertToCSV(recovered));
//console.log(csv);
$('#save-btn').click(function(){
var blob = new Blob([csv],{type:'text/plain/charset=utf-8'});
saveAs(blob,"testfile.csv");

})