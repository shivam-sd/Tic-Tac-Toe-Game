let boxbtn = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newgame = document.querySelector(".new-game");
let mgs_container = document.querySelector(".mgs-container"); 
let text = document.querySelector("p");
let turn0 = true; //player 0 ,, // player X

let winning_pattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

boxbtn.forEach((box) => {
    box.addEventListener("click",() => {
        // console.log("button wa clicked");

        if(turn0){
            box.innerText="O";
            box.style.color="darkred";
            turn0 = false;
        }
        else{
            box.innerText="X";
            box.style.color="darkgreen";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

let = checkwinner = () => {
    for(let pattern of winning_pattern){

            let winnerval0 = boxbtn[pattern[0]].innerText;
            let winnerval1 = boxbtn[pattern[1]].innerText;
            let winnerval2 = boxbtn[pattern[2]].innerText;

            if(winnerval0 != "" && winnerval1 != "" && winnerval2 != "")
            {
                if(winnerval0 === winnerval1 && winnerval1 === winnerval2){
                    show_Winner(winnerval0);
                    disabled();
                }
                
            }
    }
}

let show_Winner = (winner) => {
    text.innerText=`Congratulation , winner ${winner}`;
    mgs_container.classList.remove("hide");
};

let disabled = () => {
    for(const box of boxbtn){
        box.disabled = true;
    }
}

let resetbttn = () => {
    turn0 = true;
    newbttn();
    mgs_container.classList.add("hide");
    
}
let newbttn = () => {
    for(let box of boxbtn){
        box.disabled = false;
        box.innerText = "";
    }
}

resetbtn.addEventListener("click",(resetbttn));
newgame.addEventListener("click",(resetbttn));