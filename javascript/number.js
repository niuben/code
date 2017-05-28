// 判断是否是帧数
function isInt(num) {    
    if (Math.floor(num) == this) {
        return true;
    } else {
        return false;
    }
}
/* ---- */
isInt(123);

/* ---- */
// 判断是否是小数
function isFloat(num) {
    if (Math.floor(num) != this) {
        return true;
    } else {
        return false;
    }
}
/* ---- */
isFloat(12.2);

/* ---- */
// 设置小数点后尾数
function isDecimal(floatNum, index) {
    var num = Math.pow(10, index);
    return Math.round(floatNum * num) / num;
}
/* ---- */
isDecimal(23.2222, 3);
