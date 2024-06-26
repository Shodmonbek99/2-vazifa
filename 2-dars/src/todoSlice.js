import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todoSlice = createSlice ({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos.push(payload);
        },
        removeTodo: (state, {payload}) => {},
        changeStateTodo: (state, {payload}) => {}, 
   },
})

export const { addTodo, removeTodo, changeStateTodo } = todoSlice.actions;
export default todoSlice.reducer;