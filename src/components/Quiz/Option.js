import { useState } from "react"
import styles from "./Option.module.css"
import { useDispatch, useSelector } from "react-redux"
import { optionAction } from "../../store";

const Option = (props) => {
    const optionCtx = useSelector(state => state.option);
    const dispatch = useDispatch();
    const [cssClass , setcssClass] = useState("")
    const checkOptionHandler = () => {
        if(props.option === props.correctOption && !optionCtx.selected) {
            setcssClass(styles.correct)
            dispatch(optionAction.markCorrect());
        }
        else if(!optionCtx.selected) {
            setcssClass(styles.wrong)
            dispatch(optionAction.markWrong());
        }
    } 
 return (
     <li className={cssClass} onClick={checkOptionHandler}>
         {props.option}
     </li>
 )
}
export default Option;