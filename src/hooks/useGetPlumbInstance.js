import { useEffect, useState } from "react";
import { newInstance } from "@jsplumb/browser-ui";

const useGetPlumbInstance = (className) => {
  const [plumbInstance, setPlumbInstace] = useState();

  useEffect(() => {
    const element = document.querySelector(`.${className}`);
    if (element) setPlumbInstace(element);
  }, []);

  if (plumbInstance) {
    const instance = newInstance({
      container: plumbInstance,
      dragOptions: {
        containment: "parentEnclosed",
        containmentPadding: 10,
      },
    });

    instance.setContainer(plumbInstance);

    return instance;
  }
};

export default useGetPlumbInstance;
