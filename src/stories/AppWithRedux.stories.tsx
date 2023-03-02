import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Task from "../Task";
import AppWithRedux from "../AppWithRedux";
import {ReduxStoreProviderDecorator} from "../state/decorators/ReduxStoreProviderDecorator";

export default {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux />;

export const AppWithReduxStory = Template.bind({});
// AppWithReduxStory.args = {};


