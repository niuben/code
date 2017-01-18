//得到URL参数值;
function getQuery(key) {
  var locationSearch = location.search.substr(1, location.search.length);
  var loactionSearchArray = locationSearch.split("&");
  for (i = 0; i < loactionSearchArray.length; i++) {
    if (loactionSearchArray[i].indexOf(key) != -1) {
      return loactionSearchArray[i].substr(key.length + 1, 1000);
    }
  }
}
/* ---- */
getQuery("name");
