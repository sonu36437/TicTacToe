let allindex = Array.from(document.querySelectorAll(".boxes"));
let clicked = false;
let alreadyWon = false;
let terminate = false;

let spaces = Array(allindex.length).fill(null);

function putXandY() {
  if (alreadyWon == false) {
    for (let i = 0; i < allindex.length; i++) {
      allindex[i].addEventListener("click", function() {
        if (terminate != false) return;
        if (clicked == false && spaces[i] == null) {
          allindex[i].innerText = "❌";
          spaces[i] = "❌";
          clicked = true;

          playerWins();

          if (alreadyWon == true) {
            terminate = true;
            return;
          }
        } else if (spaces[i] == null) {
          allindex[i].innerText = "⭕";
          spaces[i] = "⭕";
          clicked = false;

          playerWins();
          if (alreadyWon == true) {
            terminate = true;
            return;
          }
        }
      });
    }
  }
}

putXandY();


winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerWins() {
  for (element of winningCondition) {
    let [a, b, c] = element;
    console.log(element);
    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {

      document.querySelector(".player").innerText = `${spaces[a]} Wins`;
      alreadyWon = true;
      allindex[a].style.background = '#317773';
      allindex[b].style.background = '#317773';
      allindex[c].style.background = '#317773';
    }

    
  }

}
let reset = document.querySelector(".resetbtn");
let heading = document.querySelector(".player");

reset = document.querySelector(".resetbtn");
reset.addEventListener("click", function() {
  for (i = 0; i < allindex.length; i++) {
    allindex[i].innerText = "";
    spaces[i] = null;
    allindex[i].style = 'none';
  }
  terminate = false;
  clicked = false;
  alreadyWon = false;
  document.querySelector(".player").innerText = "Tic Tac Toe";
});