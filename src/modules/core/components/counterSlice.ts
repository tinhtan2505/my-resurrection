import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../../app/store";

// Định nghĩa kiểu cho state
interface CounterState {
  value: number;
}

// Khởi tạo giá trị ban đầu cho state
const initialState: CounterState = {
  value: 0,
} as CounterState;

// Tạo slice với các kiểu được chỉ định
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Sử dụng PayloadAction để chỉ định kiểu cho action
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators được tự động tạo cho mỗi reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync =
  (amount: number): AppThunk =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
