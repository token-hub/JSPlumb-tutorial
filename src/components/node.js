import React, { useEffect, useState, useContext } from "react";
import { PlumbContext } from "../contexts/plumbContext";

const Node = ({ text, nodeID, instance }) => {
  const { getNodeIndex } = useContext(PlumbContext);
  const [node, setNode] = useState();

  useEffect(() => {
    const element = document.querySelector(`#${nodeID}`);
    if (element) setNode(element);
  }, []);

  useEffect(() => {
    if (node) {
      instance.addEndpoint(node, {
        endpoint: "Dot",
        anchor: "Top",
        maxConnections: 3,
        uniqueEndpoint: true,
        deleteEndpointsOnDetach: false,
      });
      instance.addEndpoint(node, {
        endpoint: "Dot",
        anchor: "Bottom",
        maxConnections: 3,
        uniqueEndpoint: true,
        deleteEndpointsOnDetach: false,
      });
      instance.addEndpoint(node, {
        endpoint: "Dot",
        anchor: "Left",
        maxConnections: 3,
        uniqueEndpoint: true,
        deleteEndpointsOnDetach: false,
      });
      instance.addEndpoint(node, {
        endpoint: "Dot",
        anchor: "Right",
        maxConnections: 3,
        uniqueEndpoint: true,
        deleteEndpointsOnDetach: false,
      });
    }
  }, [node]);

  const index = getNodeIndex(text);
  const value = 50 * index;
  let top = value ? value : 110;

  return (
    <div id={nodeID} className="node" style={{ left: "25px", top: `${top}px` }}>
      <span>{text}</span>
    </div>
  );
};

export default Node;
