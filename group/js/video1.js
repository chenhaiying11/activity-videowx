var baseUrl = 'http://www.actionminibar.com:8123'
var videoUrl = baseUrl+'/v1/service/storage/get/';
var defaultVideoId="KsuGAUEs1lACZr5BSDU6Tnig4zHgkz4K1mz9wk0oUiVuM2DxgeTBGorxJIVWU78K"
var defaultVideoName ='video.mp4';
var defaultVideoTitle ='鎴忕簿绛変綘';
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
   $(".downText").show();
   $(".downUrl").hide();
} else {
    $(".downText").hide();
    $(".downUrl").show();  
}
function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) {   
        return decodeURIComponent(r[2]);  
    }  
    return null;
}
var urlInterval=setInterval(urlgo,100);
function urlgo(){
    var id;
    var name;
    var videotitle;
    var videoPlay = document.querySelector('video');
    if (window.location.search !='') {
        id=GetQueryString('videoid');
        name=GetQueryString('videoname');
        videotitle=GetQueryString('videotitle');
    };
    if(id==null){
        id=defaultVideoId
    }
    if(name==null){
        name=defaultVideoName
    }
    if(videotitle==null){
        videotitle=defaultVideoTitle
    }
    videoPlay.src=videoUrl+id+'/'+name;
    document.querySelector('.videotitle').innerHTML聽=videotitle
    document.title ='鎴忕:'+videotitle
    var ovideo = document.querySelector(".downUrl");
    ovideo.href =document.querySelector('video').src;
    clearInterval(urlInterval);

}
