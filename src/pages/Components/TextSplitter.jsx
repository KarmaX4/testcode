const splitWords = (text, count) => {
  if (typeof text !== "string") {
    return "";
  }

  const words = text?.split(" ");
  const result = [];
  let line = "";

  for (const word of words) {
    if ((line + " " + word).length < count) {
      line += (line ? " " : "") + word;
    } else {
      result?.push(line);
      line = word;
    }
  }

  if (line) {
    result?.push(line);
  }

  return result.join("\n");
};

const TextSplitter = ({ titleText, count }) => splitWords(titleText, count);
export default TextSplitter;
