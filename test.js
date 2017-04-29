import YogaNode from "./index";

const parent = new YogaNode();
parent.style = {
  width: "500px",
  height: "400px",
  top: 20,
  marginLeft: "20px",
  alignContent: "center",
  flexDirection: "row",
};

parent.calculateLayout();

parent.style /*?*/;
parent.layout /*?*/;
