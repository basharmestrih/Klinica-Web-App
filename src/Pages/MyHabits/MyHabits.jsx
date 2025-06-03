import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHabit, markAsAchieved } from "../ClinicStore/Redux/HabitsSlice.js";
import "./MyHabits.css";

const TodoPage = () => {
  const [newHabit, setNewHabit] = useState("");
  const dispatch = useDispatch();
  const { todoHabits, achievedHabits } = useSelector((state) => state.habits);

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      dispatch(addHabit(newHabit));
      setNewHabit("");
    }
  };

  const handleMarkAsAchieved = (habit) => {
    dispatch(markAsAchieved(habit));
  };

  return (
    <div className="todo-page">
      {/* Main Container */}
      <div className="background-container">
        {/* Row with Two Containers */}
        <div className="row-container">
          {/* Left Container */}
          <div className="left-container">
            <h2>My Todo Habits</h2>
            <div className="add-habit">
              <input
                type="text"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder="Enter a new habit"
              />
              <button onClick={handleAddHabit}>Add</button>
            </div>
            <ul>
              {todoHabits.map((habit, index) => (
                <li key={index}>
                  {habit}
                  <button onClick={() => handleMarkAsAchieved(habit)}>✅</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Container */}
          <div className="right-container">
            <h2>Achieved Todo Habits</h2>
            <ul>
              {achievedHabits.map((habit, index) => (
                <li key={index}>{habit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
