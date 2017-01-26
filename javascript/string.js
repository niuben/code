/*
* 替换目标字符串
*/
function replace(str, targetStr, replaceStr) {    
    var symbol = "";    
    var comLength = targetStr.length;
    var searchArray = str.split(symbol);
    var posNum;
    var posStartNum;
    str = "";

    for (i = 0; i < searchArray.length; i++) {
        posNum = searchArray[i].indexOf(targetStr);
        posStartNum = posNum + comLength + 1;
        if (posNum != -1) { searchArray[i] = replaceStr; }
        if (i != 0) { str += symbol; }
        str += searchArray[i];
    }

    return str;
};
/* ---- */
replace("abbb", "b", "c");

/* ---- */
//去掉字符串开头和结束的空格字符串
function trim(str) {
    try {
        return str.replace(/^\s+|\s+$/g, '');
    }catch (a) {
        return this;
    }
};
/* ---- */
trim(" 1234 ");

/* ---- */
//拷贝文字
function copy(text) {
    
    if (window.clipboardData) {
        window.clipboardData.setData("Text", text);
    } else if (window.netscape) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        } catch (e) {
            alert("被浏览器拒绝！\n请在浏览器地址栏输入[about:config]并回车\n然后将[signed.applets.codebase_principal_support]属性设置为[true]");
        }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);

        if (!clip) {
            return;
        }

        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);

        if (!trans) {
            return;
        }

        trans.addDataFlavor('text/unicode');

        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext = text;

        str.data = copytext;
        trans.setTransferData("text/unicode", str, copytext.length * 2);

        var clipid = Components.interfaces.nsIClipboard;

        if (!clip) {
            return false;
        }

        clip.setData(trans, null, clipid.kGlobalClipboard);

    }

    // alert("已复制代码到剪贴板")
    return false;
}
/* ---- */
copy("123");
