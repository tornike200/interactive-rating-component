const selectedNum = window.localStorage.getItem("selectedNumber");
const resultElem = document.querySelector("span");

resultElem.textContent = selectedNum;
