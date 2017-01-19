/* ---- */
/*
* 字符串有回车符JSON.parse报错
*’{"name":"test123","nameCn":"测试分机房发布","gsid":"50","charge":"false","remark":"12
123
123","enable":"true","action":"22","response":"3","request":"2","loger":"3","dataType":"0","channelId":"0","engs":[{"backendEngOwner":"牛犇2","name":"分机房发布","rooms":[{"mark":"shanghai","name":"上海","props":[{"key":"1","url":"/url/"}]}]},{"backendEngOwner":"牛犇","name":"分机房发布1","rooms":[{"mark":"funtest","name":"测试","props":[{"key":"2","url":"/url/"}]}]},{"backendEngOwner":"牛犇","name":"分机房发布2","rooms":[{"mark":"functest","name":"restapitest","props":[{"key":"3","url":"/url/"}]}]},{"backendEngOwner":"/url/","name":"分机房发布3","rooms":[{"mark":"shubei","name":"数北","props":[{"key":"4","url":"/url/"}]}]}],"urlMappings":["/url/"]}‘
*/
/* ---- *
var jsonStr = str.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\r\n/g, "\\r\\n");
JSON.parse(jsonStr);
