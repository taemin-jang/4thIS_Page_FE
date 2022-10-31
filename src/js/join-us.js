// const open = () => {
//   document.querySelector(".modal").classList.remove("hidden");
// };

// const close = (i) => {
//   console.log(document.querySelectorAll(".modal")[i]);
//   document.querySelectorAll(".modal")[i].classList.add("hidden");
// };

// document.querySelector(".openBtn").addEventListener("click", open);
// document.querySelector(".closeBtn").addEventListener("click", close(0));
// document.querySelector(".bg").addEventListener("click", close);

// document.querySelector(".openBtn-2").addEventListener("click", open);
// document.querySelector(".closeBtn-2").addEventListener("click", close);
// document.querySelector(".bg").addEventListener("click", close);

// document.querySelector(".closeBtn-notice").addEventListener("click", close(1));
// document.querySelector(".bg").addEventListener("click", close);

function openModal(i) {
  document.querySelectorAll(".modal")[i].classList.remove("hidden");
}

function closeModal(i) {
  const modalEl = document.querySelectorAll(".modal");
  const closeEl = document.querySelectorAll(".closeBtn");

  modalEl[i].classList.add("hidden");
}
