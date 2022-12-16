import React, { createContext, useState, useRef } from "react";
import getNewInstance from "../utilities/getNewInstance";
import getHTMLElement from "../utilities/getHTMLElement";
import Node from "../components/node";
import getRandomNodeText from "../utilities/getRandomNodeText";

const PlumbContext = createContext();

const PlumbProvider = ({ children }) => {
  const instancesRef = useRef({});
  const [selectedNode, setSelectedNode] = useState();
  const [nodes, setNodes] = useState([]);
  const nodesRef = useRef([]);

  const createInstance = (key, element) => {
    const instance = getNewInstance(element);
    localStorage.setItem("alerted", "");

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
      const nodeID = `${nodeText.toLowerCase()}`;
      const node = <Node text={nodeText} nodeID={nodeID} instance={instance} />;

      if (!getNode(nodeText)) {
        setNodes((prev) => [...prev, { nodeText, node }]);
      }

      return { nodeID, node };
    }
  };

  const getNode = (nodeText) => {
    return nodes.find((node) => node.nodeText == nodeText);
  };

  const connect = (node1, node2, instanceKey = "main-container") => {
    if (node1 && node2) {
      getInstance(instanceKey).connect({
        source: node1,
        target: node2,
        anchor: "AutoDefault",
      });
    }
  };

  const getNodeIndex = (nodeText) => {
    return nodes.findIndex((node) => node.nodeText === nodeText);
  };

  const saveSelectedNode = (nodeText) => {
    setSelectedNode(nodeText);
  };

  const deleteNode = () => {
    if (selectedNode) {
      const instance = getInstance("main-container");

      const element = document.querySelector(`#${selectedNode}`);

      if (element) {
        instance.removeAllEndpoints(element);
        instance._removeElement(element);
      }
    }
  };

  const deleteAllConnections = () => {
    const instance = getInstance("main-container");
    const connections = instance.select().entries;
    connections.forEach((connection) =>
      connection.endpoints.forEach((endpoint) => {
        endpoint.deleteEveryConnection();
      })
    );
  };

  const createNodeOnElement = () => {
    if (selectedNode) {
      const { nodeID } = createNode(getRandomNodeText());
      const element1 = getHTMLElement(selectedNode);

      setTimeout(() => {
        const element2 = getHTMLElement(nodeID);
        connect(element2, element1);
      }, 50);
    }
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
    deleteNode,
    deleteAllConnections,
    createNodeOnElement,
  };

  return (
    <PlumbContext.Provider value={values}>{children}</PlumbContext.Provider>
  );
};

export { PlumbProvider, PlumbContext };
