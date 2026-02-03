const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("message");
const question = document.getElementById("question");

let startTime = null;

noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.addEventListener("click", () => {
  if (!startTime) startTime = Date.now();

  let elapsed = Date.now() - startTime;

  if (elapsed < 4000) {
    moveNo();
  } else {
    question.innerHTML = "Yayyyyy! 😍💝";
    msg.innerHTML = "I Love You ❤️🫂";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
  }
});
