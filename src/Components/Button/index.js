const Button = ({
  text,
  click,
  back,
  color,
  border,
  width,
  height,
  borderRadius,
  font,
  type,
  margin,
}) => {
  const buttonStyles = {
    padding: "0.5rem",
    backgroundColor: back,
    color: color,
    border: border || "none",
    width: width,
    height: height,
    borderRadius: borderRadius,
    fontSize: font,
    margin: margin,
  };
  return (
    <button style={buttonStyles} onClick={click} type={type}>
      {text}
    </button>
  );
};

export default Button;
