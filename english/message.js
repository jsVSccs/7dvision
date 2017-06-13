$(function(){
    hintNum=2;
    function hint() {
        layer.msg('Submitted successfully');
        hintNum=3;
        $("#commit").addClass("gry_btn");
        $("#commit").attr("disabled","disabled");
    }
    $("#commit").on("click",function(){
        $("#commit").attr("disabled","disabled");
        var username = $('#username').val();
        var gender = 0;
        // var gender = $("input[name='gender']:checked").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var content = $("#content").val();
        var content_type = $("#content_type").val();
        $.ajax({
            type: "GET",
            url: "https://member.7d-vision.com/Message/contactUs",
            dataType: "JSONP",
            jsonp: "callback",
            data: {
                "username" : username,
                "gender" : gender,
                "phone" : phone,
                "email" : email,
                "content" : content,
                "content_type" : content_type
            },
            success: function(data) {
                $("#commit").addClass("gry_btn");

                if(data.status == "1") {

                    if (content_type == 0) {
                        hint();
                        if(hintNum==3) {
                            setInterval(hh,3000);
                            function hh(){
                                window.location.href = "AboutUs.html";
                            }
                            hintNum=100;
                        }
                    }
                    if (content_type == 1) {
                        hint();
                        if(hintNum==3) {
                            setInterval(hh,3000);
                            function hh(){
                                window.location.href = "s1_en.html";
                            }
                            hintNum=100;
                        }
                    }
                    if (content_type == 2) {
                        hint();
                        if(hintNum==3) {
                            setInterval(hh,3000);
                            function hh(){
                                window.location.href = "Vi!PanoStudioPro_en.html";
                            }
                            hintNum=100;
                        }
                    }
                    if (content_type == 3) {
                        hint();
                        if(hintNum==3) {
                            setInterval(hh,3000);
                            function hh(){
                                window.location.href = "VIBOX_en.html";
                            }
                            hintNum=100;
                        }
                    }
                    if (content_type == 4) {
                        hint();
                        if(hintNum==3) {
                            setInterval(hh,3000);
                            function hh(){
                                window.location.href = "VIFACE_en.html";
                            }
                            hintNum=100;
                        }
                    }
                } else if (data.status == "-1") {
                    layer.msg('submit failure');
                    $("#commit").removeAttr("disabled");
                    $("#commit").removeClass("gry_btn");
                } /*else if (data.status == "-2") {
                    layer.msg('submit failure2');
                    $("#commit").removeAttr("disabled");
                    $("#commit").removeClass("gry_btn");
                }*/ else if (data.status == "-6") {
                    layer.msg('submit failure');
                    $("#commit").removeAttr("disabled");
                    $("#commit").removeClass("gry_btn");
                } else if (data.status == "-4") {
                    layer.msg('submit failure');
                    $("#commit").removeAttr("disabled");
                    $("#commit").removeClass("gry_btn");
                } else {
                    layer.msg('submit failure');
                }
            },
            error:function () {
                layer.msg('submit failure');
                $("#commit").removeAttr("disabled");
                $("#commit").removeClass("gry_btn");
            }
        });
    });
});
