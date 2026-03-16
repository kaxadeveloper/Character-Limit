let inputBox = document.querySelector(".input-box"),
textarea = inputBox.querySelector("textarea"),
signalNum = inputBox.querySelector(".signal_num");

textarea.addEventListener("keyup", () => {
   let valLength = textarea.value.length;

   signalNum.innerText = valLength;
   (valLength > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active");
   (valLength > 100) ? inputBox.classList.add("error") : inputBox.classList.remove("error");
});