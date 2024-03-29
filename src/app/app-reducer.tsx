
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    error: null as null | string,
    status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export type AppActionsType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setAppErrorAC>


export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: null| string) => ({type: 'APP/SET-ERROR', error} as const)

