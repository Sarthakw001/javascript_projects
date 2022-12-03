let joke = "";
document.getElementById("jokeBtn").addEventListener("click", () => {
  const fetchData = async () => {
    const url =
      "  https://hindi-jokes-api.onrender.com/jokes?api_key=502ef0e83bd624790ec230efe54f";
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("joke").innerHTML = data.jokeContent;
  };
  fetchData();
});
