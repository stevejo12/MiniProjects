import { createSlice } from "@reduxjs/toolkit"

export interface TodosState {
  id: string,
  name: string,
  completed: boolean,
}

const initialState: TodosState[] = [];

export const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state,action) => {
      const newTask = {
        id: action.payload.id,
        name: action.payload.task,
        completed: false
      }
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    }
  }
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;