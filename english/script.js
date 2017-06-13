/**
 * Created by 7d-vision on 2017/3/31.
 */
 var t = n = 0,count;
$(".topnav").html('<nav class="navbar navbar-fixed-top">' +
    '<div class="bgblacker"></div>' +
    '<div class="container cont_width960 padd000">' +
    '<div class="navbar-header">' +
    '<a class="navbar-brand" href="index_en.html"><img src="../images/7dlog.svg" alt="" class="qidlog"></a>' +
    '</div>' +
    '<div id="navbar" class="collapse navbar-collapse marg56">' +
    '<ul class="subtopnav nav navbar-nav other-nav cont_width688 margcenter">' +
    '<li class="subhardware">Hardware</li>' +
    '<li class="subsoftware">Software</li>' +
    '<li class="navabout"><a href="AboutUs.html">About us</a></li>' +
    '</ul>' +
    '<ul class="nav navbar-nav navbar-right margtest">' +
        '<li class="chinese_english">' +
            '<p>' +
                '<span class="language_word"><a href="../index.html">中文</a></span>' +
                '<span>/</span>' +
                '<span class="language_word"><a href="../english/index_en.html" class="now_language">EN</a></span>' +
            '</p>' +
        '</li>' +
    '</ul></div></div></nav>');
// '<li class="subhardware"><a href="hardware.html" class="subhardware">硬 件</a></li>' +
/*<ul class="nav navbar-nav navbar-right margtest"><li class="chinese_english"><img src="images/ch_en.svg" alt=""><a href="#"><span class="white_word">中文</span> / <span style="color:#999;">EN</span></a></li></ul></div></div></nav>');*/

$(".soft_show_box").html(
    '<div class="hidden2 s1_subhead clearfix subsoft nav_software gopano">' +
    '<div class="topico cont_width margcenter"><img src="../images/triangle.svg" alt=""></div>' +
    '<div class="s1head_box">' +
    '<div class="margcenter cont_width navhover">' +
    '<ul class="china_en_ul">' +
    '<li class="other_active">' +
        '<a href="Vi!PanoStudioPro_en.html" class="show001">' +
            '<img src="../images/computer.svg" alt="" class="bghead show01"><span class="show01">vipano</span>' +
        '</a>' +
        '<a href="Vi!PanoStudioPro_en.html" class="show002">' +
            '<img src="../images/bluecomputer.svg" alt="" class="bghead show01"><span class="show01">vipano</span>' +
        '</a></li>' +
    '<li class="other_active">' +
        '<a href="VIBOX_en.html" class="show001">' +
            '<img src="../images/vrsquare.svg" alt="" class="bghead show01"><span class="show01">vibox</span>' +
        '</a>' +
        '<a href="VIBOX_en.html" class="show002">' +
            '<img src="../images/bluevrsquares.svg" alt="" class="bghead show01"><span class="show01">vibox</span>' +
        '</a></li>' +
    '<li class="other_active">' +
        '<a href="VIFACE_en.html" class="show001">' +
            '<img src="../images/vifacemin.svg" alt="" class="bghead show01"><span class="show01">viface</span>' +
        '</a>' +
        '<a href="VIFACE_en.html" class="show002">' +
            '<img src="../images/bluefacemin.svg" alt="" class="bghead show01"><span class="show01">viface</span>' +
        '</a></li>' +
    /*'<li class="other_active">' +
        '<a href="CloudeService_en.html" class="show001">' +
            '<img src="../images/cloudservermin.svg" alt="" class="bghead show01"><span class="show01">7D cloud</span>' +
        '</a>' +
        '<a href="CloudeService_en.html" class="show002">' +
            '<img src="../images/bluecloudservermin.svg" alt="" class="bghead hgt42 show01"><span class="show01">7D cloud</span>' +
        '</a></li>' +*/
    '</ul></div></div></div>')

$(".hard_show_box").html(
    '<div class="hidden2 s1_subhead subhard clearfix">' +
        '<div class="topico cont_width margcenter"><img src="../images/triangle.svg" alt=""></div>' +
        '<div class="s1head_box hard_hide2">' +
            '<div class="margcenter width818">' +
                '<a href="s1_en.html"><img src="../images/s1ico.png" alt="" class="headico"><span class="show01" id="show222">S1</span></a>' +
            '</div>' +
        '</div>' +
    '</div>')

$(".serv_show_box").html('<div class="hidden2 s1_subhead clearfix nav_serve gopano"><div class="topico cont_width margcenter"><img src="../images/triangle.svg" alt=""></div><div class="s1head_box serv_hide"><div class="margcenter cont_width navhover"><ul><li class="other_active"><a href="BroadcastingTV.html#broadcast">广电</a></li><li class="other_active"><a href="BroadcastingTV.html#education">教育</a></li><li class="other_active"><a href="BroadcastingTV.html#exhibition">展览展示</a></li><li class="other_active"><a href="BroadcastingTV.html#exercise">体育</a></li><li class="other_active"><a href="BroadcastingTV.html#virtual">模拟仿真</a></li>' +
    // '<li class="other_active"><a href="BroadcastingTV.html#odm">ODM/OEM</a></li>' +
    '<li class="other_active"><a href="BroadcastingTV.html#movie">影视动漫</a></li></ul></div></div></div>')

// <span class="span_info">迄今为止，无法错过。</span>
/*$(".footerx").html('<footer class="container-fluid foot-wrap"> <div class="container foot_width"><p class="foot_top"><img src="images/foot_top.svg" alt=""><span>7D-SION</span></p><div class="row"><div class="row-content col-lg-2 col-sm-4 col-xs-6"><h3 class="redirectionh3">硬件产品</h3><ul><li><a href="s1.html">S1</a></li><li class="software"><a href="#" class="redirectionh3">软件产品</a></li><li><a href="Vi!PanoStudioPro.html">Vi!Pano</a></li><li><a href="VIBOX.html">Vibox</a></li><li><a href="VIFACE.html">Viface</a></li> <li><a href="CloudeService.html">七维云</a></li></ul></div><div class="row-content col-lg-2 col-sm-4 col-xs-6"> <h3 class="redirectionh3">服务</h3><ul><li><a href="#movie">影视动漫</a></li><li><a href="#broadcast">广电</a></li><li><a href="#education">教育</a></li><li><a href="#exhibition">展览展示</a></li><li><a href="#exercise">体育</a></li><li><a href="#virtual">模拟仿真</a></li><li><a href="#odm">ODM/OEM</a></li></ul></div><div class="row-content col-lg-2 col-sm-4 col-xs-6"><h3 class="redirectionh3">关于</h3><ul><li><a href="AboutUs.html">公司介绍</a></li><li><a href="JoinUs.html">人才招聘</a></li><li><a href="AboutUs.html#trophy">公司奖项</a></li><li><a href="newslist.html">公司新闻</a></li><li><a href="#">联系我们</a></li></ul></div><div class="row-content col-lg-6 col-sm-4 col-xs-6"><h3 class="redirectionh3">联系方式</h3><ul><li><a href="#"><span>市场合作 010-64142219</span><span>商务合作 010-64142286</span><span>销售咨询 010-64142078</span></a></li><li><a href="#"><span>内容合作 010-64142220</span><span>渠道合作 010-64142217</span><span>对外招聘 010-64142028</span></a></li><li><a href="#"><span>公司邮箱: 7dmarketing@7d-vision.com</span></a></li><li><p><span>公司地址: 北京市东城区和平里东街11号雍和航星园74号-76号</span><a href="javascript:;"><img src="images/location.svg" alt=""><span>查看地图信息</span></a></p></li></ul></div><div class="ula"><a href="javascript:;"><img src="images/sino.svg" alt=""></a><a href="javascript:;"><img src="images/weixin.svg" alt=""></a><a href="javascript:;"><img src="images/facebook.svg" alt=""></a><a href="javascript:;"><img src="images/Twitter.svg" alt=""></a></div><div class="foot_botm"><p><span>Copyright © 2011-2016 7D-VISION All Rights Reserved</span><a href="javascript:;">隐私政策</a><a href="javascript:;">使用条款</a><a href="javascript:;">法律信息</a></p><p>京公安网安备 11010502008968 京ICP备10214630</p></div></div></div></footer>')*/
$(".footer").html('<div class="footer">'+
    '<footer class="container-fluid foot-wrap">'+
    '<div class="container foot_width">' +
    '<div class="foot_top"><img src="../images/foot_top.svg" alt=""><span>7D-VISION</span><!--<div class="row-content col-lg-1 col-sm-1 col-xs-1 linkico"><a href="javascript:;"><img src="images/sino.svg" alt=""></a><a href="javascript:;"><img src="images/weixin.svg" alt=""></a></div>--></div>'+
'<div class="row">'+
    '<div class="row-content col-lg-2 col-sm-3 col-xs-6"><h3 class="redirectionh3">Hardware</h3><ul><li><a href="../english/s1_en.html">S1</a></li>' +
    '<li class="software"><p class="redirectionh3">Software</p></li>' +
    '<li><a href="../english/Vi!PanoStudioPro_en.html">vipano</a></li><li><a href="../english/VIBOX_en.html">vibox</a></li>' +
    '<li><a href="../english/VIFACE_en.html">viface</a></li>' +
    // '<li><a href="CloudeService.html">7D cloud</a></li>' +
    '</ul></div>' +
    /*'<div class="row-content col-lg-2 col-sm-3 col-xs-6">' +
    '<h3 class="redirectionh3">Service</h3><ul>' +
    '<li><a href="BroadcastingTV.html#broadcast">Broadcasting</a></li>' +
    '<li><a href="BroadcastingTV.html#education">Education</a></li>' +
    '<li><a href="BroadcastingTV.html#exhibition">Exhibition</a></li>' +
    '<li><a href="BroadcastingTV.html#exercise">Sports</a></li>' +
    '<li><a href="BroadcastingTV.html#virtual">Simulation</a></li>' +
    // '<li><a href="BroadcastingTV.html#odm">ODM/OEM</a></li>' +
    '<li><a href="BroadcastingTV.html#movie">CG Animation</a></li></ul></div>' +*/
    '<div class="row-content col-lg-2 col-sm-3 col-xs-6">' +
    '<h3 class="redirectionh3"><a href="AboutUs.html">About us</a></h3><ul>' +
    // '<li><a href="AboutUs.html#abouttit">About Us</a></li>' +
    // '<li><a href="AboutUs.html#teamwork">Partners</a></li>' +
    // '<li><a href="AboutUs.html#honor">Honor</a></li>' +
    // '<li><a href="JoinUs.html">Join Us</a></li>' +
    '</ul></div>' +
    '<div class="row-content col-lg-8 col-sm-5 col-xs-6"><h3 class="redirectionh3">Contact us</h3>' +
    '<ul><li><span>Marketing: +86-010-64142219</span><span>Sales: +86-010-64142078</span></li>' +
    '<li><span>BD: +86-010-64142217</span><span>Email: 7dmarketing@7d-vision.com</span></li>' +
    // '<li><span>Email: 7dmarketing@7d-vision.com</span></li>' +
    '<li><p>' +
            '<span>Address: Building 74-76, HangXing Technology Park, No.11 Hepingli East Street, Dongcheng District, Beijing City.</span>' +
            /*'<span>Address: 中国广东省深圳市福田区百花四路长城大厦5栋B座11楼7号</span>' +
            '<span>Address: BLK 5B, 11th Floor #7, Changcheng Dasha, Baihua Silu, Futian District, Shenzhen City, Guangdong Province, China.</span>' +*/
            '<a style="display: block;" href="http://map.baidu.com/?newmap=1&l=15&c=12960874.693390,4831976.150757&s=nb%26wd%3D%25E9%259B%258D%25E5%2592%258C%25E8%2588%25AA%25E6%2598%259F%25E5%259B%25AD%26c%3D131%26nb_x%3D12960874.693390%26nb_y%3D4831976.150757"><img src="../images/location.svg" alt=""><span>Map</span></a>' +
        '</p>' +
    '</li></ul></div>' +
    '<div class="ula"></div>' +
    '<div class="foot_botm">' +
    '<p>' +
    '<span>Copyright © 2011-2017 7D Vision, all rights reserved.</span>' +
    '<!--<a href="javascript:;">隐私政策</a><a href="javascript:;">使用条款</a><a href="javascript:;">法律信息</a>-->' +
    // '<p>Beijing public security network, 11010502008968 ICP prepared for Beijing 10214630</p>' +
    '</div></div></div></footer></div>')

var english_if=2;
$(".english").hide();
$(".chinese_english").on("click",function () {
    window.location.href = "b.html?name="+app;
    
    english_if=3;
    if(english_if==3){
        $(".english").show();
    }
})
if(english_if==3){
    $(".english").show();
}
$(".subhead_tc").hide();
$(document).ready(function() {

    $(".qidlog").on("mouseover",function () {
        $(".qidlog").css({opacity:0.6});
    })
    $(".qidlog").on("mouseout",function () {
        $(".qidlog").css({opacity:1});
    })

    $(".nav_serve li").on("click",function () {
        $(".nav_serve li").removeClass("aa");
        $(this).addClass("aa");
    })

    $(".show002").hide();
    $(".other_active").on("mouseover",function () {
        $(".other_active").find(".show002").hide();
        $(".other_active").find(".show001").show();
        $(this).find(".show001").hide();
        $(this).find(".show002").show();
    })

    $(".subsoft").on("mouseover",function () {
        $(".subsoft").addClass("show");
    })
    $(".subsoft").on("mouseout",function () {
        $(".subsoft").removeClass("show");
    })

    $(".subtopnav li").find("a").on("mouseover",function () {
        $(".subsoft").removeClass("show");
    })
    $(".cancel_btn").on("click",function () {
        window.history.go(-1);
    })
    // 软件二级菜单
    $(".subsoftware").on("mouseover",function () {
        $(".subsoft").addClass("show");
        $(".subhard").removeClass("show");
        $(".nav_serve").removeClass("show");
        $(".show002").hide();
        $(".show001").show();
    })
    $(".soft_hide2").on("mouseover",function () {
        $(".subsoft").addClass("show");
    })
    $(".soft_hide2").on("mouseout",function () {
        $(".subsoft").removeClass("show");
    })

    // 硬件二级菜单
    $(".subhardware").on("mouseover",function () {
        $(".subhard").addClass("show");
        $(".subsoft").removeClass("show");
        $(".nav_serve").removeClass("show");
    })
    $(".hard_hide2").on("mouseover",function () {
        $(".subhard").addClass("show");
    })
    $(".hard_hide2").on("mouseout",function () {
        $(".subhard").removeClass("show");
    })

    // 服务二级菜单
    $(".navservice").on("mouseover",function () {
        $(".nav_serve").addClass("show");
        $(".subhard").removeClass("show");
        $(".subsoft").removeClass("show");
    })
    $(".serv_hide").on("mouseover",function () {
        $(".nav_serve").addClass("show");
    })
    $(".serv_hide").on("mouseout",function () {
        $(".nav_serve").removeClass("show");
    })

    //导航关于
    $(".navabout").on("mouseover",function () {
        $(".nav_serve").removeClass("show");
        $(".subhard").removeClass("show");
        $(".subsoft").removeClass("show");
    })

    $(".three_btn .btn_shopcar").on("mouseover",function () {
        $(this).addClass("active")
    })
    $(".three_btn .btn_shopcar").on("mouseout",function () {
        $(this).removeClass("active")
    })
    $(".close").on("click",function () {
        /*$(this).addClass("gry_btn");
        $(this).attr("id","");*/
    })


    $(".jobli").on("mouseover",function () {
        $(this).addClass("navactive");
    })
    $(".jobli").on("mouseout",function () {
        $(this).removeClass("navactive");
    })


    /*count = $("#banner_list li").length;
    $("#banner_list li:not(:first-child)").hide();
    showAuto()
    t = setInterval(showAuto(),1);
    $(".tab li").on("mouseover",function () {
        var i = $(this).attr("indt") - 1;
        n = i;
        if (i >= count) return;
        $("#banner_list li").filter(":visible").fadeOut(1).parent().children().eq(i).fadeIn(1);
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    })
    // t = setInterval(showAuto(), 4000);
    t = setInterval(showAuto(),1);
    $("#banner").hover(
        function() {
            clearInterval(t)
        },
        function() {
            t = setInterval(showAuto(), 4);
        }
    )*/


    // 首页幻灯片切换效果
    var lint=0;
    var intervalID = setInterval(function () {
        $(".tab li").removeClass("on");
        $(".index li").hide();
        if(lint>3){
            lint=0;
        }
        $(".index").find("li").eq(lint).show();
        $(".tab").find("li").eq(lint).addClass("on");
        lint++;
    }, 2000);

    $(".index li").hide();
    $(".index").find("li").eq(0).show();
    $(".tab li").on("mouseover",function () {
        clearInterval(intervalID);
        $(".tab li").removeClass("on");
        $(this).addClass("on");
        var i=$(this).attr("indt");
        $(".index li").hide();
        $(".index").find("li").eq(i).show();
    })
})
/*function showAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $("#banner li").eq(n).trigger('click');
}*/
