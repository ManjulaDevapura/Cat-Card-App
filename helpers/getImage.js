import request from "request";

export const getImage = async (requestBody) => {
  console.log("Requesting:" + requestBody.url);

  const responce = await new Promise((resolve, reject) => {
    // Send get request to receive image
    request.get(requestBody, (err, res, responceBody) => {
      if (err) {
        reject(err);
      } else {
        console.log("Received response with status:" + res.statusCode);
        resolve(responceBody);
      }
    });
  }).catch((err) => console.log(err));

  return responce;
};
