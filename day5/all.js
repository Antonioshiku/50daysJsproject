const Con = document.querySelector(".con");
const PersonNumber = document.getElementById("number");

let number = 0;

let set = setInterval(Numberper, 30);

let firstset = setInterval(First, 30);
let secset = setInterval(Sec, 30);
let thirdset = setInterval(third, 30);

function First() {
  if (number > 40) {
    PersonNumber.classList.add("first");
    Con.classList.add("firstB");
    Con.classList.remove("secB", "thirdB");
    clearInterval(firstset);
  } else {
    PersonNumber.innerHTML = number + "%";
  }
}

function Sec() {
  if (number > 60) {
    PersonNumber.classList.add("sec");
    Con.classList.add("secB");
    Con.classList.remove("firstB", "thirdB");
    clearInterval(secset);
  } else {
    PersonNumber.innerHTML = number + "%";
  }
}

function third() {
  if (number > 80) {
    PersonNumber.classList.add("third");
    Con.classList.add("thirdB");
    Con.classList.remove("firstB", "secB");
    clearInterval(thirdset);
  } else {
    PersonNumber.innerHTML = number + "%";
  }
}

function Numberper() {
  number += 1;

  PersonNumber.innerHTML = number + "%";

  if (number == 100) {
    let close = clearInterval(set);
    PersonNumber.classList.add("hide");
    Con.classList.add("show");
    Con.classList.remove("secB", "firstB", "thirdB");
  } else {
    PersonNumber.innerHTML = number + "%";
  }
}
