import { useSelector } from "react-redux";
import styles from "./Result.module.css"

const Result = () => {
    const final = useSelector(state => state.option)
  return (
      <>
      <h1 className={styles.score}>Your Final Score is <u>{final.score}</u> </h1>
      <p>Wrong : {final.wrong}</p>
      <p>Right : {final.right}</p>
      </>
  )
}
export default Result;