import ReactDOM from "react-dom";
import React, { useContext } from "react";
import { PlumbContext } from "../contexts/plumbContext";
import useCreateNode from "../hooks/useCreateNode";
import getHTMLElement from "../utilities/getHTMLElement";

const MainContainer = () => {
  const { createInstance, connect } = useContext(PlumbContext);

  createInstance("main-container");

  const node1 = useCreateNode("Node1");
  const node2 = useCreateNode("Node2");

  //   connect(
  //     "main-container",
  //     getHTMLElement(node1.nodeID),
  //     getHTMLElement(node2.nodeID)
  //   );

  return (
    <>
      main
      {node1.node}
      {node2.node}
    </>
  );
};

export default MainContainer;
