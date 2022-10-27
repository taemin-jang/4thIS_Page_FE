/**
 * 현재 시간 - 세팅 시간으로 카운트 다운 해주는 함수
 * @param {number} day
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 */
function countDown(month, day, hour, minute, second) {
  // 현재 시간 구하기
  const date = new Date();

  // 현재 시간의 정보를 얻기 쉽도록 형식 포맷 "00일 오전 00:00"
  const formatDate = new Intl.DateTimeFormat("kr", {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(date);

  // 현재시간 정규식으로 숫자만 추출 num 배열 [일, 시간, 분]
  let num = formatDate.match(/\d+/g).map((el) => +el);

  // 세팅한 시간의 총 합
  let total = day * 86400 + hour * 3600 + minute * 60 + second;

  // 현재 시간의 총 합
  let totalNow = num[1] * 86400 + num[2] * 3600 + num[3] * 60 + num[4];

  // 각 일, 시간, 분 계산
  day =
    month - num[0] > 0 ? (month - num[0]) * 30 + (day - num[1]) : day - num[1];
  hour = hour - num[2] < 0 ? 23 - num[2] + hour : hour - num[2];
  minute = minute - num[3] < 0 ? 59 - num[3] + minute : minute - num[3];
  second = second - num[4] < 0 ? 60 - num[4] + second : second - num[4];

  // 계산된 시간을 각 html 요소에 넣음
  let day_1 = (document.querySelector(
    ".count__timer--p-black:nth-child(1)"
  ).innerHTML = parseInt(day / 10));
  let day_2 = (document.querySelector(
    ".count__timer--p-black:nth-child(2)"
  ).innerHTML = day % 10);
  let hour_1 = (document.querySelector(
    ".count__timer--p-black:nth-child(4)"
  ).innerHTML = parseInt(hour / 10));
  let hour_2 = (document.querySelector(
    ".count__timer--p-black:nth-child(5)"
  ).innerHTML = hour % 10);
  let minute_1 = (document.querySelector(
    ".count__timer--p-black:nth-child(7)"
  ).innerHTML = parseInt(minute / 10));
  let minute_2 = (document.querySelector(
    ".count__timer--p-black:nth-child(8)"
  ).innerHTML = minute % 10);
  let second_1 = (document.querySelector(
    ".count__timer--p-black:nth-child(10)"
  ).innerHTML = parseInt(second / 10));
  let second_2 = (document.querySelector(
    ".count__timer--p-black:nth-child(11)"
  ).innerHTML = second % 10);

  // 마감 시간이 도달하면 true 아니면 false를 반환
  return day <= 0 && hour <= 0 && minute <= 0 && second <= 0 ? true : false;
}

// 1초마다 함수를 실행하는데 만약 마감시간이 돼서 true 값이 나온다면 멈춘다.
let interval = setInterval(() => {
  countDown(11, 2, 0, 0, 0);
  if (countDown(11, 2, 0, 0, 0)) {
    clearInterval(interval);
  }
}, 1000);

/**
 * 5초마다 이미지가 한장씩 자동으로 이동하는 함수
 * @param {number} cnt
 */
function slide(cnt) {
  // 이동시킬 html 요소 선택
  let slideEl = document.querySelector(".about__gallery");
  let bulletEl = document.querySelectorAll(".about__bullet-dot");

  // -633px씩 이동
  slideEl.style.transform = `translate(${-11.1 * cnt}%)`;

  /**
   * pagination 이동해주는 함수 (해당 요소 클래스에 active를 추가)
   * @param {number} cnt
   */
  function pagination(cnt) {
    // 모든 요소 active 클래스 초기화
    bulletEl[0].classList.remove("active");
    bulletEl[1].classList.remove("active");
    bulletEl[2].classList.remove("active");

    // 조건에 맞는 각 요소에 active 클래스 추가
    if (cnt < 3) {
      // 1 ~ 3
      bulletEl[0].classList.add("active");
    } else if (cnt < 6) {
      // 4 ~ 6
      bulletEl[1].classList.add("active");
    } else {
      // 7 ~ 9
      bulletEl[2].classList.add("active");
    }
  }
  pagination(cnt);

  // pagination 클릭 시 해당 위치로 이동
  bulletEl[0].addEventListener("click", () => {
    slideEl.style.transform = "translate(0px)";
    cnt = 1;
    pagination(cnt);
  });
  bulletEl[1].addEventListener("click", () => {
    slideEl.style.transform = "translate(-1899px)";
    cnt = 4;
    pagination(cnt);
  });
  bulletEl[2].addEventListener("click", () => {
    slideEl.style.transform = "translate(-3798px)";
    cnt = 6;
    pagination(cnt);
  });
  cnt++;

  // 이미지가 마지막 3장 보이면 다시 처음으로 돌아가기
  if (cnt > 6) {
    cnt = 0;
  }

  // 5초간 반복
  setTimeout(() => {
    slide(cnt);
  }, 5000);
}

//setTimeout을 사용한 이유는 중첩으로 사용할 경우 지연시간을 보장해주기 때문이다.
setTimeout(() => {
  slide(1);
}, 5000);

/**
 * what-active white에 마우스 hover되면 black
 * black에 마우스 out되면 white로 바꿔주는 함수
 * @param {number} i about__what-active--div가 5개라서 i로 (1~5)번호를 지정해줌
 */
function whatOver(i) {
  // about__what-active--div 요소 선택
  let whatEl = document.querySelector(
    `.about__what-active--div:nth-child(${+i})`
  );

  // white 요소 선택
  let whatEl_white = document.querySelector(
    `.about__what-active--div:nth-child(${+i}) .about__what-active--white-div`
  );

  // black 요소 선택
  let whatEl_black = document.querySelector(
    `.about__what-active--div:nth-child(${+i}) .about__what-active--black-div`
  );

  // whatEl 요소에 mouseover가 되면 white 요소에 active 제거 및 black 요소에 active 추가
  whatEl.addEventListener("mouseover", () => {
    whatEl_white.classList.remove("active");
    whatEl_black.classList.add("active");
  });

  // whatEl 요소에 mouseout가 되면 black 요소에 active 제거 및 white 요소에 active 추가
  whatEl.addEventListener("mouseout", () => {
    whatEl_black.classList.remove("active");
    whatEl_white.classList.add("active");
  });
}

// member 부분
let j = 0;

function changefront(i) {
  let memberEl = document.querySelectorAll(".member__button button");
  let memberElCol = document.querySelectorAll(".member__card-column--div");

  memberElCol[i].classList.add("active");
  memberElCol[j].classList.remove("active");
  j = i;

  console.log(memberEl, memberElCol);
}
/* 
document.querySelector(".클래스 #아이디 div")
let changeEl = document.querySelectorAll()
changeEl[2]

console.log(changeEl);

active 클래스를 주자
기본으로 기획 / 디자인을 보여주자

*/
