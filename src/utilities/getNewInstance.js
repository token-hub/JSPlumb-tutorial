import { newInstance } from "@jsplumb/browser-ui";

const getNewInstance = (element) => {
  const instance = newInstance({
    container: element,
    dragOptions: {
      containment: "parentEnclosed",
      containmentPadding: 10,
    },
  });

  instance.setContainer(element);

  return instance;
};

export default getNewInstance;
