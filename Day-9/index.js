const userInput = document.getElementById("date");
const calculate = document.getElementById("calculate");
const calculator = document.querySelector(".calculator");
const userMaxInput = new Date().toISOString().split("T")[0];
const userMaxInputArray = userMaxInput.split("-");
console.log(userMaxInputArray);

function calculateAge() {
  const userPick = userInput.value.split("-");
  console.log(userPick);
  const y1 = Number(userPick[0]);
  const m1 = Number(userPick[1]);
  const d1 = Number(userPick[2]);

  const y2 = Number(userMaxInputArray[0]);
  const m2 = Number(userMaxInputArray[1]);
  const d2 = Number(userMaxInputArray[2]);
  let y3, m3, d3;
  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  document.getElementById("result").style.display = "contents";
  document.getElementById(
    "result"
  ).innerHTML = `Your Age is ${y3} Years, ${m3} Months and ${d3} Days`;
}

console.log(getDaysInMonth(2002, 9));

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
