import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";


const initialState: TodolistType[] = []

export const todolistsReducer = (state = initialState, action: todolistsType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.todolistId);
        }
        case 'ADD-TODOLIST': {
            let newTodolist: TodolistType = {id: action.todolistId, title: action.payload.title, filter: 'all'};
            return [...state, newTodolist]
            //return [newTodolist, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(el => el.id === action.payload.id ? {...el, filter: action.payload.newFilter} : el)
        }

        default:
            return state
    }
}

export type todolistsType = ReturnType<typeof RemoveTodolistAC>
    | ReturnType<typeof AddTodolistAC>
    | ReturnType<typeof ChangeTodolistTitleAC>
    | ReturnType<typeof ChangeTodolistFilterAC>
    ;

export const RemoveTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        }
    } as const
}

export const AddTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        todolistId: v1(),
        payload: {
            title,

        }
    } as const
}

export const ChangeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id,
            title
        }
    } as const
}

export const ChangeTodolistFilterAC = (id: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id,
            newFilter
        }
    } as const
}