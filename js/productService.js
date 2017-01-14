angular.module('angularClassroomApp')
.service('productService',function(){
var obj={};
var products = [

{id:1,
	name:'Tablet 1.6G TR',
price: 'Rs 20,999',
description: 
 
'Available'

},
{id:2,

name:'Tablet 1.6G TR',
price: 'Rs 20,999',
description: 
 
'Available'
},
{
	id:3,
name:'Tablet 1.6G TR',
price: 'Rs 20,999',
description: 
 'Available'
},
{
	id:4,
	name:'Tablet 1.6G TR',
price: 'Rs 20,999',
description: 
 
'Available'
},
{id:5,
	 name:'Tablet 1.6G TR',
price: 'Rs 20,999',
description: 
 
'Available'
},

{
	id:6,
	name:'Tablet 1.6G TR',
price: 'Rs 20,999',
description: 
 
'Available'
}


]
obj.products=products;
 return obj;
});