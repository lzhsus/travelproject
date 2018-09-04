
$(function () {
    $(".leaderCon-font").addClass("delete");
    $(".leaderCon-ho").click(function () {
        $(".leaderCon-font").addClass("delete");
        $(this).find("a").last().removeClass("delete");
    })

})

//滚动监听
document.body.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 看console出来滚动条的位置进行修改。
    if (scrollTop >= 500 && scrollTop < 1000) {
        $(".leaderCon-font").addClass("delete");
        document.getElementsByClassName("leaderCon-font")[0].classList.remove("delete");
    } else if (scrollTop >= 1000 && scrollTop < 1500) {
        $(".leaderCon-font").addClass("delete");
        document.getElementsByClassName("leaderCon-font")[1].classList.remove("delete");
    } else if (scrollTop >= 1500 && scrollTop < 2000) {
        $(".leaderCon-font").addClass("delete");
        document.getElementsByClassName("leaderCon-font")[2].classList.remove("delete");
    } else if (scrollTop >= 2500 && scrollTop < 3000) {
        $(".leaderCon-font").addClass("delete");
        document.getElementsByClassName("leaderCon-font")[3].classList.remove("delete");
    }
}


