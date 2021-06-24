import { useState } from "react";
import QuizItem from "./QuizItem";
import book from "../../Images/book.png";
import elephant from "../../Images/elephant.png";
import cycle from "../../Images/cycle.png";
import superman from "../../Images/superman.png";
import car from "../../Images/car.png";
import { optionAction } from "../../store";
import { useDispatch } from "react-redux";
import styles from "./Quiz.module.css";
import Result from "../Result/Result"

const QuizList = [
  {
    id: 1,
    image: book,
    options: ["Book", "Elephant", "Cycle", "Superman", "Car", "Tea"],
    correctOption: "Book",
  },
  {
    id: 2,
    image: elephant,
    options: ["Book", "Elephant", "Cycle", "Superman", "Car", "Tea"],
    correctOption: "Elephant",
  },
  {
    id: 3,
    image: cycle,
    options: ["Book", "Elephant", "Cycle", "Superman", "Car", "Tea"],
    correctOption: "Cycle",
  },
  {
    id: 4,
    image: superman,
    options: ["Book", "Elephant", "Cycle", "Superman", "Car", "Tea"],
    correctOption: "Superman",
  },
  {
    id: 5,
    image: car,
    options: ["Book", "Elephant", "Cycle", "Superman", "Car", "Tea"],
    correctOption: "Car",
  },
];
const Quiz = () => {
  const [Qnumber, setQnumber] = useState(1);
  const [showFinal, setShowFinal] = useState(false);
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(optionAction.Reset());
    if (Qnumber === 5) {
        setShowFinal(true);
    } else {
      setQnumber((prevQues) => {
        return prevQues + 1;
      });
    }
  };
  return (
    <div className={styles.quizHolder}>
     {!showFinal &&  <QuizItem
        submitted={submitHandler}
        quesNo={Qnumber}
        image={QuizList[Qnumber - 1].image}
        options={QuizList[Qnumber - 1].options}
        correctOption={QuizList[Qnumber - 1].correctOption}
      />}
      {showFinal && <Result/>}
    </div>
  );
};
export default Quiz;
