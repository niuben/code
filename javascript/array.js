/* 
*  将指定值放在数组的第一位
*  arr  : 需要搜索的数组;
*  value: 搜索的值 
*/
function first(arr, value) {
    
    var isHave = 0;
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] == value){
            isHave = 1;
        }
        if(isHave == 0) continue;
        var chg = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = chg; 
    }
    arr.pop();
    arr.unshift(value);
    return arr;
}
/* ---- */
var arr = [2, 3, 4, 2]
first(arr, 2);
/* ---- */
/*
*  去重	
*  arr：需要去重的数组;
*/
function filter(arr) {
    var returnArray = [];
    var isHave = 0;
    for (n = 0; n < arr.length - 1; n++) {
        var currentValue = arr[n];
        isHave = 0;
        for (m = n + 1; m < arr.length; m++) {
            if (currentValue == arr[m]) {
                isHave = 1;
                break;
            }
        }
        if (!isHave) {
            returnArray.push(currentValue);
        }
    }
    var lastNum = arr.length - 1;
    returnArray.push(arr[lastNum]);
    return returnArray;
}
/* ---- */
var arr = [2, 3, 4, 2];
filter(arr);
/* ---- */
/*
* 把数组中具有相同值提取出来
* arr：提取的数组
*/
function distinct(arr) {
    var returnArray = [];
    for (n = 0; n < arr.length - 1; n++) {
        var currentValue = arr[n];
        for (m = n + 1; m < arr.length; m++) {
            if (currentValue == arr[m]) {
                returnArray.push(currentValue);
                break;
            }
        }
    }
    return returnArray;
}
/* ---- */
var arr = [2, 3, 4, 2];
distinct(arr);
