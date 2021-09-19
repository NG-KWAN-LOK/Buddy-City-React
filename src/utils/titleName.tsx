const findTitle = (keys: string[]) => {
  var title = "";
  keys.forEach((key) => {
    title += key + "｜";
  });
  return title;
};

export default findTitle;
