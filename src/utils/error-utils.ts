import {AppActionsType, setAppErrorAC, setAppStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import { ResponseType } from '../api/todolists-api'

export const handleServerNetworkError = (dispatch: ErrorUtilsDispatchType, error: string ) => {
    dispatch(setAppStatusAC('failed'))
    dispatch(setAppErrorAC(error))
}

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}
type ErrorUtilsDispatchType = Dispatch<AppActionsType>