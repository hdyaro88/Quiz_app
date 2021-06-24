import { useEffect, useState } from "react";
import styles from "./QuizItem.module.css"
import Option from "./Option";
import { useSelector } from "react-redux";
import Button from "../UI/Button"
import Timer from "../Timer/Timer"

const QuizItem = (props) => {
  const optionCtx = useSelector(state => state.option);
  const [ShowOptions, setShowOptions] = useState(false);
  const [ShowImage, setShowImage] = useState(true);
  useEffect(() => {

     let timer = setTimeout(() => {
          setShowImage(false)
          setShowOptions(true)
      } , 10 * 1000);
      return () => {
        setShowImage(true)
          setShowOptions(false)
        clearTimeout(timer);
      }
  } , [props])
  let options = props.options.map(option => (
      <Option key={option} option={option} correctOption={props.correctOption} />
  ))
  return (
      <div className={styles.quiz_box}>
        <h1>Question No. {props.quesNo} </h1>
        <h2>What is the object Shown in the Figure?</h2>
      {ShowImage && (
        <div className={styles.quiz_img}>
          <img
            src={props.image}
            alt="quiz_image"
          />
          <Timer/>
        </div>
      )}
      {ShowOptions && (
        <div className={styles.options}>
            <ul>
            {options}
          </ul>
          {optionCtx.selected && <Button onClick={props.submitted} >Submit</Button>}
        </div>
      )}
    </div>
  );
};
export default QuizItem;
