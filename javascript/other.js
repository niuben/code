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
*  url: [string] 远程第三方js文件地址
*  callback: [function] 请求成功的回调函数 
*  errCallback: [function] 可选 请求失败的回调函数
*/
function loadscript(url, callback, errCallback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState){ //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded"){
            	script.onreadystatechange = null;
            	errCallback && errCallback();	
            }else if(script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    }else{ //Others
        script.onload = function(){
            callback();
        };
        script.onerror = function(){
        	errCallback && errCallback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
/* ---- */
LoadScript("url", function(){	
     alert("success");	
}, function(){  
     alert("error");
})
