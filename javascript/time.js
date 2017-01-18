/*
* 倒计时
* sec      : 倒计时时间 单位:秒
* loopBack : 每次循环回调函数
* endBack  : 结束回调函数
*/
function countDown(sec, loopBack, endBack) { //定时器              
    var handle,
        total = 1;

    handle = setInterval(function() {
        if (total <= sec) {
            loopBack && loopBack(total)
        } else {
            endBack && endBack();
            clearInterval(handle);
        }
        total++;
    }, 1000);
}
/* ---- */
countDown(10, function(sec){
    console.log(sec);
}, function(){
    console.log("end");
});

/* ---- */
/*
* 延迟
* sec     : 延迟时间
* enbBack : 执行时间
*/
function delay(sec, endBack) { //sec 秒数
    setTimeout(function(){
        endBack && endBack();
    }, 1000 * sec);
}
/* ---- */
delay(10, function(){
    console.log("end");
})
