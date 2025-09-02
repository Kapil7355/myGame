let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector("#reset-button");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#new-btn");
let msg2 =document.querySelector("#msg2");
let msg2container=document.querySelector(".msg2container");


let turnO=true; //playerX/playero
const WinPattern = [
   [0,1,2],
   [1,4,7],
   [0,3,6],
   [3,4,5],
   [0,4,8],
   [6,7,8],
   [2,4,6],
   [2,5,8]
     
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";//player1
            turnO=false;
        }
        else{
            box.innerText="X"; //player2
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const resetGame=()=>{
    turnO=true;
    enablebtn();
    msgContainer.classList.add("hide");

}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner) =>{
    msg.innerText= `congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

// const loserbox=(looser)=>{
//     msg2.innerText='you are loose ${looser}';
//     msg2container.classList.remove("hide2");

// }

const checkwinner=()=>{
    for(let pattern of WinPattern){
   let pos1val= boxes[pattern[0]].innerText;
   let pos2val=boxes[pattern[1]].innerText;
   let pos3val=boxes[pattern[2]].innerText;

   if(pos1val!=""&&pos2val!=""&&pos3val!=""){
    if(pos1val===pos2val&&pos2val===pos3val){
        console.log("winner",pos1val);
        showWinner(pos1val);

    }
   }
    
}
}

newbtn.addEventListener("click",resetGame);
Resetbtn.addEventListener("click",resetGame);