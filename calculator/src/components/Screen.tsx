import "./Screen.scss";

type ScreenProps = {
    value: React.ReactNode;
}

const Screen = (
    {
        value
    }: ScreenProps
) => {
    return (
        <div className="screen-wrapper">
            <div>Calculator</div>
            <div className="screen">
                {value}
            </div>
        </div>
    );
};

export default Screen;