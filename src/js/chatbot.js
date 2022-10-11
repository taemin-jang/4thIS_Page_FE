function chatbotUp(e) {
  let chatbotEl = document.querySelector(".chatbot--button");
  let clickEl = document.querySelectorAll(".chatbot__click");
  // let isUp = false;
  console.log(e);
  chatbotEl.addEventListener("click", () => {
    if (e !== 0) {
      clickEl[0].classList.remove("active");
      clickEl[1].classList.add("active");
    } else {
      clickEl[1].classList.remove("active");
      clickEl[0].classList.add("active");
    }
  });
}
