import {TasksStateType} from "../App"
import {v1} from "uuid";
import {AddTodolistAC, RemoveTodolistAC} from "./todolists-reducer";


const initialState: TasksStateType = {}

export const tasksReducer = (state= initialState, action: TasksActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(t => t.id !== action.payload.taskId)
            }
        }
        case 'ADD-TASK': {
            const newTodolistId = v1()
            const newTask = {id: newTodolistId, title: action.payload.title, isDone: false}
            return {
                ...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]
            }
        }

        case 'CHANGE-TASK-STATUS': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ? {
                    ...t,
                    isDone: action.payload.isDone
                } : t)
            }
        }
        case 'CHANGE-TASK-TITLE': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(t => t.id === action.payload.taskId ? {
                    ...t,
                    title: action.payload.newTitle
                } : t)
            }
        }
        case 'ADD-TODOLIST': {
            return {...state, [action.todolistId]: []}

        }

        case 'REMOVE-TODOLIST': {
            let copyState = {...state}
            delete copyState[action.payload.todolistId]
            return copyState

        }
        default:
            return state
    }
}

export type TasksActionType = ReturnType<typeof RemoveTaskAC>
    | ReturnType<typeof AddTaskAC>
    | ReturnType<typeof ChangeTaskStatusAC>
    | ReturnType<typeof ChangeTaskTitleAC>
    | ReturnType<typeof AddTodolistAC>
    | ReturnType<typeof RemoveTodolistAC>

export const RemoveTaskAC = (taskId: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            taskId,
            todolistId
        }
    } as const
}

export const AddTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title, todolistId
        }
    } as const
}

export const ChangeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        payload: {
            taskId, isDone, todolistId
        }
    } as const
}

export const ChangeTaskTitleAC = (taskId: string, newTitle: string, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        payload: {
            taskId, newTitle, todolistId
        }
    } as const
}