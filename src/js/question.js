$("div.question").on("click", function () {
  $(this).next(".con").slideToggle(100);
});

$("div.kakao").on("click", function () {
  location.href = "http://pf.kakao.com/_zbgxlxj";
});

// $(document).ready(function () {
//   $("#down").show();
//   $("#up").hide();

//   $("img.question__hover-icon").on("click", function () {
//     $("#down").hide();
//     $("#up").show();
//     $("div.question").next(".con").slideToggle(100);
//   });

//   $("#up").click(function () {
//     $("#down").show();
//     $("#up").hide();
//   });

//   $("div.kakao").on("click", function () {
//     location.href = "http://pf.kakao.com/_zbgxlxj";
//   });
// });
