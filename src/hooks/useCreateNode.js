import React, { useContext } from "react";
import ReactDOMServer from "react-dom/server";
import Node from "../components/node";
import { PlumbContext } from "../contexts/plumbContext";

const useCreateNode = (nodeText, instanceKey = "main-container") => {
  const { createNode, getInstance, getNode } = useContext(PlumbContext);
  const instance = getInstance(instanceKey);
  const nodeID = `node-${nodeText.toLowerCase()}`;
  const node = <Node text={nodeText} nodeID={nodeID} instance={instance} />;

  if (!getNode(nodeText)) {
    createNode(nodeText, node);
  }

  return { nodeID, node };
};

export default useCreateNode;
