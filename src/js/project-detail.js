// count = [0,0,0,0,0,0] 선언
let count = [1, 0, 0, 0, 0, 0];

/**
 * 개발 단계 각 버튼 클릭 시 해당 단계임을 표시해주는 기능
 * @param {number} n
 */
function developLevel(n) {
  let dividerEl = document.querySelectorAll(".develop-level__content-divider");
  let labelEl = document.querySelectorAll(".develop-level__content--div label");
  let disabledEl = document.querySelectorAll("input[type = 'radio']");

  // 한번 클릭한 버튼 라벨 색 중복 적용하지 않게 하는 조건
  if (count[n + 1] === 0) {
    // 만약 이전 버튼이 안눌려져 있으면 다음 버튼을 클릭 할 수 없는 조건
    if (count[n] === 1) {
      count[n + 1]++;
      dividerEl[n].style.backgroundColor = "#2196f3";
      labelEl[n].style.color = "white";
      labelEl[n + 1].style.color = "#2196f3";
      disabledEl[n + 2].disabled = false;
    }
  }
}
