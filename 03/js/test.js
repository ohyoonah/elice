//querySelector
const test = document.querySelector("#test");
test.innerHTML = "test";

const tests = document.querySelectorAll(".test");

for(let i = 0; i < tests.length; i += 1) {
    tests[i].innerHTML = "test array" + i;
}

document.write("test2" + "<br>");

//return
function func1(num1, num2) {
  return num1 + num2;
}

document.write(func1(1, 2) + "<br>");

//onClick
const button = document.querySelector("#button");

function print() {
  console.log("clicked");
}

button.addEventListener("click", print);