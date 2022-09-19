import "./Screen.scss";
import { Textfit } from 'react-textfit';

type ScreenProps = {
    expression: string;
    total: string;
}

const Screen = (
    {
        expression, total
    }: ScreenProps
) => {
    return (
        <div className="screen-wrapper">
            <div>Calculator</div>
            <div className="screen">
                <Textfit max={40} throttle={60} mode="single" className="screen-top">
                    {expression}
                </Textfit>
                <Textfit
                    max={150}
                    mode="single"
                    className="screen-bottom"
                >
                    {total}
                </Textfit>
            </div>
        </div>
    );
};

export default Screen;