function calculateFactorial() {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("output");

  if (input === "" || input < 0) {
    output.innerText = "⚠️ Please enter a valid non-negative number.";
    return;
  }

  let num = parseInt(input);
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  output.innerText = `${num}! = ${result}`;
}

function setDarkMode() {
  document.body.style.backgroundColor = "#1e1e1e";
  document.body.style.color = "white";
}

function setLightMode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

function contactMe() {
  alert("You can reach Alina Thapa via email or GitHub!");
}