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
/*
*  排序对象数组
*  objArr: 需要排序的数组
*  field : 用于排序的字段, 这个字段必须是对象具有的
*  order : 排序规则；desc/asc
*/
function sortObjArr(objArr, field, order){ //排序并设置标题		
	
	//排序方法;
	var sortFuc = function(a, b){
		if(order == "asc"){
			return a[field] - b[field];
		}else {
			return b[field] - a[field];		
		}
	};
	
	//排序
	if(field != undefined && order != undefined){
		return objArr.sort(sortFuc);
	}

	return objArr;
}
/* ---- */
var test = [{
	index: 1
},{
	index: 3
},{
	index: 2
}];
sortObjArr(test, "index", "asc");