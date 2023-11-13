const feedbacks = document.querySelector(".feedbacks");
const feedkey = "feedback";
window.addEventListener("load", always(), start());

function always() {
  const title = document.createElement("h1");
  title.textContent = "Отзывы";
  feedbacks.appendChild(title);
}

function start() {
  if (localStorage.getItem(feedkey)) {
    const data = JSON.parse(localStorage.getItem(feedkey));
    createFeedbackCards(data);
  } else {
    const subheader = document.createElement("h3");
    subheader.textContent = "Здесь пока нет отзывов";
    feedbacks.appendChild(subheader);
  }

  const buttonCreate = document.createElement("button");
  buttonCreate.className = "button";
  buttonCreate.textContent = "Написать отзыв";
  feedbacks.appendChild(buttonCreate);
  buttonCreate.addEventListener("click", () => {
    window.location.href = "feedback.html";
  });
}

function createFeedbackCards(data) {
  for (const iterator of data) {
    const divEl = document.createElement("div");
    divEl.className = "card";
    feedbacks.appendChild(divEl);
    const header = document.createElement("h2");
    header.textContent = iterator.product;
    divEl.appendChild(header);
    createFeedbackList(divEl, iterator.feedback, iterator.product, "none");
  }
}

function createFeedbackList(divEl, feedbackArr, product) {
  const buttonFeed = document.createElement("button");
  divEl.appendChild(buttonFeed);
  buttonFeed.textContent = "показать отзывы";
  buttonFeed.className = "button";
  const olEl = document.createElement("ol");
  olEl.style.display = "none";
  olEl.className = "list";
  divEl.appendChild(olEl);
  for (i = 0; i < feedbackArr.length; i++) {
    const liEl = document.createElement("li");
    liEl.value = i + 1;
    const buttonLi = document.createElement("button");
    buttonLi.className = "deleteButton";
    buttonLi.innerHTML = "&#10006";
    buttonLi.addEventListener("click", (event) => {
      const currentEl = event.target;
      const number = currentEl.parentNode.value - 1;
      const arrayFeed = JSON.parse(localStorage.getItem(feedkey));
      const objFeedback = arrayFeed.find((item) => item.product === product);
      objFeedback.feedback.splice(number, 1);
      if (objFeedback.feedback.length == 0) {
        const numObj = arrayFeed.findIndex((item) => item.product === product);
        arrayFeed.splice(numObj, 1);
        localStorage.setItem(feedkey, JSON.stringify(arrayFeed));
        divEl.style.display = "none";
      } else {
        localStorage.setItem(feedkey, JSON.stringify(arrayFeed));
        liEl.remove();
      }
      checkStorage();
    });
    liEl.textContent = feedbackArr[i];
    liEl.appendChild(buttonLi);
    olEl.appendChild(liEl);
  }
  buttonFeed.addEventListener("click", showFeedbacks.bind(null, olEl));
}

function showFeedbacks(olEl, event) {
  const buttonFeed = event.target;
  if (olEl.style.display === "none") {
    olEl.style.display = "block";
    buttonFeed.textContent = "скрыть отзывы";
  } else {
    olEl.style.display = "none";
    buttonFeed.textContent = "показать отзывы";
  }
}

function checkStorage() {
  const data = JSON.parse(localStorage.getItem(feedkey));
  if (data.length === 0) {
    localStorage.removeItem(feedkey);
    const buttonCreate = document.getElementsByClassName("createFeedback");
    buttonCreate[0].remove();
    start();
  }
}
