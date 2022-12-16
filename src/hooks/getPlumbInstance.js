import { newInstance } from "@jsplumb/browser-ui";

const getPlumbInstance = (className) => {
  // useEffect(() => {
  //   const element = document.querySelector(`.${className}`);
  //   if (element) setPlumbInstace(element);
  // }, []);

  const element = document.querySelector(`.${className}`);

  if (element) {
    const instance = newInstance({
      container: element,
      dragOptions: {
        containment: "parentEnclosed",
        containmentPadding: 10,
      },
    });

    return instance;
  }
};

export default getPlumbInstance;
