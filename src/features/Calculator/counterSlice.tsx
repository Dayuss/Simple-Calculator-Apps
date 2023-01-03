import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface iCounter {
  num1: {
    value: number;
    isAvailable: boolean;
  };
  num2: {
    value: number;
    isAvailable: boolean;
  };
  num3: {
    value: number;
    isAvailable: boolean;
  };
  result: number;
}

// Define the initial state using that type
const initialState: iCounter = {
  num1: {
    value: 0,
    isAvailable: false,
  },
  num2: {
    value: 0,
    isAvailable: false,
  },
  num3: {
    value: 0,
    isAvailable: false,
  },
  result: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setNum1: (state, action: PayloadAction<{value: number;isAvailable: boolean;}>) =>{
        state.num1 = action.payload;
    },
    setNum2: (state, action: PayloadAction<{value: number;isAvailable: boolean;}>) =>{
        state.num2 = action.payload;
    },
    setNum3: (state, action: PayloadAction<{value: number;isAvailable: boolean;}>) =>{
        state.num3 = action.payload;
    },
    plus: (state, action: PayloadAction<Array<number>>) => {
      state.result = (action.payload).reduce((total, currentValue) => total + currentValue);
    },
    subtract: (state, action: PayloadAction<Array<number>>) => {
      state.result = (action.payload).reduce((total, currentValue) => total - currentValue);
    },
    multiplied: (state, action: PayloadAction<Array<number>>) => {
      state.result = (action.payload).reduce((total, currentValue) => total * currentValue);
    },
    divided: (state, action: PayloadAction<Array<number>>) => {
      state.result = (action.payload).reduce((total, currentValue) => total / currentValue);
    },
  },
})

export const { 
  setNum1,
  setNum2,
  setNum3,
  plus,
  subtract,
  multiplied,
  divided
} = counterSlice.actions
export const selectResult = (state:{counter:iCounter}) => state.counter;

export default counterSlice.reducer