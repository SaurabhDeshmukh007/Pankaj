
angular.module('angularClassroomApp')
.service('categoryService',function(){
var obj={};
var categories = [

{id: 101,
name: 'Digi-Cam',
status: 'Available',
comment: 'good'
},
{
id: 102,
name: 'Mobiles & Tabs',
status: 'Available',
comment: 'better'
},
{id: 103,
name: 'Home Appliances',
status: 'Not Available',
comment: 'best'
}
 ]
obj.categories=categories;
 return obj;
});




