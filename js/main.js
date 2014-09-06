$(function($) {
	$(window).scroll(function () {   
    	var page = $('section').attr('class');
        
        switch(page){
            case "hc01":
                var navTop=630;
                var videoTop=3970;
                var videoBottom=4400;
                var video_id = "video";
                break;
            case "hc02":
                var navTop=480;
                var videoTop=3475;
                var videoBottom=3730;
                var video_id = "video";
                break;
            case "js01":
                var navTop=530;
                var videoTop=2650;
                var videoBottom=2990;
                var video_id = "video";
                break;
            case "css-class":
                var navTop=456;
                var videoTop=0;
                var videoBottom=670;
                var video_id = "video2";
                break;
        }
        
        var nowTop=$(window).scrollTop();
   		$('#here').html(nowTop);
		
		if(nowTop > navTop){
            nav_lock();
		}else{
            nav_unlock();
		}
        
        //play video
		if(nowTop > videoTop && nowTop < videoBottom){
            document.getElementById(video_id).play();
        }else{
            document.getElementById(video_id).pause();
        }
    });
    
    $("#plan").click(function(){
        $('.maenu a').removeClass('here');
        $(this).addClass("here");
        scrollTo('.plan');
    });
    $("#overview").click(function(){
        $('.maenu a').removeClass('here');
        $(this).addClass("here");
        scrollTo('.overview');
    });
    $("#course").click(function(){
        $('.maenu a').removeClass('here');
        $(this).addClass("here");
        scrollTo('.course');
    });
    
    function scrollTo(secName){ 
        //var move = $(secName).offset().top;
        //alert(move);
        $("html,body").animate({scrollTop: $(secName).offset().top}, 1500);
    }
    
    function nav_lock(){
        $('nav').css({'position':'fixed','top':'0','margin-top':'0','box-shadow': '0 0px 6px rgba(0,0,0,.2)'});  
    }
    function nav_unlock(){$('nav').css({'position':'static','margin-top':'3em','box-shadow': 'none'});  }
    
    function show_nav(){
    	$('ul').css('display','block');  
    }

    function hide_nav(){
    	$('ul').css('display','none');  
    }
});

function share(share_to,doc_id,title,w,h){
    //var share = share_to.toString();

    switch(share_to){
        case "fb":
            url = "http://www.facebook.com/share.php?u=d-practice.com/courses/"+doc_id+"&title="+title;
            break;
        case "google":
            url ="https://plus.google.com/share?url={practice.com/courses/"+doc_id+"}";
            break;
        case "twitter":
            url = "http://twitter.com/home?status="+title+"+practice.com/courses/"+doc_id;
            break;
        case "pin":
            url = "http://pinterest.com/pin/create/button/?url=http://practice.com/courses/"+doc_id;
            break;
        case "tumblr":
            url = "http://www.tumblr.com/share?v=3&u=practice.com/courses/"+doc_id+"&t="+title;
            break;
    }
    winParameter = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height='+ h +',width='+w;
    window.open(url,'', winParameter);
    cancelHandler();
}
function cancelHandler(event){
    var event = event || window.event;
    if(event.preventDefault) event.preventDefault();
    if(event.returnValue) event.returnValue = false;
    return false;
}