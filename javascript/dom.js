// 模拟jquery $
function _$(id){	        
	 var str=id;
      id=id.substr(1,id.length);
	  if(str.indexOf("#")!=-1){			            
	    return document.getElementById(id);  
	  }      
	  return  getElementByClass(id);
}
/* ---- */
_$("#test");

/* ---- */
// 通过类名获取DOM节点
function getElementByClass (classname) {  
   var isHave=0;
   var elements = [];      
   var alltags = document.all ? document.all : document.getElementsByTagName("*")
   
   for (var i=0;i<alltags.length;i++){	   
      var classNames = alltags[i].className.split(" ");
	  isHave=0;	  
	  for(var n=0,m=classNames.length;n<m;n++){		    
			if(classNames[n]==classname){
			  isHave=1;
			  break;
			}
	  }
	  
      if (isHave)
          elements[elements.length] = alltags[i];
   }
   return elements;
}
/* ---- */
getElementByClass(".test")

/*
* 在一个DOM节点之前插入一个节点
* element     : 需要插入的节点
* otherElement: 被插入的节点
*/
function insertBefore(element, otherElement) {

    var parentNode = otherElement.parentNode;
    var sonNodes = parentNode.childNodes;
    var childNodes = [];
    var newChildNodes = [];
    for (var i = 0; i < sonNodes.length; i++) {
        var currentNode = sonNodes[i];
        if (currentNode.nodeType != 1) {
            continue;
        }
        if (currentNode.parentNode == parentNode) {
            childNodes.push(currentNode);
        }
    }
    parentNode.innerHTML = "";
    for (var i = 0; i < childNodes.length; i++) {
        var currentNode = childNodes[i];
        if (otherElement == currentNode) {
            parentNode.appendChild(element);
        }
        if (element != currentNode) {
            parentNode.appendChild(currentNode);
        }
    }
}
/* ---- */

