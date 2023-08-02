var btn = document.querySelectorAll("div.modal-custom-button");
var modals = document.querySelectorAll(".modal-custom");
var spans = document.getElementsByClassName("close-modal");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };

  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  //
  if (event.target.classList.contains("modal-custom")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};

let selectedBtnIndex = 0;
const btns = document.querySelectorAll(".btn");
const answers = document.querySelectorAll(".explain-answer");

function setInitialState() {
  answers[selectedBtnIndex].classList.add("show");
  btns[selectedBtnIndex].classList.add("selected");
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    //모든 explain-answer초기화
    answers.forEach((answer) => {
      answer.classList.remove("show");
    });

    btns.forEach((btn) => {
      btn.classList.remove("selected");
    });

    // 선택된 버튼과 연결된 explain-answer만 보이도록 설정
    answers[index].classList.add("show");

    // 선택된 버튼의 배경색을 변경
    btns[index].classList.add("selected");

    selectedBtnIndex = index;
  });
});

selectedBtnIndex;

const sw = new Swiper(".swiper1", {
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000, //like transition

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
