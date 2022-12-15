import React, { createContext, useState, useRef } from "react";
import useGetPlumbInstance from "../hooks/useGetPlumbInstance";

const PlumbContext = createContext();

const PlumbProvider = ({ children }) => {
  const [instances, setInstances] = useState({});
  const instancesRef = useRef({});
  const [nodes, setNodes] = useState([]);
  const nodesRef = useRef([]);
  const getPlumbInstance = useGetPlumbInstance;

  const createInstance = (className) => {
    const instance = getPlumbInstance(className);

    if (instance) {
      instancesRef.current[className] = instance;
      return instance;
    }
  };

  const getInstance = (key) => {
    return instancesRef.current[key];
  };

  const createNode = (nodeText, node) => {
    nodesRef.current.push({ nodeText, node });
  };

  const getNode = (nodeText) => {
    return nodesRef.current.find((node) => node.nodeText == nodeText);
  };

  const connect = (instanceKey, node1, node2) => {
    if (node1 && node2) {
      getInstance(instanceKey).connect({
        source: node1,
        target: node2,
        // anchor: "AutoDefault",
        anchor: { type: "Perimeter", options: { shape: "Circle" } },
      });
    }
  };

  const values = {
    createInstance,
    getInstance,
    createNode,
    nodes,
    getNode,
    connect,
  };

  return (
    <PlumbContext.Provider value={values}>{children}</PlumbContext.Provider>
  );
};

export { PlumbProvider, PlumbContext };
