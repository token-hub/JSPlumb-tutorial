import React, { createContext, useState, useRef } from "react";
import getNewInstance from "../utilities/getNewInstance";
import Node from "../components/node";

const PlumbContext = createContext();

const PlumbProvider = ({ children }) => {
  const instancesRef = useRef({});
  const [selectedNode, setSelectedNode] = useState();
  const [nodes, setNodes] = useState([]);
  const nodesRef = useRef([]);

  const createInstance = (key, element) => {
    const instance = getNewInstance(element);

    if (instance) {
      instancesRef.current[key] = instance;
      return instance;
    }
  };

  const getInstance = (key) => {
    return instancesRef.current[key];
  };

  const createNode = (nodeText, instanceKey = "main-container") => {
    const instance = getInstance(instanceKey);

    if (instance) {
      const nodeID = `node-${nodeText.toLowerCase()}`;
      const node = <Node text={nodeText} nodeID={nodeID} instance={instance} />;

      if (!getNode(nodeText)) {
        setNodes((prev) => [...prev, { nodeText, node }]);
      }
    }
  };

  const getNode = (nodeText) => {
    return nodes.find((node) => node.nodeText == nodeText);
  };

  const connect = (instanceKey, node1, node2) => {
    if (node1 && node2) {
      getInstance(instanceKey).connect({
        source: node1,
        target: node2,
      });
    }
  };

  const getNodeIndex = (nodeText) => {
    return nodes.findIndex((node) => node.nodeText === nodeText);
  };

  const saveSelectedNode = (nodeText) => {
    setSelectedNode(nodeText);
  };

  const values = {
    createInstance,
    getInstance,
    createNode,
    nodes,
    getNode,
    connect,
    nodesRef,
    getNodeIndex,
    selectedNode,
    saveSelectedNode,
  };

  return (
    <PlumbContext.Provider value={values}>{children}</PlumbContext.Provider>
  );
};

export { PlumbProvider, PlumbContext };
