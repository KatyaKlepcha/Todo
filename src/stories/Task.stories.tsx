import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Task from "../Task";

export default {
    title: 'TODOLISTS/Task',
    component: Task,
    args: { //попадают сразу во все истории для этой компоненты
        removeTask: action('removeTask'),
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        task: {id: 'lalala', title: 'JS', isDone: false}
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsNotDoneStory = Template.bind({});
TaskIsNotDoneStory.args = {};


export const TaskIsDoneStory = Template.bind({});
TaskIsDoneStory.args = {
    task: {id: 'lalala', title: 'HTML', isDone: true},
};


const Template1: ComponentStory<typeof Task> = (args) => {
    const [task, setTask] = useState({id: 'lalala', title: 'JS', isDone: false})

    function changeTaskStatus(id: string, isDone: boolean) {
        setTask({id: 'lalala', title: 'JS', isDone: !task.isDone})
    }

    function changeTaskTitle(taskId: string, newTitle: string) {
        setTask({id: 'lalala', title: newTitle, isDone: false})
    }

    function removeTask() {
        console.log('remove task')
    }

    return <Task
        task={task}
        changeTaskStatus={changeTaskStatus}
        changeTaskTitle={changeTaskTitle}
        removeTask={args.removeTask}
    />
}

export const TaskStory = Template1.bind({});
TaskStory.args = {};


