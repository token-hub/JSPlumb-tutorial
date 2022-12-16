import React, { useContext, useEffect } from "react";

import { PlumbContext } from "../contexts/plumbContext";

const MainContainer = () => {
  const { createInstance, connect, nodes } = useContext(PlumbContext);

  useEffect(() => {
    const element = document.querySelector(`.main-container`);
    if (element) createInstance("main-container", element);
  }, []);

  //   connect(
  //     "main-container",
  //     getHTMLElement(node1.nodeID),
  //     getHTMLElement(node2.nodeID)
  //   );
  console.log(nodes);
  return <>{nodes.map((node) => node.node)}</>;
};

export default MainContainer;
