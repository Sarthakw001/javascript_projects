function camelCase(text) {
  let ans = text.toLowerCase().split(" ");
  let my_text = ans[0];

  for (let i = 1; i < ans.length; i++) {
    my_text = my_text + (ans[i][0].toUpperCase() + ans[i].slice(1));
  }
  return my_text;
}
function pascalCase(text) {
  if(text == ""){
    return text;
  }
  let ans = text.split(" ");

  let my_text = "";

  for (let i = 0; i < ans.length; i++) {
    my_text = my_text + (ans[i][0].toUpperCase() + ans[i].slice(1));
  }
  return my_text;
}
function snakeCase(text) {
  if(text == ""){
    return text;
  }
  let ans = text.toLowerCase();

  let my_text = "";

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == " ") {
      my_text = my_text + "_";
      continue;
    }
    my_text = my_text + ans[i];
  }
  return my_text;
}
function screamingSnakeCase(text) {
  if(text == ""){
    return text;
  }
  let ans = text.toUpperCase();

  let my_text = "";

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == " ") {
      my_text = my_text + "_";
      continue;
    }
    my_text = my_text + ans[i];
  }
  return my_text;
}
function kebabCase(text) {
  if(text == ""){
    return text;
  }
  let ans = text.toLowerCase();

  let my_text = "";

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == " ") {
      my_text = my_text + "-";
      continue;
    }
    my_text = my_text + ans[i];
  }
  return my_text;
}
function screamingKebabCase(text) {
  if(text == ""){
    return text;
  }
  let ans = text.toUpperCase();

  let my_text = "";

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == " ") {
      my_text = my_text + "-";
      continue;
    }
    my_text = my_text + ans[i];
  }
  return my_text;
}

document.addEventListener("input", () => {
  const text = document.getElementById("text").value;
  document.getElementById("convert-btn").addEventListener("click", () => {
    document.getElementById("camel-case").innerText = camelCase(text);
    document.getElementById("pascal-case").innerText = pascalCase(text);
    document.getElementById("snake-case").innerText = snakeCase(text);
    document.getElementById("screaming-snake-case").innerText =
      screamingSnakeCase(text);
    document.getElementById("kebab-case").innerText = kebabCase(text);
    document.getElementById("screaming-kebab-case").innerText =
      screamingKebabCase(text);
  });
});
