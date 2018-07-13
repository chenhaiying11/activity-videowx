
//后台接口的地址
var listUrl = "http://123.57.19.47:8123/v1/hololens/storage/ActionMiniBarBeijing001?page=1&count=20&sortby=date&orderby=asc&meta=id||name||file_type||category||file_size||relate_name";
//数据的src的地址;
var addressUrl = "http://123.57.19.47:8123/v1/hololens/storage/get/";
//跳转页面的页面地址;
// var tzUrl = "http://192.168.43.63/video-wx/video.html?";
 $.ajax({
        url:listUrl,
        type: "get",    
        async: true,  
        dataType: "json", 
        success: function(data, status, xhr){
            console.log(data);
            srcData=data.data;
            var videos=document.querySelector('video');
            // window.location.href=tzUrl+'videoid='+srcData[0].id+'&videoname='+srcData[0].name+'&title=';
        },
        error: function(xhr, status, error){

        },
        complete: function(xhr, status){
        }
    });

function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) {   
        return unescape(r[2]);  
    }  
    return null;
}
var urlInterval=setInterval(urlgo,100);
console.log('asdasdfads')
function urlgo(){
    if (window.location.search !='') {
        var id=GetQueryString('videoid');
        var name=GetQueryString('videoname');
        var title=GetQueryString('title');
        var videoPlay = document.querySelector('video');
        videoPlay.src=addressUrl+id+'/'+name;
        document.querySelector('.videotitle').innerText='精彩片段'
        clearInterval(urlInterval);
    };
}

if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
   $(".downText").show();
   $(".downUrl").hide();
} else {
    $(".downText").hide();
    $(".downUrl").show();  
}
var ovideo = document.querySelector(".downUrl");
ovideo.href =document.querySelector('video').src;
