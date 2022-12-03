let input = 0;
document.addEventListener("input", () => {
  input = document.getElementById("input").value;
});
let x;
let n;
let btn = document.querySelectorAll(".button-77");
btn.forEach((val) => {
  val.addEventListener("click", () => {
    if (val.innerText == "Start") {
      n = parseInt(input);
      x = setInterval(start, 1000);
      function start() {
        if (n <= 0) {
          clearInterval(x);
        }
        document.getElementById("displayCountdown").innerHTML = n;
        n = n - 1;
      }
    } else if (val.innerText == "Stop") {
      document.getElementById("displayCountdown").innerHTML = "0";
      clearInterval(x);
    }
  });
});
