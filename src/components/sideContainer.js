import React, { useContext } from "react";
import { PlumbContext } from "../contexts/plumbContext";
import useCreateNode from "../hooks/useCreateNode";
import getRandomNodeText from "../utilities/getRandomNodeText";

const SideContainer = () => {
  const { createNode } = useContext(PlumbContext);

  const handleCreateElement = () => {
    createNode(getRandomNodeText());
  };

  return (
    <>
      <button className="control-button" onClick={handleCreateElement}>
        Add Element
      </button>
      <button className="control-button" onClick={() => alert("clicked")}>
        Delete Element
      </button>
    </>
  );
};

export default SideContainer;
