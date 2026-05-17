import { useState } from "react";
import "./QuizApp.css";

export default function QuizApp() {
  let [currentQ, setCurrentQ] = useState(0);
  let [score, setScore] = useState(0);
  let [selectAns, setSelectAns] = useState("");
  let [isFinish, setIsFinish] = useState(false);
    
    let questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library"
  },
  {
    question: "JavaScript runs on?",
    options: ["Browser", "Server", "Both", "None"],
    answer: "Both"
  },
  {
    question: "Which hook is used for state?",
    options: ["useRef", "useEffect", "useState", "useMemo"],
    answer: "useState"
  },
  {
    question: "Which method is used to loop arrays in React?",
    options: ["filter", "map", "find", "push"],
    answer: "map"
  },
  {
    question: "CSS stands for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = questions[currentQ];

let next = () => {

  if(selectAns === currentQuestion.answer) {
    setScore(score + 1);
  }

  if(currentQ === questions.length - 1) {
    setIsFinish(true);
  } else {
    setCurrentQ(currentQ + 1);
    setSelectAns("")
  }
}

let reset = () => {
  setCurrentQ(0);
  setScore(0);
  setSelectAns("");
  setIsFinish(false);
}

if(isFinish) {
  return (
    <div>
      <h2>Quiz completed</h2>
      <p>Your Score: {score}</p>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

let styles = {
  color: selectAns &&  selectAns === currentQuestion.answer ? "green" : "red"
}


return (
    <div className="quiz-container">
       <h1>Quiz App</h1>
       <p className="questions">{currentQuestion.question}</p>

       {currentQuestion.options.map((opt) => (
        <div>
          <button
           key={opt}
          className="option-btn"
          onClick={() => setSelectAns(opt)} 
          style={{backgroundColor: 
          selectAns && opt === currentQuestion.answer ? "green" : 
          selectAns === opt && opt !== currentQuestion.answer ? "red" : "white",
          color: selectAns && opt === currentQuestion.answer
          ? "white"
          : selectAns === opt &&
          opt !== currentQuestion.answer
         ? "white" : "black",
          margin: "10px"
        }}>
          {opt}</button>
        </div>
       ))}

       <p className="answer-text">Your Answer: <span style={styles}>{selectAns}</span></p>

       {selectAns && (
       selectAns === currentQuestion.answer ? 
       <p className="correct">Correct ✅</p> : 
       <p className="wrong">Wrong ❌</p>
       )}

       <p className="score-text">Your Score: {((score / questions.length) * 100).toFixed(0)} %</p>

       <p className="question-count">Question : {currentQ + 1 } of {questions.length}</p>

       <button className="next-btn" onClick={next} disabled={!selectAns}>Next</button>


    </div>
)
}