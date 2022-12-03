let btn = document.getElementById("button");

const randomColor = () => {
  let one = "0123456789ABCDEF";
  let alpha = "#";
  for (let i = 0; i < 6; i++) {
    alpha = alpha + one[Math.floor(Math.random() * 16)];
  }
  return alpha;
};

function changeRandomColor() {
    document.getElementById("canvas").style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);
