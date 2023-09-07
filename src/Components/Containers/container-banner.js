import "./index.css";
const ContainerBanner = (props) => {
  const styles = {
    //     width: props.width || "100%",
    backgroundColor: props.color || "",
    //     display: props.display || "flex",
    //     flexDirection: props.flexDirection || "column",
    //     flexWrap: props.wrap || "wrap",
    //     justifyContent: props.justifyContent || "center",
    //     alignItems: props.alignItems || "center",
    //     alignContent: props.alignContent || "center",
    //     boxSixing: "border-box",
    //     margin: props.margin || "0",
    //     marginTop: props.marginTop || 0,
    //     padding: props.padding || 0,
  };

  return (
    <div className="cont" style={styles}>
      {props.children}
    </div>
  );
};

export default ContainerBanner;
