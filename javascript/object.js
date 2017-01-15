/*
* 深度搜索属性值的对象
* objArr：搜索的数组 
* field：搜索的字段
* val：搜索的值
*/
function deepSearchObjArr(objArr, field, val){
	for(var i = 0; i < objArr.length; i++){				
		if(typeof objArr[i] != "object") {
			continue;
		}

		if(objArr[i][field] == val) {
			return objArr[i];
		}

		for(var key in objArr[i]) {
			
			if(Object.prototype.toString.call(objArr[i][key]) === '[object Array]') {			
				console.log("arr");			
				var obj = deepSearchObjArr(objArr[i][key], field, val);
				if(obj) {
					return obj;
				}
				continue;
			}
		}
		
	}
	return undefined;
}
/* ---- */
var test = [{
	list: [{
		list: [{
			name: "test"
		}]		
	}]
}];
deepSearchObjArr(test, "name", "test");
/* ---- */