

let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "pink", "green", "purple"]

let started = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
   if (started == false) {
      console.log("game started!");
      started = true;
      levelUp();
   }
});

function gameFlash(btn) {
   btn.classList.add("flash")
   setTimeout(function () {
      btn.classList.remove("flash")
   }, 250);
}
function userFlash(btn) {
   btn.classList.add("userflash")
   setTimeout(function () {
      btn.classList.remove("userflash")
   }, 250);
}

function levelUp() {
   userSeq=[];
   level++;
   h2.innerText = `Level ${level}`;
   // random btn
   let randIndx = Math.floor(Math.random() * 3);
   let randColor = btns[randIndx];
   let randbtn = document.querySelector(`.${randColor}`);
   // console.log(randIndx);
   // console.log(randColor)
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randbtn);
}

function checkUp(indx)
{
   if(userSeq[indx] === gameSeq[indx])
   {
     if(userSeq.length == gameSeq.length)
     {
      setTimeout(levelUp,1000);
     }
   }
   else {
  
      h2.classList.add("red");
      h2.innerHTML = `Game over!<b> your score.<b> ${level}<b>  <br>press any key start  to game`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },200);
      reset();
   }
}

function btnPress() {
   console.log(this);
   let btn = this;
   userFlash(btn);
   let userColor = btn.getAttribute("id");
   // console.log(userColor);
   userSeq.push(userColor);
   console.log(userSeq);

   checkUp(userSeq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
   btn.addEventListener("click", btnPress);
}

function reset() {
   started = false;
   gameSeq=[];
   userSeq =[];
   level=0;
}