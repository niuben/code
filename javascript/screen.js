// 得到页面的高度 
function getHeight() {
  if (document.documentElement.scrollHeight < document.documentElement.clientHeight) {
    if ("\v"=="v") {
      return document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
    } else {
      return self.innerHeight;
    }
  } else {
    return document.documentElement.scrollHeight;
  } 
};
/* ---- */
getHeight();

/* ---- */
// 得到页面宽度
function getWidth() {
   if (document.documentElement.scrollWidth < document.documentElement.clientWidth) {
        if ("\v" == "v") {
            return document.compatMode == "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
        } else {
            return self.innerWidth;
        }
    }else {
      return document.documentElement.scrollWidth;
    }
} 
/* ---- */
getWidth();
