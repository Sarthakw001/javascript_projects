let input;
document.addEventListener("input",()=>{
    input = document.getElementById("input").value;
    function wordCount(){
        let count = 0;
        let word = input.split(" ");
        let myWord = [];

        for(let i of word){
            if(i != ""){
                myWord.push(i);
            }
        }
        return myWord.length;
    }
    function charCount(){
        let char = input.split("");
        return char.length;
    }
    let wordcount = wordCount();
    document.getElementById("wordCount").innerText = wordcount;

    let charcount = charCount();
    document.getElementById("characterCount").innerText = charcount;
});