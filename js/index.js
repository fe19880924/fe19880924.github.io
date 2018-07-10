$(document).ready(function () {
	var $change_btn = $("#nav .content ul.menu li.last_menu>ul.one li");
	var $view_L_li = $("#main .container_new .news_events .news .news_right ul>li");
	var $view_R_img = $("#main .container_new .news_events .news .news_left a .img");
	var $body = $("body");
	var $info_part_item_d= $(".info_part-item-d")
	var $info1point4= $("#main .content .first_info .subtitle")
	var $info1point3= $("#main .content .ontology_ul ul li .text")
	var $download= $("#main .content .download_white_paper p.text")
	var $morepostion = $("#nav .content ul.menu .two")
	var $topnav = $("#nav .content ul.menu li a")
	var $mobiletopnav = $("#mobile_nav ul.menu>li>a")
	var $topnavlang = $("#nav .content ul.menu li span")
	var $nokoreanlang = $(".nokoreanlang")
	var $koreanlang = $(".koreanlang")
	var $banner = $("#banner")
	var $letter = $("#letter")
	var $Triones = $("#Triones")
	var $letterbtn = $(".letterbtn")
	var $Trionesbtn = $(".Trionesbtn")
	var $letterbtnbtn = $(".letterbtnbtn")
	var $Trionesbtnbtn = $(".Trionesbtnbtn")
	var $dotletter = $("#dotletter")
	var $dotTriones = $("#dotTriones")
	init();
	
	var timer = 0;
	bannerstart();

	$change_btn.click(function(){
		if($(this).index()==0){ // 英文
			eninit()
		}else{ // 中文
			if($(this).index()==1){
				cninit()
			}else{// 韩文
				if($(this).index()==2){
					koinit()
				}else{//日文
					jpinit()
				}
			}
		}
	});
	function init(){
		var key=getCookie("lang");
		if(key=="cn" || key=="zh" ){
			cninit()
		}else{
			if(key=="ko" ){
			   koinit()
			}else{
				if(key=="jp" ){
					jpinit()
				 }else{
					eninit()
				 }
			}
		}
	}
	var flag = true
	function bannerstart(){
		timer = setInterval(function(){
			changeBanner()
		},10000)
	}
	function bannerstop(){
		clearInterval(timer);
	}
	$dotletter.click(function(){
		bannerstop()
		$banner.css("background",'#000 url("../images/index/img_bg.png")no-repeat center')	
		$Triones.css("display",'none')
		$Trionesbtn.css("display",'none')
		$Trionesbtnbtn.css("display",'none')
		$letter.css("display",'block')
		$letterbtn.css("display",'block')
		$letterbtnbtn.css("display",'flex')
		$dotletter.css("background-color","#32a4be")
		$dotTriones.css("background-color","white")
		flag = !flag
		bannerstart()
	});
	$dotTriones.click(function(){
		bannerstop()
		$banner.css("background",'#000 url("../images/index/img_bg.png")no-repeat center')
		$letter.css("display",'none')
		$letterbtn.css("display",'none')
		$letterbtnbtn.css("display",'none')
		$Triones.css("display",'block')
		$Trionesbtn.css("display",'block')
		$Trionesbtnbtn.css("display",'flex')
		$dotletter.css("background-color","white")
		$dotTriones.css("background-color","#32a4be")
		flag = !flag
		bannerstart()
	});
	function changeBanner(){
		if(flag){
			$banner.css("background",'#000 url("../images/index/img_bg.png")no-repeat center')	
			$Triones.css("display",'none')
			$Trionesbtn.css("display",'none')
			$Trionesbtnbtn.css("display",'none')
			$letter.css("display",'block')
			$letterbtn.css("display",'block')
			$letterbtnbtn.css("display",'flex')
			$dotletter.css("background-color","#32a4be")
			$dotTriones.css("background-color","white")
		}else{
			$banner.css("background",'#000 url("/images/index/img_bg.png")no-repeat center')
			$letter.css("display",'none')
			$letterbtn.css("display",'none')
			$letterbtnbtn.css("display",'none')
			$Triones.css("display",'block')
			$Trionesbtn.css("display",'block')
			$Trionesbtnbtn.css("display",'flex')
			$dotletter.css("background-color","white")
			$dotTriones.css("background-color","#32a4be")
		}
		flag = !flag
	}
	function cninit(){
		$view_R_img.css("background","url('/images/index/view_1_cn.jpg') no-repeat center/cover");
		$view_L_li.eq(0).find('a .img').css("background","url('/images/index/view_2_en.jpg') no-repeat center/cover");
		$view_L_li.eq(1).find('a .img').css("background","url('/images/index/view_3_en.jpg') no-repeat center/cover");
		$body.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$download.css("font-family",'SourceHanSansCN-ExtraLight')
		$info_part_item_d.css("line-height",1.3)
		$info1point4.css("line-height",1.4)
		$info1point3.css("line-height",1.3)
		$morepostion.css("left","-88%")
		$topnav.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$mobiletopnav.css("font-family",'Microsoft YaHei')
		$topnavlang.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$nokoreanlang.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$koreanlang.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
	}
	function eninit(){
        $view_R_img.css("background","url('/images/index/view_1_en.jpg') no-repeat center/cover");
        $view_L_li.eq(0).find('a .img').css("background","url('/images/index/view_2_en.jpg') no-repeat center/cover");
		$view_L_li.eq(1).find('a .img').css("background","url('/images/index/view_3_en.jpg') no-repeat center/cover");
		$body.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$download.css("font-family",'SourceHanSansCN-ExtraLight')
		$info_part_item_d.css("line-height",1.3)
		$info1point4.css("line-height",1.4)
		$info1point3.css("line-height",1.3)
		$morepostion.css("left","-73%")
		$topnav.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$mobiletopnav.css("font-family",'Microsoft YaHei')
		$topnavlang.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$nokoreanlang.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$koreanlang.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
	}
	function koinit(){
        $view_R_img.css("background","url('/images/index/view_1_en.jpg') no-repeat center/cover");
        $view_L_li.eq(0).find('a .img').css("background","url('/images/index/view_2_en.jpg') no-repeat center/cover");
        $view_L_li.eq(1).find('a .img').css("background","url('/images/index/view_3_en.jpg') no-repeat center/cover");
		$body.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
		$download.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
		$info_part_item_d.css("line-height",1.5)
		$info1point4.css("line-height",1.5)
		$info1point3.css("line-height",1.5)
		$morepostion.css("left","-51%")
		$topnav.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
		$mobiletopnav.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
		$topnavlang.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
		$nokoreanlang.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$koreanlang.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
	}
	function jpinit(){
        $view_R_img.css("background","url('./images/index/view_1_en.jpg') no-repeat center/cover");
        $view_L_li.eq(0).find('a .img').css("background","url('./images/index/view_2_en.jpg') no-repeat center/cover");
        $view_L_li.eq(1).find('a .img').css("background","url('./images/index/view_3_en.jpg') no-repeat center/cover");
		$body.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$download.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$info_part_item_d.css("line-height",1.5)
		$info1point4.css("line-height",1.5)
		$info1point3.css("line-height",1.5)
		$morepostion.css("left","-51%")
		$topnav.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$mobiletopnav.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$topnavlang.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$nokoreanlang.css("font-family",'"OpenSans","Microsoft YaHei","sans-serif"')
		$koreanlang.css("font-family",'"NanumSquareR","OpenSans","Microsoft YaHei","sans-serif"')
	}
    function getCookie(name){
        var strcookie=document.cookie;
        var arrcookie=strcookie.split("; ");
        for(var i=0;i<arrcookie.length;i++){
            var arr=arrcookie[i].split("=");
            if(arr[0]==name && arr[1]!='undefined' && arr[1]!='null'){
                return unescape(arr[1]);
            }
        }
        return null;
    }

});