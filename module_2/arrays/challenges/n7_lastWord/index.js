const getLastWordLength = (sentence) => {
    return sentence
      .trim()
      .split(' ')
      .at(-1).length;
};
