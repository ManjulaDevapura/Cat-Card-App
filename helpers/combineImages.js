import { getImage } from "./getImage.js";
import blend from "@mapbox/blend";
import { writeFile } from "fs";
import { join } from "path";

export const combineImages = async (imageArray, width, height) => {
  // Combine images using buffered image array
  blend(
    imageArray,
    { width: width, height: height, format: "jpeg" },
    (err, data) => {
      // set path to save the file with file name and extension
      const fileOut = join(process.cwd(), `/cat-card.jpg`);

      // save the file
      writeFile(fileOut, data, "binary", (err) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log("The file was saved!");
      });
    }
  );
};
