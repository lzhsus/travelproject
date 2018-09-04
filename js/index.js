$(function () {
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
    //获取存储景点的容器
    //ajax   异步请求
    //模块p1   调用了 ljz 方法
    function ajaxFnP1($scenic) {
        var $li = null;
        var $img = null;
        //异步请求 加载景点 信息
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
                $.each(data.scenicP1, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img1"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><h5>" + n["h5-1"] + "</h5>" +
                        "<h5>" + n["h5-2"] + "</h5></div></li>";
                });
                str += "</ul>";
                $scenic.append(str);

                //模块 P1 内容  的鼠标移入 移出效果
                $li = $(".p1 .content-center-scenic ul li");
                $li.hover(
                    function () {
                        $(this).find("div:last").stop().animate({"bottom": "0"}, 500, function f() {
                        })
                    }, function () {
                        $(this).find("div:last").stop().animate({"bottom": "-90px"}, 500, function f() {
                        })
                    }
                )
                ljz();

            }
        });
    }

    function ajaxFnP11($scenic) {
        var $li = null;
        var $img = null;
        //异步请求 加载景点 信息
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
                $.each(data.scenicP11, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img1"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><h5>" + n["h5-1"] + "</h5>" +
                        "<h5>" + n["h5-2"] + "</h5></div></li>";
                });
                str += "</ul>";
                $scenic.append(str);

                //模块 P1 内容  的鼠标移入 移出效果
                $li = $(".p1 .content-center-scenic ul li");
                $li.hover(
                    function () {
                        $(this).find("div:last").stop().animate({"bottom": "0"}, 500, function f() {
                        })
                    }, function () {
                        $(this).find("div:last").stop().animate({"bottom": "-90px"}, 500, function f() {
                        })
                    }
                )
                ljz()
            }
        });
    }

    function ajaxFnP12($scenic) {
        var $li = null;
        var $img = null;
        //异步请求 加载景点 信息
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
                $.each(data.scenicP12, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img1"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><h5>" + n["h5-1"] + "</h5>" +
                        "<h5>" + n["h5-2"] + "</h5></div></li>";
                });
                str += "</ul>";
                $scenic.append(str);

                //模块 P1 内容  的鼠标移入 移出效果
                $li = $(".p1 .content-center-scenic ul li");
                $li.hover(
                    function () {
                        $(this).find("div:last").stop().animate({"bottom": "0"}, 500, function f() {
                        })
                    }, function () {
                        $(this).find("div:last").stop().animate({"bottom": "-90px"}, 500, function f() {
                        })
                    }
                )
                ljz();
            }
        });
    }

    function ajaxFnP10($scenic) {
        var $li = null;
        var $img = null;
        //异步请求 加载景点 信息
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
                $.each(data.scenicP10, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img1"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><h5>" + n["h5-1"] + "</h5>" +
                        "<h5>" + n["h5-2"] + "</h5></div></li>";
                });
                str += "</ul>";
                $scenic.append(str);

                //模块 P1 内容  的鼠标移入 移出效果
                $li = $(".p1 .content-center-scenic ul li");
                $li.hover(
                    function () {
                        $(this).find("div:last").stop().animate({"bottom": "0"}, 500, function f() {
                        })
                    }, function () {
                        $(this).find("div:last").stop().animate({"bottom": "-90px"}, 500, function f() {
                        })
                    }
                )
                ljz();

            }
        });
    }

    function ajaxFnP111($scenic) {
        var $li = null;
        var $img = null;
        //异步请求 加载景点 信息
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
                $.each(data.scenicP111, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img1"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><h5>" + n["h5-1"] + "</h5>" +
                        "<h5>" + n["h5-2"] + "</h5></div></li>";
                });
                str += "</ul>";
                $scenic.append(str);

                //模块 P1 内容  的鼠标移入 移出效果
                $li = $(".p1 .content-center-scenic ul li");
                $li.hover(
                    function () {
                        $(this).find("div:last").stop().animate({"bottom": "0"}, 500, function f() {
                        })
                    }, function () {
                        $(this).find("div:last").stop().animate({"bottom": "-90px"}, 500, function f() {
                        })
                    }
                )
                ljz()
            }
        });
    }

    function ajaxFnP122($scenic) {
        var $li = null;
        var $img = null;
        //异步请求 加载景点 信息
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
                $.each(data.scenicP122, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img1"] + "></div>" +
                        "<div><img src='' _src=" + n["img2"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><h5>" + n["h5-1"] + "</h5>" +
                        "<h5>" + n["h5-2"] + "</h5></div></li>";
                });
                str += "</ul>";
                $scenic.append(str);

                //模块 P1 内容  的鼠标移入 移出效果
                $li = $(".p1 .content-center-scenic ul li");
                $li.hover(
                    function () {
                        $(this).find("div:last").stop().animate({"bottom": "0"}, 500, function f() {
                        })
                    }, function () {
                        $(this).find("div:last").stop().animate({"bottom": "-90px"}, 500, function f() {
                        })
                    }
                )
                ljz();
            }
        });
    }

    function ajaxFnP2($scenic) {
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
                $.each(data.scenicP2, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><h3>" + n["h3"] + "</h3><div>" +
                        n["div1"] + "<span>" + n["span1"] + "</span>" + n["div2"] +
                        "<span>" + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".p2 .content-center-scenic ul li");
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

    function ajaxFnP3($scenic) {
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
                $.each(data.scenicP3, function (i, n) {
                    //字符串 拼接
                    str += "<li><h2>" + n["h2"] + "<img src='' _src=" + n["img"] + ">" + n["h2-2"] + "</h2>" +
                        "<h3>" + n["h3"] + "</h3>" +
                        "<h4>" + n["h4"] + "</h4><h5>" + n["h5"] + "</h5></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //移入 移出效果  边框
                $li = $(".p3 .content-center-scenic ul li");
                $li.hover(
                    function () {
                        $(this).css("border", "3px solid #ffcc66");
                    }, function () {
                        $(this).css("border", "1px solid #e9e9e9");
                    }
                )
                ljz();
            }
        });
    }

    function ajaxFnP4($scenic) {
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
                $.each(data.scenicP4, function (i, n) {
                    //字符串 拼接
                    str += "<li><div><img src='' _src=" + n["img"] + "></div>" +
                        "<div><span>" + n["h3"] + "</span>" + n["span"] + n["span"] + n["span"] + n["span"] + n["span"] + "<span id='span'></span><div>" +
                        "<span>" + n["span1"] + "</span>" +
                        "<span>" + n["span2"] + "</span>" + "</div></li>";
                });
                str += "</ul>";
                $scenic.append(str);
                //鼠标 移入 移出效果 阴影
                $li = $(".p4 .content-center-scenic ul li");
                $li.each(function () {
                    $(this).css({"margin-top": "7px", "margin-bottom": "0px"})
                });
                $("#span").each(function () {
                    $(this).css("margin-left", "10px")
                })
                $li.hover(
                    function () {
                        var $this = $(this)
                        var ycTimer = setTimeout(function () {
                            $this.css("box-shadow", "1px 5px 16px #999999, 0px 5px 16px #999999");
                            $this.stop().animate({"margin-top": "3px", "margin-bottom": "4px"}, 10, function () {
                                clearInterval(ycTimer)
                            })
                        }, 400)
                        //为 p4 h3 里面的span添加类
                        $this.find(".icon-icon-pentagon").each(function () {
                            //$(this) 代表五角星
                            $(this).hover(
                                function () {
                                    //获取五角星的宽高
                                    $(this)[0].onmouseenter = function () {
                                        this.onmousemove = function () {

                                        }
                                    }
                                    //获取五角星的下标 span
                                    $this.find(".icon-icon-pentagon").removeClass("span");
                                    var $index = $(this).index();
                                    for (var i = 0; i < $index; i++) {
                                        $(($this.find(".icon-icon-pentagon"))[i]).addClass("span")
                                    }
                                    //分数
                                    $(this).parent().find("#span").text($index + ".0")
                                }, function () {

                                }
                            )
                        })
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


    var $scenicP1 = $(".p1 .content-center-scenic");
    var $scenicP2 = $(".p2 .content-center-scenic");
    var $scenicP3 = $(".p3 .content-center-scenic");
    var $scenicP4 = $(".p4 .content-center-scenic");
    ajaxFnP1($scenicP1);
    ajaxFnP2($scenicP2);
    ajaxFnP3($scenicP3);
    ajaxFnP4($scenicP4);

    //全部axjx加载
    function allAxjx(pNum, numUl, index1, index2) {
        switch (pNum) {
            case 0: //点击的 是p1 内容
                $scenicP1.find("ul").remove();
                switch (index1) {
                    case 0: //点击一个 ul 第1个li
                        switch (index2) {
                            case 0://点击二个 ul 第1个li
                                ajaxFnP1($scenicP1);
                                break;
                            case 1://点击二个 ul 第2个li
                                ajaxFnP10($scenicP1)
                                break;
                            case 2://点击二个 ul 第3个li
                                break;
                            default:
                                break;
                        }
                        break;
                    case 1://点击一个 ul 第2个li
                        switch (index2) {
                            case 0://点击二个 ul 第1个li
                                console.log(3)
                                ajaxFnP11($scenicP1);
                                break;
                            case 1://点击二个 ul 第2个li
                                ajaxFnP111($scenicP1)
                                break;
                            case 2://点击二个 ul 第3个li
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2://点击一个 ul 第3个li
                        switch (index2) {
                            case 0://点击二个 ul 第1个li
                                ajaxFnP12($scenicP1);
                                break;
                            case 1://点击二个 ul 第2个li
                                ajaxFnP122($scenicP1)
                                break;
                            case 2://点击二个 ul 第3个li

                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
                break;
            case 1://点击的 是p2 内容
                break;
            case 2://点击的 是p3 内容
                break;
            case 3://点击的 是p4 内容
                break;
        }
    }

    //所有 点击景点地区 切换 toggleclass
    $(".click-inland").click(function () {
        $(this).parents("section").find(".click-inland").each(function () {
            $(this).removeClass("active")
        });
        $(this).toggleClass("active");
        //  内容
        var $pNum = $(this).parents("section").index();
        //每一次点击获取section最高  父元素，再返回找到 ul  确认是两个
        var $numUl = $(this).parents(".content-top").find("ul").length
        var index = []
        $(this).parents(".content-top").find("ul").each(function (i, e) {
            $(this).find("a").each(function () {
                if ($(this).hasClass("active")) {
                    index[i] = $(this).parent().index()
                }
            })
        })
        allAxjx($pNum, $numUl, index[0], index[1])
    });
    //    周边景色
    $(".click-nearby").click(function () {
        $(this).parents("section").find(".click-nearby").each(function () {
            $(this).removeClass("active")
        });
        $(this).toggleClass("active")
        //  内容
        var $pNum = $(this).parents("section").index();
        //每一次点击获取section最高  父元素，再返回找到 ul  确认是两个
        var $numUl = $(this).parents(".content-top").find("ul").length
        var index = []
        $(this).parents(".content-top").find("ul").each(function (i, e) {
            $(this).find("a").each(function () {
                if ($(this).hasClass("active")) {
                    index[i] = $(this).parent().index()
                }
            })
        })
        allAxjx($pNum, $numUl, index[0], index[1])
    });
})