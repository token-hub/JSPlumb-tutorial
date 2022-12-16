import React, { useEffect, useState, useContext } from "react";
import { PlumbContext } from "../contexts/plumbContext";

const Node = ({ text, nodeID, instance }) => {
  const { getNodeIndex } = useContext(PlumbContext);

  useEffect(() => {
    const element = document.querySelector(`#${nodeID}`);
    if (element) {
      instance.addEndpoint(element, {
        endpoint: "Dot",
        anchor: "Top",
        maxConnections: 3,
        uniqueEndpoint: true,
        deleteEndpointsOnDetach: false,
      });
      instance.addEndpoint(element, {
        endpoint: "Dot",
        anchor: "Bottom",
        maxConnections: 3,
        uniqueEndpoint: true,
        deleteEndpointsOnDetach: false,
      });
      instance.addEndpoint(element, {
        endpoint: "Dot",
        anchor: "Left",
        maxConnections: 3,
        uniqueEndpoint: true,
        deleteEndpointsOnDetach: false,
      });
      instance.addEndpoint(element, {
        endpoint: "Dot",
        anchor: "Right",
        maxConnections: 3,
        uniqueEndpoint: true,
        deleteEndpointsOnDetach: false,
      });
    }
  }, []);

  const main = document.querySelector(`.main-container`);

  let top = 50;

  if (main) {
    const index = getNodeIndex(text);
    // console.log(index, text);
    // top = index > -1 ? (index == 0 ? 50 : 50 * index + 2) : 50;

    if (index > -1) {
      if (index == 0) {
        top = 50;
      } else {
        top = 50 * (index + 1);
      }
    } else {
      top = 50;
    }
  }

  return (
    <div id={nodeID} className="node" style={{ left: "25px", top: `${top}px` }}>
      {/* <div id={nodeID} className="node"> */}
      <span>{text}</span>
    </div>
  );
};

export default Node;
