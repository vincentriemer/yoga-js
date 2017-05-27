import YogaNode from "./src/index";

const parent = new YogaNode();
parent.style = {
  width: "500px",
  height: "400px",
  marginLeft: 40,
  top: 20,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const child = new YogaNode();
child.style = { width: 50, height: 50 };
parent.children = [child];

parent.calculateLayout();

parent.style /*?*/;
parent.layout /*?*/;

child.style /*?*/;
child.layout /*?*/;
