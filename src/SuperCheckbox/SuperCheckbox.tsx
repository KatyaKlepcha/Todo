import React, {ChangeEvent} from 'react';

type SuperCheckboxType = {
    checked: boolean
    сallback: (value: boolean) => void
}

const SuperCheckbox = (props: SuperCheckboxType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.сallback(newIsDoneValue)
    }
    return (
        <div>
            <input type={'checkbox'} checked={props.checked} onChange={onChangeHandler}></input>
        </div>
    );
};

export default SuperCheckbox;