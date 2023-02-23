import React, {memo, useCallback} from 'react';
import SuperCheckbox from "./SuperCheckbox/SuperCheckbox";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton/IconButton";
import {Delete} from "@mui/icons-material";
import {TaskType} from "./Todolist";

type TaskPropsType = {
    task: TaskType
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
}

const Task = memo((props: TaskPropsType) => {
    console.log('Task')
    const onClickHandler = () => props.removeTask(props.task.id)
    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let newIsDoneValue = e.currentTarget.checked;
    //     props.changeTaskStatus(t.id, newIsDoneValue, props.id);
    // }

    const onChangeHandler = (value: boolean) => {
        props.changeTaskStatus(props.task.id, value)
    }

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue);
    },[props.changeTaskTitle, props.task.id])

    return <div className={props.task.isDone ? "is-done" : ""}>
        {/*<SuperCheckbox*/}
        {/*    checked={t.isDone}*/}
        {/*    color="primary"*/}
        {/*    onChange={onChangeHandler}*/}
        {/*/>*/}

        <SuperCheckbox checked={props.task.isDone} сallback={(value) => onChangeHandler(value)}/>
        {/*<SuperCheckbox checked={t.isDone} сallback={(value)=>onChangeHandler(t.id,value)}/>*/}

        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
});

export default Task;