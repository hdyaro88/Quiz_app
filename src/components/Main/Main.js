import { useState } from "react"
import Button from "../UI/Button"
import Quiz from "../Quiz/Quiz";
import styles from "./Main.module.css"
const Main = () => {
    const [showQuiz , setShowQuiz] = useState(false);
    const startQuizHandler = () => {
        setShowQuiz(true);
    }
  return (
      <>
      {!showQuiz && <div className={styles.main}>
          <h1>Welcome , To The Quiz</h1>
          <p>To Start The Quiz , Press Start</p>
          <Button onClick={startQuizHandler} >Start Test</Button>
      </div>}
      {showQuiz && <Quiz/>}
      </>
  )
}
export default Main;