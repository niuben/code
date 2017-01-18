/* ---- */
//数字转化为公里或者米
function toDistance(num) {
    if (num <= 1000) {
        return num + '米';
    } else {
        return Math.round(num / 100) / 10 + '公里';
    }
}
/* ---- */
toDistance(1000)

/* ---- */
//数字转化为分钟或者小时
function toTime(num) {
    if (!num) {
        return '';
    }
    num = num / 60;
    if (num <= 60) {
        return num + '分钟';
    } else {
        var o = Math.round(num / 60) + '小时';
        if (num % 60 !== 0) {
            o += num % 60 + '分钟';
        }
        return o;
    }
}
/* ---- */
toTime(100)
