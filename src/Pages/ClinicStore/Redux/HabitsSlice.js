import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoHabits: [], // List of todo habits
  achievedHabits: [], // List of achieved habits
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.todoHabits.push(action.payload); // Add a new habit to the todo list
    },
    markAsAchieved: (state, action) => {
      const habit = action.payload;
      state.todoHabits = state.todoHabits.filter((h) => h !== habit); // Remove from todo list
      state.achievedHabits.push(habit); // Add to achieved list
    },
  },
});

export const { addHabit, markAsAchieved } = habitsSlice.actions;
export default habitsSlice.reducer;
