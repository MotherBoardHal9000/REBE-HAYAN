for (let i = 0; i < 3; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      버튼.removeClass("orange");
      버튼.eq(i).addclass("orange");
      버튼.removeClass("show");
      버튼.eq(i).addClass("show");
    });
}

var 버튼 = $(".tab-button");

$(".tab-button")
  .eq(0)
  .on("click", function () {
    버튼.removeClass("orange");
    버튼.eq(0).addclass("orange");
    버튼.removeClass("show");
    버튼.eq(0).addClass("show");
  });
