import "./Button.scss";

type ButtonProps = {
    className: string
    value: React.ReactNode;
    onClick: () => void;
}

const Button = (
  {
    className,
    value,
    onClick
  }: ButtonProps
) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;