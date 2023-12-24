const start_end_Btn = document.querySelector("button")
const handContainer =  document.querySelector(".hand-container")
const handContainerImg =  document.querySelector(".hand-container > img")
const popUpChoices = document.querySelector(".pop-up-choices")
const choices = document.querySelectorAll(".hand-signs-choices > img")
const YourScoreDisplay = document.querySelector(".your-score")
const GonScorceDisplay = document.querySelector(".gon-score")
const popUpWinner = document.querySelector(".pop-up-winner")
const winnerDisplay = document.querySelector(".pop-up-winner > h1")

let YourScore = 0
let GonScorce = 0


function changeHand(){
    handContainerImg.src = "../Design/rock.png"
    setTimeout(()=>{ handContainerImg.src = "../Design/paper.png"},1000)
    setTimeout(()=>{handContainerImg.src = "../Design/scissor.png"},2000)
    setTimeout(()=>{showChoices()},3000)
    
}

function showChoices(){
    popUpChoices.style.visibility = "visible"
}
function removeChoices(){
    popUpChoices.style.visibility = "hidden"
}

function showWinner(){
    popUpWinner.style.visibility = "visible"
}

function removeWinner(){
    popUpWinner.style.visibility = "hidden"
}

function getGonChoice(){
    const gameChoices = ["rock","paper","scissor"]

    const randomChoice =Math.floor(Math.random() * 3);

    return gameChoices[randomChoice]
}

function findWinner(param){
    switch(param){
        case "rockpaper":
            return "paper"
        case "rockscissor":
            return "rock"
        case "paperrock":
            return "paper"
        case "scissorrock":
            return "rock"
        case "paperscissor":
            return "scissor"
        case "scissorpaper":
            return "scissor"
    }
}


handContainerImg.addEventListener("click",(e)=>{
    changeHand()
})


choices.forEach(choice=>{
    choice.addEventListener("click",(e)=>{
        if (choice.id == getGonChoice()){
            removeChoices()
            showWinner()
            winnerDisplay.innerHTML = "It's a Draw"
            setTimeout(()=>{removeWinner()},2000)

        }
        else{
            const winner = findWinner(choice.id+getGonChoice())
            if(winner == choice.id){
                YourScore = YourScore + 1
                YourScoreDisplay.innerHTML  = YourScore
                removeChoices()
                showWinner()
                winnerDisplay.innerHTML = "You Win!"
                setTimeout(()=>{removeWinner()},2000)
            }
            else{
                GonScorce = GonScorce + 1
                GonScorceDisplay.innerHTML = GonScorce
                removeChoices()
                showWinner()
                winnerDisplay.innerHTML = "Gon Wins!"
                setTimeout(()=>{removeWinner()},2000)
            }
        }
    })
})

start_end_Btn.addEventListener("click",(e)=>{
    if (e.target.classList.contains("start-btn")){
        handContainer.style.visibility = "visible"
        e.target.classList.remove("start-btn")
        e.target.classList.add("end-btn")
        start_end_Btn.innerHTML = "END GAME" 
        changeHand()
    }
    else{
        handContainer.style.visibility = "hidden"
        e.target.classList.remove("end-btn")
        e.target.classList.add("start-btn")
        start_end_Btn.innerHTML = "START"
        YourScore = 0
        GonScorce = 0
        GonScorceDisplay.innerHTML = GonScorce
        YourScoreDisplay.innerHTML = YourScore
    }
})