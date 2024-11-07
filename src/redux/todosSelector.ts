import type { SliceTodo } from '../interface/Slice.interface';
import type { RootState } from './store';

export const todosSelector = (state: RootState): SliceTodo => state.todos;
