var exports = module.exports = {};

exports.sortJSONObj = function(jsonObj, fieldName, order, primer) {
	jsonObj.sort(sort_by(fieldName, order, primer));
	return jsonObj;
};

//Sort array by any columnName, sortOrder, dataType(for int pass 'parseInt', for float pass 'parseFloat')
var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
}