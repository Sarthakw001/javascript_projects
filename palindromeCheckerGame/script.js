let input = document.getElementById("input");
let text;
input.addEventListener("input", () => {
  text = input.value;
});


let btn = document.getElementById('button');
btn.addEventListener("click",()=>{
    let rev = text.split("");

    let m = rev.reverse();

    let ans = m.join("").toLowerCase();

    if(ans == text.toLowerCase()){
        document.getElementById("displayResult").innerHTML = "Voila ! It's a Palindrome";
    }else{
        document.getElementById("displayResult").innerHTML = "Sorry ! Not a palindrome";
    }

    setTimeout(()=>{
        document.getElementById("displayResult").innerHTML = "";
    },3000)
});