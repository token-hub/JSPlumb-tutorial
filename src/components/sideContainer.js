import React, { useContext } from "react";
import { PlumbContext } from "../contexts/plumbContext";
import useCreateNode from "../hooks/useCreateNode";
import getRandomNodeText from "../utilities/getRandomNodeText";

const SideContainer = () => {
  const {
    createNode,
    deleteNode,
    deleteAllConnections,
    createNodeOnElement,
  } = useContext(PlumbContext);

  return (
    <>
      <button
        className="control-button"
        onClick={() => createNode(getRandomNodeText())}
      >
        Add Element
      </button>
      <button className="control-button" onClick={() => createNodeOnElement()}>
        Add on Element
      </button>
      <button className="control-button" onClick={() => deleteNode()}>
        Delete Element
      </button>
      <button className="control-button" onClick={() => deleteAllConnections()}>
        Delete All Connections
      </button>
    </>
  );
};

export default SideContainer;
