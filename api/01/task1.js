const text = document.querySelector(".orientation");
screen.orientation.addEventListener("change", () => {
  if (
    screen.orientation.type === "portrait-primary" ||
    screen.orientation.type === "portrait-secondary"
  ) {
    text.textContent = "портретная ориентация экрана";
  } else {
    text.textContent = "Ландшафтная ориентация экрана";
  }
});
