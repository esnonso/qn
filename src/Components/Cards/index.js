import "./index.css";

// const phone = window.matchMedia("(max-width: 700px)");
// const tab = window.matchMedia("(min-width: 701px) and ((max-width: 900px)");
// const desktop = window.matchMedia("(min-width: 901px)");

const Cards = (props) => {
  const styles = {
    backgroundColor: props.color,
    padding: props.padding,
    color: props.textColor,
    height: props.height,
    boxShadow: " 2px 5px #f1f1f1",
  };
  return (
    <div style={styles} className="cards">
      {props.children}
    </div>
  );
};

export default Cards;
