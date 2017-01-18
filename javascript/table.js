//折叠表格中单独一行.js
function slideUp(trEle, callback) {
	setTimeout(function(){
		$(trEle).find("td").hide();		
	}, 120);	
	$(trEle).slideUp("fast", function(){
		callback && callback();
	});
}
