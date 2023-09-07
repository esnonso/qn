import "./index.css";
const Container = (props) => {
  const styles = {
    backgroundColor: props.color,
    display: "flex",
    flexDirection: props.flex,
    justifyContent: props.justify,
    alignItems: props.align,
    margin: props.margin,
    marginTop: props.marginTop,
    padding: props.padding,
    height: props.height,
    color: props.textColor,
    width: props.width,
    boxSixing: "border-box",
  };

  return (
    <div className="container" style={styles}>
      {props.children}
    </div>
  );
};

export default Container;
