import React, { useEffect, useRef } from "react";
import { newInstance } from "@jsplumb/browser-ui";

const Node = ({ text, nodeID }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const element = document.querySelector(`#${nodeID}`);
    if (element) nodeRef.current = element;
  }, [nodeRef.current]);

  if (nodeRef.current) {
    const instance = newInstance({
      container: nodeRef.current,
      dragOptions: {
        containment: "parentEnclosed",
      },
    });

    instance.addEndpoint(nodeRef.current, {
      endpoint: "Dot",
      maxConnections: 3,
      uniqueEndpoint: true,
      deleteEndpointsOnDetach: false,
    });
  }

  return (
    <div id={nodeID} className="node">
      <span>{text}</span>
    </div>
  );
};

export default Node;
