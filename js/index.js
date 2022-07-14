const pressed = [];
const secretCode = "wesbos";
const heading = document.querySelector(".heading");

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);

  heading.innerHTML = pressed;
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("Ding Ding!!");
    cornify_add();
  }
  console.log(pressed);
});
