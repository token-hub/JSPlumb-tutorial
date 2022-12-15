const getHTMLElement = (id) => {
  const element = document.querySelector(`#${id}`);
  return element ? element : null;
};

export default getHTMLElement;
