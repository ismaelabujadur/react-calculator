import "./ButtonBox.scss";

type BoxProps = {
    children: React.ReactNode;
}

const ButtonBox = (
    {
        children
    }: BoxProps
) => {
    return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;