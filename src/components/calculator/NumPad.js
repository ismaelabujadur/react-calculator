import React, { Component } from "react";
import { numpadKeys } from '../../utils/constants';
import Calculator from '../calculator';

export default class NumPad extends Component {
    handleClick = (key) => {
        if (key == 'c') {
            this.props.reset();
        } else if (key == '⇦') {
            this.props.delete_character();
        } else {
            this.props.calculate(key);
        }
    }
    render() {
        return (
            <div className="keypad">
                {numpadKeys.map((block, index) => {
                    return (
                        <div key={index} className="block">
                            {
                                block.map(key =>
                                    <Calculator.Button
                                        key={key}
                                        onButtonClick={this.handleClick}
                                        buttonKey={key}
                                    />
                                )
                            }
                        </div>
                    )
                })
                }
            </div>
        );
    }
}