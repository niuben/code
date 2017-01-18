/* ---- */
//正则列表
var regular ={
  "chinese": /[\u4E00-\u9FA5]/,   //中文
  "version": /^\d+(\.\d+){0,2)$/, //软件版本号：例如1.1.2
  "special": /[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]/, //匹配特殊字符
  "english": /^[a-zA-Z\s0-9]+$/, //匹配英文
}
/* ---- */
regular.chinse.test("中国”);

