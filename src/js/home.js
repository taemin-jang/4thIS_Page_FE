/**
 * 현재 시간 - 세팅 시간으로 카운트 다운 해주는 함수
 * @param {number} day
 * @param {number} hour
 * @param {number} minute
 */
function countDown(day, hour, minute) {
  // 현재 시간 구하기
  const date = new Date();

  // 현재 시간의 정보를 얻기 쉽도록 형식 포맷 "00일 오전 00:00"
  const formatDate = new Intl.DateTimeFormat("kr", {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);

  // 현재시간 정규식으로 숫자만 추출 num 배열 [일, 시간, 분]
  let num = formatDate.match(/\d+/g).map((el) => +el);

  // 세팅한 시간의 총 합
  let total = day * 1440 + hour * 60 + minute;

  // 현재 시간의 총 합
  let totalNow = num[0] * 1440 + num[1] * 60 + num[2];

  // 각 일, 시간, 분 계산
  day = parseInt((total - totalNow) / 1440);
  hour = parseInt((total - totalNow - day * 1440) / 60);
  minute = total - totalNow - day * 1440 - hour * 60;

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

  // 마감 시간이 도달하면 true 아니면 false를 반환
  return day <= 0 && hour <= 0 && minute <= 0 ? true : false;
}

// 1초마다 함수를 실행하는데 만약 마감시간이 돼서 true 값이 나온다면 멈춘다.
let interval = setInterval(() => {
  countDown(29, 15, 30);
  if (countDown(29, 15, 30)) {
    clearInterval(interval);
  }
}, 1000);
