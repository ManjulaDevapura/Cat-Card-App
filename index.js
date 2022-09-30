import minimist from "minimist";
import { getImage } from "./helpers/getImage.js";
import { combineImages } from "./helpers/combineImages.js";
import { getRequestParams } from "./helpers/getRequestParams.js";

// get values from command and override following values
let {
  greeting = "Hello",
  who = "You",
  width = 400,
  height = 500,
  color = "Pink",
  size = 100,
} = minimist(process.argv.slice(2));

// Get both images and combine them together
const getImages = async (firstImageReq, secondImageReq) => {
  // Retrieve first image
  const firstImage = await getImage(firstImageReq);
  if (!firstImage) {
    console.log("First image not received, will stop the process");
    return;
  }

  // Retrieve second image
  const secondImage = await getImage(secondImageReq);
  if (!secondImage) {
    console.log("Second image not received, will stop the process");
    return;
  }

  // Add both images to buffer
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

  // send buffer array to combine together
  combineImages(imageArray, width * 2, height);
};

// Get formatted url to receive the images
const firstReqParam = getRequestParams(greeting, width, height, color, size);
const secondReqParam = getRequestParams(who, width, height, color, size);

// call getImages method get both images and combine them together
getImages(firstReqParam, secondReqParam);
