import minimist from "minimist";
import { getImage } from "./helpers/getImage.js";
import { combineImages } from "./helpers/combineImages.js";
import { getRequestParams } from "./helpers/getRequestParams.js";

// node index.js --greeting  "Hello" --who  "You" --width  400 --height  500 --color  "Red" --size  100
let {
  greeting = "Hello",
  who = "You",
  width = 400,
  height = 500,
  color = "Pink",
  size = 100,
} = minimist(process.argv.slice(2));

const getImages = async (firstImageReq, secondImageReq) => {
  const firstImage = await getImage(firstImageReq);
  if (!firstImage) {
    console.log("First image not received, will stop the process");
    return;
  }

  const secondImage = await getImage(secondImageReq);
  if (!secondImage) {
    console.log("Second image not received, will stop the process");
    return;
  }

  const firstImageBuffer = {
    buffer: new Buffer.from(firstImage, "binary"),
    x: 0,
    y: 0,
  };

  const secondImageBuffer = {
    buffer: new Buffer.from(secondImage, "binary"),
    x: width,
    y: 0,
  };

  const imageArray = [firstImageBuffer, secondImageBuffer];

  combineImages(imageArray, width * 2, height);
};

const firstReqParam = getRequestParams(greeting, width, height, color, size);
const secondReqParam = getRequestParams(who, width, height, color, size);

getImages(firstReqParam, secondReqParam);
