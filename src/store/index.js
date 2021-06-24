import { configureStore, createSlice } from "@reduxjs/toolkit";
const option = createSlice({
  name: "option",
  initialState: {
    selected: false,
    correct: false,
    score : 0 ,
    wrong : 0 , 
    right : 0 ,
  },
  reducers: {
    markCorrect(state) {
      state.correct = true;
      state.selected = true;
      state.score += 5;
      state.right++;
    },
    markWrong(state) {
      state.correct = false;
      state.selected = true;
      state.wrong++
    },
    Reset(state) {
        state.selected = false
        state.correct = false
      }
  },
});
// const score = createSlice({
//     name : "score" ,
//     initialState : {score : 0} ,
//     reducers : {
//         increase(state) {
//             state.score += 5;
//         } ,
//     }
// })
export const store = configureStore({
  reducer: {
    option: option.reducer,
  },
});
export const optionAction = option.actions;
