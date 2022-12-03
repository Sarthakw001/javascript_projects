let input = document.getElementById("input");
let text = "";
input.addEventListener("input", () => {
  text = input.value;
});

let btn = document.getElementById("submit");
let img = document.createElement("img");
btn.addEventListener("click", () => {
  const fetchData = () => {
    const response = fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
    .then((response)=>{
        console.log(response.url);
        img.setAttribute("src",`${response.url}`);
        console.log(img);
    })
  };
  fetchData();
  document.getElementById("main").appendChild(img);
});
