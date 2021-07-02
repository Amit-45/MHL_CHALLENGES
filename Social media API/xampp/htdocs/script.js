$(document).ready(function(){


$("button").click(function(){

var CLIENT_ID = "6ef2fb34d251417d835fc8cdaf8b8679";
var REDIRECT_URI = "http://localhost:8080/InstagramAuth/redirect.html";

var url = "https://api.instagram.com/oauth/authorize/?client_id="+ CLIENT_ID + "&redirect_uri="+REDIRECT_URI+"&response_type=code&scope=basic+likes+comments+follower_list+public_content";

window.location = url;

});  

});
