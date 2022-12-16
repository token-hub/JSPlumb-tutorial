import randomstring from "randomstring";

const getRandomNodeText = () => {
  return `node-${randomstring.generate(4).toLowerCase()}`;
};

export default getRandomNodeText;
