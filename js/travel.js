$(function () {
    //更多城市
    $(".dianji").hover(function () {
            $(this).parents("section").find(".img-click").css("transform"," rotate(0deg)")
            $(this).parents("section").find(".morecenter").show()
        $(this).css("color","#1ab2db")
            $(this).parent().find(".dianji>img").css("transform"," rotate(0deg)")
        },function(){
        $(this).css("color","#666")
            $(this).parents("section").find(".img-click").css("transform"," rotate(270deg)")
            $(this).parents("section").find(".morecenter").hide()
        $(this).parent().find(".dianji>img").css("transform"," rotate(270deg)")

    });
    //已售新
    $("#souxin").find("li:last>div:eq(3)").css("color","#cccccc")
    $(".mor-click").click(function () {
            var $this = $(this)
            if (num1 % 2 == 0) {
                $(this).find(".img-click").css("transform"," rotate(0deg)")
                $(this).find(".morecenter").show()
            } else {
                $(this).find(".img-click").css("transform"," rotate(270deg)")
                $(this).find(".morecenter").hide()
            }
            num1++
        });
    //input 搜索框
    $(".box-banner-right input").focus(function () {
        console.log($(this))
    })
    //轮播图  左边的内容
    $(".ul-fa>li").hover(
        function () {
            $(this).css({"border-top": "2px solid #1ab2db","border-bottom": "2px solid #1ab2db","border-left": "6px solid #1ab2db"});
            $(this).find(".div-fa").css({"width":"397px","border-left": "5px solid #ffc600","border-right": "2px solid #fff"})
            $(this).find(".div-show").show()
        }, function () {
            $(this).css({"border": "0px solid #1ab2db","border-right": "0px solid #fff"});
            $(this).find(".div-fa").css({"width":"401px","border": "0px solid #1ab2db","border-bottom": "1px solid #cfcfcf"})
            $(this).find(".div-show").hide()
        }
    )

    //    懒加载
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

    //    ajax
    function travelAjaxFnP1($scenic) {
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
                $.each(data.travelScenicP1, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".travelP1 .content-center-scenic ul li");
                $li.each(function () {
                    $(this).css({"margin-top": "7px", "margin-bottom": "0px"})
                });
                $li.hover(
                    function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {
                            $this.css("box-shadow", "1px 5px 16px #999999, 0px 5px 16px #999999");
                            $this.stop().animate({"margin-top": "4px", "margin-bottom": "3px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)

                    }, function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {
                            $this.css("box-shadow", "0 0 0 #999999, 0 0 0 #999999");
                            $this.stop().animate({"margin-top": "7px", "margin-bottom": "0px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)

                    }
                );
                //手心
                $("#souxin li:last>div:last span").css("color","#747474")
                $("#souxin li:last").append("<div class='dingwei'><img src="+'img/img/shouqing.png'+"></div>")
                ljz();
            }
        });
    }

    function travelAjaxFnP2($scenic) {
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
                $.each(data.travelScenicP2, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".travelP2 .content-center-scenic ul li");
                $li.each(function () {
                    $(this).css({"margin-top": "7px", "margin-bottom": "0px"})
                });
                $li.hover(
                    function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {
                            $this.css("box-shadow", "1px 5px 16px #999999, 0px 5px 16px #999999");
                            $this.stop().animate({"margin-top": "4px", "margin-bottom": "3px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)

                    }, function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {
                            $this.css("box-shadow", "0 0 0 #999999, 0 0 0 #999999");
                            $this.stop().animate({"margin-top": "7px", "margin-bottom": "0px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)

                    }
                )
                ljz();
            }
        });
    }

    function travelAjaxFnP3($scenic) {
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
                $.each(data.travelScenicP3, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".travelP3 .content-center-scenic ul li");
                $li.each(function () {
                    $(this).css({"margin-top": "7px", "margin-bottom": "0px"})
                });
                $li.hover(
                    function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {
                            $this.css("box-shadow", "1px 5px 16px #999999, 0px 5px 16px #999999");
                            $this.stop().animate({"margin-top": "4px", "margin-bottom": "3px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)

                    }, function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {
                            $this.css("box-shadow", "0 0 0 #999999, 0 0 0 #999999");
                            $this.stop().animate({"margin-top": "7px", "margin-bottom": "0px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)

                    }
                )
                ljz();
            }
        });
    }

    function travelAjaxFnP4($scenic) {
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
                $.each(data.travelScenicP3, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".travelP4 .content-center-scenic ul li");
                $li.each(function () {
                    $(this).css({"margin-top": "7px", "margin-bottom": "0px"})
                });
                $li.hover(
                    function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {

                            $this.css("box-shadow", "1px 5px 16px #999999, 0px 5px 16px #999999");
                            $this.stop().animate({"margin-top": "4px", "margin-bottom": "3px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)

                    }, function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {
                            $this.css("box-shadow", "0 0 0 #999999, 0 0 0 #999999");
                            $this.stop().animate({"margin-top": "7px", "margin-bottom": "0px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)

                    }
                )
                ljz();
            }
        });
    }

    var $travelP1 = $(".travelP1 .content-center-scenic");
    var $travelP2 = $(".travelP2 .content-center-scenic");
    var $travelP3 = $(".travelP3 .content-center-scenic");
    var $travelP4 = $(".travelP4 .content-center-scenic");
    travelAjaxFnP1($travelP1)
    travelAjaxFnP2($travelP2)
    travelAjaxFnP3($travelP3)
    travelAjaxFnP4($travelP4)

})