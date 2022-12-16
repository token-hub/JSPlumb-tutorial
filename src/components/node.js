import React, { useEffect, useContext } from "react";
import { PlumbContext } from "../contexts/plumbContext";
import getEndPointOptions from "../utilities/getEndPointOptions";
import { CONNECTION } from "@jsplumb/browser-ui";

const Node = ({ text, nodeID, instance }) => {
  const { getNodeIndex, saveSelectedNode } = useContext(PlumbContext);

  useEffect(() => {
    const element = document.querySelector(`#${nodeID}`);

    if (element) {
      instance.addEndpoint(element, getEndPointOptions("Top"));
      instance.addEndpoint(element, getEndPointOptions("Bottom"));
      instance.addEndpoint(element, getEndPointOptions("Left"));
      instance.addEndpoint(element, getEndPointOptions("Right"));
      instance.bind(CONNECTION, (e) => {
        console.log("NODE CONNECTED");
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
    <div
      onClick={() => saveSelectedNode(nodeID)}
      id={nodeID}
      className="node"
      style={{ left: "25px", top: `${top}px` }}
    >
      <span>{text}</span>
    </div>
  );
};

export default Node;
