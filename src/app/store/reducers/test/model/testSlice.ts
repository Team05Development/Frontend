import { createSlice } from '@reduxjs/toolkit';

interface ITest {
  name: string;
}

const initialState: ITest = {
  name: '',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    helloFunc: (_, action) => {
      console.log(`Hello ${action.payload}`);
    },
  },
});

export const selectTest = (state: { test: ITest }) => state.test;
export const { helloFunc } = testSlice.actions;
export default testSlice.reducer;
