export const getRequestParams = (say, width, height, color, size) => {
  // Format and concatenate parameters to create url in following format
  // https://cataas.com/cat/says/Hi%20There?width=500&amp;height=800&amp;c=Cyan&amp;s=150
  return {
    url:
      "https://cataas.com/cat/says/" +
      say +
      "?width=" +
      width +
      "&height=" +
      height +
      "&color" +
      color +
      "&s=" +
      size,
    encoding: "binary",
  };
};
