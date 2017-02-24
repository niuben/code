//隐藏四位手机号
function hideTelephone(telephone) {
		if( !telephone ) {
			return "";
		}

		if( telephone.length != 11){
			return telephone;
		}

		return telephone.substr(0, 4) + "****" + telephone.substr(8, 11);
}
/* ---- */
hideTelephone("13003334444");
/* ---- */
/*
*  url: [string | array ] 远程第三方js文件地址
*  callback: [function] 请求成功的回调函数 
*  errCallback: [function] 可选 请求失败的回调函数
*/

/*
*  在数组中查找特定的值；
*  arr: [arr] 数组
*  val: 查找值
*/
function searchArr(arr, val) {
    var isHave = 0;
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] == val){
            return true;
        }
    }
    return false;
}
var loadedNum;


module.exports = function(url, callback, errCallback){
    
    loadedNum = 0;

    //判断url是字符串还是url
    var urlArr = typeof url == "string" ? [url] : url;

/*
*  url: [string | array ] 远程第三方js文件地址
*  callback: [function] 请求成功的回调函数 
*  errCallback: [function] 可选 请求失败的回调函数
*/

/*
*  在数组中查找特定的值；
*  arr: [arr] 数组
*  val: 查找值
*/
function searchArr(arr, val) {
    var isHave = 0;
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] == val){
            return true;
        }
    }
    return false;
}
var loadedNum;


module.exports = function(url, callback, errCallback){
    
    loadedNum = 0;

    //判断url是字符串还是url
    var urlArr = typeof url == "string" ? [url] : url;

    //判断是否已经加载
    var scriptEles = document.getElementsByTagName("script");
    for(var i = 0; i < scriptEles.length; i++) {
        var src = scriptEles[i].src;
        if( src && searchArr(url) == false) {
            continue;
        }
        var status = scriptEles[i].getAttribute("_status");
        if(status == "loaded"){
            loadedNum++;
            loadedNum == urlArr.length && callback(); 
        }else if(status == "error"){
            loadedNum++;
            loadedNum == urlArr.length && errCallback && errCallback();
        }
        return;
    }
    
    for(var n = 0; n < urlArr.length; n ++) {

        var script = document.createElement("script");
        script.type = "text/javascript";        
        if (script.readyState){ //IE
            script.onreadystatechange = function(){
                loadedNum++;
                
                if (script.readyState == "loaded"){
                	script.onreadystatechange = null;
                    script.setAttribute("_status", "error");

                	loadedNum == urlArr.length && errCallback && errCallback();
                }else if(script.readyState == "complete"){
                    script.onreadystatechange = null;
                    script.setAttribute("_status", "loaded");

                    loadedNum == urlArr.length && callback();
                }
            };
        }else{ //Others
            script.onload = function(){
                loadedNum++;
                script.setAttribute("_status", "loaded");            
                loadedNum == urlArr.length && callback();
            };
            script.onerror = function(){
                loadedNum++;
                script.setAttribute("_status", "error");            
            	loadedNum == urlArr.length && errCallback && errCallback();
            };
        }

        script.src = url[n];
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}
/* ---- */
LoadScript("url", function(){	
     alert("success");	
}, function(){  
     alert("error");
})
