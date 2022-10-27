/**
 * mousemove이벤트를 이용해 움직인다.
   마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
   pageX, pageY와는 다르다.
 */
const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;

  // 만약 스크롤로 인해 해당 페이지를 넘어가면 pageY에서 뺀 값 만큼 더해준다.
  const mouseY =
    e.clientY < e.pageY ? e.clientY + (e.pageY - e.clientY) : e.clientY;

  circle.style.left = mouseX + "px";
  if (
    e.pageY >
    document.querySelector("body").getBoundingClientRect().height - 270
  ) {
    circle.style.top =
      document.querySelector("body").getBoundingClientRect().height -
      270 +
      "px";
  } else {
    circle.style.top = mouseY + "px";
  }

  // console.log(e);
  // console.log(e.pageX, e.pageY);

  // console.log(mouseY);
});
