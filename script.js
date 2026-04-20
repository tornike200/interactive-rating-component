const numbers = document.querySelectorAll(".circle");
const submitBtn = document.querySelector("button");

let selectedNum = null;

for (let num of numbers) {
  num.addEventListener("click", () => {
    selectedNum = num.textContent;
  });
}

submitBtn.addEventListener("click", () => {
  if (selectedNum == null) {
    alert("plaese select a number");
  } else {
    window.localStorage.setItem("selectedNumber", selectedNum);
  }
});
