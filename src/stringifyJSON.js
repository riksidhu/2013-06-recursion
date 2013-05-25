// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var inputobj = typeof (obj);
  if (obj === null ) {return  ('' + obj);}
//var fin = '';
switch(inputobj){
	case 'undefined': 
		return undefined;
	
	case 'function':
		return undefined;
	
	case 'number':
		return ('' + obj);
	
	case 'boolean':
		return ('' + obj);
		
	case 'string':
		return ('"'+ obj + '"');
		
	/*case 'array':
		return (''+newArray(obj));
		
	case 'object':
		return (''+newObj(obj));*/
		
}

	//var newArray = function(obj){
	if (Array.isArray(obj)){
		var result = [];
		for (var i = 0; i< obj.length ; i++){
			if (stringifyJSON(obj[i]) === undefined)
				result.push('null');
			else
			result.push(stringifyJSON(obj[i]));
		}
		return ('[' + result + ']');
	}
	else{
		var space = '';
		for (var key in obj){
			if (space !== ''){
				space = space + ',';
			}

			if (stringifyJSON(obj[key]) !== undefined){
				space = space + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
			}
		}
		return ( '{' + space + '}');
	}
};
