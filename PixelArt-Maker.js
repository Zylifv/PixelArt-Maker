const pixelBoard = document.getElementById("pixel-board");
const input_val = document.getElementById("size-amount");
const create_btn = document.getElementById("select");
const rest_btn = document.getElementById("new-board");
const color = document.getElementById("current_color");


function createBoard() {  
  
  let n = Number(input_val.value);
  if (n > 50) {
      alert("Please enter a value less than 50.")
  } else {
      create_btn.disabled = true;
    
      for (let i = 0; i < n * n; i++) {
        pixelBoard.style.setProperty('--size', n)
        let a = document.createElement("div");
        a.classList.add("box");
        a.setAttribute("id", JSON.stringify(i));
        pixelBoard.appendChild(a);
      
        a.addEventListener("click", () => {
          a.style.backgroundColor = color.value;
        });
      }
    }
  }

function restart() {
  create_btn.disabled = false;
  pixelBoard.innerHTML = "";
}
