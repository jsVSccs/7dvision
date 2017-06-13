/**
 * Created by 7d-vision on 2017/5/12.
 */
/**
 * Created by 7d-vision on 2017/3/31.
 */
var t = n = 0,count;
$(".topnav").html('<nav class="navbar navbar-fixed-top">' +
    '<div class="bgblacker"></div>' +
    '<div class="container cont_width960 padd000">' +
    '<div class="navbar-header">' +
    '<a class="navbar-brand" href="index.html"><img src="images/7dlog.svg" alt="" class="qidlog"></a>' +
    '</div>' +
    '<div id="navbar" class="collapse navbar-collapse marg56">' +
    '<ul class="subtopnav nav navbar-nav other-nav cont_width688 margcenter">' +
    '<li class="subhardware">硬 件</li>' +
    '<li class="subsoftware">软 件</li>' +
    '<li class="navservice"><a href="BroadcastingTV.html">服 务</a></li>' +
    '<li class="navabout"><a href="AboutUs.html">关 于</a></li>' +
    // '<li><a href="newslist.html">新 闻</a></li>' +
    // '<li><a href="ContactUs.html">联  系</a></li>' +
    '<li><a href="JoinUs.html">加入我们</a></li>' +
    '</ul>' +
    '<ul class="nav navbar-nav navbar-right margtest">' +
    '<li class="chinese_english">' +
    '<p>' +
    '<span class="language_word"><a href="index.html" class="now_language">中文</a></span>' +
    '<span>/</span>' +
    '<span class="language_word"><a href="../english/index_en.html">EN</a></span>' +
    '</p>' +
    '</li>' +
    '</ul>' +
    '</div></div></nav>');
// '<li class="subhardware"><a href="hardware.html" class="subhardware">硬 件</a></li>' +
/*<ul class="nav navbar-nav navbar-right margtest"><li class="chinese_english"><img src="images/ch_en.svg" alt=""><a href="#"><span class="white_word">中文</span> / <span style="color:#999;">EN</span></a></li></ul></div></div></nav>');*/

$(".soft_show_box").html('' +
    '<div class="hidden2 s1_subhead clearfix subsoft nav_software gopano">' +
    '<div class="topico cont_width margcenter"><img src="images/triangle.svg" alt=""></div>' +
    '<div class="s1head_box">' +
    '<div class="margcenter cont_width navhover">' +
    '<ul>' +
    '<li class="other_active"><a href="Vi!PanoStudioPro.html" class="show001"><img src="images/computer.svg" alt="" class="bghead show01"><span class="show01">vipano</span></a><a href="Vi!PanoStudioPro.html" class="show002"><img src="images/bluecomputer.svg" alt="" class="bghead show01"><span class="show01">vipano</span></a></li>' +
    '<li class="other_active"><a href="VIBOX.html" class="show001"><img src="images/vrsquare.svg" alt="" class="bghead show01"><span class="show01">vibox</span></a><a href="VIBOX.html" class="show002"><img src="images/bluevrsquares.svg" alt="" class="bghead show01"><span class="show01">vibox</span></a></li>' +
    '<li class="other_active"><a href="VIFACE.html" class="show001"><img src="images/vifacemin.svg" alt="" class="bghead show01"><span class="show01">viface</span></a><a href="VIFACE.html" class="show002"><img src="images/bluefacemin.svg" alt="" class="bghead show01"><span class="show01">viface</span></a></li>' +
    '<li class="other_active"><a href="CloudeService.html" class="show001"><img src="images/cloudservermin.svg" alt="" class="bghead show01"><span class="show01">七维云</span></a><a href="CloudeService.html" class="show002"><img src="images/bluecloudservermin.svg" alt="" class="bghead hgt42 show01"><span class="show01">七维云</span></a></li>' +
    '</ul></div></div></div>')

$(".hard_show_box").html('<div class="hidden2 s1_subhead subhard clearfix"><div class="topico cont_width margcenter"><img src="images/triangle.svg" alt=""></div><div class="s1head_box hard_hide2"><div class="margcenter width818"><a href="s1.html"><img src="images/s1ico.png" alt="" class="headico"></a></div></div></div>')

$(".serv_show_box").html('<div class="hidden2 s1_subhead clearfix nav_serve gopano"><div class="topico cont_width margcenter"><img src="images/triangle.svg" alt=""></div><div class="s1head_box serv_hide"><div class="margcenter cont_width navhover"><ul><li class="other_active"><a href="BroadcastingTV.html#broadcast">广电</a></li><li class="other_active"><a href="BroadcastingTV.html#education">教育</a></li><li class="other_active"><a href="BroadcastingTV.html#exhibition">展览展示</a></li><li class="other_active"><a href="BroadcastingTV.html#exercise">体育</a></li><li class="other_active"><a href="BroadcastingTV.html#virtual">模拟仿真</a></li>' +
    // '<li class="other_active"><a href="BroadcastingTV.html#odm">ODM/OEM</a></li>' +
    '<li class="other_active"><a href="BroadcastingTV.html#movie">影视动漫</a></li></ul></div></div></div>')

// <span class="span_info">迄今为止，无法错过。</span>
/*$(".footerx").html('<footer class="container-fluid foot-wrap"> <div class="container foot_width"><p class="foot_top"><img src="images/foot_top.svg" alt=""><span>7D-SION</span></p><div class="row"><div class="row-content col-lg-2 col-sm-4 col-xs-6"><h3 class="redirectionh3">硬件产品</h3><ul><li><a href="s1.html">S1</a></li><li class="software"><a href="#" class="redirectionh3">软件产品</a></li><li><a href="Vi!PanoStudioPro.html">Vi!Pano</a></li><li><a href="VIBOX.html">Vibox</a></li><li><a href="VIFACE.html">Viface</a></li> <li><a href="CloudeService.html">七维云</a></li></ul></div><div class="row-content col-lg-2 col-sm-4 col-xs-6"> <h3 class="redirectionh3">服务</h3><ul><li><a href="#movie">影视动漫</a></li><li><a href="#broadcast">广电</a></li><li><a href="#education">教育</a></li><li><a href="#exhibition">展览展示</a></li><li><a href="#exercise">体育</a></li><li><a href="#virtual">模拟仿真</a></li><li><a href="#odm">ODM/OEM</a></li></ul></div><div class="row-content col-lg-2 col-sm-4 col-xs-6"><h3 class="redirectionh3">关于</h3><ul><li><a href="AboutUs.html">公司介绍</a></li><li><a href="JoinUs.html">人才招聘</a></li><li><a href="AboutUs.html#trophy">公司奖项</a></li><li><a href="newslist.html">公司新闻</a></li><li><a href="#">联系我们</a></li></ul></div><div class="row-content col-lg-6 col-sm-4 col-xs-6"><h3 class="redirectionh3">联系方式</h3><ul><li><a href="#"><span>市场合作 010-64142219</span><span>商务合作 010-64142286</span><span>销售咨询 010-64142078</span></a></li><li><a href="#"><span>内容合作 010-64142220</span><span>渠道合作 010-64142217</span><span>对外招聘 010-64142028</span></a></li><li><a href="#"><span>公司邮箱: 7dmarketing@7d-vision.com</span></a></li><li><p><span>公司地址: 北京市东城区和平里东街11号雍和航星园74号-76号</span><a href="javascript:;"><img src="images/location.svg" alt=""><span>查看地图信息</span></a></p></li></ul></div><div class="ula"><a href="javascript:;"><img src="images/sino.svg" alt=""></a><a href="javascript:;"><img src="images/weixin.svg" alt=""></a><a href="javascript:;"><img src="images/facebook.svg" alt=""></a><a href="javascript:;"><img src="images/Twitter.svg" alt=""></a></div><div class="foot_botm"><p><span>Copyright © 2011-2016 7D-VISION All Rights Reserved</span><a href="javascript:;">隐私政策</a><a href="javascript:;">使用条款</a><a href="javascript:;">法律信息</a></p><p>京公安网安备 11010502008968 京ICP备10214630</p></div></div></div></footer>')*/
$(".footer").html('<div class="footer">'+
    '<footer class="container-fluid foot-wrap">'+
    '<div class="container foot_width">' +
    '<div class="foot_top"><img src="images/foot_top.svg" alt=""><span>7D-VISION</span><!--<div class="row-content col-lg-1 col-sm-1 col-xs-1 linkico"><a href="javascript:;"><img src="images/sino.svg" alt=""></a><a href="javascript:;"><img src="images/weixin.svg" alt=""></a></div>--></div>'+
    '<div class="row">'+
    '<div class="row-content col-lg-2 col-sm-3 col-xs-6"><h3 class="redirectionh3">硬件</h3><ul><li><a href="s1.html">S1</a></li>' +
    '<li class="software"><a href="#" class="redirectionh3">软件</a></li><li><a href="Vi!PanoStudioPro.html">vipano</a></li>' +
    '<li><a href="VIBOX.html">vibox</a></li><li><a href="VIFACE.html">viface</a></li>' +
    '<li><a href="CloudeService.html">七维云</a></li></ul></div>' +
    '<div class="row-content col-lg-2 col-sm-3 col-xs-6"><h3 class="redirectionh3">服务</h3><ul>' +
    '<li><a href="BroadcastingTV.html#broadcast">广电</a></li>' +
    '<li><a href="BroadcastingTV.html#education">教育</a></li>' +
    '<li><a href="BroadcastingTV.html#exhibition">展览展示</a></li>' +
    '<li><a href="BroadcastingTV.html#exercise">体育</a></li>' +
    '<li><a href="BroadcastingTV.html#virtual">模拟仿真</a></li>' +
    // '<li><a href="BroadcastingTV.html#odm">ODM/OEM</a></li>' +
    '<li><a href="BroadcastingTV.html#movie">影视动漫</a></li></ul></div>' +
    '<div class="row-content col-lg-2 col-sm-3 col-xs-6">' +
    '<h3 class="redirectionh3">关于</h3><ul>' +
    '<li><a href="AboutUs.html#abouttit">关于我们</a></li>' +
    '<li><a href="AboutUs.html#teamwork">合作伙伴</a></li>' +
    '<li><a href="AboutUs.html#honor">公司荣誉</a></li>' +
    '<li><a href="JoinUs.html">加入我们</a></li>' +
    '</ul></div>' +
    '<div class="row-content col-lg-6 col-sm-5 col-xs-6"><h3 class="redirectionh3">联系方式</h3>' +
    '<ul><li><span>市场合作 010-64142219</span><span>商务合作 010-64142286</span><span>销售咨询 010-64142078</span></li>' +
    '<li><span>内容合作 010-64142220</span><span>渠道合作 010-64142217</span><span>对外招聘 010-64142028</span></li>' +
    '<li><span>公司邮箱: 7dmarketing@7d-vision.com</span></li>' +
    '<li><p><span>公司地址: 北京市东城区和平里东街11号雍和航星园74号-76号</span>' +
    '<a href="http://map.baidu.com/?newmap=1&l=15&c=12960874.693390,4831976.150757&s=nb%26wd%3D%25E9%259B%258D%25E5%2592%258C%25E8%2588%25AA%25E6%2598%259F%25E5%259B%25AD%26c%3D131%26nb_x%3D12960874.693390%26nb_y%3D4831976.150757"><img src="images/location.svg" alt=""><span>查看地图信息</span></a></p></li></ul>' +
    '</div>' +
    '<div class="ula"></div><div class="foot_botm"><p><span>Copyright © 2011-2017 7D-VISION All Rights Reserved</span><!--<a href="javascript:;">隐私政策</a><a href="javascript:;">使用条款</a><a href="javascript:;">法律信息</a>--></p><p>京公安网安备11010502008968京ICP备10214630</p></div></div></div></footer></div>')


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
    $(".cancel_btn").on("click",function () {
        window.history.go(-1);
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
    $(".submin_btn").on("click",function () {
        contactus()
    })
    function contactus() {
        clearTimeout(tctime);
        $(".submin_finish").css("display","block");
        var itime=3;
        function timeshow() {
            $(".time").text(itime+"s")
            if(itime==0){
                $(".submin_finish").css("display","none")
                clearTimeout(tctime);
                itime=3;
            }
            itime--;

        }
        var tctime=setInterval(timeshow,1000);
    }

    $(".jobli").on("mouseover",function () {
        $(this).addClass("navactive");
    })
    $(".jobli").on("mouseout",function () {
        $(this).removeClass("navactive");
    })


    count = $("#banner_list li").length;
    $("#banner_list li:not(:first-child)").hide();
    showAuto()
    t = setInterval(showAuto(),1);
    $(".tab li").on("mouseover",function () {
        var i = $(this).attr("indt") - 1;
        n = i;
        if (i >= count) return;
        $("#banner_list li").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(500);
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
    )

})
function showAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $("#banner li").eq(n).trigger('click');
}
