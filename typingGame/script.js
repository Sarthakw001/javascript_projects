let input;

function wordCount() {
  let word = input.split(" ");
  let myWord = [];

  for (let i of word) {
    if (i != "") {
      myWord.push(i);
    }
  }
  return myWord.length;
}

function countDown(){
  setTimeout(()=>{
    let y = 15;
    let x = setInterval(()=>{
      document.getElementById("startTyping").innerText = `Timer : ${y}s`;
      y=y-1;
      if(y<-1){
        clearInterval(x);
        document.getElementById("startTyping").innerText = "Time Up!";
      }
    },1000);
  },4000);
  setTimeout(()=>{
  calc();
  },20000)
}



let count = 0;

document.addEventListener("input", () => {
  input = document.getElementById("input").value;
  count = wordCount();
});
function calc(){
  document.getElementById("typingSpeed").innerHTML = ` ${count*4} wpm`;
}



let btn = document.getElementById("btnn");
btn.addEventListener("click", () => {
  document.getElementById("input").value = "";
  document.getElementById("typingSpeed").innerHTML = "";
  let y = 3;
  let x = setInterval(() => {
    if (y <=0 ) {
      clearInterval(x);
    }
    document.getElementById("startTyping").innerText = `Start typing in ${y}s`;
    y = y - 1;
  }, 1000);
  countDown();
});



