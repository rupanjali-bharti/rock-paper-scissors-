let userscore=0;
let compscore=0;

//to select all the choices and store it in constant choices
const choices=document.querySelectorAll(".choice");

//to update the scores
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");

// created an array of choices . used math.random to generate random options from given array list
const generatechoice=()=>{
    const options=["rock","paper","scissor"];
   const randomindex=Math.floor(Math.random()*3);
   return options[randomindex];
}
//to show the winner
const showWinner=(userWin)=>{
    if(userWin){
        userscore++;
        uscore.innerText=userscore;    
        
        document.getElementById("winning-mes").innerText="You Won";
    }else{
        compscore++;
        cscore.innerText=compscore; 
        
        document.getElementById("winning-mes").innerText="You Lost";
    }
}

//
const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=generatechoice();
    console.log("comp choice=",compChoice);
    document.getElementById("comp-choice").innerText=compChoice;

    //to check whether the match is draw or not
    if(userChoice === compChoice){
        console.log("Game was DRAW");
        document.getElementById("winning-mes").innerText="Game was Draw";
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
            document.getElementById("user-choice").innerText=userChoice;
        }else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
            document.getElementById("user-choice").innerText=userChoice;
        }else{
            userWin=compChoice==="rock"?false:true;
            document.getElementById("user-choice").innerText=userChoice;
        }
        showWinner(userWin);
    }
}

//used foreach loop to traverse each element 
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})