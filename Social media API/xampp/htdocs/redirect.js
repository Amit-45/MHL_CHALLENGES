$(document).ready(function(){


var code = getCode("code");
var result;


var CLIENT_ID = "2106fa27fc544f96aa5e3e3b23f3d273";
var REDIRECT_URI = "http://localhost:8080/SocialAuth/redirect.html";
var CLIENT_SECRET = "8ae8df70d9974906982cbcffe7871b3a";

var url = "https://api.instagram.com/oauth/access_token";

$.ajax({
    url:  url,
    type: "POST",
    data: 
    {
     client_id:CLIENT_ID,
     client_secret:CLIENT_SECRET,
     redirect_uri:REDIRECT_URI,
     grant_type:"authorization_code",
     code:code
    },
    async:false,
    success: function(data){
       console.log(data);
       result = 
       `
            <img src="${data.user.profile_picture}" class="img-rounded">
            <p>UserName: ${data.user.username}</p>
            Bio:<p>Bio: ${data.user.bio}</p>
            Website:<p>Website: ${data.user.website}</p>
           `;
       $("#result").append(result);
    }
 }
);
