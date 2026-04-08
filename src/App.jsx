import { useState } from "react"

function App() {
   let [computerMove,setComputerMove]=useState("")
    let [userMove,setUserMove]=useState("")
    let [computerScore,setComputerScore]=useState(0)
    let [userScore,setUserScore]=useState(0)
    let [res,setRes]=useState("Result")
    let [round,setRound]=useState(0)

  let handleClick=(_UserMove)=>{
    let _computerMove = "";
    let _userScore = userScore;
    let _computerScore = computerScore;
    let _result=""

    let p=Math.random()

    if (p<0.34){
      _computerMove="Rock"
    }else if (p<0.67){
      _computerMove="Paper"
    }else {
      _computerMove="Scissors"
    }

    if (_UserMove==_computerMove){
       _result="Draw"
    }else if (
      (_UserMove=="Paper" && _computerMove=="Rock") ||
      (_UserMove=="Rock" && _computerMove=="Scissors") ||
      (_UserMove=="Scissors" && _computerMove=="Paper")
    ){
      _result="You Win"
      _userScore++;
    }else {
      _result="Computer Win"
      _computerScore++;
    }

    setComputerMove(_computerMove)
    setUserMove(_UserMove)
    setComputerScore(_computerScore)
    setUserScore(_userScore)
    setRes(_result)
    setRound(round+1)

    
  }
  function reset(){
    setUserScore(0)
    setComputerScore(0)
    setComputerMove("")
    setUserMove("")
    setRes("Result")
    setRound(0)
  }

  return (
    <div>
      <h1>Computer:User</h1>
      <h1>{computerMove}:{userMove}</h1>
      <h1 style={{color:"red"}}>{computerScore}:{userScore}</h1>
      <h1 style={{color:"greenyellow"}}>{res}</h1>
      <h1>{round>0?"Rounds":"Round"}:{round}</h1>
      <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
      <button onClick={()=>handleClick("Rock")}>🪨 Rock</button>
      <button onClick={()=>handleClick("Paper")}>🗒️ Paper</button>
      <button onClick={()=>handleClick("Scissors")}>✂️ Scissors</button>
      <button onClick={reset}>Reset</button>
      </div>
      

    </div>
  )
}

export default App
