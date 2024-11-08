import { getTodoList } from '../helpers/getTodoList';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '../interface/Todo.interface';
import type { SliceTodo } from '../interface/Slice.interface';

const initialState: SliceTodo = {
    todos: [],
    isLoad: true,
    error: false,
};

export const todosLoad = createAsyncThunk('todos/todosLoad', async () => {
    const todos = await getTodoList();
    return todos;
});

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos = state.todos.filter((todo) => todo._id !== action.payload._id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(todosLoad.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isLoad = false;
                state.error = false;
            })
            .addCase(todosLoad.pending, (state) => {
                state.error = false;
                state.isLoad = true;
            })
            .addCase(todosLoad.rejected, (state) => {
                state.error = true;
                state.isLoad = false;
            });
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
