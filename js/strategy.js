$(function () {
    $(".box-content-warp>div").hover(
        function () {
            if ($(this).index() == 0) {
                $(".box-content-border").css("top", "2px")
            } else if ($(this).index() == 1) {
                $(".box-content-border").css("top", "71px")
            } else if ($(this).index() == 2) {
                $(".box-content-border").css("top", "140px")
            } else if ($(this).index() == 3) {
                $(".box-content-border").css("top", "209px")
            }
            $(".box-content-border").show()
            $(this).css({
                "border-left": "6px solid #1ab2db",
                "border-top": "2px solid #1ab2db",
                "border-bottom": "2px solid #1ab2db"
            })
            $(this).find("h3").css("padding-left","9px")
            $(this).find("ul").css("padding-left","0px")
            $(this).find(".box-content-left").show()
        }, function () {
            $(this).find("h3").css("padding-left","15px")
            $(this).find("ul").css("padding-left","3px")
            console.log($(this).index())
            $(".box-content-border").hide()
            $(this).css({
                "border-left": "0px solid #1ab2db",
                "border-top": "0px solid #1ab2db",
                "border-bottom": "0px solid #1ab2db"
            })
            $(this).find(".box-content-left").hide()
        }
    )

//    更多人们诚实
    $(".recommend-line ul .active div").show();

    $(".recommend-line div p").each(function (i) {
        $(this).css("left", (120 + i * 81) + "px");
    });
    $($(".recommend-line div p")[0]).show();
    $(".recommend-line div p").each(function (i) {
        $(this).click(function () {
            console.log(i)
            $(this).parents(".recommend-line").find("li div").hide()
            $(this).parents(".recommend-line").find("li").removeClass("active");
            $($(this).parents(".recommend-line").find("li")[i]).find("div").show()
            $($(this).parents(".recommend-line").find("li")[i]).addClass("active")
            $(this).parent().find("p").removeClass("active")
            $(this).addClass("active")
        })
    });


    //懒加载
    function ljz() {
        $img = $("img");
        //获取可视区域高度 616
        var $height = $(window).height();
        var $hidtop = $(document).scrollTop();
        $img.each(function () {
            //个个 模块距离文档顶部的距离
            var $top = $(this).offset().top;
            if ($top <= ($hidtop + $height + 20)) {
                $(this).attr("src", $(this).attr("_src"))
            }
        })
    }

    ljz();
    $(window).on("scroll", function () {
        //被网页  卷曲的高度
        ljz()
    });

    //ajax yibuqingq
    function ajaxFnImg($scenic) {
        //异步请求 加载景点 信息
        var $li = null;
        var $img = null;
        $.ajax({
            //请求方式为get
            type: "POST",
            //json文件位置
            url: "json/scenicJSON.json",
            //返回数据格式为json
            dataType: "json",
            //请求成功完成后要执行的方法
            success: function (data) {
                //使用$.each方法遍历返回的数据date,插入到id为#result中
                var str = "<ul>";
                $.each(data.strategyScenicImg1, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] +" alt="+n["alt"]+"></div>" +
                        "<div class='city'>" + n["div"] + "</div></li>";
                });

                str += "</ul>";
                $scenic.append(str);
                $li = $(".recommend-img li");
                $li.hover(function () {
                    console.log(1);
                    $(this).css("border", "3px solid #ffba00")
                }, function () {
                    $(this).css("border", "1px solid rgba(102,102,102,0.3)")
                });
                ljz();
            }
        });
    }

    function ajaxFnImg2($scenic) {
        //异步请求 加载景点 信息
        var $li = null;
        var $img = null;
        $.ajax({
            //请求方式为get
            type: "POST",
            //json文件位置
            url: "json/scenicJSON.json",
            //返回数据格式为json
            dataType: "json",
            //请求成功完成后要执行的方法
            success: function (data) {
                //使用$.each方法遍历返回的数据date,插入到id为#result中
                var str = "<ul>";
                $.each(data.strategyScenicImg2, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div class='city'>" + n["div"] + "</div></li>";
                });

                str += "</ul>";
                $scenic.append(str);
                $li = $(".recommend-img li")
                $li.hover(function () {
                    console.log(1)
                    $(this).css("border", "3px solid #ffba00")
                }, function () {
                    $(this).css("border", "1px solid rgba(102,102,102,0.3)")
                })
                ljz();
            }
        });
    }

    function ajaxFnImg2_2($scenic) {
        //异步请求 加载景点 信息
        var $li = null;
        var $img = null;
        $.ajax({
            //请求方式为get
            type: "POST",
            //json文件位置
            url: "json/scenicJSON.json",
            //返回数据格式为json
            dataType: "json",
            //请求成功完成后要执行的方法
            success: function (data) {
                //使用$.each方法遍历返回的数据date,插入到id为#result中
                var str = "<ul>";
                $.each(data.strategyScenicImg2_2, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div class='city'>" + n["div"] + "</div></li>";
                });

                str += "</ul>";
                $scenic.append(str);
                $li = $(".recommend-img li");
                $li.hover(function () {
                    console.log(1)
                    $(this).css("border", "3px solid #ffba00")
                }, function () {
                    $(this).css("border", "1px solid rgba(102,102,102,0.3)")
                })
                ljz();
            }
        });
    }

    function ajaxFnImg2_3($scenic) {
        //异步请求 加载景点 信息
        var $li = null;
        var $img = null;
        $.ajax({
            //请求方式为get
            type: "POST",
            //json文件位置
            url: "json/scenicJSON.json",
            //返回数据格式为json
            dataType: "json",
            //请求成功完成后要执行的方法
            success: function (data) {
                //使用$.each方法遍历返回的数据date,插入到id为#result中
                var str = "<ul>";
                $.each(data.strategyScenicImg2_3, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div class='city'>" + n["div"] + "</div></li>";
                });

                str += "</ul>";
                $scenic.append(str);
                $li = $(".recommend-img li")
                $li.hover(function () {
                    console.log(1)
                    $(this).css("border", "3px solid #ffba00")
                }, function () {
                    $(this).css("border", "1px solid rgba(102,102,102,0.3)")
                })
                ljz();
            }
        });
    }

    function ajaxFnImg2_4($scenic) {
        //异步请求 加载景点 信息
        var $li = null;
        var $img = null;
        $.ajax({
            //请求方式为get
            type: "POST",
            //json文件位置
            url: "json/scenicJSON.json",
            //返回数据格式为json
            dataType: "json",
            //请求成功完成后要执行的方法
            success: function (data) {
                //使用$.each方法遍历返回的数据date,插入到id为#result中
                var str = "<ul>";
                $.each(data.strategyScenicImg2_4, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"]+"></div>" +
                        "<div class='city'>" + n["div"] + "</div></li>";
                });

                str += "</ul>";
                $scenic.append(str);
                $li = $(".recommend-img li")
                $li.hover(function () {
                    console.log(1)
                    $(this).css("border", "3px solid #ffba00")
                }, function () {
                    $(this).css("border", "1px solid rgba(102,102,102,0.3)")
                });
                ljz();
            }
        });
    }

    var $rmdImg1 = $("#recommend1 .recommend-img");
    var $rmdImg2 = $("#recommend2 .recommend-img");
    ajaxFnImg($rmdImg1);
    ajaxFnImg2($rmdImg2);

    $("#recommend2 #recommend li").each(function (i) {
        $(this).click(function () {
            $(this).parents("#recommend2").find(".recommend-img ul").remove()
            $(this).parent().find("li").removeClass("active")
            $(this).addClass("active")
            if (i == 0) {
                ajaxFnImg2($rmdImg2)
            } else if (i == 1) {
                ajaxFnImg2_2($rmdImg2)
            } else if (i == 2) {
                ajaxFnImg2_3($rmdImg2)
            } else if (i == 3) {
                ajaxFnImg2_4($rmdImg2)
            }
        })
    })
})