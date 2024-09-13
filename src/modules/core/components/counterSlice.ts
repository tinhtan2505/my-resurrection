import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu cho state
interface CounterState {
  value: number;
}

// Khởi tạo giá trị ban đầu cho state
const initialState: CounterState = {
  value: 0,
};

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

export default counterSlice.reducer;
