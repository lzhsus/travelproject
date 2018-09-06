$(function () {
    //执行一个laydate实例
    var date = new Date();
    var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    //获取 当前年 当前月下的最后一天
    var endDate = laydate.getEndDate((date.getMonth() + 1), date.getFullYear());
    if (endDate == date.getDate()) {
        if (((date.getMonth() + 1) + 1) == 12) {
            var time2 = (date.getFullYear() + 1) + "-" + (1) + "-" + (1);
        } else {
            var time2 = date.getFullYear() + "-" + ((date.getMonth() + 1) + 1) + "-" + (1);
        }
    } else {
        var time2 = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1);
    }
    laydate.render({
        elem: '#test1', //指定元素
        fromat: 'YYYY-MM-DD' //自定义格式
        , min: '' + time + ''    //可选最小时间
        , max: '2099-12-30'     //可选最大时间
    });
    laydate.render({
        elem: '#test2' //指定元素
        , fromat: 'YYYY-MM-DD' //自定义格式
        , min: '' + time2 + ''    //可选最小时间
        , max: '2099-12-30'     //可选最大时间
    });
    //退房时期不可以小于入住日期
    $("#test1").focus(function () {
        $("#test1").val("")
        $("#test2").val("")
    })
    $("#test2").blur(function () {
        setTimeout(function () {
            var value1 = $("#test1").val()
            var value2 = $("#test2").val()
            if (value1 == "") {
                if (value2 != "") {
                    alert("请先选择入住时期")
                    $("#test2").val("")
                }
            } else {
                console.log(parseInt(value1.substr(5, 2)))
                if (parseInt(value1.substr(0, 4)) > parseInt(value2.substr(0, 4))) {
                    alert("退房时期有误，请选择入住日期之后的日期")
                    $("#test2").val("")
                } else if (parseInt(value1.substr(5, 2)) > parseInt(value2.substr(5, 2))) {
                    alert("退房时期有误，请选择入住日期之后的日期")
                    $("#test2").val("")
                } else if (parseInt(value1.substr(8, 2)) > parseInt(value2.substr(8, 2))) {
                    alert("退房时期有误，请选择入住日期之后的日期")
                    $("#test2").val("")
                }
            }
        }, 500)
    })
    //
    $(".more-click").hover(
        function () {
            $(this).css("color", "#1448ad")
            $(this).parents("section").find(".morecenter").show()
            $(this).parents("section").find(".jiantou").css("transform", "rotate(0)")
        }, function () {
            $(this).parents("section").find(".morecenter").hide()
            $(this).parents("section").find(".jiantou").css("transform", "rotate(270deg)")
        }
    )
    //左定位条定位
    $(document).scroll(function () {
        console.log(typeof scrollY, 520)
        if (scrollY == 520) {
            console.log("相等")
            $(".leaderCon-font").show();
        }
    })
    //图片的放大 缩小
    $(".big-img").hover(
        function () {
            $(this).find("div").hide();
            $(this).find("h4").show()
            $(this).parent().find(".big-img").css("width", "150px")
            $(this).css("width", "390px")
        }, function () {
            $(this).find("div").show();
            $(this).find("h4").hide()
            $(this).parent().find(".big-img").css("width", "190px")
        }
    )

    // $(".hotel-tit-left span").click(function () {
    //     $(this).parent().find("span").removeClass("active")
    //     $(this).addClass("active")
    //     $(this).parents(".hotel-tit-left").find("form").remove()
    //    if($(this).index()==0){
    //        $(this).parents(".hotel-tit-left").append(" <form action=\"\" method=\"post\" class=\"form-tit\">\n" +
    //            "                <div class=\"form-tit-block\">\n" +
    //            "                    <label>目&nbsp;的&nbsp;地</label>\n" +
    //            "                    <input type=\"text\" placeholder=\"中文/拼音/首字母\">\n" +
    //            "                    <label class=\"label-size\"><a href=\"javascript:;\">搜索历史 ﹀</a> </label>\n" +
    //            "                </div>\n" +
    //            "                <div class=\"form-tit-block input-long\">\n" +
    //            "                    <label>入住日期</label>\n" +
    //            "                    <input type=\"text\" id=\"test1\" value=\"\">\n" +
    //            "                </div>\n" +
    //            "                <div class=\"form-tit-block input-long\">\n" +
    //            "                    <label>退房日期</label>\n" +
    //            "                    <input type=\"text\" id=\"test2\" value=\"\">\n" +
    //            "                </div>\n" +
    //            "                <div class=\"form-tit-block input-long\">\n" +
    //            "                    <label>关&nbsp;键&nbsp;词</label>\n" +
    //            "                    <input type=\"text\">\n" +
    //            "                </div>\n" +
    //            "                <div class=\"form-tit-block but-og\">\n" +
    //            "                    <label>&nbsp;</label>\n" +
    //            "                    <input type=\"button\" value=\"搜索\">\n" +
    //            "                </div>\n" +
    //            "            </form>")
    //    }else {
    //        $(this).parents(".hotel-tit-left").append(" <form action=\"\" method=\"post\" class=\"form-tit\">\n" +
    //            "                <div class=\"form-tit-block\">\n" +
    //            "                    <label>bourn</label>\n" +
    //            "                    <input type=\"text\" placeholder=\"Chinese phonetic alphabet\">\n" +
    //            "                    <label class=\"label-size\"><a href=\"javascript:;\">history ﹀</a> </label>\n" +
    //            "                </div>\n" +
    //            "                <div class=\"form-tit-block input-long\">\n" +
    //            "                    <label>in date</label>\n" +
    //            "                    <input type=\"text\" id=\"test1\" value=\"\">\n" +
    //            "                </div>\n" +
    //            "                <div class=\"form-tit-block input-long\">\n" +
    //            "                    <label>out date</label>\n" +
    //            "                    <input type=\"text\" id=\"test2\" value=\"\">\n" +
    //            "                </div>\n" +
    //            "                <div class=\"form-tit-block input-long\">\n" +
    //            "                    <label>antistop</label>\n" +
    //            "                    <input type=\"text\">\n" +
    //            "                </div>\n" +
    //            "                <div class=\"form-tit-block but-og\">\n" +
    //            "                    <label>&nbsp;</label>\n" +
    //            "                    <input type=\"button\" value=\"hunt \">\n" +
    //            "                </div>\n" +
    //            "            </form>")
    //    }
    //
    //
    // })
    //轮播图


    //懒加载
    //获取收益的img
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

    //内容图片加载
    function hotelAjaxFnP1($scenic) {
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
                $.each(data.hotelScenicP1, function (i, n) {
                    //字符串 拼接
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] +
                        "<span>" + n["span1"] + "</span>" + "" + "<span>/ " + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".hotelP1 .content-center-scenic ul li");
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

    function hotelAjaxFnP1_2($scenic) {
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
                $.each(data.hotelScenicP1_2, function (i, n) {
                    //字符串 拼接
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] +
                        "<span>" + n["span1"] + "</span>" + "" + "<span>/ " + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".hotelP1 .content-center-scenic ul li");
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

    function hotelAjaxFnP1_3($scenic) {
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
                $.each(data.hotelScenicP1_3, function (i, n) {
                    //字符串 拼接
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] +
                        "<span>" + n["span1"] + "</span>" + "" + "<span>/ " + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".hotelP1 .content-center-scenic ul li");
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

    function hotelAjaxFnP1_4($scenic) {
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
                $.each(data.hotelScenicP1_4, function (i, n) {
                    //字符串 拼接
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] +
                        "<span>" + n["span1"] + "</span>" + "" + "<span>/ " + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".hotelP1 .content-center-scenic ul li");
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

    function hotelAjaxFnP1_5($scenic) {
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
                $.each(data.hotelScenicP1_5, function (i, n) {
                    //字符串 拼接
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] +
                        "<span>" + n["span1"] + "</span>" + "" + "<span>/ " + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".hotelP1 .content-center-scenic ul li");
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

    function hotelAjaxFnP2($scenic) {
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
                $.each(data.hotelScenicP2, function (i, n) {
                    //字符串 拼接
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] +
                        "<span>" + n["span1"] + "</span>" + "" + "<span>/ " + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".hotelP2 .content-center-scenic ul li");
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

    function hotelAjaxFnP3($scenic) {
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
                $.each(data.hotelScenicP3, function (i, n) {
                    //字符串 拼接
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span"] + "</span>" + n["div2"] +
                        "<span>" + n["span1"] + "</span>" + "" + "<span>/ " + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".hotelP3 .content-center-scenic ul li");
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

    var $hotelP1 = $(".hotelP1 .content-center-scenic");
    var $hotelP2 = $(".hotelP2 .content-center-scenic");
    var $hotelP3 = $(".hotelP3 .content-center-scenic");
    hotelAjaxFnP1($hotelP1);
    hotelAjaxFnP2($hotelP2);
    hotelAjaxFnP3($hotelP3);
    //导航项切换
    $(".p1-title ul li a").click(function () {
        $(this).parents("section").find(".p1-title ul li a").removeClass("active");
        $(this).addClass("active")
        if ($(this).parents("section").index() == 3) {
            $(this).parents("section").find(".content-center-scenic").html("")
            if ($(this).parent().index() == 0) {
                hotelAjaxFnP1($hotelP1);
            } else if ($(this).parent().index() == 1) {
                hotelAjaxFnP1_2($hotelP1);
            } else if ($(this).parent().index() == 2) {
                hotelAjaxFnP1_3($hotelP1);
            } else if ($(this).parent().index() == 3) {
                hotelAjaxFnP1_4($hotelP1);
            } else if ($(this).parent().index() == 4) {
                hotelAjaxFnP1_5($hotelP1);
            }
        }
    })
});
