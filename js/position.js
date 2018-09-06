$(function () {
    $(".leaderCon-font").addClass("delete");
    $(".leaderCon-ho").click(function () {
        $(".leaderCon-font").css("display", "none");
        $(this).find(".leaderCon-font").css("display", "block");
    })
})

//滚动监听
document.body.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop)
    // 看console出来滚动条的位置进行修改。
    if (scrollTop >= 500 && scrollTop < 1000) {
        $(".leaderCon-font").css("display", "none");
        $(document.getElementsByClassName("leaderCon-font")[0]).css("display", "block");
    } else if (scrollTop >= 1000 && scrollTop < 1500) {
        $(".leaderCon-font").css("display", "none");
        $(document.getElementsByClassName("leaderCon-font")[1]).css("display", "block");
    } else if (scrollTop >= 1500 && scrollTop < 2000) {
        $(".leaderCon-font").css("display", "none");
        $(document.getElementsByClassName("leaderCon-font")[2]).css("display", "block");
    } else if (scrollTop >= 2500 && scrollTop < 3000) {
        $(".leaderCon-font").css("display", "none");
        $(document.getElementsByClassName("leaderCon-font")[3]).css("display", "block");
    }
}


