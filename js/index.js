// JavaScript Document

var link = document.getElementByID("link");
function a(x){
            $(x).css({
                "box-shadow": "1px 1px 2px #c1bdb9",
                "border-radius":"6px"
            });
            $(x+" img").css({
                "opacity":"0.8"
            });
            $(x+" p").css({
                "opacity":"1",
                "transition":"transform 1s",
                "transform": "translate(0,-240%)"
            });
        }
        function b(x){
            $(x).css({
                "box-shadow": "",
                "border-radius":""
            });
            $(x+" img").css({
                "opacity":"1"

            });
            $(x+" p").css({
                "opacity":"0",
                "transition":"transform 1s",
                "transform": "translate(0,240%)"
            });
        }

	link.onclick = function(){
		window.location.href = 登录页.html;
}
