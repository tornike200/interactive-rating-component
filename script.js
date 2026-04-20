const numbers = document.querySelectorAll(".circle");
const submitBtn = document.querySelector("button");

let selectedNum = null;

for (let num of numbers) {
  num.addEventListener("click", () => {
    removeStyles();
    num.classList.add("selected");
    selectedNum = num.textContent;
  });
}

submitBtn.addEventListener("click", () => {
  if (!selectedNum) {
    alert("plaese select a number !!!");
  } else {
    window.localStorage.setItem("selectedNumber", selectedNum);
    window.open("./result.html", "_self");
  }
});

function removeStyles() {
  for (let item of numbers) {
    item.classList.remove("selected");
  }
}
