import React from "react";
import { operators, specialOperators } from "../../utils/constants";
export default ({ onButtonClick, buttonKey }) => {
    let handleClick = () => { onButtonClick(buttonKey) }
    let classNames = [
        'btn',
        operators.includes(buttonKey) ? 'btn--orange' : '',
        specialOperators.includes(buttonKey) ? 'btn--grey' : '',
        buttonKey === '0' ? 'btn--zero' : ''
    ]
    return (
        <button onClick={handleClick} className={classNames.join(' ').trim()}>
            {buttonKey}
        </button>
    );
}