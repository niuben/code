/* ---- */
//过滤xss漏洞
function filterXss(str) {
	return str.replace(/</g, "&lt;").replace(/>/g, "&gt");
}
/* ---- */
filterXss("<script>alert("xss")</script>");
