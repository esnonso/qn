const ContainerFlexColumn = (props) => {
  const styles = {
    width: props.width || "100%",
    backgroundColor: props.color,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    alignContent: props.alignContent,
    margin: props.margin,
    padding: props.padding,
    height: "fit-content",
    flexWrap: props.wrap,
  };

  return (
    <div className="container-column" style={styles}>
      {props.children}
    </div>
  );
};

export default ContainerFlexColumn;
