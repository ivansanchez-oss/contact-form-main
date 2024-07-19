const popup = document.querySelector(".form__ok");
const button = document.querySelector(".form__button");

button.addEventListener("click", (e) => {
  popup.showModal();
  setTimeout(() => {
    popup.close();
  }, 1000);
});
