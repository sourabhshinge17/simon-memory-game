let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "purple"];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
   if (started == false) {
      started = true;
      console.log("game started!");
      levelUp();
   }
});
function gameflash(btn) {
   btn.classList.add("flash");
   setTimeout(() => {
      btn.classList.remove("flash");
   }, 200);
}
function userflash(btn) {
   btn.classList.add("userflash");
   setTimeout(() => {
      btn.classList.remove("userflash");
   }, 200);
}
function levelUp() {
   userseq = [];
   level++;
   h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randcolor = btns[randIdx];
   let randbtn = document.querySelector(`.${randcolor}`);
      gameseq.push(randcolor);
      console.log(gameseq);
      // console.log(randcolor);
      // console.log(randbtn);
      // console.log(randIdx);
      gameflash(randbtn);
}
function checkAnswer(idx) {
   
   if (gameseq[idx] == userseq[idx]) {
     if (userseq.length == gameseq.length) {
     setTimeout(levelUp, 500);
     }
}else {
      h2.innerHTML = `Game Over, Ur score is : <b>${level}</b> <br>Press any key to restart the game!!!`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(() => {
         document.querySelector("body").style.backgroundColor = "white";
  
      }, 150);
             reset();
}
}
function btnpress() {
   let btn = this;
   userflash(btn);
   let usercolor = btn.getAttribute("id");
   userseq.push(usercolor);
   checkAnswer(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
   btn.addEventListener("click", btnpress);
}
function reset() {
   gameseq = [];
   userseq = [];
   level = 0;
   started = false;
}